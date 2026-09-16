import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight, Bot, Check, Clock3, Zap } from 'lucide-react';
import { identity, projects } from '@/data/portfolio';
import { visualCaseStudies, type VisualCaseStudy } from '@/data/visual-case-studies';
import './assistant-project-preview.css';
import './visual-project.css';

type Project = typeof projects[number];
const metricIcons = [Clock3, Check, Zap];

// Project 3's original primary asset shows the personal assistant. Its architecture
// image is the matching Yelp/Trustpilot workflow and is used for this presentation.
function workflowImages(project: Project) {
  return project.id === 3 ? [project.gallery[0]] : [project.image, ...project.gallery];
}

function Results({ data, compact = false }: { data: VisualCaseStudy; compact?: boolean }) {
  return <div className={`ap-results vp-results ${compact ? 'ap-results-compact' : ''}`}>
    {data.metrics.map(({ value, label }, index) => {
      const Icon = metricIcons[index];
      return <div key={label}><Icon size={18} aria-hidden="true" /><strong>{value}</strong><span>{label}</span></div>;
    })}
  </div>;
}

export function VisualProjectCard({ project }: { project: Project }) {
  const data = visualCaseStudies[project.id];
  return <Link to={`/projects/${project.id}`} className="ap-card vp-card">
    <div className="ap-card-image">
      <img src={workflowImages(project)[0]} alt={`${project.title} — actual workflow`} loading="lazy" />
      <span className="ap-card-label">0{project.id} / {project.tag.toUpperCase()}</span>
      <span className="ap-card-arrow"><ArrowUpRight size={21} /></span>
    </div>
    <Results data={data} compact />
    <div className="ap-card-copy">
      <h3>{data.cardTitle}</h3>
      <p>{data.cardBefore} <ArrowRight size={14} aria-hidden="true" /> {data.cardAfter}.</p>
      <span className="ap-card-link">See the problem, build & results <ArrowUpRight size={16} /></span>
    </div>
  </Link>;
}

export function VisualProjectDetail({ project }: { project: Project }) {
  const data = visualCaseStudies[project.id];
  const images = workflowImages(project);
  const next = projects[(projects.findIndex(item => item.id === project.id) + 1) % projects.length];
  return <article className="ap-page vp-page p-container">
    <Link to="/projects" className="p-text-link"><ArrowLeft size={16} /> All projects</Link>
    <header className="ap-heading">
      <p className="p-eyebrow">{project.title}</p>
      <h1>{data.headline}<br /><span>{data.highlight}</span></h1>
      <p>{project.summary}</p>
      <div className="ap-context">{data.context.map(context => <span key={context}>{context}</span>)}</div>
    </header>
    <Results data={data} />

    <section className="ap-section" aria-labelledby="project-problem">
      <div className="ap-section-heading"><span className="p-eyebrow">01 / THE PAIN POINT</span><h2 id="project-problem">{data.problemTitle}</h2></div>
      <p className="ap-section-intro">{project.challenge}</p>
      <div className="ap-comparison" role="table" aria-label="Before and after the automation">
        <div className="ap-comparison-head" role="row"><span role="columnheader">Everyday work</span><span role="columnheader">Before</span><span role="columnheader">After</span></div>
        {data.changes.map(change => <div className="ap-comparison-row" role="row" key={change.label}>
          <span className="ap-task" role="rowheader">{change.label}</span>
          <span className="ap-before" role="cell">{change.before}</span>
          <span className="ap-after" role="cell"><Check size={16} aria-hidden="true" />{change.after}</span>
        </div>)}
      </div>
    </section>

    <section className="ap-section" aria-labelledby="project-build">
      <div className="ap-section-heading"><span className="p-eyebrow">02 / WHAT I BUILT</span><h2 id="project-build">{data.buildTitle}</h2></div>
      <p className="ap-section-intro">{data.buildIntro}</p>
      <div className={`ap-build-steps ${data.steps.length === 4 ? 'vp-four-steps' : ''}`}>
        {data.steps.map((step, index) => <div key={step.title}><span>{index + 1}</span><h3>{step.title}</h3><p>{step.description}</p></div>)}
      </div>
      <div className={`vp-workflows ${images.length > 1 ? 'vp-workflows-pair' : ''}`}>
        {images.map((image, index) => <figure className="ap-workflow" key={image}>
          <div className="ap-workflow-heading"><Bot size={18} aria-hidden="true" /><span>{images.length > 1 ? (index === 0 ? 'Planning & verification' : 'Extraction & enrichment') : 'The actual workflow'}</span><a href={image} target="_blank" rel="noopener noreferrer">Full size <ArrowUpRight size={15} /></a></div>
          <a href={image} target="_blank" rel="noopener noreferrer" aria-label={`Open original ${project.title} workflow ${index + 1}`}><img src={image} alt={`${project.title}: ${images.length > 1 ? (index === 0 ? 'AI planning and email verification' : 'website enrichment and contact extraction') : 'system architecture and connected workflow nodes'}`} loading="lazy" /></a>
        </figure>)}
      </div>
      <div className="vp-flow" aria-label="Workflow summary"><span>{data.flow[0]}</span><ArrowRight size={16} aria-hidden="true" /><strong>{data.flow[1]}</strong><ArrowRight size={16} aria-hidden="true" /><span>{data.flow[2]}</span></div>
      <p className="vp-implementation-note">{data.note}</p>
      <div className="p-tags vp-tools" aria-label="Project tools">{project.tools.map(tool => <span key={tool}>{tool}</span>)}</div>
    </section>

    <section className={`ap-section ap-outcome ${data.quote ? '' : 'vp-outcome-simple'}`} aria-labelledby="project-outcome">
      <div><span className="p-eyebrow">03 / THE OUTCOME</span><h2 id="project-outcome">{data.outcomeTitle}</h2><p>{data.outcome}</p></div>
      {data.quote && <blockquote><p>“{data.quote}”</p><cite>Client feedback</cite></blockquote>}
    </section>
    <div className="ap-end"><Link className="p-text-link" to={`/projects/${next.id}`}>Next project <ArrowRight size={17} /></Link><a className="p-button" href={identity.upwork} target="_blank" rel="noopener noreferrer">Hire me on Upwork <ArrowUpRight size={17} /></a></div>
  </article>;
}
