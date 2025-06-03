#  SendETH DApp

A decentralized web application built with **ethers.js v6** that allows users to:

- Connect their MetaMask wallet
- View account address and ETH balance
- Send ETH to another wallet
- Vote between two proposals on the Sepolia testnet via a smart contract

---

##  Project Features

-  Wallet connection using MetaMask
-  ETH transfer to a recipient address
-  Voting on a deployed contract on Sepolia testnet
-  Powered by ethers.js v6 (modular, modern)

---

##  Project Structure

```plaintext
sendeth-dapp/
│
├── index.html          # Main HTML file (UI structure)
├── style.css           # Stylesheet for UI design
├── app.js              # Handles wallet connection and ETH transfer
├── vote.js             # Handles voting logic on the smart contract
├── package.json        # Project config and dependencies
└── README.md           # Project overview and setup guide

---

## Setup Instructions

1. Clone the repository
```bash
git clone https://github.com/yourusername/sendeth-dapp.git
cd sendeth-dapp

2. Install Dependencies
```bash
npm install

3. Run the Project
```bash
npm run dev
Opens the project at http://localhost:3000 in your browser.

## Voting Contract Info
- Network: Sepolia Testnet
- Contract Address: 0x35cd167FA931C6c5E07AbB2621846FC35D54baD6
- Function Used: vote(uint256 _proposal)
    - Pass 1 for Proposal 1
    - Pass 2 for Proposal 2

## How to Use
### Prerequisites
- MetaMask installed
- Connected to Sepolia test network
- Have Sepolia ETH (get from faucet)

## Steps
1. Click "Connect Wallet" to connect MetaMask
2. Check your account and ETH balance
3. Use the Send ETH form to transfer ETH to any address
4. Scroll down to the Vote for a Proposal section
5. Click "Vote for Proposal 1" or "Vote for Proposal 2"
6. Confirm the transaction in MetaMask
7. You're done! 