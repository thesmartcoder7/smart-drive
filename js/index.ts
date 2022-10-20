/* - - - get current year for the footer - - - */
let timeline: Date = new Date();
let currentYear: number = timeline.getFullYear();
let footerYear = document.querySelector(".current-year") as HTMLSpanElement;
footerYear.textContent = String(currentYear);

/* - - - sample user object - - - */
let samuel: any = {
  name: "samuel martins",
  username: "samuel",
  password: "samuel",
  balance: 440,
};

let userDisplayName = document.querySelector(".username") as HTMLSpanElement;

/* - - - form variables - - - */
let userForm = document.querySelector("#trip-selection") as HTMLFormElement;
let userDestination = document.querySelector("#route") as HTMLSelectElement;
let userPysical = document.querySelector("#has-disability") as HTMLInputElement;
let driverSelection = document.querySelector(
  ".driver-confirmation"
) as HTMLDivElement;
let normalDriverSelection = document.querySelector(
  ".disability-false"
) as HTMLDivElement;
let disabilityDriverSelection = document.querySelector(
  ".disability-true"
) as HTMLDivElement;
let rideRequest = document.querySelector("#request-modal") as HTMLDivElement;

let requestSeletion = document.querySelector(
  ".user-selection"
) as HTMLDivElement;
let rideSummary = document.querySelector(".ride-summary") as HTMLDivElement;
let drivers = document.querySelectorAll(
  ".driver"
) as NodeListOf<HTMLButtonElement>;
let driverName = document.querySelector(".driver-name") as HTMLSpanElement;
let driverContact = document.querySelector(
  ".driver-contact"
) as HTMLSpanElement;
let driverEta = document.querySelector(".driver-eta") as HTMLSpanElement;
let driverRating = document.querySelector(".driver-rating") as HTMLSpanElement;
let driverPlate = document.querySelector(".driver-plate") as HTMLSpanElement;

let userAgreement = document.querySelector(
  ".user-agreement"
) as HTMLButtonElement;
let thankYou = document.querySelector("#thank-you") as HTMLDivElement;
let thankYouBtn = document.querySelector(".thank-button") as HTMLButtonElement;
let blurBackgroud = document.querySelector("#blur") as HTMLDivElement;
let loginDiv = document.querySelector(".login") as HTMLDivElement;
let userBalance = document.querySelector(".user-balance") as HTMLSpanElement;
let errorMessage = document.querySelector(
  ".error-message"
) as HTMLParagraphElement;
let validationText = document.querySelector(
  ".validation-text"
) as HTMLParagraphElement;
let sValidationText = document.querySelector(
  ".signup-validation-text"
) as HTMLParagraphElement;
let newUser: any = {};

if (userAgreement) {
  userAgreement.addEventListener("click", () => {
    rideSummary.style.display = "none";
    rideRequest.style.display = "none";
    requestSeletion.style.display = "none";
    thankYou.style.display = "flex";
  });
}

if (thankYouBtn) {
  thankYouBtn.addEventListener("click", () => {
    thankYou.style.display = "none";
    blurBackgroud.style.display = "none";
    loginDiv.style.display = "flex";
    window.location.reload();
  });
}

let busFare = document.querySelector(".bus-fare") as HTMLSpanElement;
let destination = document.querySelector(
  ".user-destination"
) as HTMLSpanElement;
let pickUpTime = document.querySelector(".user-time") as HTMLSpanElement;
let pickUpText = document.querySelector(".user-pickup") as HTMLParagraphElement;

if (drivers) {
  for (let i: number = 0; i < drivers.length; i++) {
    drivers[i].addEventListener("click", (e: any) => {
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
}

/* - - - user form sign-up login variables - - - */
let signUpLink = document.querySelector(".signup-link") as HTMLSpanElement;
let signUpForm = document.querySelector("#signup-form") as HTMLFormElement;
let loginLink = document.querySelector(".login-link") as HTMLSpanElement;
let loginForm = document.querySelector("#login-form") as HTMLFormElement;

if (signUpLink) {
  signUpLink.addEventListener("click", () => {
    signUpForm.style.display = "flex";
    loginForm.style.display = "none";
    errorMessage.style.display = "none";
    validationText.style.display = "none";
    sValidationText.style.display = "none";
  });
}

if (loginLink) {
  loginLink.addEventListener("click", () => {
    loginForm.style.display = "flex";
    signUpForm.style.display = "none";
    errorMessage.style.display = "none";
    validationText.style.display = "none";
    sValidationText.style.display = "none";
  });
}

if (loginForm) {
  loginForm.addEventListener("submit", (e: any) => {
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
}

/* - - - signup form event- - - */
if (signUpForm) {
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
}

let instant = document.querySelector(".forinstant") as HTMLLabelElement;
let later = document.querySelector(".forlater") as HTMLLabelElement;
let time = document.querySelector("#pickup-time") as HTMLInputElement;
let userTime = document.querySelector(".user-time") as HTMLSpanElement;

if (later) {
  later.addEventListener("click", (e: any) => {
    if (e.target.checked) {
      time.style.display = "inline";
    } else {
      time.style.display = "none";
    }
  });
}

if (instant) {
  instant.addEventListener("click", (e: any) => {
    if (e.target.checked) {
      time.style.display = "none";
    } else {
      time.style.display = "inline";
    }
  });
}

if (userForm) {
  userForm.addEventListener("submit", (e: any) => {
    e.preventDefault();
    let rideError = document.querySelector(".ride-error-message") as HTMLParagraphElement;
    if (userDestination.value !== "route" && userForm.commute.value !== "") {
      rideError.style.display = "none";
      destination.textContent = userDestination.value.split(" ")[0];
      busFare.textContent = userDestination.value.split(" ")[1];
      pickUpTime = userForm.time.value;

      if (pickUpTime.textContent !== "") {
        pickUpText.style.display = "block";
        userTime.textContent = String(pickUpTime);
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
}
