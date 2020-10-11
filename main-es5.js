function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'mrk-audj';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      consts: [[1, "container"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _search_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./search/search.component */
    "./src/app/search/search.component.ts");
    /* harmony import */


    var _services_track_statistics_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services/track-statistics-search.service */
    "./src/app/services/track-statistics-search.service.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _track_info_track_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./track-info/track-info.component */
    "./src/app/track-info/track-info.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_track_statistics_search_service__WEBPACK_IMPORTED_MODULE_5__["TrackStatisticsSearchService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot([{
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        pathMatch: 'full'
      }])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_4__["SearchComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _track_info_track_info_component__WEBPACK_IMPORTED_MODULE_7__["TrackInfoComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_4__["SearchComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _track_info_track_info_component__WEBPACK_IMPORTED_MODULE_7__["TrackInfoComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot([{
            path: '',
            component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
            pathMatch: 'full'
          }])],
          providers: [_services_track_statistics_search_service__WEBPACK_IMPORTED_MODULE_5__["TrackStatisticsSearchService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent, Page, Record */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Page", function () {
      return Page;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Record", function () {
      return Record;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_track_statistics_search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/track-statistics-search.service */
    "./src/app/services/track-statistics-search.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    function HomeComponent_option_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", item_r6 == 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6);
      }
    }

    function HomeComponent_option_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", item_r7 == 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r7);
      }
    }

    function HomeComponent_div_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.errorMessage, " ");
      }
    }

    function HomeComponent_div_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.infoMessage, " ");
      }
    }

    function HomeComponent_div_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041E\u0442\u0440\u0438\u043C\u0430\u043D\u043D\u044F \u0434\u0430\u043D\u0438\u0445. \u0426\u0435 \u043C\u043E\u0436\u0435 \u0437\u0430\u0439\u043D\u044F\u0442\u0438 \u0434\u0435\u043A\u0456\u043B\u044C\u043A\u0430 \u0445\u0432\u0438\u043B\u0438\u043D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\u041E\u043F\u0440\u0430\u0446\u044C\u043E\u0432\u0430\u043D\u043E ", ctx_r4.handledTracksCount, " \u0456\u0437 ", ctx_r4.allTracksCount, "");
      }
    }

    function HomeComponent_div_25_tr_11_i_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 32);
      }
    }

    function HomeComponent_div_25_tr_11_i_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 33);
      }
    }

    function HomeComponent_div_25_tr_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeComponent_div_25_tr_11_i_7_Template, 1, 0, "i", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HomeComponent_div_25_tr_11_i_8_Template, 1, 0, "i", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var record_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", record_r9.trackName, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", record_r9.trackUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](record_r9.trackUrl);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", record_r9.isOnFirstPage);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !record_r9.isOnFirstPage);
      }
    }

    function HomeComponent_div_25_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0422\u0440\u0435\u043A");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u041B\u0456\u043D\u043A");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u041D\u0430 \u043F\u0435\u0440\u0448\u0456\u0439 \u0441\u0442\u043E\u0440\u0456\u043D\u0446\u0456?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomeComponent_div_25_tr_11_Template, 9, 5, "tr", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ngb-pagination", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function HomeComponent_div_25_Template_ngb_pagination_pageChange_12_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.currentPage = $event;
        })("pageChange", function HomeComponent_div_25_Template_ngb_pagination_pageChange_12_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r14.getNextPageResults($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.tracksPage.records);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectionSize", ctx_r5.totalTracksCount)("page", ctx_r5.currentPage)("pageSize", ctx_r5.pageSize)("boundaryLinks", true)("maxSize", 10);
      }
    }

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(trackStatisticsSearchService, formBuilder) {
        _classCallCheck(this, HomeComponent);

        this.trackStatisticsSearchService = trackStatisticsSearchService;
        this.formBuilder = formBuilder;
        this.currentPage = 1;
        this.pageSize = 30;
        this.availableParallelizationItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.availableItemsPerPage = [10, 30, 50, 100];
        this.isLoading = false;
        this.allTracksCount = 0;
        this.handledTracksCount = 0;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.searchProfile = this.formBuilder.group({
            userName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[^\w]'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator]],
            itemsInParallel: [null],
            itemsPerPage: [null]
          });
          this.userNameControl = this.searchProfile.get('userName');
          this.itemsInParallelControl = this.searchProfile.get('itemsInParallel');
          this.itemsPerPageControl = this.searchProfile.get('itemsPerPage');
          this.errorMessage = "";
          this.infoMessage = "";
          this.allTracksCount = 0;
          this.handledTracksCount = 0;
        }
      }, {
        key: "getNextPageResults",
        value: function getNextPageResults(pageNumber) {
          var _this = this;

          var userName = this.userNameControl.value;
          var itemsInParallel = this.itemsInParallelControl.value || 3;
          this.pageSize = this.itemsPerPageControl.value || 30;
          this.allTracksCount = 0;
          this.handledTracksCount = 0;
          this.errorMessage = '';
          this.infoMessage = '';
          this.isLoading = true;
          this.tracksPage = null;
          console.log("Page size ".concat(this.pageSize));
          this.trackStatisticsSearchService.getTracksPage(userName, pageNumber, this.pageSize).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (page) {
            _this.totalTracksCount = page.total_hits;
            _this.allTracksCount = page.matches.length;
            var recordsObservables = page.matches.map(function (track) {
              return _this.trackStatisticsSearchService.searchProfile(track.name, 1, 30).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (r) {
                _this.handledTracksCount++;
                var isOnFirstPage = r.matches.some(function (match) {
                  return match.author_username == track.author_username && match.name == track.name;
                });
                return new Record(track.id, track.name, track.published_at, track.url, isOnFirstPage);
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
                _this.errorMessage = 'Забагато запитів. Спробуйте пізніше, зменшивши кількість одночасних запитів і кількість треків на сторінці';
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
              }));
            });
            console.log("Items in parallel: ".concat(itemsInParallel));
            var numberOfObjects = itemsInParallel; // <-- decides number of objects in each group

            var groupedProducts = recordsObservables.reduce(function (resultArray, item, index) {
              var chunkIndex = Math.floor(index / numberOfObjects);

              if (!resultArray[chunkIndex]) {
                resultArray[chunkIndex] = []; // start a new chunk
              }

              resultArray[chunkIndex].push(item);
              return resultArray;
            }, []);
            var records = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(groupedProducts[0]);

            var _loop = function _loop(i) {
              records = records.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (r) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(groupedProducts[i]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (p) {
                  return p.concat(r);
                }));
              }));
            };

            for (var i = 1; i < groupedProducts.length; i++) {
              _loop(i);
            }

            return records.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (tr) {
              return new Page(page.total_hits, tr);
            }));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            console.log('Error during fetching user tracks ', err);
            _this.errorMessage = 'Забагато запитів. Спробуйте пізніше';
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
          })).subscribe(function (result) {
            _this.isLoading = false;
            result.records = result.records.slice().sort(function (a, b) {
              return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
            });
            var notFirstPage = result.records.filter(function (rec) {
              return rec.isOnFirstPage == false;
            });
            var allTracksCount = result.records.length;
            var nonTrendingTracksCount = notFirstPage.length;
            if (allTracksCount != nonTrendingTracksCount) _this.infoMessage = "\u041D\u0435 \u043D\u0430 \u043F\u0435\u0440\u0448\u0456\u0439 \u0441\u0442\u043E\u0440\u0456\u043D\u0446\u0456 \u043F\u043E\u0448\u0443\u043A\u0443: ".concat(nonTrendingTracksCount, " \u0456\u0437 ").concat(allTracksCount);
            _this.currentPage = pageNumber;
            _this.tracksPage = result;
          }, function (error) {
            _this.isLoading = false;
            if (error.status == 404) _this.errorMessage = 'Сторінка не знайдена';
            if (error.status >= 400) _this.errorMessage = 'Щось пішло не так. Спробуйте пізніше';
            _this.tracksPage = null;
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_track_statistics_search_service__WEBPACK_IMPORTED_MODULE_4__["TrackStatisticsSearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 26,
      vars: 12,
      consts: [[1, "col", "mt-3"], [1, "row"], [1, "form-group", 3, "formGroup"], ["for", "profile-search"], ["type", "text", "id", "profile-search", "placeholder", "\u041D\u0430\u043F\u0440\u0438\u043A\u043B\u0430\u0434, ToucanMusic", "formControlName", "userName", 1, "form-control", 3, "autofocus", "ngModel", "ngModelChange"], ["for", "parallel-dropdown"], ["id", "parallel-dropdown", 1, "dropdown"], ["formControlName", "itemsInParallel", 1, "form-control"], [3, "selected", 4, "ngFor", "ngForOf"], ["for", "items-per-page-dropdown"], ["id", "items-per-page-dropdown", 1, "dropdown"], ["formControlName", "itemsPerPage", 1, "form-control"], [1, "btn", "c-btn-input", "my-2", "my-sm-0", 3, "disabled", "click"], ["class", "alert alert-danger row", "role", "alert", 4, "ngIf"], ["class", "alert alert-warning row", "role", "alert", 4, "ngIf"], [4, "ngIf"], ["class", "mt-3", 4, "ngIf"], [3, "selected"], ["role", "alert", 1, "alert", "alert-danger", "row"], ["role", "alert", 1, "alert", "alert-warning", "row"], [1, "spinner"], [1, "bounce1"], [1, "bounce2"], [1, "bounce3"], [1, "mt-3"], ["aria-labelledby", "tableLabel", 1, "table", "table-striped"], [2, "text-align", "center"], [4, "ngFor", "ngForOf"], ["aria-label", "Default pagination", 3, "collectionSize", "page", "pageSize", "boundaryLinks", "maxSize", "pageChange"], ["target", "_blank", 3, "href"], ["class", "fa fa-check-circle itemsuccess", 4, "ngIf"], ["class", "fa fa-times-circle itemfail", 4, "ngIf"], [1, "fa", "fa-check-circle", "itemsuccess"], [1, "fa", "fa-times-circle", "itemfail"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0406\u043C'\u044F \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_6_listener($event) {
            return ctx.usernameExists = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u043E\u0434\u043D\u043E\u0447\u0430\u0441\u043D\u0438\u0445 \u0437\u0430\u043F\u0438\u0442\u0456\u0432");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "select", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HomeComponent_option_12_Template, 2, 2, "option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C \u0442\u0440\u0435\u043A\u0456\u0432 \u043D\u0430 \u0441\u0442\u043E\u0440\u0456\u043D\u0446\u0456");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "select", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, HomeComponent_option_18_Template, 2, 2, "option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_20_listener() {
            return ctx.getNextPageResults(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u041F\u043E\u0448\u0443\u043A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, HomeComponent_div_22_Template, 2, 1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, HomeComponent_div_23_Template, 2, 1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, HomeComponent_div_24_Template, 9, 2, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, HomeComponent_div_25_Template, 13, 6, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.searchProfile);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.usernameExists);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.searchProfile);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.availableParallelizationItems);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.searchProfile);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.availableItemsPerPage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.searchProfile);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.usernameExists || ctx.usernameExists.trim().length <= 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.infoMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tracksPage);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbPagination"]],
      styles: [".c-btn-input[_ngcontent-%COMP%] {\n  background-color: #93d9d9;\n  border-color: #93d9d9;\n  color: #ffffff;\n}\n\n.c-btn-input[_ngcontent-%COMP%]:hover {\n  background-color: #4BC0C0;\n}\n\n.itemsuccess[_ngcontent-%COMP%] {\n  font-size: 25px;\n  color: green;\n}\n\n.itemfail[_ngcontent-%COMP%] {\n  font-size: 25px;\n  color: red;\n}\n\ninput[_ngcontent-%COMP%] {\n  min-width: 500px;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  margin: 100px auto 0;\n  width: 70px;\n  text-align: center;\n}\n\n.spinner[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  background-color: #333;\n  border-radius: 100%;\n  display: inline-block;\n  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n  animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n}\n\n.spinner[_ngcontent-%COMP%]   .bounce1[_ngcontent-%COMP%] {\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s;\n}\n\n.spinner[_ngcontent-%COMP%]   .bounce2[_ngcontent-%COMP%] {\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s;\n}\n\n@-webkit-keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n  }\n  40% {\n    -webkit-transform: scale(1);\n  }\n}\n\n@keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    transform: scale(0);\n  }\n  40% {\n    transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcUGVyc29uYWxQcm9qZWN0c1xcTWFya29TdHVkaW8uQXVkai9zcmNcXGFwcFxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0FDQ0o7O0FERUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUU7RUFDRSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUVBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxnRUFBQTtFQUNBLHdEQUFBO0FDQUo7O0FER0U7RUFDRSwrQkFBQTtFQUNBLHVCQUFBO0FDQUo7O0FER0U7RUFDRSwrQkFBQTtFQUNBLHVCQUFBO0FDQUo7O0FER0U7RUFDRTtJQUFnQiwyQkFBQTtFQ0NsQjtFREFFO0lBQU0sMkJBQUE7RUNHUjtBQUNGOztBRERFO0VBQ0U7SUFFRSxtQkFBQTtFQ0dKO0VERkk7SUFFQSxtQkFBQTtFQ0lKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYy1idG4taW5wdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkzZDlkOTtcclxuICAgIGJvcmRlci1jb2xvcjogIzkzZDlkOTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uYy1idG4taW5wdXQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRCQzBDMDtcclxufVxyXG5cclxuLml0ZW1zdWNjZXNzIHtcclxuICBmb250LXNpemU6MjVweDtcclxuICBjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5pdGVtZmFpbCB7XHJcbiAgZm9udC1zaXplOjI1cHg7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gICAgbWluLXdpZHRoOiA1MDBweDtcclxufVxyXG5cclxuICAuc3Bpbm5lciB7XHJcbiAgICBtYXJnaW46IDEwMHB4IGF1dG8gMDtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuc3Bpbm5lciA+IGRpdiB7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNrLWJvdW5jZWRlbGF5IDEuNHMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYm90aDtcclxuICAgIGFuaW1hdGlvbjogc2stYm91bmNlZGVsYXkgMS40cyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xyXG4gIH1cclxuICBcclxuICAuc3Bpbm5lciAuYm91bmNlMSB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMzJzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4zMnM7XHJcbiAgfVxyXG4gIFxyXG4gIC5zcGlubmVyIC5ib3VuY2UyIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjE2cztcclxuICB9XHJcbiAgXHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIHNrLWJvdW5jZWRlbGF5IHtcclxuICAgIDAlLCA4MCUsIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCkgfVxyXG4gICAgNDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMCkgfVxyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIHNrLWJvdW5jZWRlbGF5IHtcclxuICAgIDAlLCA4MCUsIDEwMCUgeyBcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgfSA0MCUgeyBcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMCk7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wKTtcclxuICAgIH1cclxuICB9IiwiLmMtYnRuLWlucHV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkzZDlkOTtcbiAgYm9yZGVyLWNvbG9yOiAjOTNkOWQ5O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmMtYnRuLWlucHV0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRCQzBDMDtcbn1cblxuLml0ZW1zdWNjZXNzIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5pdGVtZmFpbCB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY29sb3I6IHJlZDtcbn1cblxuaW5wdXQge1xuICBtaW4td2lkdGg6IDUwMHB4O1xufVxuXG4uc3Bpbm5lciB7XG4gIG1hcmdpbjogMTAwcHggYXV0byAwO1xuICB3aWR0aDogNzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3Bpbm5lciA+IGRpdiB7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgLXdlYmtpdC1hbmltYXRpb246IHNrLWJvdW5jZWRlbGF5IDEuNHMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYm90aDtcbiAgYW5pbWF0aW9uOiBzay1ib3VuY2VkZWxheSAxLjRzIGluZmluaXRlIGVhc2UtaW4tb3V0IGJvdGg7XG59XG5cbi5zcGlubmVyIC5ib3VuY2UxIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjMycztcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4zMnM7XG59XG5cbi5zcGlubmVyIC5ib3VuY2UyIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjE2cztcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzay1ib3VuY2VkZWxheSB7XG4gIDAlLCA4MCUsIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICA0MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzay1ib3VuY2VkZWxheSB7XG4gIDAlLCA4MCUsIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIDQwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [{
          type: _services_track_statistics_search_service__WEBPACK_IMPORTED_MODULE_4__["TrackStatisticsSearchService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();

    var Page = function Page(totalHits, records) {
      _classCallCheck(this, Page);

      this.totalHits = totalHits;
      this.records = records;
    };

    var Record = function Record(id, trackName, publishedAt, trackUrl, isOnFirstPage) {
      _classCallCheck(this, Record);

      this.id = id;
      this.trackName = trackName;
      this.publishedAt = publishedAt;
      this.trackUrl = trackUrl;
      this.isOnFirstPage = isOnFirstPage;
    };
    /***/

  },

  /***/
  "./src/app/search/search.component.ts":
  /*!********************************************!*\
    !*** ./src/app/search/search.component.ts ***!
    \********************************************/

  /*! exports provided: SearchComponent */

  /***/
  function srcAppSearchSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
      return SearchComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_track_statistics_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/track-statistics-search.service */
    "./src/app/services/track-statistics-search.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SearchComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage, " ");
      }
    }

    function SearchComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.infoMessage, " ");
      }
    }

    function SearchComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041E\u0442\u0440\u0438\u043C\u0430\u043D\u043D\u044F \u0434\u0430\u043D\u0438\u0445. \u0426\u0435 \u043C\u043E\u0436\u0435 \u0437\u0430\u0439\u043D\u044F\u0442\u0438 \u0434\u0435\u043A\u0456\u043B\u044C\u043A\u0430 \u0445\u0432\u0438\u043B\u0438\u043D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\u041E\u043F\u0440\u0430\u0446\u044C\u043E\u0432\u0430\u043D\u043E ", ctx_r2.handledTracksCount, " \u0456\u0437 ", ctx_r2.allTracksCount, "");
      }
    }

    var SearchComponent = /*#__PURE__*/function () {
      function SearchComponent(trackStatisticsSearchService, formBuilder) {
        _classCallCheck(this, SearchComponent);

        this.trackStatisticsSearchService = trackStatisticsSearchService;
        this.formBuilder = formBuilder;
        this.isLoading = false;
        this.allTracksCount = 0;
        this.handledTracksCount = 0;
      }

      _createClass(SearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.searchProfile = this.formBuilder.group({
            userName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[^\w]'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator]]
          });
          this.userNameControl = this.searchProfile.get('userName');
          this.errorMessage = "";
          this.infoMessage = "";
          this.allTracksCount = 0;
          this.handledTracksCount = 0;
        }
      }, {
        key: "composeResult",
        value: function composeResult() {
          var userName = this.userNameControl.value;
          this.allTracksCount = 0;
          this.handledTracksCount = 0;
          this.errorMessage = '';
          this.infoMessage = ''; //this.userChangeEmitter.emit(null); 

          this.isLoading = true;
          var pageNumber = 1;
          var pageSize = 100; //////////////////
          // this.trackStatisticsSearchService.getTracksPage(userName, pageNumber, pageSize)
          //   .pipe(mergeMap(page => {
          //     let records = forkJoin(page.matches.map(track => {
          //       return this.trackStatisticsSearchService.searchProfile(track.name, 1, 30)
          //       .pipe(map(r => {
          //         let isOnFirstPage = r.matches.some(match => match.author_username == track.author_username && match.name == track.name);
          //         return new Record(track.id, track.name, track.url, isOnFirstPage);
          //       }));
          //     }));
          //     let a = records.pipe(map(tr => {
          //       let links = new Links(page.links.next_page_url, page.links.prev_page_url, page.links.first_page_url, page.links.last_page_url);
          //       return new Page(links, page.total_hits, tr);
          //     }));
          //     return a;
          //   }))
          //   .subscribe(result => {
          //     this.isLoading = false;
          //     result.records = result.records.sort((a, b) => a.trackName.localeCompare(b.trackName));
          //     let notFirstPage = result.records.filter(rec => rec.isOnFirstPage == false);
          //     let allTracksCount = result.records.length;
          //     let nonTrendingTracksCount = notFirstPage.length;
          //     if (allTracksCount != nonTrendingTracksCount)
          //       this.infoMessage = `Showing ${nonTrendingTracksCount} of ${allTracksCount}`;
          //       result.records = notFirstPage;
          //     this.userChangeEmitter.emit(result);
          //   }, error => {
          //     this.isLoading = false;
          //     if (error.status == 404)
          //       this.errorMessage = 'Сторінка не знайдена';
          //     if (error.status >= 400)
          //       this.errorMessage = 'Щось пішло не так. Спробуйте пізніше';
          //     this.userChangeEmitter.emit(null);
          // });
          ////////////////////////////
          // this.trackStatisticsSearchService.getTracksPage(userName, pageNumber, pageSize)
          // .pipe(mergeMap(page => {
          //   let pages : Observable<TracksPageResponse>[] = new Array<Observable<TracksPageResponse>>();
          //   let totalPages = Math.ceil(page.total_hits / pageSize) + 1;
          //   for (let p = pageNumber + 1; p < totalPages; p++){
          //     let item = this.trackStatisticsSearchService.getTracksPage(userName, p, pageSize);
          //     pages.push(item);
          //   }
          //   return forkJoin(pages).pipe(mergeMap(c => {
          //     let matches = new Array<TrackSearchResponse>().concat(...c.concat(page).map(item => item.matches));
          //     this.allTracksCount = matches.length;
          //     let recordsObservables = matches.map(track => {
          //       return this.trackStatisticsSearchService.searchProfile(track.name, 1, 30)
          //       .pipe(map(r => {
          //         this.handledTracksCount++;
          //         let isOnFirstPage = r.matches.some(match => match.author_username == track.author_username && match.name == track.name);
          //         return new Record(track.id, track.name, track.url, isOnFirstPage);
          //       }));
          //     });
          //     let numberOfObjects = 1 // <-- decides number of objects in each group
          //     let groupedProducts = recordsObservables.reduce((resultArray: Observable<Record>[][], item: Observable<Record>, index: number) => { 
          //       const chunkIndex = Math.floor(index/numberOfObjects);
          //       if(!resultArray[chunkIndex]) {
          //         resultArray[chunkIndex] = []; // start a new chunk
          //       }
          //       resultArray[chunkIndex].push(item);
          //       return resultArray;
          //     }, []);
          //     let records = forkJoin(groupedProducts[0]);
          //     for (let i = 1; i < groupedProducts.length; i++){
          //       records = records.pipe(mergeMap(r => forkJoin(groupedProducts[i]).pipe(map(p => p.concat(r)))));
          //     }
          //     return records.pipe(map(tr => {
          //         return new Page(null, 0, tr);
          //     }));
          //   }));
          // }))
          // .subscribe(result => {
          //   this.isLoading = false;
          //   result.records = result.records.sort((a, b) => a.trackName.localeCompare(b.trackName));
          //   console.log(`Records count: ${result.records.length}`);
          //   let allTracksCount = result.records.length;
          //   let notFirstPage = result.records.filter(rec => rec.isOnFirstPage == false);
          //   let nonTrendingTracksCount = notFirstPage.length;
          //   if (allTracksCount != nonTrendingTracksCount)
          //     this.infoMessage = `Всього треків: ${allTracksCount}. Не на першій сторінці пошуку: ${nonTrendingTracksCount}`;
          //     result.records = notFirstPage;
          //   this.userChangeEmitter.emit(result);
          // }, error => {
          //   this.isLoading = false;
          //   if (error.status == 404)
          //     this.errorMessage = 'Сторінка не знайдена';
          //   if (error.status >= 400)
          //     this.errorMessage = 'Щось пішло не так. Спробуйте пізніше';
          //   this.userChangeEmitter.emit(null);
          // });
        }
      }]);

      return SearchComponent;
    }();

    SearchComponent.ɵfac = function SearchComponent_Factory(t) {
      return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_track_statistics_search_service__WEBPACK_IMPORTED_MODULE_2__["TrackStatisticsSearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SearchComponent,
      selectors: [["app-search"]],
      decls: 11,
      vars: 7,
      consts: [[1, "form-group", 3, "formGroup"], ["for", "profile-search"], ["type", "text", "id", "profile-search", "placeholder", "\u041D\u0430\u043F\u0440\u0438\u043A\u043B\u0430\u0434, ToucanMusic", "formControlName", "userName", 1, "form-control", 3, "autofocus", "ngModel", "ngModelChange"], [1, "btn", "c-btn-input", "my-2", "my-sm-0", 3, "disabled", "click"], ["class", "alert alert-danger row", "role", "alert", 4, "ngIf"], ["class", "alert alert-warning row", "role", "alert", 4, "ngIf"], [4, "ngIf"], ["role", "alert", 1, "alert", "alert-danger", "row"], ["role", "alert", 1, "alert", "alert-warning", "row"], [1, "spinner"], [1, "bounce1"], [1, "bounce2"], [1, "bounce3"]],
      template: function SearchComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0406\u043C'\u044F \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchComponent_Template_input_ngModelChange_4_listener($event) {
            return ctx.usernameExists = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_6_listener() {
            return ctx.composeResult();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u041F\u043E\u0448\u0443\u043A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SearchComponent_div_8_Template, 2, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SearchComponent_div_9_Template, 2, 1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SearchComponent_div_10_Template, 9, 2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.searchProfile);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.usernameExists);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.searchProfile);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.usernameExists || ctx.usernameExists.trim().length <= 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.infoMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: [".c-btn-input[_ngcontent-%COMP%] {\n  background-color: #93d9d9;\n  border-color: #93d9d9;\n  color: #ffffff;\n}\n\n.c-btn-input[_ngcontent-%COMP%]:hover {\n  background-color: #4BC0C0;\n}\n\ninput[_ngcontent-%COMP%] {\n  min-width: 500px;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  margin: 100px auto 0;\n  width: 70px;\n  text-align: center;\n}\n\n.spinner[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  background-color: #333;\n  border-radius: 100%;\n  display: inline-block;\n  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n  animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n}\n\n.spinner[_ngcontent-%COMP%]   .bounce1[_ngcontent-%COMP%] {\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s;\n}\n\n.spinner[_ngcontent-%COMP%]   .bounce2[_ngcontent-%COMP%] {\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s;\n}\n\n@-webkit-keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n  }\n  40% {\n    -webkit-transform: scale(1);\n  }\n}\n\n@keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    transform: scale(0);\n  }\n  40% {\n    transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL0Q6XFxQZXJzb25hbFByb2plY3RzXFxNYXJrb1N0dWRpby5BdWRqL3NyY1xcYXBwXFxzZWFyY2hcXHNlYXJjaC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFRTtFQUNFLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBRUEsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdFQUFBO0VBQ0Esd0RBQUE7QUNBSjs7QURHRTtFQUNFLCtCQUFBO0VBQ0EsdUJBQUE7QUNBSjs7QURHRTtFQUNFLCtCQUFBO0VBQ0EsdUJBQUE7QUNBSjs7QURHRTtFQUNFO0lBQWdCLDJCQUFBO0VDQ2xCO0VEQUU7SUFBTSwyQkFBQTtFQ0dSO0FBQ0Y7O0FEREU7RUFDRTtJQUVFLG1CQUFBO0VDR0o7RURGSTtJQUVBLG1CQUFBO0VDSUo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYy1idG4taW5wdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkzZDlkOTtcclxuICAgIGJvcmRlci1jb2xvcjogIzkzZDlkOTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uYy1idG4taW5wdXQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRCQzBDMDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gICAgbWluLXdpZHRoOiA1MDBweDtcclxufVxyXG5cclxuICAuc3Bpbm5lciB7XHJcbiAgICBtYXJnaW46IDEwMHB4IGF1dG8gMDtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuc3Bpbm5lciA+IGRpdiB7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNrLWJvdW5jZWRlbGF5IDEuNHMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYm90aDtcclxuICAgIGFuaW1hdGlvbjogc2stYm91bmNlZGVsYXkgMS40cyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xyXG4gIH1cclxuICBcclxuICAuc3Bpbm5lciAuYm91bmNlMSB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMzJzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4zMnM7XHJcbiAgfVxyXG4gIFxyXG4gIC5zcGlubmVyIC5ib3VuY2UyIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjE2cztcclxuICB9XHJcbiAgXHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIHNrLWJvdW5jZWRlbGF5IHtcclxuICAgIDAlLCA4MCUsIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCkgfVxyXG4gICAgNDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMCkgfVxyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIHNrLWJvdW5jZWRlbGF5IHtcclxuICAgIDAlLCA4MCUsIDEwMCUgeyBcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgfSA0MCUgeyBcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMCk7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wKTtcclxuICAgIH1cclxuICB9IiwiLmMtYnRuLWlucHV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkzZDlkOTtcbiAgYm9yZGVyLWNvbG9yOiAjOTNkOWQ5O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmMtYnRuLWlucHV0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRCQzBDMDtcbn1cblxuaW5wdXQge1xuICBtaW4td2lkdGg6IDUwMHB4O1xufVxuXG4uc3Bpbm5lciB7XG4gIG1hcmdpbjogMTAwcHggYXV0byAwO1xuICB3aWR0aDogNzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3Bpbm5lciA+IGRpdiB7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgLXdlYmtpdC1hbmltYXRpb246IHNrLWJvdW5jZWRlbGF5IDEuNHMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYm90aDtcbiAgYW5pbWF0aW9uOiBzay1ib3VuY2VkZWxheSAxLjRzIGluZmluaXRlIGVhc2UtaW4tb3V0IGJvdGg7XG59XG5cbi5zcGlubmVyIC5ib3VuY2UxIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjMycztcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4zMnM7XG59XG5cbi5zcGlubmVyIC5ib3VuY2UyIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjE2cztcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzay1ib3VuY2VkZWxheSB7XG4gIDAlLCA4MCUsIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICA0MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzay1ib3VuY2VkZWxheSB7XG4gIDAlLCA4MCUsIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIDQwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-search',
          templateUrl: './search.component.html',
          styleUrls: ['./search.component.scss']
        }]
      }], function () {
        return [{
          type: _services_track_statistics_search_service__WEBPACK_IMPORTED_MODULE_2__["TrackStatisticsSearchService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/track-statistics-search.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/services/track-statistics-search.service.ts ***!
    \*************************************************************/

  /*! exports provided: TrackStatisticsSearchService, TracksPageResponse, TracksPageLinksResponse, TrackSearchResponse, TotalMatchesResponse, TermSearchResult, TrackSearchResult */

  /***/
  function srcAppServicesTrackStatisticsSearchServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TrackStatisticsSearchService", function () {
      return TrackStatisticsSearchService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TracksPageResponse", function () {
      return TracksPageResponse;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TracksPageLinksResponse", function () {
      return TracksPageLinksResponse;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TrackSearchResponse", function () {
      return TrackSearchResponse;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TotalMatchesResponse", function () {
      return TotalMatchesResponse;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TermSearchResult", function () {
      return TermSearchResult;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TrackSearchResult", function () {
      return TrackSearchResult;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var TrackStatisticsSearchService = /*#__PURE__*/function () {
      function TrackStatisticsSearchService(httpClient) {
        _classCallCheck(this, TrackStatisticsSearchService);

        this.httpClient = httpClient;
      }

      _createClass(TrackStatisticsSearchService, [{
        key: "getTracksPage",
        value: function getTracksPage(username, pageNumber, pageSize) {
          var url = "https://api.envato.com/v1/discovery/search/search/item?username=".concat(username, "&page=").concat(pageNumber, "&page_size=").concat(pageSize, "&sort_by=date&sort_direction=desc");
          var headers = {
            'Authorization': "Bearer ".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ENVATO_KEY)
          };
          return this.httpClient.get(url, {
            headers: headers
          });
        }
      }, {
        key: "getTrackNames",
        value: function getTrackNames(username) {
          var url = "https://api.envato.com/v1/discovery/search/search/item?username=".concat(username);
          var headers = {
            'Authorization': "Bearer ".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ENVATO_KEY)
          };
          return this.httpClient.get(url, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response.matches.map(function (match) {
              return new TrackSearchResponse(match.id, match.name, match.published_at, match.url, match.author_username);
            });
          }));
        }
      }, {
        key: "getTotalMatches",
        value: function getTotalMatches(term) {
          var url = "https://cors-anywhere.herokuapp.com/https://audiojungle.net/shopfront-api/search?page=1&page_size=1&site=audiojungle.net&sort_by=relevance&term=".concat(term);
          return this.httpClient.get(url);
        }
      }, {
        key: "searchProfile",
        value: function searchProfile(term, pageNumber, pageSize) {
          var url = "https://api.envato.com/v1/discovery/search/search/item?page=".concat(pageNumber, "&page_size=").concat(pageSize, "&site=audiojungle.net&sort_by=relevance");
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();

          if (term) {
            params = params.append('term', term);
          }

          var headers = {
            'Authorization': "Bearer ".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].ENVATO_KEY)
          };
          return this.httpClient.get(url, {
            params: params,
            headers: headers
          });
        }
      }]);

      return TrackStatisticsSearchService;
    }();

    TrackStatisticsSearchService.ɵfac = function TrackStatisticsSearchService_Factory(t) {
      return new (t || TrackStatisticsSearchService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    TrackStatisticsSearchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TrackStatisticsSearchService,
      factory: TrackStatisticsSearchService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrackStatisticsSearchService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();

    var TracksPageResponse = function TracksPageResponse() {
      _classCallCheck(this, TracksPageResponse);
    };

    var TracksPageLinksResponse = function TracksPageLinksResponse() {
      _classCallCheck(this, TracksPageLinksResponse);
    };

    var TrackSearchResponse = function TrackSearchResponse(id, name, published_at, url, author) {
      _classCallCheck(this, TrackSearchResponse);

      this.id = id;
      this.name = name;
      this.published_at = published_at;
      this.url = url;
      this.author_username = author;
    };

    var TotalMatchesResponse = function TotalMatchesResponse() {
      _classCallCheck(this, TotalMatchesResponse);
    };

    var TermSearchResult = function TermSearchResult() {
      _classCallCheck(this, TermSearchResult);
    };

    var TrackSearchResult = function TrackSearchResult() {
      _classCallCheck(this, TrackSearchResult);
    };
    /***/

  },

  /***/
  "./src/app/track-info/track-info.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/track-info/track-info.component.ts ***!
    \****************************************************/

  /*! exports provided: TrackInfoComponent */

  /***/
  function srcAppTrackInfoTrackInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TrackInfoComponent", function () {
      return TrackInfoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_track_statistics_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/track-statistics-search.service */
    "./src/app/services/track-statistics-search.service.ts");

    var TrackInfoComponent = /*#__PURE__*/function () {
      function TrackInfoComponent(trackStatisticsSearchService) {
        _classCallCheck(this, TrackInfoComponent);

        this.trackStatisticsSearchService = trackStatisticsSearchService;
        this.errorMessage = '';
      }

      _createClass(TrackInfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          var pageNumber = 1;
          var pageSize = 30;
          this.trackStatisticsSearchService.searchProfile(this.record.name, pageNumber, pageSize).subscribe(function (result) {
            _this2.isOnFirstPage = result.matches.some(function (x) {
              return x.author_username == _this2.record.author_username && x.name == _this2.record.name;
            });
          }, function (error) {
            _this2.errorMessage = error.error;
          });
        }
      }]);

      return TrackInfoComponent;
    }();

    TrackInfoComponent.ɵfac = function TrackInfoComponent_Factory(t) {
      return new (t || TrackInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_track_statistics_search_service__WEBPACK_IMPORTED_MODULE_1__["TrackStatisticsSearchService"]));
    };

    TrackInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TrackInfoComponent,
      selectors: [["app-track-info"]],
      inputs: {
        record: "record"
      },
      decls: 7,
      vars: 4,
      consts: [["target", "_blank", 3, "href"]],
      template: function TrackInfoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.record.name, "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.record.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.record.url);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.isOnFirstPage);
        }
      },
      styles: ["thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhY2staW5mby9EOlxcUGVyc29uYWxQcm9qZWN0c1xcTWFya29TdHVkaW8uQXVkai9zcmNcXGFwcFxcdHJhY2staW5mb1xcdHJhY2staW5mby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdHJhY2staW5mby90cmFjay1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3RyYWNrLWluZm8vdHJhY2staW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRoZWFkIHRoIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn0iLCJ0aGVhZCB0aCB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrackInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-track-info',
          templateUrl: './track-info.component.html',
          styleUrls: ['./track-info.component.scss']
        }]
      }], function () {
        return [{
          type: _services_track_statistics_search_service__WEBPACK_IMPORTED_MODULE_1__["TrackStatisticsSearchService"]
        }];
      }, {
        record: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });

    var environment = {
      production: false,
      ENVATO_KEY: "haJXHoYnavl4EZ31RVAjJPuGZ7sxvBeO"
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\PersonalProjects\MarkoStudio.Audj\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map