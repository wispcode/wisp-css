---
title: Extending
layout: sidebar.njk
permalink: /guide-extending.html
---

# Extending

Wisp is built around [CSS layers](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@layer), making it easy to extend with your own classes.

<div class="o-grid o-grid--cols-2-md">
	<div class="c-box c-box--border u-margin-block-end-md">
		<h2 class="u-type-xl">Foundation</h2>
		<p>
			Basic typography.
		</p>
		<pre>@layer foundation { ... }</pre>
	</div>
	<div class="c-box c-box--border u-margin-block-end-md">
		<h2 class="u-type-xl">Objects</h2>
		<p>
			Structural objects.
		</p>
		<pre>@layer objects { ... }</pre>
	</div>
	<div class="c-box c-box--border u-margin-block-end-md">
		<h2 class="u-type-xl">Components</h2>
		<p>
			Reusable UI patterns.
		</p>
		<pre>@layer components { ... }</pre>
	</div>
	<div class="c-box c-box--border u-margin-block-end-md">
		<h2 class="u-type-xl">Behaviors</h2>
		<p>
			Interactions and behaviors patterns.
		</p>
		<pre>@layer behaviors { ... }</pre>
	</div>
	<div class="c-box c-box--border u-margin-block-end-md">
		<h2 class="u-type-xl">Utilities</h2>
		<p>
			One-off helper classes.
		</p>
		<pre>@layer utilities { ... }</pre>
	</div>
</div>
