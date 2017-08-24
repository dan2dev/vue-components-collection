// import { template } from './window';
// import { config } from './window';
import Vue from 'vue'
import Component from 'vue-class-component'



Vue.component('vcc-window', {
	template: `<div>
		<header></header>
		<div></div>
	</div>`
});

// // The @Component decorator indicates the class is a Vue component
@Component({
	// All component options are allowed in here
	template: '<button @click="onClick">Click!</button>'
})
export class WindowContainer extends Vue {
	template = "<div></div>";
	// Initial data can be declared as instance properties
	message: string = 'Hello!';
	// Component methods can be declared as instance methods
	onClick(): void {
		window.alert(this.message);
	}
}
export module WindowContainer {
	export let template = `<div></div>`;
}
export var templates = {
	template: `<div>
		<div>
		</div>
	</div>`
}
export default WindowContainer;
console.log("window view start");

// export default Window;