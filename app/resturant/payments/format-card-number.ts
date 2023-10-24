export default function formatCreditCardNumber(input: string) {
  // Remove any existing spaces or non-numeric characters
  const numericString = input.replace(/\D/g, "");

  // Define the interval for inserting spaces
  const spaceInterval = 4;

  // Initialize the formatted string
  let formattedString = "";

  // Loop through the numeric string and insert spaces
  for (let i = 0; i < numericString.length; i++) {
    if (i > 0 && i % spaceInterval === 0) {
      formattedString += " "; // Insert a space at the interval
    }
    formattedString += numericString[i];
  }

  return formattedString;
}
