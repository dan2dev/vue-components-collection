import Vue, { ComponentOptions } from 'vue'
import Component from 'vue-class-component'
declare var require: any;
require("./styles/modal.scss");

@Component({
	template: `<div class="vc-modal__outside">
		<div class="vc-modal">
			<div class="vc-modal__header"><slot name="header" /></div>
			<div class="vc-modal__content">
				<div class="vc-modal__content-left"><slot name="left" /></div>
				<div class="vc-modal__content-center"><slot /></div>
				<div class="vc-modal__content-right"><slot name="right" /></div>
			</div>
			<div class="vc-modal__footer"></div>
		</div>
	</div>`,
	props: {
		type: String,
		width: Number,
		height: Number
	}
})
export class Modal extends Vue {
	// Component methods can be declared as instance methods
	onClick(): void {
		console.log(this.$options.propsData);
		// console.log(this.message);
		// window.alert(this.message);
		// this.$emit('surprise')
		this.onAction1("okok21");
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
}

Vue.component("vc-modal", Modal);