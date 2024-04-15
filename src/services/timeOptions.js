export const getTimeOptions = () => {
  const options = [];

  for (let i = 0; i < 24; i++) {
    for (let j = 0; j < 60; j += 10) {
      const hour = i < 10 ? `0${i}` : `${i}`;
      const minute = j < 10 ? `0${j}` : `${j}`;
      options.push({
        time: `${hour}:${minute}`,
        id: `${hour}:${minute}`,
      });
    }
  }
  return options;
};
