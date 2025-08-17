import { component$ } from "@builder.io/qwik";

export default component$(() => {
  const features = [
    {
      title: "Private asset transparency",
      description: "Enables complete traceability of digital assets while preserving the confidentiality of involved parties. With Harpo, institutions can monitor operations with precision without compromising privacy."
    },
    {
      title: "Deposit and withdrawal between public and private environments",
      description: "Facilitates the transit of assets between traditional and private environments with complete security. Ideal for institutions that need to operate on public networks but want to keep sensitive data in protected environments."
    },
    {
      title: "Creation and minting of fungible and non-fungible assets",
      description: "Offers flexibility to develop unique tokens (NFTs) or interchangeable (fungible) tokens, with advanced layers of security and privacy. A solid foundation for customized and scalable digital products."
    },
    {
      title: "Swap and DvP (Delivery versus Payment)",
      description: "Provides asset exchanges with simultaneous and secure settlement. Ensures that delivery and payment occur in a coordinated manner, reducing operational risks and strengthening trust between participants."
    },
    {
      title: "Encrypted private messaging",
      description: "Enables secure communication between institutions through encrypted messages. With this functionality, it's possible to exchange sensitive information within the blockchain environment with complete confidentiality."
    },
    {
      title: "Public key registration",
      description: "Allows institutions to register their public keys securely and auditably, creating a reliable foundation for digital transactions and validations within the Drex ecosystem."
    },
    {
      title: "Asset blocking and seizure by authority",
      description: "Meets regulatory requirements by allowing competent authorities to act in the temporary or permanent suspension of assets, with complete record integrity and operational transparency."
    },
    {
      title: "Configurable state machine for transactional flow control",
      description: "Offers detailed control over each stage of an operation, with customizable logic that follows the asset lifecycle. Ideal for process automation and operational risk reduction."
    }
  ];

  return (
    <div class="py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h2 class="font-heading mb-8 text-3xl font-bold lg:text-4xl">Features</h2>
        </div>

        <div class="mt-10">
          <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} class="pt-6 cursor-pointer">
                <div class="flow-root border-2 border-[#1e3a8a] bg-transparent text-white rounded-lg px-6 pb-8 h-full">
                  <div class="-mt-6">
                    <div class="inline-flex items-center justify-center p-3 bg-[#039de1] rounded-md shadow-lg">
                      <span class="text-white font-bold">{index + 1}</span>
                    </div>
                    <h3 class="mt-8 text-lg font-medium text-gray-900 dark:text-white">
                      {feature.title}
                    </h3>
                    <p class="mt-5 text-base text-gray-500 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});
