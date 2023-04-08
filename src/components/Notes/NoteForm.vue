<script setup>
import { onMounted, ref } from 'vue';
import { useNotesStore } from '../../stores/notes'
import { useToast } from 'vue-toastification'

const emit = defineEmits(['created'])

const newNote = ref('')
const contentInput = ref(null)
const notesStore = useNotesStore()
const toast = useToast()

const onAddNote = () => {
  notesStore.addNote(newNote)
  newNote.value = ""
  toast.success('Nota criada com sucesso!')
  emit('created')
}

onMounted(() => {
  contentInput.value.focus()
})
</script>

<template>
  <form class="form">
    <div class="field">
      <textarea ref="contentInput" v-model="newNote" rows="6" v-on:keyup.enter="onAddNote"></textarea>
    </div>
  </form>
</template>

<style scoped>
.form {
  height: 100%;
}

.field textarea {
  font-size: 1.2em;
  resize: none;
  border: none;
  width: 100%;
}

.field textarea:focus {
  outline: 0;
}
</style>
