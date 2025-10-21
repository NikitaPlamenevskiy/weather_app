const getUserPosition = async () => {
  const position = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });

  const { latitude, longitude } = position.coords;
  return { latitude, longitude };
};

export { getUserPosition };
