export async function getCategories() {
  try {
    const categories = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
    return categories.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getProductsFromCategoryAndQuery(/* categoryId, query */) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
}
