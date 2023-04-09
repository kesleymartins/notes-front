<script setup>
import { ref } from 'vue'
import Card from '../Card.vue'
import NoteForm from './NoteForm.vue'
import { useNotesStore } from '../../stores/notes'
import { useToast } from 'vue-toastification'

const showNoteForm = ref(false)
const noteStore = useNotesStore()
const toast = useToast()

function toggleNoteForm() {
  showNoteForm.value = !showNoteForm.value
}

function onSubmit(newNote) {
  noteStore.addNote(newNote)
  toast.success('Nota criada com sucesso!')
  toggleNoteForm()
}
</script>

<template>
  <Card>
    <template #header>
      <NoteForm v-if="showNoteForm" @submit="onSubmit"/>
    </template>

    <template #middle>
      <div class="action-icon" @click="toggleNoteForm" v-if="!showNoteForm">
        <v-icon name="bi-plus-square" scale="1.5" :hover="false" animation="pulse" speed="slow"></v-icon>
      </div>
    </template>
  </Card>
</template>

<style scoped></style>
