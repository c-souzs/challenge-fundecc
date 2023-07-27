import styled from 'styled-components'

export const AddressMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const Paddress = styled.p`
  font-size: 1.25rem; /* 20px */
  line-height: 1.75rem; /* 28px */
`

export const ListCuriosities = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;

  li {
    display: flex;
    gap: 4px;
    align-items: center;
  }

  li::before {
    display: block;
    content: '📍';
    border-radius: 50%;
  }
`
export const ContainerButton = styled.div`
  width: 100%;
  margin-top: 32px;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: end;
`
