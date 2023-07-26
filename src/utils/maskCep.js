export default function maskCep(cep) {
  let cepMask

  cepMask = cep.replace(/\D/g, '')
  cepMask = cep.replace(/(\d{5})(\d)/, '$1-$2')

  return cepMask
}
