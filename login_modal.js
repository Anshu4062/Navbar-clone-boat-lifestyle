const loginBtn = document.querySelector(".login-btn");
const loginModal = document.querySelector(".login-modal");
const closeLoginModal = document.querySelector(".login-modal-close");
const loginModalWrapper = document.querySelector(".login-modal-wrapper");
const openLoginModal = document.querySelector(".open-login-modal");
const closeModalWrapper = document.querySelector(".close-modal-wrapper");
const sendOtpBtn = document.querySelector(".send-otp-btn");

sendOtpBtn.addEventListener("click", (e) => {
  e.preventDefault();
});

loginBtn.addEventListener(
  "click",
  () => (loginModal.style.visibility = "visible")
);

closeLoginModal.addEventListener(
  "click",
  () => (loginModal.style.visibility = "hidden")
);
openLoginModal.addEventListener("click", () => {
  loginModalWrapper.style.visibility = "visible";
});

closeModalWrapper.addEventListener("click", () => {
  loginModalWrapper.style.visibility = "hidden";
  loginModal.style.visibility = "hidden";
});

window.addEventListener("click", (e) => {
  if (e.target === loginModalWrapper) {
    loginModalWrapper.style.visibility = "hidden";
    loginModal.style.visibility = "hidden";
  }
});
