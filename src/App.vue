<template>
  <v-app>
    <v-container>
      <div id="app">
        <Header></Header>
        <WhatIsCorona></WhatIsCorona>
        <Contagion></Contagion>
        <Data></Data>
      </div>
    </v-container>
  </v-app>
</template>

<script>
import Header from "./components/Header";
import WhatIsCorona from "./components/WhatIsCorona";
import Contagion from "./components/Contagion";
import Data from "./components/Data";

export default {
  name: "App",

  components: {
    Data,
    Contagion,
    WhatIsCorona,
    Header,
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
body {
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0) -29.64%,
    #fdecec 45.66%,
    #b57474 45.66%
  );
}
</style>
