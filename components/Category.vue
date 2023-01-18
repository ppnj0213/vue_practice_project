<template>
  <div class="categoryDiv">
    <div class="categoryContainer">
      <div class="categoryBox">
        <div class="titleDiv">
          <h1 class="title">
            다음 중 숙소를 가장 잘 설명하는 것은 무엇인가요?
          </h1>
        </div>
      </div>
      <div class="categoryGroup">
        <div class="groups">
          <button
            class="categoryBtn"
            v-bind:class="{
              active: $store.state.travel.category == category.title,
            }"
            v-for="category in categories"
            v-bind:key="category.id"
            @click="onClickCategory(category.title)"
          >
            <img class="buttonImg" :src="category.img" alt="hanok" />
            <span class="categoryName">{{ category.title }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        { id: 1, title: "한옥", img: require("../static/assets/hanok.png") },
        { id: 2, title: "바다앞", img: require("../static/assets/sea.png") },
        { id: 3, title: "캠핑장", img: require("../static/assets/camp.png") },
        { id: 4, title: "서핑", img: require("../static/assets/surf.png") },
        { id: 5, title: "섬", img: require("../static/assets/island.png") },
      ],

      selected_category_id: null,
    };
  },

  mounted() {},

  methods: {
    onClickCategory(title) {
      this.$store.commit("select_category", {
        category: title,
      });
    },
  },
};
</script>

<style scoped>
.categoryDiv {
  position: inherit;
  overflow-y: auto;
  margin-top: 88px;
  margin-bottom: 82px;
  height: calc(100vh - calc(88px + 82px));
  padding: 0px 80px;
}

.categoryContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
  margin-bottom: auto;
}

.categoryBox {
  margin: auto;
  width: 100%;
  height: 100%;
  max-width: 640px;
  padding-top: 0px;
}

.titleDiv {
  margin-bottom: 32px;
  background-color: transparent;
}

.title {
  margin-bottom: 0;
  font-size: 32px;
}

.categoryGroup {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 640px;
}

.groups {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.categoryBtn {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid #dddddd;
  border-radius: 8px;
  background-color: #ffffff;
  padding: 16px;
}

.active {
  border: 1.5px solid #000000;
}

.buttonImg {
  width: 37px;
  height: 37px;
  justify-content: center;
  margin-bottom: 3px;
}

.categoryName {
  display: flex;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
}
</style>
