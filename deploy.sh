#!/usr/bin/env sh

# 發生錯誤時執行終止指令
set -e

# 打包編譯
npm run build

# 移動到打包資料夾下，若你有調整的話打包後的資料夾請務必調整
cd dist

# 部署到自定義網域
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 部署到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 部署到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
# 以這個專案來講就要改成這樣以下這樣，下面是走 ssh 模式
#git push -f git@github.com:dl123/test.github.io.git master:gh-pages
# 除此之外，也可以改走 HTTPS 模式


# git remote add origin https://github.com/dl123/final5556.git    
# git push -f https://github.com/dl123/final5556.git master:gh-pages

cd -




# <=============Clone Information==========================================
# // 複製到本地端
#  $ git clone https://github.com/happycodergit/react.git
#  // 移動到 react 資料夾
#  $ cd react
#  // 切出自己的新分支（使用 -b）
#  $ git checkout -b happycoder@feature_branch
#  // 做一些 README.md 檔案修改，然後 commit 到自己 fork 過來的專案
#  $ git commit -a -m "Update README"
#  $ git push origin happycoder@feature_branch
#  ==========================================================================>

#  2. 建立分支
#  $ git checkout -b dev
#  $ git commit -a -m "Init dev branch"
#  $ git push origin dev

#  3. 合併分支
#  //移動到 master branch
#  $ git checout master
#  //合併 dev 到 master
#  $ git merge dev
#  //刪除 dev branch
#  $ git branch -d dev
#  //將合併後的 master 推送到遠端
#  $ git push origin master

#  4. 連線git 
#  $ git remote add origin git@github.com:kaochenlong/practice-git.git
#  $ git push -u origin --all
#    git remote -v

# <=============Update GitVersion Information===========================================
#  4. update git --version
#  git update-git-for-windows
 # =====================================================================================>


# <=============Reset Information======================================================
 # // 檔案尚未加入過追蹤時使用，即可恢復到檔案尚未加入暫存區
 # $ git rm --cached hello.py

 # // 若檔案已經在 repository 內，則使用以下指令
 # // repository 與 stage 的檔案都會被還原到 HEAD，但 working directory 內的檔案不變
 # $ git reset HARD
 # =====================================================================================>


# <=============pull Information======================================================
#  Fetch 指令才是把東西拉回來的主角
#  git pull = git fetch + git merge
# =====================================================================================>

# <=============Delete remote branch Information======================================================
# 「Push 上傳到 GitHub」章節提到這樣的指令：
# $ git push origin master:cat

# 意思就是要把本地的 master 分支推上去之後，在 Server 上建立 cat 分支。如果把這個指令前面的 master 拿掉：
# $ git push origin :cat
# =====================================================================================>


# <=============get specific version===================================================
#  將特定版本，先練立新分支上再修改
#  git branch test023 bf7c16ae5aeca952691788e4536de3e5868f8c8d
# =====================================================================================>