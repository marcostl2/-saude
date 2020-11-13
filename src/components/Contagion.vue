<template>
  <v-layout column class="py-12 py-md-4">
    <v-flex>
      <h1 class="text-center">Contágio</h1>
    </v-flex>
    <v-flex>
      <p class="text-center">Veja abaixo os sintomas de COVID</p>
    </v-flex>
    <v-layout>
      <v-flex
        class="d-flex flex-column flex-md-row align-center justify-md-space-around flex-wrap"
      >
        <v-card
          class="d-flex mb-6 mb-md-0 flex-column align-center pt-3"
          max-width="300"
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
        <v-card
          class="mb-6 mb-md-0 d-flex flex-column align-center pt-3"
          max-width="300"
        >
          <v-img src="../assets/human-contacts.svg" contain width="200"></v-img>
          <v-card-title>
            Contato humano
          </v-card-title>
          <v-card-text>
            Use máscaras para se previnir contra qualquer contágio pelo ar
          </v-card-text>
        </v-card>
        <v-card
          class="mb-6 mb-md-0 d-flex flex-column align-center pt-3"
          max-width="300"
        >
          <v-img
            src="../assets/containted-objects.svg"
            contain
            width="200"
          ></v-img>
          <v-card-title>
            Objetos contaminados
          </v-card-title>
          <v-card-text>
            Use máscaras para se previnir contra qualquer contágio pelo ar
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<script>
export default {};
</script>

<style></style>
