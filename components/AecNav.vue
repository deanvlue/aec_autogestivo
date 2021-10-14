<template>
  <b-breadcrumb>
    <b-breadcrumb-item href="https://www.gob.mx/aefcm">
      <b-icon icon="house-door-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
    </b-breadcrumb-item>
    <b-breadcrumb-item class="d-none d-md-block" href="https://laescuelaencasa.mx/escuela-en-casa/niveles">...</b-breadcrumb-item>
    <b-breadcrumb-item class="d-none d-md-block" :href="breadcrumbPath()">{{ breadcrumbName() }}</b-breadcrumb-item>
    <b-breadcrumb-item class="d-block d-md-none" :href="breadcrumbPath()">...</b-breadcrumb-item>
    <b-breadcrumb-item active>Reforzamiento del conocimiento</b-breadcrumb-item>
    <b-breadcrumb-item active><img src="img/logo.svg" alt="Aprende en Casa"></b-breadcrumb-item>
  </b-breadcrumb>
</template>

<script>
import { BIconHouseDoorFill } from 'bootstrap-vue'
export default {
  components: {
    BIconHouseDoorFill
  },
  data() {
    return {
      level: "",
    };
  },
  beforeMount() {
    this.level = this.$route.query.nivel;
  },
  methods: {
    breadcrumbName() {
      if(this.level == 'inicial') {
        return 'Educación Inicial';
      }
      if(this.level == 'preescolar') {
        return 'Educación Preescolar';
      }
      if(this.level == 'primaria') {
        return 'Educación Primaria';
      }
      if(this.level == 'secundaria') {
        return 'Educación Secundaria';
      }
      if(this.level == 'eespecial') {
        return 'Educación Especial';
      }
      if(this.level == 'eadultos') {
        return 'Educación para Adultos';
      }

    },
    breadcrumbPath() {
      return `https://laescuelaencasa.mx/escuela-en-casa/niveles/${this.level}`
    }
  }
}
</script>

<style>

#nav-collapse-aec {
  margin-top: 6px;
}
.aec-header {
  background-color: rgba(179, 51, 127, 1) !important;
  color: white;
  width: 100%;
  padding-top: 5px;
  padding-bottom: 10px;
  min-height: 63px;
  text-align: center;
}
.breadcrumb {
  background-color: rgba(179, 51, 127, 1);
  border-radius: 0;
}
.breadcrumb-item a {
  color: #ffffff;
}
.breadcrumb-item.active {
  font-weight: bold;
  color: #ffffff;
}
.breadcrumb-item + .breadcrumb-item::before {
  color: #ffffff;
  content: ">";
}
.breadcrumb-item:last-child {
  right: 20px;
  position: absolute;
  margin-top: -5px;
}
.breadcrumb-item:last-child::before {
  content: "";
}
@media (max-width: 812px) {      
  .breadcrumb-item:last-child {
    display: none;
  }       
}
</style>
