function showmenu() {
    document.getElementById("show").classList.toggle("show")
    const img = document.getElementById("symbol")
    if(img.src.includes("assets/list.svg")){
        img.src = "assets/cross.svg"
    }
    else{
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

if('scrollRestoration' in history) {
    history.scrollRestoration = 'manual'
    window.addEventListener('DOMContentLoaded' , (event) => {
        // window.location.hash = '';
        window.scrollTo(0,0)
    
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
        alert("Your response submitted successfully we will contact you soon");  // Display the response from the server as an alert
        form.reset();  // Optionally reset the form
    })
    .catch(error => {
        alert('Error submitting form: ' + error.message);
    });
}