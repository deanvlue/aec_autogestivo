<template>
  <div v-if="content">
    <Navbar />

    <HeroBanner />

    <Cards :content="content" />

    <backtotop></backtotop>

    <FooterMain />
  </div>
</template>

<script>
import Cards from "@/components/Cards";
import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import FooterMain from "@/components/FooterMain";
import backtotop from "@/components/BackToTop";
import _ from "lodash";

export default {
  components: {
    Cards,
    Navbar,
    HeroBanner,
    FooterMain,
    backtotop,
  },
  data() {
    return {
      items: [],
      level: {},
      title: "",
      subtitle: "",
      levels: [
        {
          key: "einicial",
          name: "Inicial",
          color: "#ba965c",
          gClass: "grad-ini",
          order: 1,
        },
        {
          key: "preescolar",
          name: "Preescolar",
          color: "#95c11f",
          gClass: "grad-pre",
          order: 2,
        },
        {
          key: "primaria",
          name: "Primaria",
          color: "#9a2441",
          gClass: "grad-prim",
          order: 3,
        },
        {
          key: "secundaria",
          name: "Secundaria",
          color: "#a03777",
          gClass: "grad-sec",
          order: 4,
        },
        {
          key: "eespecial",
          name: "Especial",
          color: "#da3773",
          gClass: "grad-esp",
          order: 5,
        },
        {
          key: "eadultos",
          name: "SEBA",
          color: "#21c684",
          gClass: "grad-seba",
          order: 6,
        },
      ],
      backgroundColor: {
        backgroundColor: "",
      },
      color: {
        color: "",
      },
      backgroundClass: "",
      content: [
        {
          id: 1,
          name: "Segundo ciclo 3° y 4° de primaria",
          sessions: [
            {
              id: 1,
              name: "¿Cómo puede nuestro cuerpo realizar movimientos?",
              link: "https://link.to/map",
            },
            {
              id: 2,
              name: "¿Cómo nos alimentamos? ",
              link: "https://link.to/map",
            },
            {
              id: 3,
              name: "Te presento mi lugar de origen",
              link: "https://link.to/map",
            },
            {
              id: 4,
              name: "¿Se respetan los derechos de las niñas y los niños?",
              link: "https://link.to/map",
            },
            {
              id: 5,
              name: "¿Quién se mueve? ¿la luna o el sol?",
              link: "https://link.to/map",
            },
          ],
        },
        {
          id: 2,
          name: "Tercer ciclo 5° y 6° de primaria",
          sessions: [
            {
              id: 1,
              name: "¿Es tan nutritivo como parece?",
              link: "https://link.to/map",
            },
            {
              id: 2,
              name: "¿Pesa y mide lo mismo?",
              link: "https://link.to/map",
            },
            {
              id: 3,
              name: "Conociendo mi comunidad a través de los datos",
              link: "https://link.to/map",
            },
            {
              id: 4,
              name: "¿Por qué reciclar?",
              link: "https://link.to/map",
            },
            {
              id: 5,
              name: "¿Cómo ha cambiado el territorio? Enlace a mapa de 002Enlace a mapa de 003",
              link: "https://link.to/map",
            },
          ],
        },
        {
          id: 3,
          name: "Secundaria 1°, 2° y 3° ",
          sessions: [
            {
              id: 1,
              name: "La vida en los tiempos de Charles Darwin",
              link: "https://link.to/map",
            },
            {
              id: 2,
              name: "Resuelve con ecuaciones lo que enfermó a Tito",
              link: "https://link.to/map",
            },
            {
              id: 3,
              name: "El árbol genealógico de mi música favorita",
              link: "https://link.to/map",
            },
            {
              id: 4,
              name: "Las selfies de la Tierra ",
              link: "https://link.to/map",
            },
            {
              id: 5,
              name: "Y tú, ¿construyes paz? ",
              link: "https://link.to/map",
            },
          ],
        },
      ],
    };
  },
  beforeMount() {},
  mounted() {},
  methods: {
    async fetchData(levelKey) {
      try {
        if (window.location.hostname == "localhost") {
          URL = "http://localhost:3000/escuela-en-casa/fichas/data/fichas.json";
        } else {
          URL = "https://laescuelaencasa.mx/data/fichas/fichas.json";
        }
        //URL = "https://www.aprendeencasa.mx/data/fichas/fichas.json"

        const response = await this.$axios.$get(URL);

        this.rearrangeJsonObject(response, levelKey);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style>
body {
  font-family: "Montserrat";
  /*font-family: "Nunito", "Helvetica Neue", Helvetica, Arial, sans-serif;*/
  font-size: 18px;
  line-height: 1.428571429;
  color: #404041;
  background: #faf7f2;
  background: #faf7f2 url("~@/static/img/bg.jpg");
  background-size: 100% auto;
}
.btn-info {
  color: #fff;
  background-color: #da3773;
  border-color: #da3773;
}
.btn-info:not(:disabled):not(.disabled):active {
  color: #fff;
  background-color: #d22f6b;
  border-color: #d22f6b;
}
.btn-info:focus,
.btn-info.focus {
  color: #fff;
  background-color: #d22f6b;
  border-color: #d22f6b;
}
.btn-info:hover {
  color: #fff;
  background-color: #d22f6b;
  border-color: #d22f6b;
}
/*
 * Gradients
 */
.grad-pre {
  background: rgb(88, 121, 0);
  background: -moz-linear-gradient(
    90deg,
    rgba(88, 121, 0, 1) 1%,
    rgba(149, 193, 31, 1) 47%,
    rgba(87, 119, 0, 1) 98%
  ) !important;
  background: -webkit-linear-gradient(
    90deg,
    rgba(88, 121, 0, 1) 1%,
    rgba(149, 193, 31, 1) 47%,
    rgba(87, 119, 0, 1) 98%
  ) !important;
  background: linear-gradient(
    90deg,
    rgba(88, 121, 0, 1) 1%,
    rgba(149, 193, 31, 1) 47%,
    rgba(87, 119, 0, 1) 98%
  ) !important;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#587900",endColorstr="#577700",GradientType=1);
}
.grad-prim {
  background: rgb(126, 18, 44);
  background: -moz-linear-gradient(
    90deg,
    rgba(126, 18, 44, 1) 1%,
    rgba(154, 36, 65, 1) 47%,
    rgba(126, 0, 31, 1) 98%
  ) !important;
  background: -webkit-linear-gradient(
    90deg,
    rgba(126, 18, 44, 1) 1%,
    rgba(154, 36, 65, 1) 47%,
    rgba(126, 0, 31, 1) 98%
  ) !important;
  background: linear-gradient(
    90deg,
    rgba(126, 18, 44, 1) 1%,
    rgba(154, 36, 65, 1) 47%,
    rgba(126, 0, 31, 1) 98%
  ) !important;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#7e122c",endColorstr="#7e001f",GradientType=1);
}
.grad-seba {
  background: rgb(12, 129, 82);
  background: -moz-linear-gradient(
    90deg,
    rgba(12, 129, 82, 1) 1%,
    rgba(33, 198, 132, 1) 47%,
    rgba(10, 133, 84, 1) 98%
  ) !important;
  background: -webkit-linear-gradient(
    90deg,
    rgba(12, 129, 82, 1) 1%,
    rgba(33, 198, 132, 1) 47%,
    rgba(10, 133, 84, 1) 98%
  ) !important;
  background: linear-gradient(
    90deg,
    rgba(12, 129, 82, 1) 1%,
    rgba(33, 198, 132, 1) 47%,
    rgba(10, 133, 84, 1) 98%
  ) !important;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#0c8152",endColorstr="#0a8554",GradientType=1);
}
.grad-ini {
  background: rgb(135, 100, 43);
  background: -moz-linear-gradient(
    90deg,
    rgba(135, 100, 43, 1) 1%,
    rgba(186, 150, 92, 1) 47%,
    rgba(135, 100, 43, 1) 98%
  ) !important;
  background: -webkit-linear-gradient(
    90deg,
    rgba(135, 100, 43, 1) 1%,
    rgba(186, 150, 92, 1) 47%,
    rgba(135, 100, 43, 1) 98%
  ) !important;
  background: linear-gradient(
    90deg,
    rgba(135, 100, 43, 1) 1%,
    rgba(186, 150, 92, 1) 47%,
    rgba(135, 100, 43, 1) 98%
  ) !important;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#87642b",endColorstr="#87642b",GradientType=1);
}
.grad-esp {
  background: rgb(158, 24, 73);
  background: -moz-linear-gradient(
    90deg,
    rgba(158, 24, 73, 1) 1%,
    rgba(218, 55, 115, 1) 47%,
    rgba(171, 33, 84, 1) 98%
  ) !important;
  background: -webkit-linear-gradient(
    90deg,
    rgba(158, 24, 73, 1) 1%,
    rgba(218, 55, 115, 1) 47%,
    rgba(171, 33, 84, 1) 98%
  ) !important;
  background: linear-gradient(
    90deg,
    rgba(158, 24, 73, 1) 1%,
    rgba(218, 55, 115, 1) 47%,
    rgba(171, 33, 84, 1) 98%
  ) !important;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#9e1849",endColorstr="#ab2154",GradientType=1);
}
.grad-sec {
  background: rgb(120, 33, 86);
  background: -moz-linear-gradient(
    90deg,
    rgba(120, 33, 86, 1) 1%,
    rgba(160, 55, 119, 1) 47%,
    rgba(115, 21, 78, 1) 98%
  ) !important;
  background: -webkit-linear-gradient(
    90deg,
    rgba(120, 33, 86, 1) 1%,
    rgba(160, 55, 119, 1) 47%,
    rgba(115, 21, 78, 1) 98%
  ) !important;
  background: linear-gradient(
    90deg,
    rgba(120, 33, 86, 1) 1%,
    rgba(160, 55, 119, 1) 47%,
    rgba(115, 21, 78, 1) 98%
  ) !important;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#782156",endColorstr="#73154e",GradientType=1);
}
</style>
