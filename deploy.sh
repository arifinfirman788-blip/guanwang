#!/usr/bin/env sh

# 发生错误时终止
set -e

# 构建
npm run build

# 进入构建文件夹
cd dist

# 初始化 git 并提交
git init
git checkout -b gh-pages
git add -A
git commit -m 'deploy'

# 强制推送到 gh-pages 分支
git push -f https://github.com/arifinfirman788-blip/guanwang.git gh-pages

cd -
