<script setup>
import { ref } from 'vue'
import Card from '../Card.vue'
import NoteForm from './NoteForm.vue'
import { useNotesStore } from '../../stores/notes'
import { useToast } from 'vue-toastification'

const showNoteForm = ref(false)
const noteStore = useNotesStore()
const toast = useToast()

const noteData = ref({
  content: ''
})

const toggleNoteForm = () => {
  showNoteForm.value = !showNoteForm.value
}

const onSubmit = () => {
  noteStore.addNote(noteData.value)
  toast.success('Nota criada com sucesso!')
  toggleNoteForm()
}
</script>

<template>
  <Card>
    <template #header>
      <NoteForm v-if="showNoteForm" :noteData="noteData" @submit="onSubmit"/>
    </template>

    <template #middle>
      <div class="icon" @click="toggleNoteForm" v-if="!showNoteForm">
        <v-icon name="bi-plus-square" scale="1.5" :hover="false" animation="pulse" speed="slow"></v-icon>
      </div>
    </template>
  </Card>
</template>

<style scoped>
.icon {
  cursor: pointer;
}
</style>
