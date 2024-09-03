function createcard(link, img, title, info) {
    let html = ` <a target="_blank" href="${link}">
             <div class="card">
                <div class="img">
                    <img src="assets/${img}" alt="">
                </div>
                <div class="info">
                    <h2>${title}</h2>
                    <p>${info}</p>
                </div>
            </div>
        </a>`
    let main = document.getElementById("m")
    main.insertAdjacentHTML("beforeend", html)
}

createcard("https://harshagarwal4.github.io/Weather-app/", "weather.jpg", "Weather app", "This is a responsive weather web app in which you can see quick weather update")
createcard("https://harshagarwal4.github.io/Calculator/", "calculator.jpg", "Calculator", "This is a responsive simple calculator made of HTML , CSS and Javascript")
createcard("https://harshagarwal4.github.io/Tic-Tac-Toe/", "tictactoe.jpg", "Tic Tac Toe", "This is a responsive Tic tac toe game made if HTML , CSS and JS")
createcard("https://harshagarwal4.github.io/Currency-Converter/", "currency.jpg", "Currency Converter", "This is a responsive Currency converter in which you can cinvert currencies of 31 different countries")
createcard("https://harshagarwal4.github.io/Clock/", "clock.jpg", "Analog, Digital clock and Stopwatch", "This is a responsive Analog , digital clock and stopwatch made of HTML , CSS and JS")
createcard("https://harshagarwal4.github.io/Todo_List/", "todo.jpg", "Todo List", "This is a responsive Todo List Web app made up of HTML , CSS and JS")

document.designMode = "off"

setInterval(() => {
    if (document.designMode === "on") {
        document.designMode = "off"
    }
}, 10);

let passwordBox = document.querySelector(".password")
let password = document.getElementById("passwordinput")
let passu = document.getElementById("passu")
let exit = document.getElementById("exit")

function showbox() {
    passwordBox.setAttribute('style', 'display:flex;justify-content:center;align-items:center;flex-direction:column;gap:20px')
    password.focus()
}
function hidebox() {
    passwordBox.setAttribute('style', 'display:none;')
}

function preventkeys(e) {
    if (e.ctrlKey && (e.key == 's' || e.key == 'S')) {
        alert("save has been disabled")
        e.preventDefault()
    }
    if ((e.ctrlKey && (e.key == 'p' || e.key == 'P')) || (e.ctrlKey && e.shiftKey && e.key == 'P')) {
        alert("print has been disabled")
        e.preventDefault()
    }
    if (e.ctrlKey && e.shiftKey && (e.key == 'I' || e.key == 'i')) {
        alert('Developer tools have been disabled')
        e.preventDefault()
    }
    if (e.ctrlKey && e.shiftKey && (e.key == 'C' || e.key == 'c')) {
        alert('Developer inspect element have been disabled')
        e.preventDefault()
    }
    if (e.ctrlKey && e.shiftKey && (e.key == 'J' || e.key == 'j')) {
        alert('Developer console have been disabled')
        e.preventDefault()
    }
    if (e.ctrlKey && (e.key == 'u' || e.key == 'U')) {
        alert('View page source have been disabled')
        e.preventDefault()
    }
    if (e.key == 'F12' || e.key == 'f12') {
        alert("developer tools have been diabled")
        e.preventDefault()
    }
}

function preventContextMenu(e) {
    e.preventDefault();
    let state = confirm('Do you want to inspect page')
    if (state) {
        showbox()
    }
}

hidebox()
let check = true
function use() {
    if (check) {
        document.addEventListener('contextmenu', preventContextMenu);
        document.addEventListener('keydown', preventkeys);
    } else {
        document.removeEventListener('contextmenu', preventContextMenu);
        document.removeEventListener('keydown', preventkeys);
    }
}
use()

passu.addEventListener('click', () => {
    if (password.value == 'Ronaldo**100') {
        alert('Welcome Harsh')
        hidebox()
        check = false
        use()
        setTimeout(() => {
            check = true
            use()
        }, 5000);
    }
    else {
        alert('Acess denied')
        password.value = ''
    }
    password.value = ''
})

exit.addEventListener('click', () => {
    password.value = ''
    hidebox()
})
