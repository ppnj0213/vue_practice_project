<template>
  <div class="priceDiv">
    <div class="priceMsgContainer">
      <div class="priceMsgBox">
        <div class="priceMsgSection">
          <h1 class="priceMsgTitle">이제 요금을 설정하세요</h1>
          <div class="messageBox">
            <span class="priceMessage"> 언제든지 변경하실 수 있습니다. </span>
          </div>
        </div>
        <div class="priceBody">
          <div class="priceBox">
            <input class="price" v-model="travel.price" />
          </div>
          <div class="message">
            이 지역에서 비슷한 숙소의 요금은 보통 ~ 사이입니다.
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

  methods: {},
};
</script>

<style scoped>
.priceDiv {
  position: inherit;
  overflow-y: auto;
  margin-top: 88px;
  margin-bottom: 82px;
  height: calc(100vh - calc(88px + 82px));
  padding: 0px 80px;
}

.priceMsgContainer {
  margin-top: auto;
  margin-bottom: auto;
}

.priceMsgBox {
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 100%;
  height: 100%;
  max-width: 630px;
  padding-top: 0px;
}

.priceMsgSection {
  margin: auto;
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  margin-bottom: 32px;
  width: 100%;
}

.priceMsgTitle {
  margin-bottom: 20px;
  font-size: 32px;
  font-weight: 400;
}

.messageBox {
  width: 580px;
  margin-bottom: 32px;
}

.priceMessage {
  font-size: 18px;
  line-height: 24px;
  color: #717171;
}

.priceBody {
  border: 1px solid red;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f7f7f7;
  border: 1px solid #dddddd;
  border-radius: 12px;
}

.priceBox {
  display: flex;
  margin-top: 0;
  border-radius: 8px;
  box-shadow: inset 0 0 0 1px #b0b0b0;
  color: #222222;
  background-color: #ffffff;
}

.price {
  width: 380px;
  border: none;
  outline: none;
  padding: 0;
  margin: 8px 12px;
  background-color: transparent;
  font-size: 48px;
  font-weight: 600;
  line-height: 80px;
  text-align: center;
}

.message {
  width: 280px;
  padding-top: 24px;
  font-size: 18px;
  line-height: 24px;
}
</style>
