---
title: Grid - Wisp CSS
layout: sidebar.njk
permalink: /o-grid.html
---

# Grid

Applies a grid layout to a container.

```
<div class="o-grid o-grid--cols-3-md">
	<div class="c-box u-color-neutral">Column</div>
	<div class="c-box u-color-neutral">Column</div>
	<div class="c-box u-color-neutral">Column</div>
</div>
```

<div class="c-doc-preview">
	<div class="o-grid o-grid--cols-3-md">
		<div class="c-box u-color-neutral">Column</div>
		<div class="c-box u-color-neutral">Column</div>
		<div class="c-box u-color-neutral">Column</div>
	</div>
</div>

## Modifiers

### Cols

Set equal-width columns at specific breakpoints

```
<div class="o-grid o-grid--cols-2-md">
	<div class="c-box u-color-neutral">Column</div>
	<div class="c-box u-color-neutral">Column</div>
</div>
```

<div class="c-doc-preview">
	<div class="o-grid o-grid--cols-2-md">
		<div class="c-box u-color-neutral">Column</div>
		<div class="c-box u-color-neutral">Column</div>
	</div>
</div>

```
<div class="o-grid o-grid--cols-3-md">
	<div class="c-box u-color-neutral">Column</div>
	<div class="c-box u-color-neutral">Column</div>
	<div class="c-box u-color-neutral">Column</div>
</div>
```

<div class="c-doc-preview">
	<div class="o-grid o-grid--cols-3-md">
		<div class="c-box u-color-neutral">Column</div>
		<div class="c-box u-color-neutral">Column</div>
		<div class="c-box u-color-neutral">Column</div>
	</div>
</div>

```
<div class="o-grid o-grid--cols-4-lg">
	<div class="c-box u-color-neutral">Column</div>
	<div class="c-box u-color-neutral">Column</div>
	<div class="c-box u-color-neutral">Column</div>
	<div class="c-box u-color-neutral">Column</div>
</div>
```

<div class="c-doc-preview">
	<div class="o-grid o-grid--cols-4-lg">
		<div class="c-box u-color-neutral">Column</div>
		<div class="c-box u-color-neutral">Column</div>
		<div class="c-box u-color-neutral">Column</div>
		<div class="c-box u-color-neutral">Column</div>		
	</div>
</div>

```
<div class="o-grid o-grid--cols-auto-md">
	<div class="c-box u-color-neutral">Column</div>
	<div class="c-box u-color-neutral">Column</div>
</div>
```

<div class="c-doc-preview">
	<div class="o-grid o-grid--cols-auto-md">
		<div class="c-box u-color-neutral">Column</div>
		<div class="c-box u-color-neutral">Column</div>		
	</div>
</div>

### Ratio

Sets asymmetric column ratios at medium screens and up.

```
<div class="o-grid o-grid--ratio-2-1-md">
	<div class="c-box u-color-neutral">Column</div>
	<div class="c-box u-color-neutral">Column</div>
</div>
```

<div class="c-doc-preview">
	<div class="o-grid o-grid--ratio-2-1-md">
		<div class="c-box u-color-neutral">Column</div>
		<div class="c-box u-color-neutral">Column</div>		
	</div>
</div>

```
<div class="o-grid o-grid--ratio-1-2-md">
	<div class="c-box u-color-neutral">Column</div>
	<div class="c-box u-color-neutral">Column</div>
</div>
```

<div class="c-doc-preview">
	<div class="o-grid o-grid--ratio-1-2-md">
		<div class="c-box u-color-neutral">Column</div>
		<div class="c-box u-color-neutral">Column</div>		
	</div>
</div>

```
<div class="o-grid o-grid--ratio-3-1-md">
	<div class="c-box u-color-neutral">Column</div>
	<div class="c-box u-color-neutral">Column</div>
</div>
```

<div class="c-doc-preview">
	<div class="o-grid o-grid--ratio-3-1-md">
		<div class="c-box u-color-neutral">Column</div>
		<div class="c-box u-color-neutral">Column</div>		
	</div>
</div>

```
<div class="o-grid o-grid--ratio-1-3-md">
	<div class="c-box u-color-neutral">Column</div>
	<div class="c-box u-color-neutral">Column</div>
</div>
```

<div class="c-doc-preview">
	<div class="o-grid o-grid--ratio-1-3-md">
		<div class="c-box u-color-neutral">Column</div>
		<div class="c-box u-color-neutral">Column</div>		
	</div>
</div>

### Gap

Sets the gap between grid items.

```
<div class="o-grid o-grid--cols-3-md o-grid--gap-sm">
	<div class="c-box u-color-neutral">Column</div>
	<div class="c-box u-color-neutral">Column</div>
	<div class="c-box u-color-neutral">Column</div>
</div>
```

<div class="c-doc-preview">
	<div class="o-grid o-grid--cols-3-md o-grid--gap-sm">
		<div class="c-box u-color-neutral">Column</div>
		<div class="c-box u-color-neutral">Column</div>
		<div class="c-box u-color-neutral">Column</div>
	</div>
</div>

```
<div class="o-grid o-grid--cols-3-md o-grid--gap-lg">
	<div class="c-box u-color-neutral">Column</div>
	<div class="c-box u-color-neutral">Column</div>
	<div class="c-box u-color-neutral">Column</div>
</div>
```

<div class="c-doc-preview">
	<div class="o-grid o-grid--cols-3-md o-grid--gap-lg">
		<div class="c-box u-color-neutral">Column</div>
		<div class="c-box u-color-neutral">Column</div>
		<div class="c-box u-color-neutral">Column</div>
	</div>
</div>

### Align

Set the vertical alignment of items.

```
<div class="o-grid o-grid--cols-3-md o-grid--align-start">
	<img src="https://placeholdit.com/64x64/1d4ed8/ffffff" alt="">
	<div class="c-box u-color-neutral">
		<p>Column</p>
		<p>Column</p>
		<p>Column</p>
	</div>
	<div class="c-box u-color-neutral">
		<p>Column</p>
		<p>Column</p>
		<p>Column</p>
	</div>
</div>
```

<div class="c-doc-preview">
	<div class="o-grid o-grid--cols-3-md o-grid--align-start">
		<img src="https://placeholdit.com/64x64/1d4ed8/ffffff" alt="">
		<div class="c-box u-color-neutral">
			<p>Column</p>
			<p>Column</p>
			<p>Column</p>
		</div>
		<div class="c-box u-color-neutral">
			<p>Column</p>
			<p>Column</p>
			<p>Column</p>
		</div>
	</div>
</div>

```
<div class="o-grid o-grid--cols-3-md o-grid--align-center">
	<img src="https://placeholdit.com/64x64/1d4ed8/ffffff" alt="">
	<div class="c-box u-color-neutral">
		<p>Column</p>
		<p>Column</p>
		<p>Column</p>
	</div>
	<div class="c-box u-color-neutral">
		<p>Column</p>
		<p>Column</p>
		<p>Column</p>
	</div>
</div>
```

<div class="c-doc-preview">
	<div class="o-grid o-grid--cols-3-md o-grid--align-center">
		<img src="https://placeholdit.com/64x64/1d4ed8/ffffff" alt="">
		<div class="c-box u-color-neutral">
			<p>Column</p>
			<p>Column</p>
			<p>Column</p>
		</div>
		<div class="c-box u-color-neutral">
			<p>Column</p>
			<p>Column</p>
			<p>Column</p>
		</div>
	</div>
</div>

```
<div class="o-grid o-grid--cols-3-md o-grid--align-end">
	<img src="https://placeholdit.com/64x64/1d4ed8/ffffff" alt="">
	<div class="c-box u-color-neutral">
		<p>Column</p>
		<p>Column</p>
		<p>Column</p>
	</div>
	<div class="c-box u-color-neutral">
		<p>Column</p>
		<p>Column</p>
		<p>Column</p>
	</div>
</div>
```

<div class="c-doc-preview">
	<div class="o-grid o-grid--cols-3-md o-grid--align-end">
		<img src="https://placeholdit.com/64x64/1d4ed8/ffffff" alt="">
		<div class="c-box u-color-neutral">
			<p>Column</p>
			<p>Column</p>
			<p>Column</p>
		</div>
		<div class="c-box u-color-neutral">
			<p>Column</p>
			<p>Column</p>
			<p>Column</p>
		</div>
	</div>
</div>
