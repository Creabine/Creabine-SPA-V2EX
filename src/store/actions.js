//将mutation-types.js中的所有输出导入到types对象中
import * as types from './mutation-types'

//action类似于mutation，不同之处在于，
//action可以包含异步操作(ajax)，并且action
//用来提交mutation，而不直接改变状态。

//action函数接收一个与store实例具有相同
//方法和属性的 context 对象，因此可以调用
//context.commit 来提交一个mutation，或者
//通过context.state和context.getters来获取
//state和getters。

//另外这里还有一个ES6的概念：解构
//解构指的是:ES6允许按照一定模式，从数组和
//对象中提取值，对变量进行赋值。
//例如：赋值  var [a,b,c] = [1,2,3]
//例如：交换变量 [x,y] = [y,x]
//例如：函数参数解构：
// function add([x, y]){
// 	 return x + y;
// }
// add([1, 2]); // 3


//实践中我们常用到 参数解构 来简化代码，下边
//的 { commit } 就用到了解构。

//下边的actions其实就是用来触发mutation和
//传入参数，因为这里都要跟后台用ajax交互，
//所以使用action？
export default {
	getHottestList({ commit },list) {
		commit(types.GET_HOTTEST_LIST,list)
	},
	getLatestList({ commit },list) {
		commit(types.GET_LATEST_LIST,list)
    },
}
