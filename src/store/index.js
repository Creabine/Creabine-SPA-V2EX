import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

//假数据
import user from '../../static/user.json'

Vue.use(Vuex);

const state = {
	user,
	itemList: []
}

//默认导出： 初始化好的Vuex.Store()对象
export default new Vuex.Store({
	state,
	mutations,
	actions
})