// Styles
import { GroupInputs, TitleOptional } from '../styles'

// Components
import Input from '../../ui/Form/Input'

export default function GroupRequired({
  dataCep,
  dataCepForm,
  updateKeyDataCepForm,
}) {
  const { cep, localidade, uf, logradouro, bairro, complemento } = dataCep
  const {
    logradouro: logradouroForm,
    bairro: bairroForm,
    complemento: complementoForm,
  } = dataCepForm
  return (
    <div>
      <TitleOptional>Informações obrigatórias</TitleOptional>
      <GroupInputs>
        <Input label="Cep" value={cep} disabled />
        <Input label="Localidade" value={localidade} disabled />
        <Input label="UF" value={uf} disabled />
      </GroupInputs>
      <GroupInputs>
        <Input
          label="Logradouro"
          placeholder="Rua, Avenida, Praça"
          disabled={logradouro.length}
          value={logradouroForm}
          onChange={(e) => updateKeyDataCepForm('logradouro', e.target.value)}
        />
        <Input
          label="Bairro"
          disabled={bairro.length}
          value={bairroForm}
          onChange={(e) => updateKeyDataCepForm('bairro', e.target.value)}
        />
        <Input
          label="Complemento"
          placeholder="Casa, Apartamento"
          disabled={complemento.length}
          value={complementoForm}
          onChange={(e) => updateKeyDataCepForm('complemento', e.target.value)}
        />
      </GroupInputs>
    </div>
  )
}
