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
    earthNumber = dash + earthNumber;
    for (let i = 0; i < numLength; i++) {
      earthNumber += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    numToDom = earthNumber + "-" + randLetter;
  } else if (isNegative === "yes") {
    earthNumber = dash + earthNumber;
    for (let i = 0; i < numLength; i++) {
      earthNumber += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    numToDom = earthNumber;
  } else if (hasLetters === "yes") {
    // earthNumber = earthNumber.concat("-" + randLetter);
    for (let i = 0; i < numLength; i++) {
      earthNumber += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    numToDom = earthNumber + "-" + randLetter;
  } else {
    for (let i = 0; i < numLength; i++) {
      earthNumber += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    numToDom = earthNumber;
  }

  document.getElementById("numberDisplay").innerHTML = numToDom;

  resetForm();
};

const resetForm = () => {
  document.getElementById("numLength").value = 1;
  document.getElementById("letters").selectedIndex = 1;
  document.getElementById("negative").selectedIndex = 1;
};

const modal = document.getElementById("myModal");

const button = document.getElementById("modalButton");

const closeButton = document.getElementById("span");

const showModal = () => {
  modal.style.display = "block";
};

const hideModal = () => {
  modal.style.display = "none";
};
