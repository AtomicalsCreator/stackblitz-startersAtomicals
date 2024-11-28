import axios from 'axios';

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