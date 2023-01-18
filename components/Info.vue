<template>
  <div class="infoDiv">
    <div class="infoContainer">
      <div class="hostBox">
        <div class="infoTitle">
          <h1>숙소 기본 정보를 알려주세요.</h1>
        </div>
        <div v-for="(value, key) in hostInfo" :key="key">
          <div class="chooseDiv">
            <div class="chooseTitle">{{ key }}</div>
            <div class="chooseCntBox">
              <button class="chooseBtn" @click="decreseBtn(key)">-</button>
              <div>{{ value }}</div>
              <button class="chooseBtn" @click="increseBtn(key)">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hostInfo: {
        guest: 0,
        bedroom: 0,
        bed: 0,
        bathroom: 0,
      },
    };
  },

  mounted() {},

  methods: {
    decreseBtn(key) {
      if (this.hostInfo[key] > 0) {
        this.hostInfo[key] = this.hostInfo[key] - 1;
      }
    },
    increseBtn(key) {
      console.log(this.hostInfo[key]);
      if (this.hostInfo[key] === 5) return;
      this.hostInfo[key] = this.hostInfo[key] + 1;
      this.$store.commit("select_room_info", {
        guest: this.hostInfo.guest,
        bedroom: this.hostInfo.bedroom,
        bed: this.hostInfo.bed,
        bathroom: this.hostInfo.bathroom,
      });
    },
  },
};
</script>

<style scoped>
.infoDiv {
  position: inherit;
  height: calc(100vh - calc(88px + 82px));
  margin-top: 88px;
  margin-bottom: 82px;
  padding: 0px 80px;
  overflow-y: auto;
}

.infoContainer {
  margin-top: auto;
  margin-bottom: auto;
}

.hostBox {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 630px;
  margin: auto;
  padding-top: 0px;
}

.infoTitle {
  margin-bottom: 32px;
  background-color: transparent;
}

h1 {
  margin-bottom: 0;
  font-size: 32px;
}

.chooseDiv {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  margin-top: 30px;
  padding-top: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #ebebeb;
}

.chooseTitle {
  width: 100%;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
}

.chooseCntBox {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 115px;
  height: 32px;
  margin-left: 16px;
}

.chooseBtn {
  width: 32px;
  height: 32px;
  text-decoration: none;
  background-color: #ffffff;
  color: #717171;
  border: 1px solid #b0b0b0;
  border-radius: 50%;
  font-size: 18px;
}
</style>
