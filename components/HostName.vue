<template>
  <div class="hostNameDiv">
    <div class="hostNameContainer">
      <div class="hostNameBox">
        <div class="hostNameBody">
          <div class="hostNameSection">
            <div class="hostTitle">이제 숙소에 이름을 지어주세요.</div>
            <div class="messageBox">
              <div class="hostNameMessage">
                숙소 이름은 짧을수록 효과적입니다. 나중에 언제든지 변경할 수
                있으니, 너무 걱정하지 마세요.
              </div>
            </div>
            <div class="hostNameText">
              <textarea class="nameArea" v-model="travel.title" />
            </div>
          </div>
          <div class="hostNameSection">
            <div class="hostTitle">숙소 설명 작성하기</div>
            <div class="messageBox">
              <div class="hostNameMessage">
                숙소의 특징과 장점을 알려주세요.
              </div>
            </div>
            <div class="hostNameText">
              <textarea class="descriptionArea" v-model="travel.description" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["travel"]),
  },
  mounted() {},

  methods: {
    // ...mapMutations(['test_func']),
    // test(){
    //   this.test_func()
    // },
    //요건 쓰면 안됨.
    // test(){
    //   this.$axios.get('aaaaa'{
    //   }).then(res=>{
    // if(res == true){
    //   this.$axios.get('dasdasd').then(res=>{
    //   })
    // }
    //   })
    // },
    // 요걸로 대체
    // async test2(){
    //   let res = await this.$axios.get('dsadsad',{})
    //   let res2 = null
    //   if(res){
    //     res2 = this.$axios.get('dasdasd')
    //     rdskjdo
    //   }
    // }
  },
};
</script>

<style scoped>
.hostNameDiv {
  position: inherit;
  overflow-y: auto;
  margin-top: 88px;
  margin-bottom: 82px;
  height: calc(100vh - calc(88px + 82px));
  padding: 0px 80px;
}

.hostNameContainer {
  margin-top: auto;
  margin-bottom: auto;
}

.hostNameBox {
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 100%;
  height: 100%;
  max-width: 630px;
  padding-top: 0px;
}

.hostNameBody {
  width: 100%;
  padding-top: 0px;
  padding-left: 0px;
  padding-right: 0px;
}

.hostNameSection {
  margin: auto;
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  width: 100%;
  height: 300px;
}

.hostTitle {
  margin-bottom: 32px;
  font-size: 32px;
}

.messageBox {
  width: 580px;
  margin-bottom: 32px;
}

.hostNameMessage {
  font-size: 18px;
  line-height: 24px;
  color: #717171;
}

.hostNameText {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
}

.nameArea {
  width: 100%;
  padding: 24px;
  border-radius: 10px;
}

.descriptionArea {
  width: 100%;
  padding: 24px;
  max-height: 50vh;
  font-size: 18px;
  line-height: 28px;
  border-radius: 10px;
}
</style>
