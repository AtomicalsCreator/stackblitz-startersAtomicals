import axios from 'axios';

export const callElectrumx = async (method, params) => {
    const endpoints = [
        "https://ep.wizz.cash/proxy",
        "https://ep.atomicalmarket.com/proxy"
    ];

    for (const baseUrl of endpoints) {
        try {
            const response = await axios.post(`${baseUrl}/${method}`, { params });
            return response.data.response;
        } catch (error) {
            console.error(`Error with endpoint ${baseUrl}:`, error);
        }
    }
    throw new Error('All endpoints failed');
};