import React from 'react'
import { useSelector, useDispatch } from 'react-redux' //userSelector Allows you to extract data from the Redux store state
import { buybook } from '../Redux'
function HookBookContainer() {
    const numberOfBooks = useSelector(state => state.numberOfBooks);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Hook Container</h1>
            <h2>
                No of Books = {numberOfBooks}
            </h2>
            <button onClick={()=>dispatch(buybook())}>Buy Book</button>
        </div>
    )
}
export default HookBookContainer;