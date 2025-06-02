// vote.js
import { JsonRpcProvider, Wallet, Contract } from 'ethers';
import dotenv from 'dotenv';
dotenv.config();

const CONTRACT_ADDRESS = "0x35cd167FA931C6c5E07AbB2621846FC35D54baD6";
const ABI = [
  "function vote(uint proposal) external",
  "function voters(address) public view returns (uint weight, bool voted, uint vote)"
];

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const PROVIDER_URL = process.env.SEPOLIA_RPC_URL;

const provider = new JsonRpcProvider(PROVIDER_URL, undefined, {
  staticNetwork: undefined,
  pollingInterval: 10000,
  timeout: 15000
});

const wallet = new Wallet(PRIVATE_KEY, provider);
const contract = new Contract(CONTRACT_ADDRESS, ABI, wallet);

async function castVote(proposalNumber) {
  if (![1, 2].includes(proposalNumber)) {
    console.error("❌ Invalid proposal number. Use 1 or 2.");
    process.exit(1);
  }

  try {
    const voter = await contract.voters(wallet.address);
    const weight = voter.weight.toString();
    const voted = voter.voted;

    if (weight === '0') {
      console.error("❌ You are not authorized to vote. Ask the chairperson to grant you voting rights.");
      return;
    }
    if (voted) {
      console.error("❌ You have already voted.");
      return;
    }

    console.log(`Casting vote for Proposal ${proposalNumber}...`);
    const tx = await contract.vote(proposalNumber);
    console.log("⏳ Transaction sent. Waiting for confirmation...");
    const receipt = await tx.wait();
    console.log("✅ Vote cast successfully!");
    console.log("Transaction hash:", receipt.hash);
  } catch (err) {
    console.error("❌ Error casting vote:", err.reason || err.message);
  }
}

const proposalInput = parseInt(process.argv[2], 10);
if (isNaN(proposalInput)) {
  console.error("❌ Please pass a valid proposal number (1 or 2) as a CLI argument.");
  process.exit(1);
}

castVote(proposalInput);
