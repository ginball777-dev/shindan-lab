const questions = [

  {
    question: "節約を始めるなら、まず何をしたい？",
    choices: [
      { text: "スマホ代やサブスクを見直す", type: "fixed" },
      { text: "食費を減らす", type: "food" },
      { text: "ポイントを活用する", type: "point" },
      { text: "家計簿をつけて管理する", type: "careful" }
    ]
  },

  {
    question: "買い物をするとき、一番近いのは？",
    choices: [
      { text: "必要なものだけ買う", type: "careful" },
      { text: "安いものを探す", type: "point" },
      { text: "勢いで買うことがある", type: "lazy" },
      { text: "好きなものなら多少高くても買う", type: "food" }
    ]
  },

  {
    question: "家計簿についてどう思う？",
    choices: [
      { text: "毎日でも管理したい", type: "careful" },
      { text: "最初だけなら頑張れる", type: "fixed" },
      { text: "面倒で続かない", type: "lazy" },
      { text: "細かい管理は苦手", type: "food" }
    ]
  },

  {
    question: "節約で一番大事だと思うことは？",
    choices: [
      { text: "楽に続けられること", type: "lazy" },
      { text: "大きな金額を減らすこと", type: "fixed" },
      { text: "楽しみを我慢しないこと", type: "food" },
      { text: "計画的に管理すること", type: "careful" }
    ]
  },

  {
    question: "コンビニを利用する頻度は？",
    choices: [
      { text: "ほぼ毎日使う", type: "food" },
      { text: "週に数回使う", type: "lazy" },
      { text: "必要な時だけ使う", type: "careful" },
      { text: "なるべく避けている", type: "fixed" }
    ]
  },

  {
    question: "サブスクを契約している？",
    choices: [
      { text: "たくさん契約している", type: "fixed" },
      { text: "必要なものだけ", type: "careful" },
      { text: "解約するのが面倒", type: "lazy" },
      { text: "楽しみのためならOK", type: "food" }
    ]
  },

  {
    question: "節約情報を見ることは？",
    choices: [
      { text: "よく調べる", type: "careful" },
      { text: "興味がある時だけ", type: "fixed" },
      { text: "あまり見ない", type: "lazy" },
      { text: "楽しそうなら見る", type: "food" }
    ]
  },

  {
    question: "ポイントカードやアプリは？",
    choices: [
      { text: "積極的に使う", type: "point" },
      { text: "便利なら使う", type: "fixed" },
      { text: "管理が面倒", type: "lazy" },
      { text: "買い物を楽しむ方を優先", type: "food" }
    ]
  },

  {
    question: "節約を失敗する原因は？",
    choices: [
      { text: "続かない", type: "lazy" },
      { text: "我慢できない", type: "food" },
      { text: "方法が分からない", type: "fixed" },
      { text: "計画不足", type: "careful" }
    ]
  },

  {
    question: "大きな出費を減らすなら？",
    choices: [
      { text: "固定費を見直す", type: "fixed" },
      { text: "毎日の支出を見る", type: "careful" },
      { text: "買い物回数を減らす", type: "lazy" },
      { text: "楽しみを残しながら調整する", type: "food" }
    ]
  },

  {
    question: "節約アプリを使う？",
    choices: [
      { text: "使って管理したい", type: "careful" },
      { text: "便利なら使う", type: "fixed" },
      { text: "設定が面倒", type: "lazy" },
      { text: "楽しめるなら使う", type: "food" }
    ]
  },

  {
    question: "休日の過ごし方は？",
    choices: [
      { text: "家でゆっくりする", type: "lazy" },
      { text: "計画して行動する", type: "careful" },
      { text: "お得な場所を探す", type: "point" },
      { text: "好きなことにお金を使う", type: "food" }
    ]
  },

  {
    question: "節約したお金はどうしたい？",
    choices: [
      { text: "将来のために貯める", type: "careful" },
      { text: "自動的に貯めたい", type: "fixed" },
      { text: "楽になることに使いたい", type: "lazy" },
      { text: "趣味に使いたい", type: "food" }
    ]
  },

  {
    question: "料理はする？",
    choices: [
      { text: "毎日する", type: "careful" },
      { text: "できる時だけ", type: "food" },
      { text: "ほとんどしない", type: "lazy" },
      { text: "簡単なものならする", type: "fixed" }
    ]
  },

  {
    question: "節約方法を選ぶなら？",
    choices: [
      { text: "一度設定して放置", type: "fixed" },
      { text: "毎日努力する", type: "careful" },
      { text: "楽な方法がいい", type: "lazy" },
      { text: "楽しめる方法がいい", type: "food" }
    ]
  },

  {
    question: "お金の管理は得意？",
    choices: [
      { text: "かなり得意", type: "careful" },
      { text: "普通", type: "fixed" },
      { text: "苦手", type: "lazy" },
      { text: "楽しさ優先", type: "food" }
    ]
  },

  {
    question: "節約生活で避けたいことは？",
    choices: [
      { text: "面倒な作業", type: "lazy" },
      { text: "趣味を我慢すること", type: "food" },
      { text: "大きな手間", type: "fixed" },
      { text: "計画なしで進めること", type: "careful" }
    ]
  },

  {
    question: "新しい節約方法を試す？",
    choices: [
      { text: "すぐ試す", type: "point" },
      { text: "調べてから試す", type: "careful" },
      { text: "面倒ならやらない", type: "lazy" },
      { text: "楽しそうならやる", type: "food" }
    ]
  },

  {
    question: "節約で欲しい結果は？",
    choices: [
      { text: "手間なくお金を減らしたい", type: "fixed" },
      { text: "確実に貯金したい", type: "careful" },
      { text: "楽に続けたい", type: "lazy" },
      { text: "生活を楽しみたい", type: "food" }
    ]
  },

  {
    question: "あなたに近い言葉は？",
    choices: [
      { text: "効率重視", type: "fixed" },
      { text: "管理好き", type: "careful" },
      { text: "面倒は嫌い", type: "lazy" },
      { text: "楽しさ重視", type: "food" }
    ]
  }

];