<template>
  <v-card
    @click="handleCardClick"
    max-width="400"
    v-if="showCard"
    class="d-flex flex-column pa-5 align-self-center mb-5"
    id="card"
  >
    <v-card-title class="d-flex justify-center pt-0">
      <v-img
        :src="
          `https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/${state.uf}.png`
        "
        max-width="30"
        contain
      ></v-img>
      <h3 class="ml-2">{{ state.state }}</h3>
    </v-card-title>
    <v-layout class="d-flex">
      <v-layout column>
        <v-flex xs6 class="d-flex align-center uf-data">
          <h4>
            Número de Casos:
            <b style="color:#FA5652"> {{ state.cases }}</b>
          </h4>
        </v-flex>
        <v-flex class="d-flex align-center uf-data">
          <h4>
            Número de mortes:
            <b style="color:#FA5652"> {{ state.deaths }}</b>
          </h4>
        </v-flex>
      </v-layout>
      <v-flex xs4 class="d-flex justify-end ml-4">
        <v-img
          :style="randomColor"
          src="../assets/virus.svg"
          contain
          max-width="120"
        ></v-img>
      </v-flex>
    </v-layout>
    <v-dialog v-model="dialog" :width="getDialogWidth" class="pa-2 pa-md-6 ">
      <StateChart
        v-if="seriesData && chartOpt"
        :state="state"
        :seriesData="seriesData"
        :chartOpt="chartOpt"
        :dialog="dialog"
      ></StateChart>
    </v-dialog>
  </v-card>
</template>

<script>
export default {
  props: {
    state: Object,
    ranges: Array,
    chartOpt: Array,
    seriesData: Array,
  },
  data() {
    return {
      dialog: false,
      showCard: false,
    };
  },
  components: {
    StateChart: () => import("./StateChart.vue"),
  },
  computed: {
    randomColor() {
      return `filter:hue-rotate(${Math.floor(
        Math.random() * (360 - 0) + 0
      )}deg) !important`;
    },
    getDialogWidth() {
      return this.$vuetify.breakpoint.smAndUp ? "70%" : "95%";
    },
  },
  methods: {
    handleCardClick() {
      this.dialog = !this.dialog;
      console.log(this.ranges);
    },
  },
  mounted() {
    let r1 = this.ranges[0].find((val) => val.state == this.state.state);
    let r2 = this.ranges[1].find((val) => val.state == this.state.state);
    let r3 = this.ranges[2].find((val) => val.state == this.state.state);
    this.seriesData = [r1[0].cases, r2[0].cases, r3[0].cases];
    this.chartOpt = [
      r1[0].datetime.toString().split("T")[0],
      r2[0].datetime.toString().split("T")[0],
      r3[0].datetime.toString().split("T")[0],
    ];
  },
  updated() {
    this.showCard = !this.showCard;
  },
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.uf-data span {
  padding-left: 6px;
}
hr {
  margin: 10px 0;
}
#card:hover {
  filter: brightness(96%);
}
.v-dialog {
  margin: 10px !important;
}
</style>
