<template>
  <v-layout column class="mt-16">
    <v-flex class="d-flex align-center mb-5 flex-column">
      <h3 style="color:#FA5652">COVID-19</h3>
      <h1>Infecções</h1>
      <p>Acompanhe abaixo os dados de infecção nos estados brasileiros</p>
    </v-flex>

    <v-layout row class="mt-4 d-flex flex-wrap justify-center">
      <v-flex
        xs12
        md6
        class="d-flex justify-center"
        v-for="(state, i) in states.slice(0, statesCount)"
        :key="i"
      >
        <UfCard :state="state"></UfCard>
      </v-flex>
      <v-flex xs12 class="d-flex justify-center mt-4">
        <v-icon @click="handleStates" id="states-arrow" large
          >mdi-chevron-down</v-icon
        >
      </v-flex>
    </v-layout>
    <v-layout column class="mt-10" justify-center>
      <v-layout class="my-12">
        <v-flex xs12 md6>
          <Chart></Chart>
        </v-flex>
        <v-flex xs12 md6>
          <Chart></Chart>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex md6 class="d-flex flex-column pr-5">
          <p>Cidade 1</p>
          <v-select :items="states"> </v-select>
          <v-select :items="states"> </v-select>
          <v-btn color="red" class="white--text mb-4">Buscar</v-btn>
          <p>Casos</p>
          <p>Numero de casos:</p>
          <p>NUmero de mortes</p>
        </v-flex>
        <v-flex md6 class="d-flex flex-column">
          <p>Cidade 1</p>
          <v-select :items="states"> </v-select>
          <v-select :items="states"> </v-select>
          <v-btn color="red" class="white--text mb-4">Buscar</v-btn>
          <p>Casos</p>
          <p>Numero de casos:</p>
          <p>NUmero de mortes</p>
        </v-flex>
      </v-layout>
    </v-layout>
    <v-flex>
      <radio-svg-map
        v-model="location"
        @click="teste($event)"
        style="max-width:400px"
        :map="custom"
      />
    </v-flex>
  </v-layout>
</template>

<script>
import axios from "axios";
import UfCard from "./UfCard";
import Chart from "./Chart";
import { RadioSvgMap } from "vue-svg-map";
import Brazil from "@svg-maps/brazil";

export default {
  components: {
    UfCard,
    Chart,
    RadioSvgMap,
  },
  data() {
    return {
      Brazil,
      data: [],
      states: [],
      location: null,
      statesCount: 4,
      custom: {
        ...Brazil,
        label: "Teste",
      },
    };
  },
  methods: {
    handleStates() {
      if (this.statesCount >= this.states.length) {
        this.statesCount = 4;
        document.querySelector("#states-arrow").style.transform =
          "rotate(0deg)";
        return;
      }
      this.statesCount = this.statesCount + 4;
      if (this.statesCount >= this.states.length) {
        document.querySelector("#states-arrow").style.transform =
          "rotate(180deg)";
      }
    },
    teste(e) {
      // console.log(this.location);
      console.log(e.target);
      // e.target.innerHTML += '<text x="0" y="35" font-size="12">MENU</text>';
      // document.querySelector()
    },
  },
  async created() {
    try {
      const response = await axios.get(
        "https://covid19-brazil-api.now.sh/api/report/v1"
      );
      this.states = response.data.data.sort((a, b) => {
        return a.state < b.state ? -1 : a.state > b.state ? 1 : 0;
      });
    } catch (err) {
      console.log(err);
    }
  },
};
</script>

<style src="vue-svg-map/dist/index.css"></style>
<style lang="scss" scoped>
#states-arrow {
  transition: 0.5s;
}
</style>
