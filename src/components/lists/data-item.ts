import Vue, { ComponentOptions } from 'vue'
import Component from 'vue-class-component'
declare var require: any;
require("./data-item.scss");

@Component({
	template: `
	<div class="vc-data-item">
		<div class="vc-data-item__left"><slot name="left" /></div>
		<div class="vc-data-item__content"><slot /></div>
		<div class="vc-data-item__right"><slot name="right" /></div>
	</div>`,
	props: {
		value: Array,
		type: String,
		w: Number,
		model: Array,
		data: Object
	}
})
export class DataList extends Vue {

}

Vue.component("vc-data-item", DataList);