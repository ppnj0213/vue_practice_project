<template>
  <div class="stepInitDiv">
    <div class="initContainer">
      <div class="initBox">
        <div class="initMsg">
          <h1>호스트님의 숙소를 등록해보세요.</h1>
          <span
            >게스트가 예약할 수 있는 숙소를 등록하고, 게스트에게 살아볼 수 있는
            기회를 주세요.
          </span>
        </div>
        <div class="initMsg">
          <video autoplay muted loop>
            <source
              :src="require('~/static/assets/step.mp4')"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.stepInitDiv {
  position: inherit;
  overflow-y: auto;
  margin-top: 88px;
  margin-bottom: 82px;
  height: calc(100vh - calc(88px + 82px));
  padding: 0px 80px;
}

.initContainer {
  margin-top: auto;
  margin-bottom: auto;
  height: 100%;
}

.initBox {
  display: flex;
  flex-direction: row;
  margin: auto;
  width: 90%;
  height: 100%;
}

.initMsg {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 50%;
  flex-direction: column;
}

h1 {
  font-size: 32px;
  font-weight: 700;
}

span {
  max-width: 390px;
  font-size: 20px;
  margin-top: 50px;
  line-height: 1.4;
}

video {
  height: 98%;
  z-index: 10;
}
</style>
