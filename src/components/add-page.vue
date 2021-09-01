<template>
  <div id="add-page">
    <div class="content-note col-8">
      <textarea class="textarea-title" id="t-title" rows="1" maxlength="20" spellcheck="false" placeholder="請輸入標題（20字以內）" v-model="$store.state.note.title" @keyup="limitWords"></textarea>
      <textarea class="textarea-content" spellcheck="false" placeholder="請輸入內容" v-model="$store.state.note.content" @input="setHeight"></textarea>
    </div>
    <div class="content-other col-4">
      <label class="btn">
        <input class="input-file" type="file" @change="fileSelected"/>
        上傳照片
      </label>
      <img  v-if="image" :src="image"/>
    </div>
  </div>
  <div class="note-btn">
    <a href="#" class="add-button btn" @click="addNewNote">新增筆記</a>
    <a href="#" class="cancel-button btn" @click="cancelEdit">退出編輯</a>
  </div>
</template>

<script>
export default {
  name: 'add-page',
  props: {
  },
  data() {
    return {
      image: '',
    };
  },
  methods: {
    addNewNote() {
      this.$store.commit('finishNote');
      this.$store.commit('theNotebook');
    },
    cancelEdit() {
      this.$store.commit('theNotebook');
    },
    fileSelected(event){
      const file = event.target.files.item(0);
      const reader = new FileReader();
      reader.addEventListener('load',this.imageLoader);
      reader.readAsDataURL(file);
    },
    imageLoader(event){
      this.image = event.target.result;
      this.getSrc(this.image);
    },
    getSrc(index) {
      this.$store.commit('recordSrc',index);
    },
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
#add-page {
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
  flex-direction: column-reverse;
  align-items: flex-end;
  justify-content: flex-end;
  overflow: hidden;
  img {
    margin-top: 20px;
    max-width: 100%;
    max-height: 500px;
  }
  h5 {
    margin: 0;
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
  height: 50px;
  font-size: 18px;
  line-height: 1.5;
}

input.input-file {
  display: none;
}

label {
  margin-top: 20px;
  margin-bottom: 20px;
}

.note-btn {
  margin-top: 50px;
  flex: 0 0 100%;
  a {
    margin-right: 100px;
    text-decoration: none;
  }
}

.btn {
  margin-left: 15px;
  margin-right: 15px;
  padding: 15px 90px;
  border-radius: 5px;
  background-color: #2F2F2F;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 2px;
  &:hover {
    background: #A4A3FE;
  }
}

@media (max-width:1200px){
  .textarea-content {
    margin-top: 60px;
  } 
}

@media (max-width:768px){
  #add-page {
    padding-top: 40px;
  }
  .col-4, .col-8 {
    flex-basis: 100%;
  }
  .col-8 {
    margin-bottom: 20px;
  }
  .content-other {
    align-items: center;
  }
  .textarea-title {
    height: 105px;
  }
  .textarea-content {
    margin-top: 0;
    height: 50px;
  }
  .note-btn {
    margin-top: 0;
    text-align: center;
    a {
      display: inline-block;
      margin: 20px auto;
    }
  }
  .btn:hover {
    background-color: #2F2F2F;
  }
}
</style>
