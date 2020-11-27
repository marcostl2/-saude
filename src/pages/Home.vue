<template>
  <v-container>
    <Header></Header>
    <WhatIsCorona></WhatIsCorona>
    <Contagion></Contagion>
    <Symptomps></Symptomps>
    <Data></Data>
    <router-view></router-view>
  </v-container>
</template>

<script>
import Header from "../components/Header";
import WhatIsCorona from "../components/WhatIsCorona";
import Contagion from "../components/Contagion";
import Data from "../components/Data";
import Symptomps from "../components/Symptomps";

export default {
  components: {
    Data,
    Symptomps,
    Contagion,
    WhatIsCorona,
    Header,
  },
};
</script>

<style></style>
