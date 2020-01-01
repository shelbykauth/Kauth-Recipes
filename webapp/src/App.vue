<template>
  <div id="app">
    <div id="header">
      <div id="nav">
        <span v-for="(link, id) in headLinks" v-bind:key="id">
          <span v-if="id !== 0"> | </span>
          <router-link v-bind:to="link.url" v-bind:exact="link.exact">{{
            link.name
          }}</router-link>
        </span>
      </div>
    </div>
    <div id="sidebar">
      <search-recipe />
    </div>
    <div id="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import SearchRecipe from "./views/SearchRecipe.vue";
export default {
  name: "App",
  components: {
    SearchRecipe
  },
  data: function() {
    return {
      headLinks: [
        { url: "/", name: "Home", exact: true },
        { url: "/about", name: "About" },
        // { url: "/login", name: "Login" },
        { url: "/s/", name: "Search", exact: false }
        // { url: "/add", name: "Add Recipe" }
      ]
    };
  }
};
</script>
<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-active {
      color: #42b983;
    }
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
#sidebar {
  // width: 40%;
  float: left;
  display: inline-block;
}
#content {
  max-width: 70%;
  min-width: 30em;
  display: inline-block;
  // width: 70%;
  // float: left;
}
</style>
