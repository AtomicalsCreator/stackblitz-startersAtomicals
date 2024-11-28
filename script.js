import { checkRealm } from './realmQuery.js';
import { getBitcoinStats } from './getBitcoinStats.js';

document.getElementById('check-realm').addEventListener('click', async () => {
    const realmName = document.getElementById('realm-name').value;
    const result = await checkRealm(realmName);
    document.getElementById('realm-result').innerText = result.message;
});

getBitcoinStats();