---
title: Vite開發-專案建立流程
stack: Vue.js + SCSS
slug: the-vue-js
date: 2023-03-27T00:00:00+00:00
thumb: ../images/thumbs/vue.png
imgarr: ../images/tools/vue.png,../images/tools/js.png,../images/tools/SASS.png
---

# Vite 開發-專案建立流程

官方文件：https://vitejs.dev/guide/

官方文件挺清楚，這邊只是要記錄 terminal 的狀況，避免未來金魚腦。

1. 打開終端機，進行 Vite npm 安裝：
   （以下指令僅供 node 版本 14.8 以上使用）

```
npm create vite@latest

# mac的話直接改成 sudo npm create vite@latest 且輸入自己電腦密碼

```

2. 命名專案 project name

![](https://i.imgur.com/UN6CSuO.png)

```
（請輸入專案名稱）
 my-project

```

3. 命名專案 package name

![](https://i.imgur.com/D1qqbAz.png)

```
package
這段我也不懂，因為我原本任意自訂名稱，遇到報錯說json檔不存在。
滿頭問號，所以第二次我試打了package（想說目前過看過的90%都叫做package.json），
結果就綠勾勾，給過了。故先沿用。

```

4. 選擇開發框架 framework

![](https://i.imgur.com/byyGXRR.png)

5. 選擇開發語言 variant

```
目前選擇javascript
```

6. 開發指令條列，可以開始開發了！

![](https://i.imgur.com/PPvQ4KK.png)

```
cd '你的專案名稱'  //進入你的開發資料夾（也就是剛剛命名的project）

npm install  //安裝打包好的開發工具（node_modules）

＃任何npm install完成後再run dev

npm run dev  //呼叫Vite出來幫你run出開發環境

```

7. 如果以上三個指令都正常執行，便可以打開你的 local port 檢查是否正常！

![](https://i.imgur.com/jccFGL8.png)

## Vite 專案部署至 github 流程

（本篇為 SSH 金鑰的部署方法，因 HTTPS 一般部署不成功：（
在執行以下步驟之前，請參照本影片至 github 新增金鑰。

\*\* mac 新增金鑰手把手：
https://www.youtube.com/watch?v=cGcpVQlhbuI&ab_channel=Hamed

確定有金鑰後可開始：

1. 新開發完成後在終端機內輸入 control+c 結束開發環節
2. 新增一個 github 的儲存庫 repository
3. 依序執行以下 commit 步驟（熟悉一般 commit 流程的可自行操作）

```
(備註：SouthernViter是你的github用戶名稱; myViteRepo是你的儲存庫名稱)

git init
git add .
git commit -m "0000-commit"
git remote add origin git@github.com:SouthernViter/myViteRepo.git
git push -u origin master
```

4. 重新整理 github 確認是否部署到 github 的步驟完成

--------(第 5 步可以在開發時就先新增好)--------

5. 新增一個 shell script 放在專案的根目錄，在此命名為 deploy.sh
6. 在這個檔案中 copy and paste 以下 code (參考官方文件：https://vitejs.dev/guide/static-deploy.html)

```
#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -B main  #這邊的分支跟你當初git push的分支要同一個
git add -A
git commit -m 'deploy'

#以下是兩個選項，要main分支的選擇一，要gh-pages選擇二：

# 選擇一：if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# 選擇二：if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages

#這邊的分支跟你當初git push的分支要同一個，如果是master，就寫master:gh-pages

cd -
```

7.接著至 vite.config.js 新增 base 屬性

```
export default defineConfig({
plugins:[...],
base:'<REPO>/',  #你的repo儲存庫名稱
...
})
```

8.儲存好該檔案後，至終端機

```
npm run build
sh deploy.sh
```

9.終端機顯示：

![](https://i.imgur.com/najOnOH.png)

就可以上 gh-page 檢查了！
