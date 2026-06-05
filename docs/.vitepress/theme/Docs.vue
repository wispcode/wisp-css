<script setup>
	import { onMounted, watch } from 'vue';
	import { useRoute } from 'vitepress';
	import "../../../src/imports.css";
	import "./style.css";
	const route = useRoute();

	onMounted(() => {
		const details = document.querySelectorAll('details');
		const MQ = window.matchMedia('(min-width: 48rem)');

		/**
		 * Set the open attribute based on device resolution.
		 */
		MQ.addEventListener('change', e => {
			if (!e.matches) {
				details.forEach(el => el.removeAttribute('open'));
			} else {
				details.forEach(el => el.setAttribute('open', ''));
			}
		});

		/**
		 * Watch for route changes and reclose opened details.
		 */
		watch(() => route.path, () => {
			if (!MQ.matches) {
				details.forEach(el => el.removeAttribute('open'));
			}
		});
	}); 
</script>

<template>
	<div class="u-margin-block-end-md u-color-neutral">
		<div class="o-container">
			<div class="o-grid o-grid--cols-2-sm o-grid--align-center">
				<div class="o-cluster o-cluster--align-center">
					<img src="/wisp-logo-sm.png" alt="Wisp Logo"> 
					<a class="o-link-inline" href="/">
						 <strong>Wisp CSS</strong>
					</a>
				</div>
				<div class="u-text-end">
					<a href="https://github.com/wispcode/wisp-css/">
						<img src="/github-logo-sm.svg" alt="GitHub Logo"> 
					</a>
				</div>
			</div>
		</div>
	</div>
 
	<div class="o-container">
    	<div class="o-grid o-grid--ratio-1-3-md">
			<aside>
				<!--#getting-started-->

				<details class="u-margin-block-end-sm" open>
					<summary class="u-type-lg u-margin-block-end-sm"><strong>Getting Started</strong></summary>
					
					<div class="o-stack o-stack--gap-sm u-type-sm u-margin-block-end-md u-padding-inline-start-md">
						<a class="o-link-inline" href="/">Wisp CSS</a>
						<a class="o-link-inline" href="/pages/start/principles">Design Principles</a>
						<a class="o-link-inline" href="/pages/start/installing">Installing</a>
						<a class="o-link-inline" href="/pages/start/customizing">Customizing</a>
						<a class="o-link-inline" href="/pages/start/extending">Extending</a>				
					</div>
				</details>

				<!--#objects-->

				<details class="u-margin-block-end-sm" open>
					<summary class="u-type-lg u-margin-block-end-sm"><strong>Objects</strong></summary>

					<div class="o-stack o-stack--gap-sm u-type-sm u-margin-block-end-md u-padding-inline-start-md">
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
				</details>
				
				<!--#behaviors-->

				<details class="u-margin-block-end-sm" open>
					<summary class="u-type-lg u-margin-block-end-sm"><strong>Behaviors</strong></summary>

					<div class="o-stack o-stack--gap-sm u-type-sm u-margin-block-end-md u-padding-inline-start-md">
					 	<a class="o-link-inline" href="/pages/behaviors/press">Press</a>
						<a class="o-link-inline" href="/pages/behaviors/scroll">Scroll</a>	
						<a class="o-link-inline" href="/pages/behaviors/sticky">Sticky</a>	
						<a class="o-link-inline" href="/pages/behaviors/tint">Tint</a>	
						<a class="o-link-inline" href="/pages/behaviors/transition">Transition</a>										
					</div>				
				</details>

				<!--#components-->

				<details class="u-margin-block-end-sm" open>					
					<summary class="u-type-lg u-margin-block-end-sm"><strong>Components</strong></summary>

					<div class="o-stack o-stack--gap-sm u-type-sm u-margin-block-end-md u-padding-inline-start-md">
						<a class="o-link-inline" href="/pages/components/badge">Badge</a>
						<a class="o-link-inline" href="/pages/components/box">Box</a>
						<a class="o-link-inline" href="/pages/components/button">Button</a>	
						<a class="o-link-inline" href="/pages/components/card">Card</a>	
						<a class="o-link-inline" href="/pages/components/input">Input</a>	
						<a class="o-link-inline" href="/pages/components/input-addin">Input Addin</a>					
						<a class="o-link-inline" href="/pages/components/table">Table</a>										
					</div>
				</details>

				<!--#utilities-->

				<details class="u-margin-block-end-sm" open>					
					<summary class="u-type-lg u-margin-block-end-sm"><strong>Utilities</strong></summary>

					<div class="o-stack o-stack--gap-sm u-type-sm u-margin-block-end-md u-padding-inline-start-md">
						<a class="o-link-inline" href="/pages/utilities/color">Color</a>		
						<a class="o-link-inline" href="/pages/utilities/margin">Margin</a>									
						<a class="o-link-inline" href="/pages/utilities/text">Text</a>										
						<a class="o-link-inline" href="/pages/utilities/type">Type</a>
						<a class="o-link-inline" href="/pages/utilities/visually-hidden">Visually Hidden</a>															
						<a class="o-link-inline" href="/pages/utilities/width">Width</a>	
					</div>
				</details>
			</aside>
			<main>
				<Content />
			</main>
		</div>
  	</div>
</template>