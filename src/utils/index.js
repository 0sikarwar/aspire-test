export function generateRandomDarkColor() {
  const randomComponent = () =>
    Math.floor(Math.random() * 128)
      .toString(16)
      .padStart(2, "0");
  return `#${randomComponent()}${randomComponent()}${randomComponent()}`;
}

export function generateNumber(length) {
  let cardNumber = "";
  for (let i = 0; i < length; i++) {
    cardNumber += Math.floor(Math.random() * 10);
  }
  return cardNumber;
}
export function generateExpiryDate() {
  const currentDate = new Date();
  const minYears = 1;
  const maxYears = 5;
  const randomYears =
    Math.floor(Math.random() * (maxYears - minYears + 1)) + minYears;
  const expiryYear = currentDate.getFullYear() + randomYears;
  const expiryMonth = Math.floor(Math.random() * 12) + 1;
  return `${expiryMonth}/${expiryYear}`;
}

export function getFromLocalStorage(key) {
  if (typeof key !== "string" || !key.trim()) {
    console.error("Key must be a non-empty string.");
    return null;
  }

  const data = localStorage.getItem(key);

  if (!data) {
    console.error("Key does not exist in local storage.");
    return null;
  }

  return JSON.parse(data);
}

export function addToLocalStorage(key, data) {
  if (typeof key !== "string" || !key.trim()) {
    console.error("Key must be a non-empty string.");
    return;
  }

  if (typeof data !== "object") {
    console.error("Data must be an object.");
    return;
  }

  localStorage.setItem(key, JSON.stringify(data));
}

export function removeFromLocalStorage(key) {
  if (typeof key !== "string" || !key.trim()) {
    console.error("Key must be a non-empty string.");
    return;
  }
  if (!localStorage.getItem(key)) {
    console.error("Key does not exist in local storage.");
    return;
  }

  localStorage.removeItem(key);
}
