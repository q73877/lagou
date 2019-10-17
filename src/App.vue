<template>
  <router-view></router-view>
</template>

<style lang="scss">
@import "./assets/styles/base.scss";
</style>
<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions("film", ["getFilmList"]),
    ...mapActions("film", ["getSearch"])
  },
  created() {
    this.getFilmList();
    this.getSearch();
  }
};
</script>
