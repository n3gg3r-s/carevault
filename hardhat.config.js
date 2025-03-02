require("dotenv").config();

require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/YOUR_ALCHEMY_API_KEY", // Replace with your API key
      accounts: [`0x${process.env.PRIVATE_KEY}`], // Load private key from .env
    },
  },
};
