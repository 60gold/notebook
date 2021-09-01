<template>
  <div id="nb-header">
    <a href="#">
      <i class="icon-book" @click="openNotebookPage"></i>
    </a>
    <label for="switch">
      <i class="icon-menu"></i>
    </label>
    <input type="checkbox" id="switch" />
    <ul class="menu">
      <li>
        <a href="#" class="font-bold" @click="openNotebookPage">Notebooks</a>
      </li>
      <li class="plus">
        <a href="#" @click="openAddPage">Pages <i class="icon-add"></i></a>
      </li>
      <li><a href="#" class="disabled">Recent</a></li>
      <li><a href="#" @click="openFavoritePage">Favorite</a></li>
      <li class="moblie-dark"><a href="#" @click="openDarkMode">Dark Mode</a></li>
      <ul class="pull-right">
        <li class="dark">Dark Mode</li>
        <li>
          <div class="dark-mode-button" @click="openDarkMode">
            <div class="light-mode" id="open-dark-mode"></div>
          </div>
        </li>
        <li class="user-icon">
          <img class="user" src="../assets/image/user.jpg" alt="user" />
        </li>
      </ul>
    </ul>
  </div>
</template>

<script>
export default {
  name: "nb-header",
  props: {},
  data() {
    return {
      temp: 1,
    };
  },
  methods: {
    openNotebookPage() {
      this.$store.commit("theNotebook");
      this.closeMenu();
    },
    openAddPage() {
      this.$store.commit("clearNote");
      this.$store.commit("theAddPage");
      this.closeMenu();
    },
    openFavoritePage() {
      this.$store.commit("theFavoritePage");
      this.closeMenu();
    },
    closeMenu() {
      document.getElementById("switch").checked = false;
    },
    openDarkMode() {
      if (this.temp == 1) {
        document.getElementById("open-dark-mode").className = "night-mode";
        document.getElementsByTagName("body")[0].className = "dark-body";
        this.temp = 0;
      } else {
        document.getElementById("open-dark-mode").className = "light-mode";
        document.getElementsByTagName("body")[0].className = "";
        this.temp = 1;
      }
      this.closeMenu();
    },
  },
};
</script>

<style lang="less" scoped>
#nb-header {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  padding: 15px 50px;
  width: 100%;
  align-items: center;
  background: #ebebeb;
  &::after {
    content: "";
    display: block;
    clear: both;
  }
  a {
    color: #2f2f2f;
  }
  i {
    margin-right: 30px;
    padding-left: 50px;
    float: left;
    line-height: 50px;
    font-size: 45px;
  }
  li.plus i {
    margin-left: 5px;
    margin-right: 0;
    padding: 4px 0;
    border-radius: 6px;
    float: none;
    line-height: 0;
    font-size: 18px;
    color: #fff;
    background: #a4a3fe;
  }
  li.moblie-dark {
    display: none;
    a {
      color: #888888;
    }
  }
  a.disabled {
    color: #888888;
  }
}

input {
  display: none;
}

label {
  display: none;
  float: right;
  padding-right: 50px;
  line-height: 50px;
  cursor: pointer;
}

.menu {
  padding-left: 0;
  width: 100%;
  clear: none;
  max-height: 50px;
  list-style: none;
  li {
    display: inline-flex;
    margin-left: 50px;
    align-items: center;
    a {
      padding: 10px 10px;
      text-decoration: none;
      font-size: 18px;
      color: #2f2f2f;
      &:hover {
        border-bottom: 5px solid #a4a3fe;
      }
      .font-bold {
        font-weight: 700;
      }
    }
  }
  li.dark {
    font-size: 18px;
    color: #888888;
  }
  ul.pull-right {
    display: flex;
    align-items: center;
    float: right;
    li {
      margin-left: 0;
    }
  }
}

.disabled {
  cursor: not-allowed;
}

.dark-mode-button {
  position: relative;
  width: 54px;
  height: 30px;
  margin-left: 15px;
  border: 1px solid #707070;
  border-radius: 15px;
  background: #fff;
  cursor: pointer;
}

.light-mode {
  position: absolute;
  top: 4px;
  left: 5px;
  height: 20px;
  width: 20px;
  background-color: #cccccc;
  border-radius: 50%;
  transition: all 0.5s;
}

.night-mode {
  position: absolute;
  top: 4px;
  right: 5px;
  height: 20px;
  width: 20px;
  background-color: #a4a3fe;
  border-radius: 50%;
  transition: all 0.5s;
}

.user {
  margin-left: 70px;
  margin-right: 70px;
  width: 50px;
  height: 50px;
  border: 1px solid #707070;
  border-radius: 50%;
}

// 漢堡moblie
@media screen and (max-width: 1200px) {
  #nb-header {
    display: block;
    padding: 15px 0 1px 0;
    box-shadow: 0px 1px 1px #00000088;
    i {
      padding-left: 25px;
      padding-bottom: 10px;
    }
    label i {
      margin-right: 20px;
      padding: 0;
      font-size: 35px;
    }
    li.moblie-dark {
      display: inline-block;
    }
  }
  input {
    display: none;
  }
  input:checked ~ .menu {
    max-height: 400px;
  }
  label {
    display: block;
    padding-right: 5px;
    padding-bottom: 10px;
  }
  .menu {
    margin: 0 0 5px 0;
    padding: 0;
    width: 100%;
    max-height: 0;
    clear: both;
    background: #fff;
    overflow: hidden;
    transition: 0.2s;
    li {
      display: inline-block;
      margin-left: 0;
      width: 100%;
      text-align: center;
      border-bottom: 1px solid #efefef;
      &:nth-child(5) {
        border-bottom: none;
      }
      a {
        display: block;
        line-height: 50px;
        font-size: 18px;
        color: #5d5d5d;
        letter-spacing: 2px;
        &:hover {
          border-bottom: none;
        }
      }
    }
    ul.pull-right {
      display: none;
    }
  }
}
</style>

<style lang="less">
body.dark-body {
  background: #2f2f2f;
  #nb-header {
    background: #272727;
    i {
      color: #cccccc;
    }
    .menu a {
      color: #cccccc;
    }
    a.font-bold {
      color: #a4a3fe;
    }
    a.disabled {
      color: #888888;
    }
  }
  #navbar {
    a {
      color: #cccccc;
      &:hover {
        color: #a4a3fe;
      }
    }
  }
  #nb-content {
    background: #2f2f2f;
    color: #cccccc;
  }
  #notebook-page {
    li,
    a {
      color: #cccccc;
    }
  }
  input,
  textarea {
    color: #cccccc;
  }
  .btn {
    background-color: #a4a3fe;
    color: #2f2f2f;
    &:hover {
      background: #cccccc;
    }
  }
  #favorite-page {
    li,
    a {
      color: #cccccc;
    }
  }
  #go-top {
    background-color: rgba(255, 255, 255, 0.4);
  }
}

@media screen and (max-width: 768px) {
  body.dark-body {
    #nb-header .menu {
      background: #2f2f2f;
    }
    .btn:hover {
    background-color: #a4a3fe;
    }
  }
}
</style>
