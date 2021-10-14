exports.ids = [1];
exports.modules = Array(36).concat([
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {/* harmony import */ var _components_Cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62);
/* harmony import */ var _components_HeroBanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63);
/* harmony import */ var _components_FooterMain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64);
/* harmony import */ var _components_BackToTop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    Cards: _components_Cards__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
    Navbar: _components_Navbar__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    HeroBanner: _components_HeroBanner__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],
    FooterMain: _components_FooterMain__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],
    backtotop: _components_BackToTop__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]
  },

  data() {
    return {
      items: [],
      level: {},
      title: "",
      subtitle: "",
      levels: [{
        key: "einicial",
        name: "Inicial",
        color: "#ba965c",
        gClass: "grad-ini",
        order: 1
      }, {
        key: "preescolar",
        name: "Preescolar",
        color: "#95c11f",
        gClass: "grad-pre",
        order: 2
      }, {
        key: "primaria",
        name: "Primaria",
        color: "#9a2441",
        gClass: "grad-prim",
        order: 3
      }, {
        key: "secundaria",
        name: "Secundaria",
        color: "#a03777",
        gClass: "grad-sec",
        order: 4
      }, {
        key: "eespecial",
        name: "Especial",
        color: "#da3773",
        gClass: "grad-esp",
        order: 5
      }, {
        key: "eadultos",
        name: "SEBA",
        color: "#21c684",
        gClass: "grad-seba",
        order: 6
      }],
      backgroundColor: {
        backgroundColor: ""
      },
      color: {
        color: ""
      },
      backgroundClass: "",
      content: [{
        id: 1,
        name: "Segundo ciclo 3° y 4° de primaria",
        sessions: [{
          id: 1,
          name: "¿Cómo puede nuestro cuerpo realizar movimientos?",
          link: "https://link.to/map"
        }, {
          id: 2,
          name: "¿Cómo nos alimentamos? ",
          link: "https://link.to/map"
        }, {
          id: 3,
          name: "Te presento mi lugar de origen",
          link: "https://link.to/map"
        }, {
          id: 4,
          name: "¿Se respetan los derechos de las niñas y los niños?",
          link: "https://link.to/map"
        }, {
          id: 5,
          name: "¿Quién se mueve? ¿la luna o el sol?",
          link: "https://link.to/map"
        }]
      }, {
        id: 2,
        name: "Tercer ciclo 5° y 6° de primaria",
        sessions: [{
          id: 1,
          name: "¿Es tan nutritivo como parece?",
          link: "https://link.to/map"
        }, {
          id: 2,
          name: "¿Pesa y mide lo mismo?",
          link: "https://link.to/map"
        }, {
          id: 3,
          name: "Conociendo mi comunidad a través de los datos",
          link: "https://link.to/map"
        }, {
          id: 4,
          name: "¿Por qué reciclar?",
          link: "https://link.to/map"
        }, {
          id: 5,
          name: "¿Cómo ha cambiado el territorio? Enlace a mapa de 002Enlace a mapa de 003",
          link: "https://link.to/map"
        }]
      }, {
        id: 3,
        name: "Secundaria 1°, 2° y 3° ",
        sessions: [{
          id: 1,
          name: "La vida en los tiempos de Charles Darwin",
          link: "https://link.to/map"
        }, {
          id: 2,
          name: "Resuelve con ecuaciones lo que enfermó a Tito",
          link: "https://link.to/map"
        }, {
          id: 3,
          name: "El árbol genealógico de mi música favorita",
          link: "https://link.to/map"
        }, {
          id: 4,
          name: "Las selfies de la Tierra ",
          link: "https://link.to/map"
        }, {
          id: 5,
          name: "Y tú, ¿construyes paz? ",
          link: "https://link.to/map"
        }]
      }]
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
        } //URL = "https://www.aprendeencasa.mx/data/fichas/fichas.json"


        const response = await this.$axios.$get(URL);
        this.rearrangeJsonObject(response, levelKey);
      } catch (e) {
        console.log(e);
      }
    }

  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(35)["URL"]))

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(46);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("751af70f", content, true, context)
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(48);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("703f76c7", content, true, context)
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(50);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("e611ed62", content, true, context)
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(52);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("210af6e2", content, true, context)
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(54);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("70d89e44", content, true, context)
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(57);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("29d28267", content, true, context)
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(59);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("6759f5ab", content, true, context)
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".card{background-color:#fff;width:290px;max-width:350px;border-radius:1rem;box-shadow:0 4px 15px 0 rgba(0,0,0,.1);position:relative;justify-self:center}.card .pdf object{width:100%}.card .banner{height:11rem;display:flex;align-items:flex-end;justify-content:center;box-sizing:border-box}.card h2.name{text-align:center;padding:2rem;margin:0;font-size:1.25rem;word-wrap:normal}.card .title{color:#a0a0a0;font-size:.85rem}.card .actions,.card .title{text-align:center;padding:0 2rem 1.2rem}.card .actions{display:flex;flex-direction:column;order:99}.card .actions .action-btn button{color:#fff;font:inherit;font-weight:700;background-color:#da3773;width:90%;border:none;padding:.5rem;outline:none;box-sizing:border-box;border-radius:1rem;transition:background-color .1s ease-in-out,transform .2s cubic-bezier(.18,.89,.32,1.28);box-shadow:0 5px 13px -2px rgba(0,0,0,.52)}.card .actions .action-btn button:hover{background-color:#da3773;transform:scale(1.1)}.card .actions .action-btn button:active{background-color:#da3773;transform:scale(1)}.h5{word-break:normal;font-size:.1rem}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Cards_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Cards_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Cards_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Cards_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Cards_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Cards_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".nav-pills .nav-link{color:#2c374b!important;border-radius:4px;background-color:#fff;box-shadow:1px 2px 6px 1px rgba(0,0,0,.2);text-align:center}.nav-pills .nav-item{margin-right:10px;margin-bottom:10px}.nav-pills .nav-link.active{background-color:#da3773;color:#eee!important}a[role=tab]{color:#000!important}.tabs h2{font-weight:400!important;font-weight:700!important;font-size:25px}.periods{display:flex;flex-direction:row;justify-content:space-evenly}.period{display:flex;flex-direction:column}.cards{display:flex;flex-wrap:wrap;justify-content:center;grid-gap:1rem}@media (min-width:320px) and (max-width:480px){.nav-pills .nav-item{width:70%;margin-bottom:10px}}@media (max-width:900px){.tab-pane .row{display:block}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#logo{width:auto;height:30px;margin-top:10px}.aec-navbar{background:#b3337f;background:linear-gradient(90deg,#b3337f,#c64f9b 34%,#b3337f 79%,#981964 98%);color:#fff;padding:0 1rem;height:57px}.aec-navbar .navbar-brand{padding-top:0;margin-left:1rem}.navbar-light .navbar-toggler{color:#fff;border-color:#fff}.aec-navbar .navbar-collapse{z-index:1;text-align:center}.aec-navbar .dropdown-item:hover{background-color:#fff1f6}.aec-navbar .dropdown-item:active{background-color:#da3773}@media (max-width:480px){#logo{height:40px}}@media (max-width:360px){#logo{height:30px}}@media (max-width:991px){#nav_collapse{background:inherit;box-shadow:0 15px 13px -2px rgba(0,0,0,.38)}.aec-navbar .dropdown-item{text-align:center}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroBanner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroBanner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroBanner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroBanner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroBanner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroBanner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".inner-hero-banner{background:#b3337f;background:linear-gradient(90deg,#b3337f,#c64f9b 34%,#b3337f 79%,#981964 98%);width:100%;height:18vh;background-position:50%;background-size:cover;position:relative;box-shadow:0 7px 8px -2px rgba(0,0,0,.38)}.inner-hero-banner .inner-hero-text{position:absolute;top:50%;right:0;left:0;text-align:center;transform:translateY(-50%)}.inner-hero-banner .title{color:#fff;text-transform:capitalize;font-weight:700;font-size:40px}.inner-hero-banner .subtitle{color:#ededed;text-transform:capitalize;font-weight:400;font-size:25px}@media (min-width:768px) and (max-width:1024px){.inner-hero-banner{height:13vh}}@media (min-width:768px) and (max-width:1024px) and (orientation:landscape){.inner-hero-banner{height:20vh}}@media (min-width:481px) and (max-width:767px){.inner-hero-banner{height:30vh}}@media (min-width:320px) and (max-width:480px){.inner-hero-banner{height:15vh}}@media only screen and (min-device-width:414px) and (max-device-height:896px) and (orientation:landscape) and (-webkit-device-pixel-ratio:3){.inner-hero-banner{height:30vh}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterMain_vue_vue_type_style_index_0_id_302f5e1e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterMain_vue_vue_type_style_index_0_id_302f5e1e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterMain_vue_vue_type_style_index_0_id_302f5e1e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterMain_vue_vue_type_style_index_0_id_302f5e1e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterMain_vue_vue_type_style_index_0_id_302f5e1e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterMain_vue_vue_type_style_index_0_id_302f5e1e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(44);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(55);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, ".main-footer[data-v-302f5e1e]{font-family:\"Montserrat\",\"Open Sans\",\"Helvetica Neue\",Helvetica,Arial,sans-serif;background-color:#13322b;min-height:56px;color:#fff;padding:0;text-align:left;font-weight:300}.main-footer .list-info h5[data-v-302f5e1e]{font-weight:200px;margin-bottom:20px;font-size:18px;margin-top:12.5px;font-family:inherit;line-height:1.1;color:inherit}.main-footer p[data-v-302f5e1e]{font-size:14px;line-height:136%;height:auto;position:static;margin:0 0 15px}.main-footer .list-info[data-v-302f5e1e]{line-height:auto;color:#fff;background-size:cover;background-position:bottom;padding:30px 10px 10px}.main-footer .list-info ul[data-v-302f5e1e]{margin:0 0 60px;padding:0}.main-footer .list-info ul li[data-v-302f5e1e]{list-style-type:none;margin:0 0 2px;padding:0;line-height:110%}.main-footer .list-info a[data-v-302f5e1e]{color:#fff;font-size:14px;text-decoration:none}.social-icon[data-v-302f5e1e]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");display:block;text-indent:-9999px;margin-right:5px}.social-icon.facebook[data-v-302f5e1e]{width:14px;height:20px;background-position:0 0}.social-icon.twitter[data-v-302f5e1e]{width:24px;height:20px;background-position:-34px 0}.list-inline[data-v-302f5e1e]{list-style:none}.list-inline li[data-v-302f5e1e]{display:inline-block}.footer-pleca[data-v-302f5e1e]{background-color:#12322b;background-image:url(https://framework-gb.cdn.gob.mx/landing/img/pleca.svg);background-repeat:repeat-x}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icons_full.34a1ff4.png";

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BackToTop_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BackToTop_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BackToTop_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BackToTop_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BackToTop_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BackToTop_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".goTop{border-radius:100%;position:fixed;width:50px;height:50px;display:block;right:25px;bottom:25px;border:none;opacity:0;z-index:-1;box-shadow:1px 2px 6px 1px rgba(0,0,0,.2)}.goTop,.goTop:hover{background-color:#da3773}.goTop:hover{opacity:1}.isVisible{opacity:.8;z-index:4;transition:all .4s ease-in}.notVisible{transition:all .4s ease-out}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(44);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(60);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, "body{font-family:\"Montserrat\";font-size:18px;line-height:1.428571429;color:#404041;background:#faf7f2;background:#faf7f2 url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-size:100% auto}.btn-info{color:#fff;background-color:#da3773;border-color:#da3773}.btn-info.focus,.btn-info:focus,.btn-info:hover,.btn-info:not(:disabled):not(.disabled):active{color:#fff;background-color:#d22f6b;border-color:#d22f6b}.grad-pre{background:#587900;background:linear-gradient(90deg,#587900 1%,#95c11f 47%,#577700 98%)!important;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#587900\",endColorstr=\"#577700\",GradientType=1)}.grad-prim{background:#7e122c;background:linear-gradient(90deg,#7e122c 1%,#9a2441 47%,#7e001f 98%)!important;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#7e122c\",endColorstr=\"#7e001f\",GradientType=1)}.grad-seba{background:#0c8152;background:linear-gradient(90deg,#0c8152 1%,#21c684 47%,#0a8554 98%)!important;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#0c8152\",endColorstr=\"#0a8554\",GradientType=1)}.grad-ini{background:#87642b;background:linear-gradient(90deg,#87642b 1%,#ba965c 47%,#87642b 98%)!important;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#87642b\",endColorstr=\"#87642b\",GradientType=1)}.grad-esp{background:#9e1849;background:linear-gradient(90deg,#9e1849 1%,#da3773 47%,#ab2154 98%)!important;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#9e1849\",endColorstr=\"#ab2154\",GradientType=1)}.grad-sec{background:#782156;background:linear-gradient(90deg,#782156 1%,#a03777 47%,#73154e 98%)!important;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#782156\",endColorstr=\"#73154e\",GradientType=1)}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg.3f53670.jpg";

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Cards.vue?vue&type=template&id=8c6a782c&lang=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-container',{attrs:{"fluid":""}},[_c('h4',[_vm._v("Seleccione un ciclo:")]),_vm._v(" "),_c('b-tabs',{attrs:{"pills":"","content-class":"mt-4 mb-4","align":"center"}},_vm._l((_vm.content),function(c,idx){return _c('b-tab',{key:c.id,attrs:{"title":c.name}},[_c('b-tabs',{attrs:{"pills":"","content-class":"mt-4 mb-4","align":"center"}},[_c('div',{staticClass:"cards pt-3"},_vm._l((c.sessions),function(session,idx){return _c('Card',{key:idx,attrs:{"title":session.name,"link":session.link}})}),1)])],1)}),1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Cards.vue?vue&type=template&id=8c6a782c&lang=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Card.vue?vue&type=template&id=6b67fbd8&
var Cardvue_type_template_id_6b67fbd8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card mb-3"},[_vm._ssrNode("<h2 class=\"name\">"+_vm._ssrEscape(_vm._s(_vm.title))+"</h2> <div class=\"title\">"+_vm._ssrEscape(_vm._s(_vm.subtitle))+"</div> <div class=\"actions\"><div class=\"action-btn\"><button>Ver</button></div></div>")])}
var Cardvue_type_template_id_6b67fbd8_staticRenderFns = []


// CONCATENATED MODULE: ./components/Card.vue?vue&type=template&id=6b67fbd8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Card.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Cardvue_type_script_lang_js_ = ({
  props: ["title", "subtitle", "link"],

  data() {
    return {
      url: "https://laescuelaencasa.mx/data/fichas/"
    };
  },

  methods: {
    windowOpen(link) {
      window.open(link);
    }

  }
});
// CONCATENATED MODULE: ./components/Card.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Cardvue_type_script_lang_js_ = (Cardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Card.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(45)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Cardvue_type_script_lang_js_,
  Cardvue_type_template_id_6b67fbd8_render,
  Cardvue_type_template_id_6b67fbd8_staticRenderFns,
  false,
  injectStyles,
  null,
  "36e3f32e"
  
)

/* harmony default export */ var Card = (component.exports);
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(34);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Cards.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/*
                <b-tab v-for="(week, weekKey) in subject.weeks" :key="weekKey" :title="week.name">
                    <div class="cards pt-3">
                      <Card v-for="(file, fileKey) in week.files" :key="fileKey" :title="subject.name" :subtitle="week.name" :link="file" />
                    </div>
                </b-tab>*/

/* harmony default export */ var Cardsvue_type_script_lang_js_ = ({
  components: {
    Card: Card
  },
  props: ["content"],
  computed: {},
  methods: {
    getColor() {
      return this.$parent.color;
    }

  }
});
// CONCATENATED MODULE: ./components/Cards.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Cardsvue_type_script_lang_js_ = (Cardsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Cards.vue



function Cards_injectStyles (context) {
  
  var style0 = __webpack_require__(47)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Cards_component = Object(componentNormalizer["a" /* default */])(
  components_Cardsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  Cards_injectStyles,
  null,
  "ad73d896"
  
)

/* harmony default export */ var Cards = __webpack_exports__["a"] = (Cards_component.exports);

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Navbar.vue?vue&type=template&id=26c88a70&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('client-only',[_c('b-navbar',{staticClass:"aec-navbar",class:this.$parent.backgroundClass,attrs:{"toggleable":"lg","type":"dark"}},[_c('b-navbar-nav',{staticClass:"pr-3"},[_c('b-nav-item',{staticStyle:{"color":"white","font-size":"25px"},attrs:{"href":_vm.backward(_vm.level)}},[_c('b-icon-arrow-left')],1)],1),_vm._v(" "),_c('b-navbar-brand',{attrs:{"href":"https://laescuelaencasa.mx/escuela-en-casa/niveles/index.html"}},[_c('img',{attrs:{"src":"img/logo.svg","alt":"Inicio","id":"logo"}})]),_vm._v(" "),_c('b-navbar-toggle',{attrs:{"target":"nav_collapse"}}),_vm._v(" "),_c('b-collapse',{attrs:{"is-nav":"","id":"nav_collapse"}},[_c('b-navbar-nav',{staticClass:"ml-auto"},_vm._l((_vm.items),function(level,levelKey){return _c('b-nav-item-dropdown',{key:levelKey,attrs:{"text":level.name,"right":""}},_vm._l((level.sublevels),function(sublevel,sublevelKey){return _c('b-dropdown-item',{key:sublevelKey,on:{"click":function($event){$event.preventDefault();return _vm.getLevel(level.key, sublevel.key)}}},[_vm._v(_vm._s(sublevel.name))])}),1)}),1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Navbar.vue?vue&type=template&id=26c88a70&

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(34);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navbar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Navbarvue_type_script_lang_js_ = ({
  props: ["items", "level"],

  data() {
    return {};
  },

  methods: {
    backward() {
      if (this.$parent.originLevel == 'einicial') {
        return `https://laescuelaencasa.mx/escuela-en-casa/niveles/inicial`;
      }

      return `https://laescuelaencasa.mx/escuela-en-casa/niveles/${this.$parent.originLevel}`;
    },

    getLevel(levelKey, sublevelKey) {
      this.$parent.levelKey = levelKey;
      this.$parent.sublevelKey = sublevelKey;
      this.$parent.rearrangeLevel(levelKey);
      let fLevel = this.$parent.levels.find(level => {
        return level.key === levelKey;
      });

      if (typeof fLevel === 'undefined') {
        return;
      }

      this.$parent.color.color = fLevel.color;
      this.$parent.backgroundClass = fLevel.gClass;
    }

  }
});
// CONCATENATED MODULE: ./components/Navbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Navbarvue_type_script_lang_js_ = (Navbarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Navbar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(49)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Navbarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "1942caae"
  
)

/* harmony default export */ var Navbar = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/HeroBanner.vue?vue&type=template&id=9e5e5bd8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('client-only',[_c('div',{staticClass:"inner-hero-banner mb-4"},[_c('div',{staticClass:"inner-hero-text"},[_c('div',{staticClass:"title"},[_c('h1',[_vm._v("Reforzamiento del conocimiento")]),_vm._v(" "),_c('h3',[_vm._v(" Sigamos aprendiendo ")])])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/HeroBanner.vue?vue&type=template&id=9e5e5bd8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeroBanner.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var HeroBannervue_type_script_lang_js_ = ({
  props: ["title", "subtitle"]
});
// CONCATENATED MODULE: ./components/HeroBanner.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HeroBannervue_type_script_lang_js_ = (HeroBannervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/HeroBanner.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(51)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_HeroBannervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "793b4864"
  
)

/* harmony default export */ var HeroBanner = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/FooterMain.vue?vue&type=template&id=302f5e1e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<footer class=\"main-footer\" data-v-302f5e1e>","</footer>",[_vm._ssrNode("<div class=\"list-info\" data-v-302f5e1e>","</div>",[_c('b-container',[_c('b-row',[_c('b-col',[_c('img',{staticClass:"logo_footer",staticStyle:{"max-width":"90%"},attrs:{"src":__webpack_require__(19),"href":"/","alt":"logo gobierno de méxico"}})]),_vm._v(" "),_c('b-col',[_c('h5',[_vm._v("Enlaces")]),_vm._v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://participa.gob.mx","target":"_blank","rel":"noopener","title":"Enlace abre en ventana nueva"}},[_vm._v("Participa")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://www.gob.mx/publicaciones","target":"_blank","rel":"noopener","title":"Enlace abre en ventana nueva"}},[_vm._v("Publicaciones Oficiales")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"http://www.ordenjuridico.gob.mx","target":"_blank","rel":"noopener","title":"Enlace abre en ventana nueva"}},[_vm._v("Marco Jurídico")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://consultapublicamx.inai.org.mx/vut-web/","target":"_blank","rel":"noopener","title":"Enlace abre en ventana nueva"}},[_vm._v("Plataforma Nacional de Transparencia")])])])]),_vm._v(" "),_c('b-col',[_c('h5',[_vm._v("¿Qué es gob.mx?")]),_vm._v(" "),_c('p',[_vm._v("\n              Es el portal único de trámites, información y participación\n              ciudadana.\n              "),_c('a',{attrs:{"href":"https://www.gob.mx/que-es-gobmx"}},[_vm._v("Leer más")])]),_vm._v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://datos.gob.mx"}},[_vm._v("Portal de datos abiertos")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://www.gob.mx/accesibilidad"}},[_vm._v("Declaración de accesibilidad")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://www.gob.mx/privacidadintegral"}},[_vm._v("Aviso de privacidad integral")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://www.gob.mx/privacidadsimplificado"}},[_vm._v("Aviso de privacidad simplificado")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://www.gob.mx/terminos"}},[_vm._v("Términos y Condiciones")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://www.gob.mx/terminos#medidas-seguridad-informacion"}},[_vm._v("Política de seguridad")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://www.gob.mx/sitemap"}},[_vm._v("Mapa de sitio")])])])]),_vm._v(" "),_c('b-col',[_c('h5',[_c('a',{attrs:{"href":"https://www.gob.mx/tramites/ficha/presentacion-de-quejas-y-denuncias-en-la-sfp/SFP54"}},[_vm._v("Denuncia contra servidores públicos")])]),_vm._v(" "),_c('h5',[_vm._v("Síguenos en")]),_vm._v(" "),_c('ul',{staticClass:"list-inline"},[_c('li',[_c('a',{staticClass:"social-icon facebook",attrs:{"target":"_blank","rel":"noopener","title":"Enlace abre en ventana nueva","href":"https://www.facebook.com/gobmexico","aria-label":"Facebook de presidencia"}})]),_vm._v(" "),_c('li',[_c('a',{staticClass:"social-icon twitter",attrs:{"target":"_blank","rel":"noopener","title":"Enlace abre en ventana nueva","href":"https://twitter.com/GobiernoMX","aria-label":"Twitter de presidencia"}})])])])],1)],1),_vm._ssrNode(" "),_c('b-container',{staticClass:"footer-pleca",attrs:{"fluid":""}},[_c('b-row',[_c('b-col',[_c('br'),_c('br')])],1)],1)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/FooterMain.vue?vue&type=template&id=302f5e1e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/FooterMain.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var FooterMainvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/FooterMain.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FooterMainvue_type_script_lang_js_ = (FooterMainvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/FooterMain.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(53)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FooterMainvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "302f5e1e",
  "09799392"
  
)

/* harmony default export */ var FooterMain = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/BackToTop.vue?vue&type=template&id=4d27d370&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.isVisible)?_vm._ssrNode("<button class=\"goTop\">","</button>",[_c('b-icon-arrow-up',{attrs:{"variant":"light"}})],1):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/BackToTop.vue?vue&type=template&id=4d27d370&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BackToTop.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
/* harmony default export */ var BackToTopvue_type_script_lang_js_ = ({
  data() {
    return {
      isVisible: false
    };
  },

  methods: {
    initToTopButton: function () {
      $(document).bind('scroll', function () {
        var backToTopButton = $('.goTop');

        if ($(document).scrollTop() > 250) {
          backToTopButton.removeClass('notVisible');
          backToTopButton.addClass('isVisible');
          this.isVisible = true;
        } else {
          backToTopButton.removeClass('isVisible');
          backToTopButton.addClass('notVisible');
          this.isVisible = false;
        }
      }.bind(this));
    },
    backToTop: function () {
      $('html,body').stop().animate({
        scrollTop: 0
      }, 'slow', 'swing');
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      this.initToTopButton();
    });
  }
});
// CONCATENATED MODULE: ./components/BackToTop.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BackToTopvue_type_script_lang_js_ = (BackToTopvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/BackToTop.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(56)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BackToTopvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "0dd77f85"
  
)

/* harmony default export */ var BackToTop = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=1ff7803f&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.content)?_c('div',[_c('Navbar'),_vm._ssrNode(" "),_c('HeroBanner'),_vm._ssrNode(" "),_c('Cards',{attrs:{"content":_vm.content}}),_vm._ssrNode(" "),_c('backtotop'),_vm._ssrNode(" "),_c('FooterMain')],2):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=1ff7803f&

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
var lib_vue_loader_options_pagesvue_type_script_lang_js_ = __webpack_require__(36);

// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(58)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "e7d49a28"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })
]);;
//# sourceMappingURL=index.js.map