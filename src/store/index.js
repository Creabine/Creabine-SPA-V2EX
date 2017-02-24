import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'


Vue.use(Vuex);

const state = {
	NavList: [],
	Nav2List: [],
	itemList: []
}

//默认导出： 初始化好的Vuex.Store()对象
export default new Vuex.Store({
	state,
	mutations,
	actions
})