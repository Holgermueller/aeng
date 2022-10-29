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

  if (isNegative === "yes") {
    earthNumber = earthNumber + dash;
    for (let i = 0; i < numLength; i++) {
      earthNumber += chars.charAt(Math.floor(Math.random() * chars.length));
    }
  } else {
    for (let i = 0; i < numLength; i++) {
      earthNumber += chars.charAt(Math.floor(Math.random() * chars.length));
    }
  }

  console.log(randLetter);

  document.getElementById("numberDisplay").innerHTML = earthNumber;
};
