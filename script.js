let prevNumber=''
let calculationOperator=''
let currentNumber='0'
const calculatorScreen = document.querySelector('.calculator-screen')
const updateScreen=(number)=>{
    calculatorScreen.value=number
}

const inputNumber=(number)=>{
    if(currentNumber==='0'){
        currentNumber=number
    }else {
        currentNumber+=number
    }
}

const numbers = document.querySelectorAll('.number')
numbers.forEach((number)=>{
    number.addEventListener("click", (event)=>{
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

const inputOperator=(operator)=>{
    if(calculationOperator===''){
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber='0'
}

const operators=document.querySelectorAll('.operator')
operators.forEach((operator)=>{
    operator.addEventListener("click", (event)=>{
        inputOperator(event.target.value)
    })
})
const hitung =() =>{
    let hasil =''
    switch(calculationOperator){
        case "+":
            hasil = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            hasil = prevNumber - currentNumber
            break
        case "/":
            hasil = prevNumber / currentNumber
            break
        case "*":
            hasil = prevNumber * currentNumber
            break
        default:
            break
    }
    currentNumber=hasil
    calculationOperator=''
}
const equalSign=document.querySelector('.equal-sign')
equalSign.addEventListener('click', ()=>{
    hitung()
    updateScreen(currentNumber)
})
const hapusAll=()=>{
    prevNumber =''
    calculationOperator =''
    currentNumber =''
}

const clearBtn=document.querySelector('.all-clear')
clearBtn.addEventListener("click",()=>{
hapusAll()
updateScreen(currentNumber)
})

inputDecimal=(dot)=>{
    if(currentNumber.includes('.')){
        return
    }
    currentNumber += dot
}

const decimal=document.querySelector('.decimal')
decimal.addEventListener('click', (event)=>{
inputDecimal(event.target.value)
updateScreen(currentNumber)
})