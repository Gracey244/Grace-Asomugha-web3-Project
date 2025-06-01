#  Sepolia Voting DApp

This project allows you to cast a vote on a smart contract deployed to the Sepolia Ethereum testnet using Ethers.js v6.

---

##  Features

- Interacts with a deployed smart contract at:
  - `0x35cd167FA931C6c5E07AbB2621846FC35D54baD6`
- Supports voting for:
  - Proposal `1`
  - Proposal `2`
- Uses Ethers.js v6 with best practices

---

##  Setup Instructions

### 1. **Clone and install dependencies:**

```bash
git clone https://github.com/your-username/voting-dapp.git
cd voting-dapp
npm install

### 2. **Create Required Files:**

- vote.js → main script
- env → add your private key & RPC URL
- env.example → template to share safely
- gitignore → # Excludes secrets, logs, node_modules. Add .env to it
- package.json → Project config, dependencies    
- README.md → Project overview, setup and usage guide


Run the voting script:

```bash
npm start 
Or directly:
node vote.js
