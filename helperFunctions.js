/**
 * Helper function to log errors.
 * @param {string} message - Error message to log.
 */
 export const logError = (message) => {
  console.error(`[Error]: ${message}`);
};

/**
 * Helper function to debounce API calls.
 * @param {Function} func - Function to debounce.
 * @param {number} delay - Delay in milliseconds.
 */
export const debounce = (func, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
};