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
          // routeBasePath: '/', // Serve the docs at the site's root
          path: "docs",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
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
            html: `
              <a
                class="footer-medium-link"
                href="https://medium.com/@morihosseini"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Medium"
              >
              </a>
            `,
          },
          {
            html: `
              <a
                class="footer-github-link"
                href="https://github.com/smortezah"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub"
              >
              </a>
            `,
          },
          // {
          //   html: `
          //     <a
          //       href="https://github.com/smortezah"
          //       target="_blank"
          //       rel="noreferrer noopener"
          //       aria-label="GitHub"
          //     >
          //       <svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          //         <path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' />
          //       </svg>
          //     </a>
          //   `,
          // },
          {
            html: `
              <a
                class="footer-x-link"
                href="https://x.com/MoriHosseini1"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="X"
              >
              </a>
            `,
          },
          {
            html: `
              <a
                class="footer-linkedin-link"
                href="https://linkedin.com/in/mori-hosseini"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
              >
              </a>
            `,
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
        replaceSearchResultPathname: {
          from: "/docs/", // or as RegExp: /\/docs\//
          to: "/",
        },

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: "search",

        // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
        insights: false,

        // Optional: whether you want to use the new Ask AI feature (undefined by default)
        // askAi: 'YOUR_ALGOLIA_ASK_AI_ASSISTANT_ID',

        //... other Algolia params
      },
    },
};

module.exports = config;
