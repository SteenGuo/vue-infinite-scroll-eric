import InfiniteScroll from "./infiniteScroll.js";

export default {
  install: function (Vue) {
    Vue.directive(InfiniteScroll.name, InfiniteScroll);
  },
};
