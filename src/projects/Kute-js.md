---
title: CardPool 卡舖---追星周邊彙整站
stack: Vue.js + Vite
slug: the-vue-vite-js
date: 2023-03-28T00:00:00+00:00
thumb: ../images/thumbs/demo-0.png
imgarr: https://i.imgur.com/bDm5ity.png,https://i.imgur.com/ySrMkKW.png,https://i.imgur.com/YbYvomR.png,https://i.imgur.com/JOgeBTF.png,https://i.imgur.com/pmi6Psl.png,https://i.imgur.com/y26GN7e.png
url: https://facinalin.github.io/cardPool-Vite-Airbnb/#/
gitRepo: https://github.com/Facinalin/cardPool-Vite-Airbnb/tree/production
pack: Vite
frameLang: Vue.js
styleSheet: SASS,Bootstrap
dataApi: Hexschool API
deployVer: git,Github
plugins: Vue-Router,Pinia,AXIOS,Draggable.js,VeeValidate,VueForm-multiselect,Swiper.js,Sweetalert2
---

## 專案設計：

自行設計 Figma  
使用 ESLint Airbnb 維持程式碼品質與格式
&emsp;

## 專案巧思：

CarPool 原意為拼車族，意即乘客揪夠了才會出車。發揮外文系翻譯精神，利用諧音梗 CardPool 玩轉，除發音以外，英文單字與中文名稱意思也相符合。
&emsp;

## 專案受眾：

韓團追星族群

## 專案痛點：

本次專題作品以自己接觸的韓國團體 Stray Kids 為主角設計網站。  
90%以上追星商品若包含『小卡』這項物品一定是整團 8 位成員，就像一個老闆只願意整組賣紅、橙、黃綠及藍的帽子，所以買家一定要一次買五頂來分的概念。市面上沒有網站可以完成這個異地拆卡功能，目前大家都是在社團或 line 群進行。除拆卡外，也希望創造一個像 hub 一樣的空間，讓剛入坑的新粉可以透過一個網站就方便體驗追星生活：應援/ 抽獎/ 舞蹈揪團翻跳/ 展覽/ 飯繪...等。

## 專案前台功能：

- &times;&nbsp; 加入 / 刪除購物車
- &times;&nbsp; 舞團新增報名資訊
- &times;&nbsp; 篩選拆卡成員＆通路
- &times;&nbsp; 成立訂單
- &times;&nbsp; 確認付款
- &times;&nbsp; 拆卡團成員特殊規定（熱門成員 vs.冷門成員）
- &times;&nbsp; 表單驗證
- &times;&nbsp; 點擊後 loading
- &times;&nbsp; 商品分頁 API
- &times;&nbsp; 購物車全站統一顯示數量

&emsp;

## 專案後台功能：

- &times;&nbsp; 登入驗證 / 登出
- &times;&nbsp; 新增商品
- &times;&nbsp; 新增拆卡團（拖曳成員）
