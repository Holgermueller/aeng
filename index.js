const generateNumber = () => {
  const numLength = document.getElementById("numLength").value;
  const hasLetters = document.getElementById("letters").value;
  const isNegative = document.getElementById("negative").value;
  let numbers = "0123456789";
  const dash = "-";
  let alpha = "qwertyuiopasdfghjklzxcvbnm";

  let chars = numbers;

  let randLetter = alpha.charAt(Math.floor(Math.random() * alpha.length));

  let earthNumber = "";

  if (isNegative === "yes" && hasLetters === "yes") {
    earthNumber = dash + earthNumber + "- " + randLetter;
    for (let i = 0; i < numLength; i++) {
      earthNumber += chars.charAt(Math.floor(Math.random() * chars.length));
    }
  } else if (isNegative === "yes") {
    earthNumber = dash + earthNumber;
    for (let i = 0; i < numLength; i++) {
      earthNumber += chars.charAt(Math.floor(Math.random() * chars.length));
    }
  } else if (hasLetters === "yes") {
    // earthNumber = earthNumber.concat("-" + randLetter);
    for (let i = 0; i < numLength; i++) {
      earthNumber += chars.charAt(Math.floor(Math.random() * chars.length));
    }
  } else {
    for (let i = 0; i < numLength; i++) {
      earthNumber += chars.charAt(Math.floor(Math.random() * chars.length));
    }
  }

  document.getElementById("numberDisplay").innerHTML = earthNumber;

  resetForm();
};

const resetForm = () => {
  document.getElementById("numLength").value = 1;
  document.getElementById("letters").selectedIndex = 1;
  document.getElementById("negative").selectedIndex = 1;
};
