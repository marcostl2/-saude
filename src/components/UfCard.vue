<template>
  <v-card
    @click="dialog = !dialog"
    width="350"
    class="d-flex flex-column pa-5 align-self-center mb-5"
    id="card"
  >
    <v-card-title class="d-flex justify-center pt-0">
      <!-- <h3>{{ state.state }}</h3> -->
      <h3>ESTADO</h3>
    </v-card-title>
    <v-layout class="d-flex">
      <v-layout column>
        <!-- <v-flex>
          <v-select
            @change="handleState"
            :label="state.uf"
            v-model="uf"
            :items="states"
          ></v-select>
        </v-flex> -->
        <v-flex xs6 class="d-flex align-center uf-data">
          <h4>Número de Casos:</h4>
          <span>NUM</span>
          <!-- <span>{{ state.cases }}</span> -->
        </v-flex>
        <v-flex class="d-flex align-center uf-data">
          <h4>Número de mortes:</h4>
          <span>2222222</span>
          <!-- <span>{{ state.deaths }}</span> -->
        </v-flex>
      </v-layout>
      <v-flex xs4 class="d-flex justify-end ml-4">
        <v-img
          :style="[
            `filter:hue-rotate(${Math.floor(
              Math.random() * (360 - 0) + 0
            )}deg);`,
          ]"
          src="../assets/virus.svg"
          contain
          max-width="120"
        ></v-img>
      </v-flex>
    </v-layout>
    <v-dialog v-model="dialog" width="500" class="mt-3">
      <v-card class="pa-5">
        <v-card-title>
          Cidades
        </v-card-title>
        <v-expansion-panels accordion focusable>
          <v-expansion-panel v-for="(state, i) in states" :key="i">
            <v-expansion-panel-header>
              {{ state }}
            </v-expansion-panel-header>
            <v-expansion-panel-content class="py-6">
              <p class="mb-4">Acompanhe abaixo os casos da última semana</p>
              <Chart></Chart>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
import Chart from "./Chart";

export default {
  components: {
    Chart,
  },
  props: {
    states: Array,
  },
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.uf-data span {
  padding-left: 6px;
}
hr {
  margin: 10px 0;
}
#card:hover {
  filter: brightness(96%);
}
</style>
