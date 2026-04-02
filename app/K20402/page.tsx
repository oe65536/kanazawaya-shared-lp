import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "金沢屋 - プレミアム・ギャラリー",
  description: "金沢屋が厳選した、美しき和のパネル・からかみを展示するバーチャルギャラリーです。",
  robots: {
    index: false,
    follow: false,
  },
};

export default function K20402GalleryPage() {
  const panels = [
    {
      id: "102",
      title: "葛布 (102)",
      subtitle: "KUZUFU / 天然素材の温もり",
      desc: "天然素材ならではの豊かな風合いが魅力。光の当たり方で繊細に表情を変え、格式高い上質な和空間を演出します。",
      src: "/panel/102葛布/_DSC7538.JPG"
    },
    {
      id: "108",
      title: "七宝繋ぎ3枚セット・緑 (108〜111)",
      subtitle: "SHIPPO-TSUNAGI / 繁栄とご縁",
      desc: "ご縁や円満を象徴する吉祥文様「七宝」。鮮やかで深い緑が、静寂の中にも空間へ確かな広がりをもたらします。",
      src: "/panel/108～111七宝繋ぎ3枚セット・緑/20230214_124505.jpg"
    },
    {
      id: "115",
      title: "銀・山桐 (江戸からかみ 115)",
      subtitle: "EDO KARAKAMI / 伝統の輝き",
      desc: "日本古来の技法が息づく江戸からかみ。鈍く光る銀の輝きと優美な山桐の文様が、圧倒的な風格を漂わせます。",
      src: "/panel/115銀・山桐(江戸からかみ)/DSC_5407.JPG"
    },
    {
      id: "117",
      title: "青海波・中 (117)",
      subtitle: "SEIGAIHA / 永遠の平安",
      desc: "穏やかな波がどこまでも続く様子を描いた青海波。未来永劫へと続く平安への祈りが込められた、心落ち着く意匠です。",
      src: "/panel/117青海波(中)/_DSC7601.JPG"
    },
    {
      id: "green-shippo",
      title: "緑・七宝繋ぎ4枚組",
      subtitle: "4-PANEL MASTERPIECE",
      desc: "4枚の襖やパネルが連なることで空間に圧倒的な華やかさと統一感をもたらす大作。日本の美意識が凝縮されています。",
      src: "/panel/緑・七宝繋ぎ4枚組/_DSC8403.JPG"
    }
  ];

  return (
    <div className="relative min-h-screen bg-stone-950 text-stone-100 font-serif selection:bg-stone-500 selection:text-white">

      {/* 固定された和風ギャラリー背景 */}
      <div
        className="fixed inset-0 pointer-events-none z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/japanese_gallery_bg.png')",
          filter: "brightness(0.25) sepia(0.3) hue-rotate(-10deg) contrast(1.1)",
        }}
      />

      {/* ノイズ/テクスチャレイヤー */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

      <main className="relative z-10 flex flex-col items-center">

        {/* エントランス・タイトル */}
        <section className="w-full h-screen flex flex-col items-center justify-center text-center px-4">
          <div className="border-l border-r border-stone-600/50 px-8 py-16 backdrop-blur-sm bg-stone-900/40 shadow-2xl">
            <h2 className="text-[10px] sm:text-xs tracking-[0.4em] text-stone-400 mb-6 font-sans">KANAZAWAYA VIRTUAL GALLERY</h2>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-widest text-stone-200 mb-8" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.8)' }}>
              和の美学を取り込む
            </h1>
            <div className="w-[1px] h-16 sm:h-24 bg-gradient-to-b from-stone-400 to-transparent mx-auto opacity-70"></div>
          </div>
          <div className="absolute bottom-12 animate-pulse text-stone-500 text-xs tracking-widest font-sans">
            SCROLL TO EXPLORE
          </div>
        </section>

        {/* 作品展示セクション */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-20 flex flex-col gap-32 sm:gap-48 pb-48">
          {panels.map((panel, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <section
                key={panel.id}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 sm:gap-16`}
              >
                {/* 額縁に入れられたイメージ */}
                <div className="w-full lg:w-3/5 flex justify-center group">
                  <div className="relative p-3 sm:p-4 bg-stone-800 shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-stone-700 transition-transform duration-700 hover:scale-[1.02]">
                    <div className="relative block overflow-hidden border border-stone-900 bg-black">
                      <img
                        src={panel.src}
                        alt={panel.title}
                        className="w-full h-auto max-h-[70vh] object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                        loading="lazy"
                      />
                      {/* 照明ハイライトのオーバーレイ */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none mix-blend-overlay"></div>
                    </div>
                  </div>
                </div>

                {/* 作品キャプション部分 */}
                <div className="w-full lg:w-2/5 flex flex-col justify-center text-center lg:text-left px-4">
                  <span className="text-[10px] sm:text-xs text-stone-400 font-sans tracking-[0.2em] mb-4 uppercase">
                    Exhibit {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-xl sm:text-3xl text-stone-100 font-medium mb-2 tracking-wider">
                    {panel.title}
                  </h3>
                  <h4 className="text-xs sm:text-sm text-stone-500 mb-8 font-sans tracking-widest">
                    {panel.subtitle}
                  </h4>
                  <p className="text-sm sm:text-base text-stone-300 leading-loose tracking-wide w-full lg:max-w-md mx-auto lg:mx-0">
                    {panel.desc}
                  </p>

                  {/* 装飾線 */}
                  <div className={`h-[1px] w-12 bg-stone-600 mt-10 ${isEven ? 'mx-auto lg:mx-0' : 'mx-auto lg:ml-auto lg:mr-0'}`}></div>
                </div>
              </section>
            );
          })}
        </div>

        {/* ギャラリーフッター */}
        <footer className="w-full py-24 flex flex-col items-center justify-center border-t border-stone-800/50 bg-stone-950/80 backdrop-blur-md">
          <p className="text-stone-400 font-sans text-[10px] sm:text-xs tracking-widest uppercase mb-4">Kanazawaya Virtual Gallery</p>
          <a href="/" className="px-8 py-3 border border-stone-600 text-stone-300 hover:bg-stone-800 transition-colors text-sm font-sans tracking-widest uppercase">
            サイトトップへ戻る
          </a>
        </footer>
      </main>
    </div>
  );
}
