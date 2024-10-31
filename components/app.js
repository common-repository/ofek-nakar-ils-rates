
Vue.component('ratex-ils', {
	props: {
      author: {
      	default: '',
      	type: String,
      },
	},
	// RETURN API EXCHANGE DATA ... 
	data() {
		return{
			informations: {
				info: {
					rate: undefined,
				},
			},
			informations1:{
              info: {
					rate: undefined,
				},
			},
			informations2:{
              info: {
					rate: undefined,
				},
			},
			informations3:{
              info: {
					rate: undefined,
				},
			},
			informations4:{
              info: {
					rate: undefined,
				},
			},
		};
	},


	computed: {
		getRatex() {
			return this.informations.info.rate;
		},
		getRatex1() {
			return this.informations1.info.rate;
		},
		getRatex2() {
			return this.informations2.info.rate;
		},
		getRatex3() {
			return this.informations3.info.rate;
		},
		getRatex4() {
			return this.informations4.info.rate;
		},
	},
	// FETCH THE DATA FROM THE API 
	methods: {
		fetchRatex(){
			fetch('https://api.exchangerate.host/convert?from=EUR&to=ILS').then((res) => res.json())
			.then((res) => {
				this.informations = res;

			});
		},
		fetchRatex1(){
			fetch('https://api.exchangerate.host/convert?from=USD&to=ILS').then((res) => res.json())
			.then((res) => {
				this.informations1 = res;

			});
		},
		fetchRatex2(){
			fetch('https://api.exchangerate.host/convert?from=BTC&to=ILS').then((res) => res.json())
			.then((res) => {
				this.informations2 = res;

			});
		},
		fetchRatex3(){
			fetch('https://api.exchangerate.host/convert?from=GBP&to=ILS').then((res) => res.json())
			.then((res) => {
				this.informations3 = res;

			});
		},
		fetchRatex4(){
			fetch('https://api.exchangerate.host/convert?from=CNY&to=ILS').then((res) => res.json())
			.then((res) => {
				this.informations4 = res;

			});
		},
	},
	mounted(){
		this.fetchRatex();
		this.fetchRatex1();
		this.fetchRatex2();
		this.fetchRatex3();
		this.fetchRatex4();

	},

	// SHORTCODE THAT DISPLAY RATEX ILS PLUGIN
	template: `<div id="theHolder" style="text-align:center;display:grid;">
	 <h5 style='font-size:1.2em;color:#115fb2;' id='ratexIlsHead'>ILS New Shekel</h5><div id="RatexPlugin" class="ratexEur" style="color:#000;font-weight:700;padding:5px 2px;">
	    <span style="color:#000;font-size:1em;">1&#x20AC; =</span> {{ getRatex }} </div>
       <div id="RatexPlugin" class="ratexUsd" style="color:#000;padding:5px 2px;;font-weight:700;">
	    <span style="color:#000;font-size:1em;">1$ =</span>  {{ getRatex1 }} </div>
	    <div id="RatexPlugin" class="ratexBtc" style="padding:5px 2px;color:#000;font-weight:700;">
	    <span style="color:#000;font-size:1em;">1&#x20BF; =</span> {{ getRatex2 }} </div>
	     <div id="RatexPlugin" class="ratexGbp" style="color:#000;padding:5px 2px;#000;font-weight:700;">
	    <span style="color:#000;font-size:1em;">1&#xA3; =</span> {{ getRatex3 }} </div>
	    <div id="RatexPlugin" class="ratexCny" style="color:#000;padding:5px 2px;#000;font-weight:700;">
	    <span style="color:#000;font-size:1em;">1&yen; =</span> {{ getRatex4 }}  </div>
	    </div>`,
});


var vm = new Vue({
	el: '#appvue',
	
});