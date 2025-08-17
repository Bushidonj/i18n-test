import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

import IconTwitter from "~/components/icons/IconTwitter"
import IconInstagram from "~/components/icons/IconInstagram"
// import IconFacebook from "~/components/icons/IconFacebook"
import IconGithub from "~/components/icons/IconGithub"

export default component$(() => {
  const links = [
    {
      title: "Support",
      items: [
        { title: "About Harpo-ZK", href: "/about-harpo-zk" },
        { title: "Professional Services", href: "https://www.linkedin.com/in/julianosales/" },
        { title: "Technical Contact", href: "https://www.linkedin.com/in/julianosales/" },
      ],
    },
    {
      title: "Company",
      items: [
        { title: "About Us", href: "/about" },
        { title: "Blog", href: "/blog" },
      ],
    },
    {
      title: "For Developers",
      items: [
        { title: "Demo (Schedule a Demo)", href: "https://www.linkedin.com/in/julianosales/" },
        { title: "Documentation", href: "/docs" },
        { title: "How to Use", href: "/how-to-use" },
        { title: "Concepts", href: "/concepts" },
      ],
    },
    {
      title: "Legal",
      items: [
        { title: "Privacy Policy", href: "/privacy" },
        { title: "Terms of Use", href: "/terms" },
      ],
    },
  ];

  const social = [
    {
      label: "Twitter",
      icon: IconTwitter,
      href: "https://x.com/HarpoZK"
    },
    {
      label: "Instagram",
      icon: IconInstagram,
      href: "https://www.instagram.com/harpozk/"
    },
    {
      label: "Github",
      icon: IconGithub,
      href: "https://github.com/HarpoZK",
    },
  ];

  return (
    <footer class="border-t border-gray-200 dark:border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="grid grid-cols-12 gap-4 gap-y-8 sm:gap-8 py-8 md:py-12">
          <div class="col-span-12 lg:col-span-4 pr-8">
            <div class="mb-2">
              <Link class="inline-block font-bold text-xl" href={"/"}>
                Harpo-ZK
              </Link>
            </div>
            <div class="text-sm text-gray-600 dark:text-gray-400">
              Infrastructure that protects data without compromising transparency.
            </div>
          </div>
          {links.map(({ title, items }, index) => (
            <div key={index} class="col-span-6 md:col-span-3 lg:col-span-2">
              <div class="text-gray-800 dark:text-gray-300 font-medium mb-2">{title}</div>
              {Array.isArray(items) && items.length > 0 && (
                <ul class="text-sm">
                  {items.map(({ title, href }, index2) => (
                    <li key={index2} class="mb-2">
                      <Link
                        class="text-gray-600 hover:text-gray-700 hover:underline dark:text-gray-400 transition duration-150 ease-in-out"
                        href={href}
                        rel="noopener noreferrer"
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div class="md:flex md:items-center md:justify-between py-6 md:py-8">
          <ul class="flex mb-4 md:order-1 -ml-2 md:ml-4 md:mb-0">
            {social.map(({ label, href, icon: Icon }, index) => (
              <li key={index}>
                <Link
                  class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"
                  aria-label={label}
                  title={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {typeof Icon !== "undefined" && <Icon />}
                </Link>
              </li>
            ))}
          </ul>

          <div class="text-sm text-gray-700 mr-4 dark:text-slate-400">
            <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm bg-[url(https://allan-azevedo.netlify.app/)]"></span>
            Made by{" "}
            <a class="text-secondary-800 underline dark:text-gray-200" href="https://allan-azevedo.netlify.app/">
              A.A Solutions
            </a>{" "}
            · All rights reserved.{" "}Version 0.0.5
          </div>
        </div>
      </div>
    </footer>
  );
});
