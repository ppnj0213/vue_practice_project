<template>
  <div class="mapDiv">
    <div class="mapContainer">
      <div class="titleDiv">
        <h1 class="title">숙소 위치는 어디인가요?</h1>
        <div class="messageBox">
          <span class="message">
            주소는 게스트의 예약이 확정된 이후에 공개됩니다.
          </span>
        </div>
      </div>
      <div class="mapBox">
        <div id="map">
          <div class="searchDiv">
            <img
              :src="require('~/static/images/marker.png')"
              alt=""
              class="markImg"
            />
            <input placeholder="주소를 입력하세요." />
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
      map: null,
    };
  },

  mounted() {
    kakao.maps.load(this.initMap);
  },

  methods: {
    initMap() {
      const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
      const options = {
        //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(37.5064, 127.054), //지도의 중심좌표.
        level: 3, //지도의 레벨(확대, 축소 정도)
      };
      var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
      this.map = map;
    },
  },
};
</script>

<style scoped>
.mapDiv {
  position: inherit;
  overflow-y: auto;
  margin-top: 88px;
  margin-bottom: 82px;
  height: calc(100vh - calc(88px + 82px));
  padding: 0px 80px;
}
.mapContainer {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 630px;
  margin: auto;
}
.titleDiv {
  margin-bottom: 22px;
  background-color: transparent;
}
.title {
  margin-bottom: 16px;
  font-size: 32px;
}
.messageBox {
  width: 580px;
  margin-bottom: 32px;
}
.message {
  font-size: 18px;
  line-height: 24px;
  color: #717171;
}

.mapBox {
  display: flex;
  align-items: center;
  position: relative;
}

#map {
  position: relative;
  width: 100%;
  height: 380px;
  border-radius: 10px;
}

.searchDiv {
  position: absolute;
  display: flex;
  align-items: center;
  width: 80%;
  height: 60px;
  top: 32px;
  left: 10%;
  background-color: rgb(255, 255, 255);
  border-radius: 20px;
  z-index: 5;
}

.markImg {
  width: 26px;
  height: 26px;
  margin-left: 25px;
}

input {
  border: none;
  width: 100%;
  height: 28px;
  font-size: 16px;
}

input:focus {
  outline: none;
}
</style>
