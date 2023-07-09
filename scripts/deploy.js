const hre = require("hardhat");
const fs = require("fs/promises");

async function main() {
  const Token = await hre.ethers.getContractFactory("Token");
  const token = await Token.deploy("100");

  const Exchange = await hre.ethers.getContractFactory("DecentralizedExchange");
  const exchange = await Exchange.deploy(token, 100);

  await token.waitForDeployment();
  await exchange.waitForDeployment();
  await writeDeploymentInfo(token, "token.json");
  await writeDeploymentInfo(exchange, "exchange.json");
}

async function writeDeploymentInfo(contract, filename = "") {
  const data = {
    network: hre.network.name,
    contract: {
      address: contract.target,
      signerAddress: contract.runner.address,
      abi: contract.interface.format(),
    },
  };

  const content = JSON.stringify(data, null, 2);
  await fs.writeFile(filename, content, { encoding: "utf-8" });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});