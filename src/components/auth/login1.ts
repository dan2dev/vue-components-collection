import 'whatwg-fetch';
// import  VueFetch from 'vue-fetch';

import Vue, { ComponentOptions } from 'vue';
import Component from 'vue-class-component';
// --------------------
declare var require: any;
require("./styles/login1.scss");
// --------------------
// https://www.npmjs.com/package/vue-fetch

@Component({
	template: `
	<vc-modal class="vc-auth-login1" type="center">
		<div slot="header">
			<img class="vc-auth-login1__logo1" v-bind:src="logosrc" />
		</div>
		<vc-field-group>
			<vc-pass
				label="Usuário"
				grouped="true"
				v-model="User"></vc-pass>
			<vc-pass
				label="Senha"
				type="text"
				grouped="true"
				v-model="Password"></vc-pass>
		</vc-field-group>
		<vc-field-group>
			<vc-button grouped="true" label="Entrar" v-on:click="enter" />
		</vc-field-group>
		<div class="vc-auth-login1__esqueci1">
			<a class="vc-auth-login1__esqueci1-link1" href="#">Esqueci minha senha</a>
		</div>
	</vc-modal>
	`,
	props: {
		logosrc: String,
		signinUrl: String,
		signoutUrl: String,
		redirectUrl: String
	}
})
export class AuthLogin1 extends Vue {
	User: string = "";
	Password: string = "";
	attrs(key:string) {
		return (this.attrs as any)[key];
	}
	async enter(event: any) {
		console.log("enter called");
		var signinUrl  = (this as any).signinUrl;
		let response = await fetch(signinUrl);
		console.log(this.User);
	}
}
Vue.component("vc-auth-login1", AuthLogin1);