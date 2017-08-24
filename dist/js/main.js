// require('./window/index');
import "./components/form-fields/field.ts";
import "./components/form-fields/text.ts";
import "./components/containers/modal.ts";
import "./components/lists/data-list.ts";
import "./components/lists/data-item.ts";
import "./components/layout/header.ts";
require("./main.scss");
console.log("entry");
// import Vue from "vue";
// import Component from "vue-class-component";
// console.log("vue-components-collection");
export var VueComponentsCollection;
(function (VueComponentsCollection) {
    // export function install(vue: Vue, options: any) {
    //     console.log("vue install");
    // }
    function init() {
        console.log("vue-components-initialized");
    }
    VueComponentsCollection.init = init;
})(VueComponentsCollection || (VueComponentsCollection = {}));
VueComponentsCollection.init();
// export default VueComponentsCollection;
// components ------------------------ 
//# sourceMappingURL=main.js.map