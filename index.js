/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
const converBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-output")
const volumeEL = document.getElementById("volume-output")
const massEl = document.getElementById("mass-output")

console.log("start value : " + inputEl.value)

converBtn.addEventListener("click", function() {
    run()
    console.log("button value : " + inputEl.value)
})

document.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        
        run()
        console.log("enter value : " + inputEl.value)
        // if (inputValue != null) {
        //     run()
        // }
        
    }
})

function getOutput() {
    const inputValue = inputEl.value
    
    lengthEl.textContent = `${inputValue} meters = ${converToFeet(inputValue)} feet | 
    ${inputValue} feet = ${convertToMeter(inputValue)} meters`
    
    volumeEL.textContent = `${inputValue} liters = ${convertToGallon(inputValue)} gallons | 
    ${inputValue} gallons = ${convertToLiter(inputValue)} liters`

    massEl.textContent = `${inputValue} kilos = ${convertToPound(inputValue)} pounds | 
    ${inputValue} pounds = ${convertToKg(inputValue)} kilos`
} 

function makeEmpty() {
    lengthEl.textContent = ""
 
}

function run() {
    const inputValue = inputEl.value
    if (inputValue == 0){
        makeEmpty()    
    } else {
        getOutput()    
    } 
}

function converToFeet(value) {
    feetValue = value * 3.281
    return feetValue.toFixed(3)
}

function convertToMeter(value) {
    meterValue = value / 3.281
    return meterValue.toFixed(3)
}

function convertToGallon(value) {
    gallonValue = value * 0.264
    return gallonValue.toFixed(3)
}

function convertToLiter(value) {
    literValue = value / 0.264
    return literValue.toFixed(3)
}

function convertToPound(value) {
    poundValue = value * 2.204
    return poundValue.toFixed(3)
}

function convertToKg(value) {
    kgValue = value / 2.204
    return kgValue.toFixed(3)
}