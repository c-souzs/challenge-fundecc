import styled from 'styled-components'

export const Label = styled.label`
  font-size: 1.125rem;
  font-family: 'Inter', sans-serif;
  display: flex;
  flex-direction: column;
  gap: 6px;
`

export const Input = styled.input`
  font-size: 1.125rem;
  font-family: 'Roboto', sans-serif;
  border-radius: 4px;
  padding: 10px 16px;
  border: 2px solid #000;
  outline: none;

  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &:disabled {
    color: #000;
  }

  &:not([disabled]):hover,
  &:not([disabled]):focus {
    border-color: #2fc790;
  }
`
