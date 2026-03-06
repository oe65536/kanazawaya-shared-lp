import type { Metadata } from "next";

// ★検索エンジンに「このページは検索結果に出さないで」と伝える魔法の設定
export const metadata: Metadata = {
  title: "金沢屋 キャンペーンサイト",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootPage() {
  return (
    // 画面のど真ん中に、うっすらと文字だけが表示される超ミニマルなデザイン
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center text-gray-400">
        <p className="text-sm tracking-widest font-semibold">KANAZAWAYA CAMPAIGN</p>
      </div>
    </main>
  );
}