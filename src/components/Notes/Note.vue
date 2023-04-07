<script setup>
import { computed } from '@vue/reactivity';
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

      <span class="icon">
        <v-icon name="md-delete" fill="#800080" :hover="true" animation="pulse"/>
      </span>
    </div>
  </Card>
</template>

<style scoped>
.bottom {
  display: flex;
  justify-content: space-between;
}

.bottom .icon {
  cursor: pointer;
}
</style>
