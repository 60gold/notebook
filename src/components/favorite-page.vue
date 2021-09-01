<template>
  <array-style></array-style>
  <div id="notebook-page" class="card">
    <ul class="note-info">
      <li class="col-3" v-for="(note, index) in reserveNotes" :key="index" v-show="note.fav">
        <div class="thumnnail" v-if="note.src!=null">
          <img :src="note.src" alt="thumbnail" />
        </div>
        <a href="#" class="info" @click="openContentPage(index)">
          <div class="title">{{ note.title }}</div>
          <div class="book">{{ note.content }}</div>
        </a>
        <div class="bar">
          <div class="time">{{ note.time }}</div>
          <div class="setting">
            <div class="fav-icon isfav" v-if="note.fav==true" @click="addFavorite(index)">
              <i class="icon-star"></i>
            </div>
            <div class="fav-icon"  v-if="note.fav==false" @click="addFavorite(index)">
              <i class="icon-star-empty"></i>
            </div>
            <div class="menu" @click="deleteThisNote(note, index)">
              <i class="icon-cancel"></i>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import ArrayStyle from "./array-style.vue";

export default {
  name: 'favorite-page',
  components: {
    ArrayStyle,
  },
  props: {
  },
  computed: {
    reserveNotes() {
      return this.$store.getters.reverseNote;
    },
  },
  methods: {
    openContentPage(index) {
      this.$store.commit('recordId', index);
      this.$store.commit('loadNote');
      this.$store.commit('theContentPage');
      this.$store.commit('clearNoteId');
    },
    openAddPage() {
      this.$store.commit('clearNote');
      this.$store.commit('theAddPage');
    },
    addFavorite(index) {
      this.$store.commit('recordId', index);
      this.$store.commit('isFavorite');
      this.$store.commit('clearNoteId');
    },
    deleteThisNote(note, index) {
      let result = confirm(`是否要刪除： "${ note.title }"？`);
      if (result) {
        this.$store.commit('deleteNote', index);
      }
    },
  },
}
</script>

<style lang="less" scoped>
</style>
