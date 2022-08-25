<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="click">change msg</button>
  </div>
</template>
<script setup lang="ts">
import { emitter } from "../utils/tiny-m";

defineProps<{ msg: number }>();
console.log("e", emitter);
const click = function () {
  emitter.emit("add", 1, 2);
};
</script>
