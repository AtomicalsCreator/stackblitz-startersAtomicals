export const validOperations = ['mint', 'update', 'transfer'];

export const API_URLS = {
  realmInfo: 'https://ep.wizz.cash/proxy/blockchain.atomicals.get_realm_info',
  resolvePayName: 'https://ep.wizz.cash/proxy/blockchain.atomicals.resolve_payname',
  bitcoinStats: 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json',
};
const { rpcCall } = require('./services/electrum');
const PoolManager = require('./PoolManager');

const startElectrum = async () => {
 try {
   await rpcCall("daemon.start", []);
   console.log("Electrum daemon started successfully.");
 } catch (error) {
   console.error("Failed to start Electrum daemon.");
 }
};

const initApp = () => {
 startElectrum();
 document.body.innerHTML = PoolManager();
};

initApp();