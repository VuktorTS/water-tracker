export const getCurrentDate = () => {
  const currentTime = new Date();
  // Adjust the current time to the desired timezone (+03:00)
  const timezoneOffsetInMilliseconds = 3 * 60 * 60000; // Convert +03:00 to milliseconds
  const adjustedTime = new Date(
    currentTime.getTime() + timezoneOffsetInMilliseconds
  );
  // Subtract three hours from the adjusted time
  const adjustedTimeMinusThreeHours = new Date(
    adjustedTime.getTime() - 3 * 60 * 60000
  );
  // Format the adjusted time minus three hours as a string in the desired format
  const year = adjustedTimeMinusThreeHours.getFullYear();
  const month = String(adjustedTimeMinusThreeHours.getMonth() + 1).padStart(
    2,
    '0'
  );
  const day = String(adjustedTimeMinusThreeHours.getDate()).padStart(2, '0');
  const hours = String(adjustedTimeMinusThreeHours.getHours()).padStart(2, '0');
  const minutes = String(adjustedTimeMinusThreeHours.getMinutes()).padStart(
    2,
    '0'
  );
  const seconds = String(adjustedTimeMinusThreeHours.getSeconds()).padStart(
    2,
    '0'
  );
  const timezoneString = '+03:00'; // Desired timezone offset string
  const adjustedTimeString = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}${timezoneString}`;
  return adjustedTimeString;
};
