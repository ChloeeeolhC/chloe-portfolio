
import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import './ProductUx.css';

const userResearchCases = [
  {
    title: 'App设计初期用户画像研究与分析',
    subtitle: '以面向大学生的健身App为例',
    // CORRECTED PATH:
    image: `${process.env.PUBLIC_URL}/images/user-research-analysis.png`,
    imageSubtitle: 'Designed by Figma',
    content: `
      <h5>项目背景</h5>
      <p>针对大学生群体，设计一款旨在“提供营养建议、运动计划和心理健康知识，帮助学生保持身心健康”的全新App。在产品设计初期，需要建立清晰、深刻的用户画像，以确保后续功能与设计精准满足目标用户的需求。</p>
      <h5>研究方法</h5>
      <p>通过对市场主流健康类App（如Keep, Fat Secret）进行竞品分析，并结合对目标用户的深度访谈，最终总结归纳出3类核心用户画像（Persona）。</p>
      <h5>关键发现</h5>
      <ul>
        <li><b>“精致懒人”型用户:</b> 注重外形，有健身意愿但动力不足，偏好“傻瓜式”的解决方案和社交激励。</li>
        <li><b>“佛系青年”型用户:</b> 追求松弛感，不希望健康生活带来压力，倾向于在轻松有趣的氛围中培养习惯，渴望找到“搭子”。</li>
        <li><b>“务实学霸”型用户:</b> 生活相对单调，有改善健康的意愿，并希望借此作为拓展社交圈的切入点。</li>
      </ul>
      <h5>产生的影响</h5>
      <p>三类典型的用户画像揭示了产品的核心机会点：工具功能（如计划、记录）是基础，但仅有工具无法成功。产品必须整合<b>社交激励</b>、<b>兴趣圈层</b>和<b>轻松有趣的互动机制</b>，以满足不同用户群体的深层情感与社交需求。该研究为产品后续的功能优先级排序和UX设计提供了关键依据。</p>
    `
  },
  {
    title: 'App投入运营后用户学习路径分析&产品迭代',
    subtitle: '以“得到新商学App为例”',
    image: null,
    imageSubtitle: null,
    content: `
      <h5>项目背景</h5>
      <p>针对‘得到新商学’App核心用户续费率低的问题，本项目旨在深入分析其背后的根本原因，即会员登入率下滑与课程完课率低。</p>
      <h5>我的角色与方法</h5>
      <p>作为内容运营，我与用户运营及课程主编团队协作。通过整合分析站内数据（如完课率、会员行业分布等），并对高/低登入率的典型用户进行深度访谈，以交叉验证的方式定位问题根源。</p>
      <h5>关键发现</h5>
      <ul>
        <li><b>个性化推荐缺失:</b> App首页推课混乱，未能根据会员的行业与真实需求进行个性化推荐，导致用户认为课程结构不清，学习路径模糊。</li>
        <li><b>私域流量转化低:</b> 企微私域社群活跃度高，但用户向App主站的跳转率和登入次数却很少，转化链路存在巨大流失。</li>
        <li><b>社区互动不足:</b> 数据表明，社区活跃度与完课率、续费率呈正相关，但大部分会员并未养成浏览社区的习惯。</li>
      </ul>
      <h5>产生的影响</h5>
      <p>该研究直接推动了产品迭代。我们重构了App首页的课程推荐架构；针对私域流量，设计了“朋友圈+私信”的组合荐课策略；并强化了站内社区的互动功能。最终，这些举措成功地将核心用户完课率提升了40%。</p>
    `
  }
];

const ProductUx = () => {
  return (
    <div className="container mt-5">
      <Tabs defaultActiveKey="user-research" id="product-ux-tabs" className="mb-4">
        <Tab eventKey="user-research" title="用户研究板块">
          {userResearchCases.map((study, index) => (
            <div className="case-study-container" key={index}>
              <h3 className="mb-2">{study.title}</h3>
              <p className="text-muted">{study.subtitle}</p>
              <hr />
              <div className="row mt-4">
                <div className={study.image ? 'col-lg-5' : 'col-lg-12'}>
                  <div dangerouslySetInnerHTML={{ __html: study.content }} />
                </div>
                {study.image && (
                  <div className="col-lg-7">
                    {/* CORRECTED USAGE: */}
                    <img src={study.image} alt={study.title} className="img-fluid rounded shadow-sm" />
                    {study.imageSubtitle && <p className="text-center text-muted mt-2 small">{study.imageSubtitle}</p>}
                  </div>
                )}
              </div>
            </div>
          ))}
        </Tab>
        <Tab eventKey="ux-design" title="UX设计板块">
          <div className="case-study-container">
            <h3 className="mb-2">健身App高保真原型设计</h3>
            <p className="text-muted">使用Figma制作的可交互高保真原型</p>
            <hr />
            <div className="figma-embed-container">
              <iframe 
                title="Figma Prototype for Fitness App"
                style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }} 
                width="100%" 
                height="600" 
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fy80gEjj6nSQWALLHEkmc4j%3Fnode-id%3D0-1%26t%3Dyp0NFD5vbwA31R9w-6" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default ProductUx;
