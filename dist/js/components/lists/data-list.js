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
require("./data-list.scss");
var DataList = (function (_super) {
    __extends(DataList, _super);
    function DataList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DataList;
}(Vue));
DataList = __decorate([
    Component({
        template: "\n\t<div class=\"vc-data-list\">\n\t\t<div class=\"vc-data-list__content\">\n\t\t\t<slot  />\n\t\t</div>\n\t\t<!--\n\t\t<div v-for=\"(item, index) in data\">\n\t\t\t<div>\n\t\t\t\t<span v-text=\"item.descricao\"></span>\n\t\t\t</div>\n\t\t</div>-->\n\t</div>",
        props: {
            value: Array,
            type: String,
            w: Number,
            model: Array,
            data: Array
        }
    })
], DataList);
export { DataList };
Vue.component("vc-data-list", DataList);
//# sourceMappingURL=data-list.js.map