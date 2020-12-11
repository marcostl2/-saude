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
        <div class="d-flex align-center">
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
      </v-flex>
      <v-flex xs12 sm8 class="d-flex justify-center">
        <BrazilMap @stateClicked="handleState($event)"></BrazilMap>
      </v-flex>
    </v-layout>
    <v-flex xs8 class="d-flex flex-column">
      <span>Selecione um país:</span>
      <v-select
        v-model="countryAux"
        label="Selecione um país"
        @change="handleSelect()"
        :items="countries"
      ></v-select>
      <span class="text-h6 text-center">Nome: {{ country.country }}</span>
      <span class="text-h6 text-center">Casos: {{ country.cases }}</span>
      <span class="text-h6 text-center">Mortes: {{ country.deaths }}</span>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from "axios";
import UfCard from "./UfCard";
// import Chart from "./Chart";
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
      country: {},
      countryAux: "",
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
    handleSelect() {
      console.log(this.countryAux);
      this.countriesFull.forEach((val) => {
        if (val.country == this.countryAux) {
          this.country = val;
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
      //dia
      console.log(date.getDate() < 10);
      if (date.getDate() < 10) {
        dateAux += `0${date.getDate() - 1}`;
        console.log(dateAux);
      } else {
        dateAux += date.getDate() - 1;
      }
      //mes
      if (date.getMonth() < 10) {
        dateAux += `0${date.getMonth() + 1}`;
      } else {
        dateAux += date.getMonth() + 1;
      }
      return dateAux;
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
      let aux = [];
      countries.data.forEach((val) => {
        aux.push(val.country);
      });
      this.countriesFull = countries.data;
      this.countries = aux;
      let now = new Date();
      now.setDate(now.getDate() - 1);
      let lastWeek = new Date(now - 7 * 24 * 60 * 60 * 1000);

      let date1 = this.handleDate(now);
      let date2 = this.handleDate(lastWeek);

      let date = [date1, date2];

      const rangeCases = await axios.post(
        `${process.env.VUE_APP_API_URL}/indexStatesData`,
        { date }
      );
      console.log(rangeCases);
      console.log(date1, date2);

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
