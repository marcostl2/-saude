<template>
  <v-container>
    <Header></Header>
    <WhatIsCorona></WhatIsCorona>
    <Contagion></Contagion>
    <Symptomps></Symptomps>
    <WhatShouldWeDo></WhatShouldWeDo>
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
import WhatShouldWeDo from "../components/WhatShouldWeDo";

export default {
  components: {
    Data,
    Symptomps,
    Contagion,
    WhatIsCorona,
    Header,
    WhatShouldWeDo,
  },
};
</script>

<style></style>
