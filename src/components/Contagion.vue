<template>
  <v-layout column align-center class="py-12 py-md-4" id="contagion">
    <v-flex>
      <h3 style="color:#FA5652">COVID-19</h3>
    </v-flex>
    <v-flex>
      <h1 class="text-center">Contágio</h1>
    </v-flex>
    <v-flex>
      <p class="text-center">
        Veja abaixo os principais meios de contágio de COVID
      </p>
    </v-flex>
    <v-layout row>
      <v-row class="d-flex justify-center">
        <v-col cols="8" md="4">
          <v-card
            class="d-flex flex-column align-center pa-2 justify-center"
            style="max-height:320px;text-align:center"
          >
            <v-img
              src="../assets/air-transmission.svg"
              contain
              width="200"
            ></v-img>
            <v-card-title>
              Transmissão pelo ar
            </v-card-title>
            <v-card-text>
              Use máscaras para se previnir contra qualquer contágio pelo ar
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="8" md="4">
          <v-card
            class="d-flex flex-column align-center pa-2 justify-center"
            style="max-height:320px"
          >
            <v-img
              src="../assets/human-contacts.svg"
              contain
              width="200"
            ></v-img>
            <v-card-title>
              Contato humano
            </v-card-title>
            <v-card-text>
              Use máscaras para se previnir contra qualquer contágio pelo ar
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="8" md="4">
          <v-card
            class="d-flex flex-column align-center pa-3 justify-center"
            style="max-height:320px;text-align: center;height:100%"
          >
            <v-img
              src="../assets/containted-objects.svg"
              contain
              width="200"
            ></v-img>
            <p style="font-weight:500;font-size:1.25rem" class="my-2">
              Objetos contaminados
            </p>
            <v-card-text>
              Use máscaras para se previnir contra qualquer contágio pelo ar
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-layout>
  </v-layout>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.v-card__text {
  padding: 0;
  text-align: center;
}
</style>
