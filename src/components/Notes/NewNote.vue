<script setup>
import { ref } from 'vue';
import Modal from '../Modal.vue'
import { useToast } from 'vue-toastification'
import { useNotesStore } from '../../stores/notes'

const showModal = ref(false)
const newNote = ref('')
const notesStore = useNotesStore()
const toast = useToast()

const toggleModal = () => {
  showModal.value = !showModal.value
}

const onAddNote = () => {
  notesStore.addNote(newNote)
  toggleModal()
  newNote.value = ""
  toast.success('Nota criada com sucesso!')
}
</script>

<template>
  <Modal :show="showModal" @close="toggleModal">
    <template #icon>
      <v-icon name="co-notes" scale="1.5"></v-icon>
    </template>

    <template #title>
      Nova Nota
    </template>

    <form class="form">
      <div class="field">
        <textarea class="textarea" rows="4" v-model="newNote"></textarea>
      </div>

      <div class="buttons">
        <button class="add-button" @click="onAddNote">Adicionar</button>
      </div>
    </form>
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
  padding: 1em;
  border: 2px solid black;
  border-radius: 10px;
  background-color: whitesmoke;
  color: black;
  font-weight: 600;
  cursor: pointer;
}

.add-button:hover {
  background-color: black;
  color: whitesmoke;

}

/* --- form --- */
.form textarea {
  width: 98%;
  resize: none;
  display: block;
  margin: 0 auto;
}

.form .field {
  width: 100%;
}

.form .buttons {
  display: flex;
  justify-content: flex-end;
  margin: 1em 0 0 0;
}
</style>
