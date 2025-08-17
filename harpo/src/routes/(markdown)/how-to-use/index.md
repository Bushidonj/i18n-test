# How to Use

The provided SDK automates the process of generating cryptographic proofs and creating the necessary payload for interacting with the smart contract. Additionally, it offers tools for monitoring network events and consolidating ownership of issued [UTXOs](concepts/utxo).

The files required for proof generation will be provided with the SDK and **should not be modified**. The SDK automatically manages proof generation and the payload structure to be sent to the smart contract.

The **ABIs of the deployed contracts** will be made available so users can interact using their tools of choice (such as Web3.js, Ethers.js, or Hardhat). Alternatively, the SDK can be used to facilitate this interaction.

The protocol includes the implementation of **listeners** to capture events emitted on the network. These events are essential for consolidating ownership of issued [UTXOs](concepts/utxo) and ensuring the correct execution of operations.

The SDK provides specific tools for:

* Capturing and filtering relevant events.
* Verifying the validity and authenticity of a [UTXO](concepts/utxo).
* Automating the process of registering and updating asset states.