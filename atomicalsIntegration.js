import { callElectrumx } from './callElectrumx.js';

export const getAtomicalsInfo = async (atomicalId) => {
    try {
        const info = await callElectrumx('blockchain.atomicals.get_atomical', [atomicalId]);
        return info;
    } catch (error) {
        console.error('Error fetching atomicals info:', error);
        return null;
    }
};