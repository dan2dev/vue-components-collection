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
			<button class="vc-button__button" v-on:click="onClick">{{label}}</button>
		</div>
	</vc-field>`,
	props: {
		type: String,
		value: String,
		label: {
			type: [String, Boolean],
			default: function () {
				return "ok";
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
		console.log("TODO: implemnt the event here");
		// this.$emit('surprise')
		// this.onAction1("okok2");
	}
	onAction1(msg: string): void {
		console.log('ok');
		this.$emit('action1', msg);
		console.log("action1");
	}

	updateValue() {
		// (this as any).value = "ok";
		// console.log('ok');
		this.$emit("input", (this.$refs.mainInput as any).value);
		// this.$emit("value", (this.$refs.mainInput as any).value);
	}
	methods: {
		// action1() : void {
		//     window.alert("ok");
		// }
	};
	private a: any = this.$attrs;
	// get Value() {
	// 	return (this as any).value;
	// }
	get Label() {
		if (this.a["label"] !== undefined) {
			return this.a["label"];
		} else {
			return "&nbsp;";
		}
	}
}
Vue.component("vc-button", Button);