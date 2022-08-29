import getData from "@utils/getData.js";

const Template = async () => {
  const data = await getData();

  const view = `
    <div class="searchPokemon">
      <div class="viewPokemon">
        <img class="logo" src="${Logo}" alt=${data.name} />
        <img src=${data.sprites.other.dream_world.front_default} alt=${data.name} />
        <h1>${data.name}</h1>
      </div>
    </div>
  `;
  return view;
};

export default Template;
