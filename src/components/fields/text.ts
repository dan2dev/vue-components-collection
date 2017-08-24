import Vue, { ComponentOptions } from 'vue';
import Component from 'vue-class-component';
// --------------------
declare var require: any;
require("./styles/text.scss");
import Field from "./field";
// --------------------

@Component({
	template: `<vc-field label="label1" v-bind:grouped="grouped" >
		<div class="vc-text__holder" >
			<input ref="mainInput"
			required="required"
			v-bind:type="type"
			class="vc-text__input"
			v-bind:class="{ 'vc-text__input--grouped': grouped }"
			v-bind:value="value"
			v-on:input="updateValue()" />
			<label class="vc-text__label">{{Label}}</label>
		</div>
	</vc-field>`,
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
export class Text extends Vue {
	onClick(): void {
		console.log(this.$options.propsData);
		// console.log(this.message);
		// window.alert(this.message);
		// this.$emit('surprise')
		this.onAction1("okok2");
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


export class Pass extends Text {
	defautlType: string = "password";
}

Vue.component("vc-text", Text);
Vue.component("vc-pass", Pass);