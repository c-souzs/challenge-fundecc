import FormButtonReturn from '../ui/Form/Button/Return'
import HeaderDiv from '../ui/HeaderDiv'

import * as S from './styles'

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
        description="Essas são suas informações de endereço."
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
