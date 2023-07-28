// Hooks
import { useState } from 'react'

// Styles
import * as S from './styles'

// Components
import FormButtonBack from '../ui/Form/Button/Back'
import FormButtonNext from '../ui/Form/Button/Next'
import GroupRequired from './GroupRequired'
import GroupOptional from './GroupOptional'
import FormErrorMessage from '../ui/Form/ErrorMessage'
import hasEmptyKey from '../../utils/hasEmptyKey'
import HeaderDiv from '../ui/HeaderDiv'

export default function AddressForm({
  dataCep,
  updateKeyDataCepForm,
  dataCepForm,
  updateDataCep,
  nextStep,
  backStep,
}) {
  const [showAlertInputRequired, setShowAlertInputRequired] = useState(false)

  // Valida se os campos obrigatórios foram preenchidos e atualiza o dataCep
  function handleSubmitAddress(e) {
    e.preventDefault()

    const { logradouro, bairro, complemento } = dataCepForm

    const validInputsRequired = !!(
      logradouro.length &&
      bairro.length &&
      complemento.length
    )
    setShowAlertInputRequired(!validInputsRequired)

    if (validInputsRequired) {
      updateDataCep(dataCepForm)
      nextStep()
    }
  }

  return (
    <>
      <HeaderDiv
        title="Complete as informações do seu endereço"
        description={
          !hasEmptyKey(dataCep)
            ? 'Todos os campos do seu endereço já estão completos, graças à API ViaCep. Clique em avançar para prosseguir.'
            : 'Conseguimos algumas informações do seu endereço graças à API ViaCep, mas há alguns campos incompletos. Para prosseguir, faça o preenchimento dos campos obrigatórios.'
        }
      />
      <form onSubmit={handleSubmitAddress}>
        <GroupRequired
          dataCep={dataCep}
          dataCepForm={dataCepForm}
          updateKeyDataCepForm={updateKeyDataCepForm}
        />
        <GroupOptional
          dataCep={dataCep}
          dataCepForm={dataCepForm}
          updateKeyDataCepForm={updateKeyDataCepForm}
        />
        {showAlertInputRequired && (
          <FormErrorMessage>Preencha os campos obrigatórios.</FormErrorMessage>
        )}
        <S.ContainerButtons>
          <FormButtonBack type="button" onClick={backStep} />
          <FormButtonNext />
        </S.ContainerButtons>
      </form>
    </>
  )
}
