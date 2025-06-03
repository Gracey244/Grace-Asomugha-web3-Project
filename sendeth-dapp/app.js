let provider;
let signer;

document.getElementById('connectBtn').addEventListener('click', async () => {
  if (window.ethereum) {
    try {
      // Create a provider using ethers.js v6
      provider = new ethers.BrowserProvider(window.ethereum);

      // Request MetaMask to connect accounts
      await provider.send("eth_requestAccounts", []);

      // Get the signer (user account)
      signer = await provider.getSigner();

      // Get and display the user's address
      const address = await signer.getAddress();
      document.getElementById('account').innerText = `Account: ${address}`;

      // Get and display ETH balance
      const balance = await provider.getBalance(address);
      const ethBalance = ethers.formatEther(balance);
      document.getElementById('balance').innerText = `Balance: ${ethBalance} ETH`;

    } catch (error) {
      console.error("Error connecting to MetaMask:", error);
      alert("Could not connect to MetaMask. Check the console for details.");
    }
  } else {
    alert("MetaMask is not installed. Please install MetaMask and try again.");
  }
});

document.getElementById('sendBtn').addEventListener('click', async () => {
  try {
    if (!signer) {
      alert("Please connect your wallet first.");
      return;
    }

    const recipient = document.getElementById('recipient').value;
    const amount = document.getElementById('amount').value;

    if (!ethers.isAddress(recipient)) {
      alert("Invalid recipient address.");
      return;
    }

    if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
      alert("Enter a valid amount.");
      return;
    }

    // Send ETH transaction
    const tx = await signer.sendTransaction({
      to: recipient,
      value: ethers.parseEther(amount)
    });

    await tx.wait();
    alert("Transaction successful!");

    // Update balance after transaction
    const updatedBalance = await provider.getBalance(await signer.getAddress());
    document.getElementById('balance').innerText = `Balance: ${ethers.formatEther(updatedBalance)} ETH`;

  } catch (error) {
    console.error("Error sending ETH:", error);
    alert("Transaction failed. Check the console for details.");
  }
});
