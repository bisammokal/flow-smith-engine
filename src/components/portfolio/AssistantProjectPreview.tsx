import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight, Bot, Check, Clock3, Mail, Search, CalendarDays, Zap } from 'lucide-react';
import assistantWorkflow from '@/assets/case-study-ai-assistant-architecture.png';
import { identity } from '@/data/portfolio';
import './assistant-project-preview.css';

// Approval pilot: only Project 2 uses this presentation.
const results = [
  { value: '52+', label: 'hours saved / month', icon: Clock3 },
  { value: '70%', label: 'less email workload', icon: Mail },
  { value: '38%', label: 'faster task execution', icon: Zap },
];

function Results({ compact = false }: { compact?: boolean }) {
  return <div className={`ap-results ${compact ? 'ap-results-compact' : ''}`}>
    {results.map(({ value, label, icon: Icon }) => <div key={label}><Icon size={18} aria-hidden="true" /><strong>{value}</strong><span>{label}</span></div>)}
  </div>;
}

export function AssistantProjectCard() {
  return <Link to="/projects/2" className="ap-card">
    <div className="ap-card-image">
      <img src={assistantWorkflow} alt="Built AI personal assistant workflow connecting email, follow-ups, Slack and a master orchestrator" loading="lazy" />
      <span className="ap-card-label">02 / AI PERSONAL ASSISTANT</span>
      <span className="ap-card-arrow"><ArrowUpRight size={21} /></span>
    </div>
    <Results compact />
    <div className="ap-card-copy">
      <h3>A founder’s admin, on autopilot.</h3>
      <p>Scattered email, tasks & follow-ups <ArrowRight size={14} aria-hidden="true" /> one connected AI assistant.</p>
      <span className="ap-card-link">See the problem, build & results <ArrowUpRight size={16} /></span>
    </div>
  </Link>;
}

const changes = [
  { label: 'Email', before: 'Replies delayed by days', after: 'Near-instant responses', icon: Mail },
  { label: 'Follow-ups', before: 'Manual & often missed', after: 'Automatically handled', icon: CalendarDays },
  { label: 'Research', before: 'Hours per task', after: 'Minutes per task', icon: Search },
];

export function AssistantProjectDetail() {
  return <article className="ap-page p-container">
    <Link to="/projects" className="p-text-link"><ArrowLeft size={16} /> All projects</Link>
    <header className="ap-heading">
      <p className="p-eyebrow">AI PERSONAL ASSISTANT / SOLO FOUNDER</p>
      <h1>Less admin.<br /><span>52+ hours back every month.</span></h1>
      <p>I connected a founder’s email, tasks, research and scheduling into one AI assistant.</p>
      <div className="ap-context"><span>Built for a solo founder</span><span>Delivered in 60 days</span></div>
    </header>
    <Results />

    <section className="ap-section" aria-labelledby="assistant-problem">
      <div className="ap-section-heading"><span className="p-eyebrow">01 / THE PAIN POINT</span><h2 id="assistant-problem">Too much coordination. Not enough focus.</h2></div>
      <p className="ap-section-intro">The founder spent 3–5 hours a day switching tasks. Replies, follow-ups and research kept pulling attention away from the business.</p>
      <div className="ap-comparison">
        <div className="ap-comparison-head"><span>Everyday work</span><span>Before</span><span>After</span></div>
        {changes.map(({ label, before, after, icon: Icon }) => <div className="ap-comparison-row" key={label}>
          <span className="ap-task"><Icon size={19} aria-hidden="true" />{label}</span>
          <span className="ap-before">{before}</span>
          <span className="ap-after"><Check size={16} aria-hidden="true" />{after}</span>
        </div>)}
      </div>
    </section>

    <section className="ap-section" aria-labelledby="assistant-process">
      <div className="ap-section-heading"><span className="p-eyebrow">02 / WHAT I BUILT</span><h2 id="assistant-process">One assistant. Connected responsibilities.</h2></div>
      <div className="ap-build-steps">
        <div><span>1</span><h3>Map the bottlenecks</h3><p>Audited tasks, communication and research; identified 19 operational gaps.</p></div>
        <div><span>2</span><h3>Connect specialist agents</h3><p>Linked email, tasks, memory, research and calendar workflows.</p></div>
        <div><span>3</span><h3>Coordinate the work</h3><p>A central assistant orchestrates execution, updates and reminders.</p></div>
      </div>
      <figure className="ap-workflow">
        <div className="ap-workflow-heading"><Bot size={18} aria-hidden="true" /><span>The actual workflow</span><a href={assistantWorkflow} target="_blank" rel="noopener noreferrer">View full size <ArrowUpRight size={15} /></a></div>
        <a href={assistantWorkflow} target="_blank" rel="noopener noreferrer" aria-label="Open the original AI personal assistant workflow screenshot"><img src={assistantWorkflow} alt="AI assistant implementation: connected email, follow-up and Slack assistants with a master orchestrator" loading="lazy" /></a>
        <figcaption><span>Email & tasks</span><ArrowRight size={15} aria-hidden="true" /><strong>AI orchestration</strong><ArrowRight size={15} aria-hidden="true" /><span>Updates & follow-ups</span></figcaption>
      </figure>
    </section>

    <section className="ap-section ap-outcome" aria-labelledby="assistant-outcome">
      <div><span className="p-eyebrow">03 / THE OUTCOME</span><h2 id="assistant-outcome">More execution.<br />Less mental overhead.</h2><p>Routine work moved into a connected system. The founder regained time, reduced email workload and stopped relying on memory for follow-ups.</p></div>
      <blockquote><p>“I feel like I finally hired my first employee — except this one works 24/7, never forgets anything, and never gets tired.”</p><cite>Client feedback · Solo founder</cite></blockquote>
    </section>
    <div className="ap-end"><Link className="p-text-link" to="/projects">Explore more projects <ArrowRight size={17} /></Link><a className="p-button" href={identity.upwork} target="_blank" rel="noopener noreferrer">Hire me on Upwork <ArrowUpRight size={17} /></a></div>
  </article>;
}
