#! /bin/bash

echo "Build new static pages..."
cd jekyll
JEKYLL_ENV=production bundle exec jekyll build

echo "Clearing out old published site..."
rm -r ../docs/writing
echo "Copying to publishing directory..."
cd _site
cp -r . ../../docs/writing
echo "Done"
