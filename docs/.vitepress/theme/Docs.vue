<script setup>
	import "../../../src/imports.css";
	import "./styles.css";	 
	import { onMounted, watch } from 'vue';
	import { useRouter } from 'vitepress'

	const router = useRouter()

	onMounted(() => {	
		const toggle = document.getElementById("js-menu-toggle");
		const sidebar = document.querySelector('.c-vite-layout__sidebar');
		const overlay = document.querySelector('.c-vite-layout__overlay');

		toggle.addEventListener('click', () => {
			sidebar.classList.toggle('is-open');
			overlay.classList.toggle('is-open');
		});

		overlay.addEventListener('click', () => {
			sidebar.classList.remove('is-open');
			overlay.classList.remove('is-open');
		});
	});

	watch(() => router.route.path, () => {
		document.querySelector('.c-vite-layout__sidebar').classList.remove('is-open')
		document.querySelector('.c-vite-layout__overlay').classList.remove('is-open')
	});
</script>

<template> 
	<div class="c-vite-layout">
		<aside id="js-menu" class="c-vite-layout__sidebar u-color-neutral">
			<div class="c-box c-box--spacing-lg">
				<div class="u-type-lg u-margin-block-end-sm"><strong>Getting Started</strong></div>
						
				<div class="o-stack o-stack--gap-sm u-type-sm u-margin-block-end-md u-vite-padding-inline-start-md">
					<a class="o-link-inline" href="/">Wisp CSS</a>
					<a class="o-link-inline" href="/pages/start/principles">Design Principles</a>
					<a class="o-link-inline" href="/pages/start/installing">Installing</a>
					<a class="o-link-inline" href="/pages/start/customizing">Customizing</a>
					<a class="o-link-inline" href="/pages/start/extending">Extending</a>				
				</div>

				<div class="u-type-lg u-margin-block-end-sm"><strong>Objects</strong></div>
				
				<div class="o-stack o-stack--gap-sm u-type-sm u-margin-block-end-md u-vite-padding-inline-start-md">
					<a class="o-link-inline" href="/pages/objects/cluster">Cluster</a>
					<a class="o-link-inline" href="/pages/objects/container">Container</a>
					<a class="o-link-inline" href="/pages/objects/grid">Grid</a>
					<a class="o-link-inline" href="/pages/objects/list-block">Link Block</a>
					<a class="o-link-inline" href="/pages/objects/list-inline">Link Inline</a>
					<a class="o-link-inline" href="/pages/objects/media">Media</a>
					<a class="o-link-inline" href="/pages/objects/pair">Pair</a>
					<a class="o-link-inline" href="/pages/objects/ratio">Ratio</a>
					<a class="o-link-inline" href="/pages/objects/stack">Stack</a>
				</div>

				<div class="u-type-lg u-margin-block-end-sm"><strong>Behaviors</strong></div>
				
				<div class="o-stack o-stack--gap-sm u-type-sm u-margin-block-end-md u-vite-padding-inline-start-md">
					<a class="o-link-inline" href="/pages/behaviors/press">Press</a>
					<a class="o-link-inline" href="/pages/behaviors/scroll">Scroll</a>	
					<a class="o-link-inline" href="/pages/behaviors/sticky">Sticky</a>	
					<a class="o-link-inline" href="/pages/behaviors/tint">Tint</a>	
					<a class="o-link-inline" href="/pages/behaviors/transition">Transition</a>										
				</div>	

				<div class="u-type-lg u-margin-block-end-sm"><strong>Components</strong></div>
				
				<div class="o-stack o-stack--gap-sm u-type-sm u-margin-block-end-md u-vite-padding-inline-start-md">
					<a class="o-link-inline" href="/pages/components/badge">Badge</a>
					<a class="o-link-inline" href="/pages/components/box">Box</a>
					<a class="o-link-inline" href="/pages/components/button">Button</a>	
					<a class="o-link-inline" href="/pages/components/button-group">Button Group</a>	
					<a class="o-link-inline" href="/pages/components/card">Card</a>	
					<a class="o-link-inline" href="/pages/components/input">Input</a>	
					<a class="o-link-inline" href="/pages/components/input-addin">Input Addin</a>					
					<a class="o-link-inline" href="/pages/components/table">Table</a>										
				</div>

				<div class="u-type-lg u-margin-block-end-sm"><strong>Utilities</strong></div>
				
				<div class="o-stack o-stack--gap-sm u-type-sm u-margin-block-end-md u-vite-padding-inline-start-md">
					<a class="o-link-inline" href="/pages/utilities/color">Color</a>		
					<a class="o-link-inline" href="/pages/utilities/hidden">Hidden</a>															
					<a class="o-link-inline" href="/pages/utilities/margin">Margin</a>									
					<a class="o-link-inline" href="/pages/utilities/text">Text</a>										
					<a class="o-link-inline" href="/pages/utilities/type">Type</a>
					<a class="o-link-inline" href="/pages/utilities/visually-hidden">Visually Hidden</a>															
					<a class="o-link-inline" href="/pages/utilities/width">Width</a>	
				</div>
			</div>
		</aside>

		<div class="c-vite-layout__overlay"></div>

		<div>
			<header class="c-box c-box--spacing-lg u-vite-color-black">
				<div class="o-cluster o-cluster--align-center o-cluster--justify-between">
 
					<a class="o-link-inline" href="http://wispcode.github.io/">
						<strong>Wisp CSS</strong>
					</a>
					<a href="https://github.com/wispcode/wisp-css/">
						<img src="/github-logo-sm.svg" alt="GitHub Logo"> 
					</a>
				</div>
			</header>
 
			<main class="c-vite-layout__main">
				<button id="js-menu-toggle" class="c-button u-margin-block-end-md u-vite-only-mobile">
					Toggle Menu 
				</button>

				<Content />
			</main> 
		</div>
  	</div>
</template>
 
 