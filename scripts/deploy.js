// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
require("dotenv").config();
const { verifyContract } = require("./deploy-helper.js")

const { POLYSCAN_API_KEY } = process.env || "";


async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled

  await hre.run("compile");

  // We get the contract to deploy
  const Greeter = await hre.ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("initial msg");
  await greeter.deployed();

   // verify contract
   if (hre.network.config.network_id === 80001 && POLYSCAN_API_KEY) {
    // waiting for 6 block confirmation
    await greeter.deployTransaction.wait(6)
    await verifyContract(greeter.address, ["initial msg"])
  }
  console.log("Contract Address: ", greeter.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
