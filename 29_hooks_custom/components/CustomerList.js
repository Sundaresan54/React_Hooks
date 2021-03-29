import React, {useRef} from 'react'
import useItem from './useItem';

const CustomerList = (props) => {
    const [items, addItem] = useItem();
	const nameRef = useRef(null);

    let itemList = items.map((item, index) => (
        <li key={index}>{item}</li>
    ))
    return (
        <>
            <h2>{props.heading}</h2>
            <label>
                Enter customer name:
                <input type="text" ref={nameRef} />
            </label>
            <button onClick={() => addItem(nameRef.current.value)}>Add Customer</button>
            <ul>
                {itemList}
            </ul>
        </>
    )
}
export default CustomerList