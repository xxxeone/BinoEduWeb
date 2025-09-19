import React from "react";
import { brochure } from "@/lib/pdfContent";
import { Button } from "@/components/ui/button";

const ProgramOverviewSection = () => {
  return (
    <section id="brochure" className="py-24 bg-white border-y border-[#eee]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12 flex items-end justify-between gap-6 flex-wrap">
          <div>
            <div className="text-sm tracking-widest text-[#a1a1aa] mb-2">{brochure.meta.duration} · 第{brochure.meta.edition}版</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1e193a] tracking-tight">{brochure.meta.title}</h2>
            <p className="mt-4 text-lg text-[#6b7280] max-w-2xl">{brochure.summary.intro}</p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="cta"
              className="rounded-full bg-[#1e193a] text-white hover:bg-[#2a2550]"
              onClick={() => window.open("/brochure.pdf", "_blank")}
            >
              查看 PDF 手册
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-[#a21caf] text-[#a21caf] hover:bg-[#f6f2fa]"
              onClick={() => window.open("/brochure.pdf", "_blank")}
            >
              下载手册
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="col-span-2 bg-[#fafafa] rounded-2xl border border-[#eee] p-8">
            <div className="text-[#a21caf] text-sm font-semibold tracking-widest mb-3">项目主张</div>
            <div className="text-2xl font-bold text-[#1e193a] leading-relaxed">{brochure.summary.tagline}</div>
            <div className="mt-6 grid sm:grid-cols-3 gap-6">
              {brochure.pillars.map((p, i) => (
                <div key={i} className="bg-white rounded-xl border border-[#eee] p-4">
                  <div className="text-sm text-[#a1a1aa] mb-1">哲学支柱 {i + 1}</div>
                  <div className="font-semibold text-[#1e193a]">{p}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#fafafa] rounded-2xl border border-[#eee] p-8">
            <div className="text-[#a21caf] text-sm font-semibold tracking-widest mb-3">学习成果</div>
            <ul className="space-y-3">
              {brochure.outcomes.map((o, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#d1b354] flex-shrink-0" />
                  <span className="text-[#1e193a]">{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <div className="text-[#a21caf] text-sm font-semibold tracking-widest mb-4">课程模块</div>
          <div className="grid md:grid-cols-3 gap-6">
            {brochure.modules.map((m, i) => (
              <div key={i} className="bg-white rounded-xl border border-[#eee] p-6">
                <div className="text-sm text-[#a1a1aa] mb-1">模块 {i + 1}</div>
                <div className="font-semibold text-[#1e193a] mb-3">{m.title}</div>
                <ul className="space-y-2">
                  {m.points.map((pt, k) => (
                    <li key={k} className="flex gap-3 text-[#1e193a]">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#d1b354] flex-shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramOverviewSection;
