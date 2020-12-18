<template>
  <v-card
    style="overflow:scroll"
    class="pa-2 pa-md-5 d-flex flex-column align-center"
  >
    <v-card-title>
      {{ state.state }}
    </v-card-title>
    <v-layout v-show="series[0].data.length > 0" fill-height style="width:100%">
      <v-flex xs12 class="d-flex justify-center">
        <apexchart
          id="chart"
          :width="getChartWidth"
          type="line"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      //   chartOpt: [],
      //   seriesData: [],
      data: [],
      series: [
        {
          name: "Nº de casos",
          data: [],
        },
      ],
      chartOptions: {
        colors: ["#FA5652"],
        chart: {
          height: 350,
          type: "line",
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
        },
        title: {
          text: "Casos de Covid-19",
          align: "center",
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: [],
        },
      },
    };
  },
  props: {
    state: Object,
    chartOpt: Array,
    seriesData: Array,
  },
  computed: {
    getChartWidth() {
      return this.$vuetify.breakpoint.smAndUp ? 500 : 320;
    },
  },
  updated() {
    this.chartOptions.xaxis.categories = this.chartOpt;
    this.series[0].data = this.seriesData;
  },
};
</script>

<style lang="scss" scoped></style>
