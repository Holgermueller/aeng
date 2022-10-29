const generateNumber = () => {
  const numLength = document.getElementById("numLength").value;
  const hasLetters = document.getElementById("letters").value;
  const isNegative = document.getElementById("negative").value;
  let numbers = "0123456789";
  let alpha = "qwertyuiopasdfghjklzxcvbnm";

  let chars = numbers;

  isNegative === "yes" ? (chars += "-") : "";

  let earthNumber = "";

  for (let i = 0; i < numLength; i++) {
    earthNumber += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  console.log(isNegative, hasLetters);

  document.getElementById("numberDisplay").innerHTML = earthNumber;
};
