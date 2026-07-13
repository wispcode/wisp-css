---
title: Customizing
layout: sidebar.njk
permalink: /guide-customizing.html
---

# Customizing

Wisp does not ship with a settings file by design. Instead, it uses sensible
defaults that you can overwrite when you are ready to make it your own.

```
:root {
	--wisp-color-primary: 		#111111;
	--wisp-color-primary-text: 	#ffffff;
}
```

---

## Preflight Properties

Global properties defined in preflight.css

<div class="c-box c-box--border u-margin-block-end-md">
	<h2 class="u-type-xl">Colors</h2>
 	<table class="c-table c-table--border-rows">
    	<thead class="u-visually-hidden">
    		<tr>
    			<th>Property</th>
    			<th>Default Value</th>
    		</tr>
    	</thead>
    	<tbody>
    		<tr>
    			<td class="u-width-md">wisp-color-primary</td>
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
    			<td>wisp-color-border</td>
    			<td>#cbd5e1</td>
    		</tr>
     		<tr>
     			<td>wisp-color-border-subtle</td>
     			<td>#e2e8f0</td>
     		</tr>
    		<tr>
    			<td>wisp-color-focus</td>
    			<td>#3b82f6</td>
    		</tr>      
    	</tbody>
    </table>
</div>

<!--#spacing-->

<div class="c-box c-box--border u-margin-block-end-md">
	<h2 class="u-type-xl">Spacing</h2>
     <table class="c-table c-table--border-rows">
    	<thead class="u-visually-hidden">
    		<tr>
    			<th>Property</th>
    			<th>Default Value</th>
    		</tr>
    	</thead>
    	<tbody>
    		<tr>
    			<td class="u-width-md">wisp-spacing-xs</td>
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
    			<td>2rem</td>
    		</tr>    		    
    	</tbody>
    </table>
</div>

<!--#border-radius-->

<div class="c-box c-box--border u-margin-block-end-md">
	<h2 class="u-type-xl">Border Radius</h2>
     <table class="c-table c-table--border-rows">
    	<thead class="u-visually-hidden">
    		<tr>
    			<th>Property</th>
    			<th>Default Value</th>
    		</tr>
    	</thead>
    	<tbody>
    		<tr>
    			<td class="u-width-md">wisp-radius-sm</td>
    			<td>4px</td>
    		</tr>
    		<tr>
    			<td>wisp-radius-md</td>
    			<td>6px</td>
    		</tr>
    		<tr>
    			<td>wisp-radius-lg</td>
    			<td>8px</td>
    		</tr> 		    
    	</tbody>
    </table>
</div>

<!--#font-weight-->

<div class="c-box c-box--border u-margin-block-end-md">
	<h2 class="u-type-xl">Font Weight</h2>
     <table class="c-table c-table--border-rows">
    	<thead class="u-visually-hidden">
    		<tr>
    			<th>Property</th>
    			<th>Default Value</th>
    		</tr>
    	</thead>
    	<tbody>
    		<tr>
    			<td class="u-width-md">wisp-font-weight-light</td>
    			<td>400</td>
    		</tr>
    		<tr>
    			<td>wisp-font-weight-medium</td>
    			<td>500</td>
    		</tr>
    		<tr>
    			<td>wisp-font-weight-semibold</td>
    			<td>600</td>
    		</tr>
    		<tr>
    			<td>wisp-font-weight-bold</td>
    			<td>700</td>
    		</tr> 			    
    	</tbody>
    </table>
</div>

<!--#font-size-->

<div class="c-box c-box--border u-margin-block-end-md">
	<h2 class="u-type-xl">Font Size</h2>
     <table class="c-table c-table--border-rows">
    	<thead class="u-visually-hidden">
    		<tr>
    			<th>Property</th>
    			<th>Default Value</th>
    		</tr>
    	</thead>
    	<tbody>
    		<tr>
    			<td class="u-width-md">wisp-font-size-sm</td>
    			<td>0.875</td>
    		</tr>
    		<tr>
    			<td>wisp-font-size-md</td>
    			<td>1rem</td>
    		</tr>
    		<tr>
    			<td>wisp-font-size-lg</td>
    			<td>1.125rem</td>
    		</tr>
    		<tr>
    			<td>wisp-font-size-xl</td>
    			<td>1.25</td>
    		</tr>
    		<tr>
    			<td>wisp-font-size-2xl</td>
    			<td>1.5</td>
    		</tr> 	
    		<tr>
    			<td>wisp-font-size-3xl</td>
    			<td>1.875</td>
    		</tr>
    		<tr>
    			<td>wisp-font-size-4xl</td>
    			<td>2.25rem</td>
    		</tr>
    		<tr>
    			<td>wisp-font-size-5xl</td>
    			<td>3rem</td>
    		</tr> 												    
    	</tbody>
    </table>
</div>

---

## Module-Specific

Module-specific properties defined inside their module.

<!--#foundation-->

<div class="c-box c-box--border u-margin-block-end-md">
	<h2 class="u-type-xl">Foundation</h2>
     <table class="c-table c-table--border-rows">
    	<thead class="u-visually-hidden">
    		<tr>
    			<th>Property</th>
    			<th>Default Value</th>
    		</tr>
    	</thead>
    	<tbody>
    		<tr>
    			<td class="u-width-md">wisp-body-font-family</td>
    			<td>sans-serif</td>
    		</tr>  
    		<tr>
    			<td class="u-width-md">wisp-body-line-height</td>
    			<td>1.5</td>
    		</tr>    
    		<tr>
    			<td class="u-width-md">wisp-body-color</td>
    			<td>var(--wisp-color-surface-text)</td>
    		</tr>   
    		<tr>
    			<td class="u-width-md">wisp-body-background-color</td>
    			<td>var(--wisp-color-surface)</td>
    		</tr>   			
    		<tr>
    			<td class="u-width-md">wisp-link-color</td>
    			<td>var(--wisp-color-primary)</td>
    		</tr>    	 											    
    	</tbody>
    </table>
</div>

<!--#b-press-elevate-->

<div class="c-box c-box--border u-margin-block-end-md">
	<h2 class="u-type-xl">b-press-elevate</h2>
     <table class="c-table c-table--border-rows">
    	<thead class="u-visually-hidden">
    		<tr>
    			<th>Property</th>
    			<th>Default Value</th>
    		</tr>
    	</thead>
    	<tbody>
    		<tr>
    			<td class="u-width-md">wisp-elevate-color</td>
    			<td>rgba(0, 0, 0, 0.10)</td>
    		</tr>  
    		<tr>
    			<td class="u-width-md">wisp-elevate-color-hover</td>
    			<td>rgba(0, 0, 0, 0.12)</td>
    		</tr>    
    		<tr>
    			<td class="u-width-md">wisp-elevate-color-active</td>
    			<td>rgba(0, 0, 0, 0.16)</td>
    		</tr>    	 											    
    	</tbody>
    </table>
</div>

<!--#b-press-outline-->

<div class="c-box c-box--border u-margin-block-end-md">
	<h2 class="u-type-xl">b-press-outline</h2>
     <table class="c-table c-table--border-rows">
    	<thead class="u-visually-hidden">
    		<tr>
    			<th>Property</th>
    			<th>Default Value</th>
    		</tr>
    	</thead>
    	<tbody>
    		<tr>
    			<td class="u-width-md">wisp-outline-color</td>
    			<td>var(--wisp-color-primary)/td>
    		</tr>
    		<tr>
    			<td>wisp-outline-offset</td>
    			<td>2px</td>
    		</tr>    
    		<tr>
    			<td>wisp-outline-width</td>
    			<td>2px</td>
    		</tr> 					 											    
    	</tbody>
    </table>
</div>

<!--#c-button-->

\<div class="c-box c-box--border u-margin-block-end-md">
	<h2 class="u-type-xl">c-button</h2>
     <table class="c-table c-table--border-rows">
    	<thead class="u-visually-hidden">
    		<tr>
    			<th>Property</th>
    			<th>Default Value</th>
    		</tr>
    	</thead>
    	<tbody>
    		<tr>
    			<td class="u-width-md">wisp-button-outline-color</td>
    			<td>var(--wisp-color-surface)</td>
    		</tr> 		 											    
    	</tbody>
    </table>
</div>

<!--#c-dialog-->

<div class="c-box c-box--border u-margin-block-end-md">
	<h2 class="u-type-xl">c-dialog</h2>
     <table class="c-table c-table--border-rows">
    	<thead class="u-visually-hidden">
    		<tr>
    			<th>Property</th>
    			<th>Default Value</th>
    		</tr>
    	</thead>
    	<tbody>
    		<tr>
    			<td class="u-width-md">wisp-dialog-max-width</td>
    			<td>560px</td>
    		</tr>
    		<tr>
				<td>wisp-dialog-shadow-color</td>
    			<td>rgba(0, 0, 0, 0.20)</td>
    		</tr>    		 											    
    	</tbody>
    </table>
</div>

<!--#c-drawer-->

<div class="c-box c-box--border u-margin-block-end-md">
	<h2 class="u-type-xl">c-drawer</h2>
     <table class="c-table c-table--border-rows">
    	<thead class="u-visually-hidden">
    		<tr>
    			<th>Property</th>
    			<th>Default Value</th>
    		</tr>
    	</thead>
    	<tbody>
    		<tr>
				<td>wisp-drawer-shadow-color</td>
    			<td>rgba(0, 0, 0, 0.20)</td>
    		</tr>    		 											    
    	</tbody>
    </table>
</div>

<!--#c-table-->

<div class="c-box c-box--border u-margin-block-end-md">
	<h2 class="u-type-xl">c-table</h2>
     <table class="c-table c-table--border-rows">
    	<thead class="u-visually-hidden">
    		<tr>
    			<th>Property</th>
    			<th>Default Value</th>
    		</tr>
    	</thead>
    	<tbody>
    		<tr>
    			<td class="u-width-md">wisp-table-border-color</td>
    			<td>var(--wisp-color-border-subtle)</td>
    		</tr>
    		<tr>
    			<td>wisp-table-stripe-color</td>
    			<td>#f1f5f9</td>
    		</tr>  
    		<tr>
    			<td>wisp-table-cell-block-padding</td>
    			<td>var(--wisp-spacing-sm)</td>
    		</tr>  
    		<tr>
    			<td>wisp-table-cell-inline-padding</td>
    			<td>var(--wisp-spacing-md)</td>
    		</tr>  				  		 											    
    	</tbody>
    </table>
</div>

<!--#c-table-wrapper-->

<div class="c-box c-box--border u-margin-block-end-md">
	<h2 class="u-type-xl">c-table-wrapper</h2>
     <table class="c-table c-table--border-rows">
    	<thead class="u-visually-hidden">
    		<tr>
    			<th>Property</th>
    			<th>Default Value</th>
    		</tr>
    	</thead>
    	<tbody>
    		<tr>
    			<td class="u-width-md">wisp-table-wrapper-min-width</td>
    			<td>40em</td>
    		</tr>      		 	 											    
    	</tbody>
    </table>
</div>

<!--#c-container-->

<div class="c-box c-box--border u-margin-block-end-md">
	<h2 class="u-type-xl">c-container</h2>
     <table class="c-table c-table--border-rows">
    	<thead class="u-visually-hidden">
    		<tr>
    			<th>Property</th>
    			<th>Default Value</th>
    		</tr>
    	</thead>
    	<tbody>
    		<tr>
    			<td class="u-width-md">wisp-container-width</td>
    			<td>1140px</td>
    		</tr>    		 											    
    	</tbody>
    </table>
</div>
