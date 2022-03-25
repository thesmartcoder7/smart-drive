/* - - - get current year for the footer - - - */
let timeline = new Date();
let currentYear = timeline.getFullYear();
let footerYear = document.querySelector(".current-year");
footerYear.textContent = currentYear;

/* - - - sample user object - - - */
let samuel = {
	name: "samuel martins",
	username: "samuel",
	password: "samuel",
	balance: 440,
};

let userDisplayName = document.querySelector(".username");

/* - - - form variables - - - */
let userForm = document.querySelector("#trip-selection");
let userDestination = document.querySelector("#route");
let userPysical = document.querySelector("#has-disability");
let driverSelection = document.querySelector(".driver-confirmation");
let normalDriverSelection = document.querySelector(".disability-false");
let disabilityDriverSelection = document.querySelector(".disability-true");
let rideRequest = document.querySelector("#request-modal");

let requestSeletion = document.querySelector(".user-selection");
let rideSummary = document.querySelector(".ride-summary");
let drivers = document.querySelectorAll(".driver");
let driverName = document.querySelector(".driver-name");
let driverContact = document.querySelector(".driver-contact");
let driverEta = document.querySelector(".driver-eta");
let driverRating = document.querySelector(".driver-rating");
let driverPlate = document.querySelector(".driver-plate");

let userAgreement = document.querySelector(".user-agreement");
let thankYou = document.querySelector("#thank-you");
let thankYouBtn = document.querySelector(".thank-button");
let blurBackgroud = document.querySelector("#blur");
let loginDiv = document.querySelector(".login");
let userBalance = document.querySelector(".user-balance");
let errorMessage = document.querySelector(".error-message");
let validationText = document.querySelector(".validation-text");
let sValidationText = document.querySelector(".signup-validation-text");
let newUser = {};

userAgreement.addEventListener("click", () => {
	rideSummary.style.display = "none";
	rideRequest.style.display = "none";
	requestSeletion.style.display = "none";
	thankYou.style.display = "flex";
});

thankYouBtn.addEventListener("click", () => {
	thankYou.style.display = "none";
	blurBackgroud.style.display = "none";
	loginDiv.style.display = "flex";
	window.location.reload();
});

let busFare = document.querySelector(".bus-fare");
let destination = document.querySelector(".user-destination");
let pickUpTime = document.querySelector(".user-time");
let pickUpText = document.querySelector(".user-pickup");

for (i = 0; i < drivers.length; i++) {
	drivers[i].addEventListener("click", (e) => {
		if (e.target.classList.contains("button-joshua")) {
			driverName.textContent = "Joshua Kennedy";
			driverContact.textContent = "+254023456878";
			driverEta.textContent = "7 minutes";
			driverRating.textContent = "4.5";
			driverPlate.textContent = "SD123";
		} else if (e.target.classList.contains("button-timothy")) {
			driverName.textContent = "Timothy Williams";
			driverContact.textContent = "+254023856878";
			driverEta.textContent = "5 minutes";
			driverRating.textContent = "4.5";
			driverPlate.textContent = "SD456";
		} else if (e.target.classList.contains("button-john")) {
			driverName.textContent = "John Mathews";
			driverContact.textContent = "+254023463978";
			driverEta.textContent = "3 minutes";
			driverRating.textContent = "4";
			driverPlate.textContent = "SD789";
		} else {
			driverName.textContent = "Dean Davidson";
			driverContact.textContent = "+254723398978";
			driverEta.textContent = "7 minutes";
			driverRating.textContent = "4.5";
			driverPlate.textContent = "SD876";
		}
		requestSeletion.style.display = "none";
		rideSummary.style.display = "block";
	});
}

/* - - - user form sign-up login variables - - - */
let signUpLink = document.querySelector(".signup-link");
let signUpForm = document.querySelector("#signup-form");
let loginLink = document.querySelector(".login-link");
let loginForm = document.querySelector("#login-form");

signUpLink.addEventListener("click", () => {
	signUpForm.style.display = "flex";
	loginForm.style.display = "none";
	errorMessage.style.display = "none";
	validationText.style.display = "none";
	sValidationText.style.display = "none";
});

loginLink.addEventListener("click", () => {
	loginForm.style.display = "flex";
	signUpForm.style.display = "none";
	errorMessage.style.display = "none";
	validationText.style.display = "none";
	sValidationText.style.display = "none";
});

loginForm.addEventListener("submit", (e) => {
	e.preventDefault();
	if (loginForm.username.value !== "" && loginForm.password.value !== "") {
		if (
			loginForm.username.value === samuel.username &&
			loginForm.password.value === samuel.password
		) {
			loginDiv.style.display = "none";
			blurBackgroud.style.display = "block";
			rideRequest.style.display = "flex";
			let displayName = samuel.name.split(" ")[0];
			userDisplayName.textContent =
				displayName.charAt(0).toUpperCase() + displayName.slice(1);
			userBalance.textContent = samuel.balance;
		} else if (
			loginForm.username.value === newUser.username &&
			loginForm.password.value === newUser.password
		) {
			loginDiv.style.display = "none";
			blurBackgroud.style.display = "block";
			rideRequest.style.display = "flex";
			let displayName = newUser.name.split(" ")[0];
			userDisplayName.textContent =
				displayName.charAt(0).toUpperCase() + displayName.slice(1);
			userBalance.textContent = newUser.balance;
		} else {
			errorMessage.style.display = "block";
			validationText.style.display = "none";
			loginForm.classList.add("shake");
			setTimeout(() => {
				loginForm.classList.remove("shake");
			}, 1000);
		}
	} else {
		loginForm.classList.add("shake");
		setTimeout(() => {
			loginForm.classList.remove("shake");
		}, 1000);
		errorMessage.style.display = "none";
		validationText.style.display = "block";
	}

	loginForm.reset();
});

/* - - - signup form event- - - */
signUpForm.addEventListener("submit", (e) => {
	e.preventDefault();
	if (
		signUpForm.signupname.value !== "" &&
		signUpForm.signupname.value !== "" &&
		signUpForm.signuppassword.value !== ""
	) {
		newUser.name = signUpForm.signupname.value;
		newUser.username = signUpForm.signupname.value;
		newUser.password = signUpForm.signuppassword.value;
		newUser.balance = 500;

		signUpForm.style.display = "none";
		loginForm.style.display = "flex";
	} else {
		signUpForm.classList.add("shake");
		setTimeout(() => {
			signUpForm.classList.remove("shake");
		}, 1000);
		sValidationText.style.display = "block";
	}
});

let instant = document.querySelector(".forinstant");
let later = document.querySelector(".forlater");
let time = document.querySelector("#pickup-time");
let userTime = document.querySelector(".user-time");

later.addEventListener("click", (e) => {
	if (e.target.checked) {
		time.style.display = "inline";
	} else {
		time.style.display = "none";
	}
});

instant.addEventListener("click", (e) => {
	if (e.target.checked) {
		time.style.display = "none";
	} else {
		time.style.display = "inline";
	}
});

userForm.addEventListener("submit", (e) => {
	e.preventDefault();
	let rideError = document.querySelector(".ride-error-message");
	if (userDestination !== "route" && userForm.commute.value !== "") {
		rideError.style.display = "none";
		destination.textContent = userDestination.value.split(" ")[0];
		busFare.textContent = userDestination.value.split(" ")[1];
		pickUpTime = userForm.time.value;

		if (pickUpTime !== "") {
			pickUpText.style.display = "block";
			userTime.textContent = pickUpTime;
		}

		driverSelection.style.display = "flex";
		if (userPysical.checked) {
			disabilityDriverSelection.style.display = "flex";
			normalDriverSelection.style.display = "none";
		} else {
			normalDriverSelection.style.display = "flex";
			disabilityDriverSelection.style.display = "none";
		}
	} else {
		userForm.classList.add("shake");
		setTimeout(() => {
			userForm.classList.remove("shake");
		}, 1000);
		rideError.style.display = "block";
	}
});
