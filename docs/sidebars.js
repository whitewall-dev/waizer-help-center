// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  helpCenter: [
    'intro',
    {
      type: 'category',
      label: 'Primeiros Passos',
      collapsed: false,
      items: [
        'getting-started/index',
        'getting-started/integration-types',
        'getting-started/connecting-blip',
        'getting-started/connecting-csv',
        'getting-started/connecting-api',
        'getting-started/processing',
      ],
    },
    {
      type: 'category',
      label: 'Dashboard',
      collapsed: false,
      items: [
        'dashboard/index',
        'dashboard/kpis',
      ],
    },
    'conversations/index',
    'ai-agent/index',
    {
      type: 'category',
      label: 'Organizações e Projetos',
      collapsed: false,
      items: [
        'organizations/index',
        'organizations/roles',
        'organizations/api-keys',
      ],
    },
    {
      type: 'category',
      label: 'Segurança',
      collapsed: false,
      items: [
        'security/index',
        'security/data-privacy',
        'security/data-retention',
        'security/poc-guide',
      ],
    },
  ],
};

module.exports = sidebars;
