import type { FooterItem, MainNavItem } from "@/types";

// import { productCategories } from "@/config/products";
// import { slugify } from "@/lib/utils";

export type SiteConfig = typeof siteConfig;

const links = {
  github: "https://github.com/Vicjocaso",
  githubAccount: "https://github.com/Vicjocaso",
  threads: "https://github.com/Vicjocaso",
};

export const siteConfig = {
  name: "Real State",
  description:
    "An open source e-commerce skateshop build with everything new in Next.js 13.",
  url: "https://skateshop.sadmn.com",
  ogImage: "https://skateshop.sadmn.com/opengraph-image.png",
  mainNav: [
    {
      title: "Residencies",
      href: "residencies",
      external: false,
    },
    {
      title: "Our Value",
      href: "#our-value",
      external: false,
    },
    {
      title: "Contact Us",
      href: "#contact-us",
      external: false,
    },
    {
      title: "Get Started",
      href: "#get-started",
      external: false,
    },
  ] satisfies MainNavItem[],
  links,
  footerNav: [
    {
      title: "Credits",
      items: [
        {
          title: "OneStopShop",
          href: "https://onestopshop.jackblatch.com",
          external: true,
        },
        {
          title: "Acme Corp",
          href: "https://acme-corp.jumr.dev",
          external: true,
        },
        {
          title: "craft.mxkaske.dev",
          href: "https://craft.mxkaske.dev",
          external: true,
        },
        {
          title: "Taxonomy",
          href: "https://tx.shadcn.com/",
          external: true,
        },
        {
          title: "shadcn/ui",
          href: "https://ui.shadcn.com",
          external: true,
        },
      ],
    },
    {
      title: "Help",
      items: [
        {
          title: "About",
          href: "/about",
          external: false,
        },
        {
          title: "Contact",
          href: "/contact",
          external: false,
        },
        {
          title: "Terms",
          href: "/terms",
          external: false,
        },
        {
          title: "Privacy",
          href: "/privacy",
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
    {
      title: "Decompress",
      items: [
        {
          title: "beats to study to",
          href: "https://www.youtube.com/watch?v=jfKfPfyJRdk",
          external: true,
        },
        {
          title: "beats to chill to",
          href: "https://www.youtube.com/watch?v=rUxyKA_-grg",
          external: true,
        },
        {
          title: "a fresh start",
          href: "https://www.youtube.com/watch?v=rwionZbOryo",
          external: true,
        },
        {
          title: "coffee to go",
          href: "https://www.youtube.com/watch?v=2gliGzb2_1I",
          external: true,
        },
      ],
    },
  ] satisfies FooterItem[],
};
