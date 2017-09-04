import Vue, { ComponentOptions } from 'vue';
import Component from 'vue-class-component';
// -----------------------------------------
declare var require: any;
require("./styles/header.scss");
// -----------------------------------------
@Component({
	template: `
	<div class="vc-layout-header">
		<div class="vc-layout-header__left"><slot name="left" /></div>
		<div class="vc-layout-header__content"><slot /></div>
		<div class="vc-layout-header__right"><slot name="right" /></div>
	</div>`,
	props: {
		type: String,
		value: String
	}
})
export class LayoutHeader extends Vue { }
Vue.component("vc-layout-header", LayoutHeader); 