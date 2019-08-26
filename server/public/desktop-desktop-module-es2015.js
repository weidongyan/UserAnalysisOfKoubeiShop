(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["desktop-desktop-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/desktop/city-cost/city-cost.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/desktop/city-cost/city-cost.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app_component_header\">\n    <span>城市消费情况</span>\n\n</div>\n<div echarts [options]=\"option\" (chartInit)=\"onChartInit($event)\" style=\"width:100%;height:270px;\">"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/desktop/component-header/component-header.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/desktop/component-header/component-header.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app_component_header\">\r\n  {{header}}\r\n  <div class=\"set\">\r\n    <i class=\"fa fa-cog fa-1x\" *ngIf=\"set\" (click)=\"$event.stopPropagation();onClickSet()\" aria-hidden=\"true\"></i>\r\n    <i class=\"fa fa-arrows-alt fa-1x\" *ngIf=\"expand\" (click)=\"$event.stopPropagation();onClickExpand()\" aria-hidden=\"true\"></i>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/desktop/main/main.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/desktop/main/main.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n  <div class=\"ui-g-12 ui-md-6\">\n    <div style=\"background:white;height:630px;width:100%;padding:10px;\">\n      <iframe width=\"100%\" height=\"100%\" src=\"assets/map/pmap.html\" frameborder=\"no\" marginwidth=\"0\" marginheight=\"0\"\n        scrolling=\"no\" allowtransparency=\"yes\"></iframe>\n    </div>\n  </div>\n  <div class=\"ui-g-12 ui-md-6\">\n    <div class=\"ui-g-12\">\n      <div class=\"back\">\n        <app-shop-view></app-shop-view>\n      </div>\n    </div>\n    <div class=\"ui-g-12\">\n      <div class=\"back\">\n        <app-top-prod></app-top-prod>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/desktop/shop-view/shop-view.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/desktop/shop-view/shop-view.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app_component_header\">\n    <span>商家浏览交易统计</span>\n</div>\n<div echarts [options]=\"option\" (chartInit)=\"onChartInit($event)\" style=\"width:100%;height:270px;\"></div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/desktop/top-prod/top-prod.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/desktop/top-prod/top-prod.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n    <div class=\"ui-g-12 ui-md-8\">\n        <div echarts [options]=\"option\" (chartInit)=\"onChartInit($event)\" style=\"width:100%;height:270px;\"></div>\n    </div>\n    <div class=\"ui-g-12 ui-md-4\">\n        <div class=\"rank\">\n            <ul class=\"rank-list\">\n                <li *ngFor=\"let i of rankingListData; let idx = index\">\n                    <span class=\"number\" [ngClass]=\"{ active: idx < 3 }\">{{ idx + 1 }}</span>\n                    <span class=\"title\">{{ i.title }}</span>\n                    <span class=\"value\">{{ i.total }}</span>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/routes/desktop/city-cost/city-cost.component.css":
/*!******************************************************************!*\
  !*** ./src/app/routes/desktop/city-cost/city-cost.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app_component_header {\r\n  background-color: white;\r\n  margin: 0;\r\n  color: gray;\r\n  font-size: 16px;\r\n  height: 25px;\r\n  line-height: 20px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n  padding-top: 5px;\r\n  padding-bottom: 5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL2Rlc2t0b3AvY2l0eS1jb3N0L2NpdHktY29zdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsZUFBZTtFQUNmLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvcm91dGVzL2Rlc2t0b3AvY2l0eS1jb3N0L2NpdHktY29zdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcF9jb21wb25lbnRfaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW46IDA7XHJcbiAgY29sb3I6IGdyYXk7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGhlaWdodDogMjVweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/routes/desktop/city-cost/city-cost.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/routes/desktop/city-cost/city-cost.component.ts ***!
  \*****************************************************************/
/*! exports provided: CityCostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityCostComponent", function() { return CityCostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CityCostComponent = class CityCostComponent {
    constructor() {
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
        this.option = {
            title: {
                show: false,
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)',
            },
            legend: {
                type: 'scroll',
                orient: 'vertical',
                x: 'left',
                data: []
            },
            series: [
                {
                    name: '整体消费情况',
                    type: 'pie',
                    radius: '75%',
                    center: ['50%', '55%'],
                    data: [],
                    label: {
                        show: false
                    },
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)',
                        }
                    },
                },
            ],
        };
    }
    ngOnInit() {
        this.data.map(item => {
            this.option.legend.data.push(item.label);
            this.option.series[0].data.push({
                value: item.value,
                name: item.label
            });
        });
    }
    onChartInit(ev) {
        this.echartInstance = ev;
    }
    onclick(city) {
        console.log(city);
    }
    onSelectedCyc() { }
};
CityCostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-city-cost',
        template: __webpack_require__(/*! raw-loader!./city-cost.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/desktop/city-cost/city-cost.component.html"),
        styles: [__webpack_require__(/*! ./city-cost.component.css */ "./src/app/routes/desktop/city-cost/city-cost.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CityCostComponent);



/***/ }),

/***/ "./src/app/routes/desktop/component-header/component-header.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/routes/desktop/component-header/component-header.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host-context(app-component-header) {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.app_component_header {\r\n  background-color: white;\r\n  margin: 0;\r\n  color: gray;\r\n  font-size: 16px;\r\n  height: 25px;\r\n  line-height: 20px;\r\n  padding-left: 10px;\r\n}\r\n\r\n.set {\r\n  float: right;\r\n  right: 10px;\r\n}\r\n\r\n.set i:nth-child(1) {\r\n  margin: 0 5px 0 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL2Rlc2t0b3AvY29tcG9uZW50LWhlYWRlci9jb21wb25lbnQtaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsZUFBZTtFQUNmLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9kZXNrdG9wL2NvbXBvbmVudC1oZWFkZXIvY29tcG9uZW50LWhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QtY29udGV4dChhcHAtY29tcG9uZW50LWhlYWRlcikge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmFwcF9jb21wb25lbnRfaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW46IDA7XHJcbiAgY29sb3I6IGdyYXk7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGhlaWdodDogMjVweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5zZXQge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICByaWdodDogMTBweDtcclxufVxyXG5cclxuLnNldCBpOm50aC1jaGlsZCgxKSB7XHJcbiAgbWFyZ2luOiAwIDVweCAwIDA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/routes/desktop/component-header/component-header.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/routes/desktop/component-header/component-header.component.ts ***!
  \*******************************************************************************/
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
        // tslint:disable-next-line: component-selector
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./component-header.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/desktop/component-header/component-header.component.html"),
        styles: [__webpack_require__(/*! ./component-header.component.css */ "./src/app/routes/desktop/component-header/component-header.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ComponentHeaderComponent);



/***/ }),

/***/ "./src/app/routes/desktop/desktop-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/routes/desktop/desktop-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: DesktopRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesktopRoutingModule", function() { return DesktopRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/main.component */ "./src/app/routes/desktop/main/main.component.ts");




const routes = [{ path: 'main', component: _main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"] }];
let DesktopRoutingModule = class DesktopRoutingModule {
};
DesktopRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DesktopRoutingModule);



/***/ }),

/***/ "./src/app/routes/desktop/desktop.module.ts":
/*!**************************************************!*\
  !*** ./src/app/routes/desktop/desktop.module.ts ***!
  \**************************************************/
/*! exports provided: DesktopModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesktopModule", function() { return DesktopModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared */ "./src/app/shared/index.ts");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/fesm2015/ngx-echarts.js");
/* harmony import */ var _desktop_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./desktop-routing.module */ "./src/app/routes/desktop/desktop-routing.module.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/main.component */ "./src/app/routes/desktop/main/main.component.ts");
/* harmony import */ var _component_header_component_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component-header/component-header.component */ "./src/app/routes/desktop/component-header/component-header.component.ts");
/* harmony import */ var _city_cost_city_cost_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./city-cost/city-cost.component */ "./src/app/routes/desktop/city-cost/city-cost.component.ts");
/* harmony import */ var _shop_view_shop_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shop-view/shop-view.component */ "./src/app/routes/desktop/shop-view/shop-view.component.ts");
/* harmony import */ var _top_prod_top_prod_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./top-prod/top-prod.component */ "./src/app/routes/desktop/top-prod/top-prod.component.ts");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_10__);











const COMPONENTS = [_main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"], _component_header_component_header_component__WEBPACK_IMPORTED_MODULE_6__["ComponentHeaderComponent"]];
const COMPONENTS_NOROUNT = [];
let DesktopModule = class DesktopModule {
};
DesktopModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _desktop_routing_module__WEBPACK_IMPORTED_MODULE_4__["DesktopRoutingModule"], ngx_echarts__WEBPACK_IMPORTED_MODULE_3__["NgxEchartsModule"], primeng_table__WEBPACK_IMPORTED_MODULE_10__["TableModule"]],
        declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT, _city_cost_city_cost_component__WEBPACK_IMPORTED_MODULE_7__["CityCostComponent"], _shop_view_shop_view_component__WEBPACK_IMPORTED_MODULE_8__["ShopViewComponent"], _top_prod_top_prod_component__WEBPACK_IMPORTED_MODULE_9__["TopProdComponent"]],
        entryComponents: COMPONENTS_NOROUNT,
    })
], DesktopModule);



/***/ }),

/***/ "./src/app/routes/desktop/main/main.component.css":
/*!********************************************************!*\
  !*** ./src/app/routes/desktop/main/main.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back {\r\n  background-color: white;\r\n  height: 300px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL2Rlc2t0b3AvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvcm91dGVzL2Rlc2t0b3AvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFjayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/routes/desktop/main/main.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/routes/desktop/main/main.component.ts ***!
  \*******************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainComponent = class MainComponent {
    constructor() { }
    ngOnInit() { }
};
MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dsk-main',
        template: __webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/desktop/main/main.component.html"),
        styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/routes/desktop/main/main.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MainComponent);



/***/ }),

/***/ "./src/app/routes/desktop/shop-view/shop-view.component.less":
/*!*******************************************************************!*\
  !*** ./src/app/routes/desktop/shop-view/shop-view.component.less ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app_component_header {\n  background-color: white;\n  margin: 0;\n  color: gray;\n  font-size: 16px;\n  height: 25px;\n  line-height: 20px;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL2Rlc2t0b3Avc2hvcC12aWV3L0U6L0NvZGUvbmctYWxhaW4tbWFzdGVyL3NyYy9hcHAvcm91dGVzL2Rlc2t0b3Avc2hvcC12aWV3L3Nob3Atdmlldy5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvcm91dGVzL2Rlc2t0b3Avc2hvcC12aWV3L3Nob3Atdmlldy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9kZXNrdG9wL3Nob3Atdmlldy9zaG9wLXZpZXcuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwX2NvbXBvbmVudF9oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG4iLCIuYXBwX2NvbXBvbmVudF9oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/routes/desktop/shop-view/shop-view.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/routes/desktop/shop-view/shop-view.component.ts ***!
  \*****************************************************************/
/*! exports provided: ShopViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopViewComponent", function() { return ShopViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_assets_data_shop_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/data/shop-view */ "./src/assets/data/shop-view.ts");
/* harmony import */ var src_assets_data_shop_pay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/assets/data/shop-pay */ "./src/assets/data/shop-pay.ts");




let ShopViewComponent = class ShopViewComponent {
    constructor() {
        this.option = {
            title: {
                text: '商家交易',
                show: false
            },
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
            dataZoom: [
                {
                    show: true,
                    realtime: true,
                    start: 65,
                    end: 85
                },
                {
                    type: 'inside',
                    realtime: true,
                    start: 65,
                    end: 85
                }
            ],
            legend: {
                data: ['交易次数', '浏览次数']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            dataset: [
                {
                    dimensions: ['x', 'y'],
                    source: []
                }, {
                    dimensions: ['x', 'y'],
                    source: []
                }
            ],
            xAxis: {
                type: 'time',
                boundaryGap: false
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '交易次数',
                    type: 'line',
                    datasetIndex: 0,
                    encode: { x: 'x', y: 'y' }
                },
                {
                    name: '浏览次数',
                    type: 'line',
                    datasetIndex: 1,
                    encode: { x: 'x', y: 'y' }
                }
            ]
        };
        src_assets_data_shop_pay__WEBPACK_IMPORTED_MODULE_3__["PayData"].map(item => {
            this.option.dataset[1].source.push({
                x: item.time, y: item.count
            });
        });
        src_assets_data_shop_view__WEBPACK_IMPORTED_MODULE_2__["ViewData"].map(item => {
            this.option.dataset[0].source.push({
                x: item.time, y: item.count
            });
        });
    }
    ngOnInit() {
    }
    onChartInit(ec) {
    }
};
ShopViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shop-view',
        template: __webpack_require__(/*! raw-loader!./shop-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/desktop/shop-view/shop-view.component.html"),
        styles: [__webpack_require__(/*! ./shop-view.component.less */ "./src/app/routes/desktop/shop-view/shop-view.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ShopViewComponent);



/***/ }),

/***/ "./src/app/routes/desktop/top-prod/top-prod.component.less":
/*!*****************************************************************!*\
  !*** ./src/app/routes/desktop/top-prod/top-prod.component.less ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".rank-list {\n  padding: 0;\n  list-style: none;\n}\n.rank-list li {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-top: 6px;\n}\n.rank-list li span {\n  color: black;\n  font-size: 14px;\n  line-height: 18px;\n}\n.rank-list li .number {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  margin-top: 1.5px;\n  margin-right: 16px;\n  font-weight: 600;\n  font-size: 11px;\n  line-height: 20px;\n  text-align: center;\n  background-color: lightgrey;\n  border-radius: 20px;\n}\n.rank-list li .number.active {\n  color: #fff;\n  background-color: #314659;\n}\n.rank-list li .title {\n  -webkit-box-flex: 1;\n          flex: 1;\n  margin-right: 8px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.rank-list li .value {\n  margin-right: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL2Rlc2t0b3AvdG9wLXByb2QvRTovQ29kZS9uZy1hbGFpbi1tYXN0ZXIvc3JjL2FwcC9yb3V0ZXMvZGVza3RvcC90b3AtcHJvZC90b3AtcHJvZC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvcm91dGVzL2Rlc2t0b3AvdG9wLXByb2QvdG9wLXByb2QuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUNDRjtBREhBO0VBS0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGVBQUE7QUNDSjtBRFJBO0VBVU0sWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0NOO0FEYkE7RUFnQk0scUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQ0FOO0FERU07RUFDRSxXQUFBO0VBQ0EseUJBQUE7QUNBUjtBRDlCQTtFQW1DTSxtQkFBQTtVQUFBLE9BQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0ZOO0FEckNBO0VBMkNNLGtCQUFBO0FDSE4iLCJmaWxlIjoic3JjL2FwcC9yb3V0ZXMvZGVza3RvcC90b3AtcHJvZC90b3AtcHJvZC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yYW5rLWxpc3Qge1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuXG4gIGxpIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogNnB4O1xuXG4gICAgc3BhbiB7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICB9XG5cbiAgICAubnVtYmVyIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgbWFyZ2luLXRvcDogMS41cHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuXG4gICAgICAmLmFjdGl2ZSB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzE0NjU5O1xuICAgICAgfVxuICAgIH1cblxuICAgIC50aXRsZSB7XG4gICAgICBmbGV4OiAxO1xuICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIH1cblxuICAgIC52YWx1ZSB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxuICB9XG59XG4iLCIucmFuay1saXN0IHtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5yYW5rLWxpc3QgbGkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG4ucmFuay1saXN0IGxpIHNwYW4ge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG4ucmFuay1saXN0IGxpIC5udW1iZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDEuNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuLnJhbmstbGlzdCBsaSAubnVtYmVyLmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzE0NjU5O1xufVxuLnJhbmstbGlzdCBsaSAudGl0bGUge1xuICBmbGV4OiAxO1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4ucmFuay1saXN0IGxpIC52YWx1ZSB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/routes/desktop/top-prod/top-prod.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/routes/desktop/top-prod/top-prod.component.ts ***!
  \***************************************************************/
/*! exports provided: TopProdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopProdComponent", function() { return TopProdComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_assets_data_cate_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/data/cate-name */ "./src/assets/data/cate-name.ts");



let TopProdComponent = class TopProdComponent {
    constructor() {
        this.option = {
            title: {
                text: '商店人员消费'
            },
            tooltip: {
                trigger: 'axis',
                x: 'center'
            },
            legend: {
                data: ['人均消费', '用户总付费次数'],
                x: 'right'
            },
            grid: {
                left: '5%',
                right: '10%',
                bottom: '10%',
                top: '15%'
            },
            xAxis: [
                {
                    type: 'category',
                    data: []
                }
            ],
            yAxis: [
                {
                    type: 'value'
                },
                {
                    type: 'value',
                    postion: 'right'
                }
            ],
            series: [
                {
                    name: '人均消费',
                    type: 'bar',
                    barWidth: 30,
                    data: [],
                },
                {
                    name: '用户总付费次数',
                    type: 'line',
                    yAxisIndex: 1,
                    data: []
                }
            ]
        };
        this.rankingListData = [];
        src_assets_data_cate_name__WEBPACK_IMPORTED_MODULE_2__["CateData"].map(item => {
            this.rankingListData.push({
                title: item.shop_id + "-" + item.cate_name,
                total: item.pay_c
            });
            this.option.xAxis[0].data.push(item.shop_id);
            this.option.series[0].data.push(item.per_pay);
            this.option.series[1].data.push(item.pay_c);
        });
    }
    ngOnInit() {
    }
    onChartInit(ec) {
    }
};
TopProdComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-top-prod',
        template: __webpack_require__(/*! raw-loader!./top-prod.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/desktop/top-prod/top-prod.component.html"),
        styles: [__webpack_require__(/*! ./top-prod.component.less */ "./src/app/routes/desktop/top-prod/top-prod.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TopProdComponent);



/***/ }),

/***/ "./src/assets/data/cate-name.ts":
/*!**************************************!*\
  !*** ./src/assets/data/cate-name.ts ***!
  \**************************************/
/*! exports provided: CateData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CateData", function() { return CateData; });
// 排名前十的数据
const v = [
    { shop_id: 1629, per_pay: 20, cate_name: '超市', pay_c: 680464 },
    { shop_id: 58, per_pay: 19, cate_name: '超市', pay_c: 476209 },
    { shop_id: 1928, per_pay: 15, cate_name: '快餐', pay_c: 418208 },
    { shop_id: 517, per_pay: 17, cate_name: '超市', pay_c: 380184 },
    { shop_id: 1821, per_pay: 19, cate_name: '超市', pay_c: 287665 },
    { shop_id: 731, per_pay: 1, cate_name: '便利店', pay_c: 261765 },
    { shop_id: 934, per_pay: 18, cate_name: '超市', pay_c: 252281 },
    { shop_id: 1296, per_pay: 19, cate_name: '超市', pay_c: 224266 },
    { shop_id: 1302, per_pay: 19, cate_name: '超市', pay_c: 220913 },
    { shop_id: 1745, per_pay: 13, cate_name: '快餐', pay_c: 219332 }
];
const CateData = v;


/***/ }),

/***/ "./src/assets/data/shop-pay.ts":
/*!*************************************!*\
  !*** ./src/assets/data/shop-pay.ts ***!
  \*************************************/
/*! exports provided: PayData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayData", function() { return PayData; });
const v = [{ count: 66, time: '2015/06/26' },
    { count: 106, time: '2015/06/27' },
    { count: 146, time: '2015/06/28' },
    { count: 492, time: '2015/06/29' },
    { count: 598, time: '2015/06/30' },
    { count: 721, time: '2015/07/01' },
    { count: 1577, time: '2015/07/02' },
    { count: 2084, time: '2015/07/03' },
    { count: 2115, time: '2015/07/04' },
    { count: 1973, time: '2015/07/05' },
    { count: 1785, time: '2015/07/06' },
    { count: 2005, time: '2015/07/07' },
    { count: 2507, time: '2015/07/08' },
    { count: 3066, time: '2015/07/09' },
    { count: 3893, time: '2015/07/10' },
    { count: 3367, time: '2015/07/11' },
    { count: 4404, time: '2015/07/12' },
    { count: 4434, time: '2015/07/13' },
    { count: 4853, time: '2015/07/14' },
    { count: 4812, time: '2015/07/15' },
    { count: 5625, time: '2015/07/16' },
    { count: 11677, time: '2015/07/17' },
    { count: 16070, time: '2015/07/18' },
    { count: 17266, time: '2015/07/19' },
    { count: 13968, time: '2015/07/20' },
    { count: 14152, time: '2015/07/21' },
    { count: 15243, time: '2015/07/22' },
    { count: 15615, time: '2015/07/23' },
    { count: 18276, time: '2015/07/24' },
    { count: 19634, time: '2015/07/25' },
    { count: 18807, time: '2015/07/26' },
    { count: 14813, time: '2015/07/27' },
    { count: 15517, time: '2015/07/28' },
    { count: 15326, time: '2015/07/29' },
    { count: 15561, time: '2015/07/30' },
    { count: 17267, time: '2015/07/31' },
    { count: 17695, time: '2015/08/01' },
    { count: 18881, time: '2015/08/02' },
    { count: 15430, time: '2015/08/03' },
    { count: 16981, time: '2015/08/04' },
    { count: 17530, time: '2015/08/05' },
    { count: 18729, time: '2015/08/06' },
    { count: 21821, time: '2015/08/07' },
    { count: 25015, time: '2015/08/08' },
    { count: 23559, time: '2015/08/09' },
    { count: 19672, time: '2015/08/10' },
    { count: 23164, time: '2015/08/11' },
    { count: 25043, time: '2015/08/12' },
    { count: 25043, time: '2015/08/13' },
    { count: 27998, time: '2015/08/14' },
    { count: 30873, time: '2015/08/15' },
    { count: 31460, time: '2015/08/16' },
    { count: 25210, time: '2015/08/17' },
    { count: 27107, time: '2015/08/18' },
    { count: 29008, time: '2015/08/19' },
    { count: 34869, time: '2015/08/20' },
    { count: 32919, time: '2015/08/21' },
    { count: 35856, time: '2015/08/22' },
    { count: 36461, time: '2015/08/23' },
    { count: 31290, time: '2015/08/24' },
    { count: 32940, time: '2015/08/25' },
    { count: 32998, time: '2015/08/26' },
    { count: 34167, time: '2015/08/27' },
    { count: 37318, time: '2015/08/28' },
    { count: 41667, time: '2015/08/29' },
    { count: 40393, time: '2015/08/30' },
    { count: 32048, time: '2015/08/31' },
    { count: 31078, time: '2015/09/01' },
    { count: 36355, time: '2015/09/02' },
    { count: 38502, time: '2015/09/03' },
    { count: 38839, time: '2015/09/04' },
    { count: 37215, time: '2015/09/05' },
    { count: 29811, time: '2015/09/06' },
    { count: 27994, time: '2015/09/07' },
    { count: 29714, time: '2015/09/08' },
    { count: 37299, time: '2015/09/09' },
    { count: 32783, time: '2015/09/10' },
    { count: 36512, time: '2015/09/11' },
    { count: 41418, time: '2015/09/12' },
    { count: 41156, time: '2015/09/13' },
    { count: 16998, time: '2015/09/14' },
    { count: 17401, time: '2015/09/15' },
    { count: 18005, time: '2015/09/16' },
    { count: 18169, time: '2015/09/17' },
    { count: 21478, time: '2015/09/18' },
    { count: 23850, time: '2015/09/19' },
    { count: 22621, time: '2015/09/20' },
    { count: 18408, time: '2015/09/21' },
    { count: 19058, time: '2015/09/22' },
    { count: 19833, time: '2015/09/23' },
    { count: 22416, time: '2015/09/24' },
    { count: 27715, time: '2015/09/25' },
    { count: 29645, time: '2015/09/26' },
    { count: 27239, time: '2015/09/27' },
    { count: 27266, time: '2015/09/28' },
    { count: 30864, time: '2015/09/29' },
    { count: 43328, time: '2015/09/30' },
    { count: 38096, time: '2015/10/01' },
    { count: 38530, time: '2015/10/02' },
    { count: 37773, time: '2015/10/03' },
    { count: 36306, time: '2015/10/04' },
    { count: 37752, time: '2015/10/05' },
    { count: 40747, time: '2015/10/06' },
    { count: 41989, time: '2015/10/07' },
    { count: 36931, time: '2015/10/08' },
    { count: 40972, time: '2015/10/09' },
    { count: 46519, time: '2015/10/10' },
    { count: 53048, time: '2015/10/11' },
    { count: 47752, time: '2015/10/12' },
    { count: 50603, time: '2015/10/13' },
    { count: 52182, time: '2015/10/14' },
    { count: 54558, time: '2015/10/15' },
    { count: 63286, time: '2015/10/16' },
    { count: 66234, time: '2015/10/17' },
    { count: 64730, time: '2015/10/18' },
    { count: 55380, time: '2015/10/19' },
    { count: 57376, time: '2015/10/20' },
    { count: 60140, time: '2015/10/21' },
    { count: 60807, time: '2015/10/22' },
    { count: 67729, time: '2015/10/23' },
    { count: 71557, time: '2015/10/24' },
    { count: 69670, time: '2015/10/25' },
    { count: 61632, time: '2015/10/26' },
    { count: 60321, time: '2015/10/27' },
    { count: 65707, time: '2015/10/28' },
    { count: 54539, time: '2015/10/29' },
    { count: 62923, time: '2015/10/30' },
    { count: 66338, time: '2015/10/31' },
    { count: 65573, time: '2015/11/01' },
    { count: 65066, time: '2015/11/02' },
    { count: 65274, time: '2015/11/03' },
    { count: 66532, time: '2015/11/04' },
    { count: 68432, time: '2015/11/05' },
    { count: 79685, time: '2015/11/06' },
    { count: 82056, time: '2015/11/07' },
    { count: 77957, time: '2015/11/08' },
    { count: 67107, time: '2015/11/09' },
    { count: 69574, time: '2015/11/10' },
    { count: 76898, time: '2015/11/11' },
    { count: 67814, time: '2015/11/12' },
    { count: 88044, time: '2015/11/13' },
    { count: 95387, time: '2015/11/14' },
    { count: 95099, time: '2015/11/15' },
    { count: 66255, time: '2015/11/16' },
    { count: 66982, time: '2015/11/17' },
    { count: 76217, time: '2015/11/18' },
    { count: 76636, time: '2015/11/19' },
    { count: 88305, time: '2015/11/20' },
    { count: 87590, time: '2015/11/21' },
    { count: 89594, time: '2015/11/22' },
    { count: 79154, time: '2015/11/23' },
    { count: 79099, time: '2015/11/24' },
    { count: 85616, time: '2015/11/25' },
    { count: 86743, time: '2015/11/26' },
    { count: 104836, time: '2015/11/27' },
    { count: 115077, time: '2015/11/28' },
    { count: 106623, time: '2015/11/29' },
    { count: 92353, time: '2015/11/30' },
    { count: 75837, time: '2015/12/01' },
    { count: 75700, time: '2015/12/02' },
    { count: 74592, time: '2015/12/03' },
    { count: 88760, time: '2015/12/04' },
    { count: 88453, time: '2015/12/05' },
    { count: 95897, time: '2015/12/06' },
    { count: 101779, time: '2015/12/07' },
    { count: 110451, time: '2015/12/08' },
    { count: 106138, time: '2015/12/09' },
    { count: 118999, time: '2015/12/10' },
    { count: 144727, time: '2015/12/11' },
    { count: 125680, time: '2015/12/13' },
    { count: 100509, time: '2015/12/14' },
    { count: 104678, time: '2015/12/15' },
    { count: 104015, time: '2015/12/16' },
    { count: 102027, time: '2015/12/17' },
    { count: 120540, time: '2015/12/18' },
    { count: 133880, time: '2015/12/19' },
    { count: 122255, time: '2015/12/20' },
    { count: 104384, time: '2015/12/21' },
    { count: 104114, time: '2015/12/22' },
    { count: 104640, time: '2015/12/23' },
    { count: 123203, time: '2015/12/24' },
    { count: 132727, time: '2015/12/25' },
    { count: 131964, time: '2015/12/26' },
    { count: 125136, time: '2015/12/27' },
    { count: 109267, time: '2015/12/28' },
    { count: 103793, time: '2015/12/29' },
    { count: 107640, time: '2015/12/30' },
    { count: 133573, time: '2015/12/31' },
    { count: 129481, time: '2016/01/01' },
    { count: 117321, time: '2016/01/02' },
    { count: 117181, time: '2016/01/03' },
    { count: 85807, time: '2016/01/04' },
    { count: 96734, time: '2016/01/05' },
    { count: 103868, time: '2016/01/06' },
    { count: 103855, time: '2016/01/07' },
    { count: 121600, time: '2016/01/08' },
    { count: 131354, time: '2016/01/09' },
    { count: 119196, time: '2016/01/10' },
    { count: 98164, time: '2016/01/11' },
    { count: 104702, time: '2016/01/12' },
    { count: 109482, time: '2016/01/13' },
    { count: 107640, time: '2016/01/14' },
    { count: 121717, time: '2016/01/15' },
    { count: 131932, time: '2016/01/16' },
    { count: 123533, time: '2016/01/17' },
    { count: 103566, time: '2016/01/18' },
    { count: 105861, time: '2016/01/19' },
    { count: 107056, time: '2016/01/20' },
    { count: 103444, time: '2016/01/21' },
    { count: 110749, time: '2016/01/22' },
    { count: 119345, time: '2016/01/23' },
    { count: 114340, time: '2016/01/24' },
    { count: 114654, time: '2016/01/25' },
    { count: 113708, time: '2016/01/26' },
    { count: 110957, time: '2016/01/27' },
    { count: 111132, time: '2016/01/28' },
    { count: 128821, time: '2016/01/29' },
    { count: 174219, time: '2016/01/30' },
    { count: 172409, time: '2016/01/31' },
    { count: 126319, time: '2016/02/01' },
    { count: 131337, time: '2016/02/02' },
    { count: 133910, time: '2016/02/03' },
    { count: 134234, time: '2016/02/04' },
    { count: 143015, time: '2016/02/05' },
    { count: 139926, time: '2016/02/06' },
    { count: 83922, time: '2016/02/07' },
    { count: 81352, time: '2016/02/08' },
    { count: 83109, time: '2016/02/09' },
    { count: 85749, time: '2016/02/10' },
    { count: 89848, time: '2016/02/11' },
    { count: 94258, time: '2016/02/12' },
    { count: 98415, time: '2016/02/13' },
    { count: 123922, time: '2016/02/14' },
    { count: 111398, time: '2016/02/15' },
    { count: 112727, time: '2016/02/16' },
    { count: 111095, time: '2016/02/17' },
    { count: 111185, time: '2016/02/18' },
    { count: 115273, time: '2016/02/19' },
    { count: 127764, time: '2016/02/20' },
    { count: 126825, time: '2016/02/21' },
    { count: 110011, time: '2016/02/22' },
    { count: 105158, time: '2016/02/23' },
    { count: 109627, time: '2016/02/24' },
    { count: 108989, time: '2016/02/25' },
    { count: 123656, time: '2016/02/26' },
    { count: 140833, time: '2016/02/27' },
    { count: 142735, time: '2016/02/28' },
    { count: 112867, time: '2016/02/29' },
    { count: 108638, time: '2016/03/01' },
    { count: 110626, time: '2016/03/02' },
    { count: 111993, time: '2016/03/03' },
    { count: 131938, time: '2016/03/04' },
    { count: 147558, time: '2016/03/05' },
    { count: 140272, time: '2016/03/06' },
    { count: 109224, time: '2016/03/07' },
    { count: 108272, time: '2016/03/08' },
    { count: 102511, time: '2016/03/09' },
    { count: 104981, time: '2016/03/10' },
    { count: 125191, time: '2016/03/11' },
    { count: 145300, time: '2016/03/12' },
    { count: 136185, time: '2016/03/13' },
    { count: 117338, time: '2016/03/14' },
    { count: 117484, time: '2016/03/15' },
    { count: 127898, time: '2016/03/16' },
    { count: 122478, time: '2016/03/17' },
    { count: 159106, time: '2016/03/18' },
    { count: 175766, time: '2016/03/19' },
    { count: 155941, time: '2016/03/20' },
    { count: 129535, time: '2016/03/21' },
    { count: 127349, time: '2016/03/22' },
    { count: 132911, time: '2016/03/23' },
    { count: 134317, time: '2016/03/24' },
    { count: 181202, time: '2016/03/25' },
    { count: 202939, time: '2016/03/26' },
    { count: 182216, time: '2016/03/27' },
    { count: 147604, time: '2016/03/28' },
    { count: 136433, time: '2016/03/29' },
    { count: 138130, time: '2016/03/30' },
    { count: 145261, time: '2016/03/31' },
    { count: 184489, time: '2016/04/01' },
    { count: 178571, time: '2016/04/02' },
    { count: 156676, time: '2016/04/03' },
    { count: 150437, time: '2016/04/04' },
    { count: 131820, time: '2016/04/05' },
    { count: 130159, time: '2016/04/06' },
    { count: 139455, time: '2016/04/07' },
    { count: 174844, time: '2016/04/08' },
    { count: 190741, time: '2016/04/09' },
    { count: 174344, time: '2016/04/10' },
    { count: 141286, time: '2016/04/11' },
    { count: 136232, time: '2016/04/12' },
    { count: 148317, time: '2016/04/13' },
    { count: 149287, time: '2016/04/14' },
    { count: 181052, time: '2016/04/15' },
    { count: 190022, time: '2016/04/16' },
    { count: 182820, time: '2016/04/17' },
    { count: 149206, time: '2016/04/18' },
    { count: 143873, time: '2016/04/19' },
    { count: 138265, time: '2016/04/20' },
    { count: 155973, time: '2016/04/21' },
    { count: 180801, time: '2016/04/22' },
    { count: 185586, time: '2016/04/23' },
    { count: 176496, time: '2016/04/24' },
    { count: 148441, time: '2016/04/25' },
    { count: 141609, time: '2016/04/26' },
    { count: 157220, time: '2016/04/27' },
    { count: 170554, time: '2016/04/28' },
    { count: 199770, time: '2016/04/29' },
    { count: 197849, time: '2016/04/30' },
    { count: 177301, time: '2016/05/01' },
    { count: 162060, time: '2016/05/02' },
    { count: 155478, time: '2016/05/03' },
    { count: 158569, time: '2016/05/04' },
    { count: 155511, time: '2016/05/05' },
    { count: 192697, time: '2016/05/06' },
    { count: 199068, time: '2016/05/07' },
    { count: 187317, time: '2016/05/08' },
    { count: 148259, time: '2016/05/09' },
    { count: 158669, time: '2016/05/10' },
    { count: 164516, time: '2016/05/11' },
    { count: 167779, time: '2016/05/12' },
    { count: 184983, time: '2016/05/13' },
    { count: 203165, time: '2016/05/14' },
    { count: 180305, time: '2016/05/15' },
    { count: 177732, time: '2016/05/16' },
    { count: 174664, time: '2016/05/17' },
    { count: 178051, time: '2016/05/18' },
    { count: 179154, time: '2016/05/19' },
    { count: 199547, time: '2016/05/20' },
    { count: 211416, time: '2016/05/21' },
    { count: 216349, time: '2016/05/22' },
    { count: 172039, time: '2016/05/23' },
    { count: 174465, time: '2016/05/24' },
    { count: 179862, time: '2016/05/25' },
    { count: 172888, time: '2016/05/26' },
    { count: 195121, time: '2016/05/27' },
    { count: 203366, time: '2016/05/28' },
    { count: 204737, time: '2016/05/29' },
    { count: 178371, time: '2016/05/30' },
    { count: 177561, time: '2016/05/31' },
    { count: 205834, time: '2016/06/01' },
    { count: 178905, time: '2016/06/02' },
    { count: 194149, time: '2016/06/03' },
    { count: 219104, time: '2016/06/04' },
    { count: 208381, time: '2016/06/05' },
    { count: 182188, time: '2016/06/06' },
    { count: 183955, time: '2016/06/07' },
    { count: 208165, time: '2016/06/08' },
    { count: 200401, time: '2016/06/09' },
    { count: 188413, time: '2016/06/10' },
    { count: 191298, time: '2016/06/11' },
    { count: 170217, time: '2016/06/12' },
    { count: 184078, time: '2016/06/13' },
    { count: 184873, time: '2016/06/14' },
    { count: 193172, time: '2016/06/15' },
    { count: 201488, time: '2016/06/16' },
    { count: 218238, time: '2016/06/17' },
    { count: 229451, time: '2016/06/18' },
    { count: 219382, time: '2016/06/19' },
    { count: 201354, time: '2016/06/20' },
    { count: 212833, time: '2016/06/21' },
    { count: 216047, time: '2016/06/22' },
    { count: 231364, time: '2016/06/23' },
    { count: 246247, time: '2016/06/24' },
    { count: 280164, time: '2016/06/25' },
    { count: 245236, time: '2016/06/26' },
    { count: 209408, time: '2016/06/27' },
    { count: 205501, time: '2016/06/28' },
    { count: 214366, time: '2016/06/29' },
    { count: 218216, time: '2016/06/30' },
    { count: 225332, time: '2016/07/01' },
    { count: 225355, time: '2016/07/02' },
    { count: 230519, time: '2016/07/03' },
    { count: 213082, time: '2016/07/04' },
    { count: 215890, time: '2016/07/05' },
    { count: 220958, time: '2016/07/06' },
    { count: 226357, time: '2016/07/07' },
    { count: 246569, time: '2016/07/08' },
    { count: 239735, time: '2016/07/09' },
    { count: 233801, time: '2016/07/10' },
    { count: 217146, time: '2016/07/11' },
    { count: 221310, time: '2016/07/12' },
    { count: 218573, time: '2016/07/13' },
    { count: 216830, time: '2016/07/14' },
    { count: 237022, time: '2016/07/15' },
    { count: 241828, time: '2016/07/16' },
    { count: 240751, time: '2016/07/17' },
    { count: 230859, time: '2016/07/18' },
    { count: 225390, time: '2016/07/19' },
    { count: 230481, time: '2016/07/20' },
    { count: 239484, time: '2016/07/21' },
    { count: 260298, time: '2016/07/22' },
    { count: 243812, time: '2016/07/23' },
    { count: 237202, time: '2016/07/24' },
    { count: 244119, time: '2016/07/25' },
    { count: 240034, time: '2016/07/26' },
    { count: 240352, time: '2016/07/27' },
    { count: 236432, time: '2016/07/28' },
    { count: 250913, time: '2016/07/29' },
    { count: 244468, time: '2016/07/30' },
    { count: 240124, time: '2016/07/31' },
    { count: 233114, time: '2016/08/01' },
    { count: 216076, time: '2016/08/02' },
    { count: 232766, time: '2016/08/03' },
    { count: 236863, time: '2016/08/04' },
    { count: 270229, time: '2016/08/05' },
    { count: 256661, time: '2016/08/06' },
    { count: 253605, time: '2016/08/07' },
    { count: 234278, time: '2016/08/08' },
    { count: 314485, time: '2016/08/09' },
    { count: 277381, time: '2016/08/10' },
    { count: 276688, time: '2016/08/11' },
    { count: 294097, time: '2016/08/12' },
    { count: 304432, time: '2016/08/13' },
    { count: 295288, time: '2016/08/14' },
    { count: 261987, time: '2016/08/15' },
    { count: 261202, time: '2016/08/16' },
    { count: 261842, time: '2016/08/17' },
    { count: 271823, time: '2016/08/18' },
    { count: 297353, time: '2016/08/19' },
    { count: 288716, time: '2016/08/20' },
    { count: 283479, time: '2016/08/21' },
    { count: 274387, time: '2016/08/22' },
    { count: 276071, time: '2016/08/23' },
    { count: 278423, time: '2016/08/24' },
    { count: 275239, time: '2016/08/25' },
    { count: 289695, time: '2016/08/26' },
    { count: 305034, time: '2016/08/27' },
    { count: 291224, time: '2016/08/28' },
    { count: 269383, time: '2016/08/29' },
    { count: 268625, time: '2016/08/30' },
    { count: 273588, time: '2016/08/31' },
    { count: 254906, time: '2016/09/01' },
    { count: 273374, time: '2016/09/02' },
    { count: 293227, time: '2016/09/03' },
    { count: 283846, time: '2016/09/04' },
    { count: 254224, time: '2016/09/05' },
    { count: 247931, time: '2016/09/06' },
    { count: 251316, time: '2016/09/07' },
    { count: 265207, time: '2016/09/08' },
    { count: 284773, time: '2016/09/09' },
    { count: 300261, time: '2016/09/10' },
    { count: 282101, time: '2016/09/11' },
    { count: 260763, time: '2016/09/12' },
    { count: 257530, time: '2016/09/13' },
    { count: 281020, time: '2016/09/14' },
    { count: 258159, time: '2016/09/15' },
    { count: 253803, time: '2016/09/16' },
    { count: 268980, time: '2016/09/17' },
    { count: 255630, time: '2016/09/18' },
    { count: 246914, time: '2016/09/19' },
    { count: 253882, time: '2016/09/20' },
    { count: 255924, time: '2016/09/21' },
    { count: 262707, time: '2016/09/22' },
    { count: 293171, time: '2016/09/23' },
    { count: 317806, time: '2016/09/24' },
    { count: 307414, time: '2016/09/25' },
    { count: 265600, time: '2016/09/26' },
    { count: 268269, time: '2016/09/27' },
    { count: 250895, time: '2016/09/28' },
    { count: 261029, time: '2016/09/29' },
    { count: 335004, time: '2016/09/30' },
    { count: 295820, time: '2016/10/01' },
    { count: 260223, time: '2016/10/02' },
    { count: 246571, time: '2016/10/03' },
    { count: 238954, time: '2016/10/04' },
    { count: 246263, time: '2016/10/05' },
    { count: 247746, time: '2016/10/06' },
    { count: 259234, time: '2016/10/07' },
    { count: 261220, time: '2016/10/08' },
    { count: 269257, time: '2016/10/09' },
    { count: 260412, time: '2016/10/10' },
    { count: 266280, time: '2016/10/11' },
    { count: 267088, time: '2016/10/12' },
    { count: 269436, time: '2016/10/13' },
    { count: 295354, time: '2016/10/14' },
    { count: 317817, time: '2016/10/15' },
    { count: 317476, time: '2016/10/16' },
    { count: 271399, time: '2016/10/17' },
    { count: 264152, time: '2016/10/18' },
    { count: 266425, time: '2016/10/19' },
    { count: 267360, time: '2016/10/20' },
    { count: 282287, time: '2016/10/21' },
    { count: 306856, time: '2016/10/22' },
    { count: 329555, time: '2016/10/23' },
    { count: 277768, time: '2016/10/24' },
    { count: 275986, time: '2016/10/25' },
    { count: 265346, time: '2016/10/26' },
    { count: 278055, time: '2016/10/27' },
    { count: 300797, time: '2016/10/28' },
    { count: 321920, time: '2016/10/29' },
    { count: 317073, time: '2016/10/30' },
    { count: 270748, time: '2016/10/31' }
];
const PayData = v;


/***/ }),

/***/ "./src/assets/data/shop-view.ts":
/*!**************************************!*\
  !*** ./src/assets/data/shop-view.ts ***!
  \**************************************/
/*! exports provided: ViewData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewData", function() { return ViewData; });
const v = [{ count: 42244, time: '2016/06/22' },
    { count: 63589, time: '2016/06/23' },
    { count: 71587, time: '2016/06/24' },
    { count: 111912, time: '2016/06/25' },
    { count: 51091, time: '2016/06/26' },
    { count: 36920, time: '2016/06/27' },
    { count: 42162, time: '2016/06/28' },
    { count: 38979, time: '2016/06/29' },
    { count: 37886, time: '2016/06/30' },
    { count: 38369, time: '2016/07/01' },
    { count: 39490, time: '2016/07/02' },
    { count: 37169, time: '2016/07/03' },
    { count: 31715, time: '2016/07/04' },
    { count: 31162, time: '2016/07/05' },
    { count: 31969, time: '2016/07/06' },
    { count: 44089, time: '2016/07/07' },
    { count: 33192, time: '2016/07/08' },
    { count: 34535, time: '2016/07/09' },
    { count: 35545, time: '2016/07/10' },
    { count: 30419, time: '2016/07/11' },
    { count: 30140, time: '2016/07/12' },
    { count: 31350, time: '2016/07/13' },
    { count: 31038, time: '2016/07/14' },
    { count: 31864, time: '2016/07/15' },
    { count: 40009, time: '2016/07/16' },
    { count: 39206, time: '2016/07/17' },
    { count: 43440, time: '2016/07/18' },
    { count: 45723, time: '2016/07/19' },
    { count: 45990, time: '2016/07/20' },
    { count: 46449, time: '2016/07/21' },
    { count: 42336, time: '2016/07/23' },
    { count: 40316, time: '2016/07/24' },
    { count: 48079, time: '2016/07/26' },
    { count: 47895, time: '2016/07/27' },
    { count: 43137, time: '2016/07/28' },
    { count: 36851, time: '2016/07/29' },
    { count: 32907, time: '2016/07/30' },
    { count: 32261, time: '2016/07/31' },
    { count: 50717, time: '2016/08/01' },
    { count: 51636, time: '2016/08/02' },
    { count: 54036, time: '2016/08/03' },
    { count: 55015, time: '2016/08/04' },
    { count: 52451, time: '2016/08/05' },
    { count: 41976, time: '2016/08/06' },
    { count: 42106, time: '2016/08/07' },
    { count: 161450, time: '2016/08/08' },
    { count: 90543, time: '2016/08/09' },
    { count: 62593, time: '2016/08/10' },
    { count: 73452, time: '2016/08/11' },
    { count: 64406, time: '2016/08/12' },
    { count: 68728, time: '2016/08/13' },
    { count: 65337, time: '2016/08/14' },
    { count: 53543, time: '2016/08/15' },
    { count: 52209, time: '2016/08/16' },
    { count: 56061, time: '2016/08/17' },
    { count: 56070, time: '2016/08/18' },
    { count: 58051, time: '2016/08/19' },
    { count: 50646, time: '2016/08/20' },
    { count: 47801, time: '2016/08/21' },
    { count: 50171, time: '2016/08/22' },
    { count: 50516, time: '2016/08/23' },
    { count: 51030, time: '2016/08/24' },
    { count: 48060, time: '2016/08/25' },
    { count: 49941, time: '2016/08/26' },
    { count: 80648, time: '2016/08/27' },
    { count: 50936, time: '2016/08/28' },
    { count: 43631, time: '2016/08/29' },
    { count: 39512, time: '2016/08/30' },
    { count: 39465, time: '2016/08/31' },
    { count: 38691, time: '2016/09/01' },
    { count: 39810, time: '2016/09/02' },
    { count: 40537, time: '2016/09/03' },
    { count: 40397, time: '2016/09/04' },
    { count: 40200, time: '2016/09/05' },
    { count: 37567, time: '2016/09/06' },
    { count: 36929, time: '2016/09/07' },
    { count: 35075, time: '2016/09/08' },
    { count: 37200, time: '2016/09/09' },
    { count: 39726, time: '2016/09/10' },
    { count: 38330, time: '2016/09/11' },
    { count: 31318, time: '2016/09/12' },
    { count: 29832, time: '2016/09/13' },
    { count: 32208, time: '2016/09/14' },
    { count: 37590, time: '2016/09/15' },
    { count: 34372, time: '2016/09/16' },
    { count: 31163, time: '2016/09/17' },
    { count: 26612, time: '2016/09/18' },
    { count: 25406, time: '2016/09/19' },
    { count: 25483, time: '2016/09/20' },
    { count: 25436, time: '2016/09/21' },
    { count: 24173, time: '2016/09/22' },
    { count: 26479, time: '2016/09/23' },
    { count: 30553, time: '2016/09/24' },
    { count: 32407, time: '2016/09/25' },
    { count: 28319, time: '2016/09/26' },
    { count: 28647, time: '2016/09/27' },
    { count: 31110, time: '2016/09/28' },
    { count: 33584, time: '2016/09/29' },
    { count: 47894, time: '2016/09/30' },
    { count: 43873, time: '2016/10/01' },
    { count: 40944, time: '2016/10/02' },
    { count: 38692, time: '2016/10/03' },
    { count: 39105, time: '2016/10/04' },
    { count: 39833, time: '2016/10/05' },
    { count: 40746, time: '2016/10/06' },
    { count: 44903, time: '2016/10/07' },
    { count: 40871, time: '2016/10/08' },
    { count: 41784, time: '2016/10/09' },
    { count: 37970, time: '2016/10/10' },
    { count: 38148, time: '2016/10/11' },
    { count: 37426, time: '2016/10/12' },
    { count: 35923, time: '2016/10/13' },
    { count: 35740, time: '2016/10/14' },
    { count: 38999, time: '2016/10/15' },
    { count: 38248, time: '2016/10/16' },
    { count: 30928, time: '2016/10/17' },
    { count: 31690, time: '2016/10/18' },
    { count: 32578, time: '2016/10/19' },
    { count: 32206, time: '2016/10/20' },
    { count: 34287, time: '2016/10/21' },
    { count: 38070, time: '2016/10/22' },
    { count: 34939, time: '2016/10/23' },
    { count: 28126, time: '2016/10/24' },
    { count: 27332, time: '2016/10/25' },
    { count: 28953, time: '2016/10/26' },
    { count: 32052, time: '2016/10/27' },
    { count: 32023, time: '2016/10/28' },
    { count: 43921, time: '2016/10/29' },
    { count: 44056, time: '2016/10/30' },
    { count: 39549, time: '2016/10/31' }
];
const ViewData = v;


/***/ })

}]);
//# sourceMappingURL=desktop-desktop-module-es2015.js.map