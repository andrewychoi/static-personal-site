#!/bin/bash

for page in pages/*.html; do
    finished=${page##*/}
    cat template-top.html ${page} template-bottom.html > ${finished}
done
