import React from "react"
import WordleInput from "./WordleInput"

const WordleRow = ({ props }) => {
    const {
        wordleArray,
        value,
        inputIndex,
        setInputIndex,
        correctWord,
        setInputValue,
        rowId,
        rowIndex,
        evaluateRow,
        setEvaluateRow
    } = props;

    return (
        <div>
            {
                wordleArray.map((letter, key) =>
                    <WordleInput
                        key={key}
                        props={{
                            value,
                            id: key,
                            inputIndex,
                            setInputIndex,
                            correctLetter: letter,
                            correctWord,
                            setInputValue,
                            rowId,
                            rowIndex,
                            evaluateRow,
                            setEvaluateRow
                        }}
                    />)
            }
        </div>
    )
}

export default WordleRow