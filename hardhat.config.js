require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
const dotenv = require("dotenv");


dotenv.config();
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
//  module.exports = {
//   solidity: "0.8.4",
//   networks: {
//     rinkeby: {
//       url: "https://eth-rinkeby.alchemyapi.io/v2/EwaZq9RSbcIMsOha_YEZvuyAlTSXr00d",
//       accounts: [process.env.REACT_APP_PRIVATE_KEY] ,

//     },
   
//   },
//   etherscan: {
//     apikey: process.env.REACT_APP_ETHERSCAN_KEY,
//   },
// };

module.exports = {
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {
    },
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/EwaZq9RSbcIMsOha_YEZvuyAlTSXr00d",
      accounts: ['a540063e76b4e99cedcc7cca4fb70131ef1246424deecdc6bbc1564b6abec82c']
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      },
    },
  },

  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: "M8X3I2PD63S6VKU8J35MDWYNCP6RNQ9PIU"
 
},
}
