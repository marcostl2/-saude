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
    <!-- <v-layout column class="mt-10" justify-center>
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
    </v-layout> -->
    <!-- <v-flex>
      <radio-svg-map
        v-model="location"
        @click="teste($event)"
        style="max-width:400px"
        :map="custom"
      />
    </v-flex> -->
    <v-layout class="my-16 d-flex flex-column-reverse flex-sm-row">
      <v-flex
        xs12
        sm4
        class="d-flex justify-start justify-sm-center pl-10 flex-column"
        style="font-size:20px"
      >
        <span id="state"> Estado: {{ mapSelectedState.state }} </span>
        <span id="cases"> Casos: {{ mapSelectedState.cases }} </span>
        <span id="deaths"> Mortes: {{ mapSelectedState.deaths }} </span>
      </v-flex>
      <v-flex xs12 sm8 class="d-flex justify-center">
        <BrazilMap @stateClicked="handleState($event)"></BrazilMap>
      </v-flex>
    </v-layout>
    <v-flex xs8>
      <span>Selecione um país para comparar:</span>
      <v-select :items="countries" name="state" item-text="country"></v-select>
    </v-flex>
    <Chart></Chart>
    <StatesChart v-if="states" :states="states"></StatesChart>
  </v-layout>
</template>

<script>
import axios from "axios";
import UfCard from "./UfCard";
import Chart from "./Chart";
import BrazilMap from "./BrazilMap";
import StatesChart from "./StatesChart";
// import { RadioSvgMap } from "vue-svg-map";
// import Brazil from "@svg-maps/brazil";

export default {
  components: {
    UfCard,
    Chart,
    BrazilMap,
    StatesChart,
  },
  data() {
    return {
      data: [],
      states: [],
      location: null,
      statesCount: 4,
      countries: [],
      mapSelectedState: {},
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
    handleState(e) {
      this.mapSelectedState = this.states.find((el) => el.state == e);
    },
  },
  async created() {
    try {
      const response = await axios.get(
        `${process.env.VUE_APP_API_URL}/indexStates`
      );
      this.states = response.data.sort((a, b) => {
        return a.state < b.state ? -1 : a.state > b.state ? 1 : 0;
      });
      const countries = await axios.get(
        `${process.env.VUE_APP_API_URL}/contries`
      );
      this.countries = countries.data;
      let now = new Date();
      let lastWeek = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
      console.log(now);

      let nowMonth =
        now.getMonth() < 10 ? "0" + now.getMonth() : now.getMonth();
      let nowDay = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
      let nowYear = now.getFullYear();

      let Month =
        lastWeek.getMonth() < 10
          ? "0" + lastWeek.getMonth()
          : lastWeek.getMonth();
      let Day =
        lastWeek.getDate() < 10 ? "0" + lastWeek.getDate() : lastWeek.getDate();
      let Year = lastWeek.getFullYear();
      let date = [`${nowYear}${nowDay}${nowMonth}`, `${Year}${Day}${Month}`];
      console.log(date);
      console.log(Month);
      // const rangeCases = await axios.post(
      //   `${process.env.VUE_APP_API_URL}/indexStatesData`,
      //   { date }
      // );
      // console.log(rangeCases);

      //pinta os svgs
      for (let i of this.states) {
        let parentState = document.getElementsByName(`${i.state}`)[0];
        let roundedState = parentState.children[1];
        if (i.cases > 600000) {
          if (roundedState.className.baseVal == "circle") {
            parentState.firstElementChild.style.fill = this.$vuetify.theme.themes.light.heat_color_1;
            roundedState.style.fill = this.$vuetify.theme.themes.light.heat_color_1;
          } else {
            parentState.firstElementChild.style.fill = this.$vuetify.theme.themes.light.heat_color_1;
          }
        } else if (i.cases > 250000 && i.cases < 600000) {
          if (roundedState.className.baseVal == "circle") {
            parentState.firstElementChild.style.fill = this.$vuetify.theme.themes.light.heat_color_2;
            roundedState.style.fill = this.$vuetify.theme.themes.light.heat_color_2;
          } else {
            parentState.firstElementChild.style.fill = this.$vuetify.theme.themes.light.heat_color_2;
          }
        } else {
          if (roundedState.className.baseVal == "circle") {
            parentState.firstElementChild.style.fill = this.$vuetify.theme.themes.light.heat_color_3;
            roundedState.style.fill = this.$vuetify.theme.themes.light.heat_color_3;
          } else {
            parentState.firstElementChild.style.fill = this.$vuetify.theme.themes.light.heat_color_3;
          }
        }
      }
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
