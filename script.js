function showmenu() {
    document.getElementById("show").classList.toggle("show")
    const img = document.getElementById("symbol")
    if (img.src.includes("assets/list.svg")) {
        img.src = "assets/cross.svg"
    }
    else {
        img.src = "assets/list.svg"
    }
}

let home = document.getElementById("homep")
let about = document.getElementById("aboutp")
let skill = document.getElementById("skillp")
let project = document.getElementById("projectp")
let contact = document.getElementById("contactp")


//navigation bar buttons
home.addEventListener("click", (e) => {
    e.preventDefault()
    document.getElementById("homeee").scrollIntoView({
        behavior: "smooth",
        block: 'center'
    });
})
about.addEventListener("click", (e) => {
    e.preventDefault()
    document.getElementById("aboutt").scrollIntoView({
        behavior: "smooth",
        block: 'center',
    });
})
skill.addEventListener("click", (e) => {
    e.preventDefault()
    document.getElementById("skilllls").scrollIntoView({
        behavior: "smooth",
        block: 'center'
    });
})
project.addEventListener("click", (e) => {
    e.preventDefault()
    document.getElementById("projecttt").scrollIntoView({
        behavior: "smooth",
        block: 'center'
    });
})
contact.addEventListener("click", (e) => {
    e.preventDefault()
    document.getElementById("contacttt").scrollIntoView({
        behavior: "smooth",
        block: 'center'
    });
})


//menu buttons

let home1 = document.getElementById("homeee1")
let about1 = document.getElementById("abouttt1")
let skill1 = document.getElementById("skilll1")
let project1 = document.getElementById("projecttt1")
let contact1 = document.getElementById("contacttt1")

home1.addEventListener("click", (e) => {
    e.preventDefault()
    document.getElementById("homeee").scrollIntoView({
        behavior: "smooth",
        block: 'start'
    });
    showmenu()
})
about1.addEventListener("click", (e) => {
    e.preventDefault()
    document.getElementById("aboutt").scrollIntoView({
        behavior: "smooth",
        block: 'start'
    });
    showmenu()
})
skill1.addEventListener("click", (e) => {
    e.preventDefault()
    document.getElementById("skilllls").scrollIntoView({
        behavior: "smooth",
        block: 'start'
    });
    showmenu()
})
project1.addEventListener("click", (e) => {
    e.preventDefault()
    document.getElementById("projecttt").scrollIntoView({
        behavior: "smooth",
        block: 'start'
    });
    showmenu()
})
contact1.addEventListener("click", (e) => {
    e.preventDefault()
    document.getElementById("contacttt").scrollIntoView({
        behavior: "smooth",
        block: 'start'
    });
    showmenu()
})

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual'
    window.addEventListener('DOMContentLoaded', (event) => {
        // window.location.hash = '';
        window.scrollTo(0, 0)

    })
}


//contact form

function submitForm(event) {
    event.preventDefault();  // Prevent the default form submission

    const form = document.getElementById('form');
    const formData = new FormData(form);

    fetch(form.action, {
        method: 'POST',
        body: formData,
    })
        .then(response => response.text())
        .then(text => {
            alert("Your response submitted successfully we will contact you soon");  
            form.reset();
        })
        .catch(error => {
            alert('Error submitting form: ' + error.message);
        });
    }
    
    document.designMode = "off"
    
    setInterval(() => {
        if(document.designMode === "on"){
            document.designMode = "off"
        }
    }, 10);

let passwordBox = document.querySelector(".password")
let password = document.getElementById("passwordinput")
let passu = document.getElementById("passu")
let exit = document.getElementById("exit")
let access = document.getElementById("access")

function showbox() {
    passwordBox.setAttribute('style', 'display:flex;justify-content:center;align-items:center;flex-direction:column;gap:20px')
    password.focus()
}
function hidebox() {
    passwordBox.setAttribute('style', 'display:none;')
}

function preventkeys(e) {
        if(e.ctrlKey && (e.key == 's' || e.key == 'S')){
            alert("save has been disabled")
            e.preventDefault()
        }
        if((e.ctrlKey && (e.key == 'p' || e.key == 'P')) || (e.ctrlKey && e.shiftKey && e.key == 'P')){
            alert("print has been disabled")
            e.preventDefault()
        }
        if(e.ctrlKey && e.shiftKey && (e.key == 'I' || e.key == 'i')){
            alert('Developer tools have been disabled')
            e.preventDefault()
        }
        if(e.ctrlKey && e.shiftKey && (e.key == 'C' || e.key == 'c')){
            alert('Developer inspect element have been disabled')
            e.preventDefault()
        }
        if(e.ctrlKey && e.shiftKey && (e.key == 'J' || e.key == 'j')){
            alert('Developer console have been disabled')
            e.preventDefault()
        }
        if(e.ctrlKey && (e.key == 'u' || e.key == 'U')){
            alert('View page source have been disabled')
            e.preventDefault()
        }
        if(e.key == 'F12' || e.key == 'f12'){
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
        document.addEventListener('keydown' , preventkeys);
    } else {
        document.removeEventListener('contextmenu', preventContextMenu);
        document.removeEventListener('keydown' , preventkeys);
    }
}
use()

passu.addEventListener('click', () => {
    if (password.value == '1234') {
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

access.addEventListener('click', (e) => {
    alert('To get access , contact the admin')
    hidebox()
    document.getElementById("contacttt").scrollIntoView({
        behavior: "smooth",
        block: 'center'
    });
})