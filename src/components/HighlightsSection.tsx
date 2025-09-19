import { Button } from "@/components/ui/button";
import businessmanImg from "@/assets/businessman-alone.png";
import kyoceraHqImg from "@/assets/Kyocera-hq.jpg";
import toyotaHqImg from "@/assets/toyota-hq.jpg";
import okayamaImg from "@/assets/okayama.webp";
import kawamuraImg from "@/assets/leg.jpg";
import sushiImg from "@/assets/Sushi.jpg";

const enterprises = [
	{
		name: "京瓷集团总部",
		description:
			"稻盛和夫创办的第一家世界五百强；感受「敬天爱人」哲学如何渗透企业组织与管理；从精密陶瓷起步，拓展至汽车、工业、AI 等。",
		tags: ["敬天爱人", "阿米巴经营", "六项精进"],
		highlights: ["高层/资深经理座谈：哲学如何落地经营", "参访展厅与历史馆，洞见长期主义"],
		image: kyoceraHqImg,
	},
	{
		name: "丰田汽车总部",
		description:
			"世界五百强 – 2024年第15名；精益生产（Lean）与持续改善（Kaizen）的世界级文化；进入电动车时代仍稳居销售与营收高位。",
		tags: ["精益生产", "Kaizen 改善", "现场主义"],
		highlights: ["TPS 实地学习：看板/节拍/标准作业", "与一线管理者交流持续改善机制"],
		image: toyotaHqImg,
	},
	{
		name: "冈山健康餐饮集团",
		description:
			"从农场食材开发–生产–流通–菜单规划–直营餐厅–品牌孵化–产业推广的一体化模型；日本健康餐饮标杆。",
		tags: ["一体化链路", "品质管理", "顾客至上"],
		highlights: ["中央厨房/冷链流程参观", "标准化菜单背后的数据与运营"],
		image: okayamaImg,
	},
	{
		name: "川村义肢",
		description:
			"义肢、矫形器与辅助用具；高度定制与创新研发，从小众扎根成为行业「隐形冠军」，实践稻盛经营理念。",
		tags: ["隐形冠军", "定制化研发", "匠心精神"],
		highlights: ["研发与打样工坊参访", "个案复健流程与同理设计"],
		image: kawamuraImg,
	},
	{
		name: "梅守寿司",
		description:
			"创办人系稻盛和夫亲弟子；分享「何谓经营 / 使命 / 上下同心」；体验企业每日晨会，理念先行如何落地。",
		tags: ["晨会", "使命/经营理念", "上下同心"],
		highlights: ["参与晨会：理念背诵与目标共识", "与创办团队茶叙分享经营体会"],
		image: sushiImg,
	},
];

const HighlightsSection = () => {
	return (
		<section 
			id="highlights" 
			className="relative w-full min-h-screen py-32 overflow-hidden"
			style={{
				background: `
					linear-gradient(135deg, 
						rgba(15, 23, 42, 0.95) 0%, 
						rgba(30, 41, 59, 0.9) 50%, 
						rgba(15, 23, 42, 0.95) 100%
					),
					url(${businessmanImg})
				`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundAttachment: 'fixed'
			}}
		>
			{/* Animated background elements */}
			<div className="absolute inset-0 opacity-5">
				<div className="absolute top-20 left-20 w-96 h-96 bg-emerald-500/30 rounded-full blur-3xl animate-[float_20s_ease-in-out_infinite]" />
				<div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-[float_25s_ease-in-out_infinite_reverse]" />
				<div className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-[float_30s_ease-in-out_infinite]" />
			</div>

			{/* Main content */}
			<div className="relative z-10 max-w-8xl mx-auto px-6">
				{/* Section header */}
				<div className="text-center mb-24 opacity-0 animate-[fade-in-up_1s_ease-out_forwards]">
					<h2 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight text-white mb-8 drop-shadow-[0_8px_32px_rgba(0,0,0,0.8)]">
						项目<span className="text-emerald-400 hover:text-emerald-300 transition-all duration-500 cursor-pointer hover:drop-shadow-[0_0_30px_rgba(52,211,153,1)] hover:scale-110 inline-block">亮点</span>
					</h2>
					<div className="w-32 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto mb-8 rounded-full shadow-[0_0_20px_rgba(52,211,153,0.6)]" />
					<p className="text-2xl md:text-3xl text-gray-200 font-semibold max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
						以稻盛经营哲学为底层，走进日本标杆企业<br />
						直面「现场 · 理念 · 机制」的真实运作
					</p>
				</div>
				{/* Enterprise cards */}
				<div className="space-y-32">
					{enterprises.map((enterprise, index) => (
						<div
							key={index}
							className={`group flex flex-col lg:flex-row items-center gap-16 opacity-0 animate-[slide-in-view_1s_ease-out_forwards] ${
								index % 2 === 0 ? "" : "lg:flex-row-reverse"
							}`}
							style={{ 
								animationDelay: `${0.3 + index * 0.2}s`,
								scrollSnapAlign: "start" 
							}}
						>
							{/* Image container */}
							<div className="w-full lg:w-1/2 relative">
								<div className="relative overflow-hidden rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.4)] group-hover:shadow-[0_30px_80px_rgba(0,0,0,0.6)] transition-all duration-700 transform group-hover:scale-105 group-hover:-rotate-1">
									<img
										src={enterprise.image}
										alt={enterprise.name}
										className="w-full h-[400px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
										loading="lazy"
									/>
									{/* Image overlay */}
									<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
									
									{/* Floating accent */}
									<div className="absolute top-6 right-6 w-4 h-4 bg-emerald-400 rounded-full shadow-lg opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500" />
								</div>
							</div>

							{/* Content container */}
							<div className={`w-full lg:w-1/2 space-y-8 ${index % 2 === 0 ? "lg:pl-8" : "lg:pr-8"}`}>
								{/* Title */}
								<div className="space-y-4">
									<h3 className="text-4xl lg:text-6xl font-black tracking-tight text-white group-hover:text-emerald-100 transition-colors duration-500 drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
										{enterprise.name}
									</h3>
									
									{/* Tags */}
									<div className="flex flex-wrap gap-3">
										{enterprise.tags?.map((tag: string, i: number) => (
											<span
												key={i}
												className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-gray-200 text-sm font-medium hover:bg-white/20 hover:text-white transition-all duration-300 shadow-lg"
											>
												{tag}
											</span>
										))}
									</div>
								</div>

								{/* Description */}
								<p className="text-xl lg:text-2xl text-gray-200 leading-relaxed font-medium group-hover:text-gray-100 transition-colors duration-500 drop-shadow-lg">
									{enterprise.description}
								</p>

								{/* Highlights */}
								{enterprise.highlights?.length ? (
									<div className="space-y-4">
										<h4 className="text-lg font-bold text-emerald-400 tracking-wide">核心亮点</h4>
										<ul className="space-y-4">
											{enterprise.highlights.map((highlight: string, k: number) => (
												<li key={k} className="flex items-start gap-4 group/item cursor-pointer transition-all duration-500 hover:bg-white/5 hover:backdrop-blur-sm rounded-xl p-4 -mx-4 hover:shadow-[0_0_30px_rgba(52,211,153,0.3)]">
													<div className="mt-2 w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0 shadow-[0_0_10px_rgba(52,211,153,0.8)] group-hover/item:shadow-[0_0_20px_rgba(52,211,153,1)] group-hover/item:scale-125 transition-all duration-300" />
													<span className="text-lg lg:text-xl text-gray-200 leading-relaxed group-hover/item:text-white group-hover/item:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all duration-300 relative">
														{highlight}
														{/* Glow effect on hover */}
														<div className="absolute inset-0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-emerald-400/20 via-transparent to-blue-400/20 blur-lg -z-10 rounded-lg" />
													</span>
												</li>
											))}
										</ul>
									</div>
								) : null}
							</div>
						</div>
					))}
				</div>

				{/* Bottom CTA */}
				<div className="text-center mt-32 opacity-0 animate-[fade-in-up_1s_ease-out_3s_forwards]">
					<div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-emerald-400 via-blue-500 to-emerald-400 shadow-[0_0_40px_rgba(52,211,153,0.4)]">
						<Button
							variant="default"
							size="lg"
							className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xl px-12 py-6 rounded-xl border-0 transition-all duration-300 hover:scale-105"
							onClick={() =>
								window.open("https://wa.me/60167100678", "_blank")
							}
						>
							立即报名 / Sign Up Now
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HighlightsSection;