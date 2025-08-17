import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Hero from "~/components/widgets/Hero";
import Features from "~/components/widgets/Features";
import FAQs from "~/components/widgets/FAQs";
import OfferedFeatures from "~/components/widgets/OfferedFeatures";

import { qwikSerialized } from "~/utils/qwikSerialized";

import { SITE } from "~/config.mjs";

export default component$(() => {
  return (
    <>
      <Hero />
      <Features />
      <OfferedFeatures />

      <FAQs
        title="Frequently Asked Questions"
        subtitle="This section answers the most frequent questions about the Harpo protocol, its privacy architecture, and how you can participate."
        highlight="FAQs"
        items={[
          {
            title: "What is Harpo ZK?",
            description:
              "Harpo ZK is a protocol that allows the coexistence of public and private transactions on EVM-compatible networks (such as Ethereum, Polygon, Arbitrum etc.), using zero-knowledge proofs (Zero-Knowledge Proofs) and a model based on UTXOs and nullifiers. It offers privacy without sacrificing interoperability with public assets.",
          },
          {
            title: "What are Zero-Knowledge Proofs?",
            description:
              "ZKPs (Zero-Knowledge Proofs) are cryptographic techniques that allow proving that something is true without revealing the data involved. In the context of Harpo, this means validating transactions without exposing values or participant identities.",
          },
          {
            title: "What is the difference between public and private transactions?",
            description:
              "Public transactions are those in which all information, such as values, senders, and recipients, are visible to anyone who consults the blockchain. Private transactions, on the other hand, hide this information using zero-knowledge proofs, preserving participant confidentiality while maintaining network integrity.",
          },
          {
            title: "How do UTXOs work in Harpo?",
            description:
              "In the Harpo protocol, private tokens are represented by UTXOs, which are outputs of unspent transactions. When a user makes a transaction, they consume one or more UTXOs they own and create new UTXOs as a result. This model allows tracking and validating token possession without compromising privacy.",
          },
          {
            title: "What are nullifiers?",
            description:
              "Nullifiers are unique identifiers derived from UTXOs that have already been used in a transaction. They serve to prevent double spending, ensuring that a single UTXO cannot be reused. By revealing a nullifier, the system knows that the corresponding UTXO has already been spent and cannot be used again.",
          },
          {
            title: "Does Harpo have an SDK?",
            description:
              "Yes, Harpo offers an SDK that makes it easier to use its technology. This SDK automates the generation of cryptographic proofs necessary, creates the correct payload for interaction with smart contracts, and also offers tools to monitor blockchain events and consolidate UTXOs in the user's possession.",
          },
          {
            title: "In which networks can Harpo be used?",
            description:
              "The Harpo protocol can be used on any blockchain network compatible with the Ethereum Virtual Machine (EVM), such as Ethereum, Polygon, BNB Chain, Arbitrum, Optimism, etc. This compatibility broadens the reach of Harpo and facilitates its integration with existing platforms.",
          },
          {
            title: "What is the objective of the Harpo community?",
            description:
              "The objective of the Harpo community is to build a decentralized and transparent infrastructure for private transactions, encouraging education and the adoption of zero-knowledge proof-based technologies. The community is open to developers, researchers, enthusiasts, and users interested in privacy and blockchain innovation.",
          },
        ]}
      />
      {/* <Stats />
      <CallToAction /> */}
    </>
  );
});

export const head: DocumentHead = {
  title: SITE.title,
  meta: [
    {
      name: "description",
      content: SITE.description,
    },
  ],
};
