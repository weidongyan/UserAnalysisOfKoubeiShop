(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["spark-stream-sparkstream-module"],{

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var CityComponent = /** @class */ (function () {
    function CityComponent() {
        var _this = this;
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
        var cc = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(2000);
        cc.subscribe(function (res) {
            for (var i = 0; i < _this.data.length; i++) {
                _this.option.dataset[0].source[i].y += Math.ceil(Math.random() * 100);
            }
            _this.echartIntance.setOption(_this.option);
        });
    }
    CityComponent.prototype.ngOnInit = function () {
        for (var i = this.data.length - 1; i >= 0; i--) {
            this.option.dataset[0].source.push({
                x: this.data[i].label, y: this.data[i].value
            });
        }
    };
    CityComponent.prototype.onChartInit = function (ec) {
        this.echartIntance = ec;
    };
    CityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ss-city',
            template: __webpack_require__(/*! raw-loader!./city.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/spark-stream/city/city.component.html"),
            styles: [__webpack_require__(/*! ./city.component.less */ "./src/app/routes/spark-stream/city/city.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CityComponent);
    return CityComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent.prototype.onChartInit = function (ec) {
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/spark-stream/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.less */ "./src/app/routes/spark-stream/main/main.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var ShopComponent = /** @class */ (function () {
    function ShopComponent() {
        var _this = this;
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
        var cc = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(2000);
        cc.subscribe(function (res) {
            for (var i = 0; i < 2000; i++) {
                _this.option.dataset[0].source[i].y += Math.ceil(Math.random() * 10);
            }
            _this.echartIntance.setOption(_this.option);
        });
    }
    ShopComponent.prototype.ngOnInit = function () {
        for (var i = 0; i < 2000; i++) {
            this.option.dataset[0].source.push({
                x: i + 1, y: Math.ceil(Math.random() * 100)
            });
        }
    };
    ShopComponent.prototype.onChartInit = function (ec) {
        this.echartIntance = ec;
    };
    ShopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ss-shop',
            template: __webpack_require__(/*! raw-loader!./shop.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/spark-stream/shop/shop.component.html"),
            styles: [__webpack_require__(/*! ./shop.component.less */ "./src/app/routes/spark-stream/shop/shop.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ShopComponent);
    return ShopComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/main.component */ "./src/app/routes/spark-stream/main/main.component.ts");




var routes = [{ path: 'main', component: _main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"] }];
var SparkStreamRoutingModule = /** @class */ (function () {
    function SparkStreamRoutingModule() {
    }
    SparkStreamRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SparkStreamRoutingModule);
    return SparkStreamRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/fesm5/ngx-echarts.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/main.component */ "./src/app/routes/spark-stream/main/main.component.ts");
/* harmony import */ var _spark_stream_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./spark-stream-routing.module */ "./src/app/routes/spark-stream/spark-stream-routing.module.ts");
/* harmony import */ var _shop_shop_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shop/shop.component */ "./src/app/routes/spark-stream/shop/shop.component.ts");
/* harmony import */ var _city_city_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./city/city.component */ "./src/app/routes/spark-stream/city/city.component.ts");
/* harmony import */ var _common_component_common_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common-component/common.module */ "./src/app/routes/common-component/common.module.ts");









var SparkStreamModule = /** @class */ (function () {
    function SparkStreamModule() {
    }
    SparkStreamModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"], _shop_shop_component__WEBPACK_IMPORTED_MODULE_6__["ShopComponent"], _city_city_component__WEBPACK_IMPORTED_MODULE_7__["CityComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ngx_echarts__WEBPACK_IMPORTED_MODULE_3__["NgxEchartsModule"], _spark_stream_routing_module__WEBPACK_IMPORTED_MODULE_5__["SparkStreamRoutingModule"], _common_component_common_module__WEBPACK_IMPORTED_MODULE_8__["CommonComponentModule"]
            ]
        })
    ], SparkStreamModule);
    return SparkStreamModule;
}());



/***/ })

}]);
//# sourceMappingURL=spark-stream-sparkstream-module-es5.js.map