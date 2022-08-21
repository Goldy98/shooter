<template>
  <div class="MainContainer flex flex-col h-screen p-4 bg-white">
    <div class="flex" v-for="i in areaDimension" :key="i">
      <div class="flex w-full">
        <Cell
          v-for="j in areaDimension"
          :coords="{ x: i, y: j }"
          :key="gameArea.findIndexByCoords({ x: i, y: j })"
          :abs-cell="gameArea.findCellByCoords({ x: i, y: j })"
          @kill-ennemy="onEnnemyKilled"
        />
      </div>
    </div>
    <!-- <div class="h-full grid grid-flow-row p-4">
      <div
        class="h-full bg-red-600"
        v-for="i in areaDimension"
        :key="i"
        :class="dynamicClasseRow"
      > -->
    <!-- {{ i }} -->
    <!-- <div class="grid h-full" :class="dynamicClasseCol">
          <div class="bg-yellow-500"></div> -->
    <!-- <Cell
            v-for="j in areaDimension"
            :coords="{ x: i, y: j }"
            :key="gameArea.findIndexByCoords({ x: i, y: j })"
            :abs-cell="gameArea.findCellByCoords({ x: i, y: j })"
            @kill-ennemy="onEnnemyKilled"
          /> -->
    <!-- </div>
      </div>
    </div> -->

    <div class="p-4 ScoreDisplayer">
      Score: {{ gameArea.score.ennemyKilled }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { AbstractGameArea, type Coords } from "@/helpers/game";
import { randomIntFromInterval } from "@/helpers/misc";
import { onMounted, reactive } from "vue";
import Cell from "../components/Cell.vue";

const gameArea = reactive(new AbstractGameArea(4));

const areaDimension = gameArea.areaDimension;

onMounted(() => {
  setInterval(() => {
    gameArea?.makeEnnemyAppear(randomIntFromInterval(0, gameArea.cells.length));
  }, 600);
});

function onEnnemyKilled() {
  gameArea.killEnnemy();
}
</script>

<style scoped lang="scss">
.MainContainer {
  background: url(../assets/bg.jpg) no-repeat;
  background-size: cover;
  cursor: url(../assets/scope.png), pointer;
}

.ScoreDisplayer {
  position: absolute;
  color: white;
  font-weight: bold;
  font-family: "Vermin", Helvetica, Arial;
}
</style>
