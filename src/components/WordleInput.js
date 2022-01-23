import { Input } from "../styledComponents/LetterInput"
import { useState, useEffect } from "react"

function WordleInput({props}) {
    const [value, setValue] = useState('')
    const [isCorrect, setIsCorrect] = useState(false)
    const [isWrongPlace, setIsWrongPlace] = useState(false)
    const [evaluateInput, setEvaluateInput] = useState(false)

    const {
        value: keyboardValue,
        id,
        inputIndex,
        setInputIndex,
        correctLetter,
        correctWord,
        setInputValue,
        rowId,
        rowIndex,
        evaluateRow,
        setEvaluateRow
    } = props

    const activeInput = inputIndex === id
    const activeRow = rowId === rowIndex
    const inputEvaluation = isCorrect ? 'correct' : isWrongPlace ? 'placement' : 'incorrect'

    useEffect(() => {
        if (value !== keyboardValue && activeRow) {
            if (activeInput) {
                setValue(keyboardValue)
                setInputIndex((prevIndex) => {
                    return prevIndex < 5 ? prevIndex + 1 : prevIndex
                })
                setInputValue('')
            }
        }
    }, [keyboardValue]);

    useEffect(() => {
        // DELETE LETTER
        if (value !== '' && keyboardValue === '' && activeInput && activeRow) {
            setValue(keyboardValue)
        }
    }, [inputIndex]);

    useEffect(() => {
        // Update state of each letter
        // Will dictate colour of squares on submit
        if (value === correctLetter) {
            setIsCorrect(true)
        } else if (correctWord.includes(value) && value !== '') {
            setIsCorrect(false)
            setIsWrongPlace(true)
        } else {
            setIsCorrect(false)
            setIsWrongPlace(false)
        }
    }, [value]);

    useEffect(() => {
      if(evaluateRow && rowId === (rowIndex - 1)) {
        setEvaluateInput(true)
        setEvaluateRow(false)
      }
    }, [evaluateRow]);
    



    return (
        <Input
            value={value}
            disabled
            $inputState={evaluateInput ? inputEvaluation : null}
        />
    )
}

export default WordleInput