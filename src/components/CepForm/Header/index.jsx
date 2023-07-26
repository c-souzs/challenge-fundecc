// Styles
import * as S from './styles'

// Components
import Description from '../../ui/Description'
import Title from '../../ui/Title'

export default function CepFormHeader() {
  return (
    <S.Header>
      <Title>Preencha seu CEP</Title>
      <Description>
        Vamos buscar algumas informações para facilitar seu cadastro.
      </Description>
    </S.Header>
  )
}
