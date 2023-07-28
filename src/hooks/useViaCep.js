// Util request
import axios from 'axios'

// Hooks
import { useCallback, useState } from 'react'

/*
    Hook para trabalhar com o consumo da API via cep.
    Tratamento de erro caso o CEP não exista ou não conste na base de dados
    Otimização usando o useCallback, pois evita que a request seja recriada a cada renderização do componente que consume o hook.
*/
export default function useViaCep({ messageError }) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  // Recebe um cep que é inserido na URL da requisição e um objeto de opções que é usado para setar algumas opções da biblioteca axios
  const request = useCallback(
    async (cep, options) => {
      let response
      let json

      try {
        setData(null)
        setError(null)
        setLoading(true)

        response = await axios.get(
          `https://viacep.com.br/ws/${cep}/json/`,
          options,
        )

        const hasError = response.data?.erro
        if (hasError) throw new Error(messageError)

        json = response.data
      } catch (error) {
        json = null
        setError(error.message)
      } finally {
        setLoading(false)
        setData(json)
      }

      return {
        response,
        json,
      }
    },
    [messageError],
  )

  return {
    data,
    error,
    loading,
    request,
  }
}
