import { Button } from "@/components/ui/button";
import businessmanImg from "@/assets/businessman-alone.png";
import kyotoImg from "@/assets/kyocera2.jpg";
import day2Img from "@/assets/sushi3.jpg";
import osakaImg from "@/assets/osaka.png";
import toyotaImg from "@/assets/toyota.jpg";
import sushi4Img from "@/assets/shushi4.jpg";
import balikImg from "@/assets/balik.jpg";

// Gallery photos from Photojapan folder
import galleryImg1 from "@/assets/Photojapan/photojapan1.jpeg";
import galleryImg2 from "@/assets/Photojapan/photojapan2.jpeg";
import galleryImg3 from "@/assets/Photojapan/photojapan3.jpeg";
import galleryImg4 from "@/assets/Photojapan/photojapan4.jpeg";
import galleryImg5 from "@/assets/Photojapan/photojapan5.jpeg";
import galleryImg6 from "@/assets/Photojapan/photojapan6.jpeg";
import galleryImg7 from "@/assets/Photojapan/photojapan7.jpeg";
import galleryImg8 from "@/assets/Photojapan/photojapan8.jpeg";
import galleryImg9 from "@/assets/Photojapan/photojapan9.jpeg";
import galleryImg10 from "@/assets/Photojapan/photojapan10.jpeg";
import galleryImg11 from "@/assets/Photojapan/photojapan11.jpg";
import galleryImg12 from "@/assets/balik.jpg";
// New photos
import galleryImg13 from "@/assets/Photojapan/IMG_4571.jpeg";
import galleryImg14 from "@/assets/Photojapan/IMG_4760.jpeg";
import galleryImg15 from "@/assets/Photojapan/IMG_4807.jpeg";
import galleryImg16 from "@/assets/Photojapan/IMG_4817.jpeg";
import galleryImg17 from "@/assets/Photojapan/IMG_4993.jpeg";

const itinerary = [
	{
		day: "Day 1",
		title: "经营之道 · 相聚起点",
		color: "bg-red-600",
		activities: [
			{ icon: "✈️", text: "抵达大阪：常规报道" },
			{ icon: "🍽️", text: "开营晚宴+日本礼仪基础课程" },
		],
		focus: ["建立共同语言：稻盛经营与礼仪之本", "设定个人学习目标与期待"],
		extra: ["SpaWorld Osaka 温泉主题乐园"],
		image: osakaImg,
	},
	{
		day: "Day 2",
		title: "产业标杆 · 从心出发",
		color: "bg-red-600",
		activities: [
			{ icon: "🏢", text: "健康餐饮集团 企业参访1" },
			{ icon: "🏥", text: "义肢集团 企业参访2" },
			{ icon: "🍜", text: "道顿堀/心斋桥 自由活动" },
		],
		focus: ["一体化餐饮链路的标准化与品质", "隐形冠军的匠心与用户同理"],
		extra: [],
		image: day2Img,
	},
	{
		day: "Day 3",
		title: "走进稻盛 · 解析京瓷",
		color: "bg-red-600",
		activities: [
			{ icon: "🏭", text: "京瓷集团总部 企业参访3" },
			{ icon: "🏛️", text: "稻盛和夫纪念馆" },
			{ icon: "⛰️", text: "岚山 京都山水人文行走" },
		],
		focus: ["敬天爱人与阿米巴的历史脉络", "长期主义与事业观"],
		extra: ["复盘会议+嘉宾分享"],
		image: kyotoImg,
	},
	{
		day: "Day 4",
		title: "精益制造 · 驱驭未来",
		color: "bg-red-600",
		activities: [
			{ icon: "🚗", text: "丰田汽车总部 企业参访4" },
			{ icon: "⛩️", text: "伏见稻荷大社" },
			{ icon: "🛕", text: "清水寺二三年坂" },
		],
		focus: ["TPS 精益思维：节拍/拉动/自働化", "现场主义的管理要求"],
		extra: ["京都-名古屋往返"],
		image: toyotaImg,
	},
	{
		day: "Day 5",
		title: "经营如艺 · 寿司之道",
		color: "bg-red-600",
		activities: [
			{ icon: "🍣", text: "梅守寿司 企业参访5" },
			{ icon: "👨‍🍳", text: "寿司DIY制作体验" },
			{ icon: "🎉", text: "闭营晚宴" },
		],
		focus: ["理念先行的门店经营", "上下同心的组织氛围"],
		extra: ["复盘会议+总结"],
		image: sushi4Img,
	},
	{
		day: "Day 6",
		title: "延续初心 · 满载而归",
		color: "bg-red-600",
		activities: [{ icon: "✈️", text: "送机/各自解散" }],
		focus: ["个人行动计划：把学习带回团队"],
		extra: ["一次旅行 · 一生教育"],
		image: balikImg,
	},
];

// Gallery photos data
const galleryPhotos = [
	{ id: 1, image: galleryImg1, size: "normal" },
	{ id: 2, image: galleryImg2, size: "normal" },
	{ id: 3, image: galleryImg3, size: "normal" },
	{ id: 4, image: galleryImg4, size: "normal" },
	{ id: 5, image: galleryImg5, size: "normal" },
	{ id: 6, image: galleryImg6, size: "normal" },
	{ id: 7, image: galleryImg7, size: "normal" },
	{ id: 8, image: galleryImg8, size: "normal" },
	{ id: 9, image: galleryImg9, size: "normal" },
	{ id: 10, image: galleryImg10, size: "normal" },
	{ id: 11, image: galleryImg11, size: "normal" },
	{ id: 12, image: galleryImg12, size: "wide" }, // balik.jpg - only wide photo
	{ id: 13, image: galleryImg13, size: "normal" },
	{ id: 14, image: galleryImg14, size: "normal" },
	{ id: 15, image: galleryImg15, size: "normal" },
	{ id: 16, image: galleryImg16, size: "normal" },
	{ id: 17, image: galleryImg17, size: "normal" },
];

const ItinerarySection = () => {
	return (
		<section
			id="itinerary"
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
				<div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-[float_20s_ease-in-out_infinite]" />
				<div className="absolute bottom-20 right-20 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl animate-[float_25s_ease-in-out_infinite_reverse]" />
				<div className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-[float_30s_ease-in-out_infinite]" />
			</div>

			{/* Main content */}
			<div className="relative z-10 max-w-8xl mx-auto px-6">
				{/* Section header */}
				<div className="text-center mb-24 opacity-0 animate-[fade-in-up_1s_ease-out_forwards]">
					<h2 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight text-white mb-8 drop-shadow-[0_8px_32px_rgba(0,0,0,0.8)]">
						行程<span className="text-blue-400 hover:text-blue-300 transition-all duration-500 cursor-pointer hover:drop-shadow-[0_0_30px_rgba(59,130,246,1)] hover:scale-110 inline-block">安排</span>
					</h2>
					<div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto mb-8 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.6)]" />
					<p className="text-2xl md:text-3xl text-gray-200 font-semibold max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
						6天5夜 · 从理念到现场 · 从标杆到方法<br />
						每一天都有清晰的学习聚焦与可带走的实践要点
					</p>
				</div>
				{/* Itinerary grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
					{itinerary.map((day, idx) => (
						<div
							key={idx}
							className="group relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] opacity-0 animate-[slide-in-view_0.8s_ease-out_forwards]"
							style={{ animationDelay: `${idx * 0.2}s` }}
						>
							{/* Day header with gradient */}
							<div className="relative h-16 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-between px-6 overflow-hidden">
								<div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90" />
								<div className="relative z-10 flex items-center gap-4">
									<span className="text-2xl font-black text-white tracking-wider">{day.day}</span>
									<div className="w-px h-8 bg-white/30" />
									<span className="text-lg font-bold text-white/90">{day.title}</span>
								</div>
								<div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
							</div>

							{/* Content */}
							<div className="p-6 space-y-6">
								{/* Image */}
								<div className="relative rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
									<img
										src={day.image}
										alt={day.title}
										className="w-full h-48 object-cover"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
								</div>

								{/* Activities */}
								<div className="space-y-3">
									{day.activities.map((act, i) => (
										<div
											key={i}
											className="flex items-start gap-3 group/item hover:bg-white/5 p-2 rounded-lg transition-colors duration-300"
										>
											<span className="text-2xl group-hover/item:scale-110 transition-transform duration-300">
												{act.icon}
											</span>
											<span className="text-gray-200 font-medium leading-relaxed">{act.text}</span>
										</div>
									))}
								</div>

								{/* Focus points */}
								{day.focus && day.focus.length > 0 && (
									<div className="space-y-3">
										<h4 className="text-emerald-400 font-bold text-lg flex items-center gap-2">
											<span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
											学习聚焦
										</h4>
										<div className="space-y-2">
											{day.focus.map((f: string, fi: number) => (
												<div key={fi} className="flex items-start gap-3">
													<span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 animate-pulse" />
													<span className="text-gray-300 text-sm leading-relaxed">{f}</span>
												</div>
											))}
										</div>
									</div>
								)}

								{/* Extra info */}
								{day.extra && day.extra.length > 0 && (
									<div className="flex flex-wrap gap-2">
										{day.extra.map((e, i) => (
											<span
												key={i}
												className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-medium rounded-full border border-blue-400/30"
											>
												{e}
											</span>
										))}
									</div>
								)}
							</div>

							{/* Hover glow effect */}
							<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
								<div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl" />
								<div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl" />
							</div>
						</div>
					))}
				</div>
				{/* CTA Section */}
				<div className="text-center opacity-0 animate-[fade-in-up_1s_ease-out_forwards] animation-delay-[1.2s]">
					<div className="mb-8">
						<p className="text-xl text-gray-300 mb-6 font-medium">
							准备好开启这场深度学习之旅了吗？
						</p>
					</div>
					<Button
						variant="cta"
						size="lg"
						className="group relative overflow-hidden bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-400 hover:to-blue-400 text-white font-bold px-12 py-6 text-xl rounded-2xl shadow-[0_10px_40px_rgba(16,185,129,0.4)] hover:shadow-[0_15px_50px_rgba(16,185,129,0.6)] transition-all duration-500 hover:scale-105 hover:-translate-y-2"
						onClick={() =>
							window.open("https://wa.me/60167100678", "_blank")
						}
					>
						<span className="relative z-10 flex items-center gap-3">
							<span>立即报名 / Sign Up Now</span>
							<span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
						</span>
						<div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
					</Button>
				</div>

				{/* Gallery Section */}
				<div className="mt-32 opacity-0 animate-[fade-in-up_1s_ease-out_forwards] animation-delay-[1.4s]">
					{/* Gallery header */}
					<div className="text-center mb-16">
						<h3 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white mb-6 drop-shadow-[0_8px_32px_rgba(0,0,0,0.8)]">
							精彩<span className="text-emerald-400 hover:text-emerald-300 transition-all duration-500 cursor-pointer hover:drop-shadow-[0_0_30px_rgba(52,211,153,1)] hover:scale-110 inline-block">相册</span>
						</h3>
						<div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-green-400 mx-auto mb-6 rounded-full shadow-[0_0_20px_rgba(52,211,153,0.6)]" />
						<p className="text-xl text-gray-300 font-medium max-w-3xl mx-auto leading-relaxed">
							记录每一个学习瞬间 · 珍藏每一份美好回忆
						</p>
					</div>

					{/* Gallery grid */}
					<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
						{galleryPhotos.map((photo, idx) => {
							// Special sizing for balik.jpg
							const isWide = photo.size === "wide";
							const gridClass = isWide ? "col-span-2" : "col-span-1";
							const aspectClass = isWide ? "aspect-[2/1]" : "aspect-square";
							
							return (
								<div
									key={photo.id}
									className={`group relative bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-[0_15px_40px_rgba(0,0,0,0.4)] opacity-0 animate-[slide-in-view_0.8s_ease-out_forwards] ${gridClass}`}
									style={{ animationDelay: `${idx * 0.1 + 1.6}s` }}
								>
									{/* Photo */}
									<div className={`relative ${aspectClass} overflow-hidden`}>
										<img
											src={photo.image}
											alt={`精彩瞬间 ${photo.id}`}
											className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
									</div>

									{/* Hover glow effect */}
									<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
										<div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-xl" />
										<div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-xl blur-lg" />
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default ItinerarySection;