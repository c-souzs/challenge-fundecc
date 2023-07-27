// Hooks
import { useEffect, useState } from 'react'
import useFetch from '../../hooks/useViaCep'

// Styles
import * as S from './styles'

// Function util
import validateCep from '../../utils/validateCep'

// Components
import Loader from '../ui/Loader'
import FormErrorMessage from '../ui/Form/ErrorMessage'
import FormButtonNext from '../ui/Form/Button/Next'
import Input from '../ui/Form/Input'
import maskCep from '../../utils/maskCep'
import HeaderDiv from '../ui/HeaderDiv'

export default function CepForm({ cepTyped, updateDataCep, nextStep }) {
  const [cep, setCep] = useState(cepTyped)
  const [errorCep, setErrorCep] = useState(null)

  const { data, error, loading, request } = useFetch({
    messageError:
      'Erro ao buscar informações sobre o CEP. Verifique os campos e tente novamente.',
  })

  function onChangeInput(e) {
    setCep(e.target.value)
    if (errorCep) setErrorCep(null)
  }

  function handleSubmitCep(e) {
    e.preventDefault()

    const { empty, valid } = validateCep(cep)

    if (empty) {
      setErrorCep('Campo vazio.')
      return false
    }

    if (!valid) {
      setErrorCep('Insira um formato válido de CEP.')
      return false
    }

    setCep(maskCep(cep))

    if (cepTyped !== cep) request(cep)
    else nextStep()
  }

  useEffect(() => {
    if (!error && data) {
      updateDataCep(data)
      nextStep()
    }
  }, [data, error, updateDataCep, nextStep])

  return (
    <>
      <HeaderDiv
        title="Preencha seu CEP"
        description="Vamos buscar algumas informações para facilitar seu cadastro."
      />
      <form onSubmit={handleSubmitCep}>
        <Input
          label="Cep"
          placeholder="37200-200"
          value={cep}
          onChange={onChangeInput}
          disabled={loading}
        />
        {errorCep && <FormErrorMessage>{errorCep}</FormErrorMessage>}
        <S.ContainerButton>
          <div>
            {loading && <Loader />}
            {error && <FormErrorMessage>{error}</FormErrorMessage>}
          </div>
          <FormButtonNext />
        </S.ContainerButton>
      </form>
    </>
  )
}
