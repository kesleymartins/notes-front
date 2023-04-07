<script setup>
import Card from '../Card.vue'

const props = defineProps(['note'])
</script>

<template>
  <Card :style="{backgroundColor: note.background_color}">
    <span>{{ note.content }}</span>
    <span>{{ (new Date(note.created_at)).toLocaleString('pt-BR') }}</span>
  </Card>
</template>

<style scoped>
</style>
