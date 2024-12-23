const { rpcCall } = require('./electrum');

// Set up default relay and configuration
const DEFAULT_RELAY = "wss://nostr.example.com"; // Replace with your relay
const DEFAULT_DENOMINATION = 0.001; // In BTC (1k sats)

const createPool = async (relay = DEFAULT_RELAY, denomination = DEFAULT_DENOMINATION) => {
 try {
   const pool = await rpcCall("joinstr.create_pool", [relay, denomination]);
   console.log(`Created pool with ID: ${pool.pool_id}`);
   return pool.pool_id;
 } catch (error) {
   console.error("Error creating pool:", error);
   throw error;
 }
};

const joinPool = async (poolId) => {
 try {
   const result = await rpcCall("joinstr.join_pool", [poolId]);
   console.log(`Joined pool: ${result}`);
   return result;
 } catch (error) {
   console.error("Error joining pool:", error);
   throw error;
 }
};

module.exports = {
 createPool,
 joinPool
};