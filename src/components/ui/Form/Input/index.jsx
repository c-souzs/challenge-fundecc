import * as S from './styles'

export default function Input({ label, ...rest }) {
  return (
    <S.Label>
      {label}
      <S.Input {...rest} />
    </S.Label>
  )
}
