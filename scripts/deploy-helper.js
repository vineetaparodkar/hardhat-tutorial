const hre = require("hardhat");

const verifyContract =async (contractAddress, args) => {

    try {
        await hre.run("verify:verify", {
          address: contractAddress,
          constructorArguments: args,
        })
      } catch (e) {
        console.log("Error: ",e);
        if (e.message.toLowerCase().includes("already verified")) {
          console.log("Already verified!");
        } else {
          console.log(e);
        }
      }
};

module.exports = {
  verifyContract: verifyContract,
};
