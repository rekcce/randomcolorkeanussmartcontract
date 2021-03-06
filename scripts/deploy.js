const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);
  const linkToken = "0xb0897686c545045aFc77CF20eC7A532E3120E0F1";
  const vrfCoordinator = "0x3d2341ADb2D31f1c5530cDC622016af293177AE0";
  const keyHash =
    "0xf86195cf7690c55907b2b611ebb7343a6f649bff128701cc542f0569e2c549da";
  const fee = "100000000000000";
  const NFT = await hre.ethers.getContractFactory("NFT");
  const nft = await NFT.deploy(vrfCoordinator, linkToken, keyHash, fee);

  await nft.deployed();
  const nftContractAddress = nft.address;
  console.log("NFT deployed to:", nftContractAddress);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
