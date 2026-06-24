---
title: Installing
layout: sidebar.njk
permalink: /guide-installing.html
---

# Installing Wisp CSS

Wisp can be used as a complete framework, assembled from individual modules, or
imported into your own build.

<div class="c-box c-box--border u-margin-block-end-md">
	<h2 class="u-type-xl">Full Bundle</h2>
	<p>
		Include the bundle that contains everything.
	</p>
	<pre>&lt;link rel="stylesheet" href="bundle.min.css"&gt;</pre>
</div>

<div class="c-box c-box--border">
	<h2 class="u-type-xl">Individual Modules</h2>
	<p>
		Include preflight.css and any modules you wish to use.
	</p>
	<pre>&lt;link rel="stylesheet" href="preflight.min.css"&gt;<Br>&lt;link rel="stylesheet" href="o-grid.min.css"&gt;<br>&lt;link rel="stylesheet" href="o-cluster.min.css"&gt;</pre>
</div>

<div class="c-box c-box--border">
	<h2 class="u-type-xl">Custom Build</h2>
	<p>
		Import preflight.css and the modules into your project.
	</p>
	<pre>@import "preflight.min.css";<br>@import "o-grid.min.css";<br>@import "o-cluster.min.css";</pre>
</div>
