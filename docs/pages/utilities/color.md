# Color

Sets a background and text color.

	<p class="c-box u-color-primary">Primary</p>
	<p class="c-box u-color-secondary">Secondary</p>
	<p class="c-box u-color-neutral">Neutral</p>
	<p class="c-box u-color-surface">Surface</p>

<div class="u-vite-preview">
	<p class="c-box u-color-primary">Primary</p>
	<p class="c-box u-color-secondary">Secondary</p>
	<p class="c-box u-color-neutral">Neutral</p>
	<p class="c-box u-color-surface">Surface</p>
</div>

## Notes
 
Wisp CSS ships with a minimal set of color utilities by design. Adding more would lead to bloat. Instead, extend the utilities layer with your own color classes.

	@layer utilities {
		.u-color-danger {
			background-color: #dc2626;
			color: #ffffff;
		}
	}