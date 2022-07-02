<template>
  <div class="columns">
    <div class="side column is-3">
      <img
        src="../assets/logo.png"
        class="menu-top pt-5 is-flex is-justify-content-center"
      />
      <nav>
        <aside class="menu">
          <ul class="menu-list">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/api/employee">Funcionários</router-link></li>
            <li><router-link to="/api/manager">Gerente</router-link></li>
            <li><router-link to="/api/activities">Atividades</router-link></li>
            <li><router-link to="/api/cotations">Cotações</router-link></li>
            <li><router-link to="/api/calculator">Calculadora</router-link></li>
          </ul>
        </aside>
      </nav>
    </div>
    <div class="column is-9 conteudo">
      <router-view> </router-view>
    </div>
  </div>
</template>

<style lang="scss">
@import "~bulma/bulma.sass";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.columns {
  margin: 0 !important;
}

li {
  margin-top: 10px;
}
nav {
  padding: 10px;
  a {
    font-weight: bold;
    color: #ffffff;
    &.router-link-exact-active {
      opacity: 70%;
      background-color: #3e3e3e;
    }
  }
}
.side {
  background-image: url(".././assets/sidebackground.png");
  height: 100vh;
  box-shadow: 2px 6px 10px rgb(48, 48, 48);
}
.menu-list a {
  border-radius: 2px;
  color: rgb(255, 255, 255);
  display: block;
  padding: 0.5em 0.75em;
}

.menu-top img {
  width: 340px;
}

.menu-top {
  padding-bottom: 15px;
  width: 350px;
  color: rgb(0, 0, 0);
}
</style>
