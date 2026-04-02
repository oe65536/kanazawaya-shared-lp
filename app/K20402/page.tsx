import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "金沢屋 - プレミアム・ギャラリー空間",
  description: "金沢屋が厳選した和のパネル・襖絵を、バーチャルの和室・ギャラリー空間にてお楽しみください。",
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
      src: "/panel/102葛布/_DSC7538.JPG",
      bg: "/bg_room1.png"
    },
    {
      id: "108",
      title: "七宝繋ぎ3枚セット・緑",
      subtitle: "SHIPPO-TSUNAGI / 繁栄とご縁",
      desc: "ご縁や円満を象徴する吉祥文様「七宝」。鮮やかで深い緑が、静寂の中にも空間へ確かな広がりをもたらします。",
      src: "/panel/108～111七宝繋ぎ3枚セット・緑/20230214_124505.jpg",
      bg: "/bg_room2.png"
    },
    {
      id: "115",
      title: "銀・山桐 (江戸からかみ 115)",
      subtitle: "EDO KARAKAMI / 伝統の輝き",
      desc: "日本古来の技法が息づく江戸からかみ。鈍く光る銀の輝きと優美な山桐の文様が、圧倒的な風格を漂わせます。",
      src: "/panel/115銀・山桐(江戸からかみ)/DSC_5407.JPG",
      bg: "/bg_room3.png"
    },
    {
      id: "117",
      title: "青海波・中 (117)",
      subtitle: "SEIGAIHA / 永遠の平安",
      desc: "穏やかな波がどこまでも続く様子を描いた青海波。未来永劫へと続く平安への祈りが込められた、心落ち着く意匠です。",
      src: "/panel/117青海波(中)/_DSC7601.JPG",
      bg: "/bg_room1.png" // Reusing room 1
    },
    {
      id: "green-shippo",
      title: "緑・七宝繋ぎ4枚組",
      subtitle: "4-PANEL MASTERPIECE",
      desc: "4枚の襖やパネルが連なることで空間に圧倒的な華やかさと統一感をもたらす大作。日本の美意識が凝縮されています。",
      src: "/panel/緑・七宝繋ぎ4枚組/_DSC8403.JPG",
      bg: "/bg_room2.png" // Reusing room 2
    }
  ];

  return (
    <div className="relative bg-black text-stone-100 font-serif selection:bg-stone-500 selection:text-white overflow-x-hidden">
      
      {/* エントランス・タイトル */}
      <section className="relative w-full h-[100dvh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        {/* Entrance Background */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[10s] scale-105"
          style={{ 
            backgroundImage: "url('/japanese_gallery_bg.png')",
            filter: "brightness(0.3) sepia(0.2) contrast(1.1)",
          }}
        />
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        <div className="relative z-10 border-t border-b border-stone-500/30 py-16 px-4 md:px-12 backdrop-blur-sm bg-black/30 w-full max-w-4xl">
          <h2 className="text-[10px] sm:text-sm tracking-[0.6em] text-stone-400 mb-6 font-sans uppercase">
            Kanazawaya Virtual Exhibition
          </h2>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-widest text-stone-100 mb-8" style={{ textShadow: '0 10px 30px rgba(0,0,0,0.9)' }}>
            和の美学を、空間へ
          </h1>
          <p className="text-sm md:text-base text-stone-300 font-sans tracking-widest leading-loose max-w-xl mx-auto">
            厳選されたパネル・襖絵の世界。<br />
            実際の和室や回廊に飾られた臨場感とともに、<br className="sm:hidden" />作品をご堪能ください。
          </p>
        </div>
        <div className="absolute bottom-16 z-10 animate-bounce text-stone-400 text-xs tracking-widest font-sans flex flex-col items-center gap-2">
          <span>SCROLL DOWN</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-stone-400 to-transparent"></div>
        </div>
      </section>

      {/* ギャラリールーム表示 (各作品ごとの部屋) */}
      <main className="relative w-full flex flex-col">
        {panels.map((panel, idx) => (
          <section 
            key={panel.id} 
            className="relative w-full min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden py-24 sm:py-0 snap-center"
          >
            {/* 背景の部屋画像 */}
            <div 
              className="absolute inset-0 z-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${panel.bg}')`, filter: 'brightness(0.7) contrast(1.1)' }}
            />
            {/* 作品を目立たせるための周辺の緩やかなシャドウ */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]"></div>

            {/* まるで壁に展示されているかのように配置された実物写真 (額縁風装飾) */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full px-4">
              
              <div className="relative group perspective-[1000px] mb-8 md:mb-16">
                {/* Image Frame Wrapper */}
                <div className="relative bg-[#111] p-1.5 sm:p-3 shadow-[0_40px_80px_rgba(0,0,0,0.9),_0_0_20px_rgba(0,0,0,0.5)] border border-[#333] max-w-[85vw] sm:max-w-[70vw] md:max-w-2xl xl:max-w-4xl max-h-[65vh] transition-transform duration-700 ease-out group-hover:scale-[1.02]">
                  
                  <img 
                    src={panel.src} 
                    alt={panel.title} 
                    className="w-full h-auto max-h-[60vh] object-contain block opacity-95 group-hover:opacity-100 transition-opacity duration-700" 
                    loading="lazy"
                  />
                  
                  {/* スポットライト的な表面反射オーバーレイ */}
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-black/20 mix-blend-overlay"></div>
                </div>
                
                {/* 下に落ちる強烈な影 */}
                <div className="absolute -bottom-8 left-10 right-10 h-10 bg-black/60 blur-xl rounded-[100%] pointer-events-none -z-10"></div>
              </div>

              {/* キャプション・解説ボード (美術館の説明パネル風) */}
              <div className="relative z-20 bg-stone-900/80 backdrop-blur-xl border-l-[3px] border-l-stone-400 border-t border-t-stone-700/50 border-r border-r-stone-800/30 border-b border-b-stone-800/30 p-6 sm:p-8 md:px-12 w-[90%] sm:w-auto max-w-2xl text-center sm:text-left shadow-2xl translate-y-0 sm:-translate-y-12">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 mb-4">
                  <h3 className="text-xl sm:text-2xl text-stone-100 font-medium tracking-widest whitespace-nowrap">
                    {panel.title}
                  </h3>
                  <span className="text-[9px] sm:text-[10px] text-stone-400 font-sans tracking-[0.2em] uppercase">
                    Exhibit No.{String(idx + 1).padStart(2, '0')}
                  </span>
                </div>
                
                <h4 className="text-[10px] sm:text-xs text-stone-500 mb-6 font-sans tracking-[0.1em] border-b border-stone-800 pb-4 inline-block sm:block">
                  {panel.subtitle}
                </h4>
                
                <p className="text-sm text-stone-300 leading-relaxed sm:leading-loose tracking-wide text-left mx-auto sm:mx-0">
                  {panel.desc}
                </p>
              </div>

            </div>
          </section>
        ))}
      </main>

      {/* ギャラリーフッター */}
      <footer className="relative z-10 w-full py-20 flex flex-col items-center justify-center bg-stone-950 border-t border-stone-900">
        <p className="text-stone-500 font-sans text-[10px] sm:text-xs tracking-widest uppercase mb-6">Kanazawaya Virtual Gallery Exhibit</p>
        <a href="/" className="px-8 py-3 border border-stone-700 text-stone-400 hover:text-stone-100 hover:border-stone-500 transition-colors text-xs font-sans tracking-widest uppercase">
          エントランスへ戻る
        </a>
      </footer>

    </div>
  );
}
