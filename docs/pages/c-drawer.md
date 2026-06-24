---
title: Drawer
layout: sidebar.njk
permalink: /c-drawer.html
---

# Drawer

Slides a drawer in from the side of the page.

```
<button class="c-button b-press-scale" onclick="toggleClass('sidebar', 'is-open')">
	Toggle Drawer
</button>

<div id="sidebar" class="c-drawer">
	<div class="c-box">
		<p>This is a drawer component.</p>
	</div>
</div>

<script>
	function toggleClass(id, className) {
		document.getElementById(id).classList.toggle(className);
	}
</script>

```
<div class="c-doc-preview">
	<button class="c-button b-press-scale" onclick="toggleClass('sidebar', 'is-open')">
		Toggle Drawer
	</button>

	<div id="sidebar" class="c-drawer">
		<div class="c-box">
			<p>This is a drawer component.</p>
		</div>
	</div>
</div>
