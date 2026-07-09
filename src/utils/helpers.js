/**
 * Truncates text if it exceeds the specified length.
 *
 * @param {string} text
 * @param {number} maxLength
 * @returns {string}
 */
export const truncateText = (text, maxLength = 120) => {
  if (!text) return "";

  return text.length > maxLength
    ? `${text.substring(0, maxLength)}...`
    : text;
};