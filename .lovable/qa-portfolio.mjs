import { createServer } from 'vite';
import { renderToStaticMarkup } from 'react-dom/server';
import React from 'react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { existsSync } from 'node:fs';
import assert from 'node:assert/strict';

// Structural rendering checks only; these do not replace browser layout/interaction QA.
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom', optimizeDeps: { noDiscovery: true, include: [] } });
const originalError = console.error;
console.error = (...args) => { if (!String(args[0]).includes('useLayoutEffect does nothing on the server')) originalError(...args); };
try {
  const pages = await server.ssrLoadModule('/src/components/portfolio/Portfolio.tsx');
  const paths = [['/', 'PortfolioHome'], ['/about', 'PortfolioAbout'], ['/services', 'PortfolioServices'], ['/projects', 'PortfolioProjects'], ['/book-call', 'PortfolioContact'], ['/reviews', 'PortfolioReviews'], ...[1,2,3,4,5,6,7].map(id => [`/projects/${id}`, 'PortfolioProject']), ['/projects/999', 'PortfolioProject'], ['/missing', 'PortfolioNotFound']];
  let images = 0;
  let homeWordCount = 0;
  for (const [path, name] of paths) {
    const html = renderToStaticMarkup(React.createElement(MemoryRouter, { initialEntries: [path] }, React.createElement(Routes, null, React.createElement(Route, { path: path.startsWith('/projects/') ? '/projects/:id' : path, element: React.createElement(pages[name]) }))));
    assert.equal((html.match(/<h1[ >]/g) || []).length, 1, `${path}: exactly one h1`);
    assert.ok(html.includes('Bisam Ali'), `${path}: personal identity`);
    assert.ok(!html.includes('undefined'), `${path}: no undefined content`);
    const mainText = (html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1] || '').replace(/<[^>]*>/g, ' ').replace(/&[^;]+;/g, ' ');
    const wordCount = mainText.trim().split(/\s+/).length;
    if (path === '/') homeWordCount = wordCount;
    if (path === '/services') {
      assert.ok(!html.includes('<details'), 'Services content is visible without accordions');
      assert.ok(wordCount < homeWordCount, 'Services copy is shorter than home copy');
      assert.equal((html.match(/class="p-services-card"/g) || []).length, 6, 'Six concise service cards');
      assert.ok(/href="\/services"[^>]*>Services/.test(html), 'Header Services link opens the services page');
      console.log(`Services: ${wordCount} words; home: ${homeWordCount} words.`);
    }
    const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
    assert.equal(new Set(ids).size, ids.length, `${path}: unique ids`);
    for (const match of html.matchAll(/<img[^>]*src="([^"]+)"/g)) {
      const src = match[1].split('?')[0];
      assert.ok(existsSync(`.${src}`) || existsSync(`public${src}`), `${path}: image exists ${src}`);
      images++;
    }
    if (path === '/') for (const section of ['about', 'skills', 'projects', 'process', 'contact']) assert.ok(ids.includes(section));
    if (path === '/') assert.ok(/href="\/about"[^>]*>More about my approach/.test(html), 'Home approach link points to About');
    if (path === '/about') {
      for (const text of ['My Mission', 'What I Do', 'Why Clients Choose Me', 'My Vision', 'My Impact', 'Countries I Serve', 'I Build AI Systems']) assert.ok(html.includes(text));
      assert.ok(!/Our Mission|What We Do|Choose Us|Our Vision|Our Impact|Countries We Serve/.test(html));
    }
    if (path === '/projects/5') {
      for (const text of ['Multi-Platform Social Media Scheduler', 'AI Automation Engineer', 'December 13, 2025', 'Airtable', '15-minute', 'Category ID 27', 'Posted shorts', 'Google Sheets3', '9 AM and 7 PM', 'Social Media Audit']) {
        assert.ok(html.includes(text), `Project 5 preserves supplied detail: ${text}`);
      }
      assert.ok(html.includes('case-study-social-scheduler.jpg'), 'Project 5 uses the original supplied screenshot');
    }
    if (path === '/projects/6') {
      for (const text of ['AI-Powered Outreach Engine', 'AI Automation Engineer', 'December 2, 2025', 'Reoon', 'Gemini', '20+', '5,000+', '99%', 'Client feedback', 'AI Agent Development', 'outreach-planner-verification.png', 'outreach-scraper-enrichment.png']) {
        assert.ok(html.includes(text), `Project 6 preserves supplied detail: ${text}`);
      }
      assert.ok(html.includes('href="/projects/7"'), 'Project 6 links onward to Project 7');
    }
    if (path === '/projects') assert.ok(html.includes('href="/projects/6"'), 'Project archive links to Project 6');
    if (path === '/projects/7') {
      for (const text of ['AI-Powered Email Triage System', 'AI Automation Engineer', 'December 2, 2025', 'GPT-4.1-mini', 'Needs Approval', 'Already Responded', '10 minutes', '90%', 'under 2 minutes', 'Create a draft', 'AI Classifier', 'email-triage-workflow.png']) {
        assert.ok(html.includes(text), `Project 7 preserves supplied detail: ${text}`);
      }
      assert.ok(html.includes('href="/projects/1"'), 'Project 7 wraps next-project navigation to Project 1');
    }
    if (path === '/projects') assert.ok(html.includes('href="/projects/7"'), 'Project archive links to Project 7');
    if (path === '/book-call') { assert.ok(html.includes('Prepare email enquiry')); assert.ok(html.includes('press send there')); }
    console.log(`PASS ${path}`);
  }
  console.log(`${paths.length} routes rendered; ${images} image references checked.`);
} finally { console.error = originalError; await server.close(); }
