import Vue, { ComponentOptions } from 'vue';
import Component from 'vue-class-component';
// --------------------
declare var require: any;
require("./styles/side-nav.scss");
// --------------------
interface SlideNav extends Vue {
	props: {

	}
}
@Component({
	template: `
	<div class="vc-side-nav">
		<div class="vc-side-nav__main">
			<div class="vc-side-nav__main-top"></div>
			<ul class="vc-side-nav__main-list">
				<li
					v-for="item in items"
					class="vc-side-nav__main-list-item">
					<a class="vc-side-nav__main-list-item-link" href="#">{{item}}</a>
				</li>
			</ul>
		</div>
	</div>`,
	props: {
		type: String,
		value: String,
		items: {
			type: [Array],
			default: function () {
				return [{
					icon: "/image/home.png",
					name: "home",
					href: "/restaurante/"
				}, {
					icon: "/image/logout.png",
					name: "sair",
					href: "/login/logout"
				}];
			}
		},
		label: {
			type: [String, Boolean],
			default: function () {
				return "ok";
			}
		},
		grouped: {
			type: [String, Boolean],
			default: function () {
				return false;
			}
		},
	}
})
export class SideNav extends Vue {
	get data(): string {
		return "ok";
	}
	set data(value: string) {

	}
}
Vue.component("vc-side-nav", SideNav);