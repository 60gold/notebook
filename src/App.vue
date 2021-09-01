<template>
  <nb-header></nb-header>
  <nb-content @click="closeMenu"></nb-content>
  <go-top></go-top>
</template>

<script>
import NbHeader from "./components/nb-header.vue";
import NbContent from "./components/nb-content.vue";
import goTop from "./components/go-top.vue";

export default {
  name: "App",
  components: {
    NbHeader,
    NbContent,
    goTop,
  },
  methods: {
    closeMenu() {
      this.$store.commit('closeHeaderMenu');
    }
  }
};
</script>

<style lang="less">
@import "./common/font/fontello.css";

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  max-width: 100%;
  overflow-x: hidden;
  font-family: fontello;
  color: #2f2f2f;
}

img {
  display: block;
}

h1 {
  font-size: 40px;
}

h4 {
  font-size: 18px;
}

h5 {
  font-size: 14px;
}

p {
  font-size: 12px;
}

.col-4 {
  flex-grow: 0;
  flex-basis: calc(~"-30px + 33%");
}

.col-8 {
  flex-grow: 0;
  flex-basis: calc(~"-30px + 66%");
}

.font-bold {
  font-weight: 700;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>