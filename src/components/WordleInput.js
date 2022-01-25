import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"

function WordleInput({ props }) {
    const [value, setValue] = useState('')
    const [isCorrect, setIsCorrect] = useState(false)
    const [isWrongPlace, setIsWrongPlace] = useState(false)
    const [evaluateInput, setEvaluateInput] = useState(false)

    const controls = useAnimation()

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

    const revealSequence = () => {
        controls.start({
            rotateX: [0, -90, 0],
            transition: { delay: id * 0.5 }
        })
        controls.start({ 
            backgroundColor: isCorrect ? ["#121213", "#121213", "#f5793a"] : "#121213",
            borderColor: isCorrect ? ["#121213", "#121213", "#f5793a"] : "#121213",
            transition: { delay: id * 0.7, times: [0, 0.5, 1] }
        })
    }

    useEffect(() => {
        if (evaluateRow && rowId === (rowIndex - 1)) {
            setEvaluateInput(true)
            updateEvaluateRow(false)
            revealSequence()
        }
    }, [evaluateRow]);

    return (
        <motion.input
            value={value}
            disabled
            className={evaluateInput ? inputEvaluation : null}
            animate={controls}
        />
    )
}

export default WordleInput