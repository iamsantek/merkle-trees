import { HardhatUserConfig } from "hardhat/types";

const { expect } = require("chai");
const keccak256 = require("keccak256");
const { MerkleTree } = require("merkletreejs");

import "@nomiclabs/hardhat-ethers";
import * as dotenv from "dotenv"

dotenv.config();



// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  solidity: "0.8.4",
  networks: {
    ropsten: {
      url: process.env.ROPSTEN_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
  }
};

export default config;
