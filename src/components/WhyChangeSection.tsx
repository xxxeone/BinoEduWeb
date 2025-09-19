import React from "react";

const items = [
  {
    title: "高人才流失",
    stat: "年流失率超 25%",
    desc: "缺乏使命感与成长路径，核心骨干难以稳定。",
    icon: "👥",
  },
  {
    title: "利润被压缩",
    stat: ">70% 利润率低于 5%",
    desc: "成本结构失衡 / 内部效率低 / 价值未能溢价。",
    icon: "📉",
  },
  {
    title: "增长遇瓶颈",
    stat: "难突破 RM10M",
    desc: "缺少复制机制与精益运营模型，扩张放缓。",
    icon: "🧱",
  },
];

const WhyChangeSection: React.FC = () => {
  return (
    <section id="why-change" className="py-24 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center tracking-tight text-neutral-900 mb-14">
          为什么超过 <span className="text-emerald-600">95%</span> 的马来西亚企业止步于 SME 阶段？
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-2xl p-8 shadow-sm border border-neutral-200 hover:shadow-xl transition-all duration-400 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/0 via-emerald-50/0 to-emerald-100/0 group-hover:via-emerald-50/60 group-hover:to-emerald-100/70 transition-colors duration-500" />
              <div className="relative z-10">
                <div className="text-4xl mb-4 drop-shadow-sm">{item.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold text-neutral-900 tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-emerald-700 font-semibold text-base md:text-lg mb-3">
                  {item.stat}
                </p>
                <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChangeSection;
