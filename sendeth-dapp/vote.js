// Sepolia Voting Contract
const VOTING_CONTRACT_ADDRESS = "0x35cd167FA931C6c5E07AbB2621846FC35D54baD6";

// ABI with only the vote function
const VOTING_ABI = [
  "function vote(uint256 _proposal) external"
];

// Attach event listeners to vote buttons
document.getElementById('vote1Btn').addEventListener('click', () => vote(1));
document.getElementById('vote2Btn').addEventListener('click', () => vote(2));

async function vote(proposalNumber) {
  try {
    // Check for MetaMask
    if (!window.ethereum) {
      alert("Please install MetaMask to vote.");
      return;
    }

    // Create provider and signer
    const provider = new ethers.BrowserProvider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();

    // Connect to contract
    const contract = new ethers.Contract(
      VOTING_CONTRACT_ADDRESS,
      VOTING_ABI,
      signer
    );

    // Call vote with proposal number (1 or 2)
    const tx = await contract.vote(proposalNumber);
    await tx.wait();

    alert(`You successfully voted for Proposal ${proposalNumber}!`);
  } catch (error) {
    console.error("Voting failed:", error);
    alert("Voting failed. Check console for details.");
  }
}
