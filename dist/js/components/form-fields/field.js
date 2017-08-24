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
require("./field.scss");
// <!--<div class="vcc-field">-->
// <!-- <label v-html="label"></label><div>{{message}}</div> -->
// <!-- <label class="vcc-field__label" >{{$attrs.label}}</label>
// <slot></slot>
// <slot name="error"></slot>
// <!--<h3><slot name="h3"></slot></h3>-->
var Field = (function (_super) {
    __extends(Field, _super);
    function Field() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.attributes = _this.$attrs;
        return _this;
        // set Label(value: any) {
        //     // console.log(value);
        //     (this.$attrs as any)["label"] = value;
        // }
        // get Grouped(): boolean {
        //     return (this.attributes.grouped === true ||
        //         this.attributes.grouped === "true");
        // }
    }
    Object.defineProperty(Field.prototype, "Label", {
        get: function () {
            if (this.attributes["label"] !== undefined) {
                return this.attributes["label"];
            }
            else {
                return "&nbsp;";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Field;
}(Vue));
Field = __decorate([
    Component({
        template: "\n    <div class=\"vc-field\" v-bind:class=\"{ 'vc-field--grouped': grouped }\">\n        <div\n        class=\"vc-field__content\"\n        ><slot></slot></div>\n\n    </div>",
        props: {
            // propMessage: String,
            label: String,
            grouped: {
                type: [String, Boolean],
                default: function () {
                    return false;
                }
            },
        }
    })
], Field);
export { Field };
var FieldGroup = (function (_super) {
    __extends(FieldGroup, _super);
    function FieldGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FieldGroup;
}(Vue));
FieldGroup = __decorate([
    Component({
        template: "<div class=\"vc-field-group\">\n        <slot />\n    </div>"
    })
], FieldGroup);
export { FieldGroup };
// Register components
Vue.component("vc-field", Field);
Vue.component("vc-field-group", FieldGroup);
//# sourceMappingURL=field.js.map