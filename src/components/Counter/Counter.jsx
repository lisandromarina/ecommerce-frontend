import React from 'react';
import './CounterStyles.scss';

function Counter({ quantity, increment, decrement }) {
    return (
        <div className="increment-button">
            <input className='increment-button-button' type="button" onClick={decrement} value="-" />
            <input readonly value={quantity} className="border-0 text-center w-25" />
            <input className='increment-button-button' type="button" onClick={increment} value="+" />
        </div>
    )
}

export default Counter
