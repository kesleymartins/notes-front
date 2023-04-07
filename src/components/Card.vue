<script setup></script>

<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  height: 200px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 15px;
  box-shadow: 15px 15px 30px #bebebe, -15px -15px 30px #ffffff;
}
</style>
