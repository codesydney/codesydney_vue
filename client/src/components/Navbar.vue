<template>
  <div>
    <div id="myNav" :class="{ navbar_open: showNavbar, navbar: !showNavbar }">
      <div class="closebtn" @click="showNavbar = !showNavbar">
        <font-awesome-icon :icon="['fa', 'times']" class="navbar__times" />
      </div>
      <div class="navbar-content">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="openbtn">
      <font-awesome-icon
        :icon="['fa', 'bars']"
        class="navbar__bars"
        @click="showNavbar = !showNavbar"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showNavbar: false
    };
  }
};
</script>

<style scoped>
.navbar {
  height: 0%;
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-y: hidden;
  transition: 0.3s;
  background-color: #2b4c72;
}

.navbar_open {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-y: hidden;
  transition: 0.5s;
  background-color: #2b4c72;
}

.navbar-content {
  position: relative;
  top: 25%;
  width: 100%;
  font-size: 2rem;
  text-align: center;
  margin-top: 30px;
}

.navbar_open ul li {
  list-style: none;
  color: white;
  text-align: center;
}

.navbar_open ul li:hover {
  cursor: pointer;
  color: yellow;
}

.navbar a {
  padding: 8px;
  text-decoration: none;
  color: white;
  display: block;
  transition: 0.3s;
}

.navbar a:hover,
.navbar a:focus {
  color: #f1f1f1;
}

.navbar_open .closebtn {
  position: absolute;
  top: 20px;
  left: 45px;
  font-size: 2rem;
  color: white;
  cursor: pointer;
}

.openbtn {
  top: 20px;
  left: 45px;
  width: 30px;
  height: 25px;
  font-size: 2rem;
  cursor: pointer;
}

@media screen and (max-height: 450px) {
  .navbar_open {
    overflow-y: auto;
  }
  .navbar_open a {
    font-size: 20px;
  }
  .navbar_open .closebtn {
    font-size: 40px;
    width: 30px;
    height: 25px;
    top: 15px;
    right: 35px;
  }
}
</style>
