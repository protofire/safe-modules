const HDWalletProvider = require("@truffle/hdwallet-provider");
require("dotenv").config();
const package = require("./package");
const mnemonic = process.env.MNEMONIC;
const privateKeys = process.env.PRIVATE_KEYS;
const token = process.env.INFURA_TOKEN;

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
    },
    moonbase: {
      provider: () => {
        return new HDWalletProvider(
          privateKeys,
          "https://rpc.api.moonbase.moonbeam.network"
        );
      },
      network_id: "1287",
      gasPrice: 1000000000, //
    },
    moonriver: {
      provider: () => {
        return new HDWalletProvider(
          privateKeys,
          "https://rpc.api.moonriver.moonbeam.network"
        );
      },
      network_id: "1285",
      gasPrice: 1000000000, //
    },
    moonbeam: {
      provider: () => {
        return new HDWalletProvider(
          privateKeys,
          "https://rpc.api.moonbeam.network"
        );
      },
      network_id: "1284",
      gasPrice: 100000000000, //
    },
    bobabeam: {
      provider: () => {
        return new HDWalletProvider(
          privateKeys,
          "https://bobabeam.boba.network/"
        );
      },
      network_id: "1294",
      gasPrice: 30000000000, //
    },
    evmos: {
      provider: () => {
        return new HDWalletProvider(
          privateKeys,
          "https://eth.bd.evmos.org:8545"
        );
      },
      network_id: "9001",
      gasPrice: 27500000000, //
    },
    evmos_testnet: {
      provider: () => {
        return new HDWalletProvider(
          privateKeys,
          "https://eth.bd.evmos.dev:8545"
        );
      },
      network_id: "9000",
      gasPrice: 13750000, //
    },
    velas: {
      provider: () => {
        return new HDWalletProvider(
          privateKeys,
          "https://evmexplorer.velas.com/rpc"
        );
      },
      network_id: "106",
      gasPrice: 3000000000,
      networkCheckTimeout: 300000, //
    },
    velas_testnet: {
      provider: () => {
        return new HDWalletProvider(
          privateKeys,
          "https://evmexplorer.testnet.velas.com/rpc"
        );
      },
      network_id: "111",
      gasPrice: 3000000000,
      networkCheckTimeout: 300000, //
    },
    rinkeby: {
      provider: () => {
        return new HDWalletProvider(
          mnemonic,
          "https://rinkeby.infura.io/v3/" + token
        );
      },
      network_id: "4",
      gasPrice: 25000000000, // 25 Gwei
    },
    goerli: {
      provider: () => {
        return new HDWalletProvider(
          mnemonic,
          "https://goerli.infura.io/v3/" + token
        );
      },
      network_id: "5",
      gasPrice: 25000000000, // 25 Gwei
    },
    kovan: {
      provider: () => {
        return new HDWalletProvider(
          mnemonic,
          "https://kovan.infura.io/v3/" + token
        );
      },
      network_id: "42",
      gasPrice: 25000000000, // 25 Gwei
    },
    mainnet: {
      provider: () => {
        return new HDWalletProvider(
          mnemonic,
          "https://mainnet.infura.io/v3/" + token
        );
      },
      network_id: "1",
      gasPrice: 41000000000, // 41 Gwei
    },
    xdai: {
      provider: () => {
        return new HDWalletProvider(mnemonic, "https://dai.poa.network");
      },
      network_id: "100",
      gasPrice: 1000000000, // 1 Gwei
    },
    volta: {
      provider: () => {
        return new HDWalletProvider(
          mnemonic,
          "https://volta-rpc.energyweb.org"
        );
      },
      network_id: "73799",
      gasPrice: 1,
    },
    ewc: {
      provider: () => {
        return new HDWalletProvider(mnemonic, "https://rpc.energyweb.org");
      },
      network_id: "246",
      gasPrice: 1,
    },
    bsc: {
      provider: () => {
        return new HDWalletProvider(
          mnemonic,
          "https://bsc-dataseed.binance.org"
        );
      },
      network_id: "56",
      gasPrice: 5000000000, // 5 Gwei
    },
    avalanche: {
      provider: () => {
        return new HDWalletProvider(
          mnemonic,
          "https://api.avax.network/ext/bc/C/rpc"
        );
      },
      network_id: "43114",
      gasPrice: 47000000000, // 47 Gwei
    },
    polygon: {
      provider: () => {
        return new HDWalletProvider(mnemonic, "https://polygon-rpc.com/");
      },
      network_id: "137",
      gasPrice: 35000000000, // 35 Gwei
    },
  },
  compilers: {
    solc: {
      version: package.dependencies.solc,
      settings: {
        optimizer: {
          enabled: false,
        },
      },
    },
  },
};
