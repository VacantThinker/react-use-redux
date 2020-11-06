// step1 导入
const {createStore} = require("redux")
// step2 创建一个reducer(), 方法内传入state, action
function counterReducer(state = {value: 0}, action) {
  switch (action.type) { // 2.1 switch判断action.type
    case "counter/incremented": // 2.2 根据type, 执行不同的action. --> 来更新state.value
      return {value: state.value + 1}
    case "counter/decremented":
      return {value: state.value - 1}
    default:
      return state;
  }
}

let store = createStore(counterReducer) // step3 声明并导出store, 使用createStore(). 方法内传入创建的reducer

//------------------------------------------------
store.subscribe(() => console.log(store.getState()))

store.dispatch({type: "counter/incremented"})
store.dispatch({type: "counter/incremented"})
store.dispatch({type: "counter/decremented"})
