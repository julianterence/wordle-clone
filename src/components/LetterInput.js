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
        if (props.id === props.focusedInput[0] && props.focusedRow) {
            setInputValue(buttonPressed)
            props.setFocusedInput(prevFocusedInput => {
                return [prevFocusedInput[0] + 1, prevFocusedInput[1]]
            })
          }
    }, [buttonPressed])

    return (
        <Input
            ref={inputElement}
            value={inputValue}
            type="text"
            maxLength={1}
            disabled={true}
            $inputState={determineInputState()}
        />
    )
}

export default LetterInput