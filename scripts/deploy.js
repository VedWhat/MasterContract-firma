const main = async () => {
    const domainContractFactory = await hre.ethers.getContractFactory('Polydns');
    const domainContract = await domainContractFactory.deploy("mcoffee");
    await domainContract.deployed();
  
    console.log("Contract deployed to:", domainContract.address);
  
      let txn = await domainContract.register("vedch1",  {value: hre.ethers.utils.parseEther('0.1')});
      await txn.wait();
  
    txn = await domainContract.setRecord("vedch1", "testemail.xyz");
    await txn.wait();
  
    const address = await domainContract.getAddress("vedch1");
    console.log("Owner of domain ved:", address);
  
    const balance = await hre.ethers.provider.getBalance(domainContract.address);
    console.log("Contract balance:", hre.ethers.utils.formatEther(balance));
  }
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();