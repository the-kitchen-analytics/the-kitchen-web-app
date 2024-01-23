export const getLocalStorageSize = () => {

  let _lsTotal = 0,
    _xLen, _x

  for (_x in localStorage) {
    if (!Object.prototype.hasOwnProperty.call(localStorage, _x)) {
      continue
    }
    _xLen = ((localStorage[_x].length + _x.length) * 2)
    _lsTotal += _xLen
  }

  return (_lsTotal / 1024).toFixed(2)
}
