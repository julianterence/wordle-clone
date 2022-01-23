import WordleRow from './components/WordleRow';
import { word } from './data/allWords'
import KeyboardComponent from "./components/Keyboard"
import './App.css';
import { useState, useEffect } from 'react'

function App() {
	const WORD_TO_GUESS = 'IRATE'
	const wordleArray = WORD_TO_GUESS.split('')
	const ROWS_TO_GUESS = 6
	let wordleRowArray = []

	const [inputValue, setInputValue] = useState('')
	const [inputIndex, setInputIndex] = useState(0)
	const [rowIndex, setRowIndex] = useState(0)
	const [evaluateRow, setEvaluateRow] = useState(false)

	const updateInputValue = (letter) => {
		setInputValue(letter)
	}

	const resetInputValue = () => {
		setInputValue('')
	}

	const incrementInputIndex = () => {
		setInputIndex((prevIndex) => {
			return prevIndex < 5 ? prevIndex + 1 : prevIndex
		})
	}

	const decrementInputIndex = () => {
		setInputIndex(prevInputIndex => {
			return prevInputIndex > 0 ? prevInputIndex - 1 : 0
		})
	}

	const newLine = () => {
		if(inputIndex === 5) {
			setRowIndex(prevRowIndex => {
				return prevRowIndex < 6 ? prevRowIndex + 1 : prevRowIndex
			})
			setInputIndex(0)
			updateEvaluateRow(true)
		}
	}

	const deleteLetter = () => {
		resetInputValue()
		decrementInputIndex()
	}


	const updateEvaluateRow = (state) => {
		setEvaluateRow(state)
	}

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
					correctWord: WORD_TO_GUESS,
					rowId: i,
					rowIndex,
					evaluateRow,
					resetInputValue,
					incrementInputIndex,
					updateEvaluateRow
				}}
			/>
		)
	}

	return (
		<main>
			{wordleRowArray}
			<KeyboardComponent
				props={{
					updateInputValue,
					newLine,
					deleteLetter
				}} />
		</main>
	)
}

export default App