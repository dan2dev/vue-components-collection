import Vue, { ComponentOptions, PropOptions } from 'vue';
import Component from 'vue-class-component';
// --------------------
declare var require: any;
require("./styles/button.scss");
import Field from "./field";
// --------------------




var data = () => {
	return {
	}
};
var methods = {
	// async enter(event: any) {
	// 	console.log(event);
	// 	console.log("enter called");
	// 	var signinUrl = (this as any).signinUrl;
	// 	let response = await fetch(signinUrl);
	// 	console.log(this.User);
	// },
	async onClick(event: Event) {
		var target = event.target as HTMLButtonElement;
		var emiter = this;
		setImmediate(() => {
			target.blur();
			this.$emit("click", event, emiter);
		})
	}
};
var props: { [key: string]: Vue.PropOptions } = {
	type: {
		type: String,
		default: () => {
			return "button";
		}
	},
	value: {
		type: String,
		default: () => {
			return "null";
		}
	},
	loading: {
		type: [String, Boolean],
		default: function () {
			return false;
		}
	},
	loadingImage: {
		type: String,
		default: function(): string | null {
			return null;
		}
	},
	loadingLabel: {
		type: [String, Boolean],
		default: function () {
			return this.$props["label"];
		}
	},
	disabled: {
		type: [String, Boolean],
		default: function () {
			return false;
		}
	},
	label: {
		type: [String, Boolean],
		default: function () {
			return "button";
		}
	},
	grouped: {
		type: [String, Boolean],
		default: function () {
			return false;
		}
	}
};

var v: ComponentOptions<Vue> = {
	data,
	methods,
	props,
	template: `
	<vc-field label="label1" v-bind:grouped="grouped">
		<div class="vc-button__holder"> 
			<button v-bind:disabled="(disabled || loading)" class="vc-button__button" v-on:click="onClick">
				<span v-if="!loading" class="vc-button__button-label">{{label}}</span>
				<span v-if="loading" class="vc-button__button-label">{{loadingLabel}}</span>
				<img v-if="loading" class="vc-button__button-loader" v-bind:src="loadingImage" />
			</button>
		</div>
	</vc-field>
	`,
};




Vue.component("vc-button", v);