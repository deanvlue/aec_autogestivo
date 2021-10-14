<template>
  <client-only>

    <b-navbar toggleable="lg" type="dark" class="aec-navbar" :class="this.$parent.backgroundClass">
      <b-navbar-nav class="pr-3">
        <b-nav-item :href="backward(level)" style="color:white;font-size:25px">
          <b-icon-arrow-left></b-icon-arrow-left>
        </b-nav-item>
      </b-navbar-nav>
      <b-navbar-brand href="https://laescuelaencasa.mx/escuela-en-casa/niveles/index.html">
        <img src="img/logo.svg" alt="Inicio" id="logo">
      </b-navbar-brand>

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown v-for="(level, levelKey) in items" :key="levelKey" :text="level.name" right>
            <b-dropdown-item v-for="(sublevel, sublevelKey) in level.sublevels" :key="sublevelKey" @click.prevent="getLevel(level.key, sublevel.key)">{{ sublevel.name }}</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

  </client-only>
</template>

<script>
import _ from "lodash"

export default {
  props: ["items", "level"],
  data() {
    return {
    }
  },
  methods: {
    backward() {
      if(this.$parent.originLevel == 'einicial') {
        return `https://laescuelaencasa.mx/escuela-en-casa/niveles/inicial` 
      }

      return `https://laescuelaencasa.mx/escuela-en-casa/niveles/${this.$parent.originLevel}`
    },
    getLevel(levelKey, sublevelKey) {

      this.$parent.levelKey = levelKey
      this.$parent.sublevelKey = sublevelKey

      this.$parent.rearrangeLevel(levelKey)

      let fLevel = this.$parent.levels.find((level) => {
        return level.key === levelKey
      })

      if(typeof fLevel === 'undefined'){return}

      this.$parent.color.color = fLevel.color
      this.$parent.backgroundClass = fLevel.gClass
    }
  }
}
</script>

<style>
#logo {
  width: auto;
  height: 30px;
  margin-top: 10px;
}
/*
 * Navbar
 */
.aec-navbar {
  background: rgb(179, 51, 127);
  background: linear-gradient(
    90deg,
    rgba(179, 51, 127, 1) 0%,
    rgba(198, 79, 155, 1) 34%,
    rgba(179, 51, 127, 1) 79%,
    rgba(152, 25, 100, 1) 98%
  );
  color: white;
  padding: 0 1rem 0 1rem;
  height: 57px;
}
.aec-navbar .navbar-brand {
  padding-top: 0;
  margin-left: 1rem;
}
.navbar-light .navbar-toggler {
  color: rgba(255, 255, 255, 1);
  border-color: rgba(255, 255, 255, 1);
}
.aec-navbar .navbar-collapse {
  z-index: 1;
  text-align: center;
}
.aec-navbar .dropdown-item:hover {
  background-color: #fff1f6;
}
.aec-navbar .dropdown-item:active {
  background-color: #da3773;
}
@media (max-width: 480px) {
  #logo {
    height: 40px;
  }
}
@media (max-width: 360px) {
  #logo {
    height: 30px;
  }
}
@media (max-width: 991px) {
  #nav_collapse {
    background: inherit;
    -webkit-box-shadow: 0px 5px 13px -2px rgba(0,0,0,0.38); 
    box-shadow: 0px 15px 13px -2px rgba(0,0,0,0.38);
  }            
  .aec-navbar .dropdown-item {
    text-align: center;
  }
}
</style>
