import Vue from 'vue'
import Component from 'vue-class-component'


declare var require: any;
require("./styles/field.scss");

// <!--<div class="vcc-field">-->
// <!-- <label v-html="label"></label><div>{{message}}</div> -->
// <!-- <label class="vcc-field__label" >{{$attrs.label}}</label>
// <slot></slot>
// <slot name="error"></slot>
// <!--<h3><slot name="h3"></slot></h3>-->

@Component({
    template: `
    <div class="vc-field" v-bind:class="{ 'vc-field--grouped': grouped }">
        <div
        class="vc-field__content"
        ><slot></slot></div>

    </div>`,
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
export class Field extends Vue {
    attributes: any = this.$attrs;
    get Label() {
        if (this.attributes["label"] !== undefined) {
            return this.attributes["label"];
        } else {
            return "&nbsp;";
        }
    }
    // set Label(value: any) {
    //     // console.log(value);
    //     (this.$attrs as any)["label"] = value;
    // }
    // get Grouped(): boolean {
    //     return (this.attributes.grouped === true ||
    //         this.attributes.grouped === "true");
    // }
}
@Component({
    template: `<div class="vc-field-group">
        <slot />
    </div>`
})
export class FieldGroup extends Vue {

}
// Register components
Vue.component("vc-field", Field);
Vue.component("vc-field-group", FieldGroup);

