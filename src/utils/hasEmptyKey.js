export default function hasEmptyKey(obj) {
  for (const key in obj) {
    if (obj[key] === '') {
      return true
    }
  }
  return false
}
