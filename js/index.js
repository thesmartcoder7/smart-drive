/* - - - get current year for the footer - - - */
let timeline = new Date
let currentYear = timeline.getFullYear()
let footerYear = document.querySelector(".current-year")
footerYear.textContent = currentYear
