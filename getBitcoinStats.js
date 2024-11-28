import axios from 'axios';

export const getBitcoinStats = async () => {
    try {
        const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');
        const price = response.data.bpi.USD.rate;
        document.getElementById('price').innerText = `Price: $${price}`;
    } catch (error) {
        console.error('Error fetching Bitcoin stats:', error);
        document.getElementById('price').innerText = 'Error fetching Bitcoin price.';
    }
};