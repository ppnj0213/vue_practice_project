<template>
  <div class="hostingDiv">
    <div class="hostingNav">
      <div class="navContainer">
        <img
          class="logoImg"
          :src="require('~/static/images/LOGO.png')"
          alt="logo"
        />
        <button class="navBtn">나가기</button>
      </div>
    </div>
    <!-- 페이지 표시 -->
    <div v-if="currentIdx === 0">
      <StepOne />
    </div>
    <div v-else-if="currentIdx === 1">
      <Category />
    </div>
    <div v-else-if="currentIdx === 2">
      <RoomType />
    </div>
    <div v-else-if="currentIdx === 3">
      <HostMap />
    </div>
    <div v-else-if="currentIdx === 4">
      <Info />
    </div>
    <div v-else-if="currentIdx === 5">
      <HostName />
    </div>
    <div v-else-if="currentIdx === 6">
      <HostPrice />
    </div>
    <div class="hostFooter">
      <div class="footerDiv">
        <div class="stepBtn">
          <button class="prev" @click="goToPrev(currentIdx)">뒤로</button>
          <button class="next" @click="goToNext(currentIdx)">다음</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIdx: 0,
      travel: null,
    };
  },

  components: {},

  mounted() {},

  methods: {
    goToPrev(currentIdx) {
      if (currentIdx === 0) return;
      this.currentIdx = currentIdx - 1;
    },

    goToNext(currentIdx) {
      this.currentIdx = currentIdx + 1;
      console.log("go next", currentIdx);
    },
  },
};
</script>

<style scoped>
.hostingDiv {
  width: 100wh;
  height: 100vh;
}

.hostingNav {
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 70px;
  top: 0;
  right: 0;
  left: 0;
  z-index: 2;
  background-color: #ffffff;
}

.navContainer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding: 30px 48px 0px;
}

.logoImg {
  margin-right: auto;
  width: 80px;
  height: 45px;
}

.navBtn {
  text-align: center;
  width: 78px;
  background-color: transparent;
  padding-left: 16px;
  padding-right: 16px;
  height: 40px;
  border: 1px solid #dddddd;
  border-radius: 32px;
}

.navBtn:hover {
  background-color: #6f6f6f;
  color: white;
}

.hostFooter {
  position: fixed;
  width: 100vw;
  height: 86px;
  bottom: 0px;
  background-color: inherit;
  z-index: 2;
}

.footerDiv {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.stepBtn {
  display: flex;
  width: 100%;
  height: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  justify-content: space-between;
}

.prev {
  margin-left: 48px;
  font-size: 15px;
  cursor: pointer;
  text-decoration: underline;
  background: transparent;
  border: none;
}

.next {
  background-color: #000000;
  margin-right: 48px;
  padding-left: 32px;
  padding-right: 32px;
  cursor: pointer;
  border-color: black;
  border-radius: 10px;
  color: #ffffff;
}
</style>
