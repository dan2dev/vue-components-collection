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
require("./modal.scss");
var Modal = (function (_super) {
    __extends(Modal, _super);
    function Modal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Component methods can be declared as instance methods
    Modal.prototype.onClick = function () {
        console.log(this.$options.propsData);
        // console.log(this.message);
        // window.alert(this.message);
        // this.$emit('surprise')
        this.onAction1("okok21");
    };
    Modal.prototype.onAction1 = function (msg) {
        console.log('ok');
        this.$emit('action1', msg);
        console.log("action1");
    };
    Modal.prototype.updateValue = function () {
        // (this as any).value = "ok";
        // console.log('ok');
        this.$emit("input", this.$refs.mainInput.value);
        // this.$emit("value", (this.$refs.mainInput as any).value);
    };
    return Modal;
}(Vue));
Modal = __decorate([
    Component({
        template: "<div class=\"vc-modal__outside\">\n\t\t<div class=\"vc-modal\">\n\t\t\t<slot />\n\t\t</div>\n\t</div>",
        props: {
            type: String,
            w: Number
        }
    })
], Modal);
export { Modal };
Vue.component("vc-modal", Modal);
//# sourceMappingURL=modal.js.map