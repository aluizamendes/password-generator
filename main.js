// declare elements
const optionsEl = document.querySelectorAll("input[type='checkbox']")
const generateButton = document.getElementById("generatePassword")
const rangeEl = document.getElementById("passwordRange")
const passwordLengthEl = document.getElementById("passwordLength")
const inputPasswordResult = document.getElementById("password")
const copyButton = document.getElementById("copyBtn")
const passwordResultContainer = document.querySelector(".password-container")

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
    })
})

// generate random password
function generatePassword(passwordSelected) {

    // if no checkbox is checked
    if (!passwordSelected.length) {
        alert("Você precisa incluir no mínimo um tipo de caractere para gerar uma senha.")

    } else {

        passwordResultContainer.classList.add("active")
        inputPasswordResult.disabled = false

        let passString = passwordSelected.join("")

        for (let i = 0; i < Number(passwordRange) ; i++) {
            let randomCharIndex = getRandomNumber(passString.length)
    
            randomPassword.push(passString[randomCharIndex])
        }
    
        // display new random password on input
        inputPasswordResult.value = randomPassword.join("")
    }

    // clean
    randomPassword = []
}

// returns a random integer
function getRandomNumber(max) {
    return Math.floor(Math.random() * max)
}

// copy password to clipboard
function handleCopyButton() {    
    inputPasswordResult.select()    
    inputPasswordResult.setSelectionRange(0, 99999); // for mobile devices

    navigator.clipboard.writeText(inputPasswordResult.value)
}

generateButton.addEventListener("click", () => {    
    generatePassword(passwordSelected)
})

copyButton.addEventListener("click", handleCopyButton)

// tooltip
tippy('[data-tippy-content]', {
    trigger: "mouseenter focus",
    distance: 25,
    placement: "top",
    theme: "light",
    animate: "scale"
})