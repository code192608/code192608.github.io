#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

git branch -D master

git checkout -b master

rm -rf node_modules

yarn install
# 生成静态文件
yarn build

mv public/* `pwd`

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git add -A
git commit -m 'deploy'

git push -f origin master
