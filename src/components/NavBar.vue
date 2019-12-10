<template>
  <div>
    <nav class="navbar">
      <ul class="navbar_menu">
        <div>
          <router-link class="logo" :to="{ name: 'home' }">wattpad</router-link>
        </div>
        <div class="navbar-list">
          <li>
            <router-link class="link" :to="{ name: 'home' }">HOME</router-link>
          </li>
          <li>
            <router-link class="link" :to="{ name: 'register' }"
              >Sign Up</router-link
            >
          </li>
          <li>
            <router-link class="link" :to="{ name: 'loginPage' }"
              >Sign In</router-link
            >
          </li>
        </div>
      </ul>
    </nav>
  </div>
</template>
<style lang="stylus" scoped>
.navbar_menu {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  align-items: center;
  background-color:#0E99E7;
  width: 100%;
  height: 100px;
}
.logo {
    padding-bottom: 50px;
    color:white;
    font-style: italic;
    font-size: 30px;
    font-weight: bold;
    margin-left: 50px;

}
.navbar-list{
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  padding-right: 30px;
}
.navbar-list li{
  margin-left: 50px;
}
.link{

    color:white;
    font-weight: bold;
    font-size: 12px;
    font-style:italic;
    box-shadow:10px;
}
img{
    width:100%;
}
</style>
