import React from "react";

const BrochureViewer = () => {
  return (
    <section className="py-16 bg-[#f8f9fb] border-t border-[#eee]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-2xl font-bold text-[#1e193a]">手册预览</h3>
          <a
            href="/brochure.pdf"
            target="_blank"
            rel="noreferrer"
            className="text-[#a21caf] hover:underline"
          >
            在新窗口中打开
          </a>
        </div>
        <div className="w-full rounded-xl overflow-hidden border border-[#e8e8e8] bg-white">
          <object data="/brochure.pdf" type="application/pdf" className="w-full h-[80vh]">
            <p className="p-6 text-[#6b7280]">
              无法内嵌显示 PDF。请点击
              <a className="text-[#a21caf] underline ml-1" href="/brochure.pdf" target="_blank" rel="noreferrer">这里</a>
              查看或下载。
            </p>
          </object>
        </div>
      </div>
    </section>
  );
};

export default BrochureViewer;
