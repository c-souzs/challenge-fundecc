// Hook
import { useState } from 'react'

// Styles
import * as S from './styles/app'

// Components
import CepForm from './components/CepForm'

function App() {
  const [dataCep, setDataCep] = useState(null)

  function updateDataCep(data) {
    setDataCep(data)
  }

  return (
    <main>
      <S.Section>
        <S.Container>
          <CepForm updateDataCep={updateDataCep} />
        </S.Container>
      </S.Section>
    </main>
  )
}

export default App
