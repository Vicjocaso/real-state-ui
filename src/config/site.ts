import type { FooterItem, MainNavItem } from "@/types";

// import { productCategories } from "@/config/products";
// import { slugify } from "@/lib/utils";

export type SiteConfig = typeof siteConfig;

const links = {
  github: "https://github.com/Vicjocaso",
  githubAccount: "https://github.com/Vicjocaso",
  threads: "https://www.threads.net/@vicjocaso",
};

export const siteConfig = {
  name: "Real State UI",
  description:
    "An real state UI project build with everything new in Next.js 13.",
  url: "",
  ogImage: "",
  mainNav: [
    {
      title: "Residencies",
      href: "/#residence",
      external: false,
    },
    {
      title: "Our Value",
      href: "/#our-value",
      external: false,
    },
    {
      title: "Contact Us",
      href: "/#contact-us",
      external: false,
    },
    {
      title: "Get Started",
      href: "/#get-started",
      external: false,
    },
  ] satisfies MainNavItem[],
  links,
  footerNav: [
    {
      title: "Tools",
      items: [
        {
          title: "Nextjs",
          href: "https://nextjs.org/",
          external: true,
        },
        {
          title: "Tailwindcss",
          href: "https://tailwindcss.com/",
          external: true,
        },
        {
          title: "Shadcn/ui",
          href: "https://ui.shadcn.com/",
          external: true,
        },
        {
          title: "React UseForm",
          href: "https://www.react-hook-form.com/api/useform/",
          external: true,
        },
        {
          title: "Zod",
          href: "https://zod.dev/",
          external: true,
        },
      ],
    },
    {
      title: "Routes",
      items: [
        {
          title: "Residencies",
          href: "/#residence",
          external: false,
        },
        {
          title: "Our Value",
          href: "/#our-value",
          external: false,
        },
        {
          title: "Contact Us",
          href: "/#contact-us",
          external: false,
        },
        {
          title: "Get Started",
          href: "/#get-started",
          external: false,
        },
      ],
    },
    {
      title: "Social",
      items: [
        {
          title: "GitHub",
          href: links.githubAccount,
          external: true,
        },
        {
          title: "Threads",
          href: links.threads,
          external: true,
        },
      ],
    },
  ] satisfies FooterItem[],
};
