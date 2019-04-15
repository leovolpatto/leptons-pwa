webpackJsonp([4],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_configs_configs__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfigsPage = /** @class */ (function () {
    function ConfigsPage(navCtrl, navParams, configs) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.configs = configs;
    }
    ConfigsPage.prototype.ionViewDidLoad = function () {
    };
    ConfigsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-configs',template:/*ion-inline-start:"/home/leovolpatto/Desktop/Leptons/src/pages/configs/configs.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Configurações</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-item>\n      <ion-label floating>API URL</ion-label>\n      <ion-input type="text" [(ngModel)]="configs.apiEndpoint"></ion-input>\n    </ion-item>  \n\n    <p>\n      <span>http://api.leptons.com:84/api/</span>\n    </p>\n    \n    <p>\n        <span>http://18.228.157.163:84/api/</span>\n    </p>\n\n</ion-content>\n'/*ion-inline-end:"/home/leovolpatto/Desktop/Leptons/src/pages/configs/configs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_configs_configs__["a" /* ConfigsProvider */]])
    ], ConfigsPage);
    return ConfigsPage;
}());

//# sourceMappingURL=configs.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LampsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__devices_devices__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_models_LampCommand__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_lamps_lamps__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__PageBase__ = __webpack_require__(161);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LampsPage = /** @class */ (function (_super) {
    __extends(LampsPage, _super);
    function LampsPage(navCtrl, navParams, events, lampProvider, loadingCtrl) {
        var _this = _super.call(this, loadingCtrl) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.events = events;
        _this.lampProvider = lampProvider;
        _this.loadingCtrl = loadingCtrl;
        _this.devices = [];
        _this.deviceLamps = [];
        _this.devices = __WEBPACK_IMPORTED_MODULE_2__devices_devices__["a" /* DevicesPage */].firstLoadedDevices;
        return _this;
    }
    LampsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.buildItems();
        this.events.subscribe('devicesLoaded', function (dev) {
            _this.devices = dev;
            _this.buildItems();
        });
    };
    LampsPage.prototype.invert = function (lamp) {
        if (!lamp.canBeActivated) {
            alert('Esta porta não pode ser ativada.');
            return;
        }
        if (lamp.on) {
            this.turnOff(lamp);
        }
        else {
            this.turnOn(lamp);
        }
    };
    LampsPage.prototype.turnOn = function (lamp) {
        var _this = this;
        var c = new __WEBPACK_IMPORTED_MODULE_3__app_models_LampCommand__["a" /* LampCommand */]();
        c.action = 1; //activation
        c.type = 0; //digital
        c.pin = lamp.pin;
        c.name = "TurnOnLamp";
        c.device_id = lamp.device_id;
        this.setPageLoading(true, "Aguardando o comando ser executado...");
        this.lampProvider.turnOn(c)
            .then(function (result) {
            if (c.pending == false) {
                lamp.on = true;
            }
        })
            .catch(function (err) {
        })
            .then(function () {
            _this.setPageLoading(false);
        });
    };
    LampsPage.prototype.turnOff = function (lamp) {
        var _this = this;
        var c = new __WEBPACK_IMPORTED_MODULE_3__app_models_LampCommand__["a" /* LampCommand */]();
        c.action = 0; //deactivation
        c.type = 0; //digital
        c.pin = lamp.pin;
        c.name = "TurnOffLamp";
        c.device_id = lamp.device_id;
        this.setPageLoading(true, "Aguardando o comando ser executado...");
        this.lampProvider.turnOff(c)
            .then(function (result) {
            if (c.pending == false) {
                lamp.on = false;
            }
            ;
        })
            .catch(function (err) {
        })
            .then(function () {
            _this.setPageLoading(false);
        });
    };
    LampsPage.prototype.buildItems = function () {
        var _this = this;
        if (this.devices == null) {
            this.devices = [];
            return;
        }
        this.deviceLamps = [];
        this.devices.filter(function (d) { return d.active; }).forEach(function (device) {
            var dLamp = new DeviceLamps();
            dLamp.device = device;
            for (var i = 2; i < 17; i++) {
                if (i == 7 || i == 8 || i == 9 || i == 10 || i == 11 || i == 14 || i == 15) {
                    continue;
                }
                var l = new Lamp();
                l.device_Data = device;
                l.device_id = device.id;
                l.on = false;
                l.canBeActivated = (i == 5 || i == 16);
                l.pin = i;
                dLamp.lamps.push(l);
            }
            _this.deviceLamps.push(dLamp);
        });
    };
    LampsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lamps',template:/*ion-inline-start:"/home/leovolpatto/Desktop/Leptons/src/pages/lamps/lamps.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Luminárias</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card *ngFor="let item of deviceLamps">\n    <ion-item>\n      <h2>{{item.device.name}}</h2>\n      <p>{{item.device.description}}</p>\n    </ion-item>\n\n    <ion-card-content>\n      <ion-row>\n        <ion-col *ngFor="let lamp of item.lamps" class="lamp">\n            <button ion-button clear (click)="invert(lamp);">\n                <ion-icon name="bulb" [ngClass]="{\'lampOn\': lamp.on}" class="lampOn"></ion-icon>\n                <span class="lamp-number">{{lamp.pin}}</span>\n            </button>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"/home/leovolpatto/Desktop/Leptons/src/pages/lamps/lamps.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */],
            __WEBPACK_IMPORTED_MODULE_4__providers_lamps_lamps__["a" /* LampsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], LampsPage);
    return LampsPage;
}(__WEBPACK_IMPORTED_MODULE_5__PageBase__["a" /* PageBase */]));

var Lamp = /** @class */ (function () {
    function Lamp() {
        this.on = false;
    }
    return Lamp;
}());
var DeviceLamps = /** @class */ (function () {
    function DeviceLamps() {
        this.lamps = [];
    }
    return DeviceLamps;
}());
//# sourceMappingURL=lamps.js.map

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/configs/configs.module": [
		287,
		3
	],
	"../pages/devices/devices.module": [
		286,
		2
	],
	"../pages/lamps/lamps.module": [
		288,
		1
	],
	"../pages/login/login.module": [
		289,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configs_configs__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DevicesProvider = /** @class */ (function () {
    function DevicesProvider(http, configs) {
        this.http = http;
        this.configs = configs;
    }
    DevicesProvider.prototype.getDevices = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({});
        var url = this.configs.apiEndpoint + "devices";
        return this.http.get(url, {
            headers: headers
        }).toPromise();
    };
    DevicesProvider.prototype.updateDevice = function (device) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({});
        var url = this.configs.apiEndpoint + "devices/" + device.id;
        return this.http.put(url, device, {
            headers: headers
        }).toPromise();
    };
    DevicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__configs_configs__["a" /* ConfigsProvider */]])
    ], DevicesProvider);
    return DevicesProvider;
}());

//# sourceMappingURL=devices.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageBase; });
var PageBase = /** @class */ (function () {
    function PageBase(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.isPageLoading = false;
    }
    PageBase.prototype.setPageLoading = function (loading, content) {
        this.isPageLoading = loading;
        if (this.loadingCtrl == null) {
            console.error("LoadingController not injected in derived class. Loading will not be shown");
            return;
        }
        if (this.pageLoadingCtrl == null) {
            this.pageLoadingCtrl = this.loadingCtrl.create({
                content: content == null ? 'Aguarde...' : content
            });
        }
        try {
            if (this.isPageLoading) {
                this.pageLoadingCtrl.present();
            }
            else {
                this.pageLoadingCtrl.dismiss();
                this.pageLoadingCtrl = null;
            }
        }
        catch (e) {
        }
    };
    return PageBase;
}());

//# sourceMappingURL=PageBase.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LampsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configs_configs__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LampsProvider = /** @class */ (function () {
    function LampsProvider(http, configs) {
        this.http = http;
        this.configs = configs;
    }
    LampsProvider.prototype.turnOn = function (command) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({});
        var url = this.configs.apiEndpoint + "devices/" + command.device_id + "/commands";
        return this.http.post(url, command, {
            headers: headers
        }).toPromise()
            .then(function (res) {
            command.id = res.id;
            return _this.waitCommandBeExecuted(command)
                .then(function (r) {
                command.pending = false;
                return r;
            });
        })
            .catch(function (err) {
            return false;
        });
    };
    LampsProvider.prototype.turnOff = function (command) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({});
        var url = this.configs.apiEndpoint + "devices/" + command.device_id + "/commands";
        return this.http.post(url, command, {
            headers: headers
        }).toPromise()
            .then(function (res) {
            command.id = res.id;
            return _this.waitCommandBeExecuted(command)
                .then(function (r) {
                command.pending = false;
                return r;
            });
        })
            .catch(function (err) {
            return false;
        });
    };
    LampsProvider.prototype.waitCommandBeExecuted = function (command) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({});
        var url = this.configs.apiEndpoint + "devices/" + command.device_id + "/commands/" + command.id;
        return this.http.get(url, {
            headers: headers
        }).toPromise()
            .then(function (result) {
            if (!result.pending) {
                return true;
            }
            var promise = new Promise(function (resolve, reject) {
                setTimeout(function () {
                    _this.waitCommandBeExecuted(command).then(function (a) {
                        resolve(a);
                    });
                }, 1000);
            });
            return promise;
        })
            .catch(function (err) {
            return false;
        });
    };
    LampsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__configs_configs__["a" /* ConfigsProvider */]])
    ], LampsProvider);
    return LampsProvider;
}());

//# sourceMappingURL=lamps.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lamps_lamps__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__devices_devices__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configs_configs__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Devices = __WEBPACK_IMPORTED_MODULE_2__devices_devices__["a" /* DevicesPage */];
        this.tab2Lamps = __WEBPACK_IMPORTED_MODULE_1__lamps_lamps__["a" /* LampsPage */];
        this.tab3Configs = __WEBPACK_IMPORTED_MODULE_3__configs_configs__["a" /* ConfigsPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/leovolpatto/Desktop/Leptons/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Devices" tabTitle="Dispositivos" tabIcon="git-compare"></ion-tab>\n  <ion-tab [root]="tab2Lamps" tabTitle="Luminárias" tabIcon="bulb"></ion-tab>\n  <ion-tab [root]="tab3Configs" tabTitle="Configurações" tabIcon="cog"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/leovolpatto/Desktop/Leptons/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_action_action__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_devices_devices__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_lamps_lamps__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_configs_configs__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_devices_devices__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_configs_configs__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_lamps_lamps__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_devices_devices__["a" /* DevicesPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_lamps_lamps__["a" /* LampsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_configs_configs__["a" /* ConfigsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/devices/devices.module#DevicesPageModule', name: 'DevicesPage', segment: 'devices', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/configs/configs.module#ConfigsPageModule', name: 'ConfigsPage', segment: 'configs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lamps/lamps.module#LampsPageModule', name: 'LampsPage', segment: 'lamps', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_devices_devices__["a" /* DevicesPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_lamps_lamps__["a" /* LampsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_configs_configs__["a" /* ConfigsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["a" /* HttpClient */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__providers_action_action__["a" /* ActionProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_devices_devices__["a" /* DevicesProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_configs_configs__["a" /* ConfigsProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_lamps_lamps__["a" /* LampsProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LampCommand; });
var LampCommand = /** @class */ (function () {
    function LampCommand() {
    }
    return LampCommand;
}());

//# sourceMappingURL=LampCommand.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/leovolpatto/Desktop/Leptons/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/leovolpatto/Desktop/Leptons/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActionProvider = /** @class */ (function () {
    function ActionProvider(http) {
        this.http = http;
    }
    ActionProvider.prototype.turnAcOn = function () {
        this.createAction('TurnOnAC');
    };
    ActionProvider.prototype.turnAcOff = function () {
        this.createAction('TurnOffAC');
    };
    ActionProvider.prototype.openGate = function () {
        this.createAction('OpenGate');
    };
    ActionProvider.prototype.closeGate = function () {
        this.createAction('CloseGate');
    };
    ActionProvider.prototype.turnOnLight = function () {
        this.createAction('TurnOnLight');
    };
    ActionProvider.prototype.turnOffLight = function () {
        this.createAction('TurnOffLight');
    };
    ActionProvider.prototype.createAction = function (action) {
        var url = "http://192.168.0.32:84/api/actions";
        var body = {
            'action': action
        };
        return this.http.post(url, body).subscribe(function (obj) {
        });
    };
    ActionProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ActionProvider);
    return ActionProvider;
}());

//# sourceMappingURL=action.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfigsProvider = /** @class */ (function () {
    //http://18.228.157.163:84/api/devices
    function ConfigsProvider(http, storage) {
        var _this = this;
        this.http = http;
        this.storage = storage;
        this.apiEndpoint = "http://api.leptons.com:84/api/";
        this.storage.keys()
            .then(function (keys) {
            if (keys.indexOf('api_endpoint') >= 0) {
                _this.storage.get('api_endpoint')
                    .then(function (url) {
                    _this.apiEndpoint = url;
                });
            }
        })
            .catch(function () {
            _this.apiEndpoint = "http://18.228.157.163/api/";
        });
    }
    ConfigsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */]])
    ], ConfigsProvider);
    return ConfigsProvider;
}());

//# sourceMappingURL=configs.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevicesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_devices_devices__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PageBase__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_configs_configs__ = __webpack_require__(42);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DevicesPage = /** @class */ (function (_super) {
    __extends(DevicesPage, _super);
    function DevicesPage(navCtrl, navParams, devicesProvider, loadingCtrl, events, configs) {
        var _this = _super.call(this, loadingCtrl) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.devicesProvider = devicesProvider;
        _this.loadingCtrl = loadingCtrl;
        _this.events = events;
        _this.configs = configs;
        return _this;
    }
    DevicesPage_1 = DevicesPage;
    DevicesPage.prototype.ionViewDidLoad = function () {
        this.loadDevices();
    };
    DevicesPage.prototype.loadDevices = function () {
        var _this = this;
        this.setPageLoading(true);
        this.devicesProvider.getDevices()
            .then(function (dev) {
            _this.activeDeviceList = dev.filter(function (d) { return d.active; });
            _this.inactiveDeviceList = dev.filter(function (d) { return !d.active; });
            _this.setPageLoading(false);
            DevicesPage_1.firstLoadedDevices = dev;
            _this.events.publish("devicesLoaded", dev);
        });
    };
    DevicesPage.prototype.inactivateDevice = function (device) {
        this.loadDevices();
    };
    DevicesPage.prototype.activateDevice = function (device) {
        this.loadDevices();
    };
    DevicesPage.firstLoadedDevices = [];
    DevicesPage = DevicesPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-devices',template:/*ion-inline-start:"/home/leovolpatto/Desktop/Leptons/src/pages/devices/devices.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Dispositivos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list no-border>\n    <ion-list-header>\n      Habilitados\n    </ion-list-header>\n\n    <ion-item *ngFor="let item of activeDeviceList">\n      <button ion-button icon-only clear item-end>\n        <ion-icon name="build"></ion-icon>\n      </button>\n      <ion-toggle checked="{{item.active}}" (click)="inactivateDevice(item);"></ion-toggle>\n      <ion-label>\n        {{item.name}}\n      </ion-label>\n      <ion-icon name=\'git-compare\' item-start></ion-icon>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>\n      Não Habilitados\n    </ion-list-header>\n\n    <ion-item *ngFor="let item of inactiveDeviceList">\n      <!--<ion-note item-end>\n        To the moon\n      </ion-note>-->      \n      <button ion-button icon-only clear item-end>\n        <ion-icon name="build"></ion-icon>\n      </button>\n      <ion-toggle checked="{{item.active}}"  (click)="activateDevice(item);"></ion-toggle>\n      <ion-label>\n        {{item.name}}\n      </ion-label>\n      <ion-icon name=\'git-compare\' item-start></ion-icon>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/home/leovolpatto/Desktop/Leptons/src/pages/devices/devices.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_devices_devices__["a" /* DevicesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_4__providers_configs_configs__["a" /* ConfigsProvider */]])
    ], DevicesPage);
    return DevicesPage;
    var DevicesPage_1;
}(__WEBPACK_IMPORTED_MODULE_3__PageBase__["a" /* PageBase */]));

//# sourceMappingURL=devices.js.map

/***/ })

},[207]);
//# sourceMappingURL=main.js.map