// Styles
import Description from '../Description'
import Title from '../Title'
import * as S from './styles'

// Components

export default function HeaderDiv({ title, description }) {
  return (
    <S.Header>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </S.Header>
  )
}
