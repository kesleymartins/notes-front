<script setup>
import Note from '../components/Notes/Note.vue'
import NewNote from '../components/Notes/NewNote.vue'
import { useNotesStore } from '../stores/notes'
import { onMounted } from 'vue';
import { useToast } from 'vue-toastification';

const notesStore = useNotesStore()
const toast = useToast()

onMounted(() => {
  notesStore.fetchNotes()
})

const onRemoveNote = (note) => {
  notesStore.destroyNote(note)
  toast.success('Nota removida!')
}
</script>

<template>
  <header class="header container">
    <h1 class="title">Notes App</h1>

    <NewNote />
  </header>

  <main class="main container">
    <div class="cards">
      <Note v-for="note in notesStore.notes" :key="note.id"
        :note="note"
        @remove="onRemoveNote(note)"
      />
    </div>
  </main>
</template>

<style scoped>
main {
  width: 100vw;
  height: 100vh;
}

.container {
  margin: auto;
  width: 60%;
}

.header {
  padding: 1em;
  display: flex;
  justify-content: space-between;
}

.header .title {
  font-size: 2em;
}

.cards {
  display: flex;
  flex-wrap: wrap;
}
</style>
