# 🌿 EcoPulse — SDG 12 責任消費與生產

> 網頁程式設計期末專題 · 資管二B · 祝善煦 / 朱家締 / 羅乃慈

**Live Demo:** https://nicolehiiiiiii.github.io/FinalProject/

---

## 📁 專案結構

```
ecopulse/
├── index.html          # 首頁
├── css/
│   └── base.css        # 共用設計系統（CSS 變數、元件）
├── js/
│   └── navbar.js       # 共用導覽列元件
└── pages/
    ├── about.html      # 關於我們（互動心智圖）
    ├── issues.html     # 問題區（翻牌卡片）
    └── quiz.html       # 環保測驗（20題 + 雷達圖）
```

---

## 🌿 Branch 分工規範

| Branch | 負責人 | 對應頁面 |
|--------|--------|----------|
| `main` | 全員   | `css/base.css`、`js/navbar.js` |
| `feature/home` | 朱家締 | `index.html` |
| `feature/about` | 朱家締 | `pages/about.html` |
| `feature/issues` | 羅乃慈 | `pages/issues.html` |
| `feature/quiz` | 祝善煦 | `pages/quiz.html` |

---

## 🚀 Git 工作流程

### 1. 初始化（第一次）
```bash
git clone https://github.com/nicolehiiiiiii/FinalProject.git
cd FinalProject
```

### 2. 各自切到自己的 branch
```bash
# 朱家締
git checkout -b feature/home
git checkout -b feature/about

# 羅乃慈
git checkout -b feature/issues

# 祝善煦
git checkout -b feature/quiz
```

### 3. 日常開發流程
```bash
# 確保本機是最新的
git pull origin main

# 在自己 branch 工作
git add .
git commit -m "feat(issues): 新增過度消費翻牌卡片內容"

# 推上 GitHub
git push origin feature/issues
```

### 4. 完成後 PR 合併
1. 前往 GitHub → New Pull Request
2. Base: `main` ← Compare: `feature/xxx`
3. 請其他組員 Code Review 後再 Merge

### 5. Commit 訊息規範
```
feat(quiz):   新增雷達圖計分功能
fix(issues):  修正翻牌卡片在手機版的樣式
style(home):  調整首頁 Hero 區段間距
docs:         更新 README 說明
```

---

## 🎨 設計系統

設計變數全部集中在 `css/base.css` 的 `:root` 中：

```css
--clr-primary:   #3A6B3A  /* 主要綠色 */
--clr-accent:    #D4A843  /* 金黃強調色 */
--clr-bg:        #F5F2EA  /* 大地米色背景 */
--ff-display:    'Playfair Display'  /* 標題字體 */
--ff-body:       'DM Sans'           /* 內文字體 */
```

**不要在頁面內直接寫死顏色，請永遠使用 CSS 變數。**

---

## 🧩 共用元件使用方式

### Navbar
每個頁面在 `<body>` 最上方引入，並呼叫 `Navbar.init()`：

```html
<script src="../js/navbar.js"></script>
<!-- 在 </body> 前 -->
<script>
  Navbar.init('about');  // 傳入目前頁面的 key: home/about/issues/quiz
  // 首頁用: Navbar.init('home', true);
</script>
```

### 通用 CSS 類別
```html
<div class="container">   <!-- 最大寬度 1100px 置中 -->
<section class="section"> <!-- 上下 padding -->
<div class="card">         <!-- 白底卡片 + hover 效果 -->
<button class="btn btn-primary">  <!-- 綠色主要按鈕 -->
<button class="btn btn-outline">  <!-- 外框按鈕 -->
<span class="badge badge-green">  <!-- 標籤 -->
```

---

## 📦 外部依賴

| 套件 | 版本 | 用途 |
|------|------|------|
| Chart.js | 4.4.0 | 雷達圖（環保測驗頁） |
| Google Fonts | — | Playfair Display + DM Sans |

不需要 npm，純 CDN 引入，開啟 HTML 即可執行。

---

## ✅ 功能清單

- [x] 首頁 Hero + 統計數字 + SDG 介紹
- [x] 關於我們互動心智圖（點擊展開）
- [x] 問題區翻牌卡片（6 大問題 + 篩選器 + Modal）
- [x] 環保測驗 20 題（4 類 × 5 題）
- [x] 計分邏輯（各題不同權重）
- [x] 雷達圖視覺化結果
- [x] 個人化行為診斷
- [x] 各類別得分分解
- [x] 響應式設計（手機版）
- [x] 共用導覽列（滾動漸隱、手機漢堡選單）
