const generateRandomNumber = () => {
  num = Math.floor(1000 + Math.random() * 9000)

  str = String(num)

  while (str.charAt(2) === '0') {
    num = generateRandomNumber()
  }

  return num
}

const setNumberField = (event) => {
  if (event) {
    event.preventDefault()
  }

  document.getElementById('numberField').value = generateRandomNumber()
}

window.onload = () => {
  setNumberField(null)
}
