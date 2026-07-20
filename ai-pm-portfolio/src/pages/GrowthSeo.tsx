import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../contexts/LanguageContext';
import Reveal from '../components/Reveal';
import './GrowthSeo.css';

const Flow = ({ steps }: { steps: string[] }) => (
  <div className="gs-flow">
    {steps.map((s, i) => (
      <div key={i} className="gs-flow-step">
        <span className="gs-flow-dot" />
        <span>{s}</span>
      </div>
    ))}
  </div>
);

type Section = {
  num: string;
  title: string;
  sub: [string, string];
  desc: [string, string];
  flow?: string[];
  capsTitle?: string;
  caps?: string[];
  builtTitle?: string;
  builtItems?: string[];
  quote?: [string, string];
  result?: [string, string];
};

const sections: Section[] = [
  {
    num: '01',
    title: 'AI Content Intelligence System',
    sub: [
      '从选题到发布，建立可规模化的内容增长流水线',
      'Building a scalable content growth pipeline from topic to publish',
    ],
    desc: [
      '传统内容团队依赖人工判断选题、避免蚕食、匹配搜索意图。我搭建了一套 AI 辅助的 Content Operating System，将内容生产从经验驱动转变为数据驱动。',
      'Traditional content teams rely on manual judgment for topics, cannibalization, and search intent. I built an AI-assisted Content Operating System that transforms content production from experience-driven to data-driven.',
    ],
    flow: [
      'Keyword Discovery',
      'Search Intent Analysis',
      'SERP & Competitor Research',
      'Content Gap Detection',
      'Content Brief Generation',
      'Internal Linking Strategy',
      'Publishing & Performance Tracking',
    ],
    caps: [
      'AI-assisted keyword research',
      'Search intent classification',
      'Content cannibalization detection',
      'Competitor content gap analysis',
      'Blog lifecycle management',
      'Internal linking optimization',
      'SEO content quality control',
    ],
    builtTitle: 'Built for Meshy',
    builtItems: [
      '内容索引体系',
      'Keyword Ledger',
      'Topic Cluster',
      'Content Mapping',
      'Internal Link Graph',
    ],
    quote: [
      '帮助团队判断 Create / Update / Expand / Avoid，而不是简单增加文章数量。',
      'Enabling the team to decide Create / Update / Expand / Avoid — not just increase article count.',
    ],
    result: ['270+ 篇内容数据库 · 每周 10 篇上新', '270+ content database · 10 articles/week'],
  },
  {
    num: '02',
    title: 'SEO Automation & Competitive Intelligence',
    sub: [
      '将竞品分析从人工调研变成持续监控系统',
      'Turning competitor analysis from manual research into continuous monitoring',
    ],
    desc: [
      '我设计并维护 SEO Radar 工作流，实现 4 家头部竞品的自动化追踪——数据快照、结构监听、Gap 台账、发布后追踪。监控结论直接驱动选题与优化优先级。',
      'I designed and maintained the SEO Radar workflow for automated tracking of 4 key competitors — data snapshots, structure monitoring, gap ledger, post-publish tracking. Insights directly drive topic and optimization priorities.',
    ],
    flow: [
      'Competitor Snapshot',
      'Organic Traffic Trends',
      'Keyword Movement',
      'Top Pages Analysis',
      'SERP Changes',
      'Growth Opportunity Report',
    ],
    capsTitle: 'Monitoring Framework',
    caps: [
      'Organic traffic trends',
      'Keyword visibility',
      'Top ranking pages',
      'SERP movement',
      'Competitor content strategy',
      'AI Search presence',
    ],
    builtTitle: 'Auto-generated Assets',
    builtItems: [
      'Weekly SEO Report',
      'Opportunity Detection',
      'Page Diagnosis',
      'Competitor Strategy Alerts',
    ],
  },
  {
    num: '03',
    title: 'GEO · Generative Engine Optimization',
    sub: [
      '让品牌内容被 AI 搜索引擎理解、引用和推荐',
      'Optimizing brands for the AI Search era',
    ],
    desc: [
      '搜索正在从"用户搜索关键词"转变为"用户向 AI 提问并获得答案"。我建立 GEO 优化体系，让品牌内容更容易被 ChatGPT、Perplexity、Google AI Overview 理解和引用。',
      'Search is shifting from "users search keywords" to "users ask AI and get answers." I built a GEO system to make brand content more easily understood and cited by ChatGPT, Perplexity, and Google AI Overview.',
    ],
    flow: [
      'Entity Optimization',
      'Answer Structure',
      'FAQ Engineering',
      'Comparison Content',
      'Knowledge Graph Building',
      'AI Citation Monitoring',
    ],
    capsTitle: 'Built Systems',
    caps: [
      'AI-friendly FAQ framework',
      'Entity-first writing rules',
      'Self-contained answer format',
      'Competitor comparison strategy',
      'AI citation tracking',
    ],
    quote: [
      '创造机器能理解、提取和推荐的内容。',
      'Create content that machines can understand, extract and recommend.',
    ],
    result: ['LLM 答案优先推荐率 87% · 30 天 GEO 曝光 +30%', '87% LLM recommendation rate · GEO visibility +30% in 30 days'],
  },
  {
    num: '04',
    title: 'Multilingual SEO Intelligence',
    sub: [
      '通过数据驱动的本地化扩展全球 SEO',
      'Scaling global SEO through data-driven localization',
    ],
    desc: [
      '多语言 SEO 不等于翻译。我建立了一套 Keyword Research → Glossary → Localization → Validation 体系，确保每个语言市场不仅被翻译，而是被搜索到。',
      "Multilingual SEO is not translation. I built a Keyword Research → Glossary → Localization → Validation system to ensure every language market is not just translated — it's searched.",
    ],
    flow: [
      'English Keyword',
      'Translation Candidate',
      'Keep / Translate Decision',
      'Native Search Validation',
      'Ahrefs Reverse Check',
      'Glossary Update',
    ],
    capsTitle: 'Glossary System',
    caps: [
      'Product terminology',
      'Technical terms',
      'Search keywords',
      'Brand entities',
      'Keep / Translate rules',
      'Terminology governance',
      'Localization QA',
    ],
    result: ['24 种语言 · 6 大语族 · 双层术语架构', '24 languages · 6 language families · dual-layer glossary'],
  },
  {
    num: '05',
    title: 'AI Knowledge Management',
    sub: [
      '将团队知识转化为可复用的增长资产',
      'Turning team knowledge into reusable growth assets',
    ],
    desc: [
      '我使用 AI 建立结构化知识系统，沉淀从 SEO Playbook 到本地化标准的全部方法论，让 AI Agent 和团队成员能够快速复用已有经验。',
      'I built structured knowledge systems with AI, codifying everything from SEO Playbooks to Localization Standards — enabling AI Agents and team members to quickly reuse existing expertise.',
    ],
    flow: [
      'Knowledge Base',
      'Skills',
      'Workflows',
      'Automation',
      'Repeatable Execution',
    ],
    capsTitle: 'Codified Knowledge',
    caps: [
      'SEO Playbooks',
      'Content Guidelines',
      'Glossary Rules',
      'Competitor Intelligence',
      'Technical SEO Knowledge',
      'Localization Standards',
    ],
    result: ['13 个自研 AI Agent Skill · 记忆库 + 定时任务', '13 custom AI Agent Skills · memory store + scheduled tasks'],
  },
  {
    num: '06',
    title: 'Data + Engineering for Marketers',
    sub: [
      '以轻量工程能力驱动增长工作流',
      'Marketing workflows powered by lightweight engineering',
    ],
    desc: [
      '我结合 Python、APIs、HTML/CSS 和 Git workflow，解决增长团队中的重复劳动——不需要全职工程师，但能像工程师一样解决问题。',
      'I combine Python, APIs, HTML/CSS and Git workflow to eliminate repetitive work in growth teams — no full-time engineer needed, but solving problems like one.',
    ],
    capsTitle: 'Examples',
    caps: [
      'Automated SEO reporting',
      'GSC / GA4 data pipelines',
      'Bulk content auditing',
      'Image generation pipelines',
      'SEO data processing scripts',
      'Direct PR submissions',
    ],
  },
];

const stats = [
  { value: '1,500w+', label: ['单月自然搜索曝光（GSC）', 'Monthly organic impressions (GSC)'] as [string, string] },
  { value: '67.7w', label: ['单月自然搜索点击', 'Monthly organic clicks'] as [string, string] },
  { value: '87%', label: ['LLM 答案优先推荐率', 'LLM recommendation rate'] as [string, string] },
  { value: '24', label: ['语言本地化覆盖', 'Languages localized'] as [string, string] },
];

const stack = [
  { area: 'AI Search', tools: 'ChatGPT / Perplexity / GEO Monitoring' },
  { area: 'SEO', tools: 'Ahrefs / Google Search Console / GA4' },
  { area: 'Content Intelligence', tools: 'LLM Workflows / Knowledge Base' },
  { area: 'Automation', tools: 'Python / APIs / Google Sheets' },
  { area: 'Localization', tools: 'Glossary System / OpenCC' },
  { area: 'Engineering', tools: 'HTML / CSS / Git / Vibe Coding' },
];

const GrowthSeo = () => {
  const { t } = useLang();

  return (
    <div className="gs-page">

      {/* ── Hero ── */}
      <Reveal>
        <section className="gs-hero">
          <span className="gs-label">Portfolio · Capabilities</span>
          <h1 className="gs-hero-title">AI-Powered Growth Systems</h1>
          <p className="gs-hero-sub">
            Building scalable organic growth engines with AI, automation and data
          </p>
          <p className="gs-hero-intro">
            {t(
              '我将 AI 作为增长基础设施，而不仅是内容生产工具。通过结合 LLM、SEO 数据、自动化工作流和知识管理系统，搭建可复用的增长系统，让内容策略、竞品研究、多语言扩展和搜索优化从人工经验转变为可持续运行的流程。',
              'I treat AI as growth infrastructure, not just a content production tool. By combining LLMs, SEO data, automated workflows, and knowledge management, I build reusable growth systems that transform content strategy, competitive research, multilingual expansion, and search optimization from manual expertise into sustainable processes.',
            )}
          </p>
        </section>
      </Reveal>

      {/* ── Case Study Stats ── */}
      <Reveal>
        <section className="gs-case">
          <div className="gs-case-header">
            <span className="gs-case-tag">Case Study · Meshy</span>
            <span className="gs-case-period">2026.6 – 2026.7</span>
          </div>
          <p className="gs-case-desc">
            {t(
              '在全球领先的 3D AI 生成平台，从策略到执行独立操盘全球 SEO、GEO 增长与内容体系。独立操盘 blog / tutorial（主站）、docs / help（独立站）内容及多个 landing page 优化。',
              'At a leading global 3D AI generation platform, independently driving global SEO, GEO growth and content systems from strategy to execution. Managing blog / tutorial (main site), docs / help (standalone sites), and landing page optimization.',
            )}
          </p>
          <div className="gs-stats">
            {stats.map((s, i) => (
              <div key={i} className="gs-stat">
                <div className="gs-stat-value">{s.value}</div>
                <div className="gs-stat-label">{t(s.label[0], s.label[1])}</div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* ── 6 Capability Sections ── */}
      {sections.map((sec) => (
        <Reveal key={sec.num}>
          <section className="gs-section">
            <div className="gs-section-top">
              <span className="gs-num">{sec.num}</span>
              <div>
                <h2 className="gs-section-title">{sec.title}</h2>
                <p className="gs-sub">{t(sec.sub[0], sec.sub[1])}</p>
              </div>
            </div>

            <p className="gs-desc">{t(sec.desc[0], sec.desc[1])}</p>

            {sec.flow && <Flow steps={sec.flow} />}

            {sec.caps && (
              <div className="gs-detail-block">
                <h4>{sec.capsTitle || 'Capabilities'}</h4>
                <div className="gs-chips">
                  {sec.caps.map((c) => (
                    <span key={c} className="gs-chip">{c}</span>
                  ))}
                </div>
              </div>
            )}

            {sec.builtItems && (
              <div className="gs-detail-block gs-built">
                <h4>{sec.builtTitle || 'Built for Meshy'}</h4>
                <div className="gs-chips">
                  {sec.builtItems.map((c) => (
                    <span key={c} className="gs-chip gs-chip-accent">{c}</span>
                  ))}
                </div>
              </div>
            )}

            {sec.quote && (
              <blockquote className="gs-quote">
                {t(sec.quote[0], sec.quote[1])}
              </blockquote>
            )}

            {sec.result && (
              <div className="gs-result">{t(sec.result[0], sec.result[1])}</div>
            )}
          </section>
        </Reveal>
      ))}

      {/* ── Stack Table ── */}
      <Reveal>
        <section className="gs-stack-section">
          <h2 className="gs-section-title">My AI Growth Stack</h2>
          <div className="gs-stack-table-wrap">
            <table className="gs-stack-table">
              <thead>
                <tr>
                  <th>Area</th>
                  <th>Tools</th>
                </tr>
              </thead>
              <tbody>
                {stack.map((row) => (
                  <tr key={row.area}>
                    <td>{row.area}</td>
                    <td>{row.tools}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </Reveal>

      {/* ── Philosophy ── */}
      <Reveal>
        <section className="gs-philosophy">
          <blockquote>
            {t(
              'AI 不是营销策略的替代品。真正的优势来自于设计 AI、数据和人类判断力协同工作的系统。',
              'AI is not a replacement for marketing strategy. The real advantage comes from designing systems where AI, data and human judgment work together.',
            )}
          </blockquote>
        </section>
      </Reveal>

      {/* ── Proof: Dify Rebuild ── */}
      <Reveal>
        <section className="gs-section gs-proof">
          <div className="gs-section-top">
            <span className="gs-num gs-num-proof">+</span>
            <div>
              <h2 className="gs-section-title">
                {t('Proof · 已在 Dify 上复刻', 'Proof · Rebuilt on Dify')}
              </h2>
              <p className="gs-sub">
                {t('方法论可迁移，系统可复现', 'Transferable methodology, reproducible systems')}
              </p>
            </div>
          </div>
          <p className="gs-desc">
            {t(
              '为验证方法论的可迁移性，我把上面的内容决策流程在 Dify 上重建为可运行的 workflow——「Content Brief Copilot」：输入任意选题，自动完成站内蚕食排查（RAG 检索 133 篇文章索引）→ 实时 SERP 竞争对位 → NEW / UPDATE / LONGTAIL / AVOID 判定 → 输出完整写作 brief 与内链执行清单。单次判定成本约 $0.003、延迟约 2 秒。',
              'To validate methodology transferability, I rebuilt the content decision workflow as a runnable Dify workflow — "Content Brief Copilot": input any topic, auto-complete on-site cannibalization check (RAG retrieval across 133 article index) → live SERP competitive mapping → NEW / UPDATE / LONGTAIL / AVOID verdict → output complete writing brief and internal linking checklist. Cost ~$0.003 per run, ~2s latency.',
            )}
          </p>
          <div className="gs-chips">
            <span className="gs-chip">9 {t('节点编排', 'Node Orchestration')}</span>
            <span className="gs-chip">RAG {t('蚕食排查', 'Cannibalization Check')}</span>
            <span className="gs-chip">{t('实时 SERP 对位', 'Live SERP Mapping')}</span>
            <span className="gs-chip">{t('条件分支判定', 'Conditional Branching')}</span>
            <span className="gs-chip">DSL {t('可复现', 'Reproducible')}</span>
          </div>
          <video
            className="gs-video"
            controls
            preload="metadata"
            poster={`${process.env.PUBLIC_URL}/images/dify-brief-copilot-poster.png`}
          >
            <source
              src={`${process.env.PUBLIC_URL}/videos/dify-brief-copilot-demo.mp4`}
              type="video/mp4"
            />
          </video>
          <div className="gs-proof-links">
            <a
              href={`${process.env.PUBLIC_URL}/files/seo-blog-content-brief-copilot.yml`}
              download
              className="gs-proof-btn"
            >
              {t('下载 Workflow DSL（YAML）', 'Download Workflow DSL (YAML)')}
            </a>
            <span className="gs-proof-note">Live demo available on request</span>
          </div>
        </section>
      </Reveal>

      {/* ── Closing ── */}
      <Reveal>
        <div className="gs-closing">
          <p className="gs-closing-line">
            {t(
              '我展示的不是「会用 AI」，而是会用 AI 建系统。',
              "What I demonstrate is not \"using AI\" — it's building systems with AI.",
            )}
          </p>
          <Link to="/contact" className="gs-cta">Contact Me →</Link>
        </div>
      </Reveal>
    </div>
  );
};

export default GrowthSeo;
