---
layout: post
title:  "ImportError: undefined symbol: PyUnicodeUCS4_AsUnicodeEscapeString"
date:   2015-03-23 13:45:16 -0400
categories: jekyll update
---


`ImportError: ...lib/python2.7/site-packages/numpy/core/multiarray.so: undefined symbol: PyUnicodeUCS4_AsUnicodeEscapeString`

The above error means that you\'ve got a Python interpreter compiled against UCS2 trying to run code that was compiled against UCS4. The solution I found was to recompile your lib (here NumPy) using a Python binary compiled with a `--enable-unicode=ucs2`
