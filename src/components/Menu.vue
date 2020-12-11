<template>
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
        <v-btn outlined color="red" href="#infecctions" rounded class="px-6"
          >Infecções</v-btn
        >
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
</template>

<script>
export default {};
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
