import styled from 'styled-components'

export const Title = styled.h1`
  font-size: 1.875rem;
  line-height: 2.25rem;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 12px;

  &::before {
    display: block;
    content: '';
    height: 3px;
    width: 32px;
    border-radius: 4px;
    background-color: var(--color-primary);
  }
`
