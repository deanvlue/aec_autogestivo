<template lang="">
  <div>
    <b-container fluid>
      
      <h4>Seleccione un ciclo:</h4>
        <b-tabs pills content-class="mt-4 mb-4" align="center">
          <b-tab v-for="(c, idx) in content" :key="c.id" :title="c.name">
              <b-tabs pills content-class="mt-4 mb-4" align="center">
                    <div class="cards pt-3">
                      <Card v-for="(session, idx) in c.sessions" :key="idx" :title="session.name" :link="session.link" />
                    </div>
              </b-tabs>
          </b-tab>
        </b-tabs>      
    </b-container>

  </div>
</template>
<script>
import Card from "@/components/Card";
import _ from "lodash";

/*
                <b-tab v-for="(week, weekKey) in subject.weeks" :key="weekKey" :title="week.name">
                    <div class="cards pt-3">
                      <Card v-for="(file, fileKey) in week.files" :key="fileKey" :title="subject.name" :subtitle="week.name" :link="file" />
                    </div>
                </b-tab>*/

export default {
  components: { Card },
  props: ["content"],
  computed: {},
  methods: {
    getColor() {
      return this.$parent.color;
    },
  },
};
</script>
<style>
/*
 * Pills
 */
.nav-pills .nav-link {
  color: #2c374b !important;
  border-radius: 4px;
  background-color: #ffffff;
  -webkit-box-shadow: 1px 2px 6px 1px rgba(0, 0, 0, 0.2);
  box-shadow: 1px 2px 6px 1px rgba(0, 0, 0, 0.2);
  text-align: center;
}
.nav-pills .nav-item {
  margin-right: 10px;
  margin-bottom: 10px;
}
.nav-pills .nav-link.active {
  background-color: #da3773;
  color: #eee !important;
}
a[role="tab"] {
  color: #000 !important;
}
.tabs h2 {
  font-weight: 400 !important;
  font-weight: bold !important;
  font-size: 25px;
}

/* Period. A column */
.periods {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.period {
  display: flex;
  flex-direction: column;
}

/*
 * Cards
 */
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  grid-gap: 1rem;
}
@media (min-width: 320px) and (max-width: 480px) {
  .nav-pills .nav-item {
    width: 70%;
    margin-bottom: 10px;
  }
}
@media (max-width: 900px) {
  .tab-pane .row {
    display: block;
  }
}
</style>