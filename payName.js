/**
 * Validates a PayName based on the given format.
 * Format: +[inbox]@[realm_name]
 * @param {string} payName - The PayName to validate.
 * @returns {boolean} - Returns true if valid.
 */
 export const validatePayName = (payName) => {
  const regex = /^\+[a-z0-9]+@[a-z0-9.-]+$/;
  return regex.test(payName.toLowerCase());
};

/**
 * Resolves PayName to its associated wallet address.
 * @param {string} payName - The PayName to resolve.
 * @returns {string|null} - Returns the wallet address or null if not found.
 */
export const resolvePayName = async (payName) => {
  const url = 'https://ep.wizz.cash/proxy/blockchain.atomicals.resolve_payname';
  try {
    const response = await axios.post(url, { params: [payName] });
    return response.data.response.result?.address || null;
  } catch (error) {
    console.error('Error resolving PayName:', error);
    return null;
  }
};