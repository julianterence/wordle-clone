import WordleRow from './components/WordleRow';
import { word } from './data/allWords'
import KeyboardComponent from "./components/Keyboard"
import './App.css';
import { useState, useEffect } from 'react'

function App() {
	const WORD_TO_GUESS = word
	const wordleArray = WORD_TO_GUESS.split('')
	const ROWS_TO_GUESS = 6
	let wordleRowArray = []

	const [inputValue, setInputValue] = useState('')
	const [inputIndex, setInputIndex] = useState(0)
	const [rowIndex, setRowIndex] = useState(0)
	const [evaluateRow, setEvaluateRow] = useState(false)

	useEffect(() => {
		console.log(WORD_TO_GUESS)
	}, []);

	for (let i = 0; i < ROWS_TO_GUESS; i++) {
		wordleRowArray.push(
			<WordleRow
				key={i}
				props={{
					wordleArray,
					value: inputValue,
					inputIndex,
					setInputIndex,
					correctWord: WORD_TO_GUESS,
					setInputValue,
					rowId: i,
					rowIndex,
					evaluateRow,
					setEvaluateRow
				}}
			/>
		)
	}

	return (
		<main>
			{wordleRowArray}
			<KeyboardComponent props={{ setInputValue, setInputIndex, setRowIndex, inputIndex, setEvaluateRow }} />
		</main>
	)
}

export default App