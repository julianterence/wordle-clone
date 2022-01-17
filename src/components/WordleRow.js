import LetterInput from './LetterInput';
import { useState, useEffect } from 'react'

const WordleRow = (props) => {
    const wordleArray = props.wordToGuess.split("")
    const [disableInputs, setDisableInputs] = useState(false);
    const [isFocused, setIsFocused] = useState(false)

    const clickHandler = event => {
        setDisableInputs(true)
    }

    useEffect(() => {
        setIsFocused(prevFocused => (
            props.id === props.focusedInput[1] ? true : false
        ))
    }, [])

    return (
        <div>
            {
                wordleArray.map((letter, key) => (
                    <LetterInput key={key} props={{
                        rowId: props.id,
                        id: key,
                        disabled: disableInputs,
                        letter: letter,
                        wordToGuess: props.wordToGuess,
                        buttonPressed: props.buttonPressed,
                        focusedRow: isFocused,
                        focusedInput: props.focusedInput
                    }}
                    />
                ))
            }
            <button onClick={clickHandler}>Enter</button>
        </div>
    )
}

export default WordleRow