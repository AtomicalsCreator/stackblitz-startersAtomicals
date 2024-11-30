import { parseCborPayload } from 'atomicals-js/lib/utils/atomical-format-helpers';

export const decodeEnvelope = (witnessScript) => {
    try {
        const envelopeIndex = witnessScript.indexOf("61746F6D"); // Hex for "atom"
        if (envelopeIndex === -1) throw new Error("Envelope not found");

        const payloadStart = envelopeIndex + 8; // Skip the "atom" prefix
        const rawPayload = witnessScript.slice(payloadStart);

        return parseCborPayload(Buffer.from(rawPayload, 'hex'));
    } catch (error) {
        console.error('Error decoding envelope:', error);
        throw new Error('Failed to decode envelope');
    }
};

export const validateOperation = (operation, validOperations) => {
    if (!validOperations.includes(operation)) {
        throw new Error(`Invalid operation: ${operation}`);
    }
    return true;
};

export const decodeChunkedPayload = (chunks) => {
    try {
        const concatenatedPayload = chunks.join('');
        return parseCborPayload(Buffer.from(concatenatedPayload, 'hex'));
    } catch (error) {
        console.error('Error decoding chunked payload:', error);
        throw new Error('Failed to decode chunked payload');
    }
};