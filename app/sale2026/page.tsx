export default function SpringSale2026() {
    return (
        <main className="min-h-screen bg-white">
            {/* LPのヘッダー */}
            <header className="py-4 border-b text-center bg-red-50">
                <h1 className="text-xl font-bold text-red-600">金沢屋</h1>
            </header>

            {/* LPのメインコンテンツ */}
            <div className="max-w-4xl mx-auto px-5 py-20 text-center">
                <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
                    2026年 春の張替え 特大キャンペーン！
                </h2>
                <p className="text-lg mb-10 text-gray-700">
                    ふすま・障子・網戸の張替えがお得なチャンスです。
                </p>

                <div className="flex flex-col md:flex-row justify-center gap-4">
                    {/* 静岡葵店へのリンク */}
                    <a
                        href="https://kanazawaya-shizuokaaoi.o-e.jp/"
                        className="bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition"
                    >
                        静岡葵店へ お問い合わせ
                    </a>

                    {/* 日本平店へのリンク */}
                    <a
                        href="https://kanazawaya-nihondaira.o-e.jp/"
                        className="bg-green-600 text-white font-bold py-4 px-10 rounded-full hover:bg-green-700 transition"
                    >
                        日本平店へ お問い合わせ
                    </a>
                </div>
            </div>
        </main>
    );
}