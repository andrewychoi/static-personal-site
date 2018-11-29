---
layout: post
title:  "Classes with d3 SVGs"
date:   2014-10-10 13:31:24 -0400
---

Today I was working on toggling classes of elements in a d3-generated SVG, and `addClass` and `removeClass` weren\'t working. I verified that my selectors were correct, and also surrounded the block with a jQuery document-ready function, but no dice. I switched from using the jQuery `addClass` and `removeClass` methods to d3\'s `classed()` function, and the code magically started working!

As a further note, I imagine that the reason why this is the case is that `addClass` and `removeClass` don\'t recognize `<path>` elements, while the selectors still do.
