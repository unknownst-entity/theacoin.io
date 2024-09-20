const Web3 = require('web3');
const web3 = new Web3('https://bsc-dataseed.binance.org/');

// Uniswap Pool Address
const poolAddress = '0xB2575Cf2A47b611beAe6bD54FA43859fECC5F307';

// Function to fetch and display pool data
async function getPoolData() {
    // Example: Fetch pool data here
    const poolContract = new web3.eth.Contract(ABI, poolAddress);
    const data = await poolContract.methods.getReserves().call();
    
    // Display data
    document.getElementById('pool-values').innerHTML = `
        <p>Reserve 0: ${data[0]}</p>
        <p>Reserve 1: ${data[1]}</p>
    `;
}

getPoolData();
