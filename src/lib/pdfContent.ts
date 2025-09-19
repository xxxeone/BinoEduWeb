export type Module = { title: string; points: string[] };

export type BrochureContent = {
  meta: {
    title: string;
    edition: string;
    duration: string;
  };
  summary: {
    tagline: string;
    intro: string;
  };
  pillars: string[];
  outcomes: string[];
  modules: Module[];
};

// 占位内容：请用 PDF 真实内容替换（public/brochure.pdf）
export const brochure: BrochureContent = {
  meta: {
    title: "稻盛之道·经营哲学商务研修团",
    edition: "4.0",
    duration: "6天5晚",
  },
  summary: {
    tagline: "以哲学为底层操作系统，重启企业增长与组织凝聚",
    intro:
      "围绕稻盛和夫经营哲学核心，融合企业参访与沉浸式修学，帮助企业家在战略·组织·心法上达成突破。以下内容为项目手册提要，完整详情请查看或下载 PDF 手册。",
  },
  pillars: [
    "敬天爱人",
    "利他之心",
    "心态决定人生",
    "坚持正道",
    "付出不亚于任何人的努力",
  ],
  outcomes: [
    "厘清企业存在意义与经营原点",
    "打造以使命为牵引的组织氛围",
    "构建长期主义的价值判断与执行系统",
    "与高净值企业家建立深度链接",
  ],
  modules: [
    { title: "哲学原理·经营原点", points: ["哲学与经营的关系", "使命与目的的再定义"] },
    { title: "组织心法·文化共识", points: ["利他与共同体意识", "高信任团队机制"] },
    { title: "执行之道·持续精进", points: ["目标设定与分解", "复盘与标准化"] },
  ],
};
