import React, { useState, useMemo } from 'react';
const App = () => {
    const [num1, setNum1] = useState(1);
    const [num2, setNum2] = useState(1);
    const incrementNum1 = () => {
        setNum1(num1 + 1);
    }    
    const incrementNum2 = () => {
        setNum2(num2 + 1);
    }    
    const double = () => {
        return num1 * 2;
    }
/*    const triple = () => {
        for (let i=0; i<1000000000; i++);
        return num2 * 3;
    }*/
    const triple = useMemo(() => {
        for (let i=0; i<900000000; i++);
        return num2 * 3;
    }, [num2]);
    return (
        <>
            <h2>useMemo Demo</h2>
            <div>
                <p>Num1: {num1}, Double of Num1: {double()}</p>
                <button onClick={incrementNum1}>Double of the number</button>
            </div>
            <div>
                <p>Num2: {num2}, Triple of Num2: {triple}</p>
                <button onClick={incrementNum2}>Triple of the number</button>
            </div>
        </>);
}
export default App;