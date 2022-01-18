import WordleRow from './components/WordleRow';
import { word } from './data/allWords'
import KeyboardComponent from "./components/Keyboard"
import './App.css';
import { useState, useEffect } from 'react'


function App() {
	const WORD_TO_GUESS = word.toUpperCase()
	const ROWS_TO_GUESS = 6
	const wordleRows = []

	// keep track of last keyboard click
	const [buttonPressed, setButtonPressed] = useState('')
	// keep track of current input
	const [focusedInput, setFocusedInput] = useState([0, 0])

	for (let i = 0; i < ROWS_TO_GUESS; i++) {
		wordleRows.push(
			<WordleRow
				key={i}
				props={{
					id: i,
					wordToGuess: WORD_TO_GUESS,
					buttonPressed,
					focusedInput,
					setFocusedInput
				}}
			/>
		)
	}

	function newRow() {
		console.log('in new row')
		if(focusedInput[0] === 5) {
		console.log('in new row step 1')
			setFocusedInput(prevFocusedInput => {
				return [0, prevFocusedInput[1] + 1]
			})
		}
	}

	useEffect(() => {
		console.log(WORD_TO_GUESS)
	}, [])

	return (
		<main>
			{wordleRows}
			<KeyboardComponent setButtonPressed={setButtonPressed} newRow={newRow} />
		</main>
	);
}

export default App;
