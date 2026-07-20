import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import './Home.css';

const workCards = [
  { to: '/growth-seo', accent: 'pc-1', title: 'AI Growth Systems', sub: 'AI + Automation + Data 驱动的可规模化增长系统' },
  { to: '/business-analysis', accent: 'pc-2', title: '商业分析', sub: '美团 Keeta：AI VOC 工具链与指标体系' },
];

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="hero-section d-flex flex-column justify-content-center align-items-center text-center">
        {/* Avatar */}
        <div className="hero-avatar">
          <img
            src={`${process.env.PUBLIC_URL}/images/profile.jpg`}
            alt="Chloe Tao"
          />
        </div>

        {/* Name */}
        <h1 className="hero-name">Chloe Tao</h1>

        {/* Subtitle */}
        <p className="hero-subtitle">
          Journalist by training, analyst by habit, builder by accident.
        </p>
        <p className="hero-tagline">I write about technology for people who need to understand it — in English and Chinese.</p>
        <p className="hero-tagline2">And I build the systems that get content seen — by search engines, and by AI.</p>

        {/* CTA Button */}
        <a href="#my-work" className="hero-cta">
          <span className="cta-dot" />
          Explore My Work
        </a>

        {/* Category Tags */}
        <div className="hero-tags d-flex gap-3">
          <Link to="/english-writing" className="hero-tag">English Writing</Link>
          <Link to="/growth-seo" className="hero-tag">AI Growth</Link>
          <Link to="/business-analysis" className="hero-tag">商业分析</Link>
        </div>
      </div>

      {/* Trajectory Section */}
      <div id="my-work" className="trajectory-section container">

        <Reveal>
          <div className="trajectory-intro">
            <p className="trajectory-question">
              我关注信息是怎么变成决策的——<br />
              在媒体公司、在产品团队、在快速生长的 AI 行业里。<br />
              也关注在 AI 搜索时代，内容是怎么被看见的。
            </p>
          </div>
        </Reveal>

        <div className="trajectory-timeline">

          {/* Node 1 */}
          <Reveal>
            <div className="traj-node">
              <div className="traj-spine">
                <div className="traj-dot" />
                <div className="traj-line" />
              </div>
              <div className="traj-card">
                <span className="traj-context-tag">产品团队</span>
                <div className="traj-header">
                  <div>
                    <h4 className="traj-company">北京思维造物 · 得到 App</h4>
                    <p className="traj-role">用户探究运营</p>
                  </div>
                  <span className="traj-date">2024.5 – 2024.8</span>
                </div>
                <p className="traj-desc">基于 10+ 竞品案例与用户访谈进行差异化分析，重构课程产品 UI 逻辑。基于 RFM 分析调整分层运营策略，全链路活动数据回溯累计 GMV 超 370w。</p>
                <div className="traj-metrics">
                  <span>完课率 +40%</span>
                  <span>活跃度 +40%</span>
                  <span>流失率 -20%</span>
                  <span>GMV 370w+</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Node 2 */}
          <Reveal delay={60}>
            <div className="traj-node">
              <div className="traj-spine">
                <div className="traj-dot" />
                <div className="traj-line" />
              </div>
              <div className="traj-card">
                <span className="traj-context-tag">媒体公司</span>
                <div className="traj-header">
                  <div>
                    <h4 className="traj-company">北京声动活泼 · 声动早咖啡</h4>
                    <p className="traj-role">行业研究</p>
                  </div>
                  <span className="traj-date">2025.4 – 2025.8</span>
                </div>
                <p className="traj-desc">处理 500+ 份行业研究报告，产出游戏、即时零售、文娱消费等行业分析，吸引字节 AI 产品、迪士尼等品牌投放。设计 AI 商分写作助手，实现多源信息整合与选题筛选。</p>
                <div className="traj-metrics">
                  <span>单集播放 50w+</span>
                  <span>创作效率 +50%</span>
                  <span>500+ 份报告</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Node 3 */}
          <Reveal delay={60}>
            <div className="traj-node">
              <div className="traj-spine">
                <div className="traj-dot" />
                <div className="traj-line" />
              </div>
              <div className="traj-card">
                <span className="traj-context-tag">AI 行业</span>
                <div className="traj-header">
                  <div>
                    <h4 className="traj-company">美团 Keeta · 商业分析（客户体验）</h4>
                    <p className="traj-role">独立搭建客户体验分析工具链 · 设计分析指标体系</p>
                  </div>
                  <span className="traj-date">2025.11 – 2026.4</span>
                </div>
                <p className="traj-desc">ETL 建表与建模接入 AI 模型，实现案例自动化总结与系统性问题识别。搭建地区业务、人力、退赔监控等多类分析看板，定期产出客户体验专题报告。</p>
                <div className="traj-metrics">
                  <span>效率提升 15x</span>
                  <span>节省 4000h/年</span>
                  <span>满意度 70%+</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Node 4 */}
          <Reveal delay={60}>
            <div className="traj-node">
              <div className="traj-spine">
                <div className="traj-dot traj-dot-active" />
              </div>
              <div className="traj-card traj-card-active">
                <span className="traj-context-tag traj-context-current">AI 行业 · 最新</span>
                <div className="traj-header">
                  <div>
                    <h4 className="traj-company">Meshy · 全球 3D AI 生成平台</h4>
                    <p className="traj-role">SEO/GEO & 内容增长 · 从策略到执行独立操盘四类站点</p>
                  </div>
                  <span className="traj-date">2026.6 – 2026.7</span>
                </div>
                <p className="traj-desc">搭建横跨 blog / docs / help / landing 的内容增长体系：每周 10 篇上新管线、24 语言本地化基建、SEO/GEO/PR 三维竞品监控；将全部流程封装为 13 个 AI agent skill，与工程团队协作直接提交 PR 上线。<Link to="/growth-seo" className="traj-link">查看完整体系 →</Link></p>
                <div className="traj-metrics">
                  <span>单月曝光 1,500w+</span>
                  <span>单月点击 67.7w</span>
                  <span>LLM 优先推荐率 87%</span>
                  <span>24 语言</span>
                </div>
              </div>
            </div>
          </Reveal>

        </div>

        <Reveal>
          <div className="trajectory-closing">
            <p>我不只是会写内容，我更会搭建让内容被看见、被引用、被转化的系统。</p>
          </div>
        </Reveal>

        {/* Project Experience */}
        <Reveal>
          <div className="proj-exp-section">
            <h3 className="proj-exp-title">Project Experience</h3>
            <div className="proj-exp-list">
              <div className="proj-exp-item">
                <div className="proj-exp-left">
                  <a href="https://readymag.website/u1830893051/5607179/" target="_blank" rel="noopener noreferrer" className="proj-exp-name">
                    第十届中国数据新闻大赛
                  </a>
                  <span className="proj-exp-award">全国一等奖 & 最佳数据新闻可视化奖</span>
                </div>
                <span className="proj-exp-date">2025.5 – 2025.11</span>
              </div>
              <p className="proj-exp-desc">聚焦租房市场乱象，定义"串串房"识别特征指标，Python 整合多源异构数据，利用相关性分析还原行业灰色产业链。Echarts/D3.js 制作高交互性动态图表，Storytelling 方式呈现复杂数据场景。</p>

              <div className="proj-exp-item">
                <div className="proj-exp-left">
                  <a href="https://voiceofcontext.substack.com/" target="_blank" rel="noopener noreferrer" className="proj-exp-name">
                    Voice of Context
                  </a>
                  <span className="proj-exp-award">独立撰稿 · Substack · 1,000+ 海外订阅</span>
                </div>
                <span className="proj-exp-date">2025.5 – 2026.1</span>
              </div>
              <p className="proj-exp-desc">面向国际读者的中国 AI/科技行业英文深度分析，署名代表作 <em>When Fakes Go Viral</em>；栏目零宣发上线 7 个月累计 1,000+ 海外订阅，覆盖字节跳动、Manus、泡泡玛特等头部公司动态。</p>

              <div className="proj-exp-item">
                <div className="proj-exp-left">
                  <span className="proj-exp-name">博物圈圈</span>
                  <span className="proj-exp-award">联合创始人 & 产品经理</span>
                </div>
                <span className="proj-exp-date">2023.3 – 2023.9</span>
              </div>
              <p className="proj-exp-desc">主导课程产品设计与用户调研，基于转化数据迭代课程方案与营销策略，产品销量提升 50%。运营小红书内容与社群，3 个月浏览量 100w+，创收 50w+。</p>
            </div>
            <div className="mt-4">
              <a href={`${process.env.PUBLIC_URL}/resume.pdf`} download className="btn btn-download">Download Resume</a>
            </div>
          </div>
        </Reveal>

      </div>

      {/* Project Cards Section */}
      <div className="container my-5 py-5">
        <Reveal>
          <h2 className="work-title text-center mb-5">My Work</h2>
        </Reveal>
        <div className="row">
          {workCards.map((c, i) => (
            <div key={c.to} className="col-lg-3 col-md-6 mb-4">
              <Reveal delay={i * 80} className="h-100">
                <Link to={c.to} className={`project-card ${c.accent}`}>
                  <span className="pc-dot" />
                  <h4 className="pc-title">{c.title}</h4>
                  <p className="pc-sub">{c.sub}</p>
                  <span className="pc-arrow">→</span>
                </Link>
              </Reveal>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Contact Section */}
      <Reveal>
        <div className="text-center my-5 py-5">
          <Link to="/contact" className="btn contact-btn-bottom">Contact Me</Link>
        </div>
      </Reveal>
    </>
  );
};

export default Home;
