import { ethers } from "hardhat";
import { Signer } from "ethers";
import { expect } from "chai";

describe("LectureNFT", () => {
  let owner: Signer;

  before(async () => {
    [owner] = await ethers.getSigners();
  });

  it("should have 10 nfts", async () => {
    const LectureNFT = await ethers.getContractFactory("LectureNFT");
    const contract = await LectureNFT.deploy();

    await contract.deployed();

    expect(await contract.balanceOf(await owner.getAddress())).to.be.equal(10);
  });
});
