// step1 导入
const {createSlice, configureStore} = require("@reduxjs/toolkit")
// step2 使用createSlice(), 声明并创建一个slice
const counterSlice = createSlice({
  name: 'counter', // 2.1指定name
  initialState: { // 2.2初始化State
    value: 0 // 2.2.1指定初始value
  },
  reducers: { // 2.3 创建多个action, action用于更新state的值
    incremented: state => state.value += 1, // 2.3.1 方法名: state,action => 操作state.value
    decremented: state => state.value -= 1,
  }
})

const {incremented, decremented} = counterSlice.actions // step3 声明并导出actions, 从创建的slice中.
const store = configureStore({ // step4 声明并导出store, 使用configureStore(). 方法内传入创建的slice.
  reducer: counterSlice.reducer // step4.1 传入reducer, 从创建的slice中
})
// ----------------------------------------------------
store.subscribe(() => console.log(store.getState()))
store.dispatch(incremented())
store.dispatch(incremented())
store.dispatch(decremented())

