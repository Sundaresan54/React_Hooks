import { useState } from 'react'

const useItem = (toUpper=false) => {
    const [items, setItems] = useState([]);

    const addItem = (itemName) => {
        setItems(prevItems => {
            return [...prevItems, toUpper ? itemName.toUpperCase() : itemName];
        })
    }

    return [items, addItem]
}

export default useItem