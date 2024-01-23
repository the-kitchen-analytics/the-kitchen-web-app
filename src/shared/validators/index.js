export const validate = (object, validators = []) => {
  if (!object) {
    return false
  }

  return validators.every(validator => validator(object))
}