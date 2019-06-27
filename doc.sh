yarn doc
git checkout gh-pages
mv -f doc/* ./
git add .
git commit -m "update page"
git push
git checkout master
