const MyContract = artifacts.require("./HelloTesting.sol");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(MyContract);
};