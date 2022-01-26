import WordleRow from './components/WordleRow';
import { word } from './data/allWords'
import KeyboardComponent from "./components/Keyboard"
import './App.css';
import { useState, useEffect } from 'react'
import { useNewWord } from './hooks/useNewWord'
import Confetti from 'react-confetti'

function App() {
	const {
		WORD_TO_GUESS,
		WORD_TO_GUESS_ARRAY,
		ROWS_TO_GUESS
	} = useNewWord(6)

	const [inputValue, setInputValue] = useState('')
	const [inputIndex, setInputIndex] = useState(0)
	const [rowIndex, setRowIndex] = useState(0)
	const [evaluateRow, setEvaluateRow] = useState(false)
	const [completedWord, setCompletedWord] = useState('xxxxx')
	const [winner, setWinner] = useState(false)

    const updateCompletedWord = (letter, index) => {
        setCompletedWord(prevCompletedWord => {
            let updatedWord = replaceAt(prevCompletedWord, index, letter)
            return updatedWord
        })
    }

    const replaceAt = (word, index, replacement) => {
        return word.substring(0, index) + replacement + word.substring(index + replacement.length);
    }

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
			setTimeout(() => {
				if(completedWord === WORD_TO_GUESS) {
					setWinner(true)
				}
			}, 500)
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

	let wordleRowArray = []
	for (let i = 0; i < ROWS_TO_GUESS; i++) {
		wordleRowArray.push(
			<WordleRow
				key={i}
				props={{
					WORD_TO_GUESS_ARRAY,
					value: inputValue,
					inputIndex,
					correctWord: WORD_TO_GUESS,
					rowId: i,
					rowIndex,
					evaluateRow,
					resetInputValue,
					incrementInputIndex,
					updateEvaluateRow,
					updateCompletedWord
				}}
			/>
		)
	}

	return (
		<main>
			<Confetti run={winner}/>
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