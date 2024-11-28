import axios from 'axios';

export const mintRealm = async (realmName) => {
    try {
        const response = await axios.post('https://docs.wizz.cash/wizz-wallet/wallet/wallet-extension/mint-realm-subrealm', {
            realm: realmName
        });
        return response.data;
    } catch (error) {
        console.error('Error minting realm:', error);
        return null;
    }
};