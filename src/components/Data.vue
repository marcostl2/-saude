<template>
  <v-layout class="mt-4" column>
    <v-flex>
      <v-select
        @change="handleState"
        :label="state.uf"
        v-model="uf"
        :items="states"
      ></v-select>
    </v-flex>
    <v-flex>
      <h2>Estado: {{ state.state }}</h2>
    </v-flex>
    <v-flex>
      <h2>Número de Casos: {{ state.cases }}</h2>
    </v-flex>
    <v-flex>
      <h2>Número de mortes: {{ state.deaths }}</h2>
    </v-flex>
    <v-flex>
      <v-img :src="state.flag" width="200"></v-img>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from "axios";

export default {
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
          this.state.flag = this.getUFFlag(i.state);
        }
      }
    },
    getUFFlag(stateName) {
      stateName = stateName.toLowerCase().replace(/[ ]/g, "-");
      console.log(stateName);
      return `https://www.estadosecapitaisdobrasil.com/wp-content/uploads/2014/09/bandeira-${stateName}-300x210.png?x65722`;
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
      this.state.flag = this.getUFFlag(this.state.state);
    } catch (err) {
      console.log(err);
    }
  },
};
</script>

<style></style>
