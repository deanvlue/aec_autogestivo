<template>
  <div class="card mb-3">
    <!--div class="pdf">
      <object :data="url + link" type="application/pdf" width="270" height="200">
        <img src="img/pdf.svg" alt="PDF" />
      </object>
    </div-->
    <h2 class="name">{{ title }}</h2>
    <div class="title">{{ subtitle }}</div>
    <div class="actions">
      <div class="action-btn">
        <button @click="windowOpen(link)">Ver</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title", "subtitle", "link"],
  data() {
    return {
      url: "https://laescuelaencasa.mx/data/fichas/",
    };
  },
  methods: {
    windowOpen(link) {
      window.open(link);
    },
  },
};
</script>
<style>
.card {
  background-color: #fff;
  width: 290px;
  max-width: 350px;
  border-radius: 1rem;
  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.1);
  position: relative;
  justify-self: center;
}
.card .pdf object {
  width: 100%;
}
.card .banner {
  height: 11rem;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  box-sizing: border-box;
}
.card h2.name {
  text-align: center;
  padding: 2rem 2rem 2rem;
  margin: 0;
  font-size: 1.25rem;
  word-wrap: initial;
}
.card .title {
  color: #a0a0a0;
  font-size: 0.85rem;
  text-align: center;
  padding: 0 2rem 1.2rem;
}
.card .actions {
  padding: 0 2rem 1.2rem;
  display: flex;
  flex-direction: column;
  order: 99;
  text-align: center;
}
.card .actions .action-btn button {
  color: #ffffff;
  font: inherit;
  font-weight: bold;
  background-color: #da3773;
  width: 90%;
  border: none;
  padding: 0.5rem;
  outline: none;
  box-sizing: border-box;
  border-radius: 1rem;
  transition: background-color 100ms ease-in-out,
    transform 200ms cubic-bezier(0.18, 0.89, 0.32, 1.28);
  -webkit-box-shadow: 0px 5px 13px -2px rgba(0, 0, 0, 0.52);
  box-shadow: 0px 5px 13px -2px rgba(0, 0, 0, 0.52);
}
.card .actions .action-btn button:hover {
  background-color: #da3773;
  transform: scale(1.1);
}
.card .actions .action-btn button:active {
  background-color: #da3773;
  transform: scale(1);
}
.h5 {
  word-break: normal;
  font-size: 0.1rem;
}
</style>