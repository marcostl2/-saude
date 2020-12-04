<template>
  <v-layout column class="mt-16">
    <v-flex class="d-flex align-center mb-5 flex-column">
      <h1>Infecções</h1>
      <p>Acompanhe abaixo os dados de infecção nos estados brasileiros</p>
    </v-flex>

    <v-layout row class="mt-4 d-flex flex-wrap justify-center">
      <v-flex
        xs12
        md4
        class="d-flex justify-center"
        v-for="(state, i) in states.slice(0, statesCount)"
        :key="i"
      >
        <UfCard :states="states"></UfCard>
      </v-flex>
      <v-flex class="d-flex justify-center mt-4">
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
  </v-layout>
</template>

<script>
// import axios from "axios";
import UfCard from "./UfCard";
import Chart from "./Chart";

export default {
  components: {
    UfCard,
    Chart,
  },
  data() {
    return {
      data: [],
      states: [
        "Acre",
        "Alagoas",
        "Amapá",
        "Amazonas",
        "Bahia",
        "Ceará",
        "Distrito Federal",
        "Espírito Santo",
        "Goiás",
        "Maranhão",
        "Mato Grosso",
        "Mato Grosso do Sul",
        "Minas Gerais",
        "Paraná",
        "Paraíba",
        "Pará",
        "Pernambuco",
        "Piauí",
        "Rio Grande do Norte",
        "Rio Grande do Sul",
        "Rio de Janeiro",
        "Rondônia",
        "Roraima",
        "Santa Catarina",
        "Sergipe",
        "São Paulo",
        "Tocantins",
      ],
      uf: "MS",
      state: {},
      statesCount: 3,

      statePickerOne: ["MS"],
      cityStateOne: "",
      citiesOne: [],

      statePickerOneCity: {},
      statePickerTwo: "MS",
      statePickerTwoCity: "MS",
    };
  },
  methods: {
    handleStates() {
      if (this.statesCount >= this.states.length) {
        this.statesCount = 3;
        document.querySelector("#states-arrow").style.transform =
          "rotate(0deg)";
        return;
      }
      this.statesCount = this.statesCount + 3;
      if (this.statesCount >= this.states.length) {
        document.querySelector("#states-arrow").style.transform =
          "rotate(180deg)";
      }
    },
  },
  async created() {
    try {
      // const response = await axios.get(
      //   "https://covid19-brazil-api.now.sh/api/report/v1"
      // );
      // const token = "d321ff0c866820094cd4cc96d8bdeba278301fe9";
      // const datasetSlug = "covid19";
      // const tableName = "caso_full";
      // const filters = { state: "PR", is_last: "True" };
      // busca de um estado
      // const url = `https://api.brasil.io/v1/dataset/${datasetSlug}/${tableName}/data?state=${filters.state}&is_last=${filters.is_last}`;
      // const url = `https://api.brasil.io/v1/dataset/${datasetSlug}/${tableName}/data?state=${this.uf}&is_last=True`;
      // const url = `https://brasil.io/dataset/${datasetSlug}/caso_full`;
      // const response = await axios.get(
      //   "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
      // );
      // const responseCity = await axios.get(url, {
      //   headers: {
      //     Authorization: `Token ${token}`,
      //     "Access-Control-Allow-Origin": "*",
      //   },
      // });
      // this.data = response.data.data;
      // this.data.forEach((data) => {
      //   this.states.push(data.state);
      //   // this.states.push({ state: data.state, uf: data.uf });
      //   if (data.uf == "MS") this.state = data;
      // });
      // this.states.sort((a, b) => {
      //   return a > b ? 1 : b > a ? -1 : 0;
      // });
      // let aux = [];
      // responseCity.data.results.forEach((val) => {
      //   if (val.city != null) aux.push({ city: val.city });
      // });
      // this.citiesOne = aux;
      // this.cityStateOne = this.citiesOne[0].city;
      // this.statePickerOneCity = aux;
      // console.log(responseCity.data.results);
    } catch (err) {
      console.log(err);
    }
  },
};
</script>

<style lang="scss" scoped>
#states-arrow {
  transition: 0.5s;
}
</style>
