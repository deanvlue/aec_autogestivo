<template>
  <div v-if="content">
    <Navbar :items="items" :level="originLevel" />

    <HeroBanner :title="level.name" :subtitle="getSublevelName(sublevelKey)" />

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
      sublevels: [
        // Inicial
        { key: "lactante", name: "Lactante", order: 1 },
        { key: "maternal", name: "Maternal", order: 2 },
        // Preescolar, primaria, secundaria
        { key: "1", name: "1°", order: 3 },
        { key: "2", name: "2°", order: 4 },
        { key: "3", name: "3°", order: 5 },
        { key: "4", name: "4°", order: 6 },
        { key: "5", name: "5°", order: 7 },
        { key: "6", name: "6°", order: 8 },
        // Especial
        { key: "einma", name: "Inicial Maternal", order: 9 },
        { key: "preescolar", name: "Preescolar", order: 10 },
        { key: "primariabaja", name: "Primaria Baja", order: 11 },
        { key: "primariaalta", name: "Primaria Alta", order: 12 },
        { key: "secundaria", name: "Secundaria", order: 13 },
        { key: "laboral", name: "Laboral", order: 14 },
        // SEBA
        { key: "primaria_inicial", name: "Primaria Inicial", order: 15 },
        { key: "primaria_avanzado", name: "Primaria Avanzado", order: 16 },
        { key: "secundaria_inicial", name: "Secundaria Inicial", order: 17 },
        { key: "secundaria_avanzado", name: "Secundaria Avanzado", order: 18 },
        { key: "primaria", name: "Primaria", order: 19 },
        { key: "inicial", name: "Secundaria Inicial", order: 20 },
        { key: "avanzado", name: "Secundaria Avanzado", order: 21 },
      ],
      subjects: [
        { key: "sa", name: "Salud y Ambiente", order: 1 },
        { key: "lc", name: "Lenguaje y Comunicación", order: 2 },
        { key: "pm", name: "Pensamiento Matemático", order: 3 },
        { key: "ef", name: "Educación Física", order: 4 },
        { key: "es", name: "Español", order: 5 },
        { key: "ar", name: "Artes", order: 6 },
        { key: "ci", name: "Ciencias", order: 7 },
        { key: "fc", name: "Formación Cívica y Ética", order: 8 },
        { key: "ma", name: "Matemáticas", order: 9 },
        { key: "vs", name: "Vida Saludable", order: 10 },
        { key: "ge", name: "Geografía", order: 11 },
        { key: "hi", name: "Historia", order: 12 },
        { key: "te", name: "Tecnologías", order: 13 },
        { key: "ar", name: "Arte", order: 14 },
        { key: "se", name: "Socioemocional", order: 15 },
        { key: "lc", name: "Lengua y Comunicación", order: 16 },
        { key: "cr", name: "Cálculo y Resolución de Problemas", order: 17 },
        { key: "sa", name: "Salud y Ambiente", order: 18 },
        { key: "fs", name: "Familia, Comunidad y Sociedad", order: 19 },
        {
          key: "hc",
          name: "Habilidades Socioemocionales y Creatividad",
          order: 20,
        },
        { key: "in", name: "Integral", order: 20 },
        { key: "pr", name: "Proyecto", order: 20 },
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
  mounted() {
    this.fetchData(this.levelKey);
    this.getLevelColor(this.levelKey);
  },
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
    abreviaturaNum(number) {
      // returns 1er cuando se pasa 1 y sucesivamente para todos los números
      var abreviatura = [
        "mo.",
        "er.",
        "do.",
        "er.",
        "to.",
        "to.",
        "to.",
        "mo.",
        "vo.",
        "no.",
        "mo.",
      ];
      return number + abreviatura[number % 10];
    },
    getSublevelName(sublevelKey) {
      let sublevel = this.sublevels.find((sublevel) => {
        return sublevel.key === sublevelKey;
      });

      if (typeof sublevel === "undefined" || sublevel === "") {
        return "";
      }

      return sublevel.name;
    },
    filteredLevel(levelKey) {
      this.level = _.find(this.items, ["key", levelKey]);
    },
    getLevelColor(levelKey) {
      let fLevel = this.levels.find((level) => {
        return level.key === levelKey;
      });

      if (typeof fLevel === "undefined") {
        return;
      }

      this.color.color = fLevel.color;
      this.backgroundClass = fLevel.gClass;
    },
    subjectName(name, levelKey, sublevelKey, subjectKey) {
      // Iniicial
      if (levelKey == "einicial") {
      }
      // Preescolar
      if (levelKey == "preescolar") {
        if (
          (sublevelKey == "1" || sublevelKey == "2" || sublevelKey == "3") &&
          subjectKey == "espanol"
        ) {
          return "Lenguaje y Comunicación";
        }
        if (
          (sublevelKey == "1" || sublevelKey == "2" || sublevelKey == "3") &&
          subjectKey == "matematicas"
        ) {
          return "Pensamiento Matemático";
        }
        if (
          (sublevelKey == "1" || sublevelKey == "2" || sublevelKey == "3") &&
          subjectKey == "ciencias"
        ) {
          return "Exploración y Comprensión del Mundo Natural y Social";
        }
      }
      // Primaria
      if (levelKey == "primaria") {
        if (
          (sublevelKey == "1" || sublevelKey == "2") &&
          subjectKey == "ciencias"
        ) {
          return "Conocimiento del Medio";
        }
        if (
          (sublevelKey == "3" ||
            sublevelKey == "4" ||
            sublevelKey == "5" ||
            sublevelKey == "6") &&
          subjectKey == "ciencias"
        ) {
          return "Ciencias Naturales";
        }
      }
      // Secundaria
      if (levelKey == "secundaria") {
        if (sublevelKey == "1" && subjectKey == "ciencias") {
          return "Iniciar Biología con aprendizajes clave de Ciencias Naturales";
        }
      }
      // Especial
      if (levelKey == "eespecial") {
        if (sublevelKey == "preescolar" && subjectKey == "espanol") {
          return "Lenguaje y Comunicación";
        }
        if (sublevelKey == "preescolar" && subjectKey == "matematicas") {
          return "Pensamiento Matemático";
        }
        if (sublevelKey == "preescolar" && subjectKey == "ciencias") {
          return "Exploración y Comprensión del Mundo Natural y Social";
        }
        if (sublevelKey == "primariabaja" && subjectKey == "ciencias") {
          return "Conocimiento del Medio";
        }
      }
      // SEBA
      if (levelKey == "eadultos") {
        if (
          (sublevelKey == "primaria_inicial" ||
            sublevelKey == "primaria_avanzado" ||
            sublevelKey == "secundaria_inicial") &&
          subjectKey == "matematicas"
        ) {
          return "Cálculo y Resolución de Problemas";
        }
        if (
          (sublevelKey == "primaria_inicial" ||
            sublevelKey == "primaria_avanzado" ||
            sublevelKey == "secundaria_inicial") &&
          subjectKey == "ciencias"
        ) {
          return "Salud y Ambiente";
        }
      }

      return name;
    },
    rearrangeJsonObject(json, levelKey) {
      let items = [];
      let item = {};
      let itemSublevel = {};
      let itemSubject = {};
      let itemWeek = {};
      let _this = this;

      _.forEach(json, function (level, key) {
        item = {};
        item.key = key;
        item.name = key;
        item.sublevels = [];
        item.order = "";
        item.color = "";
        item.backgroundClass = "";

        let fLevel = _this.levels.find((level) => {
          return level.key === key;
        });

        if (typeof fLevel != "undefined") {
          item.name = fLevel.name;
          item.order = fLevel.order;
          item.color = fLevel.color;
          item.backgroundClass = fLevel.gClass;
        }

        /*
         * Sublevels
         */
        _.forEach(level, function (subjects, sublevelKey) {
          itemSublevel = {};
          itemSublevel.key = sublevelKey;
          itemSublevel.name = sublevelKey;
          itemSublevel.order = "";
          itemSublevel.subjects = [];

          let fSubLevel = _this.sublevels.find((subLevel) => {
            return subLevel.key === sublevelKey;
          });

          if (typeof fSubLevel != "undefined") {
            itemSublevel.name = fSubLevel.name;
            itemSublevel.order = fSubLevel.order;
          }

          /*
           * Subjects
           */
          _.forEach(subjects, function (weeks, subjectKey) {
            itemSubject = {};
            itemSubject.key = subjectKey;
            itemSubject.name = "";
            itemSubject.order = "";
            itemSubject.weeks = [];

            let fSubject = _this.subjects.find((subject) => {
              return subject.key === subjectKey;
            });

            if (typeof fSubject !== "undefined") {
              itemSubject.name = _this.subjectName(
                fSubject.name,
                levelKey,
                sublevelKey,
                subjectKey
              );
              itemSubject.order = fSubject.order;
            }

            /*
             * Weeks
             */
            _.forEach(weeks, function (files, weekKey) {
              itemWeek = {};
              itemWeek.key = weekKey;
              itemWeek.id =
                "s" +
                (weekKey.length <= 2 ? "0" : "") +
                weekKey.slice(1, weekKey.length);
              //console.log(itemWeek.id)
              itemWeek.name = weekKey;
              itemWeek.subtitle = "";
              itemWeek.files = [];

              itemWeek.name =
                _this.abreviaturaNum(weekKey.slice(1, weekKey.length)) +
                " Periodo";

              /*
               * Order files
               */
              if (files.length > 0) {
                itemWeek.files = files.sort();
              }

              //itemWeek.files = files

              itemSubject.weeks.push(itemWeek);
            });

            /*
             * Order weeks
             */
            itemSubject.weeks = _.orderBy(itemSubject.weeks, ["id"], ["asc"]);

            itemSublevel.subjects.push(itemSubject);
          });

          /*
           * Order subjects
           */
          itemSublevel.subjects = _.orderBy(
            itemSublevel.subjects,
            ["order"],
            ["asc"]
          );

          item.sublevels.push(itemSublevel);
        });

        /*
         * Order sublevels
         */
        item.sublevels = _.orderBy(item.sublevels, ["order"], ["asc"]);

        items.push(item);
      });

      this.items = _.orderBy(items, ["order"], ["asc"]);
      this.level = _.find(this.items, ["key", this.levelKey]);
    },
    rearrangeLevel(levelKey) {
      let fLevel = _.filter(this.items, ["key", levelKey]);
      let _this = this;

      if (typeof fLevel === "undefined") {
        return;
      }

      _.forEach(fLevel, function (level) {
        _.forEach(level.sublevels, function (sublevel) {
          _.forEach(sublevel.subjects, function (subject) {
            subject.name = _this.subjectName(
              subject.name,
              levelKey,
              sublevel.key,
              subject.key
            );
          });
        });
      });

      this.level = fLevel[0];
    },
  },
  head() {
    return {};
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
