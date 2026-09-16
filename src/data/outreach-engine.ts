import plannerScreenshot from '@/assets/outreach-planner-verification.png';
import enrichmentScreenshot from '@/assets/outreach-scraper-enrichment.png';

export const outreachProject = {
  id: 6,
  tag: 'AI Outreach / Lead Generation',
  title: 'AI-Powered Outreach Engine',
  image: plannerScreenshot,
  gallery: [enrichmentScreenshot],
  category: 'AI systems',
  shortTitle: 'From Maps discovery to a ready-to-contact lead.',
  tools: ['n8n', 'Google Gemini', 'LangChain Agents', 'Reoon API', 'Google Sheets', 'JavaScript / Regex'],
  summary: 'A four-part n8n ecosystem that discovers businesses on Google Maps, verifies email contacts, qualifies prospects with AI and writes personalized icebreakers into a centralized Google Sheets CRM.',
  challenge: 'Sales teams spent 15+ hours each week searching for business data and copying it between disconnected tools. Unverified email addresses increased bounce risk, while generic outreach struggled to earn replies.',
  approach: 'I built four specialized workflows: a Gemini search planner, a Maps scraper, a mandatory Reoon email-verification step and a multi-agent SDR that reads websites, qualifies prospects and creates conversational icebreakers.',
  result: '100× prospecting velocity',
  before: ['50 manually researched leads per week', 'Unverified emails and domain-reputation risk', 'Generic outreach across disconnected tools'],
  after: ['100× prospecting velocity: 50 manual leads/week to 5,000+ automated', '99% verified email data quality', 'Personalized icebreakers for every lead'],
  color: '',
};

export const outreachEngine = {
  role: 'AI Automation Engineer',
  published: 'December 2, 2025',
  publishedISO: '2025-12-02',
  deliverables: ['AI Agent Development', 'AI Bot', 'Lead Generation Chatbot'],
  sections: [
    {
      title: 'Project Overview',
      paragraphs: [
        'AI-Driven Cold Outreach Automation: From Maps Scraping to Personalized Icebreakers',
        'I designed an autonomous n8n ecosystem for the sales prospecting lifecycle: business discovery, contact validation, AI-driven qualification and personalized sales copy generation. The pipeline turns raw Maps data into sales intelligence that the team can use immediately.',
        'The goal was to eliminate manual Google Maps prospecting, reduce email bounce risk and support large-scale, personalized outreach that lowers Customer Acquisition Cost (CAC).',
      ],
      tables: [],
    },
    {
      title: 'Client Challenges',
      paragraphs: ['The existing prospecting process created operational inefficiencies and risk.'],
      tables: [[
        { title: 'Manual prospecting', description: 'Sales teams spent 15+ hours weekly searching for business data and copying it by hand.' },
        { title: 'High bounce risk', description: 'Scraped emails were unverified, putting domain reputation at risk.' },
        { title: 'Generic outreach', description: 'A lack of personalization contributed to low reply rates.' },
        { title: 'Fragmented tools', description: 'Multiple disconnected tools made the workflow inefficient.' },
      ]],
    },
    {
      title: 'Business Impact Goals',
      paragraphs: ['The client wanted an autonomous, centralized pipeline with verification and personalization built in.'],
      tables: [[
        'Discover thousands of leads per week without manual Maps research.',
        'Target 99% email deliverability through API verification.',
        'Analyze websites, qualify leads against the Ideal Customer Profile (ICP) and generate unique icebreakers.',
        'Centralize the entire pipeline in one Google Sheets CRM.',
        'Reduce Customer Acquisition Cost by eliminating manual list building.',
      ]],
    },
    {
      title: 'Phase 1: Strategic Planning — The Manager',
      paragraphs: ['I implemented a Gemini AI Planner to translate targeting criteria into a search strategy.'],
      tables: [[
        'Generate 20+ optimized Google Maps search queries from the target niche and location.',
        'Keep searches broad and non-repetitive to improve discovery coverage.',
        'Pass the search strategy into the extraction workflow.',
      ]],
    },
    {
      title: 'Phase 2: Deep Extraction — The Scraper',
      paragraphs: ['A dedicated scraper extracts raw business data from Google Maps results and cleans the contact information.'],
      tables: [[
        'Use HTTP scraping nodes to retrieve business and website data.',
        'Parse and clean phone numbers, emails and social links from HTML using JavaScript and Regex.',
        'Filter out non-business domains, including directories and social media sites.',
        'Move the cleaned contacts into the verification pipeline.',
      ]],
    },
    {
      title: 'Phase 3: Verification & Hygiene — The Gatekeeper',
      paragraphs: ['I integrated the Reoon API for real-time email checks. Verification is a mandatory step before a lead can proceed to outreach.'],
      tables: [[
        'Check each email’s risk, validity and verification status through Reoon.',
        'Automatically sort leads and update their status in the pipeline.',
        'Allow only leads marked “Verified” to proceed to outreach.',
      ]],
    },
    {
      title: 'Phase 4: AI Enrichment & Personalization — The SDR',
      paragraphs: ['A two-tier AI system separates website understanding from lead qualification.'],
      tables: [[
        { stage: 'Website understanding', description: 'The first AI agent reads and summarizes the business website.' },
        { stage: 'Lead qualification', description: 'A second agent evaluates the business against the Ideal Customer Profile.' },
        { stage: 'Personalized outreach', description: 'AI creates a unique, conversational icebreaker based on the company’s specific services.' },
        { stage: 'CRM handoff', description: 'The enriched, qualified lead and its introduction line flow into Google Sheets.' },
      ]],
    },
    {
      title: 'Technology Stack',
      paragraphs: [],
      tables: [[
        { category: 'Orchestration & data', tools: 'n8n, Google Sheets, JavaScript / Regex' },
        { category: 'AI & intelligence', tools: 'Google Gemini (PaLM), LangChain Agents' },
        { category: 'Integrations', tools: 'Reoon API, HTTP scraping nodes' },
      ]],
    },
    {
      title: 'Measurable Results',
      paragraphs: [],
      tables: [[
        { outcome: 'Prospecting velocity', description: '100× improvement: 50 manual leads per week compared with 5,000+ automatically generated leads.' },
        { outcome: 'Lead quality', description: '99% verified emails, reducing bounce risk and helping protect domain reputation.' },
        { outcome: 'Personalization at scale', description: 'AI-generated icebreakers for every lead, with increased reply rates.' },
        { outcome: 'Cost efficiency', description: 'Eliminated manual list building and reduced Customer Acquisition Cost.' },
      ]],
    },
    {
      title: 'Unique Technical Achievements',
      paragraphs: [],
      tables: [[
        { achievement: 'Multi-agent decisions', description: 'Separate reading and judging agents support accurate lead qualification.' },
        { achievement: 'Dynamic query generation', description: 'AI creates broad, non-repetitive searches from the targeting criteria.' },
        { achievement: 'Connected data flow', description: 'Autonomous transfer from Maps discovery through verification and enrichment to Google Sheets.' },
      ]],
    },
    {
      title: 'Business Value Delivered',
      paragraphs: [],
      tables: [[
        { value: 'SDR focus', description: 'Sales teams shifted from data entry to closing deals.' },
        { value: 'Scalability', description: 'The system can be adapted to different niches and locations with minimal configuration.' },
        { value: 'Competitive edge', description: 'Personalized outreach runs at a scale that manual prospect research cannot sustain.' },
      ]],
    },
    {
      title: 'Client Feedback',
      paragraphs: ['“This automation effectively cloned our best research analyst. The AI qualification is surprisingly accurate—it filters out the bad fits better than our VAs did. We wake up to a spreadsheet full of qualified, verified leads with intro lines ready to go.”'],
      tables: [],
    },
    {
      title: 'Why This Project Succeeded',
      paragraphs: [],
      tables: [[
        { factor: 'Strategic architecture', description: 'Four specialized, interconnected workflows share the prospecting workload.' },
        { factor: 'AI depth', description: 'Gemini supports both search strategy and personalized outreach.' },
        { factor: 'Data integrity', description: 'Email verification is a mandatory gate for every lead.' },
      ]],
    },
  ],
};
