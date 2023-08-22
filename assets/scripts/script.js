const number1 = document.getElementById('number-1')
const number2 = document.getElementById('number-2')
const add = document.getElementById('add')

const check = document.getElementById('check')

console.log('numer1', number1.value)
console.log('number', number2.value)

const arrowFucntino = () => {
  const result = parseInt(number1.value) + parseInt(number2.value)
  console.log(typeof parseInt(number1.value), typeof number2.value)

  add.value = result
}

// add.value(id)

check.addEventListener('click', arrowFucntino)
