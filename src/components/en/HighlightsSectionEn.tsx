import { Button } from "@/components/ui/button";
import businessmanImg from "@/assets/businessman-alone.png";
import kyoceraHqImg from "@/assets/Kyocera-hq.jpg";
import toyotaHqImg from "@/assets/toyota-hq.jpg";
import okayamaImg from "@/assets/okayama.webp";
import kawamuraImg from "@/assets/leg.jpg";
import sushiImg from "@/assets/Sushi.jpg";

const enterprises = [
	{
		name: "Kyocera Group HQ",
		description:
			"The first Fortune 500 company founded by Kazuo Inamori; Experience how 'Respect Heaven, Love People' philosophy permeates corporate organization and management; From precision ceramics to automotive, industrial, AI expansion.",
		tags: ["Respect Heaven Love People", "Amoeba Management", "Six Disciplines"],
		highlights: ["Executive/Senior Manager Dialogue: How Philosophy Translates to Operations", "Visit Exhibition Hall & History Museum, Insight into Long-termism"],
		image: kyoceraHqImg,
	},
	{
		name: "Toyota Motor HQ",
		description:
			"Fortune 500 – 2024 Rank 15th; World-class culture of Lean Production and Continuous Improvement (Kaizen); Maintaining high sales and revenue in the electric vehicle era.",
		tags: ["Lean Production", "Kaizen Improvement", "Genchi Genbutsu"],
		highlights: ["TPS On-site Learning: Kanban/Takt/Standard Work", "Exchange with Frontline Managers on Continuous Improvement Mechanisms"],
		image: toyotaHqImg,
	},
	{
		name: "Okayama Health Food Group",
		description:
			"Integrated model from farm ingredient development–production–distribution–menu planning–direct restaurants–brand incubation–industry promotion; Japan's healthy dining benchmark.",
		tags: ["Integrated Chain", "Quality Management", "Customer First"],
		highlights: ["Central Kitchen/Cold Chain Process Tour", "Data & Operations Behind Standardized Menus"],
		image: okayamaImg,
	},
	{
		name: "Kawamura Gishi",
		description:
			"Prosthetics, orthoses and assistive devices; Highly customized and innovative R&D, growing from niche to industry 'hidden champion', practicing Inamori management philosophy.",
		tags: ["Hidden Champion", "Customized R&D", "Craftsmanship Spirit"],
		highlights: ["R&D & Prototyping Workshop Visit", "Individual Rehabilitation Process & Empathetic Design"],
		image: kawamuraImg,
	},
	{
		name: "Umemori Sushi",
		description:
			"Founder is Kazuo Inamori's direct disciple; Sharing 'What is Management / Mission / Unity'; Experience daily company morning meetings, how ideology-first lands in practice.",
		tags: ["Morning Meeting", "Mission/Management Philosophy", "Unity"],
		highlights: ["Participate in Morning Meeting: Philosophy Recitation & Goal Consensus", "Tea Session with Founding Team Sharing Management Experience"],
		image: sushiImg,
	},
];

const HighlightsSectionEn = () => {
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
						Program <span className="text-emerald-400 hover:text-emerald-300 transition-all duration-500 cursor-pointer hover:drop-shadow-[0_0_30px_rgba(52,211,153,1)] hover:scale-110 inline-block">Highlights</span>
					</h2>
					<div className="w-32 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto mb-8 rounded-full shadow-[0_0_20px_rgba(52,211,153,0.6)]" />
					<p className="text-2xl md:text-3xl text-gray-200 font-semibold max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
						Grounded in Inamori's management philosophy, enter Japan's benchmark enterprises<br />
						Face the real operations of "Gemba · Philosophy · Mechanisms"
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
										<h4 className="text-lg font-bold text-emerald-400 tracking-wide">Key Highlights</h4>
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
							Register Now
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HighlightsSectionEn;