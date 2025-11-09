export const TechStackSection = () => {
  const technologies = [
    { name: "Zapier", logo: "/logos/zapier.png" },
    { name: "Make", logo: "/logos/make.png" },
    { name: "n8n", logo: "/logos/n8n.png" },
    { name: "OpenAI", logo: "/logos/openai.png" },
    { name: "Dialogflow", logo: "/logos/dialogflow.png" },
    { name: "ClickUp", logo: "/logos/clickup.svg" },
    { name: "Zoho", logo: "/logos/zoho.svg" },
    { name: "Shopify", logo: "/logos/shopify.svg" },
    { name: "WordPress", logo: "/logos/wordpress.png" },
    { name: "Google Sheets", logo: "/logos/google-sheets.png" },
    { name: "Slack", logo: "/logos/slack.png" },
    { name: "Gmail", logo: "/logos/gmail.png" },
  ];

  return (
    <section className="py-24 bg-gradient-dark overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tools We{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Use
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Powered by the best automation tools in the industry.
          </p>
        </div>

        {/* Infinite scrolling logos */}
        <div className="relative">
          <div className="logo-scroll">
            <div className="logo-scroll-content">
              {[...technologies, ...technologies].map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="logo-item bg-white/95 rounded-xl p-6 shadow-soft hover:shadow-medium transition-all flex items-center justify-center"
                >
                  <img
                    src={tech.logo}
                    alt={`${tech.name} logo`}
                    className="h-12 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
};
