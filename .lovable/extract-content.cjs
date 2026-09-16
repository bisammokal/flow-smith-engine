const fs = require('fs');
const ts = require('typescript');
const read = path => ts.createSourceFile(path, fs.readFileSync(path, 'utf8'), ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
function value(node) {
  if (ts.isStringLiteral(node) || ts.isNumericLiteral(node)) return ts.isNumericLiteral(node) ? Number(node.text) : node.text;
  if (ts.isArrayLiteralExpression(node)) return node.elements.map(value).filter(v => v !== undefined);
  if (ts.isObjectLiteralExpression(node)) return Object.fromEntries(node.properties.filter(ts.isPropertyAssignment).map(p => [p.name.getText().replace(/["']/g, ''), value(p.initializer)]).filter(([,v]) => v !== undefined));
}
function arrays(path) {
  const result = {};
  function visit(n) { if (ts.isVariableDeclaration(n) && n.initializer && ts.isArrayLiteralExpression(n.initializer)) result[n.name.getText()] = value(n.initializer); ts.forEachChild(n, visit); }
  visit(read(path)); return result;
}
const services = arrays('src/pages/Services.tsx');
const reviews = arrays('src/pages/Reviews.tsx').testimonials;
const projects = arrays('src/pages/CaseStudyIndex.tsx').caseStudies;
const details = {};
function textOf(n) {
  if (ts.isJsxText(n)) return n.text.replace(/\s+/g, ' ');
  if (ts.isJsxExpression(n)) return n.expression && ts.isStringLiteral(n.expression) ? n.expression.text : '';
  if (ts.isJsxElement(n) || ts.isJsxFragment(n)) return n.children.map(textOf).join('');
  return '';
}
function visit(n) {
  if (ts.isBinaryExpression(n) && n.operatorToken.kind === ts.SyntaxKind.AmpersandAmpersandToken && /^caseStudyId === [1-4]$/.test(n.left.getText())) {
    const id = n.left.getText().slice(-1); const sections = [];
    function sectionWalk(s) {
      if (ts.isJsxElement(s) && s.openingElement.tagName.getText() === 'section') {
        const paragraphs = []; const tables = []; let title = '';
        function collect(c) {
          if (ts.isJsxElement(c)) {
            const tag = c.openingElement.tagName.getText();
            const text = textOf(c).trim();
            if (/^(motion\.)?h[12]$/.test(tag) && text && !title) title = text;
            if (/^(motion\.)?p$/.test(tag) && text) paragraphs.push(text);
          }
          if (ts.isArrayLiteralExpression(c)) { const data = value(c); if (data.length && data.every(x => typeof x === 'object' || typeof x === 'string')) tables.push(data); }
          ts.forEachChild(c, collect);
        }
        collect(s); if (title) sections.push({ title, paragraphs, tables });
        return;
      }
      ts.forEachChild(s, sectionWalk);
    }
    sectionWalk(n.right); details[id] = sections;
  }
  ts.forEachChild(n, visit);
}
visit(read('src/pages/CaseStudy.tsx'));
fs.mkdirSync('src/data', { recursive: true });
const businessStats = arrays('src/pages/About.tsx').stats;
fs.writeFileSync('src/data/existing-content.json', JSON.stringify({ services, reviews, projects, details, businessStats }, null, 2));
console.log('Preserved content:', projects.length, 'projects;', reviews.length, 'reviews;', Object.keys(services).join(', '));
