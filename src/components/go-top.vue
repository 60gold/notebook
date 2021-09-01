<template>
  <a href="#" id="go-top" @click="goTop"><i class="icon-top"></i></a>
</template>

<script>
export default {
  name: "go-top",
  props: {},
  methods: {
    goTop() {
      // document.getElementsByTagName('body').animate({ scrollTop: 0 }, 900);
      // return false;
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      const timeTop = setInterval(() => {
        document.body.scrollTop =
          document.documentElement.scrollTop =
          top -=
            50;
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 10);
    },
  },
};
</script>

<style lang="less" scoped>
#go-top {
  display: none;
  position: fixed;
  right: 20px;
  bottom: 25px;
  width: 45px;
  height: 45px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  line-height: 40px;
  text-align: center;
  text-decoration: none;
  color: #fff;
  font-size: 16px;
  z-index: 10;
  transition: all 0.3s;
  i {
    font-size: 14px;
    color: #fff;
  }
}

@media (max-width: 768px) {
  #go-top {
    display: block;
  }
}
</style>
