export const strict = false;

export const state = () => ({
  travel: {
    category: null,
    room_type: null,
    title: "",
    description: "",
    guest: 1,
    bedroom: 1,
    bed: 1,
    bathroom: 1,
    address: "",
    lat: "",
    lng: "",
    imgs: [],
    room_price: "",
  },
});

export const mutations = {
  select_category(state, payload) {
    console.log(state);
    state.travel.category = payload.category;
  },
  select_room_type(state, payload) {
    console.log(state);
    state.travel.room_type = payload.room_type;
  },
  select_room_info(state, payload) {
    console.log(state);
    state.travel.guest = payload.guest;
    state.travel.bedroom = payload.bedroom;
    state.travel.bed = payload.bed;
    state.travel.bathroom = payload.bathroom;
  },
};
