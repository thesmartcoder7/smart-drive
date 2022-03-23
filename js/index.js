/* - - - get current year for the footer - - - */
let timeline = new Date
let currentYear = timeline.getFullYear()
let footerYear = document.querySelector(".current-year")
footerYear.textContent = currentYear

/* - - - sample user object - - - */
let samuel = {
    username:"samuel",
    password: "samuel"
}

/* - - - form variables - - - */
let userForm = document.querySelector("#trip-selection")
let userDestination = document.querySelector("#route")
let userPysical = document.querySelector("#has-disability")
let driverSelection = document.querySelector(".driver-confirmation")
let normalDriverSelection = document.querySelector(".disability-false")
let disabilityDriverSelection = document.querySelector(".disability-true")
let rideRequest = document.querySelector("#request-modal")

let requestSeletion = document.querySelector(".user-selection")
let rideSummary = document.querySelector(".ride-summary")

let drivers = document.querySelectorAll(".driver")
let driverName = document.querySelector(".driver-name")
let driverContact = document.querySelector(".driver-contact")
let driverEta = document.querySelector(".driver-eta")
let driverRating = document.querySelector(".driver-rating")

let userAgreement = document.querySelector(".user-agreement")

userAgreement.addEventListener("click", ()=>{
    rideSummary.style.display = "none"
    rideRequest.style.display = "none"
    requestSeletion.style.display = "none"
})

let busFare = document.querySelector(".bus-fare")
let destination = document.querySelector(".user-destination")


for(i=0; i<drivers.length; i++){
    drivers[i].addEventListener("click", (e)=>{
        if(e.target.classList.contains("button-joshua")){
            driverName.textContent = "Joshua Kennedy"
            driverContact.textContent = "+254023456878"
            driverEta.textContent = "7 minutes"
            driverRating.textContent = "4.5"
        } else if(e.target.classList.contains("button-timothy")){
            driverName.textContent = "Timothy Williams"
            driverContact.textContent = "+254023856878"
            driverEta.textContent = "5 minutes"
            driverRating.textContent = "4.5"
        } else if(e.target.classList.contains("button-john")){
            driverName.textContent = "John Mathews"
            driverContact.textContent = "+254023463978"
            driverEta.textContent = "3 minutes"
            driverRating.textContent = "4"
        } else {
            driverName.textContent = "Dean Davidson"
            driverContact.textContent = "+254723398978"
            driverEta.textContent = "7 minutes"
            driverRating.textContent = "4.5"
        }
        requestSeletion.style.display = "none"
        rideSummary.style.display = "block"
    })
}

let loginForm = document.querySelector("#login-form")
loginForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    if(loginForm.username.value === samuel.username && loginForm.password.value === samuel.password){
        rideRequest.style.display = "flex"
    }

    loginForm.reset()
})


userForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    // let userTrip = userForm.commute.value
    destination.textContent = userDestination.value.split(" ")[0]
    busFare.textContent = userDestination.value.split(" ")[1]

    driverSelection.style.display = "flex"
    if (userPysical.checked){
        disabilityDriverSelection.style.display = "flex"
        normalDriverSelection.style.display = "none"
    } else {
        normalDriverSelection.style.display = "flex"
        disabilityDriverSelection.style.display = "none"
    }
})