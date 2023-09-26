const numberBtn = document.querySelectorAll('[data-number]');
const mathOperations = document.querySelectorAll('[data-math]');
const clearBtn = document.querySelector('[data-clear]');
const deleteBtn = document.querySelector('[data-delete]');
const equalsBtn = document.querySelector('[data-equals]');
const topOperandTextElement = document.querySelector('[data-top]');
const bottomOperandTextElement = document.querySelector('[data-bottom]');



class Calculator{
    constructor(topOperandTextElement, bottomOperandTextElement){
        this.topOperandTextElement = topOperandTextElement
        this.bottomOperandTextElement = bottomOperandTextElement
        this.clear()
    } 

    appendNumber(number){
        if (number === '.' && this.bottomOperand.includes('.')){
            return
        }
        this.bottomOperand = this.bottomOperand.toString() + number.toString()
    }
    
    chooseMathOperation(operation) {
        if(this.bottomOperand === ''){
            return
        }
        if(this.topOperand !== ''){
            this.compute()
        }
    this.operation = operation
    this.topOperand = this.bottomOperand
    this.bottomOperand = ''
    }
    
    compute(){
    let computation
    const top = parseFloat(this.topOperand)
    const bottom = parseFloat(this.bottomOperand)
    if ((top == NaN)||(bottom == NaN) ){
        return
    }
    switch(this.operation){
        case '+' : computation = top + bottom
        break;
        case '-' : computation = top - bottom
        break;
        case '*' : computation = top * bottom
        break;
        case '/' : computation = top / bottom
        break;
        default: return
    }
    this.bottomOperand = computation
    this.operation = undefined
    this.topOperand = ''
    }
    
    clear(){
        this.topOperand = ''
        this.bottomOperand = ''
        this.operation = undefined
    }
    
    del(){
    this.bottomOperand = this.bottomOperand.toString().slice(0, -1)
    }

    
    displayNumber(number){
        const stringNumber = number.toString()
        const integer = parseFloat(stringNumber.split('.')[0])
        const decimal = stringNumber.split('.')[1]
        let intergerDisplay
        if(isNaN(integer)){
            intergerDisplay = ''
        }else{
            intergerDisplay = integer.toLocaleString('en', {maximumFractionDigits: 0 })
        }
        if (decimal != null){
            return `${intergerDisplay}.${decimal}`
        }else{
            return intergerDisplay
        }
    }
    
    updateDisplay(){
        this.bottomOperandTextElement.innerText = this.displayNumber(this.bottomOperand)
        if(this.operation != null){
            this.topOperandTextElement.innerText = `${this.displayNumber(this.topOperand)} ${this.operation}`
        }else{
            this.topOperandTextElement.innerText = ''
        }
    }
}

const calculator = new Calculator(topOperandTextElement, bottomOperandTextElement)

numberBtn.forEach(button =>{
    button.addEventListener("click", () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

mathOperations.forEach(button =>{
    button.addEventListener("click", () => {
        calculator.chooseMathOperation (button.innerText)
        calculator.updateDisplay()
    })
})

equalsBtn.addEventListener('click', (button)=>{
    calculator.compute()
    calculator.updateDisplay()
})

deleteBtn.addEventListener('click', (button)=>{
    calculator.del()
    calculator.updateDisplay()
})

clearBtn.addEventListener('click', (button)=>{
    calculator.clear()
    calculator.updateDisplay()
})
