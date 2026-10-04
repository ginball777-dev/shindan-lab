// =====================================
// Ver1.3 script.js
// Part1
// =====================================

// 現在の質問番号
let currentQuestion = 0;

// スコア
let score = {
    lazy: 0,
    fixed: 0,
    careful: 0,
    food: 0,
    point: 0
};

// =========================
// 初期表示
// =========================
function init() {

    document.getElementById("home").style.display = "block";

    document.getElementById("quiz").style.display = "none";

    document.getElementById("result-area").style.display = "none";

}

// =========================
// 診断開始
// =========================
function startQuiz() {

    currentQuestion = 0;

    score = {
        lazy: 0,
        fixed: 0,
        careful: 0,
        food: 0,
        point: 0
    };

    document.getElementById("home").style.display = "none";

    document.getElementById("quiz").style.display = "block";

    document.getElementById("result-area").style.display = "none";

    showQuestion();

}

// =========================
// 質問表示
// =========================
function showQuestion() {

    const questionData = questions[currentQuestion];

    // 質問文
    document.getElementById("question").textContent =
        questionData.question;

    // 進捗バー
    const progress =
        (currentQuestion / questions.length) * 100;

    document.getElementById("progress-bar").style.width =
        progress + "%";

    document.getElementById("progress-text").textContent =
        `${currentQuestion + 1} / ${questions.length}問`;

    // 選択肢
    const choices =
        document.getElementById("choices");

    choices.innerHTML = "";

    questionData.choices.forEach(choice => {

        const button =
            document.createElement("button");

        button.textContent =
            choice.text;

        button.onclick = function () {

            score[choice.type]++;

            currentQuestion++;

            if (currentQuestion < questions.length) {

                showQuestion();

            } else {

                showResult();

            }

        };

        choices.appendChild(button);

    });

}

// =========================
// 結果表示
// =========================
function showResult() {

    document.getElementById("quiz").style.display = "none";
    document.getElementById("result-area").style.display = "block";

    // 進捗バー
    document.getElementById("progress-bar").style.width = "100%";
    document.getElementById("progress-text").textContent = "診断完了！";

    // 一番点数が高いタイプを取得
    let resultType = Object.keys(score).reduce((a, b) => {
        return score[a] >= score[b] ? a : b;
    });

    const result = results[resultType];

    // アイコン
    document.getElementById("result-icon").textContent = result.icon;

    // タイトル
    document.getElementById("result-title").textContent = result.title;

    // 説明
    document.getElementById("result-description").textContent =
        result.description;

    // 節約力レベル（★）
    const starArea = document.getElementById("star-level");
    starArea.innerHTML = "";

    for (let i = 1; i <= 5; i++) {
        if (i <= result.level) {
            starArea.innerHTML += "⭐";
        } else {
            starArea.innerHTML += "☆";
        }
    }

    // おすすめ
    const recommended =
        document.getElementById("recommended-list");

    recommended.innerHTML = "";

    result.recommended.forEach(item => {

        const li = document.createElement("li");

        li.textContent = item;

        recommended.appendChild(li);

    });

    // 向いていない節約
    const avoid =
        document.getElementById("avoid-list");

    avoid.innerHTML = "";

    result.avoid.forEach(item => {

        const li = document.createElement("li");

        li.textContent = item;

        avoid.appendChild(li);

    });

    // アドバイス
    document.getElementById("advice").textContent =
        result.advice;

    // おすすめ記事
    const articleArea =
        document.getElementById("article-links");

    if (articleArea) {

        articleArea.innerHTML = "";

        result.articles.forEach(article => {

            const link = document.createElement("a");

            link.href = article.url;
            link.className = "article-link";
            link.textContent = "📄 " + article.title;

            articleArea.appendChild(link);

        });

    }

}

// =========================
// ボタン設定
// =========================

// 診断開始ボタン
document
    .getElementById("start-button")
    .addEventListener("click", startQuiz);

// もう一度診断するボタン
document
    .getElementById("restart-button")
    .addEventListener("click", startQuiz);

// =========================
// アプリ起動
// =========================
document.addEventListener("DOMContentLoaded", init);