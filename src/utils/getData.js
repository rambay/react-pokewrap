const API = process.env.API;

const numRandom = () => {
  return Math.floor(Math.random() * (10 - 1 + 1) + 1);
};

const getData = async () => {
  const id = numRandom();
  try {
    const response = await fetch(`${API}${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Fetch Error", error);
  }
};

export default getData;
