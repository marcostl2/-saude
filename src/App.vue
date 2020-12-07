<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
body {
  overflow: hidden;
}
* {
  font-family: "Red Hat Display", sans-serif;
}
</style>
