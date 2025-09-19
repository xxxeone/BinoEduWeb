import React from "react";

const philosophyList = [
  {
    quote: "敬天爱人",
    desc: "以敬畏之心对待天地万物，以仁爱之心对待他人。",
    jp: "天を敬い、人を愛す",
  },
  {
    quote: "利他之心",
    desc: "一切以他人、社会、客户为先，成就他人即成就自己。",
    jp: "利他の心",
  },
  {
    quote: "心态决定人生",
    desc: "人生·工作的结果 = 思维方式 × 热情 × 能力。",
    jp: "心の持ち方が人生を決める",
  },
  {
    quote: "坚持正道",
    desc: "无论何时都要坚守正直与善良，绝不妥协。",
    jp: "正しい道を貫く",
  },
  {
    quote: "付出不亚于任何人的努力",
    desc: "全力以赴，持续精进，才能创造奇迹。",
    jp: "誰にも負けない努力をする",
  },
  {
    quote: "以高目标自我要求",
    desc: "设定远大目标，持续挑战自我极限。",
    jp: "高い目標を持つ",
  },
];

const PhilosophySection = () => {
  return (
    <section className="py-24 bg-[#faf8f3] border-t border-b border-[#ece7df]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-[#fff] border border-[#e5e1d8] rounded-full text-[#a21caf] text-lg tracking-widest font-semibold mb-4 shadow-sm">稻盛之道 · 经营哲学</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1e193a] mb-4 tracking-tight">终身受益的哲学智慧</h2>
          <p className="text-lg text-[#6b7280] max-w-2xl mx-auto">融合稻盛和夫一生经营哲学，助力企业家与管理者实现事业与人生的双重飞跃。</p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {philosophyList.map((item, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-2xl border border-[#ece7df] shadow-md p-8 flex flex-col items-center text-center group hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#faf8f3] border border-[#ece7df] rounded-full flex items-center justify-center shadow-sm">
                <span className="text-2xl font-bold text-[#d1b354] group-hover:text-[#a21caf] transition-colors duration-200">{item.jp}</span>
              </div>
              <div className="mt-8 mb-4">
                <span className="text-2xl font-bold text-[#a21caf] tracking-wide">{item.quote}</span>
              </div>
              <div className="text-[#1e193a] text-base font-medium mb-2 min-h-[48px]">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
