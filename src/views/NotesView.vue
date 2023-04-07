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
  <header class="header">
    <h1 class="title">Notes App</h1>

    <NewNote />
  </header>

  <main class="container">
    <div class="cards">
      <Note v-for="note in notesStore.notes" :key="note.id" :note="note" />
    </div>
  </main>
</template>

<style scoped>
main {
  width: 100vw;
  height: 100vh;
}

.header {
  padding: 1em;
  display: flex;
  justify-content: space-around;
}

.header .title {
  font-size: 3em;
  font-family: 'Helvetica';
  font-weight: bolder;
}

.container {
  margin: auto;
  width: 60%;
}

@media (max-width : 1300px) {
  .container{
    width: 70%;
  }
}

@media (max-width : 1200px) {
  .container{
    width: 80%;
  }
}

@media (max-width : 1100px) {
  .container{
    width: 90%;
  }
}

.cards {
  margin: 2em 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-gap: 2em;
  height: 200px;
}

@media screen and (max-width : 1000px) {
  .cards{
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (max-width : 750px) {
  .cards{
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width : 430px) {
  .cards{
    grid-template-columns: 1fr;
  }
}

</style>
