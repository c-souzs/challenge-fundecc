export default function validateCep(cep) {
  let empty = false
  let valid = false

  if (!cep.length) empty = true

  if (!empty) valid = /^(?!([0-9])\1{7})\d{5}-?\d{3}$/.test(cep)

  return {
    empty,
    valid,
  }
}
