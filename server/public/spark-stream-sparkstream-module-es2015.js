(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["spark-stream-sparkstream-module"],{

/***/ "./node_modules/primeng/components/progressspinner/progressspinner.js":
/*!****************************************************************************!*\
  !*** ./node_modules/primeng/components/progressspinner/progressspinner.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
var ProgressSpinner = /** @class */ (function () {
    function ProgressSpinner() {
        this.strokeWidth = "2";
        this.fill = "none";
        this.animationDuration = "2s";
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ProgressSpinner.prototype, "style", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ProgressSpinner.prototype, "styleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ProgressSpinner.prototype, "strokeWidth", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ProgressSpinner.prototype, "fill", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ProgressSpinner.prototype, "animationDuration", void 0);
    ProgressSpinner = __decorate([
        core_1.Component({
            selector: 'p-progressSpinner',
            template: "\n        <div class=\"ui-progress-spinner\" [ngStyle]=\"style\" [ngClass]=\"styleClass\">\n            <svg class=\"ui-progress-spinner-svg\" viewBox=\"25 25 50 50\" [style.animation-duration]=\"animationDuration\">\n                <circle class=\"ui-progress-spinner-circle\" cx=\"50\" cy=\"50\" r=\"20\" [attr.fill]=\"fill\" [attr.stroke-width]=\"strokeWidth\" stroke-miterlimit=\"10\"/>\n            </svg>\n        </div>\n    "
        })
    ], ProgressSpinner);
    return ProgressSpinner;
}());
exports.ProgressSpinner = ProgressSpinner;
var ProgressSpinnerModule = /** @class */ (function () {
    function ProgressSpinnerModule() {
    }
    ProgressSpinnerModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            exports: [ProgressSpinner],
            declarations: [ProgressSpinner]
        })
    ], ProgressSpinnerModule);
    return ProgressSpinnerModule;
}());
exports.ProgressSpinnerModule = ProgressSpinnerModule;
//# sourceMappingURL=progressspinner.js.map

/***/ }),

/***/ "./node_modules/primeng/progressspinner.js":
/*!*************************************************!*\
  !*** ./node_modules/primeng/progressspinner.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/progressspinner/progressspinner */ "./node_modules/primeng/components/progressspinner/progressspinner.js"));

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/common-component/component-header/component-header.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/common-component/component-header/component-header.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app_component_header\">\r\n  {{header}}\r\n  <div class=\"set\">\r\n    <i class=\"fa fa-cog fa-1x\" *ngIf=\"set\" (click)=\"$event.stopPropagation();onClickSet()\" aria-hidden=\"true\"></i>\r\n    <i class=\"fa fa-arrows-alt fa-1x\" *ngIf=\"expand\" (click)=\"$event.stopPropagation();onClickExpand()\" aria-hidden=\"true\"></i>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/common-component/component-load/component-loader.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/common-component/component-load/component-loader.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-progressSpinner *ngIf=\"load\" [style]=\"{position:'absolute',top: top, left: left}\"></p-progressSpinner>\r\n<!-- <nz-spin nzSimple *ngIf=\"load\" [style]=\"{position:'absolute',top: top, left: left}\"></nz-spin> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/spark-stream/city/city.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/spark-stream/city/city.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow:auto;width:100%;\">\n    <div echarts [options]=\"option\" (chartInit)=\"onChartInit($event)\" style=\"width:2000px;height:450px;\"></div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/spark-stream/main/main.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/spark-stream/main/main.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n    <div class=\"ui-g-12\">\n        <con-header [header]=\"'商店浏览次数'\"></con-header>\n        <div class=\"back\">\n            <ss-shop></ss-shop>\n        </div>\n    </div>\n    <div class=\"ui-g-12\">\n        <con-header [header]=\"'城市浏览次数'\"></con-header>\n        <div class=\"back\">\n            <ss-city></ss-city>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/spark-stream/shop/shop.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/spark-stream/shop/shop.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow:auto;width:100%;\">\r\n    <div echarts [options]=\"option\" (chartInit)=\"onChartInit($event)\" style=\"width:4000px;height:450px;\"></div>\r\n</div>"

/***/ }),

/***/ "./src/app/routes/common-component/common.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/routes/common-component/common.module.ts ***!
  \**********************************************************/
/*! exports provided: CommonComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonComponentModule", function() { return CommonComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/progressspinner */ "./node_modules/primeng/progressspinner.js");
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_progressspinner__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _component_load_component_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component-load/component-loader.component */ "./src/app/routes/common-component/component-load/component-loader.component.ts");
/* harmony import */ var _component_header_component_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component-header/component-header.component */ "./src/app/routes/common-component/component-header/component-header.component.ts");







const COMPONENT_NOROUNT = [
    _component_load_component_loader_component__WEBPACK_IMPORTED_MODULE_5__["ComponentLoaderComponent"],
    _component_header_component_header_component__WEBPACK_IMPORTED_MODULE_6__["ComponentHeaderComponent"]
];
let CommonComponentModule = class CommonComponentModule {
};
CommonComponentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            primeng_progressspinner__WEBPACK_IMPORTED_MODULE_4__["ProgressSpinnerModule"]
        ],
        declarations: [
            ...COMPONENT_NOROUNT
        ],
        exports: COMPONENT_NOROUNT,
        entryComponents: COMPONENT_NOROUNT
    })
], CommonComponentModule);



/***/ }),

/***/ "./src/app/routes/common-component/component-header/component-header.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/routes/common-component/component-header/component-header.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host-context(app-component-header) {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.app_component_header {\r\n  background-color: white;\r\n  margin: 0;\r\n  color: gray;\r\n  font-size: 16px;\r\n  height: 25px;\r\n  line-height: 20px\r\n}\r\n\r\n.set {\r\n  float: right;\r\n  right: 10px;\r\n}\r\n\r\n.set i:nth-child(1) {\r\n  margin: 0 5px 0 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL2NvbW1vbi1jb21wb25lbnQvY29tcG9uZW50LWhlYWRlci9jb21wb25lbnQtaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsZUFBZTtFQUNmLFlBQVk7RUFDWjtBQUNGOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9jb21tb24tY29tcG9uZW50L2NvbXBvbmVudC1oZWFkZXIvY29tcG9uZW50LWhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QtY29udGV4dChhcHAtY29tcG9uZW50LWhlYWRlcikge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmFwcF9jb21wb25lbnRfaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW46IDA7XHJcbiAgY29sb3I6IGdyYXk7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGhlaWdodDogMjVweDtcclxuICBsaW5lLWhlaWdodDogMjBweFxyXG59XHJcblxyXG4uc2V0IHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5zZXQgaTpudGgtY2hpbGQoMSkge1xyXG4gIG1hcmdpbjogMCA1cHggMCAwO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/routes/common-component/component-header/component-header.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/routes/common-component/component-header/component-header.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ComponentHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentHeaderComponent", function() { return ComponentHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ComponentHeaderComponent = class ComponentHeaderComponent {
    constructor() {
        this.onSet = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onExpand = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.set = false;
        this.expand = false;
    }
    onClickSet(e) {
        this.onSet.emit(e);
    }
    onClickExpand(e) {
        this.onExpand.emit(e);
    }
    ngOnInit() {
        if (this.model && this.model.length > 0) {
            this.model.forEach(m => {
                this.set = m === 'set' ? true : false;
                this.expand = m === 'expand' ? true : false;
            });
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ComponentHeaderComponent.prototype, "header", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], ComponentHeaderComponent.prototype, "model", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ComponentHeaderComponent.prototype, "onSet", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ComponentHeaderComponent.prototype, "onExpand", void 0);
ComponentHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'con-header',
        template: __webpack_require__(/*! raw-loader!./component-header.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/common-component/component-header/component-header.component.html"),
        styles: [__webpack_require__(/*! ./component-header.component.css */ "./src/app/routes/common-component/component-header/component-header.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ComponentHeaderComponent);



/***/ }),

/***/ "./src/app/routes/common-component/component-load/component-loader.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/routes/common-component/component-load/component-loader.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host-context(app-component-loader) {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL2NvbW1vbi1jb21wb25lbnQvY29tcG9uZW50LWxvYWQvY29tcG9uZW50LWxvYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9jb21tb24tY29tcG9uZW50L2NvbXBvbmVudC1sb2FkL2NvbXBvbmVudC1sb2FkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0LWNvbnRleHQoYXBwLWNvbXBvbmVudC1sb2FkZXIpIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/routes/common-component/component-load/component-loader.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/routes/common-component/component-load/component-loader.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ComponentLoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentLoaderComponent", function() { return ComponentLoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ComponentLoaderComponent = class ComponentLoaderComponent {
    constructor() {
        this.load = true;
        this.top = '50%';
        this.left = '45%';
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], ComponentLoaderComponent.prototype, "load", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ComponentLoaderComponent.prototype, "top", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ComponentLoaderComponent.prototype, "left", void 0);
ComponentLoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'common-component-loader',
        template: __webpack_require__(/*! raw-loader!./component-loader.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/common-component/component-load/component-loader.component.html"),
        styles: [__webpack_require__(/*! ./component-loader.component.css */ "./src/app/routes/common-component/component-load/component-loader.component.css")]
    })
], ComponentLoaderComponent);



/***/ }),

/***/ "./src/app/routes/spark-stream/city/city.component.less":
/*!**************************************************************!*\
  !*** ./src/app/routes/spark-stream/city/city.component.less ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9zcGFyay1zdHJlYW0vY2l0eS9jaXR5LmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/routes/spark-stream/city/city.component.ts":
/*!************************************************************!*\
  !*** ./src/app/routes/spark-stream/city/city.component.ts ***!
  \************************************************************/
/*! exports provided: CityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityComponent", function() { return CityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let CityComponent = class CityComponent {
    constructor() {
        this.option = {
            title: { show: false },
            lengend: { show: false },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    animation: false,
                    label: {
                        backgroundColor: '#505765'
                    }
                }
            },
            // dataZoom: [
            //   {
            //     show: true,
            //     realtime: true,
            //     start: 65,
            //     end: 85
            //   },
            //   {
            //     type: 'inside',
            //     realtime: true,
            //     start: 65,
            //     end: 85
            //   }
            // ],
            legend: {
                show: false
            },
            grid: {
                top: '5%',
                left: '2%',
                right: '2%',
                bottom: '8%',
                containLabel: true
            },
            dataset: [
                {
                    dimensions: ['x', 'y'],
                    source: []
                }
            ],
            xAxis: {
                type: 'category',
                boundaryGap: false
            },
            yAxis: {
                type: 'value',
                title: '浏览次数'
            },
            series: [
                {
                    name: '浏览次数',
                    type: 'bar',
                    // barWidth: 5,
                    datasetIndex: 0,
                    encode: { x: 'x', y: 'y' }
                }
            ]
        };
        this.data = [
            { label: '梧州', value: 4 },
            { label: '廊坊', value: 4 },
            { label: '淮北', value: 5 },
            { label: '邯郸', value: 7 },
            { label: '保定', value: 10 },
            { label: '龙岩', value: 10 },
            { label: '清远', value: 10 },
            { label: '聊城', value: 11 },
            { label: '汕尾', value: 13 },
            { label: '日照', value: 13 },
            { label: '营口', value: 13 },
            { label: '辽阳', value: 13 },
            { label: '绵阳', value: 13 },
            { label: '柳州', value: 13 },
            { label: '濮阳', value: 14 },
            { label: '丽水', value: 14 },
            { label: '肇庆', value: 14 },
            { label: '铜陵', value: 14 },
            { label: '咸阳', value: 14 },
            { label: '威海', value: 14 },
            { label: '东营', value: 14 },
            { label: '葫芦岛', value: 14 },
            { label: '长治', value: 15 },
            { label: '上饶', value: 15 },
            { label: '玉林', value: 15 },
            { label: '汉中', value: 15 },
            { label: '信阳', value: 15 },
            { label: '石河子', value: 16 },
            { label: '三亚', value: 16 },
            { label: '三明', value: 16 },
            { label: '宿迁', value: 16 },
            { label: '抚顺', value: 16 },
            { label: '荆门', value: 17 },
            { label: '自贡', value: 17 },
            { label: '荆州', value: 18 },
            { label: '通辽', value: 18 },
            { label: '洛阳', value: 18 },
            { label: '宝鸡', value: 18 },
            { label: '阳江', value: 18 },
            { label: '锦州', value: 18 },
            { label: '邢台', value: 18 },
            { label: '张家口', value: 19 },
            { label: '六安', value: 19 },
            { label: '天门', value: 19 },
            { label: '思茅', value: 19 },
            { label: '达州', value: 19 },
            { label: '乐山', value: 19 },
            { label: '安康', value: 19 },
            { label: '德阳', value: 20 },
            { label: '烟台', value: 21 },
            { label: '莆田', value: 22 },
            { label: '中山', value: 26 },
            { label: '潍坊', value: 26 },
            { label: '昆明', value: 27 },
            { label: '济宁', value: 28 },
            { label: '湛江', value: 28 },
            { label: '阜阳', value: 28 },
            { label: '黄山', value: 29 },
            { label: '盐城', value: 29 },
            { label: '镇江', value: 31 },
            { label: '宁德', value: 33 },
            { label: '舟山', value: 33 },
            { label: '十堰', value: 34 },
            { label: '黄冈', value: 35 },
            { label: '咸宁', value: 35 },
            { label: '芜湖', value: 35 },
            { label: '株洲', value: 35 },
            { label: '泰州', value: 37 },
            { label: '徐州', value: 40 },
            { label: '太原', value: 41 },
            { label: '宜昌', value: 41 },
            { label: '漳州', value: 41 },
            { label: '蚌埠', value: 42 },
            { label: '黄石', value: 44 },
            { label: '衢州', value: 45 },
            { label: '江门', value: 49 },
            { label: '贵阳', value: 50 },
            { label: '南平', value: 54 },
            { label: '襄阳', value: 54 },
            { label: '孝感', value: 61 },
            { label: '扬州', value: 69 },
            { label: '珠海', value: 72 },
            { label: '淮安', value: 74 },
            { label: '湖州', value: 79 },
            { label: '石家庄', value: 80 },
            { label: '哈尔滨', value: 97 },
            { label: '惠州', value: 100 },
            { label: '台州', value: 107 },
            { label: '泉州', value: 121 },
            { label: '嘉兴', value: 122 },
            { label: '郑州', value: 134 },
            { label: '南通', value: 138 },
            { label: '南昌', value: 145 },
            { label: '长沙', value: 155 },
            { label: '沈阳', value: 158 },
            { label: '济南', value: 174 },
            { label: '大连', value: 178 },
            { label: '佛山', value: 181 },
            { label: '南宁', value: 183 },
            { label: '青岛', value: 187 },
            { label: '东莞', value: 194 },
            { label: '西安', value: 204 },
            { label: '合肥', value: 225 },
            { label: '天津', value: 233 },
            { label: '常州', value: 234 },
            { label: '重庆', value: 238 },
            { label: '厦门', value: 239 },
            { label: '绍兴', value: 279 },
            { label: '金华', value: 279 },
            { label: '无锡', value: 320 },
            { label: '福州', value: 391 },
            { label: '成都', value: 396 },
            { label: '温州', value: 511 },
            { label: '宁波', value: 564 },
            { label: '苏州', value: 760 },
            { label: '深圳', value: 868 },
            { label: '广州', value: 1143 },
            { label: '武汉', value: 1184 },
            { label: '南京', value: 1278 },
            { label: '北京', value: 1775 },
            { label: '杭州', value: 2094 },
            { label: '上海', value: 3142 },
        ];
        const cc = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(2000);
        cc.subscribe(res => {
            for (let i = 0; i < this.data.length; i++) {
                this.option.dataset[0].source[i].y += Math.ceil(Math.random() * 100);
            }
            this.echartIntance.setOption(this.option);
        });
    }
    ngOnInit() {
        for (let i = this.data.length - 1; i >= 0; i--) {
            this.option.dataset[0].source.push({
                x: this.data[i].label, y: this.data[i].value
            });
        }
    }
    onChartInit(ec) {
        this.echartIntance = ec;
    }
};
CityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ss-city',
        template: __webpack_require__(/*! raw-loader!./city.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/spark-stream/city/city.component.html"),
        styles: [__webpack_require__(/*! ./city.component.less */ "./src/app/routes/spark-stream/city/city.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CityComponent);



/***/ }),

/***/ "./src/app/routes/spark-stream/main/main.component.less":
/*!**************************************************************!*\
  !*** ./src/app/routes/spark-stream/main/main.component.less ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back {\n  background-color: white;\n  height: 450px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL3NwYXJrLXN0cmVhbS9tYWluL0U6L0NvZGUvbmctYWxhaW4tbWFzdGVyL3NyYy9hcHAvcm91dGVzL3NwYXJrLXN0cmVhbS9tYWluL21haW4uY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3JvdXRlcy9zcGFyay1zdHJlYW0vbWFpbi9tYWluLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7RUFDQSxhQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9yb3V0ZXMvc3Bhcmstc3RyZWFtL21haW4vbWFpbi5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGhlaWdodDogNDUwcHg7XG59XG4iLCIuYmFjayB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDQ1MHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/routes/spark-stream/main/main.component.ts":
/*!************************************************************!*\
  !*** ./src/app/routes/spark-stream/main/main.component.ts ***!
  \************************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainComponent = class MainComponent {
    constructor() { }
    ngOnInit() {
    }
    onChartInit(ec) {
    }
};
MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: __webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/spark-stream/main/main.component.html"),
        styles: [__webpack_require__(/*! ./main.component.less */ "./src/app/routes/spark-stream/main/main.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MainComponent);



/***/ }),

/***/ "./src/app/routes/spark-stream/shop/shop.component.less":
/*!**************************************************************!*\
  !*** ./src/app/routes/spark-stream/shop/shop.component.less ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9zcGFyay1zdHJlYW0vc2hvcC9zaG9wLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/routes/spark-stream/shop/shop.component.ts":
/*!************************************************************!*\
  !*** ./src/app/routes/spark-stream/shop/shop.component.ts ***!
  \************************************************************/
/*! exports provided: ShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopComponent", function() { return ShopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let ShopComponent = class ShopComponent {
    constructor() {
        this.option = {
            title: { show: false },
            lengend: { show: false },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    animation: false,
                    label: {
                        backgroundColor: '#505765'
                    }
                }
            },
            // dataZoom: [
            //   {
            //     show: true,
            //     realtime: true,
            //     start: 65,
            //     end: 85
            //   },
            //   {
            //     type: 'inside',
            //     realtime: true,
            //     start: 65,
            //     end: 85
            //   }
            // ],
            legend: {
                show: false
            },
            grid: {
                top: '5%',
                left: '2%',
                right: '2%',
                bottom: '8%',
                containLabel: true
            },
            dataset: [
                {
                    dimensions: ['x', 'y'],
                    source: []
                }
            ],
            xAxis: {
                type: 'category',
                boundaryGap: false
            },
            yAxis: {
                type: 'value',
                title: '浏览次数'
            },
            series: [
                {
                    name: '浏览次数',
                    type: 'bar',
                    // barWidth: 5,
                    datasetIndex: 0,
                    encode: { x: 'x', y: 'y' }
                }
            ]
        };
        const cc = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(2000);
        cc.subscribe(res => {
            for (let i = 0; i < 2000; i++) {
                this.option.dataset[0].source[i].y += Math.ceil(Math.random() * 10);
            }
            this.echartIntance.setOption(this.option);
        });
    }
    ngOnInit() {
        for (let i = 0; i < 2000; i++) {
            this.option.dataset[0].source.push({
                x: i + 1, y: Math.ceil(Math.random() * 100)
            });
        }
    }
    onChartInit(ec) {
        this.echartIntance = ec;
    }
};
ShopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ss-shop',
        template: __webpack_require__(/*! raw-loader!./shop.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/spark-stream/shop/shop.component.html"),
        styles: [__webpack_require__(/*! ./shop.component.less */ "./src/app/routes/spark-stream/shop/shop.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ShopComponent);



/***/ }),

/***/ "./src/app/routes/spark-stream/spark-stream-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/routes/spark-stream/spark-stream-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: SparkStreamRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SparkStreamRoutingModule", function() { return SparkStreamRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/main.component */ "./src/app/routes/spark-stream/main/main.component.ts");




const routes = [{ path: 'main', component: _main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"] }];
let SparkStreamRoutingModule = class SparkStreamRoutingModule {
};
SparkStreamRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SparkStreamRoutingModule);



/***/ }),

/***/ "./src/app/routes/spark-stream/sparkstream.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/routes/spark-stream/sparkstream.module.ts ***!
  \***********************************************************/
/*! exports provided: SparkStreamModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SparkStreamModule", function() { return SparkStreamModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/fesm2015/ngx-echarts.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/main.component */ "./src/app/routes/spark-stream/main/main.component.ts");
/* harmony import */ var _spark_stream_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./spark-stream-routing.module */ "./src/app/routes/spark-stream/spark-stream-routing.module.ts");
/* harmony import */ var _shop_shop_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shop/shop.component */ "./src/app/routes/spark-stream/shop/shop.component.ts");
/* harmony import */ var _city_city_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./city/city.component */ "./src/app/routes/spark-stream/city/city.component.ts");
/* harmony import */ var _common_component_common_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common-component/common.module */ "./src/app/routes/common-component/common.module.ts");









let SparkStreamModule = class SparkStreamModule {
};
SparkStreamModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"], _shop_shop_component__WEBPACK_IMPORTED_MODULE_6__["ShopComponent"], _city_city_component__WEBPACK_IMPORTED_MODULE_7__["CityComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ngx_echarts__WEBPACK_IMPORTED_MODULE_3__["NgxEchartsModule"], _spark_stream_routing_module__WEBPACK_IMPORTED_MODULE_5__["SparkStreamRoutingModule"], _common_component_common_module__WEBPACK_IMPORTED_MODULE_8__["CommonComponentModule"]
        ]
    })
], SparkStreamModule);



/***/ })

}]);
//# sourceMappingURL=spark-stream-sparkstream-module-es2015.js.map