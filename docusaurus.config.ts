import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Central de Ajuda - Waizer',
  tagline: 'Inteligência para as interações do seu chatbot', // Atualizado para o contexto do Waizer
  favicon: 'img/faviconn.png',

  future: {
    v4: true,
  },

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'waizer', // Atualizado
  projectName: 'help-center', // Atualizado

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'pt-br',
    locales: ['pt-br'],
  },

  // ADICIONADO AQUI: O plugin de imagem ideal deve ficar dentro do objeto config
  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
        disableInDev: false,
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    algolia: {
      appId: 'MIX8COOBCT',
      apiKey: 'ec4e992d2e1fe211df0ad69dce5be414',
      indexName: 'helpwaizer_netlify_app_mix8coobct_pages',
      contextualSearch: true,
      searchPagePath: 'search',
    },
    metadata: [
      { name: 'algolia-site-verification', content: '7AEB65A673F60928' },
    ],
    image: 'img/favicon.png',
    colorMode: {
      defaultMode: 'dark', // Definindo como dark por padrão para alinhar com o site do Waizer
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Central de ajuda - Waizer',
      logo: {
        alt: 'Waizer Logo',
        src: 'img/waizer.png',      // Logo usada no tema claro
        srcDark: 'img/waizer_branco.png',   // Logo usada no tema escuro
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentação',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Documentação',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Site Oficial',
              href: 'https://waizer.ai/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Waizer. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;