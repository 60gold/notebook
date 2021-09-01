<template>
  <array-style></array-style>
  <div id="notebook-page" class="card">
    <ul class="note-info">
      <li class="col-3" v-for="(note, index) in reverseNotes" :id="note.id" :key="index">
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
      <li class="col-3 add" @click="openAddPage"><a href="#"><i class="icon-add"></i></a></li>
    </ul>
  </div>
</template>

<script>
import ArrayStyle from "./array-style.vue";

export default {
  name: "notebook-page",
  components: {
    ArrayStyle
  },
  props: {},
  computed: {
    reverseNotes() {
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
};
</script>

<style lang="less">
#notebook-page {
  flex: 0 0 100%;
  padding: 50px 20px;
  width: 100%;
}

ul.note-info {
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style-type: none;
  li {
    display: flex;
    padding: 10px;
    border: 1px solid #727272;
  }
  li.add {
    border-style: dashed;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }
    i {
      font-size: 100px;
      color: #707070;
    }
  }
  a {
    text-decoration: none;
    color: #2F2F2F;
  }
  .info {
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    overflow: hidden;
    align-items: center;
  }
  .title {
    flex: 0 0 100%;
    font-size: 22px;
    font-weight: 700;
  }
  .book {
    flex: 0 0 100%;
  }
  .bar {
    display: flex;
  }
  .time {
    flex: 50%;
    font-size: 12px;
  }
  .setting {
    display: flex;
    flex: 50%;
    justify-content: flex-end;
    a {
      color: #888;
    }
    i {
      font-size: 18px;
      color: #888;
      cursor: pointer;
    }
    .fav-icon {
      margin-right: 15px;
    }
  }
  .setting .isfav i {
    color: #a4a3fe;
  }
  .menu i:hover {
    color: #a4a3fe;
  }
}

#notebook-page .menu:hover > ul {
  display: block;
}

.card {
  li {
    flex-direction: column;
    height: 370px;
    margin: 0 10px 40px 10px;
  }
  .col-3 {
    flex-grow: 0;
    flex-basis: calc(~"-20px + 25%");
  }
  .thumnnail {
    width: 100%;
    max-height: 170px;
    overflow: hidden;
  }
  .thumnnail img {
    width: 100%;
  }
  .bar, .setting {
    align-items: center;
  }
  .bar {
    margin-top: 15px;
  }
}

.list {
  li {
    height: 200px;
    margin-bottom: 20px;
    flex: 0 0 100%;
  }
  li.add {
    flex: 1;
  }
  .thumnnail {
    margin-right: 30px;
    img {
      width: auto;
      height: 100%;
    }
  }
  .bar {
    margin-left: 30px;
    flex-direction: column-reverse;
  }
  .time {
    display: flex;
    align-items: flex-end;
  }
}

@media (max-width:1200px){
  ul.array-style {
    margin-top: 50px;
  }
}

@media screen and (max-width: 768px) {
  #notebook-page {
    padding-top: 40px;
  }
  .card .col-3 {
    flex-basis: 100%;
  }
  .card li {
    height: 390px;
  }
  .card li.add {
    margin-bottom: 0;
    height: 200px;
  }
}
</style>
