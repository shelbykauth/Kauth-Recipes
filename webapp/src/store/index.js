import Vue from "vue";
import Vuex from "vuex";
import RecipeStore from "./recipes/index.js";
import SeedData from "./seedData/index.js";

Vue.use(Vuex);

const theStore = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    RecipeStore
  }
});

SeedData.addRecipes(theStore);

export default theStore;
