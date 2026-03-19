import React, { useState } from 'react';
import './ProductUx.css';

const projects = [
  {
    id: 1,
    title: 'App设计初期用户画像研究',
    subtitle: '以面向大学生的健身App为例',
    description: '针对大学生群体的健身App，在产品设计初期建立清晰的用户画像。通过竞品分析与深度访谈，归纳出「精致懒人」「佛系青年」「务实学霸」3类核心用户，为后续功能优先级与UX设计提供关键依据。',
    context: '用户研究 · Figma',
    color: 'rgba(218, 232, 214, 0.85)',
    image: `${process.env.PUBLIC_URL}/images/user-research-analysis.png`,
    imageAlt: 'User Research Analysis',
    figmaUrl: null,
    content: `
      <h5>项目背景</h5>
      <p>针对大学生群体，设计一款旨在"提供营养建议、运动计划和心理健康知识，帮助学生保持身心健康"的全新App。在产品设计初期，需要建立清晰、深刻的用户画像，以确保后续功能与设计精准满足目标用户的需求。</p>
      <h5>研究方法</h5>
      <p>通过对市场主流健康类App（如Keep, Fat Secret）进行竞品分析，并结合对目标用户的深度访谈，最终总结归纳出3类核心用户画像（Persona）。</p>
      <h5>关键发现</h5>
      <ul>
        <li><b>"精致懒人"型用户:</b> 注重外形，有健身意愿但动力不足，偏好"傻瓜式"的解决方案和社交激励。</li>
        <li><b>"佛系青年"型用户:</b> 追求松弛感，不希望健康生活带来压力，倾向于在轻松有趣的氛围中培养习惯，渴望找到"搭子"。</li>
        <li><b>"务实学霸"型用户:</b> 生活相对单调，有改善健康的意愿，并希望借此作为拓展社交圈的切入点。</li>
      </ul>
      <h5>产生的影响</h5>
      <p>三类典型的用户画像揭示了产品的核心机会点：工具功能（如计划、记录）是基础，但仅有工具无法成功。产品必须整合<b>社交激励</b>、<b>兴趣圈层</b>和<b>轻松有趣的互动机制</b>，以满足不同用户群体的深层情感与社交需求。该研究为产品后续的功能优先级排序和UX设计提供了关键依据。</p>
    `
  },
  {
    id: 2,
    title: '得到新商学 | 用户学习路径分析',
    subtitle: '续费率低的根因分析与产品迭代',
    description: '针对核心用户续费率下滑的问题，整合站内数据与深度访谈，定位会员登入率低与完课率不足的根本原因，推动首页推荐架构重构与社区互动强化，最终将完课率提升40%。',
    context: '用户运营 · 产品迭代',
    color: 'rgba(245, 240, 222, 0.85)',
    image: null,
    imageAlt: null,
    figmaUrl: null,
    content: `
      <h5>项目背景</h5>
      <p>针对'得到新商学'App核心用户续费率低的问题，本项目旨在深入分析其背后的根本原因，即会员登入率下滑与课程完课率低。</p>
      <h5>我的角色与方法</h5>
      <p>作为内容运营，我与用户运营及课程主编团队协作。通过整合分析站内数据（如完课率、会员行业分布等），并对高/低登入率的典型用户进行深度访谈，以交叉验证的方式定位问题根源。</p>
      <h5>关键发现</h5>
      <ul>
        <li><b>个性化推荐缺失:</b> App首页推课混乱，未能根据会员的行业与真实需求进行个性化推荐，导致用户认为课程结构不清，学习路径模糊。</li>
        <li><b>私域流量转化低:</b> 企微私域社群活跃度高，但用户向App主站的跳转率和登入次数却很少，转化链路存在巨大流失。</li>
        <li><b>社区互动不足:</b> 数据表明，社区活跃度与完课率、续费率呈正相关，但大部分会员并未养成浏览社区的习惯。</li>
      </ul>
      <h5>产生的影响</h5>
      <p>该研究直接推动了产品迭代。我们重构了App首页的课程推荐架构；针对私域流量，设计了"朋友圈+私信"的组合荐课策略；并强化了站内社区的互动功能。最终，这些举措成功地将核心用户完课率提升了40%。</p>
    `
  },
  {
    id: 3,
    title: '健身App | 高保真原型设计',
    subtitle: '使用Figma制作的可交互高保真原型',
    description: '面向大学生的健身App全流程UX设计，从用户画像研究出发，经信息架构梳理与交互流程设计，最终产出完整可交互的Figma高保真原型。',
    context: 'UX设计 · Figma Prototype',
    color: 'rgba(230, 238, 220, 0.85)',
    image: null,
    imageAlt: null,
    figmaUrl: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fy80gEjj6nSQWALLHEkmc4j%3Fnode-id%3D0-1%26t%3Dyp0NFD5vbwA31R9w-6',
    content: null
  }
];

const ProductUx = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggle = (id: number) => {
    setExpanded(prev => (prev === id ? null : id));
  };

  return (
    <div className="ux-page container my-5">
      <div className="ux-cards-list">
        {projects.map((project) => (
          <div
            key={project.id}
            className="ux-card"
            style={{ backgroundColor: project.color }}
          >
            <div className="ux-card-inner">
              {/* Left: Text */}
              <div className="ux-card-text">
                <h2 className="ux-card-title">{project.title}</h2>
                <p className="ux-card-desc">{project.description}</p>
                <p className="ux-card-context">{project.context}</p>
                <button
                  className="ux-card-btn"
                  onClick={() => toggle(project.id)}
                >
                  {expanded === project.id ? 'Collapse ↑' : 'View case study'}
                </button>
              </div>

              {/* Right: Image or Figma */}
              {(project.image || project.figmaUrl) && (
                <div className="ux-card-media">
                  {project.image && (
                    <img src={project.image} alt={project.imageAlt || project.title} />
                  )}
                  {project.figmaUrl && (
                    <iframe
                      title={project.title}
                      src={project.figmaUrl}
                      allowFullScreen
                    />
                  )}
                </div>
              )}
            </div>

            {/* Expanded Content */}
            {expanded === project.id && project.content && (
              <div
                className="ux-card-expanded"
                dangerouslySetInnerHTML={{ __html: project.content }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductUx;
