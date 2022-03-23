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

driverSelection.addEventListener("click", (e)=>{
    console.log(e)
})

userForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    let userTrip = userForm.commute.value
    console.log(
        userDestination.value,
        userTrip,
        userPysical.checked
    )

    driverSelection.style.display = "flex"
    if (userPysical.checked){
        disabilityDriverSelection.style.display = "flex"
        normalDriverSelection.style.display = "none"
    } else {
        normalDriverSelection.style.display = "flex"
        disabilityDriverSelection.style.display = "none"
    }
})