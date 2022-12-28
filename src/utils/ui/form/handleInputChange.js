const handleInputChange = ({ target }, setterFunction) => {
  setterFunction(prevData => ({
    ...prevData,
    [target.name]: target.value
  }))
}

export default handleInputChange