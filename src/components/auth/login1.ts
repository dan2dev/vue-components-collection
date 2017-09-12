// import { ComponentOptions } from 'vue/types/options';
import 'whatwg-fetch';
// import  VueFetch from 'vue-fetch';

import Vue, { ComponentOptions } from 'vue';
// import Component from 'vue-class-component';
import vueCustomElement from 'vue-custom-element';
// --------------------
declare var require: any;
require("./styles/login1.scss");
// --------------------
// https://www.npmjs.com/package/vue-fetch





var data = () => {
	return {
		username: "",
		password: "",
		redirectUrl: "",
		loading: false
	}
}
var props: { [key: string]: Vue.PropOptions } = {
	logoSrc: {
		type: String,
		default: () => {
			return "button";
		}
	},
	redirectUrl: {
		type: String,
		default: () => {
			return "/";
		}
	}
};

var methods = {
	async signin(event: Event, emiter: Vue) {
		var signinUrl = (this as any).signinUrl;
		((this as Vue).$data as any)["loading"] = true;
		// ----------
		var body = JSON.stringify({
			username: this.username,
			password: this.password,
			returnUrl: this.$prop["redirectUrl"]
		});
		var fetchInit: RequestInit = {
			method: "post",
			keepalive: true,
			headers: {
				"Content-Type": "application/json; "
			},
			body: body
		};
		// ----------
		let response = await fetch(signinUrl, fetchInit);
		var json = await response.json();
		console.log(json);
		((this as Vue).$data as any)["loading"] = false;
	}
}



var v: ComponentOptions<Vue> = {
	data,
	methods,
	props,
	template: `
	<vc-modal class="vc-auth-login1" type="center">
		<div slot="header">
			<img class="vc-auth-login1__logo1" v-bind:src="logoSrc" />
			<!-- <div>- {{Loading}}</div>-->
		</div>

		<div>
			<vc-field-group >
				<vc-text
					label="Usuário"
					grouped="true"
					v-model="username"></vc-text>
				<vc-text
					label="Senha"
					type="password"
					grouped="true"
					v-model="password"></vc-text>
			</vc-field-group>
			<vc-field-group>
				<vc-button
					grouped="true"
					label="Entrar"
					v-on:click="signin"
					v-bind:loading="loading"
					loading-label="Entrando"
					loading-image="/images/loading128.png" />
			</vc-field-group>
			<div class="vc-auth-login1__esqueci1">
				<a class="vc-auth-login1__esqueci1-link1" href="#">Esqueci minha senha</a>
			</div>
		</div>
	</vc-modal>
	`,
};


Vue.component("vc-auth-login1", v);
Vue.customElement("vc-auth-login1", v);



document.body.innerHTML = `<vc-auth-login1
redirect-url="/"
logo-src="/images/logo.svg" />`;
console.log("cleaning body - remove this");