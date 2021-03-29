import React, {useRef} from 'react'
import useItem from './useItem';

const EmployeeList = (props) => {
    const [items, addItem] = useItem(true);
	const nameRef = useRef(null);

    let itemList = items.map((item, index) => (
        <li key={index}>{item}</li>
    ))
    return (
        <>
            <h2>{props.heading}</h2>
            <label>
                Enter employee name:
                <input type="text" ref={nameRef} />
            </label>
            <button onClick={() => addItem(nameRef.current.value)}>Add Employee</button>
            <ul>
                {itemList}
            </ul>
        </>
    )
}
export default EmployeeList