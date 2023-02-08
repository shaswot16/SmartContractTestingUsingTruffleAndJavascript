const MyContract = artifacts.require("./Storage.sol");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(MyContract);
};