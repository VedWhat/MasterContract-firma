const main = async () => {
    const domainContractFactory = await hre.ethers.getContractFactory('MasterContract');
    const domainContract = await domainContractFactory.deploy();
    await domainContract.deployed();
  
    console.log("Contract deployed to:", domainContract.address);
  
      let txn = await domainContract.registerUser("ved","testIpfsHash");
      await txn.wait();

      const address = await domainContract.getIpfsHash("ved");
      console.log("Hash:", address);  
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