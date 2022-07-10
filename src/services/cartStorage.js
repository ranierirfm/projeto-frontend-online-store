// RESPONSÁVEL POR GERENCIAR A QUANTIDADE NO STORAGE // REQ 13

const KEY_STORAGE_CARD = 'KEY_STORAGE_CARD';

export const plussItemCartQuantity = (quantity) => {
  localStorage.setItem(KEY_STORAGE_CARD, JSON.stringify(quantity));
};

export const getItemQuantity = () => JSON.parse(localStorage.getItem(KEY_STORAGE_CARD));
