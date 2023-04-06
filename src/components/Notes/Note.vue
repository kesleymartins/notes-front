<script setup>
import Card from '../Card.vue'

const props = defineProps(['note'])
</script>

<template>
  <Card :style="{backgroundColor: note.backgroundColor}">
    <span>{{ note.text }}</span>
    <span>{{ note.date.toLocaleString('pt-BR') }}</span>
  </Card>
</template>

<style scoped>
</style>
