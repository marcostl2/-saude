<template>
  <v-layout class="my-16 d-flex flex-column flex-sm-row" id="home">
    <v-flex xs12 class="d-flex flex-column justify-end">
      <h2 style="color:#FA5652">Alerta COVID-19</h2>
      <h1 class="green--text text-h5 text-sm-h4 font-weight-bold">
        Fique em casa. Proteja-se do coronavirus
      </h1>
      <p class="mt-6">
        Ainda não há uma cura definitiva para o coronavirus
      </p>
    </v-flex>
    <v-flex xs12>
      <v-img
        src="../assets/illustration-header.svg"
        contain
        max-width="450"
      ></v-img>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
