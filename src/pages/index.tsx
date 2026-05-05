import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { DocSearch } from '@docsearch/react';
import '@docsearch/css';

const categories = [
  {
    title: '🚀 Primeiros Passos',
    description: 'Comece por aqui: aprenda a navegar nos dashboards e configure seu primeiro perfil.',
    link: '/docs/intro',
  },
  {
    title: '👤 Perfil do Agente',
    description: 'Defina a identidade da sua empresa e os KPIs que guiam a inteligência da nossa IA.',
    link: '/docs/getting-started/perfil-agente',
  },
  {
    title: '📊 Dashboards',
    description: 'Entenda como interpretar métricas de performance, sentimentos e tópicos discutidos.',
    link: '/docs/getting-started/entendendo-dashboards',
  },
  {
    title: '🔍 Ask Waizer',
    description: 'Realize investigações profundas em linguagem natural e extraia insights estratégicos.',
    link: '/docs/getting-started/ask-waizer',
  }
];

export default function Home() {
  const logoUrl = useBaseUrl('img/waizer_branco.png');
  return (
    <Layout title="Help Center" description="Documentação oficial Waizer">
      <header className="hero-help-center" style={{ textAlign: 'center', padding: '40px 0' }}>
        {/* Renderiza o Logo */}
        <img 
          src={logoUrl} 
          alt="Waizer Logo" 
          style={{ width: '200px', marginBottom: '20px' }} 
        />
        
        <h1>Como podemos ajudar?</h1>
        
        <div className="search-bar-wrapper">
          <DocSearch
            appId="MIX8COOBCT"
            indexName="helpwaizer_netlify_app_mix8coobct_articles"
            apiKey="ec4e992d2e1fe211df0ad69dce5be414"
            translations={{
              button: {
                buttonText: 'Pesquise por "Instalação", "KPIs" ou "Sentimento"...',
              },
            }}
          />
        </div>
      </header>

      <main style={{ backgroundColor: '#0a0b10' }}>
        <div className="category-grid">
          {categories.map((cat, idx) => (
            <Link key={idx} to={cat.link} className="category-card">
              <h3>{cat.title}</h3>
              <p>{cat.description}</p>
            </Link>
          ))}
        </div>
      </main>
    </Layout>
  );
}
