<script setup>
import { ref } from 'vue'

const dialog = ref(null)

function openDialog() {
    dialog.value.showModal()
}

function closeDialog() {
    dialog.value.close()
}
</script>

<template>
    <button class="c-button" @click="openDialog">
        Show Dialog
    </button>

    <dialog ref="dialog" class="c-dialog">
        <div class="c-box">
            <p>This is a dialog component.</p>
            <p>
                <button class="c-button" @click="closeDialog">
                    Close
                </button>
            </p>
        </div>
    </dialog>
</template>