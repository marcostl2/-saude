<template>
  <div>
    <v-layout>
      <v-flex>
        <v-img src="../assets/logo.svg" contain max-width="140"></v-img>
      </v-flex>
      <v-flex class="d-flex justify-end align-center">
        <v-btn text>Home</v-btn>
        <v-btn text>Contágio</v-btn>
        <v-btn text>Sintomas</v-btn>
        <v-btn text>Prevenção</v-btn>
        <v-btn outlined color="red" rounded class="px-6">Contato</v-btn>
      </v-flex>
    </v-layout>
    <v-layout class="mt-16">
      <v-flex xs6 class="d-flex flex-column justify-end">
        <h3 style="color:#FA5652">Alerta COVID-19</h3>
        <h1 class="green--text">
          Fique em casa. Proteja-se do coronavirus
        </h1>
        <p>
          Ainda não há uma cura definitiva para o coronavirus
        </p>
        <v-btn
          class="white--text"
          color="red"
          width="250"
          x-large
          style="border-radius: 20px"
        >
          Ajudar
        </v-btn>
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
