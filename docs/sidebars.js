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
        'getting-started/connecting-blip',
        'getting-started/connecting-csv',
        'getting-started/connecting-api',
      ],
    },
    'dashboard/index',
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
    'security/index',
  ],
};

module.exports = sidebars;
