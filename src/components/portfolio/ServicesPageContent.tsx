import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Workflow, Bot, Mail, ShoppingBag, Plug, Mic, Check } from 'lucide-react';
import { identity } from '@/data/portfolio';
import './services-page.css';

const capabilities = [
  {
    icon: Workflow,
    title: 'Workflow & CRM automation',
    description: 'I connect your everyday tools so leads, tasks and customer updates move without repetitive data entry.',
    examples: ['Lead capture, qualification & follow-ups', 'Client onboarding & task handoffs'],
    tools: ['n8n', 'Make', 'Zapier', 'Zoho / ClickUp'],
  },
  {
    icon: Bot,
    title: 'AI agents & knowledge chatbots',
    description: 'I build assistants that work with your documents and business tools to answer questions and carry out useful tasks.',
    examples: ['Document-based website support', 'Personal assistants & connected AI agents'],
    tools: ['OpenAI', 'Google Gemini', 'RAG'],
  },
  {
    icon: Mail,
    title: 'Email & outreach systems',
    description: 'I organize inboxes and connect prospect research, email verification and personalized outreach in one workflow.',
    examples: ['Email classification & drafts for approval', 'Verified lead lists & tailored icebreakers'],
    tools: ['Gmail', 'Reoon API', 'Google Sheets'],
  },
  {
    icon: ShoppingBag,
    title: 'Content & e-commerce automation',
    description: 'I automate the work behind your content channels and store, from scheduled publishing to customer notifications.',
    examples: ['Social publishing & content queues', 'Orders, inventory & customer updates'],
    tools: ['Shopify', 'WooCommerce', 'WordPress'],
  },
  {
    icon: Plug,
    title: 'Custom integrations & reporting',
    description: 'I connect tools through APIs and webhooks, then bring the data together in reports your team can actually use.',
    examples: ['App-to-app data sync & custom connections', 'Live dashboards & scheduled reports'],
    tools: ['APIs / Webhooks', 'Google Sheets', 'Data Studio'],
  },
  {
    icon: Mic,
    title: 'Voice & appointment workflows',
    description: 'I build voice-enabled assistants and scheduling workflows that help customers reach the right next step.',
    examples: ['Voice enquiries & lead qualification', 'Appointment scheduling & follow-ups'],
    tools: ['Conversational AI', 'Calendar integrations'],
  },
];

const selectedWork = [
  { id: 4, category: 'KNOWLEDGE & SUPPORT', title: 'A chatbot connected to Google Drive', description: 'Document processing, retrieval and answers grounded in company knowledge.' },
  { id: 6, category: 'PROSPECTING & OUTREACH', title: 'From business discovery to qualified leads', description: 'AI research, email verification and personalized introduction lines.' },
  { id: 7, category: 'EMAIL & OPERATIONS', title: 'An inbox that knows what needs approval', description: 'Automatic sorting, routine replies and human review for sensitive messages.' },
];

export function ServicesPageContent() {
  return (
    <div className="p-services-page p-container">
      <header className="p-services-intro">
        <p className="p-eyebrow">Services</p>
        <h1>Practical automation.<br />Built around your work.</h1>
        <p>I design and build AI systems that connect your tools, handle repetitive tasks and make everyday operations easier to manage.</p>
      </header>

      <section aria-labelledby="services-capabilities">
        <h2 id="services-capabilities" className="p-services-section-title">What I can help with</h2>
        <div className="p-services-card-grid">
          {capabilities.map(({ icon: Icon, title, description, examples, tools }) => (
            <article className="p-services-card" key={title}>
              <span className="p-services-icon"><Icon size={24} aria-hidden="true" /></span>
              <h3>{title}</h3>
              <p>{description}</p>
              <ul>{examples.map(example => <li key={example}><Check size={15} aria-hidden="true" />{example}</li>)}</ul>
              <div className="p-tags" aria-label="Relevant tools">{tools.map(tool => <span key={tool}>{tool}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="p-services-work" aria-labelledby="services-work">
        <div className="p-services-section-heading">
          <h2 id="services-work" className="p-services-section-title">A few examples from my work</h2>
          <Link className="p-text-link" to="/projects">All projects <ArrowRight size={16} /></Link>
        </div>
        <div className="p-services-work-grid">
          {selectedWork.map(project => (
            <Link className="p-services-work-card" to={`/projects/${project.id}`} key={project.id}>
              <p className="p-eyebrow">{project.category}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span className="p-text-link">View project <ArrowUpRight size={16} /></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="p-services-contact" aria-labelledby="services-next-step">
        <div><h2 id="services-next-step">Have a workflow in mind?</h2><p>Tell me what you do manually and which tools you use.</p></div>
        <a className="p-button" href={identity.upwork} target="_blank" rel="noopener noreferrer">Hire me on Upwork <ArrowUpRight size={17} /></a>
      </section>
    </div>
  );
}
