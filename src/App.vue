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
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0) -29.64%,
    #fdecec 45.66%,
    #b57474 45.66%
  );
}
</style>
