<script setup>
import { useToast } from 'vue-toastification'
import { useNotesStore } from '../../stores/notes'

const props = defineProps(['note'])
const toast = useToast()
const notesStore = useNotesStore()

const onDestroy = () => {
  notesStore.destroyNote(props.note)
  toast.success('Nota removida!')
}
</script>

<template>
  <span class="icon" @click="onDestroy">
    <v-icon name="md-delete" :hover="true" animation="pulse" scale="1.2"/>
  </span>
</template>

<style scoped>
.icon {
  cursor: pointer;
}
</style>
