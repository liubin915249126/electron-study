export default {
    namespace: 'home',
    state: {
        homes: [1, 2, 3],
        num: 0
    },
    reducers: {
        adds(state, { newNum }) {
            return {
                ...state,
                num: newNum
            }
        }
    },
    effects: {
        * add({ res, val }, { put, select, call }) {
            const { home } = yield select()
            console.log(111,home)
            yield console.log(res, val)
            const newNum = home.num + 1
            yield put({ type: 'adds', newNum })
        },
        * addAsync(props, { put, select, call }) {
            const { home } = yield select()
            const newNum = yield call(asyncFun,home.num)
            yield put({ type: 'adds', newNum })
        }
    },
}

const asyncFun = (num) => {
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(num+1)
         },1000)
    })
}