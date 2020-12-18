<template>
  <v-layout column class="mt-16" id="infecctions">
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
        <UfCard
          :chartOpt="chartOpt"
          :seriesData="seriesData"
          v-show="rangesIsValid"
          :ranges="ranges"
          :state="state"
        ></UfCard>
      </v-flex>
      <v-flex xs12 class="d-flex justify-center mt-4">
        <v-icon @click="handleStates" id="states-arrow" large
          >mdi-chevron-down</v-icon
        >
      </v-flex>
    </v-layout>
    <v-layout class="my-16 d-flex flex-column-reverse flex-sm-row">
      <v-flex
        xs12
        sm5
        class="d-flex justify-start justify-sm-center flex-column"
        style="font-size:20px"
      >
        <span class="text-subtitle-1 text-md-h5">
          Clique no mapa e confira os dados do estado clicado
        </span>
        <div class="d-flex align-center mt-6">
          <v-img max-width="20" src="../assets/brazil.svg" contain></v-img>
          <span class="pl-2" id="state">
            Estado: {{ mapSelectedState.state }}
          </span>
        </div>
        <div class="d-flex align-center">
          <v-img max-width="20" src="../assets/coronavirus.svg" contain></v-img>
          <span class="pl-2" id="cases">
            Casos: {{ mapSelectedState.cases }}
          </span>
        </div>
        <div class="d-flex align-center">
          <v-img max-width="20" src="../assets/skull.svg" contain></v-img>
          <span class="pl-2" id="deaths">
            Mortes: {{ mapSelectedState.deaths }}
          </span>
        </div>
        <div class="d-flex flex-column mt-16">
          <div class="d-flex align-center">
            <div class="color_1"></div>
            <span>Mais de 600000 casos</span>
          </div>
          <div class="d-flex align-center">
            <div class="color_2"></div>
            <span>Entre 250000 e 600000 casos</span>
          </div>
          <div class="d-flex align-center">
            <div class="color_3"></div>
            <span>Menos de 250000 casos</span>
          </div>
        </div>
      </v-flex>
      <v-flex xs12 sm7 class="d-flex justify-center">
        <BrazilMap @stateClicked="handleState($event)"></BrazilMap>
      </v-flex>
    </v-layout>
    <v-layout class="d-flex flex-column">
      <v-flex xs12 class="text-center">
        <span>Confira abaixo a população de alguns países</span>
      </v-flex>
    </v-layout>
    <v-layout class="d-flex flex-column flex-md-row">
      <v-flex xs12 md6 class="d-flex flex-column pr-2">
        <v-select
          v-model="countryAux"
          label="Selecione um país"
          @change="handleSelect(countryAux, 1)"
          :items="countries"
        ></v-select>
        <span class="text-h6">Nome: {{ country.country }}</span>
        <span class="text-h6">Casos: {{ country.cases }}</span>
        <span class="text-h6">Mortes: {{ country.deaths }}</span>
      </v-flex>
      <v-flex xs12 md6 class="d-flex flex-column pl-2 mt-12 mt-sm-0">
        <v-select
          v-model="countryAux2"
          label="Selecione um país"
          @change="handleSelect(countryAux2, 2)"
          :items="countries"
        ></v-select>
        <span class="text-h6">Nome: {{ country2.country }}</span>
        <span class="text-h6">Casos: {{ country2.cases }}</span>
        <span class="text-h6">Mortes: {{ country2.deaths }}</span>
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<script>
import axios from "axios";
import UfCard from "./UfCard";
// import Vue from "vue";
import BrazilMap from "./BrazilMap";
// import StatesChart from "./StatesChart";

export default {
  components: {
    UfCard,
    // Chart,
    BrazilMap,
    // StatesChart,
  },
  data() {
    return {
      seriesData: [],
      chartOpt: [],
      rangesIsValid: false,
      ranges: [],
      country: {},
      country2: {},
      countryAux: "",
      countryAux2: "",
      data: [],
      states: [],
      location: null,
      statesCount: 4,
      countries: [],
      countriesFull: [],
      mapSelectedState: {},
    };
  },
  methods: {
    handleSelect(country, countryAux) {
      this.countriesFull.forEach((val) => {
        if (val.country == country) {
          if (countryAux == 2) this.country2 = val;
          else this.country = val;
        }
      });
    },
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
    handleDate(date) {
      let dateAux = "";
      dateAux += date.getFullYear();
      //mes
      if (date.getMonth() < 10) {
        dateAux += `0${date.getMonth() + 1}`;
      } else {
        dateAux += date.getMonth() + 1;
      }
      //dia
      if (date.getDate() < 10) {
        dateAux += `0${date.getDate() - 1}`;
      } else {
        dateAux += date.getDate() - 1;
      }
      return dateAux;
    },
  },
  async created() {
    try {
      let now = new Date();
      now.setDate(now.getDate() - 1);
      let lastWeek = new Date(now - 7 * 24 * 60 * 60 * 1000);
      let lastWeek2 = new Date(now - 14 * 24 * 60 * 60 * 1000);
      let date1 = this.handleDate(now);
      let date2 = this.handleDate(lastWeek);
      let date3 = this.handleDate(lastWeek2);

      let date = [date3, date2, date1];

      let val = await axios.post(
        `${process.env.VUE_APP_API_URL}/indexStatesData`,
        { date },
        { timeout: 60000 }
      );
      this.ranges = val.data[0] && val.data[1] && val.data[2] ? val.data : [];

      let r1 = this.ranges[0].find((val) => val.state == this.state.state);
      let r2 = this.ranges[1].find((val) => val.state == this.state.state);
      let r3 = this.ranges[2].find((val) => val.state == this.state.state);
      this.seriesData = [r1[0].cases, r2[0].cases, r3[0].cases];
      this.chartOpt = [
        r1[0].datetime.toString().split("T")[0],
        r2[0].datetime.toString().split("T")[0],
        r3[0].datetime.toString().split("T")[0],
      ];

      //busca os estados
      const response = await axios.get(
        `${process.env.VUE_APP_API_URL}/indexStates`
      );
      //ordena os estados por ordem alfabetica
      this.states = response.data.sort((a, b) => {
        return a.state < b.state ? -1 : a.state > b.state ? 1 : 0;
      });
      //busca os paises
      const countries = await axios.get(
        `${process.env.VUE_APP_API_URL}/contries`
      );
      let aux = [];
      //filtra o nome dos países
      countries.data.forEach((val) => {
        aux.push(val.country);
      });
      this.countriesFull = countries.data;
      this.countries = aux;

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

      document.querySelector(
        ".color_1"
      ).style.background = this.$vuetify.theme.themes.light.heat_color_1;
      document.querySelector(
        ".color_2"
      ).style.background = this.$vuetify.theme.themes.light.heat_color_2;
      document.querySelector(
        ".color_3"
      ).style.background = this.$vuetify.theme.themes.light.heat_color_3;
    } catch (err) {
      console.log(err);
    }
  },
  mounted() {
    console.log(this.ranges);
  },
  beforeUpdate() {
    this.rangesIsValid = !this.rangesIsValid;
  },
};
</script>

<style src="vue-svg-map/dist/index.css"></style>
<style lang="scss" scoped>
#states-arrow {
  transition: 0.5s;
}
.color_1,
.color_2,
.color_3 {
  content: "";
  display: block;
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
</style>
