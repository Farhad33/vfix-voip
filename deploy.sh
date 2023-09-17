#!/bin/bash

tar czf VFixMSP.tar.gz public src jsconfig.json next.config.js package-lock.json package.json
scp VFixMSP.tar.gz vfix:~
rm VFixMSP.tar.gz

ssh vfix << 'ENDSSH'
mkdir VFixMSP-temp
tar xf VFixMSP.tar.gz -C VFixMSP-temp 2> /dev/null
rm VFixMSP.tar.gz
cd VFixMSP-temp
find  . -name '._*' -exec rm {} \;
npm i
npm run build
cd ..
rm -rf VFixMSP
mv VFixMSP-temp VFixMSP
cd VFixMSP
pm2 delete VFixMSP
pm2 start npm --name "VFixMSP" -- start
ENDSSH