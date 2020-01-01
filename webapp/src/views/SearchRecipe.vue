<template>
  <div>
    <label :for="'#' + _uid + '_searchBox'"></label>
    <input
      :id="_uid + '_searchBox'"
      v-model="searchTerms"
      v-on:keyup="updateSearchTerms"
    />
    <input type="button" value="Search!" v-on:click="updateSearchTerms" />
    <p>You searched for: {{ searchTerms }}</p>
    <hr />
    <h3>Found Recipes</h3>
    <p v-for="item in foundRecipes" :key="'found_' + item.id">
      {{ item.name }}
    </p>
    <hr />
    <h3>All Recipes</h3>
    <p v-for="item in allRecipes" :key="'all_' + item.id">
      {{ item.name }}
    </p>
    <hr />
    <h3>Logs</h3>
    <p v-for="item in logs" v-bind:key="item.id">{{ item.log }}</p>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  name: "SearchRecipe",
  data() {
    console.log(this.$route.params.searchTerms);
    return {
      // searchTerms: this.$route.params.searchTerms,
      logs: [
        { id: 0, log: "Log item 1" },
        { id: 1, log: "Log item 2" }
      ]
      // foundRecipes: this.$store.getters.genericSearch(this.searchTerms)
    };
  },
  computed: {
    allRecipes() {
      return this.$store.getters.allRecipes;
    },
    foundRecipes() {
      return this.$store.getters.genericSearch(this.searchTerms);
    },
    searchTerms: {
      get() {
        return this.$route.params.searchTerms || "";
      },
      set: _.throttle(function(val) {
        if (!val) {
          val = "";
        }
        if (this.$route.params.searchTerms == val) {
          return;
        }
        this.$router.push({
          path: "/s/" + val
        });
        this.writeLog(`Search Terms Changed to ${this.searchTerms}`);
      }, 1000)
    }
  },
  methods: {
    updateSearchTerms: _.debounce(function(e) {
      console.log(this, e);
      // this.foundRecipes = this.$store.getters.genericSearch(this.searchTerms);
    }, 500),
    writeLog(msg) {
      this.logs.push({
        id: this.logs.length,
        log: msg
      });
    }
  }
};
</script>

<style scoped>
div {
  background-color: #ffffff;
  border: 1px solid #cccccc;
  padding: 20px;
  margin-top: 10px;
}
</style>
