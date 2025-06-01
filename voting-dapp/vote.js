// vote.js
import { JsonRpcProvider, Wallet, Contract } from 'ethers';
import dotenv from 'dotenv';
dotenv.config();

const CONTRACT_ADDRESS = "0x35cd167FA931C6c5E07AbB2621846FC35D54baD6";

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const PROVIDER_URL = process.env.SEPOLIA_RPC_URL;

const ABI = [
  "function vote(uint8 proposal) external"
];

async function castVote(proposalNumber) {
  if (![1, 2].includes(proposalNumber)) {
    throw new Error("❌ Invalid proposal number. Use 1 or 2.");
  }

  const provider = new JsonRpcProvider(PROVIDER_URL, undefined, {
    staticNetwork: undefined,
    pollingInterval: 10000,
    timeout: 15000
  });

  const wallet = new Wallet(PRIVATE_KEY, provider);
  const contract = new Contract(CONTRACT_ADDRESS, ABI, wallet);

  try {
    console.log(`Casting vote for Proposal ${proposalNumber}...`);
    const tx = await contract.vote(proposalNumber);
    console.log("Transaction sent. Waiting for confirmation...");
    const receipt = await tx.wait();
    console.log("✅ Vote cast successfully!");
    console.log("Transaction hash:", receipt.hash);
  } catch (err) {
    console.error("❌ Error casting vote:", err.reason || err.message);
  }
}

// Run with CLI arg (e.g., node vote.js 1)
const proposal = parseInt(process.argv[2]);
castVote(proposal);
