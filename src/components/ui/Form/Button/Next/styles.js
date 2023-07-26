import styled from 'styled-components'

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  color: #fff;
  font-size: 0.875rem;
  line-height: 1.25rem;

  & svg {
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  &:not([disabled]):hover {
    svg {
      transform: translate3d(4px, 0, 0);
    }
  }

  &:disabled {
    opacity: 0.5;
    cursor: auto;
  }
`
