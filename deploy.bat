@echo off
SET /P CONFIRM=Etes-vous sur de vouloir deployer? (Y/N)?
IF /I "%CONFIRM%" NEQ "Y" GOTO END

call npm run build

cd dist

git init
git add -A
git commit -m "deploy"

git push -f https://github.com/[votre-username]/[votre-repo].git main:gh-pages

cd ..

:END