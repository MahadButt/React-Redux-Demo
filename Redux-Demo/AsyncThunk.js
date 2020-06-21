const { redux, createStore, combineReducers, applyMiddleware } = require('redux');
const thunkMiddleware = require('redux-thunk').default;
const axios = require('axios');
// Redux Thunk ==> Middleware = function(dispatch){}
 
const initState = {
    loading: false,
    users: [],
    error: ""
}
// Action Creators 
const USER_REQ = () => {
    return {
        type: "USER_REQ",     //Action
        info: 'My First Redux Code'
    }
}
const USER_SUCCESS = (users) => {
    return {
        type: "USER_SUCCESS",
        payload: users
    }
}
const USER_ERROR = (error) => {
    return {
        type: "USER_ERROR",
        payload: error
    };
}
//Reducers =>  (prevState,action)=>newState
const Reducer = (state = initState, action) => {
    switch (action.type) {
        case "USER_REQ": return {
            ...state,    //spread operator to clone remaining state values
            loading: true
        }
        case "USER_SUCCESS": return {
            loading: false,
            users: action.payload
        }
        case "USER_ERROR": return {
            loading: false,
            users: [],
            error: action.payload
        }
        default: return state;
    }
}

const logger = store => {
    return next => {
        return action => {
            const result = next(action);
            console.log('middelware log', result);
            return result;
        }
    }
}
const fetchUser = () => {
    return function (dispatch) {
        dispatch(USER_REQ());
        axios.get('https://jsonplaceholde.typicode.com/users')
            .then(res => {
                const users = res.data.map(user => user.name)
                dispatch(USER_SUCCESS(users))
            }).catch(error => {
                dispatch(USER_ERROR(error))
            })
    }
}
const store = createStore(Reducer, applyMiddleware(thunkMiddleware));
// console.log('Initial State Value', store.getState());
 store.subscribe(() => {
    console.log(store.getState())
})
store.dispatch(fetchUser())
// unsubscribe();