<script setup>
import { computed } from '@vue/reactivity'
import DestroyNote from './DestroyNote.vue'
import Card from '../Card.vue'

const props = defineProps(['note'])

const noteDate = computed(() => {
  const date = new Date(props.note.created_at)
  return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`
})
</script>

<template>
  <Card :style="{backgroundColor: note.background_color}">
    <span>{{ note.content }}</span>

    <div class="bottom">
      <span>{{ noteDate }}</span>

      <DestroyNote :note="note"/>
    </div>
  </Card>
</template>

<style scoped>
.bottom {
  display: flex;
  justify-content: space-between;
}
</style>
