<template>
  <div class="w-full h-full flex justify-center items-center m-1">
    <img
      src="@/assets/ennemy.gif"
      @click="$emit('killEnnemy', absCell.coords)"
      :class="{
        invisible: !absCell.containEnnemy,
        visible: absCell.containEnnemy,
      }"
    />
  </div>
</template>

<script setup lang="ts">
import type { AbstractCell, Coords } from "@/helpers/game";
import { watch } from "vue";

export interface Props {
  absCell: AbstractCell;
}

const props = withDefaults(defineProps<Props>(), {});

const emit = defineEmits<{
  (e: "killEnnemy", coords: Coords): void;
}>();

watch(
  () => props.absCell,
  (val) => {
    console.log("++++++++++++val:", val);
  }
);
</script>

<style scoped></style>
