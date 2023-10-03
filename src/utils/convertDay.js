export const convertDay = (time) => {
  const inputDateString = time;
  const dateObject = new Date(inputDateString);

  // Get the day, month, and year
  const day = String(dateObject.getDate()).padStart(2, "0");
  const month = String(dateObject.getMonth() + 1).padStart(2, "0"); // Adding 1 to the month because months are zero-indexed

  // Combine day, month, and year with slashes
  const formattedDate = `${day}/${month}`;

  return formattedDate;
}