#! /bin/bash

echo "Build new static pages..."
cd jekyll
JEKYLL_ENV=production bundle exec jekyll build

echo "Copying to publishing directory..."
cd _site
cp -r . ../../writing
echo "Done"
