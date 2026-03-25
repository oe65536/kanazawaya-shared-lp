import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "金沢屋 - おうち無料点検（静岡葵店・日本平店）",
  description: "金沢屋静岡葵店・日本平店共通のおうち無料点検。安全と快適を守るためのチェック項目をご紹介します。",
  robots: {
    index: false,
    follow: false,
  },
};

export default function K10325Page() {
  const inspectionData = [
    {
      category: "玄関・アプローチ",
      items: [
        { type: "安全", item: "ドア・引き戸の重さ、閉まる速度", risk: "無理な力による手首・腰の負担、転倒リスク" },
        { type: "安全", item: "網戸の破れ、立て付け", risk: "虫の侵入、防犯上の不安" },
        { type: "安全", item: "段差・手すりのガタつき", risk: "つまずき、体重をかけた際の転倒リスク" },
        { type: "安全", item: "ドアホン（インターホン）", risk: "訪問者の顔が見えず、防犯・特殊詐欺リスク" },
        { type: "安全", item: "屋外の階段・アプローチの滑りやすさ", risk: "雨の日や苔による転倒・骨折リスク" },
        { type: "安全", item: "郵便受け（ポスト）の破損・開けにくさ", risk: "郵便物の盗難・雨濡れ、毎日の取り出しストレス" },
        { type: "安全", item: "玄関ポーチ灯（外灯）の汚れ・球切れ", risk: "夜間の帰宅時の転倒、防犯上のリスク" },
        { type: "快適", item: "玄関の傘立てや小物の配置", risk: "動線を塞ぎ、引っかかって転倒する原因に" },
      ]
    },
    {
      category: "廊下・階段・室内ドア",
      items: [
        { type: "安全", item: "夜間の足元の明るさ", risk: "夜のトイレ移動時などの転倒リスク" },
        { type: "安全", item: "敷居・床のちょっとした段差", risk: "すり足になることでの、つまずき転倒リスク" },
        { type: "安全", item: "ドアノブ（ひねるタイプか）", risk: "握力低下により開け閉めが苦痛になる" },
        { type: "快適", item: "照明スイッチ（手動で探すか）", risk: "暗闇でスイッチを探す手間と不安をなくす" },
        { type: "快適", item: "引き戸の閉まり方（勢い）", risk: "バタンという音を防ぎ、指挟みの事故を予防" },
        { type: "安全", item: "階段の滑りやすさ・段鼻の見えにくさ", risk: "踏み外しによる重大な転落事故" },
        { type: "安全", item: "階段の手すり（片側のみ、または無いか）", risk: "昇降時の膝への負担、バランス崩し" },
        { type: "安全", item: "廊下を横切る延長コード", risk: "足を引っ掛けての転倒、断線による火災" },
      ]
    },
    {
      category: "居間・和室・寝室",
      items: [
        { type: "安全", item: "襖・障子の動き、引っかかり、隙間", risk: "開閉時の強いストレス、手首・腰への負担" },
        { type: "安全", item: "サッシの鍵（クレセント錠）", risk: "固くて鍵をかけなくなり、空き巣等の防犯リスク" },
        { type: "快適", item: "夏場・冬場の室温（断熱性）", risk: "熱中症・ヒートショック予防、電気代節約" },
        { type: "快適", item: "部屋の照明（紐を引っ張るか）", risk: "立ち上がらず、布団から手元で安全に明かりを操作" },
        { type: "安全", item: "タンスなど背の高い家具の固定状況", risk: "地震時の転倒による下敷き、避難経路の寸断" },
        { type: "安全", item: "テレビ裏などのタコ足配線・ホコリ", risk: "トラッキング現象（ホコリと湿気）による火災" },
        { type: "安全", item: "床のきしみ・沈み込み（軽度なもの）", risk: "放置すると床抜けの原因になり、大規模工事に発展" },
        { type: "安全", item: "動線上にある壁の角（出隅）", risk: "万が一転倒した際、頭や体をぶつけると危険" },
        { type: "快適", item: "カーテンの開け閉めの重さ", risk: "毎朝・毎晩の腕への負担、カーテンレールの破損" },
        { type: "快適", item: "窓ガラスの冷気（シングルガラスか）", risk: "窓からの冷気によるヒートショック、結露カビ" },
      ]
    },
    {
      category: "水まわり（キッチン・洗面・浴室・トイレ）",
      items: [
        { type: "安全", item: "トイレ・浴室等の扉のガタつき", risk: "開けにくさによるトイレの我慢、閉じ込めリスク" },
        { type: "安全", item: "換気扇の異音、吸い込みの弱さ", risk: "湿気によるカビ、ヒートショックの一因" },
        { type: "快適", item: "洗面・台所の蛇口（ひねるか）", risk: "握力が落ちても、手の甲で軽く水が出せる" },
        { type: "快適", item: "お風呂のシャワーヘッド", risk: "立ち座りの負担減、手元で簡単に出し止め・節水" },
        { type: "安全", item: "吊り戸棚（高い収納）の使用頻度", risk: "踏み台から落ちるリスク、落下物による怪我" },
        { type: "安全", item: "コンロ周りの壁の油汚れ・防炎性", risk: "引火による火災リスク" },
        { type: "安全", item: "シンク下の水漏れ・カビの臭い", risk: "床材の腐食、シロアリの発生原因" },
        { type: "快適", item: "収納扉（開き戸）の蝶番（ヒンジ）", risk: "扉が斜めに下がり、開閉時に引っかかる・頭をぶつける" },
        { type: "安全", item: "トイレットペーパーホルダーの強度", risk: "立ち上がる際、無意識に手をついて体重をかけ壊れる" },
        { type: "安全", item: "浴室の床の滑りやすさ", risk: "石鹸カスや水垢による転倒・頭部強打" },
        { type: "安全", item: "洗面所のタオル掛けのガタつき", risk: "よろけた時に掴んでしまい、壁ごと剥がれる危険" },
        { type: "安全", item: "トイレの洗浄レバーの回しにくさ", risk: "身体をひねる動作で腰を痛める" },
        { type: "安全", item: "洗面所と浴室の間の敷居の防水", risk: "水漏れ放置による脱衣所床の腐食" },
        { type: "快適", item: "洗面台・浴室の鏡のウロコ汚れ・黒ずみ", risk: "毎日見る鏡が綺麗だと気分が上がり、身だしなみが整う" },
      ]
    },
    {
      category: "家全体・その他",
      items: [
        { type: "安全", item: "高い場所にある電球（切れかかっている等）", risk: "椅子に乗っての電球交換は高齢者の転落事故の要因" },
        { type: "快適", item: "建具の戸当たり（壁にぶつかる部分）", risk: "ドアノブが壁に穴を開ける、または大きな音が鳴るリスク" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#f0f9ff] font-sans text-gray-800">
      {/* HEADER */}
      <header className="bg-white shadow-sm border-b-4 border-sky-600 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto py-5 px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-3xl font-extrabold text-sky-800 tracking-tight">
              金沢屋
            </h1>
            <p className="text-sm text-gray-500 mt-1 font-bold">静岡葵店・日本平店</p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-4">
            <a
              href="https://kanazawaya-shizuokaaoi.o-e.jp/"
              className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-6 rounded-full shadow transition"
            >
              静岡葵店へ相談
            </a>
            <a
              href="https://kanazawaya-nihondaira.o-e.jp/"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full shadow transition"
            >
              日本平店へ相談
            </a>
          </div>
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
          <span className="inline-block py-1.5 px-6 rounded-full bg-white/20 text-white font-extrabold mb-6 shadow-sm border border-white/40 backdrop-blur-sm tracking-widest text-sm">
            ご自宅に潜む危険、放置していませんか？
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-8 drop-shadow-md">
            プロの目でチェック！<br />
            <span className="text-yellow-300">おうち無料点検</span>
          </h2>
          <p className="text-lg md:text-xl text-sky-50 font-bold max-w-2xl mx-auto leading-relaxed drop-shadow">
            毎日の生活の中で見落としがちな小さな不具合が、思わぬ事故やケガ、大規模な工事の原因になることも。<br />
            私たち金沢屋が、ご自宅の「安全」と「快適」を1点1点入念にチェックいたします！
          </p>
        </div>
      </section>

      {/* INSPECTION CHECKLIST LIST */}
      <main className="max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h3 className="text-3xl font-extrabold text-gray-800 mb-4 border-b-4 border-sky-500 pb-2 inline-block">
            無料点検 チェック項目一覧
          </h3>
          <p className="text-gray-600 font-medium">どのような場所を確認するのか、どのようなリスクを防げるのかリストにまとめました。</p>
        </div>

        <div className="space-y-12">
          {inspectionData.map((categoryData, idx) => (
            <div key={idx} className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="bg-sky-600 py-4 px-6 text-white flex items-center gap-3">
                <span className="text-2xl">📋</span>
                <h4 className="text-2xl font-bold">{categoryData.category}</h4>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left whitespace-nowrap min-w-max md:min-w-0">
                  <thead className="bg-sky-50 border-b border-sky-200">
                    <tr>
                      <th className="px-6 py-4 font-bold text-gray-600 w-24 text-center">目的</th>
                      <th className="px-6 py-4 font-bold text-gray-600">チェック項目（現状の確認）</th>
                      <th className="px-6 py-4 font-bold text-gray-600">放置した際のリスク・改善のメリット</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {categoryData.items.map((item, itemIdx) => (
                      <tr key={itemIdx} className="hover:bg-gray-50 transition">
                        <td className="px-6 py-4 text-center font-bold">
                          {item.type === "安全" ? (
                            <span className="inline-flex items-center gap-1 bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm border border-red-200 font-extrabold">
                              ⚠ 安全
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm border border-blue-200 font-extrabold">
                              ✨ 快適
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-gray-800 font-medium text-wrap max-w-xs">{item.item}</td>
                        <td className="px-6 py-4 text-gray-600 text-sm whitespace-normal leading-relaxed">{item.risk}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* CTA SECTION */}
      <section className="bg-gradient-to-t from-sky-800 to-sky-600 text-white py-20 px-6 text-center mt-10 shadow-inner">
        <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
          ご自宅の点検、ぜひお任せください
        </h2>
        <p className="text-gray-100 font-medium text-lg mb-12 max-w-3xl mx-auto leading-relaxed">
          「我が家は大丈夫かな？」「そういえばあそこが気になっている…」<br className="hidden md:inline" />
          どんな小さなことでも構いません。まずは無料点検をご活用ください。<br />
          お近くの店舗へお気軽にお問い合わせください！
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6 max-w-3xl mx-auto">
          {/* 静岡葵店 */}
          <div className="bg-white rounded-2xl p-6 shadow-xl flex-1 text-gray-900 border-4 border-sky-500">
            <h3 className="text-2xl font-bold mb-4 text-sky-800">金沢屋 静岡葵店</h3>
            <a href="https://kanazawaya-shizuokaaoi.o-e.jp/" className="block bg-sky-600 text-white font-bold py-4 px-6 rounded-full hover:bg-sky-700 transition transform hover:-translate-y-1 mb-3">
              Webサイトへ
            </a>
            <div className="bg-gray-100 p-3 rounded-lg text-sm font-medium text-gray-600">
              静岡市葵区安西五丁目５７ 安西ビル１階A号室
            </div>
          </div>

          {/* 日本平店 */}
          <div className="bg-white rounded-2xl p-6 shadow-xl flex-1 text-gray-900 border-4 border-blue-500">
            <h3 className="text-2xl font-bold mb-4 text-blue-800">金沢屋 日本平店</h3>
            <a href="https://kanazawaya-nihondaira.o-e.jp/" className="block bg-blue-600 text-white font-bold py-4 px-6 rounded-full hover:bg-blue-700 transition transform hover:-translate-y-1 mb-3">
              Webサイトへ
            </a>
            <div className="bg-gray-100 p-3 rounded-lg text-sm font-medium text-gray-600">
              担当エリアのお客様へ<br />迅速にお伺いします
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-sky-900 text-sky-200 py-8 text-center border-t border-sky-800 text-sm">
        <p>© 2026 金沢屋 静岡葵店 / 日本平店 All rights reserved.</p>
      </footer>
    </div>
  );
}
