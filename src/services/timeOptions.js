export const getTimeOptions = () => {
  const options = [];

  for (let i = 0; i < 24; i++) {
    for (let j = 0; j < 60; j += 5) {
      const hour = i < 10 ? `0${i}` : `${i}`;
      const minute = j < 10 ? `0${j}` : `${j}`;
      const time = hour <= 12 ? `${hour}:${minute} AM` : `${hour}:${minute}PM`;
      options.push({
        time,
        id: `${hour}:${minute}`,
      });
    }
  }
  return options;
};
