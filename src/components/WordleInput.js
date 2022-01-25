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
        correctLetter,
        correctWord,
        rowId,
        rowIndex,
        evaluateRow,
        resetInputValue,
        incrementInputIndex,
        updateEvaluateRow,
        updateCompletedWord
    } = props

    const activeInput = inputIndex === id
    const activeRow = rowId === rowIndex
    const inputEvaluation = isCorrect ? 'input--correct' : isWrongPlace ? 'input--placement' : 'input--incorrect'

    useEffect(() => {
        if (value !== keyboardValue && activeRow) {
            if (activeInput) {
                setValue(keyboardValue)
                incrementInputIndex()
                resetInputValue()
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
        updateCompletedWord(value, id)
    }, [value]);

    useEffect(() => {
      if(evaluateRow && rowId === (rowIndex - 1)) {
        setEvaluateInput(true)
        updateEvaluateRow(false)
      }
    }, [evaluateRow]);
    
    return (
        <input
            value={value}
            disabled
            className={evaluateInput ? inputEvaluation : null}
        />
    )
}

export default WordleInput