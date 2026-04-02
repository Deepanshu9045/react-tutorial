import React from "react";

/* ------------------------------------------------------------------ */
/* Main Component */
/* ------------------------------------------------------------------ */

function SEOPage() {
  const examples = [
    {
      title: "1. What is SEO?",
      description:
        "SEO means Search Engine Optimization. It helps search engines understand your website so your pages can appear better in search results.",
      code: `SEO = Search Engine Optimization

Goal:
- improve visibility
- help search engines understand content
- increase organic traffic`,
      output: (
        <div>
          <p style={{ margin: 0 }}>
            SEO helps your website rank better and become easier to discover in
            search engines like Google.
          </p>
        </div>
      ),
    },

    {
      title: "2. Why SEO Matters",
      description:
        "Good SEO improves discoverability, traffic, content understanding, and search result appearance.",
      code: `Benefits of SEO:
- better visibility
- more organic traffic
- better page understanding
- improved user reach`,
      output: (
        <ul style={{ lineHeight: 1.8, paddingLeft: 20, margin: 0 }}>
          <li>More search visibility</li>
          <li>More organic visitors</li>
          <li>Better content understanding</li>
          <li>Better reach for your pages</li>
        </ul>
      ),
    },

    {
      title: "3. Basic SEO Elements",
      description:
        "A page usually needs a clear title, meta description, headings, readable content, clean URLs, and proper HTML structure.",
      code: `<title>React SEO Guide</title>
<meta name="description" content="Learn SEO basics" />
<h1>Main heading</h1>`,
      output: (
        <div style={{ lineHeight: 1.8 }}>
          <div>✅ Title tag</div>
          <div>✅ Meta description</div>
          <div>✅ Proper headings</div>
          <div>✅ Clean URL</div>
          <div>✅ Useful page content</div>
        </div>
      ),
    },

    {
      title: "4. SEO in SPA",
      description:
        "In a Single Page Application, content is often rendered with JavaScript after the page loads. That can make SEO harder than traditional server-rendered pages.",
      code: `SPA problem:
- one HTML file loads first
- content appears later with JavaScript
- search engines may not immediately see final content`,
      output: (
        <div>
          <p style={{ margin: 0 }}>
            SPA SEO can be weaker if page content, metadata, or routes are not
            properly handled.
          </p>
        </div>
      ),
    },

    {
      title: "5. Common SEO Problems in SPA",
      description:
        "Many SPAs have issues like missing meta tags per page, weak initial HTML, shared URLs, or content that only appears after JavaScript runs.",
      code: `Common SPA SEO issues:
- same title on all pages
- same meta description
- content loaded only after JS
- weak initial HTML
- bad route structure`,
      output: (
        <ul style={{ lineHeight: 1.8, paddingLeft: 20, margin: 0 }}>
          <li>Same metadata on every route</li>
          <li>JavaScript-only content rendering</li>
          <li>No unique URLs for screens</li>
          <li>Poor initial HTML</li>
          <li>Harder crawling/indexing</li>
        </ul>
      ),
    },

    {
      title: "6. SPA SEO Solution: Unique Routes",
      description:
        "Each important screen in an SPA should have its own real URL so search engines can treat it like a separate page.",
      code: `/              -> Home
/about         -> About
/services      -> Services
/contact       -> Contact`,
      output: (
        <div style={{ lineHeight: 1.8 }}>
          <div>✅ /</div>
          <div>✅ /about</div>
          <div>✅ /services</div>
          <div>✅ /contact</div>
        </div>
      ),
    },

    {
      title: "7. SPA SEO Solution: Page Metadata",
      description:
        "Every route should have its own title and description. In React apps this is often handled with Helmet or framework metadata APIs.",
      code: `document.title = "About Us";

<meta
  name="description"
  content="Learn more about our company"
/>`,
      output: (
        <div>
          <p style={{ margin: 0 }}>
            Each route should have a different title and meta description.
          </p>
        </div>
      ),
    },

    {
      title: "8. SPA SEO Solution: Pre-rendering / SSG",
      description:
        "For static pages like Home, About, Services, and Blog pages, pre-rendering or static generation is one of the best SEO solutions.",
      code: `Best for:
- landing pages
- about page
- service pages
- blog pages

Output:
HTML is ready before user opens page`,
      output: (
        <div style={{ lineHeight: 1.8 }}>
          <div>✅ Better for SEO</div>
          <div>✅ Faster first load</div>
          <div>✅ Search engines can read HTML more easily</div>
        </div>
      ),
    },

    {
      title: "9. SPA SEO Solution: SSR",
      description:
        "Server-Side Rendering generates HTML on the server before sending it to the browser. This improves SEO and also improves first content visibility.",
      code: `SSR:
Server prepares page HTML first
Then browser receives ready content`,
      output: (
        <div>
          <p style={{ margin: 0 }}>
            SSR is a strong solution when pages depend on dynamic data but still
            need SEO.
          </p>
        </div>
      ),
    },

    {
      title: "10. SPA SEO Solution: Structured Data",
      description:
        "Structured data helps search engines understand your page content more clearly and may improve search result appearance.",
      code: `{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "SEO in SPA"
}`,
      output: (
        <div>
          <p style={{ margin: 0 }}>
            Structured data is useful for articles, products, organizations,
            FAQs, and more.
          </p>
        </div>
      ),
    },

    {
      title: "11. Not Recommended as Main Solution",
      description:
        "Dynamic rendering exists, but Google describes it as a workaround, not the preferred long-term solution.",
      code: `Avoid depending mainly on:
- bot-only rendering
- outdated workaround setups

Prefer:
- SSR
- SSG
- pre-rendering`,
      output: (
        <div style={{ lineHeight: 1.8 }}>
          <div>❌ Dynamic rendering as main strategy</div>
          <div>✅ SSR / SSG / pre-rendering</div>
        </div>
      ),
    },

    {
      title: "12. Best Practice Summary",
      description:
        "For a React SPA, the best SEO setup is unique routes, route-level metadata, crawlable links, useful HTML content, and pre-rendering or SSR where needed.",
      code: `Best SPA SEO checklist:
- unique URL for each page
- unique title and meta description
- proper headings
- internal links
- pre-rendering or SSR
- structured data when useful`,
      output: (
        <ul style={{ lineHeight: 1.8, paddingLeft: 20, margin: 0 }}>
          <li>Unique routes</li>
          <li>Unique metadata</li>
          <li>Readable HTML content</li>
          <li>Internal linking</li>
          <li>SSR or SSG for important pages</li>
          <li>Structured data where relevant</li>
        </ul>
      ),
    },
  ];

  return (
    <div style={{ padding: 32, fontFamily: "Arial" }}>
      <h1>SEO and SEO in SPA</h1>

      <p>
        This page explains SEO basics, common SEO problems in Single Page
        Applications, and the best solutions used in modern React apps.
      </p>

      {examples.map((item, index) => (
        <section key={index} style={{ marginTop: 40 }}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>

          <pre style={codeStyle}>
            <code>{item.code}</code>
          </pre>

          <strong>Live Output:</strong>
          <div style={outputStyle}>{item.output}</div>
        </section>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Styles */
/* ------------------------------------------------------------------ */

const codeStyle = {
  background: "#1e1e1e",
  color: "#d4d4d4",
  padding: 16,
  borderRadius: 8,
  maxWidth: 700,
  whiteSpace: "pre-wrap",
};

const outputStyle = {
  marginTop: 10,
  padding: 12,
  border: "1px solid #ccc",
  borderRadius: 6,
  maxWidth: 700,
};

export default SEOPage;