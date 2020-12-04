<template>
  <div class="d-flex justify-center">
    <v-stepper non-linear>
      <v-stepper-header>
        <v-stepper-step
          style="width:50%"
          class="d-flex justify-center"
          editable
          color="#FA5652"
          step="1"
        >
          Linha
        </v-stepper-step>
        <v-stepper-step
          style="width:50%"
          class="d-flex justify-center"
          color="#FA5652"
          editable
          step="2"
        >
          <span>
            Barra
          </span>
        </v-stepper-step>
      </v-stepper-header>
      <v-stepper-items>
        <v-stepper-content step="1">
          <apexchart
            width="300"
            type="line"
            :options="options"
            :series="series"
          ></apexchart>
        </v-stepper-content>
        <v-stepper-content step="2">
          <apexchart
            width="300"
            type="bar"
            :options="options"
            :series="series"
          ></apexchart>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      options: {
        colors: ["#FA5652"],
        chart: {
          id: "vuechart-example",
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
      },
      series: [
        {
          name: "Casos de COVID-19",
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
      ],
    };
  },
  async beforeMount() {
    const token = "d321ff0c866820094cd4cc96d8bdeba278301fe9";

    const datasetSlug = "covid19";
    const tableName = "caso_full";

    // const filters = { state: "PR", is_last: "True" };

    // busca de um estado
    // const url = `https://api.brasil.io/v1/dataset/${datasetSlug}/${tableName}/data?state=${filters.state}&is_last=${filters.is_last}`;
    const url = `https://api.brasil.io/v1/dataset/${datasetSlug}/${tableName}/data?state=${this.uf}&is_last=True`;
    const responseCity = await axios.get(url, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    responseCity.filter((val) => val.city != null);
    console.log(responseCity);
  },
};
</script>

<style lang="scss" scoped>
.v-stepper__step__step {
  display: none !important;
}

@media only screen and (max-width: 959px) {
  /*.v-stepper:not(.v-stepper--vertical) .v-stepper__label {
    display: block !important;
  }*/
}
</style>
