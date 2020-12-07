<template>
  <div>
    <div style="position:fixed;width:100vw;max-width:900px;top:0;z-index:100">
      <div
        v-if="this.$vuetify.breakpoint.mdAndUp"
        style="background:white"
        class="d-flex align-center justify-space-between pr-4 py-3"
      >
        <v-img src="../assets/logo.svg" contain max-width="140"></v-img>
        <div>
          <v-btn href="#home" text>Home</v-btn>
          <v-btn href="#contagion" text>Contágio</v-btn>
          <v-btn text href="#symptomps">Sintomas</v-btn>
          <v-btn text href="#prevention">Prevenção</v-btn>
          <v-btn outlined color="red" rounded class="px-6">Contato</v-btn>
        </div>
      </div>
      <div
        v-else
        style="background:white"
        class="d-flex align-center justify-space-between pr-4 py-3"
      >
        <v-img src="../assets/logo.svg" contain max-width="140"></v-img>
        <v-btn icon>
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </div>
    </div>

    <v-layout class="mt-16" id="home">
      <v-flex xs6 class="d-flex flex-column justify-end">
        <h2 style="color:#FA5652">Alerta COVID-19</h2>
        <h1 class="green--text text-h4 font-weight-bold">
          Fique em casa. Proteja-se do coronavirus
        </h1>
        <p class="mt-6">
          Ainda não há uma cura definitiva para o coronavirus
        </p>
      </v-flex>
      <v-flex xs6>
        <v-img
          src="../assets/illustration-header.svg"
          contain
          max-width="100%"
        ></v-img>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.buttons > * {
  margin-right: 20px;
}

#nav {
  justify-content: flex-end !important;
  align-items: center;
}
</style>
