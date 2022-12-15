/**
 * Converts the format of the date into yyyy-mm-dd
 * @param {*} dateString 
 * @returns yyyy-mm-dd format date
 */
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const formattedDate = `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`;
  return formattedDate;
};