# Transition

Applies a transition with default properties.

	<div class="c-box b-transition u-color-primary demo-transform">
		Hover me
	</div>
	<style>
		.demo-transform {
			transform: scale(.95);
		}

		.demo-transform:hover {
			transform: scale(1);
		}
	</style>

<div class="u-vite-preview">
	<div class="c-box b-transition u-color-primary demo-transform">
		Hover me
	</div>
</div>

## Modifiers

### Colors

Switches the transition to color-related properties.

	<div class="c-box b-transition u-color-primary">
		Hover me
	</div>
	<style>
		.demo-color:hover {	
			background-color: #222; 
			           color: #fff;
		}
	</style>

<div class="u-vite-preview">
	<div class="c-box b-transition u-color-primary demo-color">
		Hover me
	</div>
</div>
 
### Curve

Sets the transition timing function.

	<div class="c-box b-transition b-transition--curve-ease u-color-primary demo-curve">
		Hover me
	</div>
 	<style>
		.demo-curve:hover {	
			background-color: #222; 
			           color: #fff;
		}
	</style>

<div class="u-vite-preview">
	<div class="c-box b-transition b-transition--curve-ease u-color-primary demo-color">
		Hover me
	</div>
</div>

	<div class="c-box b-transition b-transition--curve-ease-in-out u-color-primary demo-ease-in-out">
		Hover me
	</div>
 	<style>
		.demo-curve:hover {	
			background-color: #222; 
			           color: #fff;
		}
	</style>

<div class="u-vite-preview">
	<div class="c-box b-transition b-transition--curve-ease-in-out u-color-primary demo-color">
		Hover me
	</div>
</div>
 