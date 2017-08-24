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
// import { template } from './window';
// import { config } from './window';
import Vue from 'vue';
import Component from 'vue-class-component';
Vue.component('vcc-window', {
    template: "<div>\n\t\t<header></header>\n\t\t<div></div>\n\t</div>"
});
// // The @Component decorator indicates the class is a Vue component
var WindowContainer = (function (_super) {
    __extends(WindowContainer, _super);
    function WindowContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.template = "<div></div>";
        // Initial data can be declared as instance properties
        _this.message = 'Hello!';
        return _this;
    }
    // Component methods can be declared as instance methods
    WindowContainer.prototype.onClick = function () {
        window.alert(this.message);
    };
    return WindowContainer;
}(Vue));
WindowContainer = __decorate([
    Component({
        // All component options are allowed in here
        template: '<button @click="onClick">Click!</button>'
    })
], WindowContainer);
export { WindowContainer };
(function (WindowContainer) {
    WindowContainer.template = "<div></div>";
})(WindowContainer || (WindowContainer = {}));
export var templates = {
    template: "<div>\n\t\t<div>\n\t\t</div>\n\t</div>"
};
export default WindowContainer;
console.log("window view start");
// export default Window; 
//# sourceMappingURL=window.js.map