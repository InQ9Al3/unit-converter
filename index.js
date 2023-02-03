/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")

const converBtn = document.getElementById("convert-btn")

converBtn.addEventListener("click", function() {
    const inputValue = inputEl.value
    console.log(inputValue)
    console.log(
        converToFeet(inputValue),
        convertToMeter(inputValue),
        convertToGallon(inputValue),
        convertToLiter(inputValue),
        convertToPound(inputValue),
        convertToKg(inputValue)
    )
})

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