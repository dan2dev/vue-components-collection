import Vue, { ComponentOptions } from 'vue'
import Component from 'vue-class-component'
declare var require: any;
require("./data-list.scss");

@Component({
	template: `
	<div class="vc-data-list">
		<div class="vc-data-list__content">
			<slot  />
		</div>
		<!--
		<div v-for="(item, index) in data">
			<div>
				<span v-text="item.descricao"></span>
			</div>
		</div>-->
	</div>`,
	props: {
		value: Array,
		type: String,
		w: Number,
		model: Array,
		data: Array
	}
})
export class DataList extends Vue {
	methods: {
		
	};
}

Vue.component("vc-data-list", DataList);