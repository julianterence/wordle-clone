import WordleRow from './components/WordleRow';
import { word } from './data/allWords'
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import './App.css';
import {useState} from 'react'


function App() {
	const WORD_TO_GUESS = word.toUpperCase()
	console.log(WORD_TO_GUESS)
	const ROWS_TO_GUESS = 6
	const wordleRows = []

	const [buttonPressed, setButtonPressed] = useState('')
	const [focusedInput, setFocusedInput] = useState([0,0])

	for (let i = 0; i < ROWS_TO_GUESS; i++) {
		wordleRows.push(<WordleRow key={i} id={i} wordToGuess={WORD_TO_GUESS} buttonPressed={buttonPressed} focusedInput={focusedInput} />)
	}

	const onKeyPress = (button) => {
		console.log("Button pressed", button);
		setButtonPressed(button);
	  }
	
	return (
		<main>
			{wordleRows}
			<Keyboard 
				theme='keyboard-theme hg-theme-default'
				onKeyPress={onKeyPress}
				layout={{
					'default': [
					  'Q W E R T Y U I O P',
					  'A S D F G H J K L',
					  '{enter} Z X C V B N M {bksp}'
					]
				  }}
				display={{
					'{enter}': 'Enter',
					'{bksp}': '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path fill="white" d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"></path></svg>'
				}}
			/>
		</main>
	);
}

export default App;
