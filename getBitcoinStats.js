import axios from 'axios';

export const fetchBitcoinStats = async () => {
    try {
        const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');
        const stats = {
            price: response.data.bpi.USD.rate,
            updated: response.data.time.updated
        };
        return stats;
    } catch (error) {
        console.error('Error fetching Bitcoin stats:', error);
        throw error;
    }
};