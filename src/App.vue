<template>
  <HelloWorld :msg="count" />
</template>
<script setup lang="ts">
import { emitter } from "./utils/tiny-m";
import HelloWorld from "./components/HelloWorld.vue";
import { ref } from "vue";
const count = ref(0);
const f = function () {
  console.log("add", [...arguments]);
  count.value++;
};
emitter.on("add", f);
emitter.off("add", f);
</script>
