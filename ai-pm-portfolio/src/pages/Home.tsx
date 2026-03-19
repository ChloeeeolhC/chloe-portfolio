import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

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
        <p className="hero-tagline">Interested in the gap between how technology is made and how it's understood.</p>

        {/* CTA Button */}
        <a href="#my-work" className="hero-cta">
          <span className="cta-dot" />
          Explore My Work
        </a>

        {/* Category Tags */}
        <div className="hero-tags d-flex gap-3">
          <Link to="/business-analysis" className="hero-tag">商业分析</Link>
          <Link to="/product-ux" className="hero-tag">产品 & UX</Link>
          <Link to="/ai-tools" className="hero-tag">AI 工具实践</Link>
        </div>
      </div>

      {/* Trajectory Section */}
      <div id="my-work" className="trajectory-section container">

        <div className="trajectory-intro">
          <p className="trajectory-question">
            我关注信息是怎么变成决策的——<br />
            在媒体公司、在产品团队、在快速生长的 AI 行业里。
          </p>
        </div>

        <div className="trajectory-timeline">

          {/* Node 1 */}
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

          {/* Node 2 */}
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

          {/* Node 3 */}
          <div className="traj-node">
            <div className="traj-spine">
              <div className="traj-dot traj-dot-active" />
            </div>
            <div className="traj-card traj-card-active">
              <span className="traj-context-tag traj-context-current">AI 行业 · 当前</span>
              <div className="traj-header">
                <div>
                  <h4 className="traj-company">美团 Keeta · 商业分析（客户体验）</h4>
                  <p className="traj-role">独立搭建客户体验分析工具链 · 设计分析指标体系</p>
                </div>
                <span className="traj-date">2025.11 – 至今</span>
              </div>
              <p className="traj-desc">ETL 建表与建模接入 AI 模型，实现案例自动化总结与系统性问题识别。搭建地区业务、人力、退赔监控等多类分析看板，定期产出客户体验专题报告。</p>
              <div className="traj-metrics">
                <span>效率提升 15x</span>
                <span>节省 4000h/年</span>
                <span>满意度 70%+</span>
              </div>
            </div>
          </div>

        </div>

        <div className="trajectory-closing">
          <p>我不只是会写分析，我会设计让分析真正被用上的系统。</p>
        </div>

        {/* Project Experience */}
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
                <span className="proj-exp-award">独立撰稿 · Substack</span>
              </div>
              <span className="proj-exp-date">2025.5 – 2026.1</span>
            </div>
            <p className="proj-exp-desc">独立研究并撰写中国 AI/科技行业深度英文分析，覆盖字节跳动、Manus、泡泡玛特等头部公司动态，面向国际读者提供一手行业解读。</p>

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
            <a href={`${process.env.PUBLIC_URL}/中传26届陶汝欣-简历.pdf`} download className="btn btn-download">Download Resume</a>
          </div>
        </div>

      </div>

      {/* Project Cards Section */}
      <div className="container my-5 py-5">
        <h2 className="text-center mb-5">My Work</h2>
        <div className="row">
          {/* Card 1 */}
          <div className="col-md-4 mb-4">
            <Link to="/business-analysis" className="card project-card card-1">
              <div className="card-body d-flex align-items-center justify-content-center">
                <h4 className="card-title">商业分析</h4>
              </div>
            </Link>
          </div>
          {/* Card 2 */}
          <div className="col-md-4 mb-4">
            <Link to="/product-ux" className="card project-card card-2">
              <div className="card-body d-flex align-items-center justify-content-center">
                <h4 className="card-title">产品 & UX</h4>
              </div>
            </Link>
          </div>
          {/* Card 3 */}
          <div className="col-md-4 mb-4">
            <Link to="/ai-tools" className="card project-card card-3">
              <div className="card-body d-flex align-items-center justify-content-center">
                <h4 className="card-title">AI 工具实践</h4>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Contact Section */}
      <div className="text-center my-5 py-5">
        <Link to="/contact" className="btn contact-btn-bottom">Contact Me</Link>
      </div>
    </>
  );
};

export default Home;