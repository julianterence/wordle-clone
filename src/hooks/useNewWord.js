import { word } from "../data/allWords.js"

export const useNewWord = (rows) => {
    const WORD_TO_GUESS = word.toUpperCase()
    const WORD_TO_GUESS_ARRAY = WORD_TO_GUESS.split('')
    const ROWS_TO_GUESS = rows

    return {
        WORD_TO_GUESS,
        WORD_TO_GUESS_ARRAY,
        ROWS_TO_GUESS
    }
}