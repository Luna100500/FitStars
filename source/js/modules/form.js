import iMask from "imask";

document.addEventListener("submit", (event) => {
  if (!form.validate()) {
    event.preventDefault();
  }
});

const maskOptions = {
  mask: "00000000000",
};

iMask(document.querySelector("#phone-mask"), maskOptions);
