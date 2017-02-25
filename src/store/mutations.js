//将mutation-types.js中的所有输出导入到types对象中
import * as types from './mutation-types'

// 更改Vuex的store中的状态的唯一方法是提交mutation
// mutations类似事件，每个mutation都有一个字符串的
// 事件类型(type) 和一个 回调函数(handler)。
// 这个回调函数就是我们更改状态的地方
// 回调函数会接受state作为第一个参数 
// 并且也可以向回调函数中传入额外的参数，这
// 叫做mutation的载荷(payload)，下边就传入了time参数
// 在其他更多情况下，载荷是一个包含更多内容的对象

//下边默认导出了一个对象，在index.js中导出使用。
//这里的对象，之所以使用方括号，是因为该对象的
//属性名是用诸如  types.ADD_TOTAL_TIME 的变量
//来表示的，用变量表示对象的属性名，只能使用方括号

//也就是说，下边的对象其实类似：
// export default {
// 	ADD_TOTAL_TIME: function(state,time){
// 		state.totalTime = state.totalTime + time
// 	}
// }
export default {
	// 得到最热主题列表
	[types.GET_HOTTEST_LIST](state,list){
		//在这里修改store中的状态，下同
		state.itemList = list;
	},
	//得到最新主题列表
	[types.GET_LATEST_LIST](state,list){
		state.itemList = list;
	}
}