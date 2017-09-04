import Vue, { ComponentOptions } from 'vue';
import Component from 'vue-class-component';
// --------------------
declare var require: any;
require("./styles/button.scss");
import Field from "./field";
// --------------------

@Component({
	template: `<vc-field label="label1" v-bind:grouped="grouped">
		<div class="vc-button__holder"> 
			<button v-bind:disabled="disabled" class="vc-button__button" v-on:click="onClick">
				<span class="vc-button__button-label">{{label}}</span>
				<span v-if="loading" class="vc-button__button-loader">Loading</span>
			</button>
		</div>
	</vc-field>`,
	props: {
		type: String,
		value: String,
		loading: {
			type: [String, Boolean],
			default: function () {
				return false;
			}
		},
		disabled: {
			type: [String, Boolean],
			default: function () {
				return false;
			}
		},
		label: {
			type: [String, Boolean],
			default: function () {
				return "button";
			}
		},
		grouped: {
			type: [String, Boolean],
			default: function () {
				return false;
			}
		},
	}
})
export class Button extends Vue {
	onClick(): void {
		console.log(this.$options.propsData);
		// console.log(this.message);
		// console.log("TODO: implemnt the event here");
		// this.$emit('on-click')
		this.$emit('click', 'A'); 
		// this.$parent.$emit('click', 'A'); 
		// this.onAction1("okok2");
	}
}
Vue.component("vc-button", Button);