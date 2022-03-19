const inputNum = document.getElementById("num")
const tablaMulti = document.getElementById("tabla-multi")

function multi() {
  const numero = parseInt(inputNum.value)
  
  let template = ''

  for (let i = 1; i <= 10; i++) {
      template += numero + "x" + i + "=" + numero * i + "<br>"
  }
  tablaMulti.innerHTML = template
}