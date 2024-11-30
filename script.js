function checkRealm() {
    const realmName = document.getElementById('realmName').value;
    fetch(`/api/checkRealm?name=${realmName}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('realmResult').innerText = data.message || "Realm status fetched.";
        })
        .catch(err => {
            document.getElementById('realmResult').innerText = "Error fetching realm status.";
        });
}

function mintSubrealm() {
    const subrealmName = document.getElementById('subrealmName').value;
    fetch(`/api/mintSubrealm`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: subrealmName })
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('subrealmResult').innerText = data.message || "Subrealm minted successfully.";
        })
        .catch(err => {
            document.getElementById('subrealmResult').innerText = "Error minting subrealm.";
        });
}

function validatePayName() {
    const payName = document.getElementById('paynameInput').value;
    fetch(`/api/validatePayName?payName=${encodeURIComponent(payName)}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('paynameResult').innerText = data.message || "PayName validated.";
        })
        .catch(err => {
            document.getElementById('paynameResult').innerText = "Error validating PayName.";
        });
}

function fetchBitcoinStats() {
    fetch(`/api/bitcoinStats`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('bitcoinStats').innerText = JSON.stringify(data, null, 2);
        })
        .catch(err => {
            document.getElementById('bitcoinStats').innerText = "Error fetching Bitcoin stats.";
        });
}