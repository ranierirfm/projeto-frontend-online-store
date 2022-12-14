export async function getCategories() {
  try {
    const allCategories = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
    return allCategories.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  try {
    const productList = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
    return productList.json();
  } catch (error) {
    console.log(error);
  }
}
getProductsFromCategoryAndQuery();

export async function getProductDetails(id) {
  try {
    const productDetail = await fetch(`https://api.mercadolibre.com/items/${id}`);
    return productDetail.json();
  } catch (error) {
    console.log(error);
  }
}
