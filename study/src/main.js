// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VRouter from 'vue-router'
import Vuex from 'vuex'
import Apple from "./components/apple"
import Banana from "./components/banana"
import RedApple from "./components/redapple"

Vue.config.productionTip = false

//应用这个vue-router中间件
Vue.use(VRouter)

//应用vuex中间件
Vue.use(Vuex)

//实例化一个vuex数据中心
let store = new Vuex.Store({
	state: {	//数据中心储存
		totalPrice : 0
	},
	getters: {
		getTotal(state) {
			return state.totalPrice
		}
	},
	mutations: {
		increment (state, price) {
			state.totalPrice += price
		},
		decrement (state, price) {
			state.totalPrice -= price
		}
	},
	actions: {//使用actions来代替mutations的commit调用
		increase(context, price) {//在此定义方法
			context.commit('increment', price)
		}
	}
})

//实例化一个vue-router
let router = new VRouter({
	mode:"history",
	routes:[
		{
			//path : '/apple/:color',//带参数的
			path : '/apple',//带参数的
			component: Apple,
			children:[{
				path : 'red',//带参数的
				component: RedApple,
			}]
		},{
			path : '/banana',
			component: Banana
		}
	]
})

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,//简写前 router : router
	store,
	template: '<App/>',
	components: { App }
})
