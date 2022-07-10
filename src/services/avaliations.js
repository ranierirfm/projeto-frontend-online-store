// RESPONSAVEIS POR GERENCIAR AS AVALIZAÇÕES // REQ10

const KEY_STORAGE_NAME = 'AVALIATION';

const getAllAvaliation = async () => JSON.parse(localStorage.getItem(KEY_STORAGE_NAME));

export const addAvaliation = async (avaliation) => {
  const arrayOfAvaliation = await getAllAvaliation();
  console.log(arrayOfAvaliation);
  const includeNewAvaliation = [...arrayOfAvaliation, avaliation];
  await localStorage.setItem(KEY_STORAGE_NAME, JSON.stringify(includeNewAvaliation));
};

export const getAvaliationById = async (idOfProduct) => {
  const getall = await getAllAvaliation();
  const filtedArray = await getall.filter((items) => items.idOfProduct === idOfProduct);
  return filtedArray;
};

export const avaliationVerificationExist = async () => getAllAvaliation();

export const addFirsAvaliation = async (avaliation) => {
  const arrayOfAvaliation = [avaliation];
  await localStorage.setItem(KEY_STORAGE_NAME, JSON.stringify(arrayOfAvaliation));
};
