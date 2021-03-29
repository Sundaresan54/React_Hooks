import React, { useState, useEffect, useRef } from 'react';

const App = () => {
    const [count, setCount] = useState(0);
    const refName = useRef(null); // DOM Reference
    const refInterval = useRef(null); // Mutable value Reference

    useEffect(() => {
        refInterval.current = setInterval(() => {
            setCount(prevCount => prevCount + 1)
        }, 1000)
    }, [])

	const retrieve = () => {
		let name = refName.current.value;
		alert("Retrieved name from text box: " + name);
		refName.current.focus();
    }
    
    return (
        <>
            <h2>useRef Demo</h2>
            <label>Enter your name:
                <input type="text" ref={refName} /><br /><br />
            </label>
            <button onClick={() => retrieve()} >Retrieve name and display</button>
            <div>
                <p>Count: {count}</p>
                <button onClick={() => clearInterval(refInterval.current)} >Clear Timer</button>
            </div>
        </>);
}

export default App;