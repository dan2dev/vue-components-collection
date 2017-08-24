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
import Vue from 'vue';
import Component from 'vue-class-component';
require("./styles/layout-header.scss");
// -----------------------------------------
var LayoutHeader = (function (_super) {
    __extends(LayoutHeader, _super);
    function LayoutHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LayoutHeader;
}(Vue));
LayoutHeader = __decorate([
    Component({
        template: "\n\t<div class=\"vc-layout-header\">\n\t\t<div class=\"vc-layout-header__left\"><slot name=\"left\" /></div>\n\t\t<div class=\"vc-layout-header__content\"><slot /></div>\n\t\t<div class=\"vc-layout-header__right\"><slot name=\"right\" /></div>\n\t</div>",
        props: {
            type: String,
            value: String
        }
    })
], LayoutHeader);
export { LayoutHeader };
Vue.component("vc-layout-header", LayoutHeader);
//# sourceMappingURL=header.js.map