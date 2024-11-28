export const subRealmRules = {
  rules: [
    {
      pattern: ".*",
      bitworkc: 1234,
    },
    {
      pattern: "^0|\\.gif$",
      bitworkc: 77777,
    },
  ],
};

/**
 * Validate subrealm rules for a given request.
 * @param {string} subrealmName - The name of the subrealm to validate.
 * @param {number} bitwork - The bitwork used to mint.
 * @returns {boolean} - Returns true if rules are satisfied.
 */
export const validateSubRealm = (subrealmName, bitwork) => {
  for (const rule of subRealmRules.rules) {
    const regex = new RegExp(rule.pattern);
    if (regex.test(subrealmName) && bitwork >= rule.bitworkc) {
      return true;
    }
  }
  return false;
};