---
layout: post
title:  "Custom model Managers in Django"
date:    2014-12-04 11:23:45 -0400
categories: jekyll update
---

Be aware: if you're trying to use a custom model manager in Django, any inclusion of a manager will remove the default `objects` manager. Be sure to re-include it if you're just extending your models!