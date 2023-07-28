// Styles
import * as S from './styles'

// Icon
import { ArrowBendRightUp } from '@phosphor-icons/react'

export default function FormButtonReturn({ ...rest }) {
  return (
    <S.Button {...rest}>
      Recomeçar
      <ArrowBendRightUp size={32} color="#14b8a6" />
    </S.Button>
  )
}
