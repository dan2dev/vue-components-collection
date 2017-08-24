import Vue from 'vue'
import Component from 'vue-class-component'


declare var require: any;
require("./styles/field.scss");



@Component({
	template: `
		<div v-if="type === 'text'"></div>
		<div v-else-if="type === 'password'"></div>
		<div v-else-if="type === 'select'"></div>
	`,
    props: {
        type: String,
    }
})
export class Morph extends Vue {
	
}
Vue.component("vc-morph", Morph);


