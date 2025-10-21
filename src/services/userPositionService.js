async function getUserPosition() {
  const position = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });

  const { latitude, longitude } = position.coords;
  return { latitude, longitude };
}

const pos = await getUserPosition();
console.log(pos);

export { getUserPosition };
