// Hooks
import { useEffect, useState } from 'react'
import CepFormHeader from './Header'
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

export default function CepForm({ updateDataCep }) {
  const [cep, setCep] = useState('')
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
    request(cep)
  }

  useEffect(() => {
    if (!error && data) updateDataCep(data)
  }, [data, error, updateDataCep])

  return (
    <S.Container>
      <CepFormHeader />
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
    </S.Container>
  )
}
