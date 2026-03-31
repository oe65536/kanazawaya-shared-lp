import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "金沢屋 静岡葵店 - 張替ビフォーアフター",
  description: "金沢屋静岡葵店の張替ビフォーアフター実績をご紹介します。",
  robots: {
    index: false,
    follow: false,
  },
};

const overlayData = [
  {
    title: "襖",
    text: "汚れや破れで古く見えていた襖も、張替えるだけで空間の印象が一気に変わります。\nくすんでいた和室が明るくなり、清潔感のある空間へ。デザインを変えれば今っぽい和モダンな雰囲気にも仕上がります。",
  },
  {
    title: "障子",
    text: "黄ばみや破れのある障子は部屋を暗く見せがちですが、張替えることで柔らかい光が広がる明るい空間に変わります。\n見た目だけでなく、落ち着きのある居心地の良さも取り戻せます。",
  },
  {
    title: "網戸",
    text: "破れやたるみのある網戸は、虫の侵入や見た目の悪さの原因に。\n張替えることで見た目がスッキリし、風通しはそのままに快適で安心できる空間になります。",
  },
  {
    title: "畳",
    text: "色あせた畳を新しくするだけで、部屋の印象は大きく変わります。\nい草の香りと清潔感が戻り、自然とくつろげる空間に。見た目と使い心地の両方が整います。",
  },
  {
    title: "窓",
    text: "寒さ・暑さ・騒音の原因になりやすい窓も、内窓をつけることで一気に改善。\n室内はより快適になり、冷暖房効率も上がることで暮らしやすさが大きく変わります。",
  },
  {
    title: "壁",
    text: "寒さ・暑さ・騒音の原因になりやすい窓も、内窓をつけることで一気に改善。\n室内はより快適になり、冷暖房効率も上がることで暮らしやすさが大きく変わります。",
  }
];
export default function A10325Page() {
  return (
    <div className="h-[100dvh] overflow-y-auto overflow-x-hidden snap-y snap-mandatory bg-black font-sans text-gray-800 flex flex-col scroll-smooth">
      
      {/* 行書体・筆文字系のWebフォント（Google Fonts: Yuji Syuku）を読み込みスマートフォンでの明朝体化を防ぐ */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Yuji+Syuku&display=swap');
        .font-gyosho {
          font-family: 'Yuji Syuku', 'HG草書体', 'HG行書体', 'HGS行書体', 'ヒラギノ行書 W4', serif;
        }
      `}} />

      {/* === 1ページ目 (全体表示) === */}
      <section className="h-[100dvh] w-full snap-start shrink-0 flex items-center justify-center bg-black overflow-hidden relative p-0 m-0">
        <div 
          className="relative mx-auto flex items-center justify-center"
          style={{ 
            width: "100%",
            maxWidth: "calc(100dvh * 1414 / 2000)",
            aspectRatio: "1414 / 2000",
            containerType: "inline-size" 
          }}
        >
          <img 
            src="/a10325ba.png" 
            alt="ビフォーアフター 全体" 
            className="absolute inset-0 w-full h-full block"
          />
          
          <div 
            className="absolute inset-0 grid"
            style={{ gridTemplateRows: "repeat(24, minmax(0, 1fr))" }}
          >
            {/* Top Text */}
            <div className="flex items-center justify-around w-full" style={{ gridRowStart: 1 }}>
              <div className="w-1/2 flex justify-center">
                <span className="font-black text-white drop-shadow-md tracking-wider leading-none" style={{ fontSize: "6.5cqi" }}>Before</span>
              </div>
              <div className="w-1/2 flex justify-center">
                <span className="font-black text-white drop-shadow-md tracking-wider leading-none" style={{ fontSize: "6.5cqi" }}>After</span>
              </div>
            </div>
            {/* Bottom Text */}
            <div className="flex items-center justify-center w-full" style={{ gridRowStart: 24 }}>
              <p 
                className="font-normal font-gyosho text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] tracking-widest leading-none"
                style={{ fontSize: "5.5cqi" }}
              >
                替えるだけで、毎日が変わる
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === 2ページ目 (詳細表示) === */}
      <section className="h-[100dvh] w-full snap-start shrink-0 flex items-center justify-center bg-black overflow-hidden relative p-0 m-0">
        <div 
          className="relative mx-auto flex items-center justify-center"
          style={{ 
            width: "100%",
            maxWidth: "calc(100dvh * 1414 / 2000)",
            aspectRatio: "1414 / 2000",
            containerType: "inline-size" 
          }}
        >
          
          <img 
            src="/a10325ba.png" 
            alt="ビフォーアフター 詳細" 
            className="absolute inset-0 w-full h-full block"
          />

          {/* 画像を暗くするオーバーレイ (bg-black/40) */}
          <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

          {/* Text Overlays accurately mapped to the image */}
          <div 
            className="absolute inset-0 grid font-gyosho"
            style={{ 
              gridTemplateRows: "repeat(24, minmax(0, 1fr))"
            }}
          >
            {/* The middle 22 units for the 6 rows of explanations */}
            <div 
              className="grid grid-rows-6 h-full w-full"
              style={{ gridRow: "2 / span 22" }}
            >
              {overlayData.map((item, index) => (
                <div key={index} className="flex flex-col justify-center w-full h-full text-left border-b border-white/10 last:border-b-0" style={{ paddingInline: "4cqi" }}>
                  <h2 className="font-normal text-white drop-shadow-lg leading-tight" style={{ fontSize: "4.8cqi", marginBottom: "0.5cqi" }}>
                    {item.title}
                  </h2>
                  <div className="w-full">
                    {item.text.split('\n').map((line, i) => (
                      <p key={i} className="text-white font-normal leading-tight drop-shadow-md" style={{ fontSize: "2.8cqi" }}>
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
