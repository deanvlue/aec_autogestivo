<template>
  <div>
    <header>
      <b-navbar toggleable="md" type="dark" variant="gob" fixed="top">
        <b-container>
          <b-navbar-brand href="#">
            <img src="~/static/img/logoheader.svg" />
          </b-navbar-brand>

          <b-navbar-toggle target="nav-collapse-gob" />

          <b-collapse id="nav-collapse-gob" is-nav>
            <b-navbar-nav />

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-item href="https://coronavirus.gob.mx/" target="_blank">
                Información importante Coronavirus COVID-19
              </b-nav-item>
              <b-nav-item href="https://www.gob.mx/tramites" target="_blank">
                Trámites
              </b-nav-item>
              <b-nav-item href="https://www.gob.mx/gobierno" target="_blank">
                Gobierno
              </b-nav-item>
              <b-nav-item href="#"> <b-icon icon="search" /> </b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-container>
      </b-navbar>

      <!-- subheader -->
      <b-navbar toggleable="md" type="dark" variant="subgob" class="sub-navbar">
        &nbsp;
      </b-navbar>
    </header>
  </div>
</template>

<script>
export default {}
</script>

<style>
.bg-gob {
  background-color: #0c231e;
}
.bg-subgob {
  background-color: #13322b;
}
.nav-link {
  color: #fff !important;
}

.navbar-brand > img {
  height: 29px;
  width: auto;
}

.sub-navbar {
  margin-top: 42px;
  width: 100%;
  z-index: 1029;
}
</style>
