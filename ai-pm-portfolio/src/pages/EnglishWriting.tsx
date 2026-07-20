import React from 'react';
import './EnglishWriting.css';

const soloWork = [
  {
    title: "When Fakes Go Viral: Pop Mart\u2019s Labubu and the Global Toy Supply Crunch",
    link: 'https://voiceofcontext.substack.com/p/when-fakes-go-viral-pop-marts-labubu?utm_source=publication-search',
    desc: 'How a viral blind-box toy exposed the fragility of global IP supply chains — tracing the counterfeit crisis behind Pop Mart\'s breakout moment and what it reveals about manufacturing, demand, and brand protection.',
    role: 'Sole Author',
  },
];

const contributingWork = [
  {
    title: 'China AI Monitor: Community Experiments, Platform Integrations, and IPO Moves',
    link: 'https://voiceofcontext.substack.com/p/inside-chinas-ai-race-community-experiments',
    desc: 'A dispatch tracking the latest moves in China\'s AI race — from grassroots community adoption to big-platform integrations and capital market activity.',
    role: 'Research, synthesis, and drafting of Part 1',
  },
  {
    title: 'MAGA Hats from China: The Rise and Fall of Trump\'s Unlikely Supplier',
    link: 'https://voiceofcontext.substack.com/p/maga-hats-from-china-the-rise-and',
    desc: 'The story of Chinese factories that became the backbone of American political merchandise — and what happened when the trade winds shifted.',
    role: 'Source outreach, pre-interviews, and drafting based on interview content',
  },
  {
    title: 'The Escalating Food Delivery War in China',
    link: 'https://voiceofcontext.substack.com/p/the-escalating-food-delivery-war',
    desc: 'Inside the intensifying battle between Meituan, Eleme, and new entrants rewriting the rules of on-demand delivery in the world\'s largest market.',
    role: 'Research and editorial framework',
  },
];

const meshySites = [
  {
    title: 'Tutorials',
    link: 'https://www.meshy.ai/tutorials',
    desc: 'Step-by-step guides for 3D AI generation workflows — from text-to-3D to texture mapping.',
    tag: 'Main Site',
  },
  {
    title: 'User Stories',
    link: 'https://www.meshy.ai/blog/category/user-stories',
    desc: 'Case studies and interviews showcasing how creators and teams use Meshy in production.',
    tag: 'Blog',
  },
  {
    title: '3D Printing',
    link: 'https://www.meshy.ai/blog/category/3d-printing',
    desc: 'Exploring the intersection of AI-generated 3D models and physical fabrication.',
    tag: 'Blog',
  },
  {
    title: 'Game Development',
    link: 'https://www.meshy.ai/blog/category/game-development',
    desc: 'How game developers integrate AI 3D assets into their pipelines and workflows.',
    tag: 'Blog',
  },
  {
    title: 'Documentation',
    link: 'https://docs.meshy.ai/en',
    desc: 'Full product documentation — API references, feature guides, and integration specs.',
    tag: 'Independent Site',
  },
  {
    title: 'Help Center',
    link: 'https://help.meshy.ai/en/',
    desc: 'User-facing support knowledge base — FAQs, troubleshooting, and onboarding guides.',
    tag: 'Independent Site',
  },
];

const EnglishWriting = () => {
  return (
    <div className="ew-page">

      {/* Publication Card */}
      <div className="ew-publication">
        <div className="ew-pub-text">
          <div className="ew-pub-label">Publication</div>
          <h2 className="ew-pub-name">Voice of Context</h2>
          <p className="ew-pub-desc">
            A Substack for international readers navigating China's fast-changing business and tech landscape — through direct voices, original interviews, and sharp editorial analysis covering AI, consumer trends, geopolitics, and more.
          </p>
        </div>
        <a
          href="https://voiceofcontext.substack.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="ew-pub-btn"
        >
          Visit Substack →
        </a>
      </div>

      {/* Solo Work */}
      <section className="ew-section">
        <div className="ew-section-header">
          <span className="ew-tag">Solo</span>
          <h2 className="ew-section-title">Independent Work</h2>
        </div>
        {soloWork.map((article, i) => (
          <a
            key={i}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="ew-card ew-card-solo"
          >
            <div className="ew-card-role">{article.role}</div>
            <h3 className="ew-card-title">{article.title}</h3>
            <p className="ew-card-desc">{article.desc}</p>
            <span className="ew-card-read">Read article →</span>
          </a>
        ))}
      </section>

      {/* Contributing Work */}
      <section className="ew-section">
        <div className="ew-section-header">
          <span className="ew-tag">Contributing</span>
          <h2 className="ew-section-title">Contributing Work</h2>
        </div>
        <div className="ew-contrib-list">
          {contributingWork.map((article, i) => (
            <a
              key={i}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="ew-card ew-card-contrib"
            >
              <div className="ew-card-top">
                <h3 className="ew-card-title">{article.title}</h3>
                <span className="ew-card-read">→</span>
              </div>
              <p className="ew-card-desc">{article.desc}</p>
              <div className="ew-card-role-pill">{article.role}</div>
            </a>
          ))}
        </div>
      </section>

      {/* Meshy Content */}
      <section className="ew-section">
        <div className="ew-section-header">
          <span className="ew-tag">Professional</span>
          <h2 className="ew-section-title">Content at Meshy</h2>
        </div>
        <p className="ew-meshy-intro">
          As SEO/GEO & Content Growth lead at Meshy, I independently managed content across four site categories — blog, tutorials, docs, and help center — covering strategy, writing, localization, and publication.
        </p>
        <div className="ew-meshy-grid">
          {meshySites.map((site, i) => (
            <a
              key={i}
              href={site.link}
              target="_blank"
              rel="noopener noreferrer"
              className="ew-meshy-card"
            >
              <div className="ew-meshy-tag">{site.tag}</div>
              <h3 className="ew-meshy-title">{site.title}</h3>
              <p className="ew-meshy-desc">{site.desc}</p>
              <span className="ew-card-read">View site →</span>
            </a>
          ))}
        </div>
      </section>

    </div>
  );
};

export default EnglishWriting;
