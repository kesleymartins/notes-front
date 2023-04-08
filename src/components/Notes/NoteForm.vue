<script setup>
import { onMounted, ref } from 'vue';
import { useToast } from 'vue-toastification'
import { object, string } from "yup"

const emit = defineEmits(['submit'])
const props = defineProps(['noteData'])

const noteFormSchema = object({
  content: string().required().trim()
})

const contentTextarea = ref(null)
const toast = useToast()

const onAddNote = () => {
  try {
    noteFormSchema.validateSync(props.noteData);
    emit('submit')
  } catch (error) {
    toast.info('Conteudo da nota não pode ficar vazio!')
  }

  cleanNoteData()
}

const cleanNoteData = () => {
  props.noteData.content = ''
}

onMounted(() => {
  contentTextarea.value.focus()
})
</script>

<template>
  <form class="form">
    <div class="field">
      <textarea ref="contentTextarea" v-model="noteData.content" rows="6" v-on:keydown.enter="onAddNote"></textarea>
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
