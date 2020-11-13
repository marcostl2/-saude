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
        v-for="(state, i) in data"
        :key="i"
      >
        <UfCard :state="state"></UfCard>
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<script>
import axios from "axios";
import UfCard from "./UfCard";

export default {
  components: {
    UfCard,
  },
  data() {
    return {
      data: [],
      states: [],
      uf: "",
      state: {},
    };
  },
  methods: {
    handleState() {
      for (let i of this.data) {
        if (i.uf == this.uf) {
          this.state = i;
        }
      }
    },
  },
  async created() {
    try {
      const response = await axios.get(
        "https://covid19-brazil-api.now.sh/api/report/v1"
      );
      this.data = response.data.data;
      this.data.forEach((data) => {
        this.states.push(data.uf);
        if (data.uf == "MS") this.state = data;
      });
    } catch (err) {
      console.log(err);
    }
  },
};
</script>
