const resultado = document.querySelector('#resultado')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')

const calcularIMC = () => {
    if (altura.value != '' && peso.value != '') {
        const imc = (peso.value / (altura.value * altura.value)).toFixed(2)
        let classificacao = ''
        let cor = ''

        if (imc < 18.5) {
            classificacao = "Abaixo do peso"
            cor = 'blue'
        }
        else if (imc < 25) {
            classificacao = "Peso Normal"
            cor = 'green'
        }
        else if (imc < 30) {
            classificacao = "Sobrepeso"
            cor = 'orange'
        }
        else if (imc >=30) {
            classificacao = "Obesidade"
            cor = 'red'
        }

        resultado.innerHTML = `IMC: ${imc} (${classificacao})`
        resultado.style.color = cor;
    }
    else {
        resultado.innerHTML = 'Preencha os campos'
        resultado.style.color = '';
    }
}