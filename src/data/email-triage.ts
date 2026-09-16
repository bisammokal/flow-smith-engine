import workflowImage from '@/assets/email-triage-workflow.png';

export const emailTriageProject = {
  id: 7,
  tag: 'AI Email / Inbox Automation',
  title: 'AI-Powered Email Triage System',
  image: workflowImage,
  gallery: [],
  category: 'AI systems',
  shortTitle: 'An organized inbox. A thoughtful response.',
  tools: ['n8n', 'GPT-4.1-mini', 'Gmail API', 'LangChain', 'Structured Output Parsers'],
  summary: 'An intelligent inbox workflow that classifies incoming emails, applies Gmail labels and separates routine auto-replies from sensitive responses prepared as drafts for human review.',
  challenge: 'Sales, support and unwanted messages were mixed together, making important leads easy to miss. Routine questions waited for replies, manual labeling consumed time, and the team was concerned about sending inaccurate AI responses to sensitive enquiries.',
  approach: 'I built an n8n workflow with separate classification and response agents powered by GPT-4.1-mini. Category labels organize the inbox, while sensitivity-based routing sends general replies automatically and saves approval-required responses as Gmail drafts. Emails classified as Others are labeled without generating a reply.',
  result: 'Human review for sensitive replies',
  before: ['Mixed sales, support and unwanted messages', 'Routine questions left unanswered for hours', 'Manual labeling and concern about sensitive auto-replies'],
  after: ['100% of approval-required responses routed to Gmail Drafts', 'General inquiries answered automatically', 'Automatic category labels keep the inbox organized'],
  color: '',
};

export const emailTriage = {
  role: 'AI Automation Engineer',
  published: 'December 2, 2025',
  publishedISO: '2025-12-02',
  deliverables: ['AI Agent Development', 'AI Classifier', 'AI Bot'],
  sections: [
    {
      title: 'Project Overview',
      paragraphs: [
        'AI-Powered Email Triage & Auto-Response System with Human-in-the-Loop Safety',
        'I built an intelligent inbox management system using n8n and GPT-4.1-mini. It reads incoming emails, classifies them as Sales, Support or Others, and determines whether a response can be handled automatically or needs human approval.',
        'Routine enquiries receive an AI-generated response and an Already Responded label. Sensitive messages follow a separate path that prepares a Gmail draft for review instead of sending automatically. This gives the team faster handling of everyday questions while retaining oversight of sensitive communication.',
      ],
      tables: [],
    },
    {
      title: 'Client Challenges',
      paragraphs: ['The team needed to organize incoming communication without losing control of what was sent on its behalf.'],
      tables: [[
        { challenge: 'Inbox clutter', description: 'Sales, support and spam messages were mixed together, causing critical leads to be missed.' },
        { challenge: 'Response latency', description: 'Routine questions waited for hours while staff focused on complex issues.' },
        { challenge: 'Auto-reply risk', description: 'The client was concerned that AI could invent answers to financial or sensitive support questions.' },
        { challenge: 'Manual labeling', description: 'Staff spent valuable time tagging and sorting emails by hand.' },
      ]],
    },
    {
      title: 'Business Impact Goals',
      paragraphs: ['The system was designed to reduce inbox workload while keeping human approval in the response process where needed.'],
      tables: [[
        'Automatically organize incoming emails into Sales, Support and Others.',
        'Enable round-the-clock automated responses to general inquiries.',
        'Prepare sensitive responses as drafts for a person to review and send.',
        'Target a 90% reduction in manual triage time.',
      ]],
    },
    {
      title: 'Phase 1: Infrastructure Setup',
      paragraphs: ['A manually triggered initialization workflow creates the Gmail labels required by the triage and response paths.'],
      tables: [[
        { label: 'Sales', purpose: 'Organizes sales-related enquiries.' },
        { label: 'Support', purpose: 'Organizes support-related enquiries.' },
        { label: 'Needs Approval', purpose: 'Identifies messages requiring human oversight.' },
        { label: 'Others', purpose: 'Organizes messages outside the sales and support response paths.' },
        { label: 'Already Responded', purpose: 'Marks threads that have received an automated reply.' },
      ]],
    },
    {
      title: 'Phase 2: Intelligent Classification',
      paragraphs: ['A Gmail Trigger polls the inbox every 10 minutes. The classifier agent uses GPT-4.1-mini to analyze each incoming message and produce structured routing information.'],
      tables: [[
        { classification: 'Category', values: 'Sales, Support or Others.' },
        { classification: 'Sensitivity', values: 'General or Needs Approval.' },
        { classification: 'Structured output', values: 'A schema-validated response provides consistent fields for downstream filtering and routing.' },
      ]],
    },
    {
      title: 'Phase 3: Dynamic Labeling',
      paragraphs: ['I connected the classifier’s output to Gmail’s existing label IDs so the workflow could organize messages automatically.'],
      tables: [[
        'Read the AI-determined category from label_name.',
        'Retrieve the available Gmail labels and match the category to the corresponding label ID.',
        'Apply the matching Sales, Support or Others label to the incoming thread.',
      ]],
    },
    {
      title: 'Phase 4: Conditional Response Engine',
      paragraphs: ['The response path depends on both category and sensitivity. Classification and reply generation use separate agents and prompts.'],
      tables: [[
        { path: 'General inquiries', behavior: 'A specialized AI Responder writes a polite response. The Send a message node sends it, then the thread is tagged Already Responded.' },
        { path: 'Needs Approval', behavior: 'A Sensitive AI Responder prepares the reply and passes it to Create a draft. A human reviews the Gmail draft before sending it.' },
        { path: 'Others', behavior: 'The message is labeled but excluded from reply generation, avoiding unnecessary AI calls and API costs.' },
      ]],
    },
    {
      title: 'Technology Stack',
      paragraphs: [],
      tables: [[
        { tool: 'n8n', purpose: 'Workflow orchestration and integration logic.' },
        { tool: 'Gmail API', purpose: 'Inbox monitoring, label management, drafting and sending.' },
        { tool: 'LangChain Nodes', purpose: 'Structured AI agent operations.' },
        { tool: 'GPT-4.1-mini', purpose: 'Email classification and response generation.' },
        { tool: 'Structured Output Parsers', purpose: 'Schema validation for reliable classification and routing fields.' },
        { tool: 'Switch Nodes', purpose: 'Route messages to the appropriate response path based on sensitivity.' },
      ]],
    },
    {
      title: 'Measurable Results',
      paragraphs: ['The project reports a response time of under 2 minutes for general inquiries. The inbox trigger polls every 10 minutes, so this figure is not a guaranteed arrival-to-reply time; a message may wait for the next poll before processing starts.'],
      tables: [[
        { result: 'Human review', description: '100% of responses flagged Needs Approval are routed to Gmail Drafts rather than sent automatically.' },
        { result: 'Organization', description: 'Automatic category labeling keeps the inbox structured without manual tagging.' },
        { result: 'Routine replies', description: 'General inquiries receive an automated response and an Already Responded label.' },
      ]],
    },
    {
      title: 'Unique Technical Achievements',
      paragraphs: [],
      tables: [[
        { achievement: 'Separate classifier and responder agents', description: 'Distinct prompts keep category and sensitivity decisions separate from reply writing.' },
        { achievement: 'Draft-versus-send routing', description: 'Approval-required responses stop at a draft, while general inquiries follow the automatic-send path.' },
        { achievement: 'Structured classification data', description: 'Strict schema validation helps prevent malformed AI output from breaking workflow categorization and routing.' },
      ]],
    },
  ],
};
