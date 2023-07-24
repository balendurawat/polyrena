import dotenv from 'dotenv';
import '@nomiclabs/hardhat-ethers';

dotenv.config();


export default {
  solidity: {
    version: '0.8.16',
    settings: {
      viaIR: true,
      optimizer: {
        enabled: true,
        runs: 100,
      },
    },
  },
  networks: {
    polygon_mumbai: {
      url: 'https://polygon-mumbai.g.alchemy.com/v2/f54McXzWbX77ZgUBc7Zi9hd5HhCPi6qm',
      gasPrice: 225000000000,
      chainId: 80001,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
}



// const { API_URL, PRIVATE_KEY } = process.env;

// module.exports = {
//    solidity: "0.8.16",
//    defaultNetwork: "polygon_mumbai",
//    networks: {
//       hardhat: {},
//       polygon_mumbai: {
//          url: API_URL,
//          accounts: [`0x${PRIVATE_KEY}`]
//       }
//    },
// }