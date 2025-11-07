const API_KEY = import.meta.env.VITE_UVINDEX_API_KEY;
const UVINDEX_URL = "https://api.openuv.io/api/v1/uv";

const myHeaders = new Headers();
myHeaders.append("x-access-token", API_KEY);
myHeaders.append("Context-type", "application/json");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

async function getCurrentUvIndex(latitude, longitude) {
  const response = await fetch(
    `${UVINDEX_URL}?lat=${latitude}&lng=${longitude}`,
    requestOptions
  );

  if (response.ok) {
    const result = await response.json();
    return result;
  } else {
    throw new Error(`HTTP Error ${response.status}: ${response.statusText}`);
  }
}

export { getCurrentUvIndex };
