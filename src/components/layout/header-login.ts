import Vue, { ComponentOptions } from 'vue';
import Component from 'vue-class-component';
// --------------------
declare var require: any;
require("./styles/header-login.scss");

@Component({
	template: `<div class="vc-header-login">
		<div class="vc-header-login__picture">
			<img  class="vc-header-login__picture-img" src="https://randomuser.me/api/portraits/women/10.jpg" />
		</div>
		<div class="vc-header-login__details">
			<div class="vc-header-login__details-user">Danilo C Castro</div>
			<div class="vc-header-login__details-entity">PizzaHut</div>
		</div>
	</div>`,
	props: {
		login: Object
	}
})
export class HeaderLogin extends Vue {
	get Login() {
		return {
			// user: 
		};
	}
}
Vue.component("vc-header-login", HeaderLogin);