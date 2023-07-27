// Styles
import { GroupInputs, TitleOptional } from '../styles'

// Components
import Input from '../../ui/Form/Input'

export default function GroupOptional({
  dataCep,
  dataCepForm,
  updateKeyDataCepForm,
}) {
  const { ibge, gia, ddd, siafi } = dataCep
  const {
    ibge: ibgeForm,
    gia: giaForm,
    ddd: dddForm,
    siafi: siafiForm,
  } = dataCepForm

  return (
    <div>
      <TitleOptional>Informações opcionais</TitleOptional>
      <GroupInputs>
        <Input
          label="Ibge"
          placeholder="XXXXXX"
          type="number"
          min="1"
          disabled={ibge.length}
          value={ibgeForm}
          onChange={(e) => updateKeyDataCepForm('ibge', e.target.value)}
        />
        <Input
          label="Gia"
          placeholder="XXXX"
          type="number"
          min="1"
          disabled={gia.length}
          value={giaForm}
          onChange={(e) => updateKeyDataCepForm('gia', e.target.value)}
        />
        <Input
          label="DDD"
          placeholder="XX"
          type="number"
          min="11"
          max="99"
          disabled={ddd.length}
          value={dddForm}
          onChange={(e) => updateKeyDataCepForm('ddd', e.target.value)}
        />
        <Input
          label="Siafi"
          placeholder="XXXX"
          type="number"
          min="1"
          disabled={siafi.length}
          value={siafiForm}
          onChange={(e) => updateKeyDataCepForm('siafi', e.target.value)}
        />
      </GroupInputs>
    </div>
  )
}
