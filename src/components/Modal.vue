<script setup>
const props = defineProps({
  show: Boolean
})

const emit = defineEmits(['close'])

const onClose = () => {
  emit('close')
}
</script>

<template>
  <div class="overlay" v-if="show">
    <div class="modal">
      <slot></slot>

      <div class="buttons">
        <span class="button close" @click="onClose">Close</span>
        <slot name="action"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>

.overlay {
  position: absolute;
  width: 100vw;
  height: 100vh;
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
  display: flex;
  flex-direction: column;
}

.modal .buttons {
  display: flex;
  margin: 1em 0 0 0;
}

.modal .button {
  width: 100%;
  padding: 1em;
  border: none;
  text-align: center;
  margin: 0 1px;
}

.button.add {
  background-color: lightskyblue;
}

.button.close {
  background-color: lightcoral;
}

.button:hover {
  color: white;
  cursor: pointer;
}

.button.add:hover {
  background-color: rgb(85, 171, 224);
}

.button.close:hover {
  background-color: rgb(245, 98, 98);
}
</style>
