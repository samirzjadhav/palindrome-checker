const txtInput = document.querySelector(".inputs input");
const checkBtn = document.querySelector(".inputs button");
const infoTxt = document.querySelector(".info-txt");
let filterInput;

checkBtn.addEventListener("click", () => {
  let reverseInput = filterInput.split("").reverse().join("");
  console.log(reverseInput);
  infoTxt.style.display = "block";
  if (filterInput != reverseInput) {
    return (infoTxt.innerHTML = `No, <span>'${txtInput.value}'</span> isn't a palindrome!`);
  }
  infoTxt.innerHTML = `Yes, <span>'${txtInput.value}'</span> is a palindrome!`;
});

txtInput.addEventListener("keyup", () => {
  filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/gi, "");
  console.log(filterInput);
  if (filterInput) {
    return checkBtn.classList.add("active");
  }
  infoTxt.style.display = "none";
  checkBtn.classList.remove("active");
  console.log(infoTxt);
});
