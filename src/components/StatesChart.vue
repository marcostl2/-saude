<template>
  <v-layout>
    <v-flex>
      <apexchart
        type="bar"
        height="350"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    states: { type: Array, required: true },
  },
  data() {
    return {
      series: [
        {
          data: [],
        },
      ],
      chartOptions: {
        chart: {
          height: "100%",
          type: "bar",
          //   events: {
          //     // click: function(chart, w, e) {
          //     //   // console.log(chart, w, e)
          //     // },
          //   },
        },
        colors: [
          "#5f2464",
          "#c6aaf5",
          "#4c3791",
          "#258c8f",
          "#f2cc90",
          "#f0698b",
          "#5ee6aa",
          "#868dc1",
          "#bb65c6",
          "#84e00",
          "#77f309",
          "#8eec13",
          "#ffdae5",
          "#47cc66",
          "#49b865",
          "#845732",
          "#cb260f",
          "#bad8f5",
          "#fd839e",
          "#805391",
          "#f6f28e",
          "#1c5ee",
          "#6fff4a",
          "#a88c96",
          "#cb17f1",
          "#1fbcf8",
          "#8bf132",
        ],
        plotOptions: {
          bar: {
            columnWidth: "30",
            distributed: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        xaxis: {
          categories: [],
          labels: {
            style: {
              colors: [
                "#5f2464",
                "#c6aaf5",
                "#4c3791",
                "#258c8f",
                "#f2cc90",
                "#f0698b",
                "#5ee6aa",
                "#868dc1",
                "#bb65c6",
                "#84e00",
                "#77f309",
                "#8eec13",
                "#ffdae5",
                "#47cc66",
                "#49b865",
                "#845732",
                "#cb260f",
                "#bad8f5",
                "#fd839e",
                "#805391",
                "#f6f28e",
                "#1c5ee",
                "#6fff4a",
                "#a88c96",
                "#cb17f1",
                "#1fbcf8",
                "#8bf132",
              ],
              fontSize: "12px",
            },
          },
        },
      },
    };
  },
  created() {
    try {
      // let auxCases = [];
      let x = [],
        y = [];
      this.states.forEach((st) => {
        x.push(st.state);
        y.push(st.cases);
      });
      let uu = [];
      while (x.length > 0) {
        uu.push([x.shift()]);
      }
      console.log(y);
      this.chartOptions.xaxis.categories = uu;
      this.series[0].data = y;
    } catch (err) {
      console.log(err);
    }
    //   auxColo    rs = [];
    //   auxCases = [];
    // // auxArray = [];
    // for (let i = 0; i < 27; i++) {
    //   let color = Math.floor(Math.random() * 16777215).toString(16);
    //   auxColors.push("#" + color);
    // }
    // console.log(auxColors);
    // this.chartOptions.colors = auxColors;
    // this.chartOptions.xaxis.labels.style.colors = auxColors;
    // let a = [];
    // console.log(this.states);
    // let statesNames = [];
    // for (let i of this.states) {
    //   statesNames.push([i.state]);
    //   this.chartOptions.xaxis.categories.push([i.state]);
    //   console.log(this.chartOptions.xaxis.categories);
    //   auxCases.push(i.cases);
    // }
    // // this.chartOptions.xaxis.categories = statesNames;
    // this.series[0].data = auxCases;
  },
};
</script>

<style></style>
