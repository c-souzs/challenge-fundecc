// Styles
import * as S from './styles'

// Icon
import { CaretRight } from '@phosphor-icons/react'

export default function FormButtonNext({ ...rest }) {
  return (
    <S.Button {...rest}>
      Avançar
      <CaretRight size={32} color="#14b8a6" />
    </S.Button>
  )
}
