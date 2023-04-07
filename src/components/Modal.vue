<script setup>
const props = defineProps({
  show: Boolean
})

const emit = defineEmits(['close'])

const closeModal = () => {
  emit('close')
}
</script>

<template>
  <div class="overlay" v-if="show">
    <div class="modal">
      <div class="modal-header">
        <slot name="icon"></slot>

        <h2>
          <slot name="title"></slot>
        </h2>

        <div class="icon" @click="closeModal">
          <v-icon name="io-close-circle-sharp" scale="1.3"></v-icon>
        </div>
      </div>

      <hr />

      <div class="modal-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.77);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  width: 500px;
  background-color: white;
  border-radius: 10px;
  padding: 1em;
  position: relative;
}

.modal-header {
  display: flex;
  justify-content: space-between;
}

.modal-header h2 {
  font-size: 2em;
}

.modal-header .icon {
  cursor: pointer;
}
</style>
