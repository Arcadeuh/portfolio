<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">

@font-face {
    font-family: 'ABeeZee';
    src: url(assets/fonts/ABeeZee-Regular.ttf) format('truetype');
}

@font-face {
    font-family: 'Bungee';
    src: url(assets/fonts/Bungee-Regular.ttf) format('truetype');
}

#app {
  font-family: 'ABeeZee';
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

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
