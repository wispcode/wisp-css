# Extending
 
Wisp is designed to be extended using `@layer`. To extend Wisp, write to one of the layers it uses and it will slot into the cascade naturally. 

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
 
1. Foundation 
2. Objects
3. Behaviors
4. Components
5. Utilities  