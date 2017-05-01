define('app',["require", "exports", "semantic-ui"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
        }
        App.prototype.configureRouter = function (config, router) {
            this.router = router;
            config.title = 'Image Uploader';
            config.map([
                { route: ['', 'upload'], name: 'upload', moduleId: 'upload' },
                { route: 'admin/image-upload-configs', name: 'image-upload-configs', moduleId: 'admin/image-upload-configs' },
                { route: 'admin/gallery', name: 'gallery', moduleId: 'admin/gallery' }
            ]);
        };
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFHQTtRQUFBO1FBYUEsQ0FBQztRQVRDLDZCQUFlLEdBQWYsVUFBZ0IsTUFBTSxFQUFFLE1BQU07WUFDNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDckIsTUFBTSxDQUFDLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQztZQUNoQyxNQUFNLENBQUMsR0FBRyxDQUFDO2dCQUNULEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRTtnQkFDN0QsRUFBRSxLQUFLLEVBQUUsNEJBQTRCLEVBQUUsSUFBSSxFQUFFLHNCQUFzQixFQUFFLFFBQVEsRUFBRSw0QkFBNEIsRUFBRTtnQkFDN0csRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRTthQUN2RSxDQUFDLENBQUM7UUFDTCxDQUFDO1FBQ0gsVUFBQztJQUFELENBYkEsQUFhQyxJQUFBO0lBYlksa0JBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwic2VtYW50aWMtdWlcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJhdXJlbGlhLXJvdXRlclwiO1xuXG5leHBvcnQgY2xhc3MgQXBwIHtcblxuICByb3V0ZXI6IFJvdXRlcjtcblxuICBjb25maWd1cmVSb3V0ZXIoY29uZmlnLCByb3V0ZXIpIHtcbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgICBjb25maWcudGl0bGUgPSAnSW1hZ2UgVXBsb2FkZXInO1xuICAgIGNvbmZpZy5tYXAoW1xuICAgICAgeyByb3V0ZTogWycnLCAndXBsb2FkJ10sIG5hbWU6ICd1cGxvYWQnLCBtb2R1bGVJZDogJ3VwbG9hZCcgfSxcbiAgICAgIHsgcm91dGU6ICdhZG1pbi9pbWFnZS11cGxvYWQtY29uZmlncycsIG5hbWU6ICdpbWFnZS11cGxvYWQtY29uZmlncycsIG1vZHVsZUlkOiAnYWRtaW4vaW1hZ2UtdXBsb2FkLWNvbmZpZ3MnIH0sXG4gICAgICB7IHJvdXRlOiAnYWRtaW4vZ2FsbGVyeScsIG5hbWU6ICdnYWxsZXJ5JywgbW9kdWxlSWQ6ICdhZG1pbi9nYWxsZXJ5JyB9XG4gICAgXSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBLGtCQUFlO1FBQ2IsS0FBSyxFQUFFLElBQUk7UUFDWCxPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUMiLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGRlYnVnOiB0cnVlLFxuICB0ZXN0aW5nOiB0cnVlXG59O1xuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBR0EsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUU7YUFDdkIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXhCLEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDbkMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFFRCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBZEQsOEJBY0MiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXVyZWxpYX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnXG5pbXBvcnQgZW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYTogQXVyZWxpYSkge1xuICBhdXJlbGlhLnVzZVxuICAgIC5zdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxuICAgIC5mZWF0dXJlKCdyZXNvdXJjZXMnKTtcblxuICBpZiAoZW52aXJvbm1lbnQuZGVidWcpIHtcbiAgICBhdXJlbGlhLnVzZS5kZXZlbG9wbWVudExvZ2dpbmcoKTtcbiAgfVxuXG4gIGlmIChlbnZpcm9ubWVudC50ZXN0aW5nKSB7XG4gICAgYXVyZWxpYS51c2UucGx1Z2luKCdhdXJlbGlhLXRlc3RpbmcnKTtcbiAgfVxuXG4gIGF1cmVsaWEuc3RhcnQoKS50aGVuKCgpID0+IGF1cmVsaWEuc2V0Um9vdCgpKTtcbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('models',["require", "exports", "./models/image-upload-config", "./models/image-upload", "./models/blob", "./models/docs"], function (require, exports, image_upload_config_1, image_upload_1, blob_1, docs_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(image_upload_config_1);
    __export(image_upload_1);
    __export(blob_1);
    __export(docs_1);
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBQSxnQ0FBNkM7SUFDN0MseUJBQXNDO0lBQ3RDLGlCQUE4QjtJQUM5QixpQkFBOEIiLCJmaWxlIjoibW9kZWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSBcIi4vbW9kZWxzL2ltYWdlLXVwbG9hZC1jb25maWdcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbW9kZWxzL2ltYWdlLXVwbG9hZFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9tb2RlbHMvYmxvYlwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9tb2RlbHMvZG9jc1wiOyJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('services',["require", "exports", "./services/upload", "./services/image-upload-config-demo"], function (require, exports, upload_1, image_upload_config_demo_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(upload_1);
    __export(image_upload_config_demo_1);
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFBLG1CQUFrQztJQUNsQyxxQ0FBb0QiLCJmaWxlIjoic2VydmljZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tIFwiLi9zZXJ2aWNlcy91cGxvYWRcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc2VydmljZXMvaW1hZ2UtdXBsb2FkLWNvbmZpZy1kZW1vXCI7Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
define('upload',["require", "exports", "aurelia-framework", "./services"], function (require, exports, aurelia_framework_1, services_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UploadViewModel = (function () {
        function UploadViewModel(upload, uploadConfigService) {
            this.upload = upload;
            this.uploadConfigService = uploadConfigService;
        }
        UploadViewModel.prototype.attached = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this;
                            return [4, this.uploadConfigService.getByKey("test1")];
                        case 1:
                            _a.uploadConfig = _b.sent();
                            return [2];
                    }
                });
            });
        };
        return UploadViewModel;
    }());
    UploadViewModel = __decorate([
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [services_1.UploadService,
            services_1.ImageUploadConfigService])
    ], UploadViewModel);
    exports.UploadViewModel = UploadViewModel;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwbG9hZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUtBLElBQWEsZUFBZTtRQU94Qix5QkFDSSxNQUFxQixFQUNyQixtQkFBNkM7WUFFN0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDckIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLG1CQUFtQixDQUFDO1FBQ25ELENBQUM7UUFFSyxrQ0FBUSxHQUFkOzs7Ozs7NEJBQ0ksS0FBQSxJQUFJLENBQUE7NEJBQWdCLFdBQU0sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBQTs7NEJBQXBFLEdBQUssWUFBWSxHQUFHLFNBQWdELENBQUM7Ozs7O1NBQ3hFO1FBQ0wsc0JBQUM7SUFBRCxDQWxCQSxBQWtCQyxJQUFBO0lBbEJZLGVBQWU7UUFEM0IsOEJBQVU7eUNBU0ssd0JBQWE7WUFDQSxtQ0FBd0I7T0FUeEMsZUFBZSxDQWtCM0I7SUFsQlksMENBQWUiLCJmaWxlIjoidXBsb2FkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0b2luamVjdCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHsgVXBsb2FkU2VydmljZSwgSW1hZ2VVcGxvYWRDb25maWdTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXNcIjtcclxuaW1wb3J0IHsgSW1hZ2VVcGxvYWRDb25maWcsIEltYWdlVXBsb2FkLCBEb2MsIEJsb2IgfSBmcm9tIFwiLi9tb2RlbHNcIjtcclxuXHJcbkBhdXRvaW5qZWN0XHJcbmV4cG9ydCBjbGFzcyBVcGxvYWRWaWV3TW9kZWwge1xyXG5cclxuICAgIHVwbG9hZDogVXBsb2FkU2VydmljZTtcclxuICAgIHVwbG9hZENvbmZpZ1NlcnZpY2U6IEltYWdlVXBsb2FkQ29uZmlnU2VydmljZTtcclxuXHJcbiAgICB1cGxvYWRDb25maWc6IEltYWdlVXBsb2FkQ29uZmlnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHVwbG9hZDogVXBsb2FkU2VydmljZSxcclxuICAgICAgICB1cGxvYWRDb25maWdTZXJ2aWNlOiBJbWFnZVVwbG9hZENvbmZpZ1NlcnZpY2UpIHtcclxuXHJcbiAgICAgICAgdGhpcy51cGxvYWQgPSB1cGxvYWQ7XHJcbiAgICAgICAgdGhpcy51cGxvYWRDb25maWdTZXJ2aWNlID0gdXBsb2FkQ29uZmlnU2VydmljZTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBhdHRhY2hlZCgpIHtcclxuICAgICAgICB0aGlzLnVwbG9hZENvbmZpZyA9IGF3YWl0IHRoaXMudXBsb2FkQ29uZmlnU2VydmljZS5nZXRCeUtleShcInRlc3QxXCIpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('admin/gallery',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GalleryViewModel = (function () {
        function GalleryViewModel() {
        }
        return GalleryViewModel;
    }());
    exports.GalleryViewModel = GalleryViewModel;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluL2dhbGxlcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQUE7UUFBQTtRQUVBLENBQUM7UUFBRCx1QkFBQztJQUFELENBRkEsQUFFQyxJQUFBO0lBRlksNENBQWdCIiwiZmlsZSI6ImFkbWluL2dhbGxlcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgR2FsbGVyeVZpZXdNb2RlbCB7XHJcbiAgICBcclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('admin/image-upload-config-detail',["require", "exports", "aurelia-framework", "aurelia-dialog", "../models"], function (require, exports, aurelia_framework_1, aurelia_dialog_1, models_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ImageUploadConfigDetailViewModel = (function () {
        function ImageUploadConfigDetailViewModel(controller) {
            this.controller = controller;
        }
        ImageUploadConfigDetailViewModel.prototype.attached = function () {
            $(".ui.checkbox").checkbox();
        };
        ImageUploadConfigDetailViewModel.prototype.activate = function (config) {
            if (!config) {
                this.config = new models_1.ImageUploadConfig();
                this.title = "Add Image Upload Config";
            }
            else {
                this.config = config;
                this.title = "Edit Image Upload Config";
            }
            this.action = "Save";
        };
        ImageUploadConfigDetailViewModel.prototype.submit = function () {
            this.controller.ok(this.config);
        };
        ImageUploadConfigDetailViewModel.prototype.cancel = function () {
            this.controller.cancel();
        };
        ImageUploadConfigDetailViewModel.prototype.addSize = function (config) {
            config.Sizes.push(new models_1.Size());
        };
        ImageUploadConfigDetailViewModel.prototype.removeSize = function (config, size) {
            var index = config.Sizes.indexOf(size);
            config.Sizes.splice(index, 1);
        };
        return ImageUploadConfigDetailViewModel;
    }());
    ImageUploadConfigDetailViewModel = __decorate([
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [aurelia_dialog_1.DialogController])
    ], ImageUploadConfigDetailViewModel);
    exports.ImageUploadConfigDetailViewModel = ImageUploadConfigDetailViewModel;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluL2ltYWdlLXVwbG9hZC1jb25maWctZGV0YWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUlBLElBQWEsZ0NBQWdDO1FBT3pDLDBDQUFZLFVBQTRCO1lBQ3BDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQ2pDLENBQUM7UUFFRCxtREFBUSxHQUFSO1lBQ0ksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2pDLENBQUM7UUFFRCxtREFBUSxHQUFSLFVBQVMsTUFBeUI7WUFFOUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNWLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSwwQkFBaUIsRUFBRSxDQUFDO2dCQUN0QyxJQUFJLENBQUMsS0FBSyxHQUFHLHlCQUF5QixDQUFDO1lBQzNDLENBQUM7WUFFRCxJQUFJLENBQUMsQ0FBQztnQkFDRixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztnQkFDckIsSUFBSSxDQUFDLEtBQUssR0FBRywwQkFBMEIsQ0FBQztZQUM1QyxDQUFDO1lBRUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDekIsQ0FBQztRQUVELGlEQUFNLEdBQU47WUFFSSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEMsQ0FBQztRQUVELGlEQUFNLEdBQU47WUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzdCLENBQUM7UUFFRCxrREFBTyxHQUFQLFVBQVEsTUFBeUI7WUFDN0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxhQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ2xDLENBQUM7UUFFRCxxREFBVSxHQUFWLFVBQVcsTUFBeUIsRUFBRSxJQUFVO1lBQzVDLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNsQyxDQUFDO1FBQ0wsdUNBQUM7SUFBRCxDQS9DQSxBQStDQyxJQUFBO0lBL0NZLGdDQUFnQztRQUQ1Qyw4QkFBVTt5Q0FRaUIsaUNBQWdCO09BUC9CLGdDQUFnQyxDQStDNUM7SUEvQ1ksNEVBQWdDIiwiZmlsZSI6ImFkbWluL2ltYWdlLXVwbG9hZC1jb25maWctZGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0b2luamVjdCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHsgRGlhbG9nQ29udHJvbGxlciB9IGZyb20gJ2F1cmVsaWEtZGlhbG9nJztcclxuaW1wb3J0IHsgSW1hZ2VVcGxvYWRDb25maWcsIFNpemUgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbkBhdXRvaW5qZWN0XHJcbmV4cG9ydCBjbGFzcyBJbWFnZVVwbG9hZENvbmZpZ0RldGFpbFZpZXdNb2RlbCB7XHJcblxyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGFjdGlvbjogc3RyaW5nO1xyXG4gICAgY29udHJvbGxlcjogRGlhbG9nQ29udHJvbGxlcjtcclxuICAgIGNvbmZpZzogSW1hZ2VVcGxvYWRDb25maWc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29udHJvbGxlcjogRGlhbG9nQ29udHJvbGxlcikge1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XHJcbiAgICB9XHJcblxyXG4gICAgYXR0YWNoZWQoKSB7XHJcbiAgICAgICAgJChcIi51aS5jaGVja2JveFwiKS5jaGVja2JveCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFjdGl2YXRlKGNvbmZpZzogSW1hZ2VVcGxvYWRDb25maWcpIHtcclxuXHJcbiAgICAgICAgaWYgKCFjb25maWcpIHtcclxuICAgICAgICAgICAgdGhpcy5jb25maWcgPSBuZXcgSW1hZ2VVcGxvYWRDb25maWcoKTtcclxuICAgICAgICAgICAgdGhpcy50aXRsZSA9IFwiQWRkIEltYWdlIFVwbG9hZCBDb25maWdcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcclxuICAgICAgICAgICAgdGhpcy50aXRsZSA9IFwiRWRpdCBJbWFnZSBVcGxvYWQgQ29uZmlnXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmFjdGlvbiA9IFwiU2F2ZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIHN1Ym1pdCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyLm9rKHRoaXMuY29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICBjYW5jZWwoKSB7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyLmNhbmNlbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFNpemUoY29uZmlnOiBJbWFnZVVwbG9hZENvbmZpZyl7XHJcbiAgICAgICAgY29uZmlnLlNpemVzLnB1c2gobmV3IFNpemUoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlU2l6ZShjb25maWc6IEltYWdlVXBsb2FkQ29uZmlnLCBzaXplOiBTaXplKXtcclxuICAgICAgICBsZXQgaW5kZXggPSBjb25maWcuU2l6ZXMuaW5kZXhPZihzaXplKTtcclxuICAgICAgICBjb25maWcuU2l6ZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
define('admin/image-upload-configs',["require", "exports", "aurelia-framework", "../services/image-upload-config-demo", "aurelia-dialog"], function (require, exports, aurelia_framework_1, image_upload_config_demo_1, aurelia_dialog_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ImageUploadConfigsViewModel = (function () {
        function ImageUploadConfigsViewModel(service, dialog) {
            this.service = service;
            this.dialog = dialog;
        }
        ImageUploadConfigsViewModel.prototype.attached = function () {
            $(".ui.checkbox").checkbox();
            this.refresh();
        };
        ImageUploadConfigsViewModel.prototype.refresh = function () {
            return __awaiter(this, void 0, void 0, function () {
                var docs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.isRefreshing = true;
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, , 3, 4]);
                            return [4, this.service.list()];
                        case 2:
                            docs = _a.sent();
                            this.configs = docs.Values.map(function (v) { return v.value; });
                            return [3, 4];
                        case 3:
                            this.isRefreshing = false;
                            return [7];
                        case 4: return [2];
                    }
                });
            });
        };
        ImageUploadConfigsViewModel.prototype.add = function () {
            return __awaiter(this, void 0, void 0, function () {
                var defaultConfig, result, config;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.service.default()];
                        case 1:
                            defaultConfig = (_a.sent()).value;
                            return [4, this.dialog.open({
                                    viewModel: "admin/image-upload-config-detail", model: defaultConfig
                                })];
                        case 2:
                            result = _a.sent();
                            if (!!result.wasCancelled) return [3, 4];
                            return [4, this.service.add(result.output)];
                        case 3:
                            config = _a.sent();
                            this.configs.push(config.value);
                            _a.label = 4;
                        case 4: return [2];
                    }
                });
            });
        };
        ImageUploadConfigsViewModel.prototype.edit = function (config) {
            return __awaiter(this, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.dialog.open({
                                viewModel: "admin/image-upload-config-detail", model: config
                            })];
                        case 1:
                            result = _a.sent();
                            if (!!result.wasCancelled) return [3, 3];
                            return [4, this.service.update(result.output)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2];
                    }
                });
            });
        };
        ImageUploadConfigsViewModel.prototype.remove = function (config) {
            return __awaiter(this, void 0, void 0, function () {
                var result, index;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.dialog.open({
                                viewModel: "base/dialogs/confirm-remove", model: {
                                    title: "Confirm Remove Image Upload Config",
                                    prompt: "Are you sure want to remove the config '" + config.Key + " ?"
                                }
                            })];
                        case 1:
                            result = _a.sent();
                            if (!!result.wasCancelled) return [3, 3];
                            return [4, this.service.delete(config.Id)];
                        case 2:
                            _a.sent();
                            index = this.configs.indexOf(config);
                            this.configs.splice(index, 1);
                            _a.label = 3;
                        case 3: return [2];
                    }
                });
            });
        };
        ImageUploadConfigsViewModel.prototype.select = function (config) {
            this.currentConfig = config;
            this.refresh();
        };
        return ImageUploadConfigsViewModel;
    }());
    ImageUploadConfigsViewModel = __decorate([
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [image_upload_config_demo_1.ImageUploadConfigService, aurelia_dialog_1.DialogService])
    ], ImageUploadConfigsViewModel);
    exports.ImageUploadConfigsViewModel = ImageUploadConfigsViewModel;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluL2ltYWdlLXVwbG9hZC1jb25maWdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBTUEsSUFBYSwyQkFBMkI7UUFTcEMscUNBQVksT0FBaUMsRUFBRSxNQUFxQjtZQUNoRSxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN6QixDQUFDO1FBRUQsOENBQVEsR0FBUjtZQUNJLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUU3QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbkIsQ0FBQztRQUVLLDZDQUFPLEdBQWI7Ozs7Ozs0QkFFSSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQzs7Ozs0QkFHVixXQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUE7O21DQUF6QixTQUF5Qjs0QkFDcEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxLQUFLLEVBQVAsQ0FBTyxDQUFDLENBQUM7Ozs0QkFHN0MsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7Ozs7OztTQUdqQztRQUVLLHlDQUFHLEdBQVQ7Ozs7O2dDQUV5QixXQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUE7OzRDQUE3QixDQUFDLFNBQTRCLENBQUMsQ0FBQyxLQUFLOzRCQUUzQyxXQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO29DQUNoQyxTQUFTLEVBQUUsa0NBQWtDLEVBQUUsS0FBSyxFQUFFLGFBQWE7aUNBQ3RFLENBQUMsRUFBQTs7cUNBRlcsU0FFWDtpQ0FFRSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQXBCLGNBQW9COzRCQUVQLFdBQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFBOztxQ0FBckMsU0FBcUM7NEJBQ2xELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7O1NBR3ZDO1FBRUssMENBQUksR0FBVixVQUFXLE1BQXlCOzs7OztnQ0FDbkIsV0FBTSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztnQ0FDaEMsU0FBUyxFQUFFLGtDQUFrQyxFQUFFLEtBQUssRUFBRSxNQUFNOzZCQUMvRCxDQUFDLEVBQUE7O3FDQUZXLFNBRVg7aUNBRUUsQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFwQixjQUFvQjs0QkFDcEIsV0FBTSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUE7OzRCQUF4QyxTQUF3QyxDQUFDOzs7Ozs7U0FFaEQ7UUFFSyw0Q0FBTSxHQUFaLFVBQWEsTUFBeUI7OzRCQWExQixLQUFLOzs7Z0NBWEEsV0FBTSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztnQ0FDaEMsU0FBUyxFQUFFLDZCQUE2QixFQUFFLEtBQUssRUFBRTtvQ0FDN0MsS0FBSyxFQUFFLG9DQUFvQztvQ0FDM0MsTUFBTSxFQUFFLDBDQUEwQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSTtpQ0FDekU7NkJBQ0osQ0FBQyxFQUFBOztxQ0FMVyxTQUtYO2lDQUVFLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBcEIsY0FBb0I7NEJBRXBCLFdBQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFBOzs0QkFBcEMsU0FBb0MsQ0FBQztvQ0FFekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDOzRCQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7Ozs7OztTQUdyQztRQUVELDRDQUFNLEdBQU4sVUFBTyxNQUF5QjtZQUU1QixJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQztZQUM1QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFbkIsQ0FBQztRQUVMLGtDQUFDO0lBQUQsQ0F0RkEsQUFzRkMsSUFBQTtJQXRGWSwyQkFBMkI7UUFEdkMsOEJBQVU7eUNBVWMsbURBQXdCLEVBQVUsOEJBQWE7T0FUM0QsMkJBQTJCLENBc0Z2QztJQXRGWSxrRUFBMkIiLCJmaWxlIjoiYWRtaW4vaW1hZ2UtdXBsb2FkLWNvbmZpZ3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRvaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IEltYWdlVXBsb2FkQ29uZmlnU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9pbWFnZS11cGxvYWQtY29uZmlnLWRlbW9cIjtcclxuaW1wb3J0IHsgSW1hZ2VVcGxvYWRDb25maWcgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IERpYWxvZ1NlcnZpY2UsIERpYWxvZ1Jlc3VsdCB9IGZyb20gJ2F1cmVsaWEtZGlhbG9nJztcclxuXHJcbkBhdXRvaW5qZWN0XHJcbmV4cG9ydCBjbGFzcyBJbWFnZVVwbG9hZENvbmZpZ3NWaWV3TW9kZWwge1xyXG5cclxuICAgIHNlcnZpY2U6IEltYWdlVXBsb2FkQ29uZmlnU2VydmljZTtcclxuICAgIGNvbmZpZ3M6IEltYWdlVXBsb2FkQ29uZmlnW107XHJcbiAgICBjdXJyZW50Q29uZmlnOiBJbWFnZVVwbG9hZENvbmZpZztcclxuICAgIGRpYWxvZzogRGlhbG9nU2VydmljZTtcclxuXHJcbiAgICBpc1JlZnJlc2hpbmc6IGJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2VydmljZTogSW1hZ2VVcGxvYWRDb25maWdTZXJ2aWNlLCBkaWFsb2c6IERpYWxvZ1NlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLnNlcnZpY2UgPSBzZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuZGlhbG9nID0gZGlhbG9nO1xyXG4gICAgfVxyXG5cclxuICAgIGF0dGFjaGVkKCkge1xyXG4gICAgICAgICQoXCIudWkuY2hlY2tib3hcIikuY2hlY2tib3goKTtcclxuXHJcbiAgICAgICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgcmVmcmVzaCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5pc1JlZnJlc2hpbmcgPSB0cnVlO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgZG9jcyA9IGF3YWl0IHRoaXMuc2VydmljZS5saXN0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlncyA9IGRvY3MuVmFsdWVzLm1hcCh2ID0+IHYudmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHtcclxuICAgICAgICAgICAgdGhpcy5pc1JlZnJlc2hpbmcgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGFkZCgpIHtcclxuXHJcbiAgICAgICAgbGV0IGRlZmF1bHRDb25maWcgPSAoYXdhaXQgdGhpcy5zZXJ2aWNlLmRlZmF1bHQoKSkudmFsdWU7XHJcblxyXG4gICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCB0aGlzLmRpYWxvZy5vcGVuKHtcclxuICAgICAgICAgICAgdmlld01vZGVsOiBgYWRtaW4vaW1hZ2UtdXBsb2FkLWNvbmZpZy1kZXRhaWxgLCBtb2RlbDogZGVmYXVsdENvbmZpZ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoIXJlc3VsdC53YXNDYW5jZWxsZWQpIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBjb25maWcgPSBhd2FpdCB0aGlzLnNlcnZpY2UuYWRkKHJlc3VsdC5vdXRwdXQpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3MucHVzaChjb25maWcudmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZWRpdChjb25maWc6IEltYWdlVXBsb2FkQ29uZmlnKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHRoaXMuZGlhbG9nLm9wZW4oe1xyXG4gICAgICAgICAgICB2aWV3TW9kZWw6IGBhZG1pbi9pbWFnZS11cGxvYWQtY29uZmlnLWRldGFpbGAsIG1vZGVsOiBjb25maWdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFyZXN1bHQud2FzQ2FuY2VsbGVkKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2VydmljZS51cGRhdGUocmVzdWx0Lm91dHB1dCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHJlbW92ZShjb25maWc6IEltYWdlVXBsb2FkQ29uZmlnKSB7XHJcblxyXG4gICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCB0aGlzLmRpYWxvZy5vcGVuKHtcclxuICAgICAgICAgICAgdmlld01vZGVsOiBgYmFzZS9kaWFsb2dzL2NvbmZpcm0tcmVtb3ZlYCwgbW9kZWw6IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkNvbmZpcm0gUmVtb3ZlIEltYWdlIFVwbG9hZCBDb25maWdcIixcclxuICAgICAgICAgICAgICAgIHByb21wdDogXCJBcmUgeW91IHN1cmUgd2FudCB0byByZW1vdmUgdGhlIGNvbmZpZyAnXCIgKyBjb25maWcuS2V5ICsgXCIgP1wiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFyZXN1bHQud2FzQ2FuY2VsbGVkKSB7XHJcblxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNlcnZpY2UuZGVsZXRlKGNvbmZpZy5JZCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmNvbmZpZ3MuaW5kZXhPZihjb25maWcpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3Muc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdChjb25maWc6IEltYWdlVXBsb2FkQ29uZmlnKSB7XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudENvbmZpZyA9IGNvbmZpZztcclxuICAgICAgICB0aGlzLnJlZnJlc2goKTtcclxuXHJcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('models/blob',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Blob = (function () {
        function Blob() {
        }
        return Blob;
    }());
    exports.Blob = Blob;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9ibG9iLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBO1FBQUE7UUFJQSxDQUFDO1FBQUQsV0FBQztJQUFELENBSkEsQUFJQyxJQUFBO0lBSlksb0JBQUkiLCJmaWxlIjoibW9kZWxzL2Jsb2IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQmxvYiB7XHJcbiAgICBLZXk6IHN0cmluZztcclxuICAgIFN1YktleTogc3RyaW5nO1xyXG4gICAgVXJsOiBzdHJpbmc7XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

define('models/docs',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Docs = (function () {
        function Docs(values) {
            this.Values = values.map(function (v) { return new Doc(v); });
        }
        return Docs;
    }());
    exports.Docs = Docs;
    var Doc = (function () {
        function Doc(value) {
            this.value = value;
        }
        return Doc;
    }());
    exports.Doc = Doc;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9kb2NzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBO1FBS0ksY0FBWSxNQUFXO1lBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLElBQUksR0FBRyxDQUFJLENBQUMsQ0FBQyxFQUFiLENBQWEsQ0FBQyxDQUFDO1FBQ2pELENBQUM7UUFFTCxXQUFDO0lBQUQsQ0FUQSxBQVNDLElBQUE7SUFUWSxvQkFBSTtJQVdqQjtRQU1JLGFBQVksS0FBUTtZQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUN2QixDQUFDO1FBQ0wsVUFBQztJQUFELENBVEEsQUFTQyxJQUFBO0lBVFksa0JBQUciLCJmaWxlIjoibW9kZWxzL2RvY3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRG9jczxUPiB7XHJcblxyXG4gICAgQ29udGludWF0aW9uVG9rZW46IHN0cmluZztcclxuICAgIFZhbHVlczogRG9jPFQ+W107XHJcblxyXG4gICAgY29uc3RydWN0b3IodmFsdWVzOiBUW10pIHtcclxuICAgICAgICB0aGlzLlZhbHVlcyA9IHZhbHVlcy5tYXAodiA9PiBuZXcgRG9jPFQ+KHYpKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEb2M8VD4ge1xyXG5cclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICB0eXBlOiBzdHJpbmc7XHJcbiAgICB2YWx1ZTogVDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZTogVCkge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('models/image-upload-config',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ImageUploadConfig = (function () {
        function ImageUploadConfig() {
        }
        return ImageUploadConfig;
    }());
    exports.ImageUploadConfig = ImageUploadConfig;
    var CropOptions = (function () {
        function CropOptions() {
        }
        return CropOptions;
    }());
    exports.CropOptions = CropOptions;
    var Size = (function () {
        function Size() {
        }
        return Size;
    }());
    exports.Size = Size;
    var AspectRatio;
    (function (AspectRatio) {
        AspectRatio[AspectRatio["Sixteen_to_Nine"] = 0] = "Sixteen_to_Nine";
        AspectRatio[AspectRatio["Four_to_Three"] = 1] = "Four_to_Three";
        AspectRatio[AspectRatio["One_to_One"] = 2] = "One_to_One";
        AspectRatio[AspectRatio["Two_to_Three"] = 3] = "Two_to_Three";
        AspectRatio[AspectRatio["Free"] = 4] = "Free";
    })(AspectRatio = exports.AspectRatio || (exports.AspectRatio = {}));
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9pbWFnZS11cGxvYWQtY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBO1FBQUE7UUFZQSxDQUFDO1FBQUQsd0JBQUM7SUFBRCxDQVpBLEFBWUMsSUFBQTtJQVpZLDhDQUFpQjtJQWM5QjtRQUFBO1FBR0EsQ0FBQztRQUFELGtCQUFDO0lBQUQsQ0FIQSxBQUdDLElBQUE7SUFIWSxrQ0FBVztJQUt4QjtRQUFBO1FBSUEsQ0FBQztRQUFELFdBQUM7SUFBRCxDQUpBLEFBSUMsSUFBQTtJQUpZLG9CQUFJO0lBTWpCLElBQVksV0FNWDtJQU5ELFdBQVksV0FBVztRQUNmLG1FQUFlLENBQUE7UUFDZiwrREFBYSxDQUFBO1FBQ2IseURBQVUsQ0FBQTtRQUNWLDZEQUFZLENBQUE7UUFDWiw2Q0FBSSxDQUFBO0lBQ1osQ0FBQyxFQU5XLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBTXRCIiwiZmlsZSI6Im1vZGVscy9pbWFnZS11cGxvYWQtY29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEltYWdlVXBsb2FkQ29uZmlnIHtcclxuXHJcbiAgICBJZDogc3RyaW5nO1xyXG4gICAgS2V5OiBzdHJpbmc7XHJcbiAgICBEZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgQXNwZWN0UmF0aW86IEFzcGVjdFJhdGlvO1xyXG4gICAgVmlld01vZGU6IG51bWJlcjtcclxuICAgIEluY2x1ZGVPcmlnaW5hbFNpemU6IGJvb2xlYW47XHJcbiAgICBTaXplczogU2l6ZVtdO1xyXG4gICAgQ3JvcE9wdGlvbnM6IENyb3BPcHRpb25zO1xyXG4gICAgRW5hYmxlQ29tcHJlc3Npb246IGJvb2xlYW47XHJcbiAgICBDb21wcmVzc2lvblF1YWxpdHk6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENyb3BPcHRpb25zIHtcclxuICAgIEd1aWRlczogYm9vbGVhbjtcclxuICAgIENlbnRlcjogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpemUge1xyXG4gICAgV2lkdGg6IG51bWJlcjtcclxuICAgIEhlaWdodDogbnVtYmVyO1xyXG4gICAgS2V5OiBzdHJpbmc7XHJcbn0gXHJcblxyXG5leHBvcnQgZW51bSBBc3BlY3RSYXRpbyB7XHJcbiAgICAgICAgU2l4dGVlbl90b19OaW5lLFxyXG4gICAgICAgIEZvdXJfdG9fVGhyZWUsXHJcbiAgICAgICAgT25lX3RvX09uZSxcclxuICAgICAgICBUd29fdG9fVGhyZWUsXHJcbiAgICAgICAgRnJlZVxyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('models/image-upload',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ImageUpload = (function () {
        function ImageUpload(content, config) {
            this.Content = content;
            this.Config = config;
        }
        return ImageUpload;
    }());
    exports.ImageUpload = ImageUpload;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9pbWFnZS11cGxvYWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBRUE7UUFLSyxxQkFBWSxPQUFjLEVBQUUsTUFBeUI7WUFDakQsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDekIsQ0FBQztRQUNOLGtCQUFDO0lBQUQsQ0FUQSxBQVNDLElBQUE7SUFUWSxrQ0FBVyIsImZpbGUiOiJtb2RlbHMvaW1hZ2UtdXBsb2FkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW1hZ2VVcGxvYWRDb25maWcgfSBmcm9tIFwiLi9pbWFnZS11cGxvYWQtY29uZmlnXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSW1hZ2VVcGxvYWQge1xyXG5cclxuICAgICBDb250ZW50OiBzdHJpbmc7XHJcbiAgICAgQ29uZmlnOiBJbWFnZVVwbG9hZENvbmZpZztcclxuXHJcbiAgICAgY29uc3RydWN0b3IoY29udGVudDpzdHJpbmcsIGNvbmZpZzogSW1hZ2VVcGxvYWRDb25maWcpe1xyXG4gICAgICAgICB0aGlzLkNvbnRlbnQgPSBjb250ZW50O1xyXG4gICAgICAgICB0aGlzLkNvbmZpZyA9IGNvbmZpZztcclxuICAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

define('services/base',["require", "exports", "aurelia-fetch-client"], function (require, exports, aurelia_fetch_client_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BaseService = (function () {
        function BaseService(rootUrl) {
            this.rootUrl = rootUrl;
        }
        BaseService.prototype.getHttp = function () {
            var http = new aurelia_fetch_client_1.HttpClient();
            http.configure(function (config) {
                config.withBaseUrl("/api/");
            });
            return http;
        };
        return BaseService;
    }());
    exports.BaseService = BaseService;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2Jhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBRUE7UUFJSSxxQkFBWSxPQUFlO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQzNCLENBQUM7UUFFRCw2QkFBTyxHQUFQO1lBRUksSUFBSSxJQUFJLEdBQUcsSUFBSSxpQ0FBVSxFQUFFLENBQUM7WUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07Z0JBRWpCLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFaEMsQ0FBQyxDQUFDLENBQUM7WUFFSCxNQUFNLENBQUMsSUFBSSxDQUFDO1FBRWhCLENBQUM7UUFFTCxrQkFBQztJQUFELENBckJBLEFBcUJDLElBQUE7SUFyQlksa0NBQVciLCJmaWxlIjoic2VydmljZXMvYmFzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiYXVyZWxpYS1mZXRjaC1jbGllbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlU2VydmljZSB7XHJcblxyXG4gICAgcm9vdFVybDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHJvb3RVcmw6IHN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5yb290VXJsID0gcm9vdFVybDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRIdHRwKCk6IEh0dHBDbGllbnQge1xyXG5cclxuICAgICAgICBsZXQgaHR0cCA9IG5ldyBIdHRwQ2xpZW50KCk7XHJcbiAgICAgICAgaHR0cC5jb25maWd1cmUoY29uZmlnID0+IHtcclxuXHJcbiAgICAgICAgICAgIGNvbmZpZy53aXRoQmFzZVVybChcIi9hcGkvXCIpO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGh0dHA7XHJcblxyXG4gICAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
define('services/image-upload-config-demo',["require", "exports", "aurelia-fetch-client", "./base", "../models"], function (require, exports, aurelia_fetch_client_1, base_1, models_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ImageUploadConfigService = (function (_super) {
        __extends(ImageUploadConfigService, _super);
        function ImageUploadConfigService() {
            var _this = _super.call(this, "image-upload-config") || this;
            _this.routePrefix = "image-upload-config";
            _this.getDemoData();
            return _this;
        }
        ImageUploadConfigService.prototype.getDemoData = function () {
            this.configs = [];
            this.configs.push({
                Id: "1",
                AspectRatio: models_1.AspectRatio.Four_to_Three,
                CompressionQuality: 70,
                CropOptions: { Center: false, Guides: false },
                Description: "4 : 3 Test with compression",
                EnableCompression: true,
                IncludeOriginalSize: true,
                Key: "test1",
                Sizes: [{ Height: 600, Width: 400, Key: "large" }, { Height: 300, Width: 200, Key: "medium" }],
                ViewMode: 2
            });
            this.configs.push({
                Id: "2",
                AspectRatio: models_1.AspectRatio.Sixteen_to_Nine,
                CompressionQuality: 70,
                CropOptions: { Center: false, Guides: false },
                Description: "16 : 9 Test with no compression",
                EnableCompression: false,
                IncludeOriginalSize: true,
                Key: "test2",
                Sizes: [{ Height: 600, Width: 400, Key: "large" }, { Height: 300, Width: 200, Key: "medium" }],
                ViewMode: 2
            });
        };
        ImageUploadConfigService.prototype.list = function () {
            return __awaiter(this, void 0, void 0, function () {
                var configs, docs;
                return __generator(this, function (_a) {
                    configs = this.configs;
                    docs = new models_1.Docs(configs);
                    return [2, docs];
                });
            });
        };
        ImageUploadConfigService.prototype.default = function () {
            return __awaiter(this, void 0, void 0, function () {
                var config;
                return __generator(this, function (_a) {
                    config = {
                        Id: "1",
                        AspectRatio: models_1.AspectRatio.Four_to_Three,
                        CompressionQuality: 70,
                        CropOptions: { Center: false, Guides: false },
                        Description: "4 : 3 Test with compression",
                        EnableCompression: true,
                        IncludeOriginalSize: true,
                        Key: "test1",
                        Sizes: [{ Height: 600, Width: 400, Key: "large" }, { Height: 300, Width: 200, Key: "medium" }],
                        ViewMode: 2
                    };
                    return [2, new models_1.Doc(config)];
                });
            });
        };
        ImageUploadConfigService.prototype.get = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var config;
                return __generator(this, function (_a) {
                    config = this.configs.find(function (c) { return c.Id == id; });
                    return [2, new models_1.Doc(config)];
                });
            });
        };
        ImageUploadConfigService.prototype.getByKey = function (key) {
            return __awaiter(this, void 0, void 0, function () {
                var config;
                return __generator(this, function (_a) {
                    config = this.configs.find(function (c) { return c.Key == key; });
                    return [2, config];
                });
            });
        };
        ImageUploadConfigService.prototype.add = function (config) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.configs.push(config);
                    return [2, new models_1.Doc(config)];
                });
            });
        };
        ImageUploadConfigService.prototype.update = function (config) {
            return __awaiter(this, void 0, void 0, function () {
                var http, response;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            http = this.getHttp();
                            return [4, http.fetch(this.routePrefix + "/" + config.Id, {
                                    method: "put",
                                    body: aurelia_fetch_client_1.json(config)
                                })];
                        case 1:
                            response = _a.sent();
                            return [2];
                    }
                });
            });
        };
        ImageUploadConfigService.prototype.delete = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var http, response;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            http = this.getHttp();
                            return [4, http.fetch(this.routePrefix + "/" + id, {
                                    method: "delete"
                                })];
                        case 1:
                            response = _a.sent();
                            return [2];
                    }
                });
            });
        };
        return ImageUploadConfigService;
    }(base_1.BaseService));
    exports.ImageUploadConfigService = ImageUploadConfigService;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2ltYWdlLXVwbG9hZC1jb25maWctZGVtby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJQTtRQUE4Qyw0Q0FBVztRQUtyRDtZQUFBLFlBQ0ksa0JBQU0scUJBQXFCLENBQUMsU0FJL0I7WUFIRyxLQUFJLENBQUMsV0FBVyxHQUFHLHFCQUFxQixDQUFDO1lBRXpDLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzs7UUFDdkIsQ0FBQztRQUtELDhDQUFXLEdBQVg7WUFFSSxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztZQUVsQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztnQkFDZCxFQUFFLEVBQUUsR0FBRztnQkFDUCxXQUFXLEVBQUUsb0JBQVcsQ0FBQyxhQUFhO2dCQUN0QyxrQkFBa0IsRUFBRSxFQUFFO2dCQUN0QixXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7Z0JBQzdDLFdBQVcsRUFBRSw2QkFBNkI7Z0JBQzFDLGlCQUFpQixFQUFFLElBQUk7Z0JBQ3ZCLG1CQUFtQixFQUFFLElBQUk7Z0JBQ3pCLEdBQUcsRUFBRSxPQUFPO2dCQUNaLEtBQUssRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUM7Z0JBQzlGLFFBQVEsRUFBRSxDQUFDO2FBQ2QsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7Z0JBQ2QsRUFBRSxFQUFFLEdBQUc7Z0JBQ1AsV0FBVyxFQUFFLG9CQUFXLENBQUMsZUFBZTtnQkFDeEMsa0JBQWtCLEVBQUUsRUFB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QUMsS0FBSyxDQUFJLElBQUksQ0FBQyxXQUFXLFNBQUksRUFBSSxFQUFFO29DQUN6RCxNQUFNLEVBQUUsUUFBUTtpQ0FDbkIsQ0FBQyxFQUFBOzt1Q0FGYSxTQUViOzs7OztTQUVMO1FBRUwsK0JBQUM7SUFBRCxDQXBIQSxBQW9IQyxDQXBINkMsa0JBQVcsR0FvSHhEO0lBcEhZLDREQUF3QiIsImZpbGUiOiJzZXJ2aWNlcy9pbWFnZS11cGxvYWQtY29uZmlnLWRlbW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBqc29uIH0gZnJvbSBcImF1cmVsaWEtZmV0Y2gtY2xpZW50XCI7XHJcbmltcG9ydCB7IEJhc2VTZXJ2aWNlIH0gZnJvbSBcIi4vYmFzZVwiO1xyXG5pbXBvcnQgeyBJbWFnZVVwbG9hZENvbmZpZywgRG9jcywgRG9jLCBBc3BlY3RSYXRpbyB9IGZyb20gXCIuLi9tb2RlbHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBJbWFnZVVwbG9hZENvbmZpZ1NlcnZpY2UgZXh0ZW5kcyBCYXNlU2VydmljZSB7XHJcblxyXG4gICAgcm91dGVQcmVmaXg6IHN0cmluZztcclxuICAgIGNvbmZpZ3M6IEltYWdlVXBsb2FkQ29uZmlnW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoXCJpbWFnZS11cGxvYWQtY29uZmlnXCIpO1xyXG4gICAgICAgIHRoaXMucm91dGVQcmVmaXggPSBcImltYWdlLXVwbG9hZC1jb25maWdcIjtcclxuXHJcbiAgICAgICAgdGhpcy5nZXREZW1vRGF0YSgpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIGdldERlbW9EYXRhKCkge1xyXG5cclxuICAgICAgICB0aGlzLmNvbmZpZ3MgPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5jb25maWdzLnB1c2goe1xyXG4gICAgICAgICAgICBJZDogXCIxXCIsXHJcbiAgICAgICAgICAgIEFzcGVjdFJhdGlvOiBBc3BlY3RSYXRpby5Gb3VyX3RvX1RocmVlLFxyXG4gICAgICAgICAgICBDb21wcmVzc2lvblF1YWxpdHk6IDcwLFxyXG4gICAgICAgICAgICBDcm9wT3B0aW9uczogeyBDZW50ZXI6IGZhbHNlLCBHdWlkZXM6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgIERlc2NyaXB0aW9uOiBcIjQgOiAzIFRlc3Qgd2l0aCBjb21wcmVzc2lvblwiLFxyXG4gICAgICAgICAgICBFbmFibGVDb21wcmVzc2lvbjogdHJ1ZSxcclxuICAgICAgICAgICAgSW5jbHVkZU9yaWdpbmFsU2l6ZTogdHJ1ZSxcclxuICAgICAgICAgICAgS2V5OiBcInRlc3QxXCIsXHJcbiAgICAgICAgICAgIFNpemVzOiBbeyBIZWlnaHQ6IDYwMCwgV2lkdGg6IDQwMCwgS2V5OiBcImxhcmdlXCIgfSwgeyBIZWlnaHQ6IDMwMCwgV2lkdGg6IDIwMCwgS2V5OiBcIm1lZGl1bVwiIH1dLFxyXG4gICAgICAgICAgICBWaWV3TW9kZTogMlxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNvbmZpZ3MucHVzaCh7XHJcbiAgICAgICAgICAgIElkOiBcIjJcIixcclxuICAgICAgICAgICAgQXNwZWN0UmF0aW86IEFzcGVjdFJhdGlvLlNpeHRlZW5fdG9fTmluZSxcclxuICAgICAgICAgICAgQ29tcHJlc3Npb25RdWFsaXR5OiA3MCxcclxuICAgICAgICAgICAgQ3JvcE9wdGlvbnM6IHsgQ2VudGVyOiBmYWxzZSwgR3VpZGVzOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICBEZXNjcmlwdGlvbjogXCIxNiA6IDkgVGVzdCB3aXRoIG5vIGNvbXByZXNzaW9uXCIsXHJcbiAgICAgICAgICAgIEVuYWJsZUNvbXByZXNzaW9uOiBmYWxzZSxcclxuICAgICAgICAgICAgSW5jbHVkZU9yaWdpbmFsU2l6ZTogdHJ1ZSxcclxuICAgICAgICAgICAgS2V5OiBcInRlc3QyXCIsXHJcbiAgICAgICAgICAgIFNpemVzOiBbeyBIZWlnaHQ6IDYwMCwgV2lkdGg6IDQwMCwgS2V5OiBcImxhcmdlXCIgfSwgeyBIZWlnaHQ6IDMwMCwgV2lkdGg6IDIwMCwgS2V5OiBcIm1lZGl1bVwiIH1dLFxyXG4gICAgICAgICAgICBWaWV3TW9kZTogMlxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGxpc3QoKTogUHJvbWlzZTxEb2NzPEltYWdlVXBsb2FkQ29uZmlnPj4ge1xyXG5cclxuICAgICAgICBsZXQgY29uZmlncyA9IHRoaXMuY29uZmlncztcclxuXHJcbiAgICAgICAgbGV0IGRvY3MgPSBuZXcgRG9jczxJbWFnZVVwbG9hZENvbmZpZz4oY29uZmlncyk7XHJcblxyXG4gICAgICAgIHJldHVybiBkb2NzO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGRlZmF1bHQoKTogUHJvbWlzZTxEb2M8SW1hZ2VVcGxvYWRDb25maWc+PiB7XHJcblxyXG4gICAgICAgIGxldCBjb25maWc6IEltYWdlVXBsb2FkQ29uZmlnID0ge1xyXG4gICAgICAgICAgICBJZDogXCIxXCIsXHJcbiAgICAgICAgICAgIEFzcGVjdFJhdGlvOiBBc3BlY3RSYXRpby5Gb3VyX3RvX1RocmVlLFxyXG4gICAgICAgICAgICBDb21wcmVzc2lvblF1YWxpdHk6IDcwLFxyXG4gICAgICAgICAgICBDcm9wT3B0aW9uczogeyBDZW50ZXI6IGZhbHNlLCBHdWlkZXM6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgIERlc2NyaXB0aW9uOiBcIjQgOiAzIFRlc3Qgd2l0aCBjb21wcmVzc2lvblwiLFxyXG4gICAgICAgICAgICBFbmFibGVDb21wcmVzc2lvbjogdHJ1ZSxcclxuICAgICAgICAgICAgSW5jbHVkZU9yaWdpbmFsU2l6ZTogdHJ1ZSxcclxuICAgICAgICAgICAgS2V5OiBcInRlc3QxXCIsXHJcbiAgICAgICAgICAgIFNpemVzOiBbeyBIZWlnaHQ6IDYwMCwgV2lkdGg6IDQwMCwgS2V5OiBcImxhcmdlXCIgfSwgeyBIZWlnaHQ6IDMwMCwgV2lkdGg6IDIwMCwgS2V5OiBcIm1lZGl1bVwiIH1dLFxyXG4gICAgICAgICAgICBWaWV3TW9kZTogMlxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgRG9jPEltYWdlVXBsb2FkQ29uZmlnPihjb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGdldChpZDogc3RyaW5nKTogUHJvbWlzZTxEb2M8SW1hZ2VVcGxvYWRDb25maWc+PiB7XHJcblxyXG4gICAgICAgIGxldCBjb25maWcgPSB0aGlzLmNvbmZpZ3MuZmluZChjID0+IGMuSWQgPT0gaWQpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IERvYyhjb25maWcpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBnZXRCeUtleShrZXk6IHN0cmluZyk6IFByb21pc2U8SW1hZ2VVcGxvYWRDb25maWc+IHtcclxuXHJcbiAgICAgICAgbGV0IGNvbmZpZyA9IHRoaXMuY29uZmlncy5maW5kKGMgPT4gYy5LZXkgPT0ga2V5KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbmZpZztcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBhZGQoY29uZmlnOiBJbWFnZVVwbG9hZENvbmZpZyk6IFByb21pc2U8RG9jPEltYWdlVXBsb2FkQ29uZmlnPj4ge1xyXG5cclxuICAgICAgICB0aGlzLmNvbmZpZ3MucHVzaChjb25maWcpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IERvYyhjb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHVwZGF0ZShjb25maWc6IEltYWdlVXBsb2FkQ29uZmlnKSB7XHJcblxyXG4gICAgICAgIGxldCBodHRwID0gdGhpcy5nZXRIdHRwKCk7XHJcblxyXG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGh0dHAuZmV0Y2goYCR7dGhpcy5yb3V0ZVByZWZpeH0vJHtjb25maWcuSWR9YCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwicHV0XCIsXHJcbiAgICAgICAgICAgIGJvZHk6IGpzb24oY29uZmlnKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBkZWxldGUoaWQ6IHN0cmluZykge1xyXG5cclxuICAgICAgICBsZXQgaHR0cCA9IHRoaXMuZ2V0SHR0cCgpO1xyXG5cclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBodHRwLmZldGNoKGAke3RoaXMucm91dGVQcmVmaXh9LyR7aWR9YCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiZGVsZXRlXCJcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
define('services/image-upload-config',["require", "exports", "aurelia-fetch-client", "./base"], function (require, exports, aurelia_fetch_client_1, base_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ImageUploadConfigService = (function (_super) {
        __extends(ImageUploadConfigService, _super);
        function ImageUploadConfigService() {
            var _this = _super.call(this, "image-upload-config") || this;
            _this.routePrefix = "image-upload-config";
            return _this;
        }
        ImageUploadConfigService.prototype.list = function () {
            return __awaiter(this, void 0, void 0, function () {
                var http, response, configs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            http = this.getHttp();
                            return [4, http.fetch(this.routePrefix)];
                        case 1:
                            response = _a.sent();
                            return [4, response.json()];
                        case 2:
                            configs = _a.sent();
                            return [2, configs];
                    }
                });
            });
        };
        ImageUploadConfigService.prototype.default = function () {
            return __awaiter(this, void 0, void 0, function () {
                var http, response, config;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            http = this.getHttp();
                            return [4, http.fetch(this.routePrefix + "/default")];
                        case 1:
                            response = _a.sent();
                            return [4, response.json()];
                        case 2:
                            config = _a.sent();
                            return [2, config];
                    }
                });
            });
        };
        ImageUploadConfigService.prototype.get = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var http, response, config;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            http = this.getHttp();
                            return [4, http.fetch(this.routePrefix + "/" + id)];
                        case 1:
                            response = _a.sent();
                            return [4, response.json()];
                        case 2:
                            config = _a.sent();
                            return [2, config];
                    }
                });
            });
        };
        ImageUploadConfigService.prototype.getByKey = function (key) {
            return __awaiter(this, void 0, void 0, function () {
                var http, response, config;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            http = this.getHttp();
                            return [4, http.fetch(this.routePrefix + "/key/" + key)];
                        case 1:
                            response = _a.sent();
                            return [4, response.json()];
                        case 2:
                            config = _a.sent();
                            if (response.ok) {
                                if (config)
                                    return [2, config.value];
                                else
                                    return [2, undefined];
                            }
                            else
                                throw response.statusText;
                            return [2];
                    }
                });
            });
        };
        ImageUploadConfigService.prototype.add = function (config) {
            return __awaiter(this, void 0, void 0, function () {
                var http, response;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            http = this.getHttp();
                            return [4, http.fetch(this.routePrefix, {
                                    method: "post",
                                    body: aurelia_fetch_client_1.json(config)
                                })];
                        case 1:
                            response = _a.sent();
                            return [4, response.json()];
                        case 2: return [2, _a.sent()];
                    }
                });
            });
        };
        ImageUploadConfigService.prototype.update = function (config) {
            return __awaiter(this, void 0, void 0, function () {
                var http, response;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            http = this.getHttp();
                            return [4, http.fetch(this.routePrefix + "/" + config.Id, {
                                    method: "put",
                                    body: aurelia_fetch_client_1.json(config)
                                })];
                        case 1:
                            response = _a.sent();
                            return [2];
                    }
                });
            });
        };
        ImageUploadConfigService.prototype.delete = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var http, response;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            http = this.getHttp();
                            return [4, http.fetch(this.routePrefix + "/" + id, {
                                    method: "delete"
                                })];
                        case 1:
                            response = _a.sent();
                            return [2];
                    }
                });
            });
        };
        return ImageUploadConfigService;
    }(base_1.BaseService));
    exports.ImageUploadConfigService = ImageUploadConfigService;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2ltYWdlLXVwbG9hZC1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSUE7UUFBOEMsNENBQVc7UUFJckQ7WUFBQSxZQUNJLGtCQUFNLHFCQUFxQixDQUFDLFNBRS9CO1lBREcsS0FBSSxDQUFDLFdBQVcsR0FBRyxxQkFBcUIsQ0FBQzs7UUFDN0MsQ0FBQztRQUVLLHVDQUFJLEdBQVY7O29CQUVRLElBQUk7Ozs7bUNBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRTs0QkFFVixXQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFBOzt1Q0FBbEMsU0FBa0M7NEJBQ25DLFdBQU0sUUFBUSxDQUFDLElBQUksRUFBRSxFQUFBOztzQ0FBckIsU0FBcUI7NEJBRW5DLFdBQU8sT0FBTyxFQUFDOzs7O1NBQ2xCO1FBRUssMENBQU8sR0FBYjs7b0JBRVEsSUFBSTs7OzttQ0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFOzRCQUVWLFdBQU0sSUFBSSxDQUFDLEtBQUssQ0FBSSxJQUFJLENBQUMsV0FBVyxhQUFVLENBQUMsRUFBQTs7dUNBQS9DLFNBQStDOzRCQUNqRCxXQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBQTs7cUNBQXJCLFNBQXFCOzRCQUVsQyxXQUFPLE1BQU0sRUFBQzs7OztTQUNqQjtRQUVLLHNDQUFHLEdBQVQsVUFBVSxFQUFVOztvQkFFWixJQUFJOzs7O21DQUFHLElBQUksQ0FBQyxPQUFPLEVBQUU7NEJBRVYsV0FBTSxJQUFJLENBQUMsS0FBSyxDQUFJLElBQUksQ0FBQyxXQUFXLFNBQUksRUFBSSxDQUFDLEVBQUE7O3VDQUE3QyxTQUE2Qzs0QkFDL0MsV0FBTSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUE7O3FDQUFyQixTQUFxQjs0QkFFbEMsV0FBTyxNQUFNLEVBQUM7Ozs7U0FFakI7UUFFSywyQ0FBUSxHQUFkLFVBQWUsR0FBVzs7b0JBRWxCLElBQUk7Ozs7bUNBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRTs0QkFFVixXQUFNLElBQUksQ0FBQyxLQUFLLENBQUksSUFBSSxDQUFDLFdBQVcsYUFBUSxHQUFLLENBQUMsRUFBQTs7dUNBQWxELFNBQWtEOzRCQUM1QixXQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBQTs7cUNBQXJCLFNBQXFCOzRCQUUxRCxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQ0FDZCxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUM7b0NBQ1AsTUFBTSxLQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUM7Z0NBQ3hCLElBQUk7b0NBQ0EsTUFBTSxLQUFDLFNBQVMsRUFBQzs0QkFDekIsQ0FBQzs0QkFFRCxJQUFJO2dDQUNBLE1BQU0sUUFBUSxDQUFDLFVBQVUsQ0FBQTs7Ozs7U0FDaEM7UUFFSyxzQ0FBRyxHQUFULFVBQVUsTUFBeUI7O29CQUUzQixJQUFJOzs7O21DQUFHLElBQUksQ0FBQyxPQUFPLEVBQUU7NEJBRVYsV0FBTSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7b0NBQzlDLE1BQU0sRUFBRSxNQUFNO29DQUNkLElBQUksRUFBRSwyQkFBSSxDQUFDLE1BQU0sQ0FBQztpQ0FDckIsQ0FBQyxFQUFBOzt1Q0FIYSxTQUdiOzRCQUVLLFdBQU0sUUFBUSxDQUFDLElBQUksRUFBRSxFQUFBO2dDQUE1QixXQUFPLFNBQXFCLEVBQUM7Ozs7U0FFaEM7UUFFSyx5Q0FBTSxHQUFaLFVBQWEsTUFBeUI7O29CQUU5QixJQUFJOzs7O21DQUFHLElBQUksQ0FBQyxPQUFPLEVBQUU7NEJBRVYsV0FBTSxJQUFJLENBQUMsS0FBSyxDQUFJLElBQUksQ0FBQyxXQUFXLFNBQUksTUFBTSxDQUFDLEVBQUksRUFBRTtvQ0FDaEUsTUFBTSxFQUFFLEtBQUs7b0NBQ2IsSUFBSSxFQUFFLDJCQUFJLENBQUMsTUFBTSxDQUFDO2lDQUNyQixDQUFDLEVBQUE7O3VDQUhhLFNBR2I7Ozs7O1NBRUw7UUFFSyx5Q0FBTSxHQUFaLFVBQWEsRUFBVTs7b0JBRWYsSUFBSTs7OzttQ0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFOzRCQUVWLFdBQU0sSUFBSSxDQUFDLEtBQUssQ0FBSSxJQUFJLENBQUMsV0FBVyxTQUFJLEVBQUksRUFBRTtvQ0FDekQsTUFBTSxFQUFFLFFBQVE7aUNBQ25CLENBQUMsRUFBQTs7dUNBRmEsU0FFYjs7Ozs7U0FFTDtRQUVMLCtCQUFDO0lBQUQsQ0E1RkEsQUE0RkMsQ0E1RjZDLGtCQUFXLEdBNEZ4RDtJQTVGWSw0REFBd0IiLCJmaWxlIjoic2VydmljZXMvaW1hZ2UtdXBsb2FkLWNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGpzb24gfSBmcm9tIFwiYXVyZWxpYS1mZXRjaC1jbGllbnRcIjtcclxuaW1wb3J0IHsgQmFzZVNlcnZpY2UgfSBmcm9tIFwiLi9iYXNlXCI7XHJcbmltcG9ydCB7IEltYWdlVXBsb2FkQ29uZmlnLCBEb2NzLCBEb2MgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSW1hZ2VVcGxvYWRDb25maWdTZXJ2aWNlIGV4dGVuZHMgQmFzZVNlcnZpY2Uge1xyXG5cclxuICAgIHJvdXRlUHJlZml4OiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoXCJpbWFnZS11cGxvYWQtY29uZmlnXCIpO1xyXG4gICAgICAgIHRoaXMucm91dGVQcmVmaXggPSBcImltYWdlLXVwbG9hZC1jb25maWdcIjtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBsaXN0KCk6IFByb21pc2U8RG9jczxJbWFnZVVwbG9hZENvbmZpZz4+IHtcclxuXHJcbiAgICAgICAgbGV0IGh0dHAgPSB0aGlzLmdldEh0dHAoKTtcclxuXHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgaHR0cC5mZXRjaCh0aGlzLnJvdXRlUHJlZml4KTtcclxuICAgICAgICBsZXQgY29uZmlncyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbmZpZ3M7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZGVmYXVsdCgpOiBQcm9taXNlPERvYzxJbWFnZVVwbG9hZENvbmZpZz4+IHtcclxuXHJcbiAgICAgICAgbGV0IGh0dHAgPSB0aGlzLmdldEh0dHAoKTtcclxuXHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgaHR0cC5mZXRjaChgJHt0aGlzLnJvdXRlUHJlZml4fS9kZWZhdWx0YCk7XHJcbiAgICAgICAgbGV0IGNvbmZpZyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbmZpZztcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBnZXQoaWQ6IHN0cmluZyk6IFByb21pc2U8RG9jPEltYWdlVXBsb2FkQ29uZmlnPj4ge1xyXG5cclxuICAgICAgICBsZXQgaHR0cCA9IHRoaXMuZ2V0SHR0cCgpO1xyXG5cclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBodHRwLmZldGNoKGAke3RoaXMucm91dGVQcmVmaXh9LyR7aWR9YCk7XHJcbiAgICAgICAgbGV0IGNvbmZpZyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbmZpZztcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZ2V0QnlLZXkoa2V5OiBzdHJpbmcpOiBQcm9taXNlPEltYWdlVXBsb2FkQ29uZmlnPiB7XHJcblxyXG4gICAgICAgIGxldCBodHRwID0gdGhpcy5nZXRIdHRwKCk7XHJcblxyXG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGh0dHAuZmV0Y2goYCR7dGhpcy5yb3V0ZVByZWZpeH0va2V5LyR7a2V5fWApO1xyXG4gICAgICAgIGxldCBjb25maWc6IERvYzxJbWFnZVVwbG9hZENvbmZpZz4gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICBpZiAoY29uZmlnKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbmZpZy52YWx1ZTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhyb3cgcmVzcG9uc2Uuc3RhdHVzVGV4dFxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGFkZChjb25maWc6IEltYWdlVXBsb2FkQ29uZmlnKTogUHJvbWlzZTxEb2M8SW1hZ2VVcGxvYWRDb25maWc+PiB7XHJcblxyXG4gICAgICAgIGxldCBodHRwID0gdGhpcy5nZXRIdHRwKCk7XHJcblxyXG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGh0dHAuZmV0Y2godGhpcy5yb3V0ZVByZWZpeCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICAgICAgICBib2R5OiBqc29uKGNvbmZpZylcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgdXBkYXRlKGNvbmZpZzogSW1hZ2VVcGxvYWRDb25maWcpIHtcclxuXHJcbiAgICAgICAgbGV0IGh0dHAgPSB0aGlzLmdldEh0dHAoKTtcclxuXHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgaHR0cC5mZXRjaChgJHt0aGlzLnJvdXRlUHJlZml4fS8ke2NvbmZpZy5JZH1gLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJwdXRcIixcclxuICAgICAgICAgICAgYm9keToganNvbihjb25maWcpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGRlbGV0ZShpZDogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgIGxldCBodHRwID0gdGhpcy5nZXRIdHRwKCk7XHJcblxyXG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGh0dHAuZmV0Y2goYCR7dGhpcy5yb3V0ZVByZWZpeH0vJHtpZH1gLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJkZWxldGVcIlxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
define('services/upload',["require", "exports", "aurelia-fetch-client", "./base"], function (require, exports, aurelia_fetch_client_1, base_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UploadService = (function (_super) {
        __extends(UploadService, _super);
        function UploadService() {
            return _super.call(this, "upload/") || this;
        }
        UploadService.prototype.uploadImage = function (container, key, imageUpload) {
            return __awaiter(this, void 0, void 0, function () {
                var http, response, blobs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            http = this.getHttp();
                            return [4, http.fetch(this.rootUrl + "image/" + container + "/" + key, {
                                    method: "post",
                                    body: aurelia_fetch_client_1.json(imageUpload)
                                })];
                        case 1:
                            response = _a.sent();
                            if (!response.ok) return [3, 3];
                            return [4, response.json()];
                        case 2:
                            blobs = _a.sent();
                            return [2, blobs];
                        case 3: throw response.statusText;
                    }
                });
            });
        };
        UploadService.prototype.removeBlobs = function (container, blobs) {
            return __awaiter(this, void 0, void 0, function () {
                var http, response;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            http = this.getHttp();
                            return [4, http.fetch("" + this.rootUrl + container, {
                                    method: "delete",
                                    body: aurelia_fetch_client_1.json(blobs)
                                })];
                        case 1:
                            response = _a.sent();
                            return [2];
                    }
                });
            });
        };
        return UploadService;
    }(base_1.BaseService));
    exports.UploadService = UploadService;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3VwbG9hZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJQTtRQUFtQyxpQ0FBVztRQUUxQzttQkFDSSxrQkFBTSxTQUFTLENBQUM7UUFDcEIsQ0FBQztRQUVLLG1DQUFXLEdBQWpCLFVBQWtCLFNBQWlCLEVBQUUsR0FBVyxFQUFFLFdBQXdCOztvQkFFbEUsSUFBSTs7OzttQ0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFOzRCQUVWLFdBQU0sSUFBSSxDQUFDLEtBQUssQ0FBSSxJQUFJLENBQUMsT0FBTyxjQUFTLFNBQVMsU0FBSSxHQUFLLEVBQ3RFO29DQUNJLE1BQU0sRUFBRSxNQUFNO29DQUNkLElBQUksRUFBRSwyQkFBSSxDQUFDLFdBQVcsQ0FBQztpQ0FDMUIsQ0FBQyxFQUFBOzt1Q0FKUyxTQUlUO2lDQUVGLFFBQVEsQ0FBQyxFQUFFLEVBQVgsY0FBVzs0QkFDQyxXQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBQTs7b0NBQXJCLFNBQXFCOzRCQUNqQyxXQUFPLEtBQUssRUFBQztnQ0FHakIsTUFBTSxRQUFRLENBQUMsVUFBVSxDQUFDOzs7O1NBQzdCO1FBRUssbUNBQVcsR0FBakIsVUFBa0IsU0FBaUIsRUFBRSxLQUFhOztvQkFFMUMsSUFBSTs7OzttQ0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFOzRCQUVWLFdBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBVyxFQUN6RDtvQ0FDSSxNQUFNLEVBQUUsUUFBUTtvQ0FDaEIsSUFBSSxFQUFFLDJCQUFJLENBQUMsS0FBSyxDQUFDO2lDQUNwQixDQUFDLEVBQUE7O3VDQUpTLFNBSVQ7Ozs7O1NBQ1Q7UUFDTCxvQkFBQztJQUFELENBbENBLEFBa0NDLENBbENrQyxrQkFBVyxHQWtDN0M7SUFsQ1ksc0NBQWEiLCJmaWxlIjoic2VydmljZXMvdXBsb2FkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsganNvbiB9IGZyb20gXCJhdXJlbGlhLWZldGNoLWNsaWVudFwiO1xyXG5pbXBvcnQgeyBCYXNlU2VydmljZSB9IGZyb20gXCIuL2Jhc2VcIjtcclxuaW1wb3J0IHsgSW1hZ2VVcGxvYWQsIEJsb2IgfSBmcm9tIFwiLi4vbW9kZWxzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVXBsb2FkU2VydmljZSBleHRlbmRzIEJhc2VTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihcInVwbG9hZC9cIik7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgdXBsb2FkSW1hZ2UoY29udGFpbmVyOiBzdHJpbmcsIGtleTogc3RyaW5nLCBpbWFnZVVwbG9hZDogSW1hZ2VVcGxvYWQpOiBQcm9taXNlPEJsb2JbXT4ge1xyXG5cclxuICAgICAgICBsZXQgaHR0cCA9IHRoaXMuZ2V0SHR0cCgpO1xyXG5cclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBodHRwLmZldGNoKGAke3RoaXMucm9vdFVybH1pbWFnZS8ke2NvbnRhaW5lcn0vJHtrZXl9YCxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgICAgICAgICAgIGJvZHk6IGpzb24oaW1hZ2VVcGxvYWQpXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgbGV0IGJsb2JzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICByZXR1cm4gYmxvYnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aHJvdyByZXNwb25zZS5zdGF0dXNUZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHJlbW92ZUJsb2JzKGNvbnRhaW5lcjogc3RyaW5nLCBibG9iczogQmxvYltdKSB7XHJcblxyXG4gICAgICAgIGxldCBodHRwID0gdGhpcy5nZXRIdHRwKCk7XHJcblxyXG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGh0dHAuZmV0Y2goYCR7dGhpcy5yb290VXJsfSR7Y29udGFpbmVyfWAsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJkZWxldGVcIixcclxuICAgICAgICAgICAgICAgIGJvZHk6IGpzb24oYmxvYnMpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('resources/index',["require", "exports", "./elements/semanticRenderer"], function (require, exports, semanticRenderer_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
        config.globalResources([
            "./elements/semanticRenderer",
            "./elements/image-uploader",
            "./elements/image-upload",
            "./value-converters/blob-url"
        ]);
        config.plugin('aurelia-dialog', function (config) {
            config
                .useRenderer(semanticRenderer_1.SemanticModalRenderer)
                .useStandardResources();
        });
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFJQSxtQkFBMEIsTUFBOEI7UUFDckQsTUFBTSxDQUFDLGVBQWUsQ0FBQztZQUN0Qiw2QkFBNkI7WUFDN0IsMkJBQTJCO1lBQzNCLHlCQUF5QjtZQUN6Qiw2QkFBNkI7U0FDOUIsQ0FBQyxDQUFDO1FBR0gsTUFBTSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxVQUFDLE1BQTJCO1lBQzFELE1BQU07aUJBQ0gsV0FBVyxDQUFDLHdDQUFxQixDQUFDO2lCQUNsQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQWRELDhCQWNDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHsgU2VtYW50aWNNb2RhbFJlbmRlcmVyIH0gZnJvbSAnLi9lbGVtZW50cy9zZW1hbnRpY1JlbmRlcmVyJztcbmltcG9ydCB7IERpYWxvZ0NvbmZpZ3VyYXRpb24gfSBmcm9tICdhdXJlbGlhLWRpYWxvZyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoY29uZmlnOiBGcmFtZXdvcmtDb25maWd1cmF0aW9uKSB7XG4gICBjb25maWcuZ2xvYmFsUmVzb3VyY2VzKFtcbiAgICBcIi4vZWxlbWVudHMvc2VtYW50aWNSZW5kZXJlclwiLFxuICAgIFwiLi9lbGVtZW50cy9pbWFnZS11cGxvYWRlclwiLFxuICAgIFwiLi9lbGVtZW50cy9pbWFnZS11cGxvYWRcIixcbiAgICBcIi4vdmFsdWUtY29udmVydGVycy9ibG9iLXVybFwiXG4gIF0pO1xuXG4gIC8vRGlhbG9nc1xuICBjb25maWcucGx1Z2luKCdhdXJlbGlhLWRpYWxvZycsIChjb25maWc6IERpYWxvZ0NvbmZpZ3VyYXRpb24pID0+IHtcbiAgICBjb25maWdcbiAgICAgIC51c2VSZW5kZXJlcihTZW1hbnRpY01vZGFsUmVuZGVyZXIpXG4gICAgICAudXNlU3RhbmRhcmRSZXNvdXJjZXMoKTtcbiAgfSk7XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/elements/image-upload-dialog',["require", "exports", "aurelia-framework", "aurelia-dialog"], function (require, exports, aurelia_framework_1, aurelia_dialog_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ImageUploadDialogViewModel = (function () {
        function ImageUploadDialogViewModel(controller) {
            this.controller = controller;
        }
        ImageUploadDialogViewModel.prototype.attached = function () {
        };
        ImageUploadDialogViewModel.prototype.activate = function (config) {
            this.config = config;
        };
        ImageUploadDialogViewModel.prototype.cropperCreated = function (cropper) {
            this.cropper = cropper;
        };
        ImageUploadDialogViewModel.prototype.ok = function () {
            var croppedCanvas = undefined;
            if (this.cropper)
                croppedCanvas = this.cropper.getCroppedCanvas().toDataURL();
            this.controller.ok(croppedCanvas);
        };
        ImageUploadDialogViewModel.prototype.cancel = function () {
            this.controller.cancel();
        };
        return ImageUploadDialogViewModel;
    }());
    ImageUploadDialogViewModel = __decorate([
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [aurelia_dialog_1.DialogController])
    ], ImageUploadDialogViewModel);
    exports.ImageUploadDialogViewModel = ImageUploadDialogViewModel;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9lbGVtZW50cy9pbWFnZS11cGxvYWQtZGlhbG9nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUtBLElBQWEsMEJBQTBCO1FBUW5DLG9DQUFZLFVBQTRCO1lBQ3BDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQ2pDLENBQUM7UUFFRCw2Q0FBUSxHQUFSO1FBQ0EsQ0FBQztRQUVELDZDQUFRLEdBQVIsVUFBUyxNQUF5QjtZQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN6QixDQUFDO1FBRUQsbURBQWMsR0FBZCxVQUFlLE9BQU87WUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDM0IsQ0FBQztRQUVELHVDQUFFLEdBQUY7WUFFSSxJQUFJLGFBQWEsR0FBRyxTQUFTLENBQUM7WUFDOUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDYixhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBRWhFLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7UUFFRCwyQ0FBTSxHQUFOO1lBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUM3QixDQUFDO1FBQ0wsaUNBQUM7SUFBRCxDQW5DQSxBQW1DQyxJQUFBO0lBbkNZLDBCQUEwQjtRQUR0Qyw4QkFBVTt5Q0FTaUIsaUNBQWdCO09BUi9CLDBCQUEwQixDQW1DdEM7SUFuQ1ksZ0VBQTBCIiwiZmlsZSI6InJlc291cmNlcy9lbGVtZW50cy9pbWFnZS11cGxvYWQtZGlhbG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0b2luamVjdCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHsgRGlhbG9nQ29udHJvbGxlciB9IGZyb20gJ2F1cmVsaWEtZGlhbG9nJztcclxuaW1wb3J0IHsgSW1hZ2VVcGxvYWRDb25maWcgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcblxyXG5AYXV0b2luamVjdFxyXG5leHBvcnQgY2xhc3MgSW1hZ2VVcGxvYWREaWFsb2dWaWV3TW9kZWwge1xyXG5cclxuICAgIGNvbnRyb2xsZXI6IERpYWxvZ0NvbnRyb2xsZXI7XHJcblxyXG4gICAgY3JvcHBlcjogYW55O1xyXG5cclxuICAgIGNvbmZpZzogSW1hZ2VVcGxvYWRDb25maWc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29udHJvbGxlcjogRGlhbG9nQ29udHJvbGxlcikge1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XHJcbiAgICB9XHJcblxyXG4gICAgYXR0YWNoZWQoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgYWN0aXZhdGUoY29uZmlnOiBJbWFnZVVwbG9hZENvbmZpZykge1xyXG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xyXG4gICAgfVxyXG5cclxuICAgIGNyb3BwZXJDcmVhdGVkKGNyb3BwZXIpIHtcclxuICAgICAgICB0aGlzLmNyb3BwZXIgPSBjcm9wcGVyO1xyXG4gICAgfVxyXG5cclxuICAgIG9rKCkge1xyXG5cclxuICAgICAgICBsZXQgY3JvcHBlZENhbnZhcyA9IHVuZGVmaW5lZDtcclxuICAgICAgICBpZiAodGhpcy5jcm9wcGVyKVxyXG4gICAgICAgICAgICBjcm9wcGVkQ2FudmFzID0gdGhpcy5jcm9wcGVyLmdldENyb3BwZWRDYW52YXMoKS50b0RhdGFVUkwoKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyLm9rKGNyb3BwZWRDYW52YXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbmNlbCgpIHtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIuY2FuY2VsKCk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
define('resources/elements/image-upload',["require", "exports", "aurelia-framework", "aurelia-dialog", "../../models"], function (require, exports, aurelia_framework_1, aurelia_dialog_1, models_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ImageUploadComponent = (function () {
        function ImageUploadComponent(dialog) {
            this.noSrc = "content/images/image-place-holder.png";
            this.dialog = dialog;
        }
        ImageUploadComponent.prototype.attached = function () {
            if (!this.src)
                this.src = this.noSrc;
        };
        ImageUploadComponent.prototype.uploadImage = function () {
            return __awaiter(this, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4, this.dialog.open({
                                viewModel: "resources/elements/image-upload-dialog", model: this.config
                            })];
                        case 1:
                            result = _a.sent();
                            if (!result.wasCancelled && result.output) {
                                this.src = result.output;
                                this.uploadSrc = result.output;
                            }
                            return [2];
                    }
                });
            });
        };
        return ImageUploadComponent;
    }());
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], ImageUploadComponent.prototype, "src", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
        __metadata("design:type", String)
    ], ImageUploadComponent.prototype, "uploadSrc", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], ImageUploadComponent.prototype, "size", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", models_1.ImageUploadConfig)
    ], ImageUploadComponent.prototype, "config", void 0);
    ImageUploadComponent = __decorate([
        aurelia_framework_1.autoinject,
        aurelia_framework_1.customElement("image-upload"),
        __metadata("design:paramtypes", [aurelia_dialog_1.DialogService])
    ], ImageUploadComponent);
    exports.ImageUploadComponent = ImageUploadComponent;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9lbGVtZW50cy9pbWFnZS11cGxvYWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFRQSxJQUFhLG9CQUFvQjtRQVc3Qiw4QkFBWSxNQUFxQjtZQUZqQyxVQUFLLEdBQVcsdUNBQXVDLENBQUM7WUFHcEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDekIsQ0FBQztRQUVELHVDQUFRLEdBQVI7WUFFSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQ1YsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzlCLENBQUM7UUFFSywwQ0FBVyxHQUFqQjs7Ozs7Z0NBQ2lCLFdBQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0NBQ2hDLFNBQVMsRUFBRSx3Q0FBd0MsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU07NkJBQzFFLENBQUMsRUFBQTs7cUNBRlcsU0FFWDs0QkFDRixFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0NBQ3hDLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztnQ0FDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDOzRCQUNuQyxDQUFDOzs7OztTQUNKO1FBQ0wsMkJBQUM7SUFBRCxDQTlCQSxBQThCQyxJQUFBO0lBNUJhO1FBQVQsNEJBQVE7O3FEQUFhO0lBQ2dDO1FBQXJELDRCQUFRLENBQUMsRUFBRSxrQkFBa0IsRUFBRSwrQkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDOzsyREFBbUI7SUFDOUQ7UUFBVCw0QkFBUTs7c0RBQWM7SUFDYjtRQUFULDRCQUFRO2tDQUFTLDBCQUFpQjt3REFBQztJQUwzQixvQkFBb0I7UUFGaEMsOEJBQVU7UUFDVixpQ0FBYSxDQUFDLGNBQWMsQ0FBQzt5Q0FZTiw4QkFBYTtPQVh4QixvQkFBb0IsQ0E4QmhDO0lBOUJZLG9EQUFvQiIsImZpbGUiOiJyZXNvdXJjZXMvZWxlbWVudHMvaW1hZ2UtdXBsb2FkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgYXV0b2luamVjdCwgYmluZGFibGUsIGJpbmRpbmdNb2RlIH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gXCJhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3JcIjtcclxuaW1wb3J0IHsgRXZlbnRzLCBHbG9iYWxzIH0gZnJvbSBcIi4uLy4uL2dsb2JhbHNcIjtcclxuaW1wb3J0IHsgRGlhbG9nU2VydmljZSwgRGlhbG9nUmVzdWx0IH0gZnJvbSAnYXVyZWxpYS1kaWFsb2cnO1xyXG5pbXBvcnQgeyBJbWFnZVVwbG9hZENvbmZpZyB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuXHJcbkBhdXRvaW5qZWN0XHJcbkBjdXN0b21FbGVtZW50KFwiaW1hZ2UtdXBsb2FkXCIpXHJcbmV4cG9ydCBjbGFzcyBJbWFnZVVwbG9hZENvbXBvbmVudCB7XHJcblxyXG4gICAgQGJpbmRhYmxlIHNyYzogc3RyaW5nO1xyXG4gICAgQGJpbmRhYmxlKHsgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXkgfSkgdXBsb2FkU3JjOiBzdHJpbmc7XHJcbiAgICBAYmluZGFibGUgc2l6ZTogc3RyaW5nO1xyXG4gICAgQGJpbmRhYmxlIGNvbmZpZzogSW1hZ2VVcGxvYWRDb25maWc7XHJcblxyXG4gICAgZGlhbG9nOiBEaWFsb2dTZXJ2aWNlO1xyXG5cclxuICAgIG5vU3JjOiBzdHJpbmcgPSBcImNvbnRlbnQvaW1hZ2VzL2ltYWdlLXBsYWNlLWhvbGRlci5wbmdcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihkaWFsb2c6IERpYWxvZ1NlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmRpYWxvZyA9IGRpYWxvZztcclxuICAgIH1cclxuXHJcbiAgICBhdHRhY2hlZCgpIHtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnNyYylcclxuICAgICAgICAgICAgdGhpcy5zcmMgPSB0aGlzLm5vU3JjO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHVwbG9hZEltYWdlKCkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCB0aGlzLmRpYWxvZy5vcGVuKHtcclxuICAgICAgICAgICAgdmlld01vZGVsOiBgcmVzb3VyY2VzL2VsZW1lbnRzL2ltYWdlLXVwbG9hZC1kaWFsb2dgLCBtb2RlbDogdGhpcy5jb25maWdcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoIXJlc3VsdC53YXNDYW5jZWxsZWQgJiYgcmVzdWx0Lm91dHB1dCkge1xyXG4gICAgICAgICAgICB0aGlzLnNyYyA9IHJlc3VsdC5vdXRwdXQ7XHJcbiAgICAgICAgICAgIHRoaXMudXBsb2FkU3JjID0gcmVzdWx0Lm91dHB1dDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/elements/image-uploader',["require", "exports", "aurelia-framework", "../../models", "cropperjs"], function (require, exports, aurelia_framework_1, models_1, Cropper) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ImageUploaderCustomElement = (function () {
        function ImageUploaderCustomElement() {
            this.dragMode = "crop";
            this.scaleX = -1;
            this.scaleY = 1;
            this.boundDragOver = this.dragOver.bind(this);
            this.boundDragLeave = this.dragLeave.bind(this);
            this.boundDrop = this.drop.bind(this);
            this.boundFileSelected = this.fileSelected.bind(this);
            this.refresh();
        }
        ImageUploaderCustomElement.prototype.attached = function () {
            this.dropZone.addEventListener("dragover", this.boundDragOver, false);
            this.dropZone.addEventListener("dragleave", this.boundDragLeave, false);
            this.dropZone.addEventListener("drop", this.boundDrop, false);
            this.fileInput.onchange = this.boundFileSelected;
        };
        ImageUploaderCustomElement.prototype.refresh = function () {
            this.refreshStyle();
        };
        ImageUploaderCustomElement.prototype.refreshStyle = function () {
            this.style = {
                height: '300px'
            };
        };
        ImageUploaderCustomElement.prototype.dragOver = function (e) {
            e.stopPropagation();
            e.preventDefault();
            if (this.hasImageFile(e.dataTransfer.items))
                this.isDragOver = true;
            else
                this.isUnsupported = true;
        };
        ImageUploaderCustomElement.prototype.dragLeave = function (e) {
            e.stopPropagation();
            e.preventDefault();
            this.isDragOver = false;
            this.isUnsupported = false;
        };
        ImageUploaderCustomElement.prototype.drop = function (e) {
            e.stopPropagation();
            e.preventDefault();
            this.isDragOver = false;
            this.cropFiles(e.dataTransfer.files);
        };
        ImageUploaderCustomElement.prototype.hasImageFile = function (files) {
            if (files && files.length > 0) {
                for (var i = 0; i < files.length; i++) {
                    if (files[i].type.indexOf("image") == 0)
                        return true;
                }
            }
            return false;
        };
        ImageUploaderCustomElement.prototype.cropFiles = function (files) {
            if (this.hasImageFile(files)) {
                this.isLoading = true;
                this.isDrop = true;
                if (this.cropper)
                    this.cropper.destroy();
                var file = files[0];
                var reader = new FileReader();
                this.hasImage = true;
                var self_1 = this;
                reader.onload = function (re) {
                    self_1.image.src = re.target.result;
                    self_1.isLoading = false;
                    self_1.cropper = new Cropper(self_1.image, {
                        aspectRatio: self_1.getAspectRatio(self_1.config.AspectRatio),
                        viewMode: self_1.config.ViewMode,
                        guides: self_1.config.CropOptions.Guides,
                        center: self_1.config.CropOptions.Center
                    });
                    self_1.cropperCreated({ cropper: self_1.cropper });
                };
                reader.readAsDataURL(file);
            }
        };
        ImageUploaderCustomElement.prototype.getAspectRatio = function (aspectRatio) {
            if (aspectRatio == models_1.AspectRatio.Four_to_Three)
                return 4 / 3;
            else if (aspectRatio == models_1.AspectRatio.One_to_One)
                return 1;
            else if (aspectRatio == models_1.AspectRatio.Sixteen_to_Nine)
                return 16 / 9;
            else if (aspectRatio == models_1.AspectRatio.Two_to_Three)
                return 2 / 3;
            else
                return NaN;
        };
        ImageUploaderCustomElement.prototype.browse = function () {
            $(this.fileInput).trigger('click');
        };
        ImageUploaderCustomElement.prototype.fileSelected = function () {
            this.cropFiles(this.fileInput.files);
        };
        ImageUploaderCustomElement.prototype.rotateCounterClockwise = function () {
            this.cropper.rotate(-90);
        };
        ImageUploaderCustomElement.prototype.rotateClockwise = function () {
            this.cropper.rotate(90);
        };
        ImageUploaderCustomElement.prototype.flipHorizontal = function () {
            this.cropper.scaleX(this.scaleX);
            this.scaleX *= -1;
        };
        ImageUploaderCustomElement.prototype.flipVertical = function () {
            this.cropper.scaleY(this.scaleY);
            this.scaleY *= -1;
        };
        ImageUploaderCustomElement.prototype.toggleDragMode = function () {
            if (this.dragMode == "crop")
                this.dragMode = "move";
            else if (this.dragMode == "move")
                this.dragMode = "crop";
            this.cropper.setDragMode(this.dragMode);
        };
        return ImageUploaderCustomElement;
    }());
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Function)
    ], ImageUploaderCustomElement.prototype, "cropperCreated", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", models_1.ImageUploadConfig)
    ], ImageUploaderCustomElement.prototype, "config", void 0);
    ImageUploaderCustomElement = __decorate([
        aurelia_framework_1.customElement("image-uploader"),
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [])
    ], ImageUploaderCustomElement);
    exports.ImageUploaderCustomElement = ImageUploaderCustomElement;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9lbGVtZW50cy9pbWFnZS11cGxvYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFRQSxJQUFhLDBCQUEwQjtRQTRCbkM7WUFKQSxhQUFRLEdBQVcsTUFBTSxDQUFDO1lBQzFCLFdBQU0sR0FBVyxDQUFDLENBQUMsQ0FBQztZQUNwQixXQUFNLEdBQVcsQ0FBQyxDQUFDO1lBR2YsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRXRELElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNuQixDQUFDO1FBRUQsNkNBQVEsR0FBUjtZQUVJLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDdEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN4RSxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBRTlELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUNyRCxDQUFDO1FBRUQsNENBQU8sR0FBUDtZQUNJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4QixDQUFDO1FBRUQsaURBQVksR0FBWjtZQUNJLElBQUksQ0FBQyxLQUFLLEdBQUc7Z0JBQ1QsTUFBTSxFQUFFLE9BQU87YUFDbEIsQ0FBQTtRQUNMLENBQUM7UUFFRCw2Q0FBUSxHQUFSLFVBQVMsQ0FBQztZQUVOLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUNwQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7WUFFbkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN4QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUMzQixJQUFJO2dCQUNBLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLENBQUM7UUFFRCw4Q0FBUyxHQUFULFVBQVUsQ0FBQztZQUVQLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUNwQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7WUFFbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDL0IsQ0FBQztRQUVELHlDQUFJLEdBQUosVUFBSyxDQUFDO1lBQ0YsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3BCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUVuQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUV4QixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFekMsQ0FBQztRQUVELGlEQUFZLEdBQVosVUFBYSxLQUFZO1lBRXJCLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO29CQUNwQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ3BDLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ3BCLENBQUM7WUFDTCxDQUFDO1lBRUQsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDO1FBRUQsOENBQVMsR0FBVCxVQUFVLEtBQUs7WUFDWCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUVuQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO29CQUNiLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBRTNCLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFcEIsSUFBSSxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztnQkFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ3JCLElBQUksTUFBSSxHQUFHLElBQUksQ0FBQztnQkFDaEIsTUFBTSxDQUFDLE1BQU0sR0FBRyxVQUFVLEVBQUU7b0JBQ3hCLE1BQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFTLEVBQUUsQ0FBQyxNQUFPLENBQUMsTUFBTSxDQUFDO29CQUN6QyxNQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztvQkFDdkIsTUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxNQUFJLENBQUMsS0FBSyxFQUFFO3dCQUNuQyxXQUFXLEVBQUUsTUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQzt3QkFDekQsUUFBUSxFQUFFLE1BQUksQ0FBQyxNQUFNLENBQUMsUUFBUTt3QkFDOUIsTUFBTSxFQUFFLE1BQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU07d0JBQ3RDLE1BQU0sRUFBRSxNQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNO3FCQUN6QyxDQUFDLENBQUM7b0JBRUgsTUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztnQkFDbkQsQ0FBQyxDQUFBO2dCQUNELE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0IsQ0FBQztRQUNMLENBQUM7UUFFRCxtREFBYyxHQUFkLFVBQWUsV0FBd0I7WUFFbkMsRUFBRSxDQUFDLENBQUMsV0FBVyxJQUFJLG9CQUFXLENBQUMsYUFBYSxDQUFDO2dCQUN6QyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQixJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxJQUFJLG9CQUFXLENBQUMsVUFBVSxDQUFDO2dCQUMzQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsSUFBSSxvQkFBVyxDQUFDLGVBQWUsQ0FBQztnQkFDaEQsTUFBTSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsSUFBSSxvQkFBVyxDQUFDLFlBQVksQ0FBQztnQkFDN0MsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakIsSUFBSTtnQkFDQSxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ25CLENBQUM7UUFFRCwyQ0FBTSxHQUFOO1lBRUksQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFdkMsQ0FBQztRQUVELGlEQUFZLEdBQVo7WUFFSSxJQUFJLENBQUMsU0FBUyxDQUFPLElBQUksQ0FBQyxTQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEQsQ0FBQztRQUVELDJEQUFzQixHQUF0QjtZQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDN0IsQ0FBQztRQUVELG9EQUFlLEdBQWY7WUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM1QixDQUFDO1FBRUQsbURBQWMsR0FBZDtZQUVJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUVqQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLENBQUM7UUFFRCxpREFBWSxHQUFaO1lBRUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRWpDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDdEIsQ0FBQztRQUVELG1EQUFjLEdBQWQ7WUFFSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLE1BQU0sQ0FBQztnQkFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7WUFDM0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksTUFBTSxDQUFDO2dCQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztZQUUzQixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUMsQ0FBQztRQUVMLGlDQUFDO0lBQUQsQ0F4TEEsQUF3TEMsSUFBQTtJQXBLYTtRQUFULDRCQUFROztzRUFBaUM7SUFDaEM7UUFBVCw0QkFBUTtrQ0FBUywwQkFBaUI7OERBQUM7SUFyQjNCLDBCQUEwQjtRQUZ0QyxpQ0FBYSxDQUFDLGdCQUFnQixDQUFDO1FBQy9CLDhCQUFVOztPQUNFLDBCQUEwQixDQXdMdEM7SUF4TFksZ0VBQTBCIiwiZmlsZSI6InJlc291cmNlcy9lbGVtZW50cy9pbWFnZS11cGxvYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIGF1dG9pbmplY3QsIGJpbmRhYmxlLCBiaW5kaW5nTW9kZSB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tIFwiYXVyZWxpYS1ldmVudC1hZ2dyZWdhdG9yXCI7XHJcbmltcG9ydCB7IEV2ZW50cywgR2xvYmFscyB9IGZyb20gXCIuLi8uLi9nbG9iYWxzXCI7XHJcbmltcG9ydCB7IEltYWdlVXBsb2FkQ29uZmlnLCBBc3BlY3RSYXRpbyB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0ICogYXMgQ3JvcHBlciBmcm9tICdjcm9wcGVyanMnXHJcblxyXG5AY3VzdG9tRWxlbWVudChcImltYWdlLXVwbG9hZGVyXCIpXHJcbkBhdXRvaW5qZWN0XHJcbmV4cG9ydCBjbGFzcyBJbWFnZVVwbG9hZGVyQ3VzdG9tRWxlbWVudCB7XHJcblxyXG4gICAgZHJvcFpvbmU6IEhUTUxFbGVtZW50O1xyXG4gICAgZmlsZUlucHV0OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBib3VuZERyYWdPdmVyOiBhbnk7XHJcbiAgICBib3VuZERyYWdMZWF2ZTogYW55O1xyXG4gICAgYm91bmREcm9wOiBhbnk7XHJcbiAgICBib3VuZEZpbGVTZWxlY3RlZDogYW55O1xyXG5cclxuICAgIGlzRHJhZ092ZXI6IGJvb2xlYW47XHJcbiAgICBpc1Vuc3VwcG9ydGVkOiBib29sZWFuXHJcbiAgICBpc0Ryb3A6IGJvb2xlYW47XHJcbiAgICBpc0xvYWRpbmc6IGJvb2xlYW47XHJcblxyXG4gICAgc3R5bGU6IGFueTtcclxuXHJcbiAgICBoYXNJbWFnZTogYm9vbGVhbjtcclxuICAgIGltYWdlOiBhbnk7XHJcblxyXG4gICAgQGJpbmRhYmxlIGNyb3BwZXJDcmVhdGVkOiAoY3JvcHBlcikgPT4ge307XHJcbiAgICBAYmluZGFibGUgY29uZmlnOiBJbWFnZVVwbG9hZENvbmZpZztcclxuICAgIGNyb3BwZXI6IENyb3BwZXI7XHJcblxyXG4gICAgZHJhZ01vZGU6IHN0cmluZyA9IFwiY3JvcFwiO1xyXG4gICAgc2NhbGVYOiBudW1iZXIgPSAtMTtcclxuICAgIHNjYWxlWTogbnVtYmVyID0gMTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmJvdW5kRHJhZ092ZXIgPSB0aGlzLmRyYWdPdmVyLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5ib3VuZERyYWdMZWF2ZSA9IHRoaXMuZHJhZ0xlYXZlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5ib3VuZERyb3AgPSB0aGlzLmRyb3AuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmJvdW5kRmlsZVNlbGVjdGVkID0gdGhpcy5maWxlU2VsZWN0ZWQuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXR0YWNoZWQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuZHJvcFpvbmUuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIHRoaXMuYm91bmREcmFnT3ZlciwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuZHJvcFpvbmUuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdsZWF2ZVwiLCB0aGlzLmJvdW5kRHJhZ0xlYXZlLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5kcm9wWm9uZS5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCB0aGlzLmJvdW5kRHJvcCwgZmFsc2UpO1xyXG5cclxuICAgICAgICB0aGlzLmZpbGVJbnB1dC5vbmNoYW5nZSA9IHRoaXMuYm91bmRGaWxlU2VsZWN0ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaCgpIHtcclxuICAgICAgICB0aGlzLnJlZnJlc2hTdHlsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2hTdHlsZSgpIHtcclxuICAgICAgICB0aGlzLnN0eWxlID0ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6ICczMDBweCdcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZHJhZ092ZXIoZSkge1xyXG5cclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaGFzSW1hZ2VGaWxlKGUuZGF0YVRyYW5zZmVyLml0ZW1zKSlcclxuICAgICAgICAgICAgdGhpcy5pc0RyYWdPdmVyID0gdHJ1ZTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuaXNVbnN1cHBvcnRlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhZ0xlYXZlKGUpIHtcclxuXHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHRoaXMuaXNEcmFnT3ZlciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNVbnN1cHBvcnRlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGRyb3AoZSkge1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICB0aGlzLmlzRHJhZ092ZXIgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5jcm9wRmlsZXMoZS5kYXRhVHJhbnNmZXIuZmlsZXMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBoYXNJbWFnZUZpbGUoZmlsZXM6IGFueVtdKTogYm9vbGVhbiB7XHJcblxyXG4gICAgICAgIGlmIChmaWxlcyAmJiBmaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChmaWxlc1tpXS50eXBlLmluZGV4T2YoXCJpbWFnZVwiKSA9PSAwKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY3JvcEZpbGVzKGZpbGVzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFzSW1hZ2VGaWxlKGZpbGVzKSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuaXNEcm9wID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNyb3BwZXIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyb3BwZXIuZGVzdHJveSgpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGZpbGUgPSBmaWxlc1swXTtcclxuXHJcbiAgICAgICAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICB0aGlzLmhhc0ltYWdlID0gdHJ1ZTtcclxuICAgICAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKHJlKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmltYWdlLnNyYyA9ICg8YW55PnJlLnRhcmdldCkucmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgc2VsZi5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHNlbGYuY3JvcHBlciA9IG5ldyBDcm9wcGVyKHNlbGYuaW1hZ2UsIHtcclxuICAgICAgICAgICAgICAgICAgICBhc3BlY3RSYXRpbzogc2VsZi5nZXRBc3BlY3RSYXRpbyhzZWxmLmNvbmZpZy5Bc3BlY3RSYXRpbyksXHJcbiAgICAgICAgICAgICAgICAgICAgdmlld01vZGU6IHNlbGYuY29uZmlnLlZpZXdNb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgIGd1aWRlczogc2VsZi5jb25maWcuQ3JvcE9wdGlvbnMuR3VpZGVzLFxyXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlcjogc2VsZi5jb25maWcuQ3JvcE9wdGlvbnMuQ2VudGVyXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBzZWxmLmNyb3BwZXJDcmVhdGVkKHsgY3JvcHBlcjogc2VsZi5jcm9wcGVyIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRBc3BlY3RSYXRpbyhhc3BlY3RSYXRpbzogQXNwZWN0UmF0aW8pOiBudW1iZXIge1xyXG5cclxuICAgICAgICBpZiAoYXNwZWN0UmF0aW8gPT0gQXNwZWN0UmF0aW8uRm91cl90b19UaHJlZSlcclxuICAgICAgICAgICAgcmV0dXJuIDQgLyAzO1xyXG4gICAgICAgIGVsc2UgaWYgKGFzcGVjdFJhdGlvID09IEFzcGVjdFJhdGlvLk9uZV90b19PbmUpXHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIGVsc2UgaWYgKGFzcGVjdFJhdGlvID09IEFzcGVjdFJhdGlvLlNpeHRlZW5fdG9fTmluZSlcclxuICAgICAgICAgICAgcmV0dXJuIDE2IC8gOTtcclxuICAgICAgICBlbHNlIGlmIChhc3BlY3RSYXRpbyA9PSBBc3BlY3RSYXRpby5Ud29fdG9fVGhyZWUpXHJcbiAgICAgICAgICAgIHJldHVybiAyIC8gMztcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBOYU47XHJcbiAgICB9XHJcblxyXG4gICAgYnJvd3NlKCkge1xyXG5cclxuICAgICAgICAkKHRoaXMuZmlsZUlucHV0KS50cmlnZ2VyKCdjbGljaycpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmaWxlU2VsZWN0ZWQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuY3JvcEZpbGVzKCg8YW55PnRoaXMuZmlsZUlucHV0KS5maWxlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcm90YXRlQ291bnRlckNsb2Nrd2lzZSgpIHtcclxuICAgICAgICB0aGlzLmNyb3BwZXIucm90YXRlKC05MCk7XHJcbiAgICB9XHJcblxyXG4gICAgcm90YXRlQ2xvY2t3aXNlKCkge1xyXG4gICAgICAgIHRoaXMuY3JvcHBlci5yb3RhdGUoOTApO1xyXG4gICAgfVxyXG5cclxuICAgIGZsaXBIb3Jpem9udGFsKCkge1xyXG5cclxuICAgICAgICB0aGlzLmNyb3BwZXIuc2NhbGVYKHRoaXMuc2NhbGVYKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2FsZVggKj0gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgZmxpcFZlcnRpY2FsKCkge1xyXG5cclxuICAgICAgICB0aGlzLmNyb3BwZXIuc2NhbGVZKHRoaXMuc2NhbGVZKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2FsZVkgKj0gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlRHJhZ01vZGUoKSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRyYWdNb2RlID09IFwiY3JvcFwiKVxyXG4gICAgICAgICAgICB0aGlzLmRyYWdNb2RlID0gXCJtb3ZlXCI7XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5kcmFnTW9kZSA9PSBcIm1vdmVcIilcclxuICAgICAgICAgICAgdGhpcy5kcmFnTW9kZSA9IFwiY3JvcFwiO1xyXG5cclxuICAgICAgICB0aGlzLmNyb3BwZXIuc2V0RHJhZ01vZGUodGhpcy5kcmFnTW9kZSk7XHJcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('resources/elements/semanticRenderer',["require", "exports", "aurelia-framework", "semantic-ui"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var modals = [];
    var SemanticModalRenderer = (function () {
        function SemanticModalRenderer() {
        }
        SemanticModalRenderer.prototype.getDialogContainer = function () {
            return $('<div></div>')[0];
        };
        SemanticModalRenderer.prototype.showDialog = function (dialogController) {
            dialogController.controller.attached();
            return this.renderDialog(dialogController);
        };
        SemanticModalRenderer.prototype.renderDialog = function (dialogController) {
            var _this = this;
            return new Promise(function (resolve) {
                var element = dialogController.slot.anchor.lastElementChild;
                modals.push(element);
                _this.showSemanticModal(element, resolve);
            });
        };
        SemanticModalRenderer.prototype.showSemanticModal = function (element, resolve) {
            $(element).modal()
                .modal({
                closable: false,
                allowMultiple: false,
                onHidden: function () {
                    $(element).remove();
                },
                onVisible: function () {
                    $(element).modal("refresh");
                    resolve();
                }
            })
                .modal('observeChanges', true)
                .modal('show');
        };
        SemanticModalRenderer.prototype.hideDialog = function (dialogController) {
            var _this = this;
            return new Promise(function (resolve) {
                var element = modals.pop();
                $(element).modal({ onHide: resolve });
                $(element).modal('hide');
                dialogController.slot.detached();
                $(element).remove();
                if (modals.length > 0)
                    _this.showSemanticModal(modals[modals.length - 1], resolve);
            });
        };
        return SemanticModalRenderer;
    }());
    SemanticModalRenderer = __decorate([
        aurelia_framework_1.noView
    ], SemanticModalRenderer);
    exports.SemanticModalRenderer = SemanticModalRenderer;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9lbGVtZW50cy9zZW1hbnRpY1JlbmRlcmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztJQUlBLElBQUksTUFBTSxHQUFhLEVBQUUsQ0FBQztJQUcxQixJQUFhLHFCQUFxQjtRQUFsQztRQTZEQSxDQUFDO1FBekRHLGtEQUFrQixHQUFsQjtZQUVJLE1BQU0sQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0IsQ0FBQztRQUVELDBDQUFVLEdBQVYsVUFBVyxnQkFBa0M7WUFFbkMsZ0JBQWlCLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBRTlDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDL0MsQ0FBQztRQUVELDRDQUFZLEdBQVosVUFBYSxnQkFBa0M7WUFBL0MsaUJBUUM7WUFQRyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQU8sVUFBQyxPQUFtQjtnQkFFekMsSUFBSSxPQUFPLEdBQVMsZ0JBQWlCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDbkUsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFFckIsS0FBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztZQUM3QyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFFRCxpREFBaUIsR0FBakIsVUFBa0IsT0FBTyxFQUFFLE9BQU87WUFDOUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRTtpQkFDYixLQUFLLENBQU07Z0JBQ1IsUUFBUSxFQUFFLEtBQUs7Z0JBQ2YsYUFBYSxFQUFFLEtBQUs7Z0JBQ3BCLFFBQVEsRUFBRTtvQkFDTixDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ3hCLENBQUM7Z0JBQ0QsU0FBUyxFQUFFO29CQUNQLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQzVCLE9BQU8sRUFBRSxDQUFDO2dCQUNkLENBQUM7YUFDSixDQUFDO2lCQUNELEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUM7aUJBQzdCLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2QixDQUFDO1FBRUQsMENBQVUsR0FBVixVQUFXLGdCQUFrQztZQUE3QyxpQkFnQkM7WUFkRyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQU8sVUFBQyxPQUFtQjtnQkFFekMsSUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUUzQixDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7Z0JBQzNDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBRW5CLGdCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFFeEMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUVwQixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztvQkFDbEIsS0FBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ25FLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUVMLDRCQUFDO0lBQUQsQ0E3REEsQUE2REMsSUFBQTtJQTdEWSxxQkFBcUI7UUFEakMsMEJBQU07T0FDTSxxQkFBcUIsQ0E2RGpDO0lBN0RZLHNEQUFxQiIsImZpbGUiOiJyZXNvdXJjZXMvZWxlbWVudHMvc2VtYW50aWNSZW5kZXJlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPTSwgbm9WaWV3IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQgeyBSZW5kZXJlciwgRGlhbG9nQ29udHJvbGxlciB9IGZyb20gJ2F1cmVsaWEtZGlhbG9nJztcclxuaW1wb3J0ICdzZW1hbnRpYy11aSc7XHJcblxyXG52YXIgbW9kYWxzOiBKUXVlcnlbXSA9IFtdO1xyXG5cclxuQG5vVmlld1xyXG5leHBvcnQgY2xhc3MgU2VtYW50aWNNb2RhbFJlbmRlcmVyIGltcGxlbWVudHMgUmVuZGVyZXIge1xyXG5cclxuICAgIFxyXG5cclxuICAgIGdldERpYWxvZ0NvbnRhaW5lcigpOiBFbGVtZW50IHtcclxuXHJcbiAgICAgICAgcmV0dXJuICQoJzxkaXY+PC9kaXY+JylbMF07XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0RpYWxvZyhkaWFsb2dDb250cm9sbGVyOiBEaWFsb2dDb250cm9sbGVyKTogUHJvbWlzZTx2b2lkPiB7XHJcblxyXG4gICAgICAgICg8YW55PmRpYWxvZ0NvbnRyb2xsZXIpLmNvbnRyb2xsZXIuYXR0YWNoZWQoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyRGlhbG9nKGRpYWxvZ0NvbnRyb2xsZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckRpYWxvZyhkaWFsb2dDb250cm9sbGVyOiBEaWFsb2dDb250cm9sbGVyKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlOiAoKSA9PiB2b2lkKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9ICg8YW55PmRpYWxvZ0NvbnRyb2xsZXIpLnNsb3QuYW5jaG9yLmxhc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICAgICAgICAgIG1vZGFscy5wdXNoKGVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zaG93U2VtYW50aWNNb2RhbChlbGVtZW50LCByZXNvbHZlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93U2VtYW50aWNNb2RhbChlbGVtZW50LCByZXNvbHZlKSB7XHJcbiAgICAgICAgJChlbGVtZW50KS5tb2RhbCgpXHJcbiAgICAgICAgICAgIC5tb2RhbCg8YW55PntcclxuICAgICAgICAgICAgICAgIGNsb3NhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFsbG93TXVsdGlwbGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgb25IaWRkZW46IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uVmlzaWJsZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoZWxlbWVudCkubW9kYWwoXCJyZWZyZXNoXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLm1vZGFsKCdvYnNlcnZlQ2hhbmdlcycsIHRydWUpXHJcbiAgICAgICAgICAgIC5tb2RhbCgnc2hvdycpO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGVEaWFsb2coZGlhbG9nQ29udHJvbGxlcjogRGlhbG9nQ29udHJvbGxlcik6IFByb21pc2U8dm9pZD4ge1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmU6ICgpID0+IHZvaWQpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGxldCBlbGVtZW50ID0gbW9kYWxzLnBvcCgpO1xyXG5cclxuICAgICAgICAgICAgJChlbGVtZW50KS5tb2RhbCg8YW55Pnsgb25IaWRlOiByZXNvbHZlIH0pO1xyXG4gICAgICAgICAgICAkKGVsZW1lbnQpLm1vZGFsKCdoaWRlJyk7XHJcblxyXG4gICAgICAgICAgICAoPGFueT5kaWFsb2dDb250cm9sbGVyKS5zbG90LmRldGFjaGVkKCk7XHJcblxyXG4gICAgICAgICAgICAkKGVsZW1lbnQpLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKG1vZGFscy5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93U2VtYW50aWNNb2RhbChtb2RhbHNbbW9kYWxzLmxlbmd0aCAtIDFdLCByZXNvbHZlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

define('resources/value-converters/blob-url',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BlobUrlValueConverter = (function () {
        function BlobUrlValueConverter() {
        }
        BlobUrlValueConverter.prototype.toView = function (value, key, subKey) {
            if (!value)
                return undefined;
            var blob = value.find(function (b) { return b.Key == key && b.SubKey == subKey; });
            if (!blob)
                return undefined;
            return blob.Url;
        };
        return BlobUrlValueConverter;
    }());
    exports.BlobUrlValueConverter = BlobUrlValueConverter;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy92YWx1ZS1jb252ZXJ0ZXJzL2Jsb2ItdXJsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUVBO1FBQUE7UUFjQSxDQUFDO1FBWkcsc0NBQU0sR0FBTixVQUFPLEtBQWEsRUFBRSxHQUFXLEVBQUUsTUFBYztZQUU3QyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDUCxNQUFNLENBQUMsU0FBUyxDQUFDO1lBRXJCLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsTUFBTSxJQUFJLE1BQU0sRUFBbEMsQ0FBa0MsQ0FBQyxDQUFDO1lBRS9ELEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNOLE1BQU0sQ0FBQyxTQUFTLENBQUM7WUFFckIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDcEIsQ0FBQztRQUNMLDRCQUFDO0lBQUQsQ0FkQSxBQWNDLElBQUE7SUFkWSxzREFBcUIiLCJmaWxlIjoicmVzb3VyY2VzL3ZhbHVlLWNvbnZlcnRlcnMvYmxvYi11cmwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCbG9iIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJsb2JVcmxWYWx1ZUNvbnZlcnRlciB7XHJcblxyXG4gICAgdG9WaWV3KHZhbHVlOiBCbG9iW10sIGtleTogc3RyaW5nLCBzdWJLZXk6IHN0cmluZykge1xyXG5cclxuICAgICAgICBpZiAoIXZhbHVlKVxyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICBsZXQgYmxvYiA9IHZhbHVlLmZpbmQoYiA9PiBiLktleSA9PSBrZXkgJiYgYi5TdWJLZXkgPT0gc3ViS2V5KTtcclxuXHJcbiAgICAgICAgaWYgKCFibG9iKVxyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICByZXR1cm4gYmxvYi5Vcmw7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

define('text!app.html', ['module'], function(module) { module.exports = "<template><div class=\"ui top fixed menu\"><div class=item><i class=\"upload icon\"></i></div><a class=item href=#upload>Upload</a><a class=item href=#admin/image-upload-configs>Manage</a><a class=item href=#admin/gallery>Gallery</a></div><div style=margin-top:50px><router-view></router-view></div></template>"; });
define('text!upload.html', ['module'], function(module) { module.exports = "<template><div class=\"ui padded grid container\"><div class=\"sixteen wide column\"><h2 class=\"ui header\">Upload Test</h2></div><div class=\"sixteen wide column\"><image-upload size=medium config.bind=uploadConfig></image-upload></div></div></template>"; });
define('text!resources/elements/image-uploader.css', ['module'], function(module) { module.exports = ".drop-zone-border {\n  border-width: 5px;\n  padding: 15px;\n}\n.drop-zone-border.default {\n  border-color: #A0A0A0;\n  border-style: dashed;\n}\n.drop-zone-border.over {\n  border-style: solid;\n  border-color: #0E6EB8;\n}\n.drop-zone-border.unsupported {\n  border-style: dashed;\n  border-color: #B03060;\n}\nimg {\n  max-width: 100%;\n  /* This rule is very important, please do not ignore this! */\n}\n"; });
define('text!admin/gallery.html', ['module'], function(module) { module.exports = "<template><div class=\"ui padded grid container\"><div class=column><h2 class=\"ui header\">Gallery</h2></div></div></template>"; });
define('text!admin/image-upload-config-detail.html', ['module'], function(module) { module.exports = "<template><div class=\"ui modal\"><i class=\"close icon\"></i><div class=header>${title}</div><div class=content><form class=\"ui form\"><form class=\"ui form\"><div class=field><label>Key</label><input type=text name=name placeholder=Name value.bind=config.Key></div><div class=field><label>Description</label><input type=text name=Description placeholder=Description value.bind=config.Description></div><div class=field><label>Aspect Ratio</label><select value.bind=config.AspectRatio><option model.bind=0>16:9</option><option model.bind=1>4:3</option><option model.bind=2>1:1</option><option model.bind=3>2:3</option><option model.bind=4>Free</option></select></div><div class=field><label>View Mode</label><select value.bind=config.ViewMode><option model.bind=1>1</option><option model.bind=2>2</option><option model.bind=3>3</option><option model.bind=4>4</option></select></div><div class=field><div class=\"ui checkbox\"><input type=checkbox tabindex=0 class=hidden checked.bind=config.IncludeOriginalSize><label>Include Original Size?</label></div></div><h4 class=\"ui dividing header\">Sizes</h4><div class=\"inline fields\" repeat.for=\"size of config.Sizes\"><div class=\"inline field\"><label>Width</label><input type=text placeholder=Width value.bind=size.Width></div><div class=\"inline field\"><label>Height</label><input type=text placeholder=Height value.bind=size.Height></div><button class=\"ui icon button\"><i class=\"minus icon\" click.delegate=\"removeSize(config, size)\"></i></button></div><button class=\"ui icon button\"><i class=\"plus icon\" click.delegate=addSize(config)></i></button><h4 class=\"ui dividing header\">Crop Options</h4><div class=fields><div class=field><div class=\"ui checkbox\"><input type=checkbox tabindex=0 class=hidden checked.bind=config.CropOptions.Guides><label>Show Guides</label></div></div><div class=field><div class=\"ui checkbox\"><input type=checkbox tabindex=1 class=hidden checked.bind=config.CropOptions.Center><label>Show Center</label></div></div></div><h4 class=\"ui dividing header\">Compression</h4><div class=field><div class=\"ui checkbox\"><input type=checkbox tabindex=1 class=hidden checked.bind=config.EnableCompression><label>Enable Compression</label></div></div><div class=field><label>Compression Quality</label><input type=number placeholder=\"Compression Quality\" value.bind=config.CompressionQuality></div></form></form></div><div class=actions><button class=\"ui secondary right labeled icon button\" type=reset click.delegate=cancel()>Cancel<i class=\"cancel icon\"></i></button><button class=\"ui primary right labeled icon button\" type=submit click.delegate=submit()>${action}<i class=\"save icon\"></i></button></div></div></template>"; });
define('text!admin/image-upload-configs.html', ['module'], function(module) { module.exports = "<template><div class=\"ui centered padded grid\"><div class=row></div><div class=\"sixteen wide column\"><h2 class=\"ui dividing header\">Image Upload Configurations</h2></div><div class=\"sixteen wide column\"><div class=\"ui segment\"><div class=\"ui active inverted dimmer\" if.bind=isRefreshing><div class=\"ui text loader\">Refreshing</div></div><table class=\"ui celled table\"><thead><tr><th colspan=8><button class=\"ui right labeled right floated primary icon button\" click.delegate=add()><i class=\"plus icon\"></i>Add</button><button class=\"ui right labeled right floated icon button\" click.delegate=refresh()><i class=\"refresh icon\"></i>Refresh</button></th></tr><tr><th>Key</th><th>Description</th><th>Aspect Ratio</th><th>View Mode</th><th>Include Original Size</th><th>Enable Compression</th><th>Compression Quality</th><th></th></tr></thead><tbody><tr repeat.for=\"c of configs\"><td>${c.Key}</td><td>${c.Description}</td><td>${c.AspectRatio}</td><td>${c.ViewMode}</td><td><input type=checkbox class=\"ui checkbox\" checked.bind=c.IncludeOriginalSize></td><td><input type=checkbox class=\"ui checkbox\" checked.bind=c.EnableCompression></td><td>${c.CompressionQuality}</td><td><div class=\"ui buttons\"><button class=\"ui icon button\" click.delegate=edit(c)><i class=\"edit icon\"></i></button><button class=\"ui icon button\"><i class=\"delete icon\" click.delegate=remove(c)></i></button></div></td></tr></tbody></table></div></div></div></template>"; });
define('text!resources/elements/image-upload-dialog.html', ['module'], function(module) { module.exports = "<template><div class=\"ui modal\"><div class=content><image-uploader cropper-created.call=cropperCreated(cropper) config.bind=config></image-uploader></div><div class=actions><button class=\"ui secondary right labeled icon button\" click.delegate=cancel()>Cancel<i class=\"cancel icon\"></i></button><button class=\"ui primary right labeled icon button\" click.delegate=ok()>Done<i class=\"checkmark icon\"></i></button></div></div></template>"; });
define('text!resources/elements/image-upload.html', ['module'], function(module) { module.exports = "<template><a href=# class=\"ui ${size} bordered image\" click.delegate=uploadImage()><img src.bind=src><div if.bind=\"src == noSrc\" style=position:absolute;top:75%;margin-left:20%;margin-right:20%><h4 class=\"ui center aligned header\">Tap or Click here to add an image</h4></div></a></template>"; });
define('text!resources/elements/image-uploader.html', ['module'], function(module) { module.exports = "<template><require from=./image-uploader.css></require><require from=cropperjs/cropper.min.css></require><div show.bind=!hasImage class=\"ui ${isLoading ? 'loading' : ''} segment\" ref=dropZone><div class=\"drop-zone-border ${isDragOver ? 'over' : (isUnsupported ? 'unsupported' : 'default') }\" style.bind=style><div><h2 class=\"ui ${isDragOver ? 'blue' : (isUnsupported ? 'red' : 'grey')} center aligned icon header\"><i class=\"image icon\"></i><div class=content>${isDragOver ? 'Let it go! Let it Go!' : (isUnsupported ? 'Images only please.' : 'Drag &amp; Drop')}</div></h2></div></div></div><div show.bind=hasImage class=\"ui ${isLoading ? 'loading' : ''} segment\"><div class=\"ui image\"><img ref=image></div></div><button class=\"ui right labeled icon primary button\" click.delegate=browse()>Browse<i class=\"upload icon\"></i></button><input type=file name=fileInput accept=image/* capture=true style=display:none ref=fileInput><div class=\"ui center aligned buttons\"><button class=\"ui icon button\" data-tooltip=\"Rotate Counter Clockwise\" click.delegate=rotateCounterClockwise()><i class=\"undo icon\"></i></button><button class=\"ui icon button\" data-tooltip=\"Rotate Clockwise\" click.delegate=rotateClockwise()><i class=\"repeat icon\"></i></button><button class=\"ui icon button\" data-tooltip=\"Flip Horizontal\" click.delegate=flipHorizontal()><i class=\"resize vertical icon\"></i></button><button class=\"ui icon button\" data-tooltip=\"Flip Vertical\" click.delegate=flipVertical()><i class=\"resize horizontal icon\"></i></button><button class=\"ui icon button\" data-tooltip=\"Toggle Move on Drag\" click.delegate=toggleDragMode()><i class=\"move icon\"></i></button></div></template>"; });
//# sourceMappingURL=app-bundle.js.map