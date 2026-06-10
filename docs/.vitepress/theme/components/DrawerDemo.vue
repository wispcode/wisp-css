<template>
    <p>
        <button class="c-button" @click="open = !open">Toggle Drawer</button>
    </p>
    
    <div class="c-drawer" :class="{ 'c-drawer--right': right, 'is-open': open }">
        <div class="c-box">
            <p>This is a drawer component.</p>
        </div>
    </div>
</template>

<script setup>
	import { ref } from 'vue'
	const props = defineProps({ right: Boolean })
	const open = ref(false)
</script>