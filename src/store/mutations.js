import * as types from './mutation-types'

export default {
	[types.GET_HOTTEST_LIST](state,list){
		state.itemList = list;
	},
	[types.GET_LATEST_LIST](state,list){
		state.itemList = list;
	}
}