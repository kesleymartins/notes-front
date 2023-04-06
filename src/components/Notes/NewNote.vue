<script setup>
import { ref } from 'vue';
import Modal from '../Modal.vue'
import { useNotesStore } from '../../stores/notes'

const showModal = ref(false)
const newNote = ref('')
const notesStore = useNotesStore()

const toggleModal = () => {
  showModal.value = !showModal.value
}

const onAddNote = () => {
  notesStore.addNote(newNote)
  toggleModal()
  newNote.value = ""
}
</script>

<template>
  <Modal :show="showModal" @close="toggleModal">
    <textarea class="textarea" cols="15" rows="4" v-model="newNote"></textarea>

    <template #action>
      <button class="add-button" @click="onAddNote">Add Note</button>
    </template>
  </Modal>

  <button class="new-button" @click="toggleModal">+</button>
</template>

<style scoped>
.new-button {
  padding: 1em;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: none;
  background-color: #313b4b;
  border: 2px solid #313b4b;
  color: white;
  transition: 0.4s;
}

.new-button:hover {
  background-color: white;
  color: black;
  transition: 0.4s;
  cursor: pointer;
}

.add-button {
  width: 100%;
  padding: 1em;
  border: none;
  text-align: center;
  margin: 0 1px;
  background-color: lightskyblue;
}

.add-button:hover {
  background-color: rgb(85, 171, 224);
  color: white;
  cursor: pointer;
}

</style>
