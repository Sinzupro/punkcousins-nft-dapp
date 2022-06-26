
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
async function main() {


  // We get the contract to deploy
  const PunkCousins = await hre.ethers.getContractFactory("PunkCousins");
  const punkCousins = await PunkCousins.deploy();

  await punkCousins.deployed();

  console.log("PunkCousins deployed to:", punkCousins.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
