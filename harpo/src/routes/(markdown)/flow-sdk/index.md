# Flow of Use of the SDK for Proofs and Interaction

## 1. Environment preparation ⭐  
At the start, the user should obtain the SDK with the necessary files to generate cryptographic proofs. These files are essential for the protocol's operation and should not be modified. The SDK is prepared to assume control of proof creation, eliminating the need for manual manipulation of these elements.

## 2. Proof and payload generation ⭐  
With the environment ready, the SDK assumes the role of generating the cryptographic proof and automatically assembling the payload to be sent to the smart contract. This automation ensures security and consistency in communication with the blockchain, avoiding human errors and speeding up the validation process.

## 3. Event monitoring on the network ⭐  
The protocol requires that listeners be configured to capture events emitted on the blockchain network. These events are crucial for consolidating ownership of UTXOs and ensuring that operations are executed correctly. The SDK offers direct support for implementing and managing these listeners with efficiency.

## 4. Interaction with smart contracts ⭐  
To interact with contracts, the user will have access to the ABIs of deployed contracts. With these definitions, it is possible to use libraries such as Web3.js, Ethers.js or Hardhat. If you prefer a simpler path, the SDK itself provides methods that facilitate this communication without having to manually configure everything.

## 5. Ready! ⭐

---

![Steps image](/assets/images/stepImages.png)