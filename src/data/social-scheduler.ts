// Project 5 details supplied by Bisam Ali. Keep implementation goals separate from outcomes.
export const socialScheduler = {
  role: 'AI Automation Engineer',
  published: 'December 13, 2025',
  publishedISO: '2025-12-13',
  deliverables: ['Social Media Audit', 'Publishing Automation'],
  sections: [
    {
      title: 'Project Overview',
      paragraphs: [
        'Scheduled Content Pipeline for YouTube, Instagram, Facebook, and LinkedIn',
        'I designed a comprehensive, dual-path n8n workflow to distribute short-form videos and image/text posts across YouTube, Instagram Reels, LinkedIn and Facebook. The system pulls pre-staged content from Google Sheets and Google Drive, uses Airtable to stage Instagram content, and publishes through each platform’s API.',
        'Separate scheduling paths handle the different content types. Automatic status updates and file movement keep published content out of the queue, preventing duplicate publishing.',
      ],
      tables: [],
    },
    {
      title: 'Client Challenges',
      paragraphs: ['Daily publishing across four platforms created significant operational friction.'],
      tables: [[
        { title: 'Inconsistent posting times', description: 'Manual scheduling missed optimal engagement windows.' },
        { title: 'Repetitive uploading', description: 'Videos and posts had to be uploaded to four platforms every day.' },
        { title: 'Content organization', description: 'Chaotic tracking made it difficult to distinguish queued content from published posts.' },
        { title: 'API complexity', description: 'Platform-specific requirements, including Instagram Reels media containers, made integration difficult.' },
      ]],
    },
    {
      title: 'Business Impact Goals',
      paragraphs: ['The workflow was engineered around three operational goals.'],
      tables: [[
        'Enable hands-free daily publishing for both short-form videos and image/text posts.',
        'Centralize content management in Google Sheets and Google Drive, with Airtable staging for Instagram.',
        'Run both publishing paths at 9 AM and 7 PM daily, and track each published item to avoid repeat uploads.',
      ]],
    },
    {
      title: 'My Solution Approach: Dual-Path n8n Workflow',
      paragraphs: [
        'I separated video distribution from image/text publishing so each content type follows the correct platform requirements. Both paths use scheduled triggers at 9 AM and 7 PM.',
        'The video path handles YouTube uploads and Instagram Reels container creation. The image/text path validates the image reference before publishing to Facebook and LinkedIn. Each path records its completed posts.',
      ],
      tables: [],
    },
    {
      title: 'Path 1: Short-Form Video — YouTube & Instagram',
      paragraphs: ['A dedicated video pipeline connects scheduled content selection, platform publishing and cleanup.'],
      tables: [[
        { step: '01 / Trigger', description: 'Schedule Trigger runs at 9 AM and 7 PM.' },
        { step: '02 / Selection', description: 'Google Sheets retrieves the next video with “post” status.' },
        { step: '03 / YouTube upload', description: 'The workflow creates a direct Google Drive link, downloads the video and uploads it to YouTube using Category ID 27.' },
        { step: '04 / Instagram staging', description: 'Post details are staged in Airtable. The Facebook Graph API creates an Instagram Reels media container.' },
        { step: '05 / Reels publishing', description: 'The workflow waits 15 minutes after container creation, then publishes the Instagram content.' },
        { step: '06 / Tracking & cleanup', description: 'The original video is moved to the “Posted shorts” Google Drive folder, and its Google Sheets status is updated to “posted”.' },
      ]],
    },
    {
      title: 'Path 2: Image/Text Posts — Facebook & LinkedIn',
      paragraphs: ['A second pipeline manages image-backed posts independently of the video queue.'],
      tables: [[
        { step: '01 / Trigger', description: 'Schedule Trigger1 runs at 9 AM and 7 PM.' },
        { step: '02 / Selection & validation', description: 'Google Sheets2 retrieves the next post with “Ready” status. A Filter checks that an image file reference (Gdrive ID) is present.' },
        { step: '03 / Download', description: 'HTTP Request downloads the image from Google Drive.' },
        { step: '04 / Publishing', description: 'The image/text branches into publishing through the Facebook Graph API and sharing an update on LinkedIn.' },
        { step: '05 / Tracking', description: 'Google Sheets3 updates the row’s Status to “Posted”, preventing it from being selected for republishing.' },
      ]],
    },
    {
      title: 'Technology Stack',
      paragraphs: [],
      tables: [[
        { category: 'Workflow & orchestration', tools: 'n8n, Schedule Trigger' },
        { category: 'Data management', tools: 'Google Sheets, Airtable' },
        { category: 'File management', tools: 'Google Drive, HTTP Request' },
        { category: 'Publishing APIs', tools: 'YouTube, Facebook Graph API for Facebook and Instagram, LinkedIn' },
      ]],
    },
    {
      title: 'Results',
      paragraphs: [],
      tables: [[
        { outcome: 'Consistency', description: 'Reliable twice-daily publishing on the configured schedule.' },
        { outcome: 'Time savings', description: 'Eliminated hours of manual scheduling and uploading.' },
        { outcome: 'Tracking integrity', description: 'Automatic status updates and file movement prevent duplicate posts.' },
        { outcome: 'Multi-platform sync', description: 'Distinct publishing requirements, including Instagram Reels container logic, are managed within one n8n workflow.' },
      ]],
    },
  ],
};
