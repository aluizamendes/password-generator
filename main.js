// declare elements
const optionsEl = document.querySelectorAll("input[type='checkbox']")
const generateButton = document.getElementById("generatePassword")
const rangeEl = document.getElementById("passwordRange")
const passwordLengthEl = document.getElementById("passwordLength")

// global variables
let passwordRange = rangeEl.value
let passwordSelected = ["abcdefghijklmnopqrstuvwxyz"]
let randomPassword = []

// show current password length to user
passwordLengthEl.innerText = passwordRange

// update the selected password range number
rangeEl.addEventListener("input", () => {
    passwordRange = rangeEl.value
    passwordLengthEl.innerText = passwordRange
})


optionsEl.forEach(el => {
    el.addEventListener("click", (e) => {

        const target = e.target
        let isChecked = el.checked

        if (isChecked) {
            passwordSelected.push(target.value)

        } else {
            // remove from array
            let elementClicked = target.value
            let index = passwordSelected.indexOf(elementClicked)

            passwordSelected.splice(index, 1)
        }

        console.log(passwordSelected)
    })
})

// generate random password
function generatePassword(passwordSelected) {
    let passString = passwordSelected.join("")

    for (let i = 0; i < Number(passwordRange) ; i++) {
        let randomCharIndex = getRandomNumber(passString.length)

        console.log(randomCharIndex)
        randomPassword.push(passString[randomCharIndex])
    }

    console.log("Tamanho da string dos elementos selecionados: ", passString.length)

    console.log(passString)
    console.log(randomPassword)

}

// returns a random integer from 1 to 100
function getRandomNumber(max) {
    return Math.floor(Math.random() * max)
}

generateButton.addEventListener("click", () => {
    generatePassword(passwordSelected)
})