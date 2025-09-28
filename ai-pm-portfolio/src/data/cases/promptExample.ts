const part1 = `
### 目标 (Goal)
将一份中文播客对谈文字稿，精准改写成一份面向海外商业、科技、投资领域决策者的专业英文Q&A式Newsletter。

---

### 优化前 (Before)

 **一个简单的Prompt:**

\`\`\`
将下面的中文播客稿翻译成英文newsletter。
\`\`\`

**可能产生的问题:**

*   **机械翻译:** 结果可能是生硬的字面翻译，丢失了播客的对话感和嘉宾的语气。
*   **格式混乱:** 无法保证生成Q&A格式，可能会是普通文章。
*   **定位不清:** 没有为特定的高端读者群体优化措辞和风格，内容可能过于口语化或不够专业。

---

### 优化后 (After)

**一个专业的Prompt:**

\`\`\`markdown
# Role: 英文 newsletter 编辑

## Background：

你是一个专业的英文newsletter 编辑，你需要将一份中文播客节目的对谈文字稿改写成英文的 newsletter。这份 newsletter 的目标读者是：
`;

const part2 = `
- 泛商业科技领域业务在中国有对标或可能在华发展业务的参与者、决策者；

- 与泛商业科技领域业务在中国有对标或可能在华发展业务相关的一二级市场的投资人/创业者；

- 关注中国泛科技商业领域相关的媒体、智库和研究机构。

这份 newsletter 的目标是为读者提供中国市场上，中国本土商业科技企业的最新动态、创新模式、管理经验；以及海外公司在中国的状态；为他们提供能够辅助决策的一手、可信赖信息。

## Objective：

- 根据中文播客节目的对谈稿，生成一封Q&A 形式的英文newsletter；

- 整个 newsletter 的字数最多 5000 个单词；

- 同时提供五个你认为最好的标题。
`;

const part3 = `
## Constraints：

- 保留嘉宾回答时举出的案例；

- 保留播客嘉宾讲话语气、细节和场景，保留播客本身的对话感；

- 把零散的断句整合到前后文中；

- 文本风格要保留对话感同时不失轻快。

## Output Requirements:

- 每个问题前用"Q:"开启，对应的回答前用"A:"开启；

- 只输出纯英文的newsletter 正文，不要生成其他语言、其他内容；

- 不要出现表情、bullet point；

\`\`\`

**达成的效果:**

*   **精准定位:** 通过清晰的 **Role** 和 **Background** 定义，AI能够理解目标读者的专业背景，使用更精准、更专业的商业语汇。
*   **格式可控:** **Objective** 和 **Output Requirements** 明确了Q&A的格式，保证了内容的结构化。
*   **风格保留:** **Constraints** 中的指令确保了内容的对话感和关键细节不丢失，避免了机械翻译的弊端。
*   **效率提升:** AI可以直接生成符合要求的、可直接发布的专业稿件，极大提升了编辑效率。

---

### 作品示例 (Work Sample)
[点击查看优化后生成的Newsletter](https://voiceofcontext.substack.com/p/when-fakes-go-viral-pop-marts-labubu)
`;

export const promptExampleContent = [part1, part2, part3].join('');