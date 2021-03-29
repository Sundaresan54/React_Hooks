import React, { useState, useCallback } from 'react';
import ButtonComponent from './components/ButtonComponent';

const DemoUseCallback = () => {
	const [score, setScore] = useState(50);
    const [mark, setMark] = useState(90);
    
    const incrementScore = useCallback(() => {
        setScore(score + 1)
    }, [score]);

    const incrementMark = useCallback(() => {
        setMark(mark + 1)
    }, [mark]);

/*    const incrementScore = () => setScore(score + 1);
    
    const incrementMark = () => setMark(mark + 1);
*/
	return (
		<>
			<h2>useCallback hook</h2>
            <div>
                <span>{score} </span>
                <ButtonComponent handleClick={incrementScore}>Increment Score</ButtonComponent>
            </div>
            <div>
                <span>{mark} </span>
                <ButtonComponent handleClick={incrementMark}>Increment Mark</ButtonComponent>
            </div>
		</>);
}

const App = (props) => {
	return (
		<>
			<DemoUseCallback />
		</>);
}

export default App;
