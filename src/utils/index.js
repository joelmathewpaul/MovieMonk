/**
 * Converts the format of the date into yyyy-mm-dd
 * @param {*} dateString 
 * @returns yyyy-mm-dd format date
 */
export const formatDate = (dateString) => {
  if (dateString) {
    const date = new Date(dateString);
    const formattedDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    return formattedDate;
  } else {
    return "";
  }
};

/**
 * Formats the currency in commas.
 * @param {*} currency 
 * @returns Formatted currency
 */
export const formatCurrency = (currency) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return formatter.format(currency);
};