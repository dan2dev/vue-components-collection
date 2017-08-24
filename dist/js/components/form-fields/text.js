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
require("./text.scss");
// --------------------
var Text = (function (_super) {
    __extends(Text, _super);
    function Text() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.a = _this.$attrs;
        return _this;
    }
    Text.prototype.onClick = function () {
        console.log(this.$options.propsData);
        // console.log(this.message);
        // window.alert(this.message);
        // this.$emit('surprise')
        this.onAction1("okok2");
    };
    Text.prototype.onAction1 = function (msg) {
        console.log('ok');
        this.$emit('action1', msg);
        console.log("action1");
    };
    Text.prototype.updateValue = function () {
        // (this as any).value = "ok";
        // console.log('ok');
        this.$emit("input", this.$refs.mainInput.value);
        // this.$emit("value", (this.$refs.mainInput as any).value);
    };
    Object.defineProperty(Text.prototype, "Label", {
        // get Value() {
        // 	return (this as any).value;
        // }
        get: function () {
            if (this.a["label"] !== undefined) {
                return this.a["label"];
            }
            else {
                return "&nbsp;";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Text;
}(Vue));
Text = __decorate([
    Component({
        template: "<vc-field label=\"label1\" v-bind:grouped=\"grouped\" >\n\t\t<div class=\"vc-text__holder\" >\n\t\t\t<input ref=\"mainInput\"\n\t\t\trequired=\"required\"\n\t\t\tv-bind:type=\"type\"\n\t\t\tclass=\"vc-text__input\"\n\t\t\tv-bind:class=\"{ 'vc-text__input--grouped': grouped }\"\n\t\t\tv-bind:value=\"value\"\n\t\t\tv-on:input=\"updateValue()\" />\n\t\t\t<label class=\"vc-text__label\">{{Label}}</label>\n\t\t</div>\n\t</vc-field>",
        props: {
            type: String,
            value: String,
            grouped: {
                type: [String, Boolean],
                default: function () {
                    return false;
                }
            },
        }
    })
], Text);
export { Text };
var Pass = (function (_super) {
    __extends(Pass, _super);
    function Pass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defautlType = "password";
        return _this;
    }
    return Pass;
}(Text));
export { Pass };
Vue.component("vc-text", Text);
Vue.component("vc-pass", Pass);
//# sourceMappingURL=text.js.map