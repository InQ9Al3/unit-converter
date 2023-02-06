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

  lengthEl.textContent = `${inputValue} meters = ${convertToFeet(
    inputValue
  )} feet | 
    ${inputValue} feet = ${convertToMeter(inputValue)} meters`

  volumeEL.textContent = `${inputValue} liters = ${convertToGallon(
    inputValue
  )} gallons | 
    ${inputValue} gallons = ${convertToLiter(inputValue)} liters`

  massEl.textContent = `${inputValue} kilos = ${convertToPound(
    inputValue
  )} pounds | 
    ${inputValue} pounds = ${convertToKg(inputValue)} kilos`
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

const convertToFeet = (value) => (value * 3.281).toFixed(3)
const convertToMeter = (value) => (value / 3.281).toFixed(3)
const convertToGallon = (value) => (value * 0.264).toFixed(3)
const convertToLiter = (value) => (value / 0.264).toFixed(3)
const convertToPound = (value) => (value * 2.204).toFixed(3)
const convertToKg = (value) => (value / 2.204).toFixed(3)
