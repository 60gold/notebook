<template>
  <div id="content-page">
    <div class="content-note col-8">
      <textarea class="textarea-title" id="t-title" rows="1" maxlength="20" spellcheck="false" placeholder="請輸入標題（20字以內）" v-model="$store.state.note.title" @keyup="limitWords"></textarea>
      <textarea class="textarea-content" spellcheck="false" placeholder="請輸入內容" v-model="$store.state.note.content" @input="setHeight"></textarea>
    </div>
    <div class="content-other col-4">
      <h5>{{ $store.state.note.time }}</h5>
      <img :src="$store.state.note.src" alt="thumbnail" v-if="$store.state.note.src">
    </div>
  </div>
</template>

<script>
export default {
  name: 'content-page',
  props: {
  },
  methods: {
    limitWords() {
      var textareaTitle = document.getElementById('t-title');
      var regC = /[^ -~] /g;
      var regE = /\D /g; 
      var str = textareaTitle.value; 
      if (regC.test(str)){ 
        textareaTitle.value = textareaTitle.value.substr(0,20); 
      } 
      if(regE.test(str)){ 
        textareaTitle.value = textareaTitle.value.substr(0,40); 
      } 
    },
    setHeight(){
      var textarea = document.getElementsByClassName('textarea-content');
      textarea[0].style.height = 'auto';
      textarea[0].style.height =  textarea[0].scrollHeight + 'px';
    }
  }
}
</script>

<style lang="less" scoped>
#content-page {
  padding: 20px;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
}

.content-note {
  margin-left: 15px;
  margin-right: 15px;
}

.content-other {
  display: flex;
  margin-left: 15px;
  margin-right: 15px;
  flex-direction: column;
  align-items: flex-end;
  overflow: hidden;
  img {
    max-width: 100%;
    max-height: 500px;
  }
  h5 {
    margin-top: 0;
    margin-bottom: 40px;
    font-weight: normal;
  }
}

textarea {
  width: 100%;
  height: 100px;
  overflow-y: hidden;
  background: transparent;
  border: none;
  resize: none;
  outline: none;
  &:focus {
    text-decoration: underline;
  }
}

.textarea-title {
  font-size: 40px;
  font-weight: 700;
}

.textarea-content {
  height: 550px;
  font-size: 18px;
  line-height: 1.5;
}

@media (max-width:1200px){
  .textarea-content {
    margin-top: 60px;
    height: 900px;
  } 
}

@media (max-width:768px){
  #content-page {
    padding-top: 40px;
    flex-wrap: wrap-reverse;
  }
  .col-4, .col-8 {
    flex-basis: 100%;
  }
  .content-other {
    flex-direction: column-reverse;
    h5 {
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
  .textarea-title {
    height: 160px;
  }
  .textarea-content {
    margin-top: 20px;
    height: 1400px;
  }
}
</style>
