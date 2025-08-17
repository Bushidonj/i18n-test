# UTXO

The Harpo protocol uses the **UTXO (Unspent Transaction Output)** model to represent assets within the private network. Each UTXO contains information about the owner, asset type, amount, and a unique identifier (nonce), ensuring security and traceability.

#### **Example of UTXO Representation**

```json
// token
{    
  owner: [[8899879889][465464546654]],  // Point [X,Y]
  type: "1",                            // Ether, Bitcoin, CBDC,..
  amount: 900n,
  nonce: 588446545644645484985n
}
```

# SMT

Harpo uses a **Sparse Merkle Tree (SMT)** to efficiently store commitments of private transactions. This model offers fast and efficient verifications, along with supporting compact proofs.

## Sparse Merkle Tree Structure

- **Tree Root:** Represents the global state of the tree and is stored in the smart contract for validation.
- **Query and Path:** To prove the existence of a commitment, a Merkle path is generated, including sibling hashes up to the root.
- **Root History:** The protocol maintains a history of tree roots to allow verification of previous transactions without exposing sensitive details.

## Benefits of Using SMT

✅ Storage efficiency for large sparse datasets.  
✅ Efficient and compact inclusion and exclusion proofs.  
✅ Facilitates off-chain verification and interaction with smart contracts.

# Hashing

To ensure data integrity and security within the protocol, we use **cryptographic hash functions**. Hashing is essential for creating unique identifiers and protecting user privacy, ensuring that data stored in the [**Sparse Merkle Tree**](smt) is immutable and verifiable.

#### **Why Use Poseidon?**

The **Poseidon** hash algorithm was chosen due to its efficiency in **Zero-Knowledge Proof (ZKP) circuits**. Unlike traditional hash functions like SHA-256 or Keccak, Poseidon is optimized for use within **SNARK and STARK circuits**, making cryptographic proofs faster and more efficient.

#### **Poseidon Characteristics**

* Designed to be efficient in **zero-knowledge proofs (ZKP)**.
* Reduces computational complexity within **SNARK circuits**.
* Maintains a high level of security against cryptographic attacks.
* Used to generate [**commitments**](commitment) and ensure the integrity of transacted data.

#### **Poseidon Usage in Harpo**

In the Harpo protocol, Poseidon is used to:  

✅ Create hashes of [**UTXOs**](utxo) before storing them in the Merkle Tree.  
✅ Generate [**commitments**](commitment) to ensure transaction privacy.  
✅ Verify **inclusion proofs** within the data structure.

By using **Poseidon**, we ensure the protocol is optimized for **ZK proof** environments, making private transactions more efficient and secure.

# Secret

The **Secret** is the representation of a [**UTXO**](utxo) (token) encoded in a way that allows it to be transacted securely on the network without revealing its information publicly. However, the holder of the private key corresponding to the public key contained in the token can decrypt and access its content.

**Harpo** provides specific functions to **encrypt and decrypt** the [UTXO](utxo), ensuring security and privacy in transactions.

The **Secret** consists of two main blocks of information:

## 1️⃣ Header

This block contains the essential metadata for validating and recovering the [UTXO](utxo):

- **Shared Point:** Used for decryption key derivation.
- **Asset Owner's Public Key:** Identifies the authorized recipient who can recover the information.
- **Nonce:** A unique identifier that ensures the [UTXO](utxo)'s uniqueness and prevents replay attacks.

## 2️⃣ Payload

This block stores the asset details and may vary depending on the application:

- **Asset Type:** Defines the type of token (e.g., Ether, Bitcoin, CBDC, etc.).
- **Amount:** Indicates the value contained in the UTXO.
- **Other Information:** Additional metadata can be added depending on the use case.

This structure ensures that the **Secret** can be shared securely within the private network without exposing sensitive information, maintaining transaction privacy and integrity.

# AuditSecret

Under construction ...

# Commitment

The **Commitment** is a fundamental element for ensuring privacy and integrity of transactions within the Harpo protocol. It is generated from the **hash of the** [**SECRET**](secret) using the **Poseidon** hash function. Once generated, the **commitment** is stored in the [**Merkle Tree**](smt), ensuring that only hashed information is published on the blockchain, thus preserving the privacy of transacted data.

#### **Commitment Formula**

$$
C = PoseidonHash( secret )
$$

#### **Commitment's Role in the Protocol**

✅ Ensures data integrity and authenticity without revealing sensitive information.  
✅ Enables efficient verification within the [**Sparse Merkle Tree (SMT)**](smt).  
✅ Prevents the reuse of spent [UTXOs](utxo), ensuring Harpo's transaction model.

# Nullifiers

**Nullifiers** are used to authorize the spending of [UTXOs](utxo) in a disconnected manner, preventing transaction triangulation. They are generated from the hash of the [**Commitment**](commitment) combined with the [UTXO](utxo) owner's private key.

**Formula:**

$$
Nullifier = PoseidonHash( Commitment, PrivKey)
$$

In the asset contract, **Nullifiers** are stored in a `mapping`, allowing non-existence queries. This prevents the same [**Commitment**](commitment) from being used more than once, ensuring the security and uniqueness of transactions within the Harpo protocol.

# Zero Knowledge Proof

Zero-Knowledge Proof allows proving knowledge of certain information without revealing the information itself.

In Harpo, the proof is submitted to various circuits that verify if the transaction requirements are met:

**Input Verification**  
This circuit receives the **input tokens** and the sender's **private key**.

It generates the [commitments](commitment) and [nullifiers](nullifiers) and compares them with those provided in the transaction.

**Output Verification**  
This circuit receives the **output tokens** and the recipients' **public keys**.

It generates the [commitments](commitment) and compares them with those provided in the transaction.

**Tree Verification**  
This circuit receives the **tree root** and the **path** to the [commitment](commitment), ensuring that if the root exists, the commitment exists (remembering that the asset contract verifies if the root exists in the tree's history of roots).

**Mass Conservation Verification**  
This circuit verifies if the sum of input values matches the sum of output values, as well as ensuring that output values are greater than zero.

**AuditSecret Verification**  
This circuit receives the **input amounts, output amounts, recipients' public keys**, the sender's **private key**, and the contract authority's **public key**, ensuring the provided values match the transaction values.

It generates the [auditSecret](auditsecret) and compares it with the one provided in the transaction.

# Circuits

**Circuits** define a set of mathematical and cryptographic rules that allow verifying the validity of proofs presented in the system. We use **Circom** to encode these rules, ensuring all transactions follow the protocol's established rules without compromising the privacy of the involved data.

![Circuits](https://3529280519-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FlwpfmYfPia0vNEkuQFQN%2Fuploads%2Fh0imVbqzamq37O8gV5Ff%2FCircuitos.PNG?alt=media&token=ba38db52-2e4b-47dc-baa4-5e3295da9731)

# Prover

It is a component used to generate proofs. This component is provided along with three files: WASM, VKEY, and ZKEY.

Two methods are exposed:

```typescript
generateTransferProof
( 
  inputTokens: Token[],       // List of input tokens (Pre-Image)
  outputToken: Token,         // Output token for counterparty
  pubKeyDestiny: Point,       // Recipient's public key
  privKeyOrigin: string,      // Origin's private key
  proofsSMT: ProofSMT[],      // Object containing the tree root and path of each input token
  changeToken?: Token         // Change token for the origin, if applicable
)
// returns the proof to be sent to the contract
```

```typescript
verifyTransferProof
(
  proofJson: Proof,        // Proof to be sent to the network
  inSecrets: bigint[],     // List of secrets related to input tokens
  outSecrets: bigint[],    // List of secrets related to output tokens
  auditSecret: bigint[],   // Secret containing audit data
  senderPrivKey: string    // Origin's private key
)
// returns whether the proof is true or false
```

# Transfer

The transfer object to be sent to the network must follow the following interface:

```typescript
Transfer {
  inputs: Input[];       // list of Input objects
  merkleRoot: bigint;    // Merkle tree root
  outputs: Output[];     // list of Output objects
  auditSecret: bigint[]; // auditor's secret
  proof: Proof;          // Transaction proof
} 
```

The inputs (Inputs) represent the tokens already in the originator's possession.

The outputs (Outputs) represent the tokens that will be created and stored in the Merkle tree if the transaction is successful.

The Merkle Tree Root will be verified by the contract and, together with the proof, determines whether the commitments used as inputs exist or not.

The AuditSecret will be emitted to the network if the transaction is successful and will be used to inform the asset authority about the transactions made.

The Proof will be verified by the verifier contract and ensures that the requirements for the transaction have been met.

# Inputs

The inputs of a [transfer](transfer) transaction consist of a list of [nullifiers](nullifiers).

```typescript
Input {
  nullifier: bigint;
}
```

# Outputs

The outputs of a [transfer](transfer) transaction consist of a list of [secrets](secret).

```
Output {
  secret: bigint[];
}
```

These outputs will give rise to the [commitments](commitment) that will be inserted into the [Merkle Tree](smt) if the transaction is successful. They will be submitted to the verifier circuit, which will ensure the consistency of the provided [secret](secret) with the [UTXO](utxo) pre-image.

Once the transaction is successful, these [secrets](secret) will be emitted to the network through events.

# Harpo

We provide a reference implementation of the protocol using TypeScript. This implementation contains the necessary functions to implement the protocol, as well as the methods needed to generate proofs and interact with the contracts.

The current implementation includes simple transfers, transfers with change, and DVP.

To interact with the protocol, we have edge contracts that allow the conversion of a **Public Asset** from the network into a **Private Asset** and vice versa.

![Swap](https://3529280519-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FlwpfmYfPia0vNEkuQFQN%2Fuploads%2Fnzoge7yPJHSqwdrxhGuL%2FSwap.PNG?alt=media&token=7edc47b9-c5d7-4962-a4e4-3f58e25ef051)

The process of creating an asset in the private environment involves performing a Burn on the public asset contract and a Mint on the private asset contract. The reverse process occurs to return the asset from the private to the public environment.

Minting an asset in the private environment consists of generating a [UTXO](concepts/utxo), creating a [SECRET](concepts/secret) from it, and finally adding a [COMMITMENT](concepts/commitment) to the [SMT](concepts/smt), in addition to emitting an event on the network, which will be listened to by the recipient's Wallet.

Once the recipient is aware that an asset has been issued to their wallet, they can transact that asset privately on the network.

You can check the [TRANSFER WITH CHANGE](transfer-with-change) scenario to see how this type of transaction occurs.

# Transfer with Change

In this use case, we will explore how a transfer transaction with change works.

In this network, we transact a private token called PKNT (Private Knuts). We have the following participants in the network listening to transactions: **Maria**, **João**, and **Leandro**, as well as the currency authority, the **Gringotts** Bank.

**Maria** has 2 UTXOs in her possession, one worth **10** PKNT and another worth **12** PKNT, and wants to transfer **15** PKNT to **João**.

To be continued...

# Combined DvP

Under construction...

# Merkle Tree

A Merkle Tree (or hash tree) is a binary tree data structure used in distributed systems, such as blockchains, to efficiently organize and verify large datasets. It is built from hashes of individual data, which are grouped and hashed repeatedly until a single Merkle root is formed, a unique hash representing all the data in the tree.

## Structure

1. **Leaves:** Each leaf contains the hash of an individual data piece (e.g., a transaction in a blockchain or a record in Harpo).
2. **Intermediate Nodes:** Each non-leaf node contains the hash of its children. Two child nodes are combined (usually concatenated), and the result is hashed again.
3. **Root (Merkle Root):** The top of the tree, a single hash that summarizes all the leaf data.

## Main Advantages of a Merkle Tree:

- **Efficient Data Verification:**
  - Allows verifying if specific data (like a transaction or hash) is included in a large dataset without downloading or processing the entire set. Only the path (Merkle Path) from the leaf to the root needs to be verified.
  - Example: In a blockchain, a light node can verify a transaction by providing only the transaction hash, the Merkle Path, and the Merkle Root.
- **Integrity and Consistency:**
  - The Merkle Root is a "fingerprint" of all the data. Any change in a single piece of data (like a transaction) changes the hashes along the path to the root, allowing quick detection of inconsistencies.
- **Scalability:**
  - Storing only the Merkle Root in a block header (as in blockchains) reduces the amount of data that needs to be stored or transmitted, while the leaves can be distributed or stored separately.
- **Compact Proofs:**
  - Merkle Trees allow creating compact inclusion proofs, useful for systems that use **ZKP** (as you mentioned). For example, you can prove that a hash is in the tree without revealing other data.
- **Parallelism:**
  - The tree's construction can be parallelized since leaf hashes can be calculated independently, which is advantageous for high-performance systems like Harpo.
