// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
const { themes } = require("prism-react-renderer");
const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Portfolio",
  tagline: "Various projects on applications of Data Science and Machine Learning",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://smortezah.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/portfolio/",

  trailingSlash: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "smortezah", // Usually your GitHub org/user name.
  projectName: "portfolio", // Usually your repo name.

  onBrokenLinks: "throw",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          routeBasePath: "/docs",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          routeBasePath: "/blog",
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css",
      type: "text/css",
      integrity: "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
    mermaid: true,
  },

  themes: ["@docusaurus/theme-mermaid"],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "Home",
        items: [
          { to: "/docs", label: "Tutorials", position: "left" },
          { to: "/blog", label: "Blog", position: "left" },
          {
            position: "right",
            href: "https://github.com/smortezah/portfolio",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            html: `<a class="footer-medium-link" href="https://medium.com/@morihosseini" target="_blank" rel="noreferrer noopener" aria-label="Medium"></a>`,
          },
          {
            html: `<a class="footer-github-link" href="https://github.com/smortezah" target="_blank" rel="noreferrer noopener" aria-label="GitHub"></a>`,
          },
          {
            html: `<a class="footer-x-link" href="https://x.com/MoriHosseini1" target="_blank" rel="noreferrer noopener" aria-label="X"></a>`,
          },
          {
            html: `<a class="footer-linkedin-link" href="https://linkedin.com/in/mori-hosseini" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn"></a>`,
          },
        ],
        copyright: `Copyright &copy; ${new Date().getFullYear()} Morteza Hosseini`,
      },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
        additionalLanguages: ["bash", "python", "docker", "r"],
      },
      mermaid: {
        theme: { light: "neutral", dark: "forest" },
      },
      algolia: {
        // The application ID provided by Algolia
        appId: "MZL4UESJDY",

        // Public API key: it is safe to commit it
        apiKey: "6df6f9a1e5880602b61119b7ac7e660c",

        indexName: "portfolio",

        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: "external\\.com|domain\\.com",

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        // replaceSearchResultPathname: {
        //   from: "/docs/", // or as RegExp: /\/docs\//
        //   to: "/",
        // },

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: "search",

        // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
        insights: false,

        // Optional: whether you want to use the new Ask AI feature (undefined by default)
        // askAi: 'YOUR_ALGOLIA_ASK_AI_ASSISTANT_ID',
      },
    },
};

module.exports = config;
