import { useState } from 'react'
import { BrowserProvider, parseEther } from 'ethers'

export default function SendEthDApp() {
  const [provider, setProvider] = useState(null)
  const [account, setAccount] = useState(null)
  const [balance, setBalance] = useState(null)
  const [recipient, setRecipient] = useState('')
  const [amount, setAmount] = useState('')
  const [status, setStatus] = useState('')

  const connectWallet = async () => {
    if (typeof window.ethereum === 'undefined') {
      setStatus('❌ MetaMask is not installed.')
      return
    }

    try {
      const newProvider = new BrowserProvider(window.ethereum)
      setProvider(newProvider)

      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
      const selected = accounts[0]
      setAccount(selected)

      const balance = await newProvider.getBalance(selected)
      setBalance(balance.toString() / 1e18) // Convert from wei
      setStatus('')
    } catch (err) {
      setStatus(`❌ ${err.message}`)
    }
  }

  const sendEth = async () => {
    if (!recipient || !amount || !provider) return
    try {
      const signer = await provider.getSigner()
      const tx = await signer.sendTransaction({
        to: recipient,
        value: parseEther(amount),
      })
      setStatus('Transaction sent. Waiting for confirmation...')
      await tx.wait()
      setStatus('✅ Transaction confirmed!')
    } catch (err) {
      setStatus(`❌ ${err.message}`)
    }
  }

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1>SendETH DApp</h1>

      {account ? (
        <>
          <p><strong>Wallet:</strong> {account}</p>
          <p><strong>Balance:</strong> {balance} ETH</p>
        </>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}

      <hr />
      <h2>Send ETH</h2>
      <input
        type="text"
        placeholder="Recipient Address"
        value={recipient}
        onChange={e => setRecipient(e.target.value)}
      />
      <input
        type="text"
        placeholder="Amount in ETH"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />
      <button onClick={sendEth}>Send</button>
      <p>{status}</p>
    </div>
  )
}
