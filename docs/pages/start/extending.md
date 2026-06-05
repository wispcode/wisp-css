# Extending
 
Wisp is designed to be extended using `@layer`. You can add your own objects, behaviors, components, and utilities by writing into the same layers Wisp uses. Your code will slot into the cascade naturally alongside the framework without any conflicts.

	<div class="c-box u-color-success">
		Alert Message
	</div>

	<style>
		@layer utilities {
			.u-color-success {
				background-color: #008800;
						   color: #ffffff;
			}
		}
	</style>

<div class="u-vite-preview">
	<div class="c-box" style="background-color: #008800; color:#fff;">
		Success message
	</div>
</div> 
 

## Layers

Wisp defines 5 layers in order of lowest to highest specificity.

<ol>
	<li>Foundation</li>
	<li>Objects</li>
	<li>Behaviors</li>
	<li>Components</li>
	<li>Utilities</li>
</ol>
