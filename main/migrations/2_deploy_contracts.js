const Shop = artifacts.require("Shop");
const Shop2 = artifacts.require("Shop2");

module.exports = async (deployer, network, accounts) => {
  await deployer.deploy(Shop);
  await deployer.deploy(Shop2);
};
