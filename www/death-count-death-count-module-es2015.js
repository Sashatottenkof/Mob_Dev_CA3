(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["death-count-death-count-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/death-count/death-count.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/death-count/death-count.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Death Count</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n<ion-list>\n<!-- <ion-item>\n{{death-count.deathCount}}\n </ion-item> -->\n    <ion-item button detail lines=\"inset\" *ngFor=\"let death of deaths | async\" (click)=\"openDetails(death)\">\n      {{death.death}}\n    </ion-item>\n  </ion-list>\n \n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/death-count/death-count-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/death-count/death-count-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: DeathCountPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeathCountPageRoutingModule", function() { return DeathCountPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _death_count_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./death-count.page */ "./src/app/pages/death-count/death-count.page.ts");




const routes = [
    {
        path: '',
        component: _death_count_page__WEBPACK_IMPORTED_MODULE_3__["DeathCountPage"]
    }
];
let DeathCountPageRoutingModule = class DeathCountPageRoutingModule {
};
DeathCountPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DeathCountPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/death-count/death-count.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/death-count/death-count.module.ts ***!
  \*********************************************************/
/*! exports provided: DeathCountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeathCountPageModule", function() { return DeathCountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _death_count_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./death-count-routing.module */ "./src/app/pages/death-count/death-count-routing.module.ts");
/* harmony import */ var _death_count_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./death-count.page */ "./src/app/pages/death-count/death-count.page.ts");







let DeathCountPageModule = class DeathCountPageModule {
};
DeathCountPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _death_count_routing_module__WEBPACK_IMPORTED_MODULE_5__["DeathCountPageRoutingModule"]
        ],
        declarations: [_death_count_page__WEBPACK_IMPORTED_MODULE_6__["DeathCountPage"]]
    })
], DeathCountPageModule);



/***/ }),

/***/ "./src/app/pages/death-count/death-count.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/death-count/death-count.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RlYXRoLWNvdW50L2RlYXRoLWNvdW50LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/death-count/death-count.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/death-count/death-count.page.ts ***!
  \*******************************************************/
/*! exports provided: DeathCountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeathCountPage", function() { return DeathCountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");




let DeathCountPage = class DeathCountPage {
    constructor(router, api) {
        this.router = router;
        this.api = api;
    }
    ngOnInit() {
        this.count = this.api.getCount();
    }
};
DeathCountPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
DeathCountPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-death-count',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./death-count.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/death-count/death-count.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./death-count.page.scss */ "./src/app/pages/death-count/death-count.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
], DeathCountPage);



/***/ })

}]);
//# sourceMappingURL=death-count-death-count-module-es2015.js.map