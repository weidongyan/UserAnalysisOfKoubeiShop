(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["spark-rdd-spark-rdd-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/spark-rdd/like/like/like.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/spark-rdd/like/like/like.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-tabset style=\"padding-left:5px;\">\n    <nz-tab nzTitle=\"奶茶店\">\n        <div class=\"ui-g\">\n            <div *ngFor=\"let item of datas\" class=\"ui-g-12 ui-md-3\">\n                <div class=\"title\" [style.background-color]=\"item.color\">\n                    <span>{{item.title}}</span>\n                </div>\n                <div class=\"rank-list\">\n                    <li *ngFor=\"let i of item.items; let idx = index\">\n                        <span class=\"number\" [ngClass]=\"{ active: idx < 3 }\">{{idx + 1}}</span>\n                        <span class=\"lt\">{{i.shop_id }}</span>\n                        <span class=\"value\">{{i.score }}</span>\n                    </li>\n                </div>\n            </div>\n        </div>\n    </nz-tab>\n    <nz-tab nzTitle=\"中式快餐\">\n        <div class=\"ui-g\">\n            <div *ngFor=\"let item of datas1\" class=\"ui-g-12 ui-md-3\">\n                <div class=\"title\" [style.background-color]=\"item.color\">\n                    <span>{{item.title}}</span>\n                </div>\n                <div class=\"rank-list\">\n                    <li *ngFor=\"let i of item.items; let idx = index\">\n                        <span class=\"number\" [ngClass]=\"{ active: idx < 3 }\">{{idx + 1}}</span>\n                        <span class=\"lt\">{{i.shop_id }}</span>\n                        <span class=\"value\">{{i.score }}</span>\n                    </li>\n                </div>\n            </div>\n        </div>\n    </nz-tab>\n</nz-tabset>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/spark-rdd/liucun/liucun.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/spark-rdd/liucun/liucun.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-table [columns]=\"cols\" [value]=\"datas\" [scrollable]=\"true\" scrollHeight=\"250px\">\n    <ng-template pTemplate=\"colgroup\" let-columns>\n        <colgroup>\n            <col *ngFor=\"let col of columns\" style=\"width:100px\">\n        </colgroup>\n    </ng-template>\n    <ng-template pTemplate=\"header\" let-columns>\n        <tr>\n            <th *ngFor=\"let col of columns\">\n                {{col.header}}\n            </th>\n        </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n        <tr>\n            <td *ngFor=\"let col of columns\">\n                {{rowData[col.field]}}\n            </td>\n        </tr>\n    </ng-template>\n</p-table>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/spark-rdd/main/main.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/spark-rdd/main/main.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n        <con-header [header]=\"'平均日交易额'\"></con-header>\r\n        <div class=\"back\">\r\n            <sk-top></sk-top>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n        <con-header [header]=\"'最受欢迎'\"></con-header>\r\n        <div class=\"back\">\r\n            <sk-like></sk-like>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-12\">\r\n        <con-header [header]=\"'留存分析'\"></con-header>\r\n        <div class=\"back\">\r\n            <spark-liucun></spark-liucun>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n        <con-header [header]=\"'用户浏览量'\"></con-header>\r\n        <div class=\"back\">\r\n            <spark-view></spark-view>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-6\">\r\n        <con-header [header]=\"'用户浏览量Top50'\"></con-header>\r\n        <div class=\"back\">\r\n            <spark-top50></spark-top50>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/spark-rdd/top/top.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/spark-rdd/top/top.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n    <div class=\"ui-g-12 ui-md-4\">\n        <div class=\"rank\">\n            <ul class=\"rank-list\">\n                <li *ngFor=\"let i of rankingListData; let idx = index\">\n                    <span class=\"number\" [ngClass]=\"{ active: idx < 3 }\">{{ idx + 1 }}</span>\n                    <span class=\"title\">{{ i.title }}</span>\n                    <span class=\"value\">{{ i.total }}</span>\n                </li>\n            </ul>\n        </div>\n    </div>\n    <div class=\"ui-g-12 ui-md-8\">\n        <div echarts [options]=\"option\" style=\"width:100%;height:270px;\"></div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/spark-rdd/top50/top50.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/spark-rdd/top50/top50.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-table [columns]=\"columns\" [value]=\"datas\" [scrollable]=\"true\" scrollHeight=\"250px\">\n    <ng-template pTemplate=\"header\" let-columns>\n        <tr>\n            <th *ngFor=\"let col of columns\">\n                {{col.header}}\n            </th>\n        </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n        <tr>\n            <td *ngFor=\"let col of columns\">\n                {{rowData[col.field]}}\n            </td>\n        </tr>\n    </ng-template>\n</p-table>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routes/spark-rdd/view/view.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routes/spark-rdd/view/view.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height:40px;vertical-align: middle;\">\n    <table>\n        <tr>\n            <td>\n                <label style=\"padding-right: 5px;\">商店</label>\n                <nz-select style=\"width: 120px;\" [(ngModel)]=\"selectedValue\" nzSize='small' nzAllowClear>\n                    <nz-option *ngFor=\"let i of shops\" [nzLabel]=\"i.label\" [nzValue]=\"i.value\"></nz-option>\n                </nz-select>\n            </td>\n            <td>\n                <nz-range-picker [(ngModel)]=\"dateRange\" [nzSize]=\"'small'\" (ngModelChange)=\"onChange($event)\">\n                </nz-range-picker>\n            </td>\n            <td>\n                <button nz-button nzType=\"primary\" [nzSize]=\"'small'\">查询</button>\n            </td>\n        </tr>\n    </table>\n</div>\n<div style=\"float:left;width:80px;margin-right:10px;\">\n    <ul nz-menu nzMode=\"inline\">\n        <li nz-menu-item (click)=\"show('day')\" nzSelected>\n            天\n        </li>\n        <li nz-menu-item (click)=\"show('week')\">\n            周\n        </li>\n        <li nz-menu-item (click)=\"show('month')\">\n            月\n        </li>\n    </ul>\n</div>\n<div style=\"float:left;\" [style.width.px]=\"width\">\n    <div [ngSwitch]=\"selectedItem\">\n        <div *ngSwitchCase=\"'day'\">\n            <div echarts [options]=\"option_day\" (chartInit)=\"onChartInit($event)\" style=\"width:100%;height:270px;\">\n            </div>\n        </div>\n        <div *ngSwitchCase=\"'week'\">\n            <div echarts [options]=\"option_week\" (chartInit)=\"onChartInit($event)\" style=\"width:100%;height:270px;\">\n            </div>\n        </div>\n        <div *ngSwitchCase=\"'month'\">\n            <div echarts [options]=\"option_month\" (chartInit)=\"onChartInit($event)\" style=\"width:100%;height:270px;\">\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/routes/spark-rdd/like/like/like.component.less":
/*!****************************************************************!*\
  !*** ./src/app/routes/spark-rdd/like/like/like.component.less ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  height: 30px;\n  text-align: center;\n  width: 100%;\n  font-size: 15px;\n  font-weight: bold;\n  border-radius: 3px;\n  vertical-align: middle;\n  color: white;\n  padding: 5px;\n}\n.rank-list {\n  padding: 0;\n  list-style: none;\n}\n.rank-list li {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-top: 10px;\n}\n.rank-list li span {\n  color: black;\n  font-size: 14px;\n  line-height: 18px;\n}\n.rank-list li .number {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  margin-top: 1.5px;\n  margin-right: 8px;\n  font-weight: 600;\n  font-size: 11px;\n  line-height: 20px;\n  text-align: center;\n  background-color: lightgrey;\n}\n.rank-list li .number.active {\n  color: #fff;\n  background-color: #314659;\n}\n.rank-list li .lt {\n  -webkit-box-flex: 1;\n          flex: 1;\n  margin-right: 4px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.rank-list li .value {\n  margin-right: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL3NwYXJrLXJkZC9saWtlL2xpa2UvRTovQ29kZS9uZy1hbGFpbi1tYXN0ZXIvc3JjL2FwcC9yb3V0ZXMvc3BhcmstcmRkL2xpa2UvbGlrZS9saWtlLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9yb3V0ZXMvc3BhcmstcmRkL2xpa2UvbGlrZS9saWtlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0NGO0FERUE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUNBRjtBREZBO0VBS0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGdCQUFBO0FDQUo7QURQQTtFQVVNLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNBTjtBRFpBO0VBZ0JNLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FDRE47QURJTTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBQ0ZSO0FENUJBO0VBbUNNLG1CQUFBO1VBQUEsT0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDSk47QURuQ0E7RUEyQ00sa0JBQUE7QUNMTiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9zcGFyay1yZGQvbGlrZS9saWtlL2xpa2UuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5yYW5rLWxpc3Qge1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuXG4gIGxpIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcblxuICAgIHNwYW4ge1xuICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgfVxuXG4gICAgLm51bWJlciB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB3aWR0aDogMjBweDtcbiAgICAgIGhlaWdodDogMjBweDtcbiAgICAgIG1hcmdpbi10b3A6IDEuNXB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG5cblxuICAgICAgJi5hY3RpdmUge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMxNDY1OTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubHQge1xuICAgICAgZmxleDogMTtcbiAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB9XG5cbiAgICAudmFsdWUge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIH1cbiAgfVxufVxuIiwiLnRpdGxlIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNXB4O1xufVxuLnJhbmstbGlzdCB7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4ucmFuay1saXN0IGxpIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5yYW5rLWxpc3QgbGkgc3BhbiB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cbi5yYW5rLWxpc3QgbGkgLm51bWJlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luLXRvcDogMS41cHg7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDExcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbn1cbi5yYW5rLWxpc3QgbGkgLm51bWJlci5hY3RpdmUge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMxNDY1OTtcbn1cbi5yYW5rLWxpc3QgbGkgLmx0IHtcbiAgZmxleDogMTtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLnJhbmstbGlzdCBsaSAudmFsdWUge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/routes/spark-rdd/like/like/like.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/routes/spark-rdd/like/like/like.component.ts ***!
  \**************************************************************/
/*! exports provided: LikeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikeComponent", function() { return LikeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LikeComponent = /** @class */ (function () {
    function LikeComponent() {
        this.datas = [];
        this.datas1 = [];
        this.naicha = [{ "shopId": "135", "popularScore": "2.66", "cityName": "上海", "rank": 1 },
            { "shopId": "1193", "popularScore": "2.66", "cityName": "上海", "rank": 2 },
            { "shopId": "800", "popularScore": "2.36", "cityName": "上海", "rank": 3 },
            { "shopId": "910", "popularScore": "2.36", "cityName": "上海", "rank": 4 },
            { "shopId": "1241", "popularScore": "2.36", "cityName": "上海", "rank": 5 },
            { "shopId": "215", "popularScore": "1.62", "cityName": "北京", "rank": 1 },
            { "shopId": "390", "popularScore": "1.62", "cityName": "北京", "rank": 2 },
            { "shopId": "796", "popularScore": "3.12", "cityName": "广州", "rank": 1 },
            { "shopId": "913", "popularScore": "2.82", "cityName": "广州", "rank": 2 },
            { "shopId": "1828", "popularScore": "1.92", "cityName": "广州", "rank": 3 },
            { "shopId": "244", "popularScore": "1.02", "cityName": "广州", "rank": 4 },
            { "shopId": "752", "popularScore": "5.06", "cityName": "深圳", "rank": 1 },
            { "shopId": "1182", "popularScore": "2.82", "cityName": "深圳", "rank": 2 }];
        this.zhongcan = [{ "shopId": "761", "popularScore": "4.20", "cityName": "深圳", "rank": 1 },
            { "shopId": "1781", "popularScore": "4.18", "cityName": "深圳", "rank": 2 },
            { "shopId": "1795", "popularScore": "3.28", "cityName": "深圳", "rank": 3 },
            { "shopId": "289", "popularScore": "3.12", "cityName": "深圳", "rank": 4 },
            { "shopId": "1701", "popularScore": "3.12", "cityName": "深圳", "rank": 5 },
            { "shopId": "824", "popularScore": "5.82", "cityName": "上海", "rank": 1 },
            { "shopId": "689", "popularScore": "5.68", "cityName": "上海", "rank": 2 },
            { "shopId": "982", "popularScore": "5.38", "cityName": "上海", "rank": 3 },
            { "shopId": "1683", "popularScore": "5.38", "cityName": "上海", "rank": 4 },
            { "shopId": "895", "popularScore": "5.22", "cityName": "上海", "rank": 5 },
            { "shopId": "238", "popularScore": "6.28", "cityName": "北京", "rank": 1 },
            { "shopId": "1533", "popularScore": "5.82", "cityName": "北京", "rank": 2 },
            { "shopId": "1371", "popularScore": "5.66", "cityName": "北京", "rank": 3 },
            { "shopId": "623", "popularScore": "5.22", "cityName": "北京", "rank": 4 },
            { "shopId": "1727", "popularScore": "4.02", "cityName": "北京", "rank": 5 },
            { "shopId": "495", "popularScore": "5.10", "cityName": "广州", "rank": 1 },
            { "shopId": "1600", "popularScore": "4.94", "cityName": "广州", "rank": 2 },
            { "shopId": "1655", "popularScore": "4.48", "cityName": "广州", "rank": 3 },
            { "shopId": "98", "popularScore": "3.74", "cityName": "广州", "rank": 4 },
            { "shopId": "133", "popularScore": "3.28", "cityName": "广州", "rank": 5 }];
        this.types = [{ label: '奶茶店', value: 'nc' }, { label: '中式快餐', value: 'kc' }];
        this.selectedType = this.types[0];
    }
    LikeComponent.prototype.ngOnInit = function () {
        this.datas = [
            { title: "北京", color: "#1890ff", items: [] },
            { title: "上海", color: "#52c41a", items: [] },
            { title: "广州", color: "#fa8c16", items: [] },
            { title: "深圳", color: "#eb2f96", items: [] }
        ];
        this.getData(this.naicha, this.datas);
        this.datas1 = [
            { title: "北京", color: "#1890ff", items: [] },
            { title: "上海", color: "#52c41a", items: [] },
            { title: "广州", color: "#fa8c16", items: [] },
            { title: "深圳", color: "#eb2f96", items: [] }
        ];
        this.getData(this.zhongcan, this.datas1);
    };
    LikeComponent.prototype.getData = function (ary, data) {
        data.map(function (item) {
            item.items = [];
            ary.map(function (res) {
                if (item.title === res.cityName) {
                    item.items.push({
                        shop_id: res.shopId,
                        score: res.popularScore
                    });
                }
            });
        });
    };
    LikeComponent.prototype.onChangeYcType = function () {
    };
    LikeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sk-like',
            template: __webpack_require__(/*! raw-loader!./like.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/spark-rdd/like/like/like.component.html"),
            styles: [__webpack_require__(/*! ./like.component.less */ "./src/app/routes/spark-rdd/like/like/like.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LikeComponent);
    return LikeComponent;
}());



/***/ }),

/***/ "./src/app/routes/spark-rdd/liucun/liucun.component.less":
/*!***************************************************************!*\
  !*** ./src/app/routes/spark-rdd/liucun/liucun.component.less ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9zcGFyay1yZGQvbGl1Y3VuL2xpdWN1bi5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/routes/spark-rdd/liucun/liucun.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/routes/spark-rdd/liucun/liucun.component.ts ***!
  \*************************************************************/
/*! exports provided: LiucunComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiucunComponent", function() { return LiucunComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_assets_data_liucun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/data/liucun */ "./src/assets/data/liucun.ts");



var LiucunComponent = /** @class */ (function () {
    function LiucunComponent() {
        this.cols = [{ header: '日期', field: 'firstTime' }];
        for (var i = 0; i < 32; i++) {
            this.cols.push({ header: '第' + (i + 1) + '天', field: 'day_' + i });
        }
    }
    LiucunComponent.prototype.ngOnInit = function () {
        this.datas = src_assets_data_liucun__WEBPACK_IMPORTED_MODULE_2__["liucun"];
    };
    LiucunComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'spark-liucun',
            template: __webpack_require__(/*! raw-loader!./liucun.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/spark-rdd/liucun/liucun.component.html"),
            styles: [__webpack_require__(/*! ./liucun.component.less */ "./src/app/routes/spark-rdd/liucun/liucun.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LiucunComponent);
    return LiucunComponent;
}());



/***/ }),

/***/ "./src/app/routes/spark-rdd/main/main.component.less":
/*!***********************************************************!*\
  !*** ./src/app/routes/spark-rdd/main/main.component.less ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back {\n  background-color: white;\n  height: 300px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL3NwYXJrLXJkZC9tYWluL0U6L0NvZGUvbmctYWxhaW4tbWFzdGVyL3NyYy9hcHAvcm91dGVzL3NwYXJrLXJkZC9tYWluL21haW4uY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3JvdXRlcy9zcGFyay1yZGQvbWFpbi9tYWluLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7RUFDQSxhQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9yb3V0ZXMvc3BhcmstcmRkL21haW4vbWFpbi5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGhlaWdodDogMzAwcHg7XG59XG4iLCIuYmFjayB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDMwMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/routes/spark-rdd/main/main.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/routes/spark-rdd/main/main.component.ts ***!
  \*********************************************************/
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
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/spark-rdd/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.less */ "./src/app/routes/spark-rdd/main/main.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/routes/spark-rdd/spark-rdd-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/routes/spark-rdd/spark-rdd-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: SparkRddRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SparkRddRoutingModule", function() { return SparkRddRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/main.component */ "./src/app/routes/spark-rdd/main/main.component.ts");




var routes = [{ path: 'main', component: _main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"] }];
var SparkRddRoutingModule = /** @class */ (function () {
    function SparkRddRoutingModule() {
    }
    SparkRddRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SparkRddRoutingModule);
    return SparkRddRoutingModule;
}());



/***/ }),

/***/ "./src/app/routes/spark-rdd/spark-rdd.module.ts":
/*!******************************************************!*\
  !*** ./src/app/routes/spark-rdd/spark-rdd.module.ts ***!
  \******************************************************/
/*! exports provided: SparkRddModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SparkRddModule", function() { return SparkRddModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared */ "./src/app/shared/index.ts");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/fesm5/ngx-echarts.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/toolbar */ "./node_modules/primeng/toolbar.js");
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_toolbar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _spark_rdd_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./spark-rdd-routing.module */ "./src/app/routes/spark-rdd/spark-rdd-routing.module.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main/main.component */ "./src/app/routes/spark-rdd/main/main.component.ts");
/* harmony import */ var _top_top_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./top/top.component */ "./src/app/routes/spark-rdd/top/top.component.ts");
/* harmony import */ var _common_component_common_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common-component/common.module */ "./src/app/routes/common-component/common.module.ts");
/* harmony import */ var _like_like_like_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./like/like/like.component */ "./src/app/routes/spark-rdd/like/like/like.component.ts");
/* harmony import */ var _liucun_liucun_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./liucun/liucun.component */ "./src/app/routes/spark-rdd/liucun/liucun.component.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./view/view.component */ "./src/app/routes/spark-rdd/view/view.component.ts");
/* harmony import */ var _top50_top50_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./top50/top50.component */ "./src/app/routes/spark-rdd/top50/top50.component.ts");














var COMPONENTS = [_main_main_component__WEBPACK_IMPORTED_MODULE_7__["MainComponent"], _top_top_component__WEBPACK_IMPORTED_MODULE_8__["TopComponent"], _liucun_liucun_component__WEBPACK_IMPORTED_MODULE_11__["LiucunComponent"], _view_view_component__WEBPACK_IMPORTED_MODULE_12__["ViewComponent"], _like_like_like_component__WEBPACK_IMPORTED_MODULE_10__["LikeComponent"], _top50_top50_component__WEBPACK_IMPORTED_MODULE_13__["Top50Component"]];
var SparkRddModule = /** @class */ (function () {
    function SparkRddModule() {
    }
    SparkRddModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _spark_rdd_routing_module__WEBPACK_IMPORTED_MODULE_6__["SparkRddRoutingModule"], ngx_echarts__WEBPACK_IMPORTED_MODULE_3__["NgxEchartsModule"], primeng_toolbar__WEBPACK_IMPORTED_MODULE_5__["ToolbarModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_4__["TableModule"], _common_component_common_module__WEBPACK_IMPORTED_MODULE_9__["CommonComponentModule"]],
            declarations: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](COMPONENTS),
            entryComponents: COMPONENTS,
        })
    ], SparkRddModule);
    return SparkRddModule;
}());



/***/ }),

/***/ "./src/app/routes/spark-rdd/top/top.component.less":
/*!*********************************************************!*\
  !*** ./src/app/routes/spark-rdd/top/top.component.less ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".rank-list {\n  padding: 0;\n  list-style: none;\n}\n.rank-list li {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-top: 6px;\n}\n.rank-list li span {\n  color: black;\n  font-size: 14px;\n  line-height: 18px;\n}\n.rank-list li .number {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  margin-top: 1.5px;\n  margin-right: 16px;\n  font-weight: 600;\n  font-size: 11px;\n  line-height: 20px;\n  text-align: center;\n  background-color: lightgrey;\n}\n.rank-list li .number.active {\n  color: #fff;\n  background-color: #314659;\n}\n.rank-list li .title {\n  -webkit-box-flex: 1;\n          flex: 1;\n  margin-right: 8px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.rank-list li .value {\n  margin-right: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL3NwYXJrLXJkZC90b3AvRTovQ29kZS9uZy1hbGFpbi1tYXN0ZXIvc3JjL2FwcC9yb3V0ZXMvc3BhcmstcmRkL3RvcC90b3AuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3JvdXRlcy9zcGFyay1yZGQvdG9wL3RvcC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQ0NGO0FESEE7RUFLSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsZUFBQTtBQ0NKO0FEUkE7RUFVTSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ047QURiQTtFQWdCTSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQ0FOO0FER007RUFDRSxXQUFBO0VBQ0EseUJBQUE7QUNEUjtBRDdCQTtFQW1DTSxtQkFBQTtVQUFBLE9BQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0hOO0FEcENBO0VBMkNNLGtCQUFBO0FDSk4iLCJmaWxlIjoic3JjL2FwcC9yb3V0ZXMvc3BhcmstcmRkL3RvcC90b3AuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmFuay1saXN0IHtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcblxuICBsaSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDZweDtcblxuICAgIHNwYW4ge1xuICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgfVxuXG4gICAgLm51bWJlciB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB3aWR0aDogMjBweDtcbiAgICAgIGhlaWdodDogMjBweDtcbiAgICAgIG1hcmdpbi10b3A6IDEuNXB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xuXG5cbiAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMTQ2NTk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnRpdGxlIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgfVxuXG4gICAgLnZhbHVlIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG4gIH1cbn1cbiIsIi5yYW5rLWxpc3Qge1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLnJhbmstbGlzdCBsaSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cbi5yYW5rLWxpc3QgbGkgc3BhbiB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cbi5yYW5rLWxpc3QgbGkgLm51bWJlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luLXRvcDogMS41cHg7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG59XG4ucmFuay1saXN0IGxpIC5udW1iZXIuYWN0aXZlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMTQ2NTk7XG59XG4ucmFuay1saXN0IGxpIC50aXRsZSB7XG4gIGZsZXg6IDE7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbi5yYW5rLWxpc3QgbGkgLnZhbHVlIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/routes/spark-rdd/top/top.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/routes/spark-rdd/top/top.component.ts ***!
  \*******************************************************/
/*! exports provided: TopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopComponent", function() { return TopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_assets_data_top_spark__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/data/top-spark */ "./src/assets/data/top-spark.ts");



var TopComponent = /** @class */ (function () {
    function TopComponent() {
        this.rankingListData = [];
        this.option = {
            title: {
                text: '商店人员消费',
                show: false
            },
            tooltip: {
                trigger: 'axis',
                x: 'center'
            },
            legend: {
                data: ['平均日交易额'],
                x: 'right'
            },
            grid: {
                left: '15%',
                right: '10%',
                bottom: '10%',
                top: '15%'
            },
            xAxis: [
                {
                    type: 'value'
                }
            ],
            yAxis: [
                {
                    title: '商店ID',
                    type: 'category',
                    data: []
                }
            ],
            series: [
                {
                    name: '平均日交易额',
                    type: 'bar',
                    barWidth: 10,
                    data: [],
                }
            ]
        };
    }
    TopComponent.prototype.ngOnInit = function () {
        var _this = this;
        src_assets_data_top_spark__WEBPACK_IMPORTED_MODULE_2__["topspark"].map(function (item) {
            _this.rankingListData.push({
                title: item.shopId,
                total: item.avgPerDayPayCount
            });
            _this.option.yAxis[0].data.push(item.shopId);
            _this.option.series[0].data.push(item.avgPerDayPayCount);
        });
    };
    TopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sk-top',
            template: __webpack_require__(/*! raw-loader!./top.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/spark-rdd/top/top.component.html"),
            styles: [__webpack_require__(/*! ./top.component.less */ "./src/app/routes/spark-rdd/top/top.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TopComponent);
    return TopComponent;
}());



/***/ }),

/***/ "./src/app/routes/spark-rdd/top50/top50.component.less":
/*!*************************************************************!*\
  !*** ./src/app/routes/spark-rdd/top50/top50.component.less ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9zcGFyay1yZGQvdG9wNTAvdG9wNTAuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/routes/spark-rdd/top50/top50.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/routes/spark-rdd/top50/top50.component.ts ***!
  \***********************************************************/
/*! exports provided: Top50Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Top50Component", function() { return Top50Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_assets_data_view_top__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/data/view-top */ "./src/assets/data/view-top.ts");



var Top50Component = /** @class */ (function () {
    function Top50Component() {
        this.columns = [
            { header: '序号', field: 'xh' },
            { header: '商店', field: 'shopId' },
            { header: '浏览次数', field: 'viewCount' },
            { header: '城市', field: 'cityName' },
            { header: '人均消费', field: 'perPay' }
        ];
        this.datas = [];
        this.datas = src_assets_data_view_top__WEBPACK_IMPORTED_MODULE_2__["viewtop"];
        this.datas.map(function (item, index) {
            item.xh = index + 1;
        });
        // const cc = interval(2000)
        // cc.subscribe(res => {
        //   console.log("---------------------")
        // })
    }
    Top50Component.prototype.ngOnInit = function () {
    };
    Top50Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line: component-selector
            selector: 'spark-top50',
            template: __webpack_require__(/*! raw-loader!./top50.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/spark-rdd/top50/top50.component.html"),
            styles: [__webpack_require__(/*! ./top50.component.less */ "./src/app/routes/spark-rdd/top50/top50.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Top50Component);
    return Top50Component;
}());



/***/ }),

/***/ "./src/app/routes/spark-rdd/view/view.component.less":
/*!***********************************************************!*\
  !*** ./src/app/routes/spark-rdd/view/view.component.less ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9zcGFyay1yZGQvdmlldy92aWV3LmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/routes/spark-rdd/view/view.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/routes/spark-rdd/view/view.component.ts ***!
  \*********************************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_assets_data_view_day__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/data/view-day */ "./src/assets/data/view-day.ts");
/* harmony import */ var src_assets_data_view_weak__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/assets/data/view-weak */ "./src/assets/data/view-weak.ts");
/* harmony import */ var src_assets_data_view_mont__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/assets/data/view-mont */ "./src/assets/data/view-mont.ts");





var ViewComponent = /** @class */ (function () {
    function ViewComponent() {
        var _this = this;
        this.width = document.body.clientWidth / 2 - 150;
        this.option_day = {
            title: {
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
            legend: {
                show: false
            },
            grid: {
                top: '5%',
                left: '5%',
                right: '5%',
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
                type: 'time',
                boundaryGap: false
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '浏览次数',
                    type: 'line',
                    datasetIndex: 0,
                    encode: { x: 'x', y: 'y' }
                }
            ]
        };
        this.option_week = {
            title: {
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
            legend: {
                show: false
            },
            grid: {
                top: '5%',
                left: '5%',
                right: '5%',
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
                type: 'value'
            },
            series: [
                {
                    name: '浏览次数',
                    type: 'bar',
                    datasetIndex: 0,
                    barWidth: 10,
                    encode: { x: 'x', y: 'y' }
                }
            ]
        };
        this.option_month = {
            title: {
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
            legend: {
                show: false
            },
            grid: {
                top: '5%',
                left: '5%',
                right: '5%',
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
                type: 'value'
            },
            series: [
                {
                    name: '浏览次数',
                    type: 'bar',
                    barWidth: 20,
                    datasetIndex: 0,
                    encode: { x: 'x', y: 'y' }
                }
            ]
        };
        this.shops = [];
        this.selectedItem = 'day';
        for (var i = 0; i < 2000; i++)
            this.shops.push({ label: i + 1, value: i + 1 });
        this.selectedValue = this.shops[1196].value;
        this.dateRange = [new Date(2016, 5, 22), new Date(2016, 9, 31)];
        src_assets_data_view_day__WEBPACK_IMPORTED_MODULE_2__["viewday"].map(function (item) {
            _this.option_day.dataset[0].source.push({ x: item.timeStr, y: item.viewCount });
        });
        src_assets_data_view_weak__WEBPACK_IMPORTED_MODULE_3__["viewweek"].map(function (item) {
            _this.option_week.dataset[0].source.push({ x: item.weekOfYear, y: item.viewCount });
        });
        src_assets_data_view_mont__WEBPACK_IMPORTED_MODULE_4__["viewmonth"].map(function (item) {
            _this.option_month.dataset[0].source.push({ x: item.timeStr, y: item.viewCount });
        });
    }
    ViewComponent.prototype.ngOnInit = function () {
    };
    ViewComponent.prototype.onChange = function (e) {
        console.log(e);
        console.log(this.dateRange);
    };
    ViewComponent.prototype.show = function (tt) {
        this.selectedItem = tt;
    };
    ViewComponent.prototype.onChartInit = function (e) {
    };
    ViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'spark-view',
            template: __webpack_require__(/*! raw-loader!./view.component.html */ "./node_modules/raw-loader/index.js!./src/app/routes/spark-rdd/view/view.component.html"),
            styles: [__webpack_require__(/*! ./view.component.less */ "./src/app/routes/spark-rdd/view/view.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ViewComponent);
    return ViewComponent;
}());



/***/ }),

/***/ "./src/assets/data/liucun.ts":
/*!***********************************!*\
  !*** ./src/assets/data/liucun.ts ***!
  \***********************************/
/*! exports provided: liucun */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "liucun", function() { return liucun; });
var v = [{
        "firstTime": "2016-10-01",
        "day_0": 2895,
        "day_1": 98,
        "day_2": 115,
        "day_3": 96,
        "day_4": 114,
        "day_5": 98,
        "day_6": 126,
        "day_7": 86,
        "day_8": 106,
        "day_9": 81,
        "day_10": 76,
        "day_11": 88,
        "day_12": 82,
        "day_13": 90,
        "day_14": 123,
        "day_15": 145,
        "day_16": 76,
        "day_17": 75,
        "day_18": 62,
        "day_19": 71,
        "day_20": 77,
        "day_21": 127,
        "day_22": 155,
        "day_23": 0,
        "day_24": 0,
        "day_25": 0,
        "day_26": 75,
        "day_27": 57,
        "day_28": 0,
        "day_29": 0,
        "day_30": 0,
        "day_31": 0
    }, {
        "firstTime": "2016-10-02",
        "day_0": 2274,
        "day_1": 102,
        "day_2": 108,
        "day_3": 82,
        "day_4": 90,
        "day_5": 81,
        "day_6": 73,
        "day_7": 62,
        "day_8": 74,
        "day_9": 56,
        "day_10": 66,
        "day_11": 70,
        "day_12": 51,
        "day_13": 99,
        "day_14": 103,
        "day_15": 57,
        "day_16": 56,
        "day_17": 55,
        "day_18": 58,
        "day_19": 76,
        "day_20": 97,
        "day_21": 103,
        "day_22": 61,
        "day_23": 0,
        "day_24": 0,
        "day_25": 0,
        "day_26": 58,
        "day_27": 99,
        "day_28": 0,
        "day_29": 0,
        "day_30": 0,
        "day_31": 0
    }, {
        "firstTime": "2016-10-03",
        "day_0": 1905,
        "day_1": 52,
        "day_2": 67,
        "day_3": 53,
        "day_4": 82,
        "day_5": 58,
        "day_6": 68,
        "day_7": 47,
        "day_8": 51,
        "day_9": 57,
        "day_10": 51,
        "day_11": 64,
        "day_12": 85,
        "day_13": 92,
        "day_14": 59,
        "day_15": 54,
        "day_16": 49,
        "day_17": 51,
        "day_18": 47,
        "day_19": 77,
        "day_20": 86,
        "day_21": 64,
        "day_22": 53,
        "day_23": 0,
        "day_24": 0,
        "day_25": 0,
        "day_26": 66,
        "day_27": 92,
        "day_28": 0,
        "day_29": 0,
        "day_30": 0,
        "day_31": 0
    }, {
        "firstTime": "2016-10-04",
        "day_0": 1684,
        "day_1": 38,
        "day_2": 34,
        "day_3": 42,
        "day_4": 36,
        "day_5": 38,
        "day_6": 55,
        "day_7": 46,
        "day_8": 40,
        "day_9": 42,
        "day_10": 40,
        "day_11": 67,
        "day_12": 83,
        "day_13": 37,
        "day_14": 48,
        "day_15": 44,
        "day_16": 36,
        "day_17": 45,
        "day_18": 48,
        "day_19": 64,
        "day_20": 39,
        "day_21": 41,
        "day_22": 34,
        "day_23": 0,
        "day_24": 0,
        "day_25": 0,
        "day_26": 59,
        "day_27": 44,
        "day_28": 0,
        "day_29": 0,
        "day_30": 0,
        "day_31": 0
    }, {
        "firstTime": "2016-10-05",
        "day_0": 1707,
        "day_1": 35,
        "day_2": 47,
        "day_3": 35,
        "day_4": 34,
        "day_5": 52,
        "day_6": 31,
        "day_7": 42,
        "day_8": 39,
        "day_9": 50,
        "day_10": 80,
        "day_11": 70,
        "day_12": 42,
        "day_13": 34,
        "day_14": 39,
        "day_15": 40,
        "day_16": 56,
        "day_17": 60,
        "day_18": 62,
        "day_19": 48,
        "day_20": 38,
        "day_21": 27,
        "day_22": 52,
        "day_23": 0,
        "day_24": 0,
        "day_25": 0,
        "day_26": 47,
        "day_27": 0,
        "day_28": 0,
        "day_29": 0,
        "day_30": 0,
        "day_31": 0
    }, {
        "firstTime": "2016-10-06",
        "day_0": 1527,
        "day_1": 50,
        "day_2": 31,
        "day_3": 36,
        "day_4": 22,
        "day_5": 35,
        "day_6": 39,
        "day_7": 44,
        "day_8": 44,
        "day_9": 57,
        "day_10": 66,
        "day_11": 39,
        "day_12": 37,
        "day_13": 34,
        "day_14": 49,
        "day_15": 28,
        "day_16": 56,
        "day_17": 44,
        "day_18": 43,
        "day_19": 34,
        "day_20": 39,
        "day_21": 37,
        "day_22": 28,
        "day_23": 0,
        "day_24": 0,
        "day_25": 0,
        "day_26": 0,
        "day_27": 0,
        "day_28": 0,
        "day_29": 0,
        "day_30": 0,
        "day_31": 0
    }, {
        "firstTime": "2016-10-07",
        "day_0": 2081,
        "day_1": 37,
        "day_2": 53,
        "day_3": 34,
        "day_4": 35,
        "day_5": 58,
        "day_6": 51,
        "day_7": 52,
        "day_8": 84,
        "day_9": 92,
        "day_10": 38,
        "day_11": 46,
        "day_12": 44,
        "day_13": 37,
        "day_14": 49,
        "day_15": 75,
        "day_16": 87,
        "day_17": 42,
        "day_18": 42,
        "day_19": 46,
        "day_20": 55,
        "day_21": 63,
        "day_22": 74,
        "day_23": 0,
        "day_24": 0,
        "day_25": 0,
        "day_26": 0,
        "day_27": 0,
        "day_28": 0,
        "day_29": 0,
        "day_30": 0,
        "day_31": 0
    }, {
        "firstTime": "2016-10-08",
        "day_0": 1499,
        "day_1": 55,
        "day_2": 40,
        "day_3": 41,
        "day_4": 45,
        "day_5": 54,
        "day_6": 46,
        "day_7": 32,
        "day_8": 44,
        "day_9": 63,
        "day_10": 51,
        "day_11": 42,
        "day_12": 46,
        "day_13": 57,
        "day_14": 39,
        "day_15": 55,
        "day_16": 60,
        "day_17": 51,
        "day_18": 40,
        "day_19": 54,
        "day_20": 42,
        "day_21": 49,
        "day_22": 54,
        "day_23": 0,
        "day_24": 0,
        "day_25": 0,
        "day_26": 0,
        "day_27": 0,
        "day_28": 0,
        "day_29": 0,
        "day_30": 0,
        "day_31": 0
    }, {
        "firstTime": "2016-10-09",
        "day_0": 1519,
        "day_1": 27,
        "day_2": 32,
        "day_3": 32,
        "day_4": 41,
        "day_5": 37,
        "day_6": 39,
        "day_7": 42,
        "day_8": 55,
        "day_9": 32,
        "day_10": 48,
        "day_11": 33,
        "day_12": 32,
        "day_13": 36,
        "day_14": 52,
        "day_15": 39,
        "day_16": 42,
        "day_17": 29,
        "day_18": 44,
        "day_19": 47,
        "day_20": 40,
        "day_21": 39,
        "day_22": 43,
        "day_23": 0,
        "day_24": 0,
        "day_25": 0,
        "day_26": 0,
        "day_27": 0,
        "day_28": 0,
        "day_29": 0,
        "day_30": 0,
        "day_31": 0
    }, {
        "firstTime": "2016-10-10",
        "day_0": 1307,
        "day_1": 29,
        "day_2": 40,
        "day_3": 34,
        "day_4": 37,
        "day_5": 37,
        "day_6": 30,
        "day_7": 56,
        "day_8": 42,
        "day_9": 35,
        "day_10": 36,
        "day_11": 40,
        "day_12": 38,
        "day_13": 36,
        "day_14": 56,
        "day_15": 45,
        "day_16": 36,
        "day_17": 42,
        "day_18": 41,
        "day_19": 32,
        "day_20": 42,
        "day_21": 40,
        "day_22": 0,
        "day_23": 0,
        "day_24": 0,
        "day_25": 0,
        "day_26": 0,
        "day_27": 0,
        "day_28": 0,
        "day_29": 0,
        "day_30": 0,
        "day_31": 0
    }, {
        "firstTime": "2016-10-11",
        "day_0": 1236,
        "day_1": 19,
        "day_2": 33,
        "day_3": 32,
        "day_4": 30,
        "day_5": 39,
        "day_6": 34,
        "day_7": 43,
        "day_8": 29,
        "day_9": 31,
        "day_10": 32,
        "day_11": 28,
        "day_12": 39,
        "day_13": 48,
        "day_14": 43,
        "day_15": 26,
        "day_16": 38,
        "day_17": 34,
        "day_18": 24,
        "day_19": 24,
        "day_20": 29,
        "day_21": 0,
        "day_22": 0,
        "day_23": 0,
        "day_24": 0,
        "day_25": 0,
        "day_26": 0,
        "day_27": 0,
        "day_28": 0,
        "day_29": 0,
        "day_30": 0,
        "day_31": 0
    }, {
        "firstTime": "2016-10-12",
        "day_0": 1312,
        "day_1": 28,
        "day_2": 26,
        "day_3": 29,
        "day_4": 32,
        "day_5": 32,
        "day_6": 30,
        "day_7": 37,
        "day_8": 38,
        "day_9": 27,
        "day_10": 34,
        "day_11": 44,
        "day_12": 41,
        "day_13": 30,
        "day_14": 21,
        "day_15": 29,
        "day_16": 35,
        "day_17": 24,
        "day_18": 36,
        "day_19": 43,
        "day_20": 0,
        "day_21": 0,
        "day_22": 0,
        "day_23": 0,
        "day_24": 0,
        "day_25": 0,
        "day_26": 0,
        "day_27": 0,
        "day_28": 0,
        "day_29": 0,
        "day_30": 0,
        "day_31": 0
    }, {
        "firstTime": "2016-10-13",
        "day_0": 1154,
        "day_1": 25,
        "day_2": 29,
        "day_3": 30,
        "day_4": 26,
        "day_5": 31,
        "day_6": 36,
        "day_7": 42,
        "day_8": 38,
        "day_9": 25,
        "day_10": 37,
        "day_11": 32,
        "day_12": 39,
        "day_13": 21,
        "day_14": 39,
        "day_15": 28,
        "day_16": 31,
        "day_17": 29,
        "day_18": 40,
        "day_19": 0,
        "day_20": 0,
        "day_21": 0,
        "day_22": 0,
        "day_23": 0,
        "day_24": 0,
        "day_25": 0,
        "day_26": 0,
        "day_27": 0,
        "day_28": 0,
        "day_29": 0,
        "day_30": 0,
        "day_31": 0
    }, {
        "firstTime": "2016-10-14",
        "day_0": 1315,
        "day_1": 18,
        "day_2": 28,
        "day_3": 28,
        "day_4": 26,
        "day_5": 30,
        "day_6": 29,
        "day_7": 43,
        "day_8": 31,
        "day_9": 49,
        "day_10": 39,
        "day_11": 37,
        "day_12": 20,
        "day_13": 33,
        "day_14": 45,
        "day_15": 32,
        "day_16": 30,
        "day_17": 24,
        "day_18": 0,
        "day_19": 0,
        "day_20": 0,
        "day_21": 0,
        "day_22": 0,
        "day_23": 0,
        "day_24": 0,
        "day_25": 0,
        "day_26": 0,
        "day_27": 0,
        "day_28": 0,
        "day_29": 0,
        "day_30": 0,
        "day_31": 0
    }, {
        "firstTime": "2016-10-15",
        "day_0": 2051,
        "day_1": 19,
        "day_2": 15,
        "day_3": 17,
        "day_4": 23,
        "day_5": 25,
        "day_6": 27,
        "day_7": 68,
        "day_8": 75,
        "day_9": 32,
        "day_10": 20,
        "day_11": 16,
        "day_12": 32,
        "day_13": 30,
        "day_14": 90,
        "day_15": 74,
        "day_16": 22,
        "day_17": 0,
        "day_18": 0,
        "day_19": 0,
        "day_20": 0,
        "day_21": 0,
        "day_22": 0,
        "day_23": 0,
        "day_24": 0,
        "day_25": 0,
        "day_26": 0,
        "day_27": 0,
        "day_28": 0,
        "day_29": 0,
        "day_30": 0,
        "day_31": 0
    }, {
        "firstTime": "2016-10-16",
        "day_0": 2215,
        "day_1": 20,
        "day_2": 19,
        "day_3": 20,
        "day_4": 25,
        "day_5": 24,
        "day_6": 53,
        "day_7": 87,
        "day_8": 35,
        "day_9": 28,
        "day_10": 22,
        "day_11": 26,
        "day_12": 39,
        "day_13": 72,
        "day_14": 96,
        "day_15": 24,
        "day_16": 0,
        "day_17": 0,
        "day_18": 0,
        "day_19": 0,
        "day_20": 0,
        "day_21": 0,
        "day_22": 0,
        "day_23": 0,
        "day_24": 0,
        "day_25": 0,
        "day_26": 0,
        "day_27": 0,
        "day_28": 0,
        "day_29": 0,
        "day_30": 0,
        "day_31": 0
    }, {
        "firstTime": "2016-10-17",
        "day_0": 1034,
        "day_1": 20,
        "day_2": 17,
        "day_3": 16,
        "day_4": 21,
        "day_5": 19,
        "day_6": 23,
        "day_7": 31,
        "day_8": 29,
        "day_9": 24,
        "day_10": 28,
        "day_11": 22,
        "day_12": 26,
        "day_13": 36,
        "day_14": 29,
        "day_15": 0,
        "day_16": 0,
        "day_17": 0,
        "day_18": 0,
        "day_19": 0,
        "day_20": 0,
        "day_21": 0,
        "day_22": 0,
        "day_23": 0,
        "day_24": 0,
        "day_25": 0,
        "day_26": 0,
        "day_27": 0,
        "day_28": 0,
        "day_29": 0,
        "day_30": 0,
        "day_31": 0
    }, {
        "firstTime": "2016-10-18",
        "day_0": 1080,
        "day_1": 21,
        "day_2": 26,
        "day_3": 32,
        "day_4": 18,
        "day_5": 20,
        "day_6": 36,
        "day_7": 29,
        "day_8": 33,
        "day_9": 33,
        "day_10": 25,
        "day_11": 26,
        "day_12": 24,
        "day_13": 31,
        "day_14": 0,
        "day_15": 0,
        "day_16": 0,
        "day_17": 0,
        "day_18": 0,
        "day_19": 0,
        "day_20": 0,
        "day_21": 0,
        "day_22": 0,
        "day_23": 0,
        "day_24": 0,
        "day_25": 0,
        "day_26": 0,
        "day_27": 0,
        "day_28": 0,
        "day_29": 0,
        "day_30": 0,
        "day_31": 0
    }, {
        "firstTime": "2016-10-19",
        "day_0": 807,
        "day_1": 11,
        "day_2": 14,
        "day_3": 14,
        "day_4": 13,
        "day_5": 10,
        "day_6": 17,
        "day_7": 21,
        "day_8": 21,
        "day_9": 21,
        "day_10": 21,
        "day_11": 13,
        "day_12": 21,
        "day_13": 0,
        "day_14": 0,
        "day_15": 0,
        "day_16": 0,
        "day_17": 0,
        "day_18": 0,
        "day_19": 0,
        "day_20": 0,
        "day_21": 0,
        "day_22": 0,
        "day_23": 0,
        "day_24": 0,
        "day_25": 0,
        "day_26": 0,
        "day_27": 0,
        "day_28": 0,
        "day_29": 0,
        "day_30": 0,
        "day_31": 0
    }, {
        "firstTime": "2016-10-20",
        "day_0": 881,
        "day_1": 21,
        "day_2": 12,
        "day_3": 15,
        "day_4": 20,
        "day_5": 18,
        "day_6": 18,
        "day_7": 20,
        "day_8": 14,
        "day_9": 14,
        "day_10": 12,
        "day_11": 15,
        "day_12": 0,
        "day_13": 0,
        "day_14": 0,
        "day_15": 0,
        "day_16": 0,
        "day_17": 0,
        "day_18": 0,
        "day_19": 0,
        "day_20": 0,
        "day_21": 0,
        "day_22": 0,
        "day_23": 0,
        "day_24": 0,
        "day_25": 0,
        "day_26": 0,
        "day_27": 0,
        "day_28": 0,
        "day_29": 0,
        "day_30": 0,
        "day_31": 0
    }, {
        "firstTime": "2016-10-21",
        "day_0": 1054,
        "day_1": 10,
        "day_2": 17,
        "day_3": 22,
        "day_4": 16,
        "day_5": 20,
        "day_6": 24,
        "day_7": 35,
        "day_8": 22,
        "day_9": 17,
        "day_10": 22,
        "day_11": 0,
        "day_12": 0,
        "day_13": 0,
        "day_14": 0,
        "day_15": 0,
        "day_16": 0,
        "day_17": 0,
        "day_18": 0,
        "day_19": 0,
        "day_20": 0,
        "day_21": 0,
        "day_22": 0,
        "day_23": 0,
        "day_24": 0,
        "day_25": 0,
        "day_26": 0,
        "day_27": 0,
        "day_28": 0,
        "day_29": 0,
        "day_30": 0,
        "day_31": 0
    }, {
        "firstTime": "2016-10-22",
        "day_0": 1681,
        "day_1": 27,
        "day_2": 8,
        "day_3": 15,
        "day_4": 13,
        "day_5": 26,
        "day_6": 20,
        "day_7": 58,
        "day_8": 34,
        "day_9": 10,
        "day_10": 0,
        "day_11": 0,
        "day_12": 0,
        "day_13": 0,
        "day_14": 0,
        "day_15": 0,
        "day_16": 0,
        "day_17": 0,
        "day_18": 0,
        "day_19": 0,
        "day_20": 0,
        "day_21": 0,
        "day_22": 0,
        "day_23": 0,
        "day_24": 0,
        "day_25": 0,
        "day_26": 0,
        "day_27": 0,
        "day_28": 0,
        "day_29": 0,
        "day_30": 0,
        "day_31": 0
    }, {
        "firstTime": "2016-10-23",
        "day_0": 1962,
        "day_1": 15,
        "day_2": 12,
        "day_3": 14,
        "day_4": 18,
        "day_5": 14,
        "day_6": 32,
        "day_7": 53,
        "day_8": 13,
        "day_9": 0,
        "day_10": 0,
        "day_11": 0,
        "day_12": 0,
        "day_13": 0,
        "day_14": 0,
        "day_15": 0,
        "day_16": 0,
        "day_17": 0,
        "day_18": 0,
        "day_19": 0,
        "day_20": 0,
        "day_21": 0,
        "day_22": 0,
        "day_23": 0,
        "day_24": 0,
        "day_25": 0,
        "day_26": 0,
        "day_27": 0,
        "day_28": 0,
        "day_29": 0,
        "day_30": 0,
        "day_31": 0
    }, {
        "firstTime": "2016-10-24",
        "day_0": 1027,
        "day_1": 17,
        "day_2": 5,
        "day_3": 16,
        "day_4": 17,
        "day_5": 11,
        "day_6": 24,
        "day_7": 33,
        "day_8": 0,
        "day_9": 0,
        "day_10": 0,
        "day_11": 0,
        "day_12": 0,
        "day_13": 0,
        "day_14": 0,
        "day_15": 0,
        "day_16": 0,
        "day_17": 0,
        "day_18": 0,
        "day_19": 0,
        "day_20": 0,
        "day_21": 0,
        "day_22": 0,
        "day_23": 0,
        "day_24": 0,
        "day_25": 0,
        "day_26": 0,
        "day_27": 0,
        "day_28": 0,
        "day_29": 0,
        "day_30": 0,
        "day_31": 0
    }, {
        "firstTime": "2016-10-25",
        "day_0": 829,
        "day_1": 9,
        "day_2": 15,
        "day_3": 10,
        "day_4": 16,
        "day_5": 10,
        "day_6": 16,
        "day_7": 0,
        "day_8": 0,
        "day_9": 0,
        "day_10": 0,
        "day_11": 0,
        "day_12": 0,
        "day_13": 0,
        "day_14": 0,
        "day_15": 0,
        "day_16": 0,
        "day_17": 0,
        "day_18": 0,
        "day_19": 0,
        "day_20": 0,
        "day_21": 0,
        "day_22": 0,
        "day_23": 0,
        "day_24": 0,
        "day_25": 0,
        "day_26": 0,
        "day_27": 0,
        "day_28": 0,
        "day_29": 0,
        "day_30": 0,
        "day_31": 0
    }, {
        "firstTime": "2016-10-26",
        "day_0": 643,
        "day_1": 12,
        "day_2": 13,
        "day_3": 12,
        "day_4": 13,
        "day_5": 16,
        "day_6": 0,
        "day_7": 0,
        "day_8": 0,
        "day_9": 0,
        "day_10": 0,
        "day_11": 0,
        "day_12": 0,
        "day_13": 0,
        "day_14": 0,
        "day_15": 0,
        "day_16": 0,
        "day_17": 0,
        "day_18": 0,
        "day_19": 0,
        "day_20": 0,
        "day_21": 0,
        "day_22": 0,
        "day_23": 0,
        "day_24": 0,
        "day_25": 0,
        "day_26": 0,
        "day_27": 0,
        "day_28": 0,
        "day_29": 0,
        "day_30": 0,
        "day_31": 0
    }, {
        "firstTime": "2016-10-27",
        "day_0": 910,
        "day_1": 10,
        "day_2": 16,
        "day_3": 17,
        "day_4": 24,
        "day_5": 0,
        "day_6": 0,
        "day_7": 0,
        "day_8": 0,
        "day_9": 0,
        "day_10": 0,
        "day_11": 0,
        "day_12": 0,
        "day_13": 0,
        "day_14": 0,
        "day_15": 0,
        "day_16": 0,
        "day_17": 0,
        "day_18": 0,
        "day_19": 0,
        "day_20": 0,
        "day_21": 0,
        "day_22": 0,
        "day_23": 0,
        "day_24": 0,
        "day_25": 0,
        "day_26": 0,
        "day_27": 0,
        "day_28": 0,
        "day_29": 0,
        "day_30": 0,
        "day_31": 0
    }, {
        "firstTime": "2016-10-28",
        "day_0": 1038,
        "day_1": 11,
        "day_2": 17,
        "day_3": 10,
        "day_4": 0,
        "day_5": 0,
        "day_6": 0,
        "day_7": 0,
        "day_8": 0,
        "day_9": 0,
        "day_10": 0,
        "day_11": 0,
        "day_12": 0,
        "day_13": 0,
        "day_14": 0,
        "day_15": 0,
        "day_16": 0,
        "day_17": 0,
        "day_18": 0,
        "day_19": 0,
        "day_20": 0,
        "day_21": 0,
        "day_22": 0,
        "day_23": 0,
        "day_24": 0,
        "day_25": 0,
        "day_26": 0,
        "day_27": 0,
        "day_28": 0,
        "day_29": 0,
        "day_30": 0,
        "day_31": 0
    }, {
        "firstTime": "2016-10-29",
        "day_0": 1740,
        "day_1": 19,
        "day_2": 17,
        "day_3": 0,
        "day_4": 0,
        "day_5": 0,
        "day_6": 0,
        "day_7": 0,
        "day_8": 0,
        "day_9": 0,
        "day_10": 0,
        "day_11": 0,
        "day_12": 0,
        "day_13": 0,
        "day_14": 0,
        "day_15": 0,
        "day_16": 0,
        "day_17": 0,
        "day_18": 0,
        "day_19": 0,
        "day_20": 0,
        "day_21": 0,
        "day_22": 0,
        "day_23": 0,
        "day_24": 0,
        "day_25": 0,
        "day_26": 0,
        "day_27": 0,
        "day_28": 0,
        "day_29": 0,
        "day_30": 0,
        "day_31": 0
    }, {
        "firstTime": "2016-10-30",
        "day_0": 1701,
        "day_1": 15,
        "day_2": 0,
        "day_3": 0,
        "day_4": 0,
        "day_5": 0,
        "day_6": 0,
        "day_7": 0,
        "day_8": 0,
        "day_9": 0,
        "day_10": 0,
        "day_11": 0,
        "day_12": 0,
        "day_13": 0,
        "day_14": 0,
        "day_15": 0,
        "day_16": 0,
        "day_17": 0,
        "day_18": 0,
        "day_19": 0,
        "day_20": 0,
        "day_21": 0,
        "day_22": 0,
        "day_23": 0,
        "day_24": 0,
        "day_25": 0,
        "day_26": 0,
        "day_27": 0,
        "day_28": 0,
        "day_29": 0,
        "day_30": 0,
        "day_31": 0
    }, {
        "firstTime": "2016-10-31",
        "day_0": 901,
        "day_1": 0,
        "day_2": 0,
        "day_3": 0,
        "day_4": 0,
        "day_5": 0,
        "day_6": 0,
        "day_7": 0,
        "day_8": 0,
        "day_9": 0,
        "day_10": 0,
        "day_11": 0,
        "day_12": 0,
        "day_13": 0,
        "day_14": 0,
        "day_15": 0,
        "day_16": 0,
        "day_17": 0,
        "day_18": 0,
        "day_19": 0,
        "day_20": 0,
        "day_21": 0,
        "day_22": 0,
        "day_23": 0,
        "day_24": 0,
        "day_25": 0,
        "day_26": 0,
        "day_27": 0,
        "day_28": 0,
        "day_29": 0,
        "day_30": 0,
        "day_31": 0
    }];
var liucun = v;


/***/ }),

/***/ "./src/assets/data/top-spark.ts":
/*!**************************************!*\
  !*** ./src/assets/data/top-spark.ts ***!
  \**************************************/
/*! exports provided: topspark */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "topspark", function() { return topspark; });
var v = [{ "shopId": "1629", "avgPerDayPayCount": 41874 },
    { "shopId": "517", "avgPerDayPayCount": 34378 },
    { "shopId": "58", "avgPerDayPayCount": 24653 },
    { "shopId": "1346", "avgPerDayPayCount": 23188 },
    { "shopId": "1821", "avgPerDayPayCount": 16817 },
    { "shopId": "1296", "avgPerDayPayCount": 13745 },
    { "shopId": "1928", "avgPerDayPayCount": 12802 },
    { "shopId": "1302", "avgPerDayPayCount": 12381 },
    { "shopId": "934", "avgPerDayPayCount": 12373 },
    { "shopId": "1535", "avgPerDayPayCount": 12140 }];
var topspark = v;


/***/ }),

/***/ "./src/assets/data/view-day.ts":
/*!*************************************!*\
  !*** ./src/assets/data/view-day.ts ***!
  \*************************************/
/*! exports provided: viewday */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewday", function() { return viewday; });
var v = [{ "timeStr": "2016-10-31", "viewCount": 8 },
    { "timeStr": "2016-10-30", "viewCount": 19 },
    { "timeStr": "2016-10-29", "viewCount": 15 },
    { "timeStr": "2016-10-28", "viewCount": 6 },
    { "timeStr": "2016-10-27", "viewCount": 11 },
    { "timeStr": "2016-10-26", "viewCount": 3 },
    { "timeStr": "2016-10-25", "viewCount": 7 },
    { "timeStr": "2016-10-24", "viewCount": 3 },
    { "timeStr": "2016-10-23", "viewCount": 11 },
    { "timeStr": "2016-10-22", "viewCount": 16 },
    { "timeStr": "2016-10-21", "viewCount": 22 },
    { "timeStr": "2016-10-20", "viewCount": 11 },
    { "timeStr": "2016-10-19", "viewCount": 13 },
    { "timeStr": "2016-10-18", "viewCount": 6 },
    { "timeStr": "2016-10-17", "viewCount": 10 },
    { "timeStr": "2016-10-16", "viewCount": 12 },
    { "timeStr": "2016-10-15", "viewCount": 9 },
    { "timeStr": "2016-10-14", "viewCount": 8 },
    { "timeStr": "2016-10-13", "viewCount": 15 },
    { "timeStr": "2016-10-12", "viewCount": 14 },
    { "timeStr": "2016-10-11", "viewCount": 15 },
    { "timeStr": "2016-10-10", "viewCount": 15 },
    { "timeStr": "2016-10-09", "viewCount": 14 },
    { "timeStr": "2016-10-08", "viewCount": 13 },
    { "timeStr": "2016-10-07", "viewCount": 21 },
    { "timeStr": "2016-10-06", "viewCount": 5 },
    { "timeStr": "2016-10-05", "viewCount": 13 },
    { "timeStr": "2016-10-04", "viewCount": 14 },
    { "timeStr": "2016-10-03", "viewCount": 14 },
    { "timeStr": "2016-10-02", "viewCount": 16 },
    { "timeStr": "2016-10-01", "viewCount": 15 },
    { "timeStr": "2016-09-30", "viewCount": 15 },
    { "timeStr": "2016-09-29", "viewCount": 17 },
    { "timeStr": "2016-09-28", "viewCount": 16 },
    { "timeStr": "2016-09-27", "viewCount": 9 },
    { "timeStr": "2016-09-26", "viewCount": 8 },
    { "timeStr": "2016-09-25", "viewCount": 15 },
    { "timeStr": "2016-09-24", "viewCount": 7 },
    { "timeStr": "2016-09-23", "viewCount": 4 },
    { "timeStr": "2016-09-22", "viewCount": 6 },
    { "timeStr": "2016-09-21", "viewCount": 12 },
    { "timeStr": "2016-09-20", "viewCount": 11 },
    { "timeStr": "2016-09-19", "viewCount": 11 },
    { "timeStr": "2016-09-18", "viewCount": 7 },
    { "timeStr": "2016-09-17", "viewCount": 5 }, { "timeStr": "2016-09-16", "viewCount": 9 },
    { "timeStr": "2016-09-15", "viewCount": 16 }, { "timeStr": "2016-09-14", "viewCount": 8 },
    { "timeStr": "2016-09-13", "viewCount": 7 }, { "timeStr": "2016-09-12", "viewCount": 13 },
    { "timeStr": "2016-09-11", "viewCount": 16 }, { "timeStr": "2016-09-10", "viewCount": 15 },
    { "timeStr": "2016-09-09", "viewCount": 10 }, { "timeStr": "2016-09-08", "viewCount": 5 },
    { "timeStr": "2016-09-07", "viewCount": 16 }, { "timeStr": "2016-09-06", "viewCount": 10 },
    { "timeStr": "2016-09-05", "viewCount": 8 }, { "timeStr": "2016-09-04", "viewCount": 14 },
    { "timeStr": "2016-09-03", "viewCount": 21 }, { "timeStr": "2016-09-02", "viewCount": 16 },
    { "timeStr": "2016-09-01", "viewCount": 4 }, { "timeStr": "2016-08-31", "viewCount": 20 },
    { "timeStr": "2016-08-30", "viewCount": 5 }, { "timeStr": "2016-08-29", "viewCount": 6 },
    { "timeStr": "2016-08-28", "viewCount": 23 }, { "timeStr": "2016-08-27", "viewCount": 21 },
    { "timeStr": "2016-08-26", "viewCount": 18 }, { "timeStr": "2016-08-25", "viewCount": 18 },
    { "timeStr": "2016-08-24", "viewCount": 19 }, { "timeStr": "2016-08-23", "viewCount": 11 },
    { "timeStr": "2016-08-22", "viewCount": 17 }, { "timeStr": "2016-08-21", "viewCount": 20 },
    { "timeStr": "2016-08-20", "viewCount": 27 }, { "timeStr": "2016-08-19", "viewCount": 16 },
    { "timeStr": "2016-08-18", "viewCount": 17 }, { "timeStr": "2016-08-17", "viewCount": 18 },
    { "timeStr": "2016-08-16", "viewCount": 17 }, { "timeStr": "2016-08-15", "viewCount": 7 },
    { "timeStr": "2016-08-14", "viewCount": 52 }, { "timeStr": "2016-08-13", "viewCount": 50 },
    { "timeStr": "2016-08-12", "viewCount": 66 }, { "timeStr": "2016-08-11", "viewCount": 68 },
    { "timeStr": "2016-08-10", "viewCount": 53 }, { "timeStr": "2016-08-09", "viewCount": 46 },
    { "timeStr": "2016-08-08", "viewCount": 20 }, { "timeStr": "2016-08-07", "viewCount": 24 },
    { "timeStr": "2016-08-06", "viewCount": 40 }, { "timeStr": "2016-08-05", "viewCount": 18 },
    { "timeStr": "2016-08-04", "viewCount": 28 }, { "timeStr": "2016-08-03", "viewCount": 22 },
    { "timeStr": "2016-08-02", "viewCount": 15 }, { "timeStr": "2016-08-01", "viewCount": 12 },
    { "timeStr": "2016-07-31", "viewCount": 10 }, { "timeStr": "2016-07-30", "viewCount": 16 },
    { "timeStr": "2016-07-29", "viewCount": 6 }, { "timeStr": "2016-07-28", "viewCount": 6 },
    { "timeStr": "2016-07-27", "viewCount": 9 }, { "timeStr": "2016-07-26", "viewCount": 12 },
    { "timeStr": "2016-07-24", "viewCount": 29 }, { "timeStr": "2016-07-23", "viewCount": 21 },
    { "timeStr": "2016-07-21", "viewCount": 7 }, { "timeStr": "2016-07-20", "viewCount": 19 },
    { "timeStr": "2016-07-19", "viewCount": 16 }, { "timeStr": "2016-07-18", "viewCount": 16 },
    { "timeStr": "2016-07-17", "viewCount": 25 }, { "timeStr": "2016-07-16", "viewCount": 23 },
    { "timeStr": "2016-07-15", "viewCount": 30 }, { "timeStr": "2016-07-14", "viewCount": 19 },
    { "timeStr": "2016-07-13", "viewCount": 32 }, { "timeStr": "2016-07-12", "viewCount": 29 },
    { "timeStr": "2016-07-11", "viewCount": 26 }, { "timeStr": "2016-07-10", "viewCount": 32 },
    { "timeStr": "2016-07-09", "viewCount": 35 }, { "timeStr": "2016-07-08", "viewCount": 16 },
    { "timeStr": "2016-07-07", "viewCount": 44 }, { "timeStr": "2016-07-06", "viewCount": 20 },
    { "timeStr": "2016-07-05", "viewCount": 7 }, { "timeStr": "2016-07-04", "viewCount": 9 },
    { "timeStr": "2016-07-03", "viewCount": 23 }, { "timeStr": "2016-07-02", "viewCount": 17 },
    { "timeStr": "2016-07-01", "viewCount": 18 }, { "timeStr": "2016-06-30", "viewCount": 20 },
    { "timeStr": "2016-06-29", "viewCount": 16 }, { "timeStr": "2016-06-28", "viewCount": 15 },
    { "timeStr": "2016-06-27", "viewCount": 14 }, { "timeStr": "2016-06-26", "viewCount": 31 },
    { "timeStr": "2016-06-25", "viewCount": 44 }, { "timeStr": "2016-06-24", "viewCount": 18 },
    { "timeStr": "2016-06-23", "viewCount": 29 }, { "timeStr": "2016-06-22", "viewCount": 21 }];
var viewday = v;


/***/ }),

/***/ "./src/assets/data/view-mont.ts":
/*!**************************************!*\
  !*** ./src/assets/data/view-mont.ts ***!
  \**************************************/
/*! exports provided: viewmonth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewmonth", function() { return viewmonth; });
var v = [{ "timeStr": "2016-10", "viewCount": 374 },
    { "timeStr": "2016-09", "viewCount": 331 },
    { "timeStr": "2016-08", "viewCount": 794 },
    { "timeStr": "2016-07", "viewCount": 572 },
    { "timeStr": "2016-06", "viewCount": 208 }];
var viewmonth = v;


/***/ }),

/***/ "./src/assets/data/view-top.ts":
/*!*************************************!*\
  !*** ./src/assets/data/view-top.ts ***!
  \*************************************/
/*! exports provided: viewtop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewtop", function() { return viewtop; });
var v = [{ "shopId": "1311", "viewCount": 12430, "cityName": "广州", "perPay": 20.0 },
    { "shopId": "369", "viewCount": 12498, "cityName": "南宁", "perPay": 10.0 },
    { "shopId": "1438", "viewCount": 12526, "cityName": "衢州", "perPay": 15.0 },
    { "shopId": "278", "viewCount": 12546, "cityName": "广州", "perPay": 8.0 },
    { "shopId": "671", "viewCount": 12547, "cityName": "成都", "perPay": 19.0 },
    { "shopId": "298", "viewCount": 12611, "cityName": "西安", "perPay": 19.0 },
    { "shopId": "844", "viewCount": 12659, "cityName": "武汉", "perPay": 19.0 },
    { "shopId": "425", "viewCount": 12867, "cityName": "上海", "perPay": 19.0 },
    { "shopId": "1646", "viewCount": 12898, "cityName": "玉林", "perPay": 15.0 },
    { "shopId": "1553", "viewCount": 12973, "cityName": "南宁", "perPay": 13.0 },
    { "shopId": "364", "viewCount": 13210, "cityName": "佛山", "perPay": 20.0 },
    { "shopId": "1117", "viewCount": 13288, "cityName": "广州", "perPay": 9.0 },
    { "shopId": "577", "viewCount": 13307, "cityName": "金华", "perPay": 20.0 },
    { "shopId": "30", "viewCount": 13438, "cityName": "中山", "perPay": 7.0 },
    { "shopId": "283", "viewCount": 13513, "cityName": "大连", "perPay": 20.0 },
    { "shopId": "891", "viewCount": 13916, "cityName": "杭州", "perPay": 9.0 },
    { "shopId": "155", "viewCount": 14115, "cityName": "江门", "perPay": 7.0 },
    { "shopId": "1142", "viewCount": 14140, "cityName": "石家庄", "perPay": 19.0 },
    { "shopId": "1221", "viewCount": 14145, "cityName": "合肥", "perPay": 5.0 },
    { "shopId": "522", "viewCount": 14377, "cityName": "深圳", "perPay": 20.0 },
    { "shopId": "737", "viewCount": 14854, "cityName": "广州", "perPay": 9.0 },
    { "shopId": "570", "viewCount": 14955, "cityName": "湖州", "perPay": 6.0 },
    { "shopId": "1362", "viewCount": 15064, "cityName": "长治", "perPay": 15.0 },
    { "shopId": "347", "viewCount": 15209, "cityName": "邯郸", "perPay": 7.0 },
    { "shopId": "1017", "viewCount": 15694, "cityName": "邢台", "perPay": 18.0 },
    { "shopId": "187", "viewCount": 15850, "cityName": "惠州", "perPay": 8.0 },
    { "shopId": "58", "viewCount": 16239, "cityName": "杭州", "perPay": 19.0 },
    { "shopId": "1992", "viewCount": 16730, "cityName": "安康", "perPay": 19.0 },
    { "shopId": "1692", "viewCount": 16958, "cityName": "东莞", "perPay": 20.0 },
    { "shopId": "451", "viewCount": 16995, "cityName": "杭州", "perPay": 20.0 },
    { "shopId": "1935", "viewCount": 17676, "cityName": "嘉兴", "perPay": 2.0 },
    { "shopId": "1629", "viewCount": 18406, "cityName": "苏州", "perPay": 20.0 },
    { "shopId": "1883", "viewCount": 18915, "cityName": "苏州", "perPay": 20.0 },
    { "shopId": "1202", "viewCount": 20094, "cityName": "江门", "perPay": 6.0 },
    { "shopId": "887", "viewCount": 21147, "cityName": "武汉", "perPay": 20.0 },
    { "shopId": "647", "viewCount": 21288, "cityName": "达州", "perPay": 19.0 },
    { "shopId": "1108", "viewCount": 21294, "cityName": "南京", "perPay": 20.0 },
    { "shopId": "431", "viewCount": 22613, "cityName": "东莞", "perPay": 9.0 },
    { "shopId": "852", "viewCount": 22772, "cityName": "武汉", "perPay": 20.0 },
    { "shopId": "675", "viewCount": 23830, "cityName": "梧州", "perPay": 4.0 },
    { "shopId": "195", "viewCount": 26468, "cityName": "孝感", "perPay": 19.0 },
    { "shopId": "1322", "viewCount": 31727, "cityName": "杭州", "perPay": 20.0 },
    { "shopId": "885", "viewCount": 33539, "cityName": "武汉", "perPay": 20.0 },
    { "shopId": "1823", "viewCount": 34855, "cityName": "广州", "perPay": 20.0 },
    { "shopId": "44", "viewCount": 37001, "cityName": "郑州", "perPay": 20.0 },
    { "shopId": "799", "viewCount": 47991, "cityName": "苏州", "perPay": 20.0 },
    { "shopId": "1539", "viewCount": 53385, "cityName": "宁波", "perPay": 20.0 },
    { "shopId": "1670", "viewCount": 53503, "cityName": "南京", "perPay": 20.0 },
    { "shopId": "1677", "viewCount": 58765, "cityName": "济南", "perPay": 20.0 },
    { "shopId": "1911", "viewCount": 62656, "cityName": "天津", "perPay": 20.0 }];
var viewtop = v;


/***/ }),

/***/ "./src/assets/data/view-weak.ts":
/*!**************************************!*\
  !*** ./src/assets/data/view-weak.ts ***!
  \**************************************/
/*! exports provided: viewweek */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewweek", function() { return viewweek; });
var v = [{ "year": "2016", "weekOfYear": 44, "viewCount": 8 },
    { "year": "2016", "weekOfYear": 43, "viewCount": 64 },
    { "year": "2016", "weekOfYear": 42, "viewCount": 89 },
    { "year": "2016", "weekOfYear": 41, "viewCount": 88 },
    { "year": "2016", "weekOfYear": 40, "viewCount": 94 },
    { "year": "2016", "weekOfYear": 39, "viewCount": 96 },
    { "year": "2016", "weekOfYear": 38, "viewCount": 66 },
    { "year": "2016", "weekOfYear": 37, "viewCount": 65 },
    { "year": "2016", "weekOfYear": 36, "viewCount": 80 },
    { "year": "2016", "weekOfYear": 35, "viewCount": 86 },
    { "year": "2016", "weekOfYear": 34, "viewCount": 127 },
    { "year": "2016", "weekOfYear": 33, "viewCount": 122 },
    { "year": "2016", "weekOfYear": 32, "viewCount": 355 },
    { "year": "2016", "weekOfYear": 31, "viewCount": 159 },
    { "year": "2016", "weekOfYear": 30, "viewCount": 59 },
    { "year": "2016", "weekOfYear": 29, "viewCount": 108 },
    { "year": "2016", "weekOfYear": 28, "viewCount": 184 },
    { "year": "2016", "weekOfYear": 27, "viewCount": 163 },
    { "year": "2016", "weekOfYear": 26, "viewCount": 123 },
    { "year": "2016", "weekOfYear": 25, "viewCount": 143 }];
var viewweek = v;


/***/ })

}]);
//# sourceMappingURL=spark-rdd-spark-rdd-module-es5.js.map