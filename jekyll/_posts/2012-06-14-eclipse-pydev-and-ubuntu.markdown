---
layout: post
title:  "Eclipse, PyDev, and Ubuntu"
date:   2012-06-14 21:10:28 -0400
---

I just spent an excruciating amount of time trying to figure out what was wrong with my install of Eclipse on Ubuntu 12.04. It turns out that if you attempt to install Eclipse using just `sudo apt-get install eclipse` or `sudo apt-get install eclipse-pde`, you are unable to get Eclipse to add plugins. I ended up using the Software Center to install the Eclipse package with a Java development platform, and was then able to add the PyDev and Subclipse plugins to work!
