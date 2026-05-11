import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Central de Ajuda',
  tagline: 'Inteligência para as interações do seu chatbot', // Atualizado para o contexto do Waizer
  favicon: 'img/faviconn.png',

  future: {
    v4: true,
  },

  url: 'https://helpwaizer.netlify.app',
  baseUrl: '/',
  trailingSlash: false,
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
      indexName: 'helpwaizer_netlify_app_mix8coobct_articles',
      contextualSearch: false,
      searchPagePath: 'search',
    },
    metadata: [
      { name: 'algolia-site-verification', content: '7AEB65A673F60928' },
    ],
    image: 'img/favicon.png',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Ajuda',
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
          title: 'SAIBA MAIS',
          items: [
            {
              label: 'Documentação',
              to: '/docs/intro',
            },
            {
              label: 'FAQ',
              to: '/docs/faq',
            },
            {
              label: 'Suporte Técnico',
              to: 'https://forms.clickup.com/37031866/f/13a3xu-35753/BN9Q0MM9KZDKUC6SSY',
            },
          ],
        },
        {
          title: 'SIGA-NOS',
          items: [
            {
              html: `
        <div class="footer-social-icons">
          <a href="https://www.instagram.com/whitewall.tech/" target="_blank" rel="noopener noreferrer" style="margin-right: 15px;">
            <img src="img/social/instagram.svg" alt="Instagram" width="22" height="22" />
          </a>
          <a href="https://www.linkedin.com/company/whitewall-tech/" target="_blank" rel="noopener noreferrer" style="margin-right: 15px;">
            <img src="img/social/linkedin.svg" alt="LinkedIn" width="22" height="22" />
          </a>
          <a href="https://www.youtube.com/@WhiteWallTech" target="_blank" rel="noopener noreferrer">
            <img src="img/social/youtube.svg" alt="YouTube" width="22" height="22" />
          </a>
        </div>
      `,
            },
          ],
        },
      ],
      logo: {
        alt: 'Waizer Logo',
        src: 'img/waizer.png',
        href: 'https://waizer.ai',
        width: 130,
      },
      copyright: `© ${new Date().getFullYear()} Waizer by Wiv. Todos os direitos reservados.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;