#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

git branch -D master

git checkout -b master

rm -rf node_modules

yarn install
# 生成静态文件
yarn build

rm -rf README.md
rm -rf docs
rm -rf node_modules
rm -rf package.json
rm -rf yarn.lock


mv public/* `pwd`
rm -rf public

git add -A
git commit -m 'deploy'

git push -f origin master

# 刷新CDN缓存
tccli cdn PurgeUrlsCache --version 2018-06-06 --Urls '["https://xshare.codekong.cn"]'

git checkout docs