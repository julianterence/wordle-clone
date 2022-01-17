import LetterInput from './LetterInput';
import { useState, useEffect } from 'react'

const WordleRow = ({props}) => {
    const {id: rowId, wordToGuess, buttonPressed, focusedInput, setFocusedInput} = props
    const wordleArray = wordToGuess.split("")

    const [disableInputs, setDisableInputs] = useState(false);
    const [isFocused, setIsFocused] = useState(false)

    const clickHandler = event => {
        setDisableInputs(true)
    }

    useEffect(() => {
        setIsFocused(prevFocused => (
            rowId === focusedInput[1] ? true : false
        ))
    }, [])

    return (
        <div>
            {
                wordleArray.map((letter, key) => (
                    <LetterInput key={key} props={{
                        rowId,
                        id: key,
                        disabled: disableInputs,
                        letter: letter,
                        wordToGuess,
                        buttonPressed,
                        focusedRow: isFocused,
                        focusedInput,
                        setFocusedInput
                    }}
                    />
                ))
            }
            <button onClick={clickHandler}>Enter</button>
        </div>
    )
}

export default WordleRow