export const isValidProductName = (name) => name.length >= 2;

export const isValidMailingAdress = (mail) => mail.includes('@');

export const isValidPrice = (price) => {
  if (price.includes(',')) {
    const [_, decimals] = price.split(',');
    if (decimals.length <= 2) {
      return true;
    } else {
      return false;
    }
  } else if (!price.includes('.')) {
    return true;
  } else {
    return false;
  }
};

export const isValidForm = (product) =>
  isValidProductName(product.name) &&
  isValidMailingAdress(product.supportContact) &&
  isValidPrice(product.price);
export default isValidForm;
