import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
	NavList: [],
	Nav2List: [],
	itemList: []
}

//默认导出： 初始化好的Vuex.Store()对象
export default new Vuex.Store({
	state,
})