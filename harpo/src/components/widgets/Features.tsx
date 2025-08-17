import { component$ } from "@builder.io/qwik";
import { twMerge } from "tailwind-merge";
import { Headline } from "~/components/ui/Headline";
import { ItemGrid } from "~/components/ui/ItemGrid";
import IconStar from "~/components/icons/IconStar";
import i18n from "~/utils/i18n";

export default component$(() => {
  const id = undefined;
  const isDark = false;
  const classes: any = {};

  const title = i18n.t("features.title");
  const subtitle = i18n.t("features.subtitle");
  const highlight = i18n.t("features.highlight");
  const items = (i18n.t("features.items", { returnObjects: true }) as Array<{ title: string; description: string }> ) || [];

  return (
    <section class="relative scroll-mt-16" {...(id ? { id } : {})}>
      <div class="absolute inset-0 pointer-events-none -z-[1]" aria-hidden="true">
        <slot name="bg">
          <div class={twMerge("absolute inset-0", isDark ? "bg-dark dark:bg-transparent" : "")}></div>
        </slot>
      </div>
      <div
        class={twMerge(
          "relative mx-auto max-w-5xl px-4 md:px-6 py-12 md:py-16 lg:py-20 text-default",
          classes?.container,
          isDark ? "dark" : ""
        )}
      >
        <Headline title={title} subtitle={subtitle} highlight={highlight} classes={classes?.headline} />
        <ItemGrid
          items={items}
          defaultIcon={IconStar}
          classes={{
            container: "md:grid-cols-2",
            title: "md:text-[1.3rem]",
            icon: "text-white bg-secondary-500 dark:bg-secondary-700 rounded-full w-10 h-10 p-2 md:w-12 md:h-12 md:p-3 mr-4",
            ...(classes?.items ?? {}),
          }}
        />
      </div>
    </section>
  );
});
