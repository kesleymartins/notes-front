<script setup>
import { onMounted, ref } from 'vue';
import { useToast } from 'vue-toastification'
import { object, string } from "yup"

const contentTextarea = ref(null)
const toast = useToast()

const emit = defineEmits(['submit'])
const props = defineProps({
  note: null
})

const noteData = ref({
  content: ''
})

const noteFormSchema = object({
  content: string().required().trim()
})

onMounted(() => {
  if (props.note) {
    noteData.value.content = props.note.content
  }

  contentTextarea.value.focus()
})

function onAction() {
  try {
    noteFormSchema.validateSync(noteData.value);
    emit('submit', noteData.value)
  } catch (error) {
    toast.info('Conteudo da nota não pode ficar vazio!')
  }
}
</script>

<template>
  <form class="form">
    <div class="field">
      <textarea ref="contentTextarea" v-model="noteData.content" rows="6" v-on:keydown.enter="onAction"></textarea>
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
