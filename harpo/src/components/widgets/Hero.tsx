import { component$, useStore, useOnDocument, useVisibleTask$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";
import i18n from "~/utils/i18n";

import heroImage from "../../assets/images/Heroimage.jpg";

export default component$(() => {
  // local state just to trigger rerenders on i18n changes
  const state = useStore({ version: 0 });

  // when i18n fires our custom event, bump version to rerender
  useOnDocument("i18n:changed", () => {
    state.version++;
  });

  // ensure a client-side bump after mount (covers first init)
  useVisibleTask$(() => {
    state.version++;
  });
  return (
    <section class="relative md:-mt-[100px] not-prose">
      <div class="absolute inset-0 pointer-events-none" aria-hidden="true"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div class="pt-0 md:pt-[76px] pointer-events-none"></div>
        <div class="py-12 md:py-20 lg:py-0 lg:flex lg:items-center lg:h-screen lg:gap-8">
          <div class="basis-1/2 text-center lg:text-left pb-10 md:pb-16 mx-auto">
            <h1 class="text-5xl md:text-6xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-gray-200">
              {i18n.t("hero.title")}
            </h1>
            <div class="max-w-3xl mx-auto lg:max-w-none">
              <p class="text-xl text-muted mb-6 dark:text-slate-300">
                {i18n.t("hero.infrastructure")}
              </p>

              <div class="max-w-xs sm:max-w-md m-auto flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-4 lg:justify-start lg:m-0 lg:max-w-7xl">
                <div class="flex w-full sm:w-auto">
                  <a
                    class="btn btn-primary sm:mb-0 w-full"
                    href="/about-harpo-zk"
                  >
                    {i18n.t("hero.learnMore")}
                  </a>
                </div>
                <div class="flex w-full sm:w-auto">
                </div>
              </div>
            </div>
          </div>
          <div class="basis-1/2">
            <Image
              src={heroImage}
              layout="constrained"
              width={493}
              height={616}
              alt="harpo zk"
              class="mx-auto lg:mr-0 w-full drop-shadow-2xl rounded-md"
              priority={true}
              breakpoints={[320, 480, 640, 768, 1024]}
            />
          </div>
        </div>
      </div>
    </section>
  );
});
