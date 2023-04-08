<script setup>
import { ref } from 'vue'
import Card from '../Card.vue'
import NoteForm from './NoteForm.vue'

const showNoteForm = ref(false)

const toggleNoteForm = () => {
  showNoteForm.value = !showNoteForm.value
}
</script>

<template>
  <Card>
    <template #header>
      <NoteForm v-if="showNoteForm" @created="toggleNoteForm"/>
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
