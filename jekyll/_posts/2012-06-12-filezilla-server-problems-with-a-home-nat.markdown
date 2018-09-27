---
layout: post
title:  "FileZilla server problems with a home NAT"
date:   2012-06-12 05:05:16 -0400
categories: jekyll update
---

I was just having some problems installing a FileZilla FTP server behind a firewalled NAT, and after considerable trial and error, the solution seems to be to make sure that the server is using a specific set of ports (e.g. 35000 - 35050) and forward those along with the traditional ports (20-21).
