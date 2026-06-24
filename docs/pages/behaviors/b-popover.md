---
title: b-popover
layout: sidebar.njk
permalink: /b-popover.html
---

# Popover

Anchors a popover below its trigger and flips up if space is limited.

```
<button class="c-button b-press-tint" popovertarget="menu">
	Press Me
</button>

<div id="menu" class="c-box c-box--border u-color-neutral b-popover" popover>
	<div class="o-stack">
		<a class="c-link-inline" href="#">Link 1</a>
		<a class="c-link-inline" href="#">Link 1</a>
		<a class="c-link-inline" href="#">Link 1</a>
	</div>	 
</div>
```

<div class="c-doc-preview" style="">
	<button class="c-button b-press-tint" popovertarget="menu">
		Press Me
	</button>

	<div id="menu" class="c-box c-box--border u-color-neutral b-popover" popover>
		<div class="o-stack">
		<a class="c-link-inline" href="#">Link 1</a>
		<a class="c-link-inline" href="#">Link 1</a>
		<a class="c-link-inline" href="#">Link 1</a>
		</div>	 
	</div>
</div>
