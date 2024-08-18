function createcard(link , img , title ,  info) {
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
    main.insertAdjacentHTML("beforeend" , html)
}

createcard("https://harshagarwal4.github.io/Weather-app/" , "weather.jpg" , "Weather app" , "This is a responsive weather web app in which you can see quick weather update")
createcard("https://harshagarwal4.github.io/Calculator/" , "calculator.jpg" , "Calculator" , "This is a responsive simple calculator made of HTML , CSS and Javascript")
createcard("https://harshagarwal4.github.io/Tic-Tac-Toe/" , "tictactoe.jpg" , "Tic Tac Toe" , "This is a responsive Tic tac toe game made if HTML , CSS and JS")
createcard("https://harshagarwal4.github.io/Currency-Converter/" , "currency.jpg" , "Currency Converter" , "This is a responsive Currency converter in which you can cinvert currencies of 31 different countries")
createcard("https://harshagarwal4.github.io/Clock/" , "clock.jpg" , "Analog, Digital clock and Stopwatch" , "This is a responsive Analog , digital clock and stopwatch made of HTML , CSS and JS")