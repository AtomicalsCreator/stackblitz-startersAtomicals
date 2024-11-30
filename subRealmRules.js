import { decodeEnvelope, decodeChunkedPayload } from './atomicalsHelper';

export const verifySubRealmRules = async (subRealmName, witnessScriptChunks) => {
    try {
        const envelope = decodeEnvelope(subRealmName);

        const payload = decodeChunkedPayload(witnessScriptChunks);

        return {
            subRealmName,
            rules: payload.rules,
        };
    } catch (error) {
        console.error('Error verifying subrealm rules:', error);
        throw error;
    }
};

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