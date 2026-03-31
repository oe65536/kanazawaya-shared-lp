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
    <div className="min-h-screen bg-[#f0f9ff] font-sans text-gray-800 flex flex-col">
      {/* SIGNBOARD BANNER (トップ画像) */}
      <div className="w-full shadow-lg">
        <img
          src="/kanban1.jpg"
          alt="金沢屋 看板"
          className="w-full aspect-[768/328] object-cover object-top"
        />
      </div>

      {/* MAIN CONTENT AREA */}
      <main className="flex-grow w-full max-w-5xl mx-auto flex flex-col items-center px-4 sm:px-0">
        
        {/* === 1ページ目 (全体表示＋最上段・最下段テキスト) === */}
        <section className="w-full bg-white shadow-xl relative block mb-8">
          <div className="relative w-full h-auto">
            {/* Main Background Image - フル表示 */}
            <img 
              src="/a10325ba.png" 
              alt="ビフォーアフター 全体" 
              className="w-full h-auto block"
            />
            
            {/* 24分割グリッドで上下1/24の場所にテキストを配置 */}
            <div 
              className="absolute inset-0 grid"
              style={{ gridTemplateRows: "repeat(24, minmax(0, 1fr))" }}
            >
              {/* 最上段 (1番目の行) - Before / After はそのままの書体 */}
              <div 
                className="flex items-center justify-around w-full"
                style={{ gridRowStart: 1 }}
              >
                <div className="w-1/2 flex justify-center">
                  <span className="text-2xl sm:text-4xl md:text-5xl font-black text-white drop-shadow-md tracking-wider">
                    Before
                  </span>
                </div>
                <div className="w-1/2 flex justify-center">
                  <span className="text-2xl sm:text-4xl md:text-5xl font-black text-white drop-shadow-md tracking-wider">
                    After
                  </span>
                </div>
              </div>
              
              {/* 最下段 (24番目の行) - ここから草書体風 */}
              <div 
                className="flex items-center justify-center w-full"
                style={{ gridRowStart: 24 }}
              >
                <p 
                  className="text-lg sm:text-3xl md:text-4xl font-normal text-white drop-shadow-lg tracking-widest"
                  style={{ fontFamily: "'HG草書体', 'HG行書体', 'HGS行書体', 'ヒラギノ行書 W4', serif" }}
                >
                  替えるだけで、毎日が変わる
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* === 2ページ目 (既存: 上下カット + 6等分テキストオーバーレイ) === */}
        <section className="w-full bg-white shadow-xl relative block mb-12">
          {/*
            元の画像サイズは 幅1414 × 高さ2000。
            上下1/24ずつカット（表示領域は22/24の高さ）するため、
            コンテナのアスペクト比を「1414 / (2000 * 22 / 24)」= 1414 / 1833.3333 に設定。
          */}
          <div 
            className="relative w-full overflow-hidden"
            style={{ aspectRatio: "1414 / 1833.3333" }}
          >
            {/* Main Background Image */}
            <img 
              src="/a10325ba.png" 
              alt="ビフォーアフター 詳細" 
              className="absolute w-full h-auto left-0"
              style={{ top: "calc(100% * -1 / 22)" }} 
            />

            {/* 画像を暗くするオーバーレイ (文字を見やすくするため) */}
            <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>

            {/* Text Overlays in 6 equal rows - 草書体風 */}
            <div 
              className="absolute inset-0 grid grid-rows-6"
              style={{ fontFamily: "'HG草書体', 'HG行書体', 'HGS行書体', 'ヒラギノ行書 W4', serif" }}
            >
              {overlayData.map((item, index) => (
                <div key={index} className="flex flex-col justify-center w-full h-full px-6 sm:px-10 md:px-16 text-left">
                  <h2 className="text-lg sm:text-2xl md:text-3xl font-normal text-white mt-1 mb-1 md:mb-2 drop-shadow-lg">
                    {item.title}
                  </h2>
                  <div className="w-full">
                    {item.text.split('\n').map((line, i) => (
                      <p key={i} className="text-xs sm:text-base md:text-xl text-white font-normal leading-relaxed drop-shadow-lg">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-sky-900 text-sky-200 py-10 px-4 text-center border-t border-sky-800 mt-auto">
        <div className="mb-6 space-y-2">
          <p className="text-sky-300 font-bold mb-2">お電話でのご相談・お見積り（無料）</p>
          <a href="tel:0120-759-010" className="text-3xl md:text-5xl font-black text-white hover:text-sky-300 transition-colors inline-flex items-center gap-2">
            <span className="text-2xl">📞</span>0120-759-010
          </a>
        </div>
        <p className="text-sm mt-8 border-t border-sky-800/50 pt-6">© 2026 金沢屋 静岡葵店 All rights reserved.</p>
      </footer>
    </div>
  );
}
