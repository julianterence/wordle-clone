import styled from "styled-components"

export const Input = styled.input`
    margin: 10px;
    border: solid 2px var(--input-border);
    width: 50px;
    height: 50px;
    text-align: center;
    font-size: 2rem;
    appearance: none;
    color: white;
    background-color: ${props => {
        if (props.disabled) {
            switch (props.$inputState) {
                case 'correct':
                    return 'orange'
                case 'incorrect':
                    return 'black'
                case 'placement':
                    return 'blue'
                default:
                    return 'transparent'
            }
        } else {
            return 'transparent'
        }
    }}
`