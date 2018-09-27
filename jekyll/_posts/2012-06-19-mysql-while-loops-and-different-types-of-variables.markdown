---
layout: post
title:  "MySQL WHILE Loops and Different Types of Variables"
date:   2012-06-19 19:21:29 -0400
categories: jekyll update
---


A few lessons learned today from working with MySQL variables, `WHILE` loops, and prepared statements:

- In a continuation statement for the `WHILE` loop, make sure to use user-defined variables (i.e. `DECLARE foo INT DEFAULT 10` as opposed to `SET @foo = 10`, which defines a session variable called `@foo` to be 10)
- When using these user-defined variables, be sure to `DECLARE` them before any other code gets executed. I'm embarrassed to say that this is one of the things that confounded me the most, despite having written more lines in C than in probably any other language.

More to come as this project continues!
