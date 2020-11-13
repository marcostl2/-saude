<template>
  <v-card width="350" class="d-flex flex-column pa-5 align-self-center mb-5">
    <v-card-title class="d-flex justify-center pt-0">
      <h3>{{ state.state }}</h3>
    </v-card-title>
    <div class="d-flex">
      <v-layout column>
        <!-- <v-flex>
        <v-select
          @change="handleState"
          :label="state.uf"
          v-model="uf"
          :items="states"
        ></v-select>
      </v-flex> -->
        <v-flex class="d-flex align-center uf-data">
          <h4>Número de Casos:</h4>
          <span>{{ state.cases }}</span>
        </v-flex>
        <v-flex class="d-flex align-center uf-data">
          <h4>Número de mortes:</h4>
          <span>{{ state.deaths }}</span>
        </v-flex>
      </v-layout>
      <v-flex xs4 class="d-flex justify-end">
        <v-img
          :style="[
            `filter:hue-rotate(${Math.floor(
              Math.random() * (360 - 0) + 0
            )}deg);`,
          ]"
          src="../assets/virus.svg"
          contain
          max-width="100"
        ></v-img>
      </v-flex>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    state: Object,
  },
};
</script>

<style lang="scss" scoped>
.uf-data span {
  padding-left: 6px;
}
</style>
