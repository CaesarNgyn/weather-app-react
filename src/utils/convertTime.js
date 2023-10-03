export const convertTime = (time) => {
  const inputDateString = time;
  const dateObject = new Date(inputDateString);

  // Get the hours and minutes in two-digit format
  const hours = String(dateObject.getHours()).padStart(2, "0");
  const minutes = String(dateObject.getMinutes()).padStart(2, "0");

  // Combine hours and minutes with a dot
  const formattedTime = `${hours}.${minutes}`;

  return formattedTime;
}