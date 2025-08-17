import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";

import stepsImage from "../../assets/images/stepImages.png";

import IconStar from "~/components/icons/IconStar";

export default component$(() => {
  const stepsData = {
    title: "Flow of Use of the SDK for Proofs and Interaction",
    items: [
      {
        title: "Preparation of the environment",
        description:
          "At the start, the user should obtain the SDK with the necessary files to generate cryptographic proofs. These files are essential for the protocol's operation and should not be modified. The SDK is prepared to assume control of proof creation, eliminating the need for manual manipulation of these elements.",
        icon: IconStar,
      },
      {
        title: "Proof and payload generation",
        description:
          "With the environment ready, the SDK assumes the role of generating the cryptographic proof and automatically assembling the payload to be sent to the smart contract. This automation ensures security and consistency in communication with the blockchain, avoiding human errors and speeding up the validation process.",
        icon: IconStar,
      },
      {
        title: "Event monitoring on the network",
        description:
          "The protocol requires that listeners be configured to capture events emitted on the blockchain network. These events are crucial for consolidating ownership of UTXOs and ensuring that operations are executed correctly. The SDK offers direct support for implementing and managing these listeners with efficiency",
        icon: IconStar,
      },
      {
        title: "Interaction with smart contracts",
        description:
          "To interact with contracts, the user will have access to the ABIs of deployed contracts. With these definitions, it is possible to use libraries such as Web3.js, Ethers.js or Hardhat. If you prefer a simpler path, the SDK itself provides methods that facilitate this communication without having to manually configure everything",
        icon: IconStar,
      },
      {
        title: "Ready!",
        icon: IconStar,
      },
    ],
    image: {
      src: stepsImage,
      alt: "Steps image",
    },
  };
  const { title, items, image } = stepsData;

  return (
    <section class="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div class="row-gap-10 grid gap-6 md:grid-cols-2">
        <div class="mb-4 md:mb-0 md:py-4 md:pr-16">
          {title && <h2 class="font-heading mb-8 text-3xl font-bold lg:text-4xl">{title}</h2>}
          {Array.isArray(items) &&
            items.length &&
            items.map(({ title, description, icon: Icon }, index) => (
              <div key={`item-steps-${index}`} class="flex">
                <div class="mr-4 flex flex-col items-center">
                  <div>
                    {index !== items.length - 1 ? (
                      <div class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-900">
                        {typeof Icon !== "undefined" ? (
                          <Icon class="h-6 w-6 text-primary-800 dark:text-slate-200" />
                        ) : (
                          <IconStar class="h-6 w-6 text-primary-800 dark:text-slate-200" />
                        )}
                      </div>
                    ) : (
                      <div class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-900 bg-primary-900">
                        {typeof Icon !== "undefined" ? (
                          <Icon class="h-6 w-6 text-white dark:text-slate-200" />
                        ) : (
                          <IconStar class="h-6 w-6 text-white dark:text-slate-200" />
                        )}
                      </div>
                    )}
                  </div>
                  {index !== items.length - 1 && <div class="h-full w-px bg-gray-300 dark:bg-slate-500"></div>}
                </div>
                <div class={`pt-1 ${index !== items.length - 1 ? "pb-8" : ""}`}>
                  {title && <p class="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">{title}</p>}
                  {description && <p class="text-gray-600 dark:text-slate-400">{description}</p>}
                </div>
              </div>
            ))}
        </div>
        <div class="relative">
          {typeof image !== "undefined" && (
            <Image
              layout="constrained"
              src={image.src}
              width={532}
              height={704}
              alt={image.alt}
              class="inset-0 w-full rounded-md bg-gray-500 object-cover object-top shadow-lg dark:bg-slate-700 md:absolute md:h-full"
              breakpoints={[320, 480, 640, 1024]}
            />
          )}
        </div>
      </div>
    </section>
  );
});
