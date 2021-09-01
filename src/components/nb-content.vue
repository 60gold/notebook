<template>
  <div id="nb-content">
    <notebook-page v-if="$store.state.onNotebookPage"></notebook-page>
    <content-page v-if="$store.state.onContentPage"></content-page>
    <add-page v-if="$store.state.onAddPage"></add-page>
    <favorite-page v-if="$store.state.onFavoritePage"></favorite-page>
  </div>
</template>

<script>
import NotebookPage from "./notebook-page.vue";
import ContentPage from "./content-page.vue";
import AddPage from "./add-page.vue";
import FavoritePage from "./favorite-page.vue";

export default {
  name: "nb-content",
  components: {
    NotebookPage,
    ContentPage,
    AddPage,
    FavoritePage,
  },
  props: {},
};
</script>

<style lang="less" scoped>
#nb-content {
  display: flex;
  margin: 0 auto;
  width: 100%;
  margin-top: 160px;
  flex-wrap: wrap;
  background: #fff;
}

@media (min-width:1200px){
  #nb-content{
    max-width:1300px
  } //當螢幕尺寸 >= 1200px --> width=1300px
}

@media (max-width:1200px){
  #nb-content{
    margin-top: 80px;
  } 
}
</style>
