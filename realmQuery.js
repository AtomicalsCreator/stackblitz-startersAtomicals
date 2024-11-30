import axios from 'axios';

import { decodeEnvelope, validateOperation } from './atomicalsHelper';
import { validOperations } from './constants';

export const queryRealm = async (realmName) => {
    try {
        const realmData = await fetchRealmInfo(realmName);

        const envelope = decodeEnvelope(realmData.witnessScript);

        validateOperation(envelope.operation, validOperations);

        return {
            realmName,
            metadata: envelope.payload,
        };
    } catch (error) {
        console.error('Error querying realm:', error);
        throw error;
    }
};
export const checkRealm = async (realmName) => {
    try {
        const response = await axios.post('https://ep.wizz.cash/proxy/blockchain.atomicals.get_realm_info', {
            params: [realmName]
        });
        if (response.data.response.result.atomical_id) {
            return { available: false, message: `Realm "${realmName}" is already minted.` };
        } else {
            return { available: true, message: `Realm "${realmName}" is available for minting.` };
        }
    } catch (error) {
        console.error('Error checking realm:', error);
        return { available: false, message: 'Error fetching realm data.' };
    }
};