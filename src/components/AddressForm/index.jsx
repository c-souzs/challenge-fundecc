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
import FormHeader from '../ui/Form/Header'

export default function AddressForm({
  dataCep,
  updateKeyDataCepForm,
  dataCepForm,
  updateDataCep,
  nextStep,
  backStep,
}) {
  const [showAlertInputRequired, setShowAlertInputRequired] = useState(false)

  // Valida os dados que o usuário atualizou
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
      <FormHeader
        title="Complete as informações do seu endereço"
        description={
          !hasEmptyKey(dataCep)
            ? 'Todos os campos do seu endereço já estão completo. Clique em avançar para finalizar.'
            : 'Preencha todos os campos obrigatórios para avançar.'
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
