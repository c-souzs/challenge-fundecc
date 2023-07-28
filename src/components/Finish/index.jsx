// Styles
import * as S from './styles'

// Components
import FormButtonReturn from '../ui/Form/Button/Return'
import HeaderDiv from '../ui/HeaderDiv'

export default function Finish({ dataCep, resetStep }) {
  const {
    logradouro,
    complemento,
    bairro,
    localidade,
    uf,
    cep,
    ibge,
    gia,
    ddd,
    siafi,
  } = dataCep

  const emptyText = 'Item não informado.'
  return (
    <>
      <HeaderDiv
        title="Informações de endereço 🏠"
        description="Agora sim, suas informações de endereço estão completas. Parabéns! Caso deseje buscar informações de um novo endereço, clique em Recomeçar."
      />
      <S.AddressMain>
        <S.Paddress>
          📍{logradouro}, {complemento}, {bairro}
        </S.Paddress>
        <S.Paddress>
          📍 {localidade}-{uf} | {cep}
        </S.Paddress>
      </S.AddressMain>
      <S.ListCuriosities>
        <li>IBGE: {ibge || emptyText}</li>
        <li>Gia: {gia || emptyText}</li>
        <li>DDD: {ddd || emptyText}</li>
        <li>Siafi: {siafi || emptyText}</li>
      </S.ListCuriosities>
      <S.ContainerButton>
        <div></div>
        <FormButtonReturn onClick={resetStep} />
      </S.ContainerButton>
    </>
  )
}
