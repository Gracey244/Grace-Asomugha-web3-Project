#  SendETH DApp

A simple decentralized application (DApp) that allows users to:

- Connect their Ethereum wallet (e.g. MetaMask)
- View their ETH account balance
- Send ETH to another address

This dApp was built with **Ethers.js** and **React**, and runs on the **Ethereum Sepolia test network**.

---

##  Tech Stack

- [React](https://react.dev/) (Vite)
- [ethers.js](https://docs.ethers.org/)
- [MetaMask](https://metamask.io/)

---

##  Project Structure

send-eth-dapp/
├── public/
│   └── vite.svg
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── SendEthDApp.jsx
│   └── index.css
├── .gitignore
├── index.html
├── package.json
├── README.md
├── vite.config.js


---

##  Setup & Run

### 1. Prerequisites

- Node.js ≥ 18
- MetaMask browser extension

### 2. Installation

```bash
git clone https://github.com/your-username/send-eth-dapp.git
cd send-eth-dapp
npm install

### 3. Run the App

```bash
npm run dev
Then open: http://localhost:5173


---
## How To Use

- Open the DApp in your browser.

- Click Connect Wallet and approve via MetaMask.

- Your wallet address and ETH balance will appear.

- Enter a recipient address and ETH amount.

- Click Send ETH.

- Confirm the transaction in MetaMask.

- Wait for success or error message.

