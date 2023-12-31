// Styles
import * as S from './styles'

// Icon
import { CaretLeft } from '@phosphor-icons/react'

export default function FormButtonBack({ ...rest }) {
  return (
    <S.Button {...rest}>
      <CaretLeft size={32} color="#ef4444" />
      Voltar
    </S.Button>
  )
}
