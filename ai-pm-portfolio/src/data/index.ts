// This file imports all case study content and aggregates it into arrays.

import { pepsiContent } from './cases/pepsi';
import { retailBattleContent } from './cases/retailBattle';
import { walmartContent } from './cases/walmart';
import { haagenDazsContent } from './cases/haagenDazs';
import { meituanContent } from './cases/meituan';
import { ctripContent } from './cases/ctrip';
import { deepseekContent } from './cases/deepseek';
import { f1Content } from './cases/f1';
import { levisContent } from './cases/levis';
import { mgContent } from './cases/mg';
import { ykkContent } from './cases/ykk';
import { promptExampleContent } from './cases/promptExample';

export const caseStudies = [
  { title: '京东美团阿里为何上演即时零售「三国杀」？', imageUrl: `${process.env.PUBLIC_URL}/images/即时零售.jpg`, content: retailBattleContent },
  { title: '携程Trip.com如何吸引海外用户？', imageUrl: `${process.env.PUBLIC_URL}/images/携程.jpg`, content: ctripContent },
  { title: '美团为何从社区团购「闪电撤退」？', imageUrl: `${process.env.PUBLIC_URL}/images/meituan.png`, content: meituanContent },
  { title: '百事可乐为何在北美市场失宠？', imageUrl: `${process.env.PUBLIC_URL}/images/百事可乐.png`, content: pepsiContent },
  { title: '硅谷公司的AI人才抢夺战', imageUrl: `${process.env.PUBLIC_URL}/images/Deepseek.png`, content: deepseekContent },
  { title: '沃尔玛电商为何能够威胁到亚马逊？', imageUrl: `${process.env.PUBLIC_URL}/images/walmart.png`, content: walmartContent },
  { title: '「冰淇淋爱马仕」哈根达斯为何人气不再？', imageUrl: `${process.env.PUBLIC_URL}/images/haagendazs.png`, content: haagenDazsContent },
  { title: '电影大火背后，为何现实世界F1少有美国车手？', imageUrl: `${process.env.PUBLIC_URL}/images/F1.png`, content: f1Content },
  { title: '李维斯为何实现持续增长？', imageUrl: `${process.env.PUBLIC_URL}/images/李维斯.png`, content: levisContent },
  { title: '名爵为何成为欧洲出海销冠？', imageUrl: `${process.env.PUBLIC_URL}/images/名爵.png`, content: mgContent },
  { title: 'YKK如何成为「拉链大王」？', imageUrl: `${process.env.PUBLIC_URL}/images/YKK.jpeg`, content: ykkContent },
];

export const promptExamples = [
  {
    title: '播客转译为英文Newsletter',
    imageUrl: `${process.env.PUBLIC_URL}/images/translator.jpg`,
    content: promptExampleContent
  },
  {
    title: '生成深度竞品分析报告',
    imageUrl: `${process.env.PUBLIC_URL}/images/competitor-analysis.jpg`,
    content: `
### 目标 (Goal)
将上传文件（包含产品信息、市场数据、竞品细节等）中的零散信息，整理并输出一份结构清晰、深度分析的竞品分析文档，用于指导产品开发和市场战略。

---

### 优化前 (Before)

**一个简单的Prompt:**

\`\`\`
请根据这份文件，生成一份竞品分析报告。
\`\`\`

**可能产生的问题:**

*   缺乏结构化： 结果可能是一段式或简单分段的文字，缺乏专业的“执行摘要”、“SWOT 分析”等关键部分。
*   分析深度不够： 只是简单罗列功能差异，无法生成指导战略的行动计划 (Action Plan)。
*   读者代入感弱： 无法针对决策者、投资人等特定读者群体调整措辞，专业性和严谨性不足。

---

### 优化后 (After)

**一个专业的Prompt:**

\`\`\`markdown
# Role: 高级产品战略分析师

## Background：

你是一位经验丰富的高级产品战略分析师，你负责将上传文件中的原始数据和信息转化为一份专业、可执行的**竞品分析文档（Competitive Analysis Document）**。这份文档的目标读者是：

- 企业内需要评估自有产品相对于竞争对手的市场地位的决策者；
- 专注于市场调研和产品分析的投资人/研究机构和媒体；
- 企业内与产品部门有密切连接的其他部门，如市场部、研发部等。

这份报告的目标是为企业提供产品开发和市场进入战略咨询方面的参考，通过采用竞争评估的最佳实践并留意其中固有的挑战，使企业更好地定位自己，在不断变化的市场环境中取得成功并适应变化，为他们提供能够辅助决策的一手、可信赖信息。

## Objective：

- 整体文稿长度在 2000 到 4000 字之间。

- **执行摘要 (Executive Summary):** 准备一份执行摘要，简要概述最重要的发现和核心建议，以便高层利益相关者能够快速掌握全局。

- **竞争格局分析 (Competitive Landscape Analysis):** 评估自有产品和关键竞品的功能、质量、定价和整体价值主张，并深度分析各自的优劣势。

- **战略工具应用:** 构建一个**SWOT 分析** (优势、劣势、机会、威胁) 矩阵。

- **行动计划 (Actionable Plan):** 针对每个优先洞察，制定具体的**SMART 原则**（Specific, Measurable, Achievable, Relevant, Time-bound）行动计划，详细说明实施流程、目标和预期成果。

## Constraints：

- 必须保留文件中提供的所有**关键数据和定量分析**。

- 必须将零散的分析点整合到清晰、专业的结构化段落和章节中。

- 文本风格必须保持**书面化、专业、清晰且高度简洁**，避免口语化表达。

## Output Requirements:

- **结构化输出:** 使用 Markdown **二级标题 (##)** 和 **三级标题 (###)** 严格划分章节，确保文档的层次感和可读性。

- **只输出纯文本内容**（英文或中文，取决于原始文件语言和你的默认输出需求。*如果未指定语言，此处假定为中文输出，如需英文请在 Prompt 中明确*），不要生成其他语言或额外内容。

- **格式限制:** 文档中**不能**出现表情符号或无序列表（bullet points，除非用于清晰呈现表格数据，但需控制使用）。

\`\`\`

### 达成的效果:

*   **角色与背景强化：** 明确的 Role (高级产品战略分析师) 和 Background 确保了输出内容具备战略高度和专业严谨性，符合决策者和投资人的阅读习惯。
*   **结构和深度保证：** Objective 不仅要求分析，还强制输出了专业报告必备的 执行摘要、SWOT 分析 和 SMART 行动计划，保证了报告的可用性和深度。
*   **质量控制：** Constraints 确保了原始数据和分析点的保留，同时强制要求将零散信息整合为书面化、结构清晰的专业文稿，极大地减少了后期编辑工作。
`
  },
  {
    title: '生成专业产品需求文档 (PRD)',
    imageUrl: `${process.env.PUBLIC_URL}/images/prd-writer.jpg`,
    content: `
## 目标 (Goal)

基于提供的产品核心信息和补充材料，生成一份**专业、完整、结构清晰**的**产品需求文档 (PRD)**，用于指导开发、设计和商业决策。

---

## 优化前 (Before)

**你提供的原始 Prompt 结构：**

\`\`\`markdown
# Role: 产品经理
你是一位经验丰富的产品经理，请根据以下信息，撰写一份专业、完整、结构清晰的产品需求文档 (PRD)。
...（省略核心输入信息）...
## PRD撰写要求:
请严格按照业界标准的PRD格式进行撰写，文档应至少包含以下部分：...
\`\`\`

**原始 Prompt 的优点与不足：**

|优点 (Good)|不足 (Needs Improvement)|
|---|---|
|**明确的角色和输出：** 定义了“产品经理”的角色和“PRD”的输出。|**缺乏对输出深度的要求：** 仅要求“撰写”和“包含部分”，未深入要求细节（如交互、验收标准）。|
|**结构化输入：** 提供了清晰的模块（愿景、问题、功能等）。|**没有对输出语言风格的强制要求：** 虽然要求“专业”，但没有通过约束来确保风格和格式的严格一致性。|
|**涵盖了标准 PRD 元素：** 确保了文档的基本完整性。|**易产生过度冗余的描述：** 未控制文档篇幅或信息密度。|

---

## 优化后 (After)

**一个专业的 PRD 撰写 Prompt:**

\`\`\`markdown
# Role: 高级产品经理兼技术撰稿人

## Background：

你是一位具备 5 年以上经验的**高级产品经理 (Senior Product Manager)**，同时也是一位**专业的技术撰稿人**。你负责整合以下提供的所有核心产品信息和补充材料，撰写一份**具有执行力 (Actionable)** 的产品需求文档 (PRD)。

这份 PRD 的目标读者是：
- **开发和工程团队：** 他们需要清晰、无歧义的规格和验收标准来进行开发。
- **UI/UX 设计师：** 他们需要准确的用户故事和流程图来设计界面。
- **管理层和业务利益相关者：** 他们需要了解产品目标、优先级和成功的衡量标准。

## Objective：

- 撰写的 PRD 必须能够**直接指导开发和测试工作**。
- 文档的总字数控制在**4000至8000字**，确保信息密度。
- 必须基于核心功能列表，为**每一个核心功能**详细定义其**逻辑和交互细节**，以及**验收标准 (Acceptance Criteria)**。

## Constraints：

- **内容必须严格基于** \`{product_vision}\`、\`{problem_statement}\` 和 \`{file_contents}\` 中的信息，**不得自行发挥或虚构**。
- 必须将所有的功能需求表述为清晰、结构化的 **用户故事 (User Stories)**，格式为：“**作为一个 [用户角色], 我想要 [目标], 这样我就可以 [价值]**”。
- 文本风格必须**极度专业、精确、简洁**，采用**书面化**的语言，避免任何模糊或歧义的表述。

## Output Requirements:

请严格按照以下**业界标准**的 PRD 格式撰写文档，并使用 Markdown **一级标题 (#)** 划分主要章节，**二级标题 (##)** 划分子部分：

1.  **# 介绍与目标 (Introduction & Goals)**
    * ## 产品愿景与目标 (Vision & Objectives)
    * ## 解决的问题 (Problem Statement)
2.  **# 用户与场景 (Users & Scenarios)**
    * ## 目标用户画像 (Target User Personas)
    * ## 核心用户故事/用例 (Core User Stories/Use Cases)
3.  **# 详细需求规格 (Detailed Requirements Specification)**
    * ## 功能性需求 (Functional Requirements) - **必须包含每个用户故事的详细逻辑与交互说明。**
    * ## 验收标准 (Acceptance Criteria) - **必须为每个核心功能定义清晰的 DoR/DoD (Definition of Ready/Done)。**
    * ## 非功能性需求 (Non-Functional Requirements) - 涵盖性能、安全性、可用性等。
4.  **# 运营与衡量 (Metrics & Operations)**
    * ## 成功衡量指标 (Success Metrics / KPIs)
    * ## 假设与约束 (Assumptions and Constraints)
5.  **# 规划与版本 (Roadmap & Versioning)**
    * ## 版本历史 (Version History)
    * ## 未来迭代方向 (Future Roadmap Outline)

- **只输出**完整的 PRD 文档正文，**不要**输出任何对 PRD 撰写过程的描述、提示或额外的语言。
- **不要**出现表情、无必要的列表符号或代码块.
\`\`\`

**达成的效果:**

- **深化角色定义：** 将角色升级为“高级产品经理兼技术撰稿人”，保证了输出不仅有战略思维，还有高度的**文档专业度**和**技术精确性**。
    
- **强制执行力：** 在 **Objective** 中强调了“**指导开发和测试**”以及“**验收标准**”，确保 PRD 不只是描述，而是可执行的规格文件。
    
- **细化约束：** **Constraints** 强制使用标准的 **用户故事** 格式，并要求对所有内容必须基于输入，防止 AI 随意添加信息。
    
- **严格格式化：** **Output Requirements** 明确了必须使用一级和二级标题，并定义了必须包含的子部分（如**验收标准**），确保文档结构符合工程团队的需求。
`
  }
];