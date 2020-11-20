<template>
  <v-container>
    <Header></Header>
    <WhatIsCorona></WhatIsCorona>
    <Contagion></Contagion>
    <Data></Data>
    <router-view></router-view>
  </v-container>
</template>

<script>
import Header from "../components/Header";
import WhatIsCorona from "../components/WhatIsCorona";
import Contagion from "../components/Contagion";
import Data from "../components/Data";

export default {
  components: {
    Data,
    Contagion,
    WhatIsCorona,
    Header,
  },
};
</script>

<style></style>
