<script setup></script>

<template>
  <div class="card">
    <div class="card-content">
      <slot name="header"></slot>
    </div>

    <div class="card-middle">
      <slot name="middle"></slot>
    </div>

    <div class="card-bottom">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.card {
  padding: 1em;
  border-radius: 15px;
  box-shadow: 15px 15px 30px #bebebe, -15px -15px 30px #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-content {
  font-family: 'Helvetica';
  text-transform: capitalize;
}

.card-middle {
  margin: 0 auto;
}

.card-bottom {
  display: flex;
  justify-content: space-between;
}
</style>
