<script setup>
import Note from '../components/Notes/Note.vue'
import NewNote from '../components/Notes/NewNote.vue'
import { useNotesStore } from '../stores/notes'
import { onMounted } from 'vue'

const notesStore = useNotesStore()

onMounted(() => {
  notesStore.fetchNotes()
})

</script>

<template>
  <div class="container">
    <header class="header">
      <h1 class="title">
        Notes App
      </h1>
    </header>

    <main>
      <div class="notes">
        <NewNote class="note"/>

        <Note class="note" v-for="note in notesStore.notes" :key="note.id" :note="note" />
      </div>
    </main>
  </div>
</template>

<style scoped>
.container {
  width: 60%;
  margin: 0 auto;
}

.header {
  padding: 1em;
  display: flex;
  justify-content: center;
}

.header .title {
  font-size: 3em;
  font-weight: bolder;
}

.notes {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: 1em auto;
  gap: 2rem;
}

@media (max-width: 1600px) {
  .notes { grid-template-columns: repeat(4, 1fr); }
}

@media (max-width: 1300px) {
  .notes { grid-template-columns: repeat(3, 1fr); }
}

@media (max-width: 950px) {
  .notes { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 700px) {
  .notes { grid-template-columns: 1fr; }
}

.notes .note {
  height: 150px;
}

</style>
