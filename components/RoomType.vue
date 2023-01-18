<template>
  <div class="typeDiv">
    <div class="typeBox">
      <div class="titleDiv">
        <h1 class="title">게스트가 사용할 숙소 유형</h1>
      </div>
      <div class="chooseTypeDiv">
        <button
          class="chooseBtn"
          v-for="room in types"
          v-bind:key="room.id"
          v-bind:class="{
            active: $store.state.travel.room_type == room.room_type,
          }"
          @click="onClickType(room.room_type)"
        >
          <div class="msgDiv">
            <h2 class="btnTitle">{{ room.title }}</h2>
            <div class="btnMsg">{{ room.msg }}</div>
          </div>
          <div class="buttonIcon">
            <img class="iconImage" :src="room.img" alt="home" />
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      types: [
        {
          id: 1,
          title: "공간 전체",
          msg: "게스트는 개인실에서 숙박하지만, 일부 공간은 호스트나 다른 사람과 함께 사용할 수 있습니다.",
          room_type: "private",
          img: require("../static/assets/home.png"),
        },
        {
          id: 2,
          title: "개인실",
          msg: "게스트는 개인실에서 숙박하지만, 일부 공간은 호스트나 다른 사람과 함께 사용할 수 있습니다.",
          room_type: "guest",
          img: require("../static/assets/door.png"),
        },
        {
          id: 3,
          title: "다인실",
          msg: "게스트가 개인 공간 없이 호스트나 다른 사람과 함께 쓰는 침실이나 공용 공간에서 숙박합니다.",
          room_type: "public",
          img: require("../static/assets/share.png"),
        },
      ],

      selected_type_id: null,
    };
  },

  mounted() {},

  methods: {
    onClickType(room_type) {
      this.$store.commit("select_room_type", {
        room_type,
      });
    },
  },
};
</script>

<style scoped>
.typeDiv {
  position: inherit;
  overflow-y: auto;
  margin-top: 88px;
  margin-bottom: 82px;
  height: calc(100vh - calc(88px + 82px));
  padding: 0px 80px;
}

.typeBox {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 630px;
  margin: auto;
}

.titleDiv {
  margin-bottom: 32px;
  background-color: transparent;
}

.title {
  margin-bottom: 0;
  font-size: 32px;
}

.chooseTypeDiv {
  display: flex;
  margin-top: 40px;
  flex-direction: column;
  width: 100%;
  max-height: 100%;
}

.chooseBtn {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  min-height: 88px;
  margin-bottom: 12px;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 12px;
  padding: 0px;
  cursor: pointer;
}

.active {
  background-color: #f3f3f3;
  border: 2px solid #000000;
}

.msgDiv {
  margin: 24px;
  text-align: left;
  width: 100%;
}

.btnTitle {
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
}

.btnMsg {
  max-width: 400px;
  font-size: 14px;
  line-height: 18px;
  color: #717171;
  margin-top: 4px;
}

.buttonIcon {
  margin-left: 8px;
  margin-right: 24px;
  margin-top: 26px;
  color: white;
}

.iconImage {
  width: 34px;
  height: 34px;
}
</style>
