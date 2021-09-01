<template>
  <ul class="array-style">
    <li id="li-card" class="onFocus" @click="clickCard"><i class="icon-card"></i></li>
    <li id="li-list" @click="clickList"><i class="icon-list"></i></li>
  </ul>
</template>

<script>
export default {
  name: "array-style",
  props: {},
  methods: {
    clickCard() {
      document.getElementById('notebook-page').className = 'card';
      document.getElementById('li-card').className = 'onFocus';
      document.getElementById('li-list').className = '';
    },
    clickList() {
      document.getElementById('notebook-page').className = 'list';
      document.getElementById('li-card').className = '';
      document.getElementById('li-list').className = 'onFocus';
    },
  },
};
</script>

<style lang="less">
ul.array-style {
  flex: 0 0 100%;
  margin: 0;
  padding: 0;
  text-align: right;
  list-style-type: none;
  cursor: pointer;
  li {
    margin-right: 20px;
    display: inline-block;
    font-size: 18px;
  }
  li.onFocus i {
    background-color: #a4a3fe;
    color: #fff;
    border-color: #a4a3fe;
  }
  i {
    padding: 9px 5px;
    font-size: 20px;
    color: #ccc;
    border: 1px solid #ccc;
    border-radius: 4px;
    &:hover {
      background-color: #a4a3fe;
      color: #fff;
      border-color: #a4a3fe;
    }
  }
}

@media screen and (max-width: 768px) {
  ul.array-style {
    display: none;
  }
}
</style>
