// Hook
import { useEffect, useState } from 'react'

// Styles
import * as S from './styles/app'

// Components
import CepForm from './components/CepForm'
import AddressForm from './components/AddressForm'
import Finish from './components/Finish'

const templateDataCep = {
  cep: '',
  logradouro: '',
  complemento: '',
  bairro: '',
  localidade: '',
  uf: '',
  ibge: '',
  gia: '',
  ddd: '',
  siafi: '',
}

function App() {
  // Controla as informações do CEP que a API fornece
  const [dataCep, setDataCep] = useState(templateDataCep)

  function updateDataCep(data) {
    setDataCep({
      ...data,
    })
  }

  // Controla as informações do AddressForm
  const [dataCepForm, setDataCepForm] = useState(dataCep)

  // Atualiza as informações do AddressForm, a medida que o usuário vai fazendo alterações
  function updateKeyDataCepForm(key, value) {
    setDataCepForm((old) => ({
      ...old,
      [key]: value,
    }))
  }

  // Atualiza dataCepForm pois sua base é o dataCep
  useEffect(() => {
    setDataCepForm(dataCep)
  }, [dataCep])

  // Armazena a etapa atual do fluxo do formulário
  const [currentStep, setCurrentStep] = useState(0)

  function nextStep() {
    setCurrentStep(currentStep + 1)
  }

  function backStep() {
    setCurrentStep(currentStep - 1)
  }

  function resetStep() {
    setCurrentStep(0)
    setDataCep(templateDataCep)
  }

  // Atualiza o titulo da página
  useEffect(() => {
    document.title = 'Desafio FUNDECC | Caio Souza'
  }, [])

  const componentsStepsAddress = [
    <CepForm
      cepTyped={dataCep.cep}
      updateDataCep={updateDataCep}
      nextStep={nextStep}
      key="cepform"
    />,
    <AddressForm
      dataCep={dataCep}
      updateDataCep={updateDataCep}
      dataCepForm={dataCepForm}
      updateKeyDataCepForm={updateKeyDataCepForm}
      backStep={backStep}
      nextStep={nextStep}
      key="addressform"
    />,
    <Finish dataCep={dataCep} resetStep={resetStep} key="finishaddress" />,
  ]

  return (
    <main>
      <S.Section>
        <S.Container>{componentsStepsAddress[currentStep]}</S.Container>
      </S.Section>
    </main>
  )
}

export default App
