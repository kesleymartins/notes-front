<script setup>
import { ref } from 'vue';
import { useToast } from 'vue-toastification'
import { useNotesStore } from '../../stores/notes'
import Card from '../Card.vue'

const newNote = ref('')
const notesStore = useNotesStore()
const toast = useToast()
const showNoteForm = ref(false)

const onAddNote = () => {
  notesStore.addNote(newNote)
  toggleNoteForm()
  newNote.value = ""
  toast.success('Nota criada com sucesso!')
}

const toggleNoteForm = () => {
  showNoteForm.value = !showNoteForm.value
}
</script>

<template>
  <Card>
    <template #header>
      <form class="form" v-if="showNoteForm">
        <div class="field">
          <textarea v-model="newNote" rows="6" v-on:keyup.enter="onAddNote"></textarea>
        </div>
      </form>
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

.field textarea {
  font-size: 1.2em;
  resize: none;
  border: none;
  width: 100%;
}

.form {
  height: 100%;
}

.field textarea:focus {
  outline: 0;

}
</style>
