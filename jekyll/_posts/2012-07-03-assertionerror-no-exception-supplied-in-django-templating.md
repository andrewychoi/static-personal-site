---
layout: post
title:  "AssertionError in Django templating"
date:   2012-07-03 19:35:17 -0400
categories: jekyll update
---

Running across this bug is a bit odd, because I wasn't aware of any assertions that I was making, but this was the offending code:
```
{% raw %}{% if display_type == 'ts' %}
<script src="/static/highstock.js" type="text/javascript">
</script>
{% else if display_type == 'avg' %}
<script src="/static/highcharts.js" type="text/javascript">
</script>
{% endif %}{% endraw %}
```

The above code ended up causing an AssertionError: No exception supplied.
The idea was to do a conditional JavaScript import, but the problem actually ended up being in the Django template syntax.  The correction was to replace the "else if" with an "elif".  Rookie mistake!
Corrected code:
```
{% raw %}{% if display_type == 'ts' %}
<script src="/static/highstock.js" type="text/javascript">
</script>
{% elif display_type == 'avg' %}
<script src="/static/highcharts.js" type="text/javascript">
</script>
{% endif %}{% endraw %}
```
