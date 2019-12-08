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
    <div id="sidebar"></div>
    <div id="content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
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
</style>
