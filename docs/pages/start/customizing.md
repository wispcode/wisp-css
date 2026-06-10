# Customizing
 
Wisp does not ship with a settings file. Instead, every default is a CSS custom property with a sensible fallback value built in. This means you can drop Wisp into a project and start immediately without configuring anything.

When you are ready to make it your own, override any property in your own stylesheet using the cascade the way it was always intended to be used. Wisp does not need to know about your changes.
	
	<button class="c-button">
		Button
	</button>

	<style>
		:root {
			--wisp-color-primary: #880000;
		}
	</style>

<div class="u-vite-preview">
	<button class="c-button" style="background-color: #880000; color:#fff;">
		Button
	</button>
</div>  

## Global Properties

### Spacing

<table class="c-table c-table--border-cells">
	<thead>
		<tr>
			<th class="u-width-md">Property</th>
			<th>Default</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>wisp-spacing-xs</td>
			<td>0.25rem</td>
		</tr>
		<tr>
			<td>wisp-spacing-sm</td>
			<td>0.5rem</td>
		</tr>
		<tr>
			<td>wisp-spacing-md</td>
			<td>1rem</td>
		</tr>
		<tr>
			<td>wisp-spacing-lg</td>
			<td>1.5rem</td>
		</tr>
		<tr>
			<td>wisp-spacing-xl</td>
			<td>3rem</td>
		</tr>
	</tbody>
</table>

### Typography

<table class="c-table c-table--border-cells">
	<thead>
		<tr>
			<th class="u-width-md">Property</th>
			<th>Default</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>wisp-font-family</td>
			<td>sans-serif</td>
		</tr>
		<tr>
			<td>wisp-font-size-hero</td>
			<td>3rem</td>
		</tr>
		<tr>
			<td>wisp-font-size-lead</td>
			<td>1.25rem</td>
		</tr>
		<tr>
			<td>wisp-font-size-4x</td>
			<td>2.25rem</td>
		</tr>
		<tr>
			<td>wisp-font-size-3x</td>
			<td>1.875rem</td>
		</tr>
		<tr>
			<td>wisp-font-size-2x</td>
			<td>1.5rem</td>
		</tr>
		<tr>
			<td>wisp-font-size-xl</td>
			<td>1.25rem</td>
		</tr>
		<tr>
			<td>wisp-font-size-lg</td>
			<td>1.125rem</td>
		</tr>
		<tr>
			<td>wisp-font-size-md</td>
			<td>1rem</td>
		</tr>
		<tr>
			<td>wisp-font-size-sm</td>
			<td>0.875rem</td>
		</tr>
		<tr>
			<td>wisp-font-weight-bold</td>
			<td>700</td>
		</tr>
		<tr>
			<td>wisp-font-weight-semibold</td>
			<td>600</td>
		</tr>
		<tr>
			<td>wisp-font-weight-medium</td>
			<td>500</td>
		</tr>
		<tr>
			<td>wisp-font-weight-regular</td>
			<td>400</td>
		</tr>
		<tr>
			<td>wisp-line-height</td>
			<td>1.5</td>
		</tr>
	</tbody>
</table>

### Colors

<table class="c-table c-table--border-cells">
	<thead>
		<tr>
			<th class="u-width-md">Property</th>
			<th>Default</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>wisp-color-text</td>
			<td>#0f172a</td>
		</tr>
		<tr>
			<td>wisp-color-link</td>
			<td>#0d6efd</td>
		</tr>
		<tr>
			<td>wisp-color-primary</td>
			<td>#1d4ed8</td>
		</tr>
		<tr>
			<td>wisp-color-primary-text</td>
			<td>#ffffff</td>
		</tr>
		<tr>
			<td>wisp-color-secondary</td>
			<td>#475569</td>
		</tr>
		<tr>
			<td>wisp-color-secondary-text</td>
			<td>#ffffff</td>
		</tr>
		<tr>
			<td>wisp-color-neutral</td>
			<td>#f1f5f9</td>
		</tr>
		<tr>
			<td>wisp-color-neutral-text</td>
			<td>#0f172a</td>
		</tr>
		<tr>
			<td>wisp-color-surface</td>
			<td>#ffffff</td>
		</tr>
		<tr>
			<td>wisp-color-surface-text</td>
			<td>#0f172a</td>
		</tr>
		<tr>
			<td>wisp-color-focus</td>
			<td>#3b82f6</td>
		</tr>
	</tbody>
</table>

## Element Properties

### HR

<table class="c-table c-table--border-cells">
	<thead>
		<tr>
			<th class="u-width-md">Property</th>
			<th>Default</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>wisp-hr-border-color</td>
			<td>#cbd5e1</td>
		</tr>
	</tbody>
</table>

## Object Properties

### Container

<table class="c-table c-table--border-cells">
	<thead>
		<tr>
			<th>Property</th>
			<th>Default</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>wisp-container-width</td>
			<td>1140px</td>
		</tr>
	</tbody>
</table>

## Behavior Properties

### Press

<table class="c-table c-table--border-cells">
	<thead>
		<tr>
			<th class="u-width-md">Property</th>
			<th>Default</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>wisp-transition-duration</td>
			<td>200ms</td>
		</tr>
	</tbody>
</table>

### Scroll

<table class="c-table c-table--border-cells">
	<thead>
		<tr>
			<th class="u-width-md">Property</th>
			<th>Default</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>wisp-scroll-border-color</td>
			<td>#cbd5e1</td>
		</tr>
		<tr>
			<td>wisp-scroll-min-width</td>
			<td>40em</td>
		</tr>
	</tbody>
</table>

### Tint

<table class="c-table c-table--border-cells">
	<thead>
		<tr>
			<th class="u-width-md">Property</th>
			<th>Default</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>wisp-tint-duration</td>
			<td>200ms</td>
		</tr>
	</tbody>
</table>

## Component Properties

### Badge

<table class="c-table c-table--border-cells">
	<thead>
		<tr>
			<th class="u-width-md">Property</th>
			<th>Default</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>wisp-badge-border-radius</td>
			<td>4px</td>
		</tr>
		<tr>
			<td>wisp-badge-outline-color</td>
			<td>cbd5e1</td>
		</tr>		
	</tbody>
</table>

### Box

<table class="c-table c-table--border-cells">
	<thead>
		<tr>
			<th class="u-width-md">Property</th>
			<th>Default</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>wisp-box-border-color</td>
			<td>#cbd5e1</td>
		</tr>
		<tr>
			<td>wisp-box-border-radius</td>
			<td>6px</td>
		</tr>
	</tbody>
</table>

### Button

<table class="c-table c-table--border-cells">
	<thead>
		<tr>
			<th class="u-width-md">Property</th>
			<th>Default</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>wisp-button-outline-border-color</td>
			<td>#ffffff</td>
		</tr>
		<tr>
			<td>wisp-button-outline-text-color</td>
			<td>#ffffff</td>
		</tr>
		<tr>
			<td>wisp-button-outline-hover-text-color</td>
			<td>#0f172a</td>
		</tr>
	</tbody>
</table>
 
### Card

<table class="c-table c-table--border-cells">
	<thead>
		<tr>
			<th class="u-width-md">Property</th>
			<th>Default</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>wisp-card-border-color</td>
			<td>#cbd5e1</td>
		</tr>
		<tr>
			<td>wisp-card-border-radius</td>
			<td>6px</td>
		</tr>
	</tbody>
</table>

### Drawer

<table class="c-table c-table--border-cells">
	<thead>
		<tr>
			<th class="u-width-md">Property</th>
			<th>Default</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>wisp-drawer-background-color</td>
			<td>#ffffff</td>
		</tr>
		<tr>
			<td>wisp-drawer-text-color</td>
			<td>0f172a</td>
		</tr>
		<tr>
			<td>wisp-drawer-box-shadow</td>
			<td>4px 0 12px rgba(0, 0, 0, 0.15)</td>
		</tr>
	</tbody>
</table>

<p>
	<small>Negative values are used for the box-shadow when position on the right.</small>
</p>

### Input

<table class="c-table c-table--border-cells">
	<thead>
		<tr>
			<th class="u-width-md">Property</th>
			<th>Default</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>wisp-input-border-color</td>
			<td>#8c8c8c</td>
		</tr>
		<tr>
			<td>wisp-input-border-radius</td>
			<td>4px</td>
		</tr>
	</tbody>
</table>

### Table

<table class="c-table c-table--border-cells">
	<thead>
		<tr>
			<th class="u-width-md">Property</th>
			<th>Default</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>wisp-table-border-color</td>
			<td>#cbd5e1</td>
		</tr>
		<tr>
			<td>wisp-table-cell-block-padding</td>
			<td>0.5rem</td>
		</tr>
		<tr>
			<td>wisp-table-cell-inline-padding</td>
			<td>1rem</td>
		</tr>
		<tr>
			<td>wisp-table-stripe-color</td>
			<td>#f1f5f9</td>
		</tr>
	</tbody>
</table>