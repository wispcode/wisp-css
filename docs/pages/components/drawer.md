# Drawer

Slides a drawer in from the side of the page.

	<button class="c-button" onclick="toggleClass('sidebar', 'is-open')">
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
	
<DrawerDemo />
  
## Modifiers

### Right

Slides the drawer in from on the right-hand side instead.
  
	<button class="c-button" onclick="toggleClass('sidebar', 'is-open')">
		Toggle Drawer
	</button>

	<div id="sidebar" class="c-drawer c-drawer--right">
		<div class="c-box">
			<p>This is a drawer component.</p>
		</div>
	</div>

	<script>
		function toggleClass(id, className) {
			document.getElementById(id).classList.toggle(className);
		}
	</script>

<DrawerDemo right />

## States

### is-open

Determines is the drawer is opened or closed.
 
	<div id="sidebar" class="c-drawer is-open"></div>
	 