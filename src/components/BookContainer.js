import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buybook } from '../Redux'
function BookContainer(props) {
    const [number, setNumber] = useState(1)
    return (
        <div>
            <h1>
                No of Books = {props.numberOfBooks}
            </h1>
            <button onClick={()=>props.buybook(number)}>Buy {number} Book</button>
            <input type='text' value={number} onChange={e => setNumber(e.target.value)} />
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        numberOfBooks: state.numberOfBooks
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        buybook: function (number) {
            dispatch(buybook(number));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BookContainer);