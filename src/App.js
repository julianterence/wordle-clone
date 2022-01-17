import WordleRow from './components/WordleRow';
import { word } from './data/allWords'
import KeyboardComponent from "./components/Keyboard"
import './App.css';
import { useState, useEffect } from 'react'


function App() {
	const WORD_TO_GUESS = word.toUpperCase()
	const ROWS_TO_GUESS = 6
	const wordleRows = []

	const [buttonPressed, setButtonPressed] = useState('')
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

	useEffect(() => {
		console.log(WORD_TO_GUESS)
	}, [])

	return (
		<main>
			{wordleRows}
			<KeyboardComponent setButtonPressed={setButtonPressed} />
		</main>
	);
}

export default App;
