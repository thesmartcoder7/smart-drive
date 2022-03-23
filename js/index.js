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

/* - - - sample driver objects - - - */
let noDisabilityD = [
    {
        name: "joshua kennedy",
        rating: "4",
        eta: 7,
        inspection: true,
        vehiclePlates: "SD123"
    },
    {
        name: "timothy william",
        rating: "3",
        eta: 5,
        inspection: true,
        vehiclePlates: "SD456"
    }
]


let disabilityD = [
    {
        name: "mathew amenya",
        rating: "4",
        eta: 7,
        inspection: true,
        vehiclePlates: "SD789"
    },
    {
        name: "daniel makatu",
        rating: "3",
        eta: 5,
        inspection: true,
        vehiclePlates: "SD876"
    }
]
