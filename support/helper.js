// Helper: Random integer between min and max (inclusive)
export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Helper: Random string of letters
export function getRandomString(length) {
  const chars = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// Generate random name (capitalize first letter)
export function getRandomName() {
  const name = getRandomString(getRandomNumber(4, 8));
  return name.charAt(0).toUpperCase() + name.slice(1);
}

// Generate random phone number (10 digits)
export function getRandomPhoneNumber() {
  let phone = "9"; // start with 9
  for (let i = 0; i < 9; i++) {
    phone += getRandomNumber(0, 9);
  }
  return phone;
}

// Generate random email
export function getRandomEmail() {
  const username = getRandomString(getRandomNumber(5, 10));
  const domains = ["example.com", "mail.com", "test.com"];
  const domain = domains[Math.floor(Math.random() * domains.length)];
  return `${username}@${domain}`;
}

// Generate random user object
export function generateRandomUser() {
  return {
    name: getRandomName(),
    phone: getRandomPhoneNumber(),
    email: getRandomEmail(),
  };
}

// state.js
export const state = {
  responseToken: null, // initial value
};