import React, {useState} from 'react';
import "./itemCount.css"

const ItemCount = ({onAdd, stock, initial}) => {

    const [count, setCount] = useState(initial)

//Funcion para la suma
    const onPlus = () => {
        if (count < stock) setCount(count + 1)
    }

    // Funcion para la resta
    const onDecrement = () => {
        if (count > initial) setCount(count - 1)

    }
    return (
        <div>
            <button onClick={onDecrement}> -</button>
            <span> {count} </span>
            <button onClick={onPlus}>+</button>
            <button onClick={() => onAdd(count)}> Confirm ?</button>
        </div>
    );
};

export default ItemCount;
