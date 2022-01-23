import { useState, useEffect, useRef } from "react"
import { Input } from "../styledComponents/LetterInput"

const LetterInput = ({ props }) => {
    const { requiredLetter, keyboardInput, activeInput, WORD_TO_GUESS, inputIndex, setInputIndex } = props;

    const [inputValue, setInputValue] = useState('')
    const [isCorrect, setIsCorrect] = useState(false)
    const [isWrongPlace, setIsWrongPlace] = useState(false)
    const [isIncorrect, setIsIncorrect] = useState(false)
    
    const inputElement = useRef(null);

    // compare user input to required letter
    const determineInputState = (inputValue) => {
        if (inputValue === requiredLetter) {
            setIsCorrect(true)
            setIsWrongPlace(false)
            setIsIncorrect(false)
        } else if (WORD_TO_GUESS.includes(inputValue)) {
            setIsCorrect(false)
            setIsWrongPlace(true)
            setIsIncorrect(false)
        } else if (inputValue !== requiredLetter) {
            setIsCorrect(false)
            setIsWrongPlace(false)
            setIsIncorrect(true)
        } else {
            setIsCorrect(false)
            setIsWrongPlace(false)
            setIsIncorrect(false)
        }
    }

    useEffect(() => {
        if (activeInput) {
            setInputValue(keyboardInput)
            setInputIndex(prevInputIndex => prevInputIndex + 1)
            determineInputState(keyboardInput)
        }
    }, [keyboardInput])

    return (
        <Input
            ref={inputElement}
            value={inputValue}
            type="text"
            maxLength={1}
            disabled={true}
        />
    )
}

export default LetterInput