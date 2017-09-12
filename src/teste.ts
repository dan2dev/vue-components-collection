// console.log("tensting loaded");
import Vue, { ComponentOptions } from 'vue';
import vueCustomElement from 'vue-custom-element';


var VueInput1 : ComponentOptions<Vue> = {
	template:
	`<div>
		<p><input type="text" v-bind:value="message" v-on:input="messageChanged" /></p>
		<p>{{ message }}</p>
	</div>`,
	props: ['msg'],
	data() {
		return {
			message: this.$props['msg']
		}
	},
	methods: {
		messageChanged(event) {
			var value = (this.$data as any)["message"] = event.target.value;
			this.$emit("messageChanged", value);
		}
	}
};

Vue.customElement('vue-input1',VueInput1);
Vue.component('vue-input1', VueInput1);


var data = () => {
	return {
		message: 'Hello Vue2!'
	}
};

Vue.customElement('widget-vue', {
	// <vue2-teste v-bind:prop1="prop1" v-on:mudar="teste" />
	template: `<p>
	<vue-input1 :msg="message" @messageChanged="message = $event"/>
	<input :value="prop1"  /> {{ message }}, {{ prop1  }}, {{prop2}}, {{prop3}}
	</p>`,
	props: [
		'prop1',
		'prop2',
		'prop3'
	],
	data,
	methods: {
		messageChangedParent: function (value, value2) {
			(this.$data as any)["message"] = value.detail[0];
			console.log(value, value2); 
		},
		alert: function() {
			alert("ok");
		} 
	},
	computed: {
		// get $prop1() {
		// 	return "computed";
		// },
		// set $prop1(value) {
		// 	console.log(value);
		// },
		$prop12: {
			get: function () {
				return "compute";
			},
			set: function (value: string) {
				// console.log($attrs["prop1"]);

				// this.props["prop1"] = value;
				// console.log(value);
			}
		}
	}
});


// document.body.innerHTML = `<h1>
// <a href="#">link teste</a>
// <widget-vue id="teste1" prop1="1" prop2="2" prop3="3" /></h1>
// <div><vc-auth-login1 /></div>
// `;
// document.body.innerHTML = ``;
// console.log("cleaning body - remove this");
// var ele = document.getElementById("teste1"); 
// ele.setAttribute("prop1", "okasd");

//  console.dir(document.getElementById("teste1"));//["alert"]();