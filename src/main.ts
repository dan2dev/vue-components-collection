// require('./window/index');

// fields --------------------------
import "./components/fields/field.ts"
import "./components/fields/text.ts";
import "./components/fields/button.ts";

// containers -----------------------
import "./components/containers/modal.ts";

// lists ----------------------------
import "./components/lists/data-list.ts"; 
import "./components/lists/data-item.ts";  

// headers -------------------------
import "./components/layout/header.ts";  
import "./components/layout/header-login.ts";


// nav ------------------------------
import "./components/navigation/side-nav.ts"; 


// auth ---------------------------------
import "./components/auth/login1.ts";

// ----------------------------------

// require ---------------
declare var require: any;
require("./main.scss");
console.log("entry");


// import Vue from "vue";
// import Component from "vue-class-component";

// console.log("vue-components-collection");
export module VueComponentsCollection {
    // export function install(vue: Vue, options: any) {
    //     console.log("vue install");
    // }
    export function init() {
        console.log("vue-components-initialized"); 
    }
}

VueComponentsCollection.init();

// export default VueComponentsCollection;

// components ------------------------