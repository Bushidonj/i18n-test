import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Concepts() {
  const { t } = useTranslation();

  // Terminal-like wrapper
  const Terminal = ({ title = 'example.txt', children }) => (
    <div className="my-5 overflow-hidden rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-950">
      <div className="flex items-center justify-between px-3 py-2 bg-slate-900 text-slate-200">
        <div className="flex items-center gap-2">
          <span className="inline-block w-3 h-3 rounded-full bg-red-500" />
          <span className="inline-block w-3 h-3 rounded-full bg-yellow-400" />
          <span className="inline-block w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-xs opacity-80">{title}</span>
      </div>
      <pre className="m-0 p-4 overflow-auto text-sm leading-6 text-slate-100">
        <code className="font-mono whitespace-pre">{children}</code>
      </pre>
    </div>
  );

  // Code examples (exact content as in markdown)
  const utxoExample = `// token
{    
  owner: [[8899879889][465464546654]],  // Point [X,Y]
  type: "1",                            // Ether, Bitcoin, CBDC,..
  amount: 900n,
  nonce: 588446545644645484985n
}`;

  const generateTransferProofTS = `generateTransferProof
( 
  inputTokens: Token[],       // List of input tokens (Pre-Image)
  outputToken: Token,         // Output token for counterparty
  pubKeyDestiny: Point,       // Recipient's public key
  privKeyOrigin: string,      // Origin's private key
  proofsSMT: ProofSMT[],      // Object containing the tree root and path of each input token
  changeToken?: Token         // Change token for the origin, if applicable
)
// returns the proof to be sent to the contract`;

  const verifyTransferProofTS = `verifyTransferProof
(
  proofJson: Proof,        // Proof to be sent to the network
  inSecrets: bigint[],     // List of secrets related to input tokens
  outSecrets: bigint[],    // List of secrets related to output tokens
  auditSecret: bigint[],   // Secret containing audit data
  senderPrivKey: string    // Origin's private key
)
// returns whether the proof is true or false`;

  const transferInterfaceTS = `Transfer {
  inputs: Input[];       // list of Input objects
  merkleRoot: bigint;    // Merkle tree root
  outputs: Output[];     // list of Output objects
  auditSecret: bigint[]; // auditor's secret
  proof: Proof;          // Transaction proof
}`;

  const inputInterfaceTS = `Input {
  nullifier: bigint;
}`;

  const outputInterfaceTS = `Output {
  secret: bigint[];
}`;

  return (
    <section className="max-w-5xl mx-auto px-5 sm:px-8 py-12">
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-slate-100">
          {t('pages.concepts.utxo.title')}
        </h1>
      </header>

      <div className="max-w-none text-lg sm:text-xl leading-relaxed md:leading-loose space-y-10 text-gray-800 dark:text-slate-200">

        {/* UTXO */}
        <p className="mt-3">{t('pages.concepts.utxo.body')}</p>

        <h2 className='text-2xl sm:text-3xl font-semibold'>{t('pages.concepts.utxo.exampleTitle', 'Example of UTXO Representation')}</h2>
        <Terminal title="utxo-example.json">{utxoExample}</Terminal>

        <hr className="border-slate-400 dark:border-slate-700" />

        {/* SMT */}
        <h2 className='text-2xl sm:text-3xl font-semibold'>{t('pages.concepts.smt.title')}</h2>

        <p className="mt-3">{t('pages.concepts.smt.body')}</p>
        <h2 className='text-2xl sm:text-3xl font-semibold'>{t('pages.concepts.smt.structure')}</h2>
        <ul className="list-disc list-outside pl-6 space-y-2 marker:text-slate-400">
          <li>{t('pages.concepts.smt.items.root')}</li>
          <li>{t('pages.concepts.smt.items.path')}</li>
          <li>{t('pages.concepts.smt.items.history')}</li>
        </ul>

        <h2 className='text-2xl sm:text-3xl font-semibold'>{t('pages.concepts.smt.benefitsTitle', 'Benefits of Using SMT')}</h2>
        <ul className="list-disc list-outside pl-6 space-y-2 marker:text-slate-400">
          <li>{t('pages.concepts.smt.benefits.storage')}</li>
          <li>{t('pages.concepts.smt.benefits.inclusion')}</li>
          <li>{t('pages.concepts.smt.benefits.offchain')}</li>
        </ul>

       <hr className="border-slate-400 dark:border-slate-700" />

        {/* Hashing */}
        <h2 className='text-2xl sm:text-3xl font-semibold'>{t('pages.concepts.hashing.title')}</h2>
        <p className="mt-3">{t('pages.concepts.hashing.body1')}</p>
        <h2 className='text-2xl sm:text-3xl font-semibold'>{t('pages.concepts.hashing.whyPoseidonTitle', 'Why Poseidon')}</h2>
        <p className="mt-3">{t('pages.concepts.hashing.whyPoseidon')}</p>

        <h2 className='text-2xl sm:text-3xl font-semibold'>{t('pages.concepts.hashing.characteristics')}</h2>
        <ul className="list-disc list-outside pl-6 space-y-2 marker:text-slate-400">
          <li>{t('pages.concepts.hashing.items.zkEfficient')}</li>
          <li>{t('pages.concepts.hashing.items.complexity')}</li>
          <li>{t('pages.concepts.hashing.items.security')}</li>
          <li>{t('pages.concepts.hashing.items.commitments')}</li>
        </ul>
        <h2 className='text-2xl sm:text-3xl font-semibold'>{t('pages.concepts.hashing.usage.title', 'Usage')}</h2>
        <ul className="list-disc list-outside pl-6 space-y-2 marker:text-slate-400">
          <li>{t('pages.concepts.hashing.usage.utxo')}</li>
          <li>{t('pages.concepts.hashing.usage.commitments')}</li>
          <li>{t('pages.concepts.hashing.usage.inclusion')}</li>
        </ul>
        <p className="mt-3">{t('pages.concepts.hashing.conclusion')}</p>

       <hr className="border-slate-400 dark:border-slate-700" />

        {/* Secret */}
        <h2 className='text-2xl sm:text-3xl font-semibold'>{t('pages.concepts.secret.title')}</h2>
        <p className="mt-3">{t('pages.concepts.secret.body1')}</p>
        <p className="mt-3">{t('pages.concepts.secret.body2', '')}</p>

        <h2 className='text-2xl sm:text-3xl font-semibold'>
          1️⃣ {t('pages.concepts.secret.header')}
        </h2>
        <ul className="list-disc list-outside pl-6 space-y-2 marker:text-slate-400">
          <li>{t('pages.concepts.secret.items.sharedPoint')}</li>
          <li>{t('pages.concepts.secret.items.ownerKey')}</li>
          <li>{t('pages.concepts.secret.items.nonce')}</li>
        </ul>

        <h2 className='text-2xl sm:text-3xl font-semibold'>
          2️⃣ {t('pages.concepts.secret.payload')}
        </h2>
        <ul className="list-disc list-outside pl-6 space-y-2 marker:text-slate-400">
          <li>{t('pages.concepts.secret.items.assetType')}</li>
          <li>{t('pages.concepts.secret.items.amount')}</li>
          <li>{t('pages.concepts.secret.items.other')}</li>
        </ul>
        <p className="mt-3">{t('pages.concepts.secret.conclusion')}</p>

       <hr className="border-slate-400 dark:border-slate-700" />

        {/* AuditSecret */}
        <h2 className='text-2xl sm:text-3xl font-semibold'>
          {t('pages.concepts.audit.title')}
        </h2>
        <p className="mt-3">{t('pages.concepts.audit.body', 'Under construction ...')}</p>

       <hr className="border-slate-400 dark:border-slate-700" />

        {/* Commitment */}
        <h2 className='text-2xl sm:text-3xl font-semibold'>
          {t('pages.concepts.commitment.title')}
        </h2>
        <p className="mt-3">
          {t('pages.concepts.commitment.body1')}
        </p>
        <h2 className='text-2xl sm:text-3xl font-semibold'>
          {t('pages.concepts.commitment.formulaTitle', 'Commitment Formula')} oiii
        </h2>
        <pre className="m-0 p-4 overflow-auto text-sm leading-6 bg-slate-900 text-slate-100 rounded">
          {`C = PoseidonHash( secret )`}
        </pre>

        <h2 className='text-2xl sm:text-3xl font-semibold'>
          {t('pages.concepts.commitment.role')}
        </h2>
        <ul className="list-disc list-outside pl-6 space-y-2 marker:text-slate-400">
          <li>{t('pages.concepts.commitment.items.integrity')}</li>
          <li>{t('pages.concepts.commitment.items.verify')}</li>
          <li>{t('pages.concepts.commitment.items.preventReuse')}</li>
        </ul>

       <hr className="border-slate-400 dark:border-slate-700" />

        {/* Nullifiers */}
        <h2 className='text-2xl sm:text-3xl font-semibold'>
          {t('pages.concepts.nullifiers.title')}
        </h2>
        <p className="mt-3">{t('pages.concepts.nullifiers.body1')}</p>
        <h2 className='text-2xl sm:text-3xl font-semibold'>{t('pages.concepts.nullifiers.formulaTitle', 'Formula')}</h2>
        <pre className="m-0 p-4 overflow-auto text-sm leading-6 bg-slate-900 text-slate-100 rounded">
          {`Nullifier = PoseidonHash( Commitment, PrivKey )`}
        </pre>

        <h2 className='text-2xl sm:text-3xl font-semibold'>
          {t('pages.concepts.nullifiers.mapping')}
        </h2>

       <hr className="border-slate-400 dark:border-slate-700" />

        {/* ZKP */}
        <h2 className='text-2xl sm:text-3xl font-semibold'>
          {t('pages.concepts.zkp.title')}
        </h2>
        <p className="mt-3">{t('pages.concepts.zkp.body')}</p>
        <ul className="list-disc list-outside pl-6 space-y-2 marker:text-slate-400">
          <li>{t('pages.concepts.zkp.items.input')}</li>
          <li>{t('pages.concepts.zkp.items.output')}</li>
          <li>{t('pages.concepts.zkp.items.tree')}</li>
          <li>{t('pages.concepts.zkp.items.mass')}</li>
          <li>{t('pages.concepts.zkp.items.audit')}</li>
        </ul>

       <hr className="border-slate-400 dark:border-slate-700" />

        {/* Circuits (with image) */}
        <h2 className='text-2xl sm:text-3xl font-semibold'>
          {t('pages.concepts.circuits.title', 'Circuits')}
        </h2>
        <p className="mt-3">{t('pages.concepts.circuits.body')}</p>
        <img
          className="my-6 rounded border border-slate-300 dark:border-slate-700"
          src="https://3529280519-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FlwpfmYfPia0vNEkuQFQN%2Fuploads%2Fh0imVbqzamq37O8gV5Ff%2FCircuitos.PNG?alt=media&token=ba38db52-2e4b-47dc-baa4-5e3295da9731"
          alt={t('pages.concepts.circuits.imageAlt', 'Circuits diagram')}
        />

       <hr className="border-slate-400 dark:border-slate-700" />

        {/* Prover */}
        <h2 className='text-2xl sm:text-3xl font-semibold'>
          {t('pages.concepts.prover.title', 'Prover')}
        </h2>
        <p className="mt-3">{t('pages.concepts.prover.body1', 'It is a component used to generate proofs. This component is provided along with three files: WASM, VKEY, and ZKEY.')}</p>
        <p className="mt-3">{t('pages.concepts.prover.body2', 'Two methods are exposed:')}</p>
        <Terminal title="generateTransferProof.ts">{generateTransferProofTS}</Terminal>
        <Terminal title="verifyTransferProof.ts">{verifyTransferProofTS}</Terminal>

       <hr className="border-slate-400 dark:border-slate-700" />

        {/* Transfer */}
        <h2 className='text-2xl sm:text-3xl font-semibold'>
          {t('pages.concepts.transfer.title', 'Transfer')}
        </h2>
        <p className="mt-3">{t('pages.concepts.transfer.body', 'The transfer object to be sent to the network must follow the following interface:')}</p>

        <Terminal title="transfer.interface.ts">{transferInterfaceTS}</Terminal>

        <ul className="list-disc list-outside pl-6 space-y-2 marker:text-slate-400">
          <li>{t('pages.concepts.transfer.notes.inputs')}</li>
          <li>{t('pages.concepts.transfer.notes.outputs')}</li>
          <li>{t('pages.concepts.transfer.notes.root')}</li>
          <li>{t('pages.concepts.transfer.notes.audit')}</li>
          <li>{t('pages.concepts.transfer.notes.proof')}</li>
        </ul>

       <hr className="border-slate-400 dark:border-slate-700" />

        {/* Inputs */}
        <h2 className='text-2xl sm:text-3xl font-semibold'>
          {t('pages.concepts.inputs.title', 'Inputs')}
        </h2>
        <p className="mt-3">{t('pages.concepts.inputs.body', 'The inputs of a transfer transaction consist of a list of nullifiers.')}</p>

        <Terminal title="input.interface.ts">{inputInterfaceTS}</Terminal>

       <hr className="border-slate-400 dark:border-slate-700" />

        {/* Outputs */}
        <h2 className='text-2xl sm:text-3xl font-semibold'>
          {t('pages.concepts.outputs.title', 'Outputs')}
        </h2>
        <p className="mt-3">{t('pages.concepts.outputs.body', 'The outputs of a transfer transaction consist of a list of secrets.')}</p>

        <Terminal title="output.interface.ts">{outputInterfaceTS}</Terminal>

        <ul className="list-disc list-outside pl-6 space-y-2 marker:text-slate-400">
          <li>{t('pages.concepts.outputs.notes.body1')}</li>
          <li>{t('pages.concepts.outputs.notes.body2')}</li>
        </ul>

       <hr className="border-slate-400 dark:border-slate-700" />

        {/* Harpo (with image) */}
        <h2 className='text-2xl sm:text-3xl font-semibold'>
          {t('pages.concepts.harpo.title', 'Harpo')}
        </h2>
        <p>{t('pages.concepts.harpo.body1')}</p>
        <p>{t('pages.concepts.harpo.body2')}</p>
        <p>{t('pages.concepts.harpo.body3')}</p>

        <img
          className="my-6 rounded border border-slate-300 dark:border-slate-700"
          src="https://3529280519-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FlwpfmYfPia0vNEkuQFQN%2Fuploads%2Fnzoge7yPJHSqwdrxhGuL%2FSwap.PNG?alt=media&token=7edc47b9-c5d7-4962-a4e4-3f58e25ef051"
          alt={t('pages.concepts.harpo.imageAlt', 'Swap diagram')}
        />

        <ul className="list-disc list-outside pl-6 space-y-2 marker:text-slate-400">
          <li>{t('pages.concepts.harpo.body4')}</li>
          <li>{t('pages.concepts.harpo.body5')}</li>
          <li>{t('pages.concepts.harpo.body6')}</li>
        </ul>

       <hr className="border-slate-400 dark:border-slate-700" />

        {/* Transfer with Change */}
        <h2 className='text-2xl sm:text-3xl font-semibold'>
          {t('pages.concepts.transferChange.title', 'Transfer with Change')}
        </h2>
        <ul className="list-disc list-outside pl-6 space-y-2 marker:text-slate-400">
          <li>{t('pages.concepts.transferChange.body1')}</li>
          <li>{t('pages.concepts.transferChange.body2')}</li>
          <li>{t('pages.concepts.transferChange.body3')}</li>
        </ul>

       <hr className="border-slate-400 dark:border-slate-700" />

        {/* Combined DvP */}
        <h2 className='text-2xl sm:text-3xl font-semibold'>
          {t('pages.concepts.combinedDvp.title', 'Combined DvP')}
        </h2>
        <p>{t('pages.concepts.combinedDvp.body', 'Under construction...')}</p>

       <hr className="border-slate-400 dark:border-slate-700" />

        {/* Merkle Tree */}
        <h2 className='text-2xl sm:text-3xl font-semibold'>
          {t('pages.concepts.merkle.title')}
        </h2>
        <p>{t('pages.concepts.merkle.body')}</p>
        <h2 className='text-2xl sm:text-3xl font-semibold'>{t('pages.concepts.merkle.structureTitle', 'Structure')}</h2>
        <ol>
          <li>{t('pages.concepts.merkle.structureList.leaves')}</li>
          <li>{t('pages.concepts.merkle.structureList.nodes')}</li>
          <li>{t('pages.concepts.merkle.structureList.root')}</li>
        </ol>

        <h2 className='text-2xl sm:text-3xl font-semibold'>
          {t('pages.concepts.merkle.advantagesTitle', 'Main Advantages of a Merkle Tree')}
        </h2>
        <ul className="list-disc list-outside pl-6 space-y-2 marker:text-slate-400">
          <li>{t('pages.concepts.merkle.items.verify')}</li>
          <li>{t('pages.concepts.merkle.items.integrity')}</li>
          <li>{t('pages.concepts.merkle.items.scalability')}</li>
          <li>{t('pages.concepts.merkle.items.compact')}</li>
          <li>{t('pages.concepts.merkle.items.parallel')}</li>
        </ul>
      </div>
    </section>
  );
}
