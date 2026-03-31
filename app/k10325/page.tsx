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
  const pageChunks = [
      {
        title: "玄関・アプローチ",
        items: [
          { type: "安全", item: "ドア・引き戸の重さ、閉まる速度", risk: "無理な力による手首・腰の負担、転倒リスク", solution: "戸車の交換、ドアクローザー調整、ドア交換" },
          { type: "安全", item: "網戸の破れ、立て付け", risk: "虫の侵入、防犯上の不安", solution: "網戸の張替、枠の調整、戸車調整or交換" },
          { type: "安全", item: "段差・手すりのガタつき", risk: "つまずき、体重をかけた際の転倒リスク", solution: "手すりの補強・新設の提案" },
          { type: "安全", item: "ドアホン（インターホン）", risk: "訪問者の顔が見えず、防犯・特殊詐欺リスク", solution: "モニター付きドアホンへの交換" },
          { type: "安全", item: "網戸の使用状態", risk: "網戸使用時ドアのかぎがかからない", solution: "通風ドアへの交換" },
          { type: "安全", item: "屋外の階段・アプローチの滑りやすさ", risk: "雨の日や苔による転倒・骨折リスク", solution: "屋外用の滑り止めテープの貼付、手すり新設" },
          { type: "安全", item: "郵便受け（ポスト）の破損・開けにくさ", risk: "郵便物の盗難・雨濡れ、毎日の取り出しストレス", solution: "郵便受けの交換、ダイヤル錠の調整" },
          { type: "安全", item: "玄関ポーチ灯（外灯）の汚れ・球切れ", risk: "夜間の帰宅時の転倒、防犯上のリスク", solution: "カバー清掃、センサー付きLED球への交換" },
          { type: "快適", item: "玄関の傘立てや小物の配置", risk: "動線を塞ぎ、引っかかって転倒する原因に", solution: "壁掛けフックの設置による床の整理" },
          { type: "快適", item: "塀の汚れ", risk: "塀がきれいになり家が整って見える", solution: "塀の洗浄、コーティング、塗装" },
        ]
      },
      {
        title: "廊下・室内ドア / 階段・廊下",
        items: [
          { type: "安全", item: "夜間の足元の明るさ", risk: "夜のトイレ移動時などの転倒リスク", solution: "足元灯・センサーライトの設置・常夜灯の設置" },
          { type: "安全", item: "敷居・床のちょっとした段差", risk: "すり足になることでの、つまずき転倒リスク", solution: "敷居スベリの交換、簡易的な段差解消、スロープの設置" },
          { type: "安全", item: "ドアノブ（ひねるタイプか）", risk: "握力低下により開け閉めが苦痛になる、勝手に開く、閉じ込め", solution: "下げるだけのレバーハンドルへの交換、ラッチの交換" },
          { type: "安全", item: "雪見障子など戸のガラス", risk: "転倒や地震での飛散", solution: "ポリカへの交換" },
          { type: "快適", item: "照明スイッチ（手動で探すか）", risk: "暗闇でスイッチを探す手間と不安をなくす", solution: "人感センサー付き電球への交換" },
          { type: "快適", item: "引き戸の閉まり方（重さ、閉まり方）", risk: "バタンという音を防ぎ、指挟みの事故を予防", solution: "後付けソフトクローズ、戸車交換" },
          { type: "安全", item: "階段の滑りやすさ・段鼻の見えにくさ", risk: "踏み外しによる重大な転落事故", solution: "蓄光（光る）滑り止めテープの施工" },
          { type: "安全", item: "階段の手すり（片側のみ、または無いか）", risk: "昇降時の膝への負担、バランス崩し", solution: "両側への手すり追加、既存のガタつき補強" },
        ]
      },
      {
        title: "居間・和室・寝室",
        items: [
          { type: "安全", item: "襖・障子の動き、引っかかり、隙間", risk: "開閉時の強いストレス、手首・腰への負担", solution: "戸車交換、張替、敷居スベリ交換、傾き調整" },
          { type: "快適", item: "家具の戸の開閉", risk: "うまく戸が閉まらない", solution: "丁番の交換" },
          { type: "安全", item: "サッシの鍵（クレセント錠）", risk: "固くて鍵をかけなくなり、空き巣等の防犯リスク", solution: "クレセント錠の交換・調整、補助錠" },
          { type: "快適", item: "夏場・冬場の室温（断熱性）", risk: "熱中症・ヒートショック予防、電気代節約", solution: "強化・断熱プラスチック障子紙、すだれ設置、内窓" },
          { type: "快適", item: "部屋の照明（紐を引っ張るか）", risk: "立ち上がらず、布団から手元で安全に明かりを操作", solution: "リモコン付きLEDシーリングライトへ交換" },
          { type: "安全", item: "タンスなど背の高い家具の固定状況", risk: "地震時の転倒による下敷き、避難経路の寸断", solution: "L字金具や突っ張り棒による家具転倒防止" },
          { type: "安全", item: "テレビ裏などのタコ足配線・ホコリ", risk: "トラッキング現象（ホコリと湿気）による火災", solution: "配線の整理、安全な電源タップへの交換・清掃" },
          { type: "安全", item: "床のきしみ・沈み込み（軽度なもの）", risk: "放置すると床抜けの原因になり、大規模工事に発展", solution: "床下からの簡易補強（対応可能範囲で）" },
          { type: "安全", item: "コンセントロ、スイッチ", risk: "古く傷んだコンセント、小さいスイッチ", solution: "新しいコンセント口、大きなスイッチへ交換" },
          { type: "快適", item: "カーテンの開け閉めの重さ", risk: "毎朝・毎晩の腕への負担、カーテンレールの破損", solution: "レールの潤滑スプレー塗布、ランナー交換、レール交換" },
          { type: "快適", item: "窓ガラスの冷気（シングルガラスか）", risk: "窓からの冷気によるヒートショック、結露カビ", solution: "窓ガラス用断熱シート、ガラス交換、内窓" },
        ]
      },
      {
        title: "水まわり / キッチン・台所",
        items: [
          { type: "安全", item: "トイレ・浴室等の扉のガタつき", risk: "開けにくさによるトイレの我慢、閉じ込めリスク", solution: "レールの調整、はずれ止め補修、ドア交換" },
          { type: "安全", item: "換気扇の異音、吸い込みの弱さ", risk: "湿気によるカビ、ヒートショックの一因", solution: "換気扇の交換、内部清掃" },
          { type: "快適", item: "洗面・台所の蛇口（ひねるか）", risk: "握力が落ちても、手の甲で軽く水が出せる", solution: "レバー式水栓（ハンドル）への部品交換" },
          { type: "快適", item: "お風呂のシャワーヘッド", risk: "立ち座りの負担減、手元で簡単に出し止め・節水", solution: "手元ストップ（プッシュ式）シャワーへ交換" },
          { type: "安全", item: "吊り戸棚（高い収納）の使用頻度", risk: "踏み台から落ちるリスク、落下物による怪我", solution: "撤去、昇降式ラックの提案、移動支援" },
          { type: "安全", item: "シンク下の水漏れ・カビの臭い", risk: "床材の腐食、シロアリの発生原因", solution: "水栓交換" },
          { type: "快適", item: "シンク、コンロ周りの壁の油汚れ", risk: "不衛生、虫などの発生", solution: "クリーニング" },
          { type: "快適", item: "水栓", risk: "伸びる水栓で洗いやすく、レバー式で手軽に", solution: "水栓交換" },
          { type: "快適", item: "収納扉（開き戸）の蝶番（ヒンジ）", risk: "扉が斜めに下がり、開閉時に引っかけ・頭をぶつける", solution: "蝶番の調整、または新しい金具への交換" },
        ]
      },
      {
        title: "洗面所・浴室 / 家全体・その他",
        items: [
          { type: "安全", item: "手すりのガタつき", risk: "立ち上がる際体重をかけたときに壊れて倒れる危険", solution: "手すりの新設" },
          { type: "安全", item: "洗面所のタオル掛けのガタつき", risk: "よろけた時に掴んでしまい、壁ごと剥がれる危険", solution: "壁裏の芯材へのネジ打ち直し、アンカー補強" },
          { type: "安全", item: "洗面所と浴室の間の敷居の防水", risk: "水漏れ放置による脱衣所床の腐食", solution: "シリコンコーキングによる隙間埋め・CF貼替" },
          { type: "快適", item: "ウォシュレット", risk: "便座自動開閉、自動洗浄、節水", solution: "トイレ交換" },
          { type: "快適", item: "洗面台・水栓・黒ずみ", risk: "水漏れ、使いやすさ", solution: "洗面台、水栓の交換" },
          { type: "安全", item: "高所物入、照明の玉切れ", risk: "照明不足、荷物の落下", solution: "家中の電球を寿命の長いLED電球へ一括交換、不用品処分" },
          { type: "安全", item: "避難経路の確保", risk: "経路上の荷物が移動の邪魔になる", solution: "片付け、不用品処分" },
        ]
      }
    ];

    return (
      <div className="h-[100dvh] overflow-y-auto overflow-x-hidden snap-y snap-mandatory bg-sky-50 font-sans text-gray-800 flex flex-col scroll-smooth">
        
        {/* PAGE 1: HEADER + SIGNBOARD + HERO */}
        <section className="h-[100dvh] w-full snap-start shrink-0 flex flex-col relative bg-sky-50 overflow-hidden">
          {/* HEADER */}
          <header className="bg-white shadow-sm border-b-2 border-sky-600 shrink-0">
            <div className="max-w-6xl mx-auto py-1 px-3 flex items-center justify-between">
              <div className="flex flex-col items-start">
                <h1 className="text-lg sm:text-xl font-extrabold text-sky-800 tracking-tight leading-none">金沢屋</h1>
                <p className="text-[9px] sm:text-[10px] text-gray-500 font-bold mt-0.5">静岡葵店・日本平店</p>
              </div>
              <div className="flex gap-2">
                <a href="https://kanazawaya-shizuokaaoi.o-e.jp/" className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-1 px-3 text-[9px] sm:text-[10px] rounded-full shadow transition">静岡葵店</a>
                <a href="https://kanazawaya-nihondaira.o-e.jp/" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-3 text-[9px] sm:text-[10px] rounded-full shadow transition">日本平店</a>
              </div>
            </div>
          </header>

          <div className="flex-grow w-full flex justify-center bg-white shadow-sm shrink-0 border-b border-sky-100 p-2 sm:p-4">
            <img src="/kanban1.jpg" alt="金沢屋 看板" className="w-full h-full object-contain" />
          </div>

          {/* HERO SECTION */}
          <div className="shrink-0 bg-gradient-to-b from-sky-500 to-sky-400 py-5 px-3 text-center flex flex-col justify-center items-center shadow-inner border-t-2 border-sky-300">
            <div className="max-w-4xl mx-auto w-full">
              <span className="inline-block py-1 px-3 rounded-full bg-white/20 text-white font-extrabold mb-3 shadow-sm border border-white/40 backdrop-blur-sm tracking-widest text-[9px] sm:text-xs">
                ご自宅に潜む危険、放置していませんか？
              </span>
              <h2 className="text-xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-2 drop-shadow-md">
                プロの目でチェック！<br className="sm:hidden" />
                <span className="text-yellow-300 sm:ml-2">おうち無料点検</span>
              </h2>
              <p className="text-[10px] sm:text-base md:text-lg text-sky-50 font-bold max-w-2xl mx-auto leading-relaxed drop-shadow mt-3">
                下へスワイプして、おうちのチェック項目一覧をご覧ください！↓
              </p>
            </div>
          </div>
        </section>

        {/* PAGE 2 to 6: CHECKLIST CHUNKS */}
        {pageChunks.map((chunk, idx) => (
          <section key={idx} className="h-[100dvh] w-full snap-start shrink-0 flex flex-col relative bg-white border-b-8 border-sky-50 pt-2 pb-6 px-1 sm:px-4">
            <h3 className="text-sm sm:text-lg font-extrabold text-sky-800 text-center mb-1 shrink-0">
              点検箇所: {chunk.title}
            </h3>
            
            <div className="flex-grow flex flex-col justify-center min-h-0 w-full max-w-5xl mx-auto">
              <div className="overflow-hidden border border-sky-200 rounded-md shadow-sm h-full flex flex-col">
                <div className="bg-sky-100 flex-none hidden sm:grid grid-cols-12 border-b border-sky-300 text-sky-900 font-bold text-xs py-2 px-3">
                  <div className="col-span-4">チェック項目</div>
                  <div className="col-span-8">リスク・メリット / 改善案</div>
                </div>
                <div className="flex-grow flex flex-col divide-y divide-gray-100 h-full overflow-y-auto min-h-0">
                  {chunk.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex-1 flex flex-col sm:grid sm:grid-cols-12 items-start justify-center py-2.5 sm:py-3 px-2 sm:px-4 hover:bg-sky-50 transition-colors">
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:col-span-4 mb-1.5 sm:mb-0 w-full pr-2 shrink-0">
                        <div className="shrink-0 flex items-center">
                          {item.type === "安全" ? (
                            <span className="bg-red-100 text-red-700 px-1.5 py-0.5 rounded text-[10px] sm:text-[11px] border border-red-200 font-extrabold leading-none shadow-sm">⚠安全</span>
                          ) : (
                            <span className="bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded text-[10px] sm:text-[11px] border border-blue-200 font-extrabold leading-none shadow-sm">✨快適</span>
                          )}
                        </div>
                        <span className="font-bold text-[14px] sm:text-[16px] text-gray-800 leading-snug break-words whitespace-normal">{item.item}</span>
                      </div>
                      
                      <div className="flex flex-col sm:col-span-8 justify-center w-full pl-0 sm:pl-2">
                        <div className="text-[12px] sm:text-[14px] text-gray-700 leading-snug break-words whitespace-normal mt-0.5">
                          {item.type === "安全" ? (
                            <span className="font-bold opacity-70 mr-1 text-[10px] sm:hidden inline-block text-red-600">影響:</span>
                          ) : (
                            <span className="font-bold opacity-70 mr-1 text-[10px] sm:hidden inline-block text-blue-600">目的:</span>
                          )}
                          {item.risk}
                        </div>
                        <div className="text-[12px] sm:text-[14px] text-emerald-700 font-medium leading-snug break-words whitespace-normal mt-0.5 sm:mt-1">
                          <span className="font-bold opacity-70 mr-1 text-[10px] sm:hidden inline-block text-emerald-600">解決案:</span>
                          {item.solution}
                        </div>
                      </div>
                      
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="text-center text-[9px] text-gray-400 absolute bottom-1 w-full left-0">↓ スワイプして次へ</div>
          </section>
        ))}

        {/* FINAL PAGE: CTA + FOOTER */}
        <section className="h-[100dvh] w-full snap-start shrink-0 flex flex-col relative bg-sky-50 justify-center">
          <div className="max-w-4xl mx-auto w-full px-4 flex-grow flex flex-col items-center justify-center">
            
            <div className="bg-gradient-to-t from-sky-800 to-sky-600 text-white py-6 md:py-10 px-4 text-center rounded-2xl shadow-xl w-full mb-6">
              <h2 className="text-xl md:text-3xl font-black mb-3 leading-tight tracking-wide">
                ご自宅の点検、<br className="sm:hidden" />ぜひお任せください
              </h2>
              <p className="text-xs md:text-sm text-sky-100 font-medium mb-8 max-w-2xl mx-auto leading-relaxed">
                「我が家は大丈夫かな？」「そういえばあそこが気になっている…」<br />
                リストに当てはまる箇所があれば、お気軽に無料点検をご活用ください。
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-2xl mx-auto">
                {/* 静岡葵店 */}
                <div className="bg-white rounded-xl p-4 shadow flex-1 text-gray-900 border-b-4 border-sky-500">
                  <h3 className="text-sm font-bold text-sky-800 text-center mb-1">静岡葵店</h3>
                  <p className="text-[10px] text-gray-500 text-center mb-4">葵区安西五丁目５７</p>
                  <a href="https://kanazawaya-shizuokaaoi.o-e.jp/" className="block bg-sky-600 text-white font-bold py-2.5 px-4 text-xs rounded-full hover:bg-sky-700 transition mx-auto text-center w-3/4 whitespace-nowrap">Webサイトへ</a>
                </div>

                {/* 日本平店 */}
                <div className="bg-white rounded-xl p-4 shadow flex-1 text-gray-900 border-b-4 border-blue-500">
                  <h3 className="text-sm font-bold text-blue-800 text-center mb-1">日本平店</h3>
                  <p className="text-[10px] text-gray-500 text-center mb-4">担当エリアへ迅速訪問</p>
                  <a href="https://kanazawaya-nihondaira.o-e.jp/" className="block bg-blue-600 text-white font-bold py-2.5 px-4 text-xs rounded-full hover:bg-blue-700 transition mx-auto text-center w-3/4 whitespace-nowrap">Webサイトへ</a>
                </div>
              </div>
            </div>

          </div>

          <footer className="bg-sky-900 text-sky-200 py-4 text-center border-t border-sky-800 text-[10px] shrink-0 w-full mt-auto">
            <p>© 2026 金沢屋 静岡葵店 / 日本平店 All rights reserved.</p>
          </footer>
        </section>

      </div>
    );
  }
