const { createPool, joinPool } = require('../services/joinstr');

const PoolManager = () => {
 const createNewPool = async () => {
   try {
     const poolId = await createPool();
     alert(`Pool created successfully! Pool ID: ${poolId}`);
   } catch (error) {
     alert("Failed to create pool.");
   }
 };

 const joinExistingPool = async () => {
   const poolId = prompt("Enter Pool ID to join:");
   try {
     const result = await joinPool(poolId);
     alert("Successfully joined pool!");
   } catch (error) {
     alert("Failed to join pool.");
   }
 };

 return `
   <div>
     <button onclick="createNewPool()">Create Pool</button>
     <button onclick="joinExistingPool()">Join Pool</button>
   </div>
 `;
};

module.exports = PoolManager;