export const handleInputChange = ({ target }, setterFunction) => {
  setterFunction(prevData => ({
    ...prevData,
    [target.name]: target.value
  }))
}