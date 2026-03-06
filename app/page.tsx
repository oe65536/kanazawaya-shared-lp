export default function LP() {
  return (
    <main className="min-h-screen bg-white">
      {/* 共通のヘッダー（必要に応じて） */}
      <header className="py-4 border-b text-center">
        <h1 className="text-xl font-bold">金沢屋</h1>
      </header>

      {/* LPのメインコンテンツ */}
      <div className="max-w-4xl mx-auto px-5 py-20 text-center">
        <h2 className="text-4xl font-extrabold text-red-600 mb-8">
          春の張替え 特大キャンペーン！
        </h2>
        <p className="text-lg mb-8">
          ふすま・障子・網戸の張替えなら金沢屋にお任せください。
        </p>

        {/* 静岡葵店へのリンク */}
        <a
          href="https://kanazawaya-shizuokaaoi.o-e.jp/"
          className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full mx-2"
        >
          静岡葵店 お問い合わせ
        </a>

        {/* 日本平店へのリンク */}
        <a
          href="https://kanazawaya-nihondaira.o-e.jp/"
          className="inline-block bg-green-600 text-white font-bold py-3 px-8 rounded-full mx-2"
        >
          日本平店 お問い合わせ
        </a>
      </div>
    </main>
  );
}