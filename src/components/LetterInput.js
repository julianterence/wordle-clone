import { useState, useEffect, useRef } from "react"
import { Input } from "../styledComponents/LetterInput"

const LetterInput = ({ props }) => {
    const [inputValue, setInputValue] = useState('')
    const [isCorrect, setIsCorrect] = useState(false)
    const [isWrongPlace, setIsWrongPlace] = useState(false)
    const [isFocused, setIsFocused] = useState(props.id === props.focusedInput[0] && props.focusedRow)
    const inputElement = useRef(null);
    const requiredLetter = props.letter
    const requiredWord = props.wordToGuess
    const { buttonPressed } = props

    const changeHandler = (event) => {
        const { value } = event.target
        console.log(value)
        // const upperCaseValue = value.toUpperCase()

        // setInputValue(upperCaseValue)
        // checkLetter(upperCaseValue)
    }

    const checkLetter = (letter) => {
        setIsCorrect(letter === requiredLetter)
        setIsWrongPlace(requiredWord.includes(letter) && letter !== requiredLetter)
    }

    const determineInputState = () => {
        if (props.disabled) {
            return isCorrect ? 'correct' : isWrongPlace ? 'placement' : 'incorrect'
        }
    }

    useEffect(() => {
        console.log(props.id === props.focusedInput[0] && props.focusedRow)
        if (props.id === props.focusedInput[0] && props.focusedRow) {
            setInputValue(buttonPressed)
          }
    }, [])

    return (
        <Input
            ref={inputElement}
            value={inputValue}
            type="text"
            maxLength={1}
            disabled={true}
            onChange={changeHandler}
            $inputState={determineInputState()}
            buttonPressed={buttonPressed}
        />
    )
}

export default LetterInput