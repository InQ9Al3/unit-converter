/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
// const actions = require("./modules")
// const multiply = actions.multiply
// const divide = actions.divide
const meterWithFeet = 3.281
const literWithGallon = 0.264
const kgWithPound = 2.204

const inputEl = document.getElementById("input-el")
const converBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-output")
const volumeEL = document.getElementById("volume-output")
const massEl = document.getElementById("mass-output")

console.log("start value : " + inputEl.value)

converBtn.addEventListener("click", function () {
  run()
  console.log("button value : " + inputEl.value)
})

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    run()
    console.log("enter value : " + inputEl.value)
  }
})

const getOutput = () => {
  const inputValue = inputEl.value

  lengthEl.textContent = `${inputValue} meters = ${multiply(
    inputValue,
    meterWithFeet
  )} feet | 
    ${inputValue} feet = ${divide(inputValue, meterWithFeet)} meters`

  volumeEL.textContent = `${inputValue} liters = ${multiply(
    inputValue,
    literWithGallon
  )} gallons | 
    ${inputValue} gallons = ${divide(inputValue, literWithGallon)} liters`

  massEl.textContent = `${inputValue} kilos = ${multiply(
    inputValue,
    kgWithPound
  )} pounds | 
    ${inputValue} pounds = ${divide(inputValue, kgWithPound)} kilos`
}

function makeEmpty() {
  lengthEl.textContent = ""
  volumeEL.textContent = ""
  massEl.textContent = ""
}

const run = () => {
  const inputValue = inputEl.value
  if (inputValue == 0) {
    makeEmpty()
  } else {
    getOutput()
  }
}

// const convertToFeet = (value) => (value * 3.281).toFixed(3)
// const convertToMeter = (value) => (value / 3.281).toFixed(3)
// const convertToGallon = (value) => (value * 0.264).toFixed(3)
// const convertToLiter = (value) => (value / 0.264).toFixed(3)
// const convertToPound = (value) => (value * 2.204).toFixed(3)
// const convertToKg = (value) => (value / 2.204).toFixed(3)
const multiply = (value, num) => (value * num).toFixed(3)
const divide = (value, num) => (value / num).toFixed(3)
