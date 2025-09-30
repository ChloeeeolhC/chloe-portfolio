import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {

  useEffect(() => {
    // Find the elements that need to be animated
    const heading = document.querySelector('.hero-heading');
    const fadeInSection = document.querySelector('.fade-in-delay');
    const arrow = document.querySelector('.arrow-container');

    // A helper function to add classes and ensure they exist
    const applyAnimation = (element: Element | null, animClass: string) => {
      if (element) {
        element.classList.add(animClass);
      }
    };

    // Apply the animation classes
    applyAnimation(heading, 'animate-jump-and-shrink');
    applyAnimation(fadeInSection, 'animate-fade-in');
    applyAnimation(arrow, 'animate-bounce');

    // Return a cleanup function
    return () => {
      // This function runs when the component is "unmounted" (when you navigate away)
      // It removes the animation classes, resetting them for the next visit.
      const removeAnimation = (element: Element | null, animClass: string) => {
        if (element) {
          element.classList.remove(animClass);
        }
      };
      removeAnimation(heading, 'animate-jump-and-shrink');
      removeAnimation(fadeInSection, 'animate-fade-in');
      removeAnimation(arrow, 'animate-bounce');
    };
  }, []); // The empty array [] ensures this effect runs only on mount and unmount

  return (
    <>
      {/* Hero Section */}
      <div className="home-container d-flex justify-content-center align-items-center">
        <div className="text-center">
          <h1 className="hero-heading">Hi, I'm Chloe!</h1>
          <div className="fade-in-delay">
            <h2 className="hero-subheading">An AI product manager</h2>
            <div className="arrow-container">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V19M12 19L7 14M12 19L17 14" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* About Me & Experience Section */}
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-md-4">
            <h3>About Me</h3>
            <p>AIGC 产品新人,具备媒体行业深度理解和 AI 应用实践经验。通过新闻专业训练具备敏锐的用户需求洞察力,能够快速从复杂信息中提炼核心价值点。在多个内容产品项目中积累了数据驱动的产品迭代经验,善于通过用户反馈优化产品体验。曾在商业科技媒体「声动早咖啡」实习,对AIGC技术发展保持高度关注,撰写多个AI 行业深度分析文稿,且在日常深度使用各类 AI 工具辅助工作,具备将AI 能力与业务场景结合的产品思维。</p>
          </div>
          <div className="col-md-7 offset-md-1">
            <h3>Work Experience</h3>
            <div className="experience-item mb-4">
              <h5>北京声动活泼 (2025.4 ~ 2025.8)</h5>
              <p><strong>内容研究:</strong> 构建AI辅助的商业科技内容生产流程, 提升内容生产效率300%。协助构建AIGC新闻助手, 提升创作效率。</p>
            </div>
            <div className="experience-item mb-4">
              <h5>北京思维造物 (2024.5 ~ 2024.8)</h5>
              <p><strong>用户运营:</strong> 搭建产品内容体系, 提升用户完课率40%。构建用户转化漏斗模型, 提升私域用户活跃度40%。</p>
            </div>
            <div className="experience-item mb-4">
              <h5>博物圈圈文化公司 (2023.3 ~ 2023.9)</h5>
              <p><strong>产品经理:</strong> 独立完成产品文案及内容策划, 带动销量提升50%。运营小红书账号, 3个月浏览量100w+。</p>
            </div>
            <div className="text-end mt-4">
                <a href="/Chloe-Tao-CV.pdf" download className="btn btn-download">Download CV</a>
            </div>
          </div>
        </div>
      </div>

      {/* Project Cards Section */}
      <div className="container my-5 py-5">
        <h2 className="text-center mb-5">My Work</h2>
        <div className="row">
          {/* Card 1 */}
          <div className="col-md-4 mb-4">
            <Link to="/ai-business-analysis" className="card project-card card-1">
              <div className="card-body d-flex align-items-center justify-content-center">
                <h4 className="card-title">AI & Business Analysis</h4>
              </div>
            </Link>
          </div>
          {/* Card 2 */}
          <div className="col-md-4 mb-4">
            <Link to="/product-ux" className="card project-card card-2">
              <div className="card-body d-flex align-items-center justify-content-center">
                <h4 className="card-title">Product & UX</h4>
              </div>
            </Link>
          </div>
          {/* Card 3 */}
          <div className="col-md-4 mb-4">
            <Link to="/ai-lab" className="card project-card card-3">
              <div className="card-body d-flex align-items-center justify-content-center">
                <h4 className="card-title">AI Lab</h4>
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