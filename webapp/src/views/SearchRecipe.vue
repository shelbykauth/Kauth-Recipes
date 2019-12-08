<template>
  <div>
    <label for="#searchBox"></label>
    <input id="searchBox" v-model="searchTerms" v-on:keyup="pushRoute" />
    <input type="button" value="Search!" v-on:click="pushRoute" />
    <p>You searched for: {{ searchTerms }}</p>
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
    return {
      searchTerms: this.$route.params.searchTerms,
      logs: [
        { id: 0, log: "Log item 1" },
        { id: 1, log: "Log item 2" }
      ]
    };
  },
  methods: {
    pushRoute: _.debounce(function() {
      if (this.$route.params.searchTerms == this.searchTerms) {
        return;
      }
      this.$router.push({
        path: "/s/" + this.searchTerms
      });
      this.writeLog(`Search Terms Changed to ${this.searchTerms}`);
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
