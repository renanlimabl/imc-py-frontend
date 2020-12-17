const form = document.querySelector('#form-imc')
let textImc = document.querySelector('#imc')
let textMsg = document.querySelector('#msg')


form.addEventListener('submit', (e) => {
  e.preventDefault();
  let altura = document.querySelector('#altura').value
  let peso = document.querySelector('#peso').value
  if (altura.includes(".") || altura.includes(',') || peso.includes(".") || peso.includes(',')) {

    if (altura.includes(',') || peso.includes(',')) {
      altura = altura.replace(',', '.')
      peso = peso.replace(',', '.')
    }


    axios.post('https://imc-py-backend.herokuapp.com/',
      {
        "altura": parseFloat(altura),
        "peso": parseFloat(peso),
      }).then((r) => {
        textImc.innerHTML = `Seu IMC é: ${r.data['imc:']}`
        textMsg.innerHTML = `Classificação: ${r.data["msg:"]}`
      })



    return
  }
  console.log('Digite sua altura/peso, ex: 1,79')
})

