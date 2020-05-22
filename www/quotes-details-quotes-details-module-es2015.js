(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quotes-details-quotes-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quotes-details/quotes-details.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quotes-details/quotes-details.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaulthref=\"/tabs/quotes\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Quote Detailes</ion-title>\n    \t\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-card *ngIf=\"quote\" class=\"movie-card\">\n    <ion-card-header>Series: {{ quote.series }}</ion-card-header>\n    <ion-card-content>\n     Quote:  {{ quote.quote }}\n     Author: {{ quote.author }} \n    </ion-card-content>\n     </ion-card >\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/quotes-details/quotes-details-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/quotes-details/quotes-details-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: QuotesDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotesDetailsPageRoutingModule", function() { return QuotesDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _quotes_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quotes-details.page */ "./src/app/pages/quotes-details/quotes-details.page.ts");




const routes = [
    {
        path: '',
        component: _quotes_details_page__WEBPACK_IMPORTED_MODULE_3__["QuotesDetailsPage"]
    }
];
let QuotesDetailsPageRoutingModule = class QuotesDetailsPageRoutingModule {
};
QuotesDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], QuotesDetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/quotes-details/quotes-details.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/quotes-details/quotes-details.module.ts ***!
  \***************************************************************/
/*! exports provided: QuotesDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotesDetailsPageModule", function() { return QuotesDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _quotes_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quotes-details-routing.module */ "./src/app/pages/quotes-details/quotes-details-routing.module.ts");
/* harmony import */ var _quotes_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quotes-details.page */ "./src/app/pages/quotes-details/quotes-details.page.ts");







let QuotesDetailsPageModule = class QuotesDetailsPageModule {
};
QuotesDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _quotes_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["QuotesDetailsPageRoutingModule"]
        ],
        declarations: [_quotes_details_page__WEBPACK_IMPORTED_MODULE_6__["QuotesDetailsPage"]]
    })
], QuotesDetailsPageModule);



/***/ }),

/***/ "./src/app/pages/quotes-details/quotes-details.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/quotes-details/quotes-details.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3F1b3Rlcy1kZXRhaWxzL3F1b3Rlcy1kZXRhaWxzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/quotes-details/quotes-details.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/quotes-details/quotes-details.page.ts ***!
  \*************************************************************/
/*! exports provided: QuotesDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotesDetailsPage", function() { return QuotesDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let QuotesDetailsPage = class QuotesDetailsPage {
    constructor(activatedRoute, api) {
        this.activatedRoute = activatedRoute;
        this.api = api;
        this.quoteId = null;
    }
    ngOnInit() {
        this.quoteId = this.activatedRoute.snapshot.paramMap.get('id');
        this.api.getQuote(this.quoteId).subscribe(res => {
            this.quote = res[0];
        });
    }
};
QuotesDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }
];
QuotesDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-quotes-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quotes-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quotes-details/quotes-details.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quotes-details.page.scss */ "./src/app/pages/quotes-details/quotes-details.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
], QuotesDetailsPage);



/***/ })

}]);
//# sourceMappingURL=quotes-details-quotes-details-module-es2015.js.map