import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "金沢屋 静岡葵店 - 襖・障子・網戸・畳 張替ビフォーアフター",
  description: "金沢屋静岡葵店の張替ビフォーアフター実績をご紹介。職人の技でこんなに見違えます！",
  robots: {
    index: false,
    follow: false,
  },
};

export default function A10325Page() {
  const items = [
    {
      id: "fusuma",
      title: "襖（ふすま）の張替",
      beforeText: "日焼けによる黄ばみやシミ、細かい破れが目立ち、お部屋全体が暗く古びた印象を与えていました。",
      afterText: "新築のような明るさと清潔感が復活！モダンな柄を選ぶことで、和室が一気におしゃれ空間に生まれ変わりました。",
      badgeColor: "text-red-700",
      accentBorder: "border-red-500",
      accentBg: "bg-red-50",
      accentRing: "ring-red-500"
    },
    {
      id: "shoji",
      title: "障子（しょうじ）の張替",
      beforeText: "子供やペットが開けてしまった穴や、経年劣化による変色が目立ち、見栄えが悪くなっていました。",
      afterText: "真っ白でピンと張った障子に大変身。光を柔らかく取り込み、空間全体を明るく演出します。破れにくい素材も人気です。",
      badgeColor: "text-blue-700",
      accentBorder: "border-blue-500",
      accentBg: "bg-blue-50",
      accentRing: "ring-blue-500"
    },
    {
      id: "amido",
      title: "網戸（あみど）の張替",
      beforeText: "網がたるんで穴が開き、虫の侵入が心配な状態。砂埃も付着し、風通しも悪くなっていました。",
      afterText: "たるみのないピシッとした網戸に！風通しが劇的に改善し、防虫・プライバシー保護の効果も高まりました。",
      badgeColor: "text-green-700",
      accentBorder: "border-green-500",
      accentBg: "bg-green-50",
      accentRing: "ring-green-500"
    },
    {
      id: "tatami",
      title: "畳（たたみ）の張替",
      beforeText: "擦り切れやささくれが多く、座ると服にクズが付いてしまう状態。イ草の香りも完全に消えていました。",
      afterText: "イ草の爽やかな香りが蘇り、ゴロゴロ寝転がりたくなるような快適な畳に！綺麗な緑色が目に優しいです。",
      badgeColor: "text-yellow-700",
      accentBorder: "border-yellow-500",
      accentBg: "bg-yellow-50",
      accentRing: "ring-yellow-500"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f0f9ff] font-sans text-gray-800">
      {/* HEADER */}
      <header className="bg-white shadow-sm border-b-4 border-sky-600 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto py-5 px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-col items-center md:items-start">
            <img 
              src="/kanazawaya-shizuokaaoi-logo.png" 
              alt="金沢屋 静岡葵店" 
              className="h-12 md:h-16 w-auto object-contain"
            />
            <p className="text-sm text-gray-500 mt-2 font-medium">地域密着・職人直営！張替専門店の確かな実績</p>
          </div>
          <a
            href="https://kanazawaya-shizuokaaoi.o-e.jp/"
            className="mt-4 md:mt-0 bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-8 rounded-full shadow-md transition transform hover:scale-105"
          >
            無料お見積り・ご相談
          </a>
        </div>
      </header>

      {/* SIGNBOARD BANNER */}
      <div className="w-full shadow-lg">
        {/*
          元画像の比率（幅768px、高さ449px）に基づき、
          「上と左右を一切カットせず、下から27%（表示部分が高さの73%）だけをカット」するよう
          アスペクト比を「768 / 328」に正確に指定しています（449 × 0.73 ≒ 328）。
         */}
        <img
          src="/kanban1.jpg"
          alt="金沢屋 看板"
          className="w-full aspect-[768/328] object-cover object-top"
        />
      </div>

      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-sky-500 to-sky-400 py-16 px-4 text-center shadow-inner">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block py-1 px-5 rounded-full bg-white/20 text-white font-extrabold mb-6 shadow-sm border border-white/40 backdrop-blur-sm">
            実績紹介
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-8 drop-shadow-md">
            見違えるほど綺麗に！<br />
            <span className="text-yellow-300">張替ビフォーアフター</span>
          </h2>
          <p className="text-lg md:text-xl text-sky-50 font-bold max-w-2xl mx-auto leading-relaxed drop-shadow">
            長年の使用で傷んだ襖や障子、網戸、畳。そのままにしていませんか？
            金沢屋の職人が心を込めて、新品同様に美しく蘇らせます。
          </p>
        </div>
      </section>

      {/* BEFORE/AFTER LIST */}
      <main className="max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8 space-y-24">
        {items.map((item) => (
          <section key={item.id} className="scroll-mt-24" id={item.id}>
            <div className={`mb-10 inline-block border-b-4 ${item.accentBorder} pb-2`}>
              <h3 className={`text-3xl md:text-4xl font-extrabold text-gray-800 flex items-center gap-3`}>
                <span className={`w-3 h-8 rounded-full ${item.accentBg} ${item.accentBorder} border`} />
                {item.title}
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative">
              {/* VS アイコン中心 */}
              <div className="hidden md:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-white rounded-full w-16 h-16 shadow-xl items-center justify-center border-4 border-gray-100">
                <span className="font-black text-xl text-gray-400">▶</span>
              </div>

              {/* BEFORE */}
              <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col items-center">
                <div className="w-full bg-gray-200 aspect-video flex items-center justify-center border-b border-gray-100">
                  <span className="text-gray-400 font-black text-3xl tracking-wider">BEFORE 画像</span>
                </div>
                <div className="p-8 w-full text-left">
                  <h4 className="flex items-center gap-2 mb-4">
                    <span className="bg-gray-500 text-white font-bold px-3 py-1 rounded shadow-sm text-sm">施工前</span>
                  </h4>
                  <p className="text-gray-600 leading-relaxed font-medium">
                    {item.beforeText}
                  </p>
                </div>
              </div>

              {/* AFTER */}
              <div className={`bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col items-center transform md:-translate-y-4 ring-4 ${item.accentRing}`}>
                <div className={`w-full ${item.accentBg} aspect-video flex items-center justify-center border-b border-white relative`}>
                  <div className="absolute top-4 left-4 bg-yellow-400 text-yellow-900 font-extrabold px-4 py-1.5 rounded-full text-sm shadow animate-pulse">
                    ✨AFTER
                  </div>
                  <span className={`${item.badgeColor} font-black text-3xl tracking-wider opacity-60`}>AFTER 画像</span>
                </div>
                <div className="p-8 w-full text-left">
                  <h4 className="flex items-center gap-2 mb-4">
                    <span className={`bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-bold px-3 py-1 rounded shadow-sm text-sm`}>
                      施工後！
                    </span>
                  </h4>
                  <p className="text-gray-800 leading-relaxed font-bold text-lg">
                    {item.afterText}
                  </p>
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>

      {/* STORE INFO & MANAGER */}
      <section className="max-w-4xl mx-auto py-16 px-4 sm:px-6 mb-10">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-sky-500">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-sky-50 p-10 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-sky-200">
              <img 
                src="/keisuke.png" 
                alt="店長イラスト" 
                className="w-48 h-48 object-contain drop-shadow-lg mb-6"
              />
              <h3 className="text-2xl font-extrabold text-gray-800 mb-2">店長がお伺いします！</h3>
              <p className="text-gray-600 text-center font-medium">
                「一枚からでも喜んで！」<br/>
                親切・丁寧な対応を心がけております。お見積りは無料ですので、まずはお気軽にご相談ください。
              </p>
            </div>
            <div className="p-10 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900 border-b-2 border-sky-200 pb-4 mb-6">
                店舗情報
              </h3>
              <p className="text-xl text-gray-800 font-extrabold mb-4">金沢屋 静岡葵店</p>
              <div className="flex items-start gap-3 mb-6">
                <span className="text-sky-600 mt-1 text-xl">📍</span>
                <p className="text-gray-700 font-medium leading-relaxed">
                  静岡市葵区安西五丁目５７<br />
                  安西ビル１階A号室
                </p>
              </div>
              <div className="bg-sky-100 rounded-xl p-5 text-center mt-auto border border-sky-200 shadow-inner">
                <p className="text-sky-900 font-bold mb-1 text-sm">お電話でのご相談・お見積り</p>
                <a href="tel:0120759010" className="text-3xl md:text-3xl lg:text-4xl font-black text-sky-700 hover:text-sky-800 transition block">
                  0120-759-010
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gradient-to-t from-sky-800 to-sky-600 text-white py-20 px-6 text-center mt-10 shadow-inner">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">張替に関するお悩みは、お気軽にご相談ください</h2>
        <p className="text-gray-300 font-medium mb-10 max-w-2xl mx-auto">
          一枚からでも喜んでお伺いいたします。お見積りは無料です。<br className="hidden md:inline" />まずは今の状態を見させてください。
        </p>
        <a
          href="https://kanazawaya-shizuokaaoi.o-e.jp/"
          className="inline-block bg-white text-gray-900 font-extrabold text-lg py-5 px-12 rounded-full shadow-2xl hover:bg-gray-100 transition transform hover:scale-105 border-4 border-sky-500"
        >
          金沢屋 静岡葵店に相談する
        </a>
      </section>

      {/* FOOTER */}
      <footer className="bg-sky-900 text-sky-200 py-8 text-center border-t border-sky-800 text-sm">
        <p>© 2026 金沢屋 静岡葵店 All rights reserved.</p>
      </footer>
    </div>
  );
}
