
const elements = document.querySelectorAll(".calc-button")

const screen = document.getElementById('calc-screen')

const resetButton = document.querySelector('.reset-button')

let firstValue
let mathOperation
let secondValue

Array.from(elements).forEach(el => {
    el.addEventListener('click' , function() {
        const value =  el.textContent

        
        switch(value) {
            case "+":
            mathOperation = "+" 
            firstValue = screen.value
            screen.value = ""
            break;

            case "-": 
            mathOperation = "-" 
            firstValue = screen.value
            screen.value = ""
            break;

            case "/": 
            mathOperation = "/" 
            firstValue = screen.value
            screen.value = ""
            break;

            case "*": 
            mathOperation = "*" 
            firstValue = screen.value
            screen.value = ""
            break;

            case "=": 
            secondValue = screen.value
            switch (mathOperation){
                case "+":
                    screen.value = Number(firstValue) + Number(secondValue)
                    break
                    case "-":
                        screen.value = Number(firstValue) - Number(secondValue)
                        break
                        case "/":
                            screen.value = Number(firstValue) / Number(secondValue)
                            break   
                            case "*":
                                screen.value = Number(firstValue) * Number(secondValue)
                                break            

            }
            break;

            default: screen.value += value
        
        }


        
    })
})

resetButton.addEventListener('click', function(){
    screen.value= ""
})

