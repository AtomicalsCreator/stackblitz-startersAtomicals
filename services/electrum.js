const axios = require('axios');

// Configure Electrum Daemon RPC
const ELECTRUM_RPC_URL = "http://127.0.0.1:7777"; // Update with your Electrum RPC URL
const RPC_USER = "user";
const RPC_PASS = "pass";

const rpcCall = async (method, params = []) => {
 try {
   const response = await axios.post(ELECTRUM_RPC_URL, {
     method,
     params,
     id: 1
   }, {
     auth: {
       username: RPC_USER,
       password: RPC_PASS
     }
   });
   return response.data.result;
 } catch (error) {
   console.error(`Error calling Electrum RPC: ${error.message}`);
   throw error;
 }
};

module.exports = {
 rpcCall
};