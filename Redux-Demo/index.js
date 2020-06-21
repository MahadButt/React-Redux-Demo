const { redux, createStore, combineReducers,applyMiddleware } = require('redux');

const initStateBooks = {
    numberOfBooks: 10
}
const initStatePen = {
    numberOfPens: 15
}
// const bookaction = {
//     type: buyBook,
//     info: 'My First Redux Code'
// }
//action creator to wrapping all actions in one function
function buybook() {
    // return bookaction;
    return {
        type: "Buy_book",
        info: 'My First Redux Code'
    }
}
function buypen() {
    return {
        type: "Buy_pen",
        info: 'My Second Redux Code'
    };
}
//Reducers =>  (prevState,action)=>newState
const BookReducer = (state = initStateBooks, action) => {
    switch (action.type) {
        case "Buy_book": return {
            ...state,    //spread operator to clone remaining state values
            numberOfBooks: state.numberOfBooks - 1
        }
        default: return state;
    }
}
const PenReducer = (state = initStatePen, action) => {
    switch (action.type) {
        case "Buy_pen": return {
            ...state,    //spread operator to clone remaining state values
            numberOfPens: state.numberOfPens - 1
        }
        default: return state;
    }
}
const Reducer = combineReducers({
    book: BookReducer,
    pen: PenReducer
})

const logger=store=>{
    return next=>{
        return action=>{
            const result=next(action);
            console.log('middelware log',result);
            return result;
        }
    }
}
const store = createStore(Reducer,applyMiddleware(logger));
console.log('Initial State Value', store.getState());
const unsubscribe = store.subscribe(() => {
    console.log('update State Value', store.getState())
})
store.dispatch(buybook())
store.dispatch(buybook())
store.dispatch(buypen())
store.dispatch(buypen())
unsubscribe();