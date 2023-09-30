document.addEventListener("DOMContentLoaded", function () {
  const inputText = document.querySelector(".inputtext");
  // adding events on the targeted tags
  const inputEmail = document.querySelector(".inputemail");
  const inputPassword = document.querySelector(".inputpassword");
  const inputCode = document.querySelector(".inputcode");
  const radio1 = document.querySelector(".radio1");
  const radio2 = document.querySelector(".radio2");
  inputText.addEventListener("input", () => {});
  inputEmail.addEventListener("input", () => {});
  inputPassword.addEventListener("input", () => {});
  inputCode.addEventListener("input", () => {});
  radio1.addEventListener("click", () => {});
  radio2.addEventListener("input", () => {});
  // target the button
  document.querySelector("button").addEventListener("click", (event) => {
    event.preventDefault();
    // checking the value of radio
    let checkedRadio = radio1.checked ? radio1.value : radio2.value;

    let allValues = `${inputText.value}  ${inputEmail.value} `;
    // printing the result ot h4 appending
    if (
      inputText.value.length === 0 ||
      inputEmail.value.length === 0 ||
      inputPassword.value.length === 0 ||
      inputCode.value === 0
    ) {
      let result = (document.querySelector(".final").innerHTML =
        "Please Fill all the fields");
    } else {
      let result = (document.querySelector(".final").innerHTML =
        "Welcome " + allValues);
    }

    let forms = document.querySelector(".first");
    // remove all the value

    // forms.reset();
  });
});
