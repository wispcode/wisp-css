# Installing
 
There are two different ways to add Wisp CSS to your website.

### Full Framework

The simplest option if you want everything. 
 
	<link rel="stylesheet" href="wisp.min.css">

<p>
	<a class="c-button" href="https://github.com/username/wisp-css/releases/latest">
		Download Latest
	</a>
</p>

----

### Individual Modules

The recommended option. Wisp is modular by design and 
nothing assumes anything else is present. Pulling in 
what you need will keep your stylesheet lean and allow 
you to add modules to an existing project. Always include 
`preflight.css` first as it's the only required dependency.
 
	@import 'wisp/preflight.css';
	@import 'wisp/objects.stack.css';
	@import 'wisp/components.button.css';
 

 