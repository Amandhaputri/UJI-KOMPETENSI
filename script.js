const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
    calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        updateScreen(event.target.value)
    })
})

let prevNumber = ''
let calculationOperator = ''
let CurrentNumber = '0'

const inputNumber = (number) => {
    if (CurrentNumber === '0') {
        CurrentNumber = number
    } else {
        CurrentNumber += number
    }
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(CurrentNumber)
    })
})

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        console.log(event.target.value)
        inputOperator(event.target.value)
    })
})

const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = CurrentNumber
    }
    calculationOperator = operator
    CurrentNumber = '0'
}

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
    calculate()
    console.log('equal button is pressed')
    updateScreen(CurrentNumber)
})

const calculate = () => {
    let result = ''
    switch(calculationOperator) {
        case "+":
            result = parseFloat (prevNumber) + parseFloat (CurrentNumber)
            break
        case "-":
            result = parseFloat (prevNumber) - parseFloat (CurrentNumber)
            break
        case "*":
            result = parseFloat (prevNumber) * parseFloat (CurrentNumber)
            break
        case "/":
            result = parseFloat (prevNumber) / parseFloat (CurrentNumber)
            break
        default:
            break
    }
    CurrentNumber = result
    calculationOperator = ''
}

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(CurrentNumber)
    console.log('AC button is pressed')
})

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    CurrentNumber = '0'
}

const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
    console.log(event.target.value)
    inputDecimal(event.target.value)
    updateScreen(CurrentNumber)
})

inputDecimal = (dot) => {
    if(CurrentNumber.includes('.')) {
        return
    }
    CurrentNumber += dot
}

const percentageBtn = document.querySelector('.percentage')

percentageBtn.addEventListener('click', (event) => {
    percentage ()
    updateScreen(CurrentNumber)
})

const percentage = () => {
    calculationOperator = '%'
    CurrentNumber = CurrentNumber / 100
}