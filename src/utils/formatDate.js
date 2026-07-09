/**
 * Formats a date into a readable string.
 * @param {string} date
 * @returns {string}
 */
export const formatDate = (date) => {
  return new Date(date).toLocaleString();
};