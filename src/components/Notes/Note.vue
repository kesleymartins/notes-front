<script setup>
import { computed } from '@vue/reactivity'
import DestroyNote from './DestroyNote.vue'
import Card from '../Card.vue'
import NoteForm from './NoteForm.vue'
import { ref } from 'vue'
import { useNotesStore } from '../../stores/notes'
import { useToast } from 'vue-toastification'

const props = defineProps(['note'])
const showForm = ref(false)
const noteStore = useNotesStore()
const toast = useToast()

const noteDate = computed(() => {
  const date = new Date(props.note.created_at)
  return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
})

function toggleShowForm() {
  showForm.value = !showForm.value
}

function updateNote(updatedNote) {
  noteStore.updateNote(props.note.id, updatedNote)
  toast.success('Nota atualizada!')
  toggleShowForm()
}
</script>

<template>
  <Card :style="{backgroundColor: note.background_color}">
    <template #header>
      <NoteForm v-if="showForm" :note="note" @submit="updateNote"/>
      <span v-else>{{ note.content }}</span>
    </template>

    <span>{{ noteDate }}</span>

    <div>
      <span class="action-icon" @click="toggleShowForm">
        <v-icon name="fa-regular-edit" :hover="true" animation="pulse" scale="1.2"></v-icon>
      </span>
      <DestroyNote :note="note"/>
    </div>
  </Card>
</template>

<style scoped></style>
