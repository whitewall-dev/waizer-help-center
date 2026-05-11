import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { DocSearch } from '@docsearch/react';
import ThemedImage from '@theme/ThemedImage';
import '@docsearch/css';

const categories = [
  {
    title: 'Primeiros Passos',
    description: 'Aprenda a navegar nos dashboards e configure seu perfil.',
    link: '/docs/intro',
    icon: '🚀'
  },
  {
    title: 'Perfil do Agente',
    description: 'Defina a identidade e os KPIs da sua inteligência.',
    link: '/docs/getting-started/perfil-agente',
    icon: '👤'
  },
  {
    title: 'Dashboards',
    description: 'Interprete métricas de performance e sentimentos.',
    link: '/docs/getting-started/entendendo-dashboards',
    icon: '📊'
  },
  {
    title: 'Ask Waizer',
    description: 'Investigações profundas em linguagem natural.',
    link: '/docs/getting-started/ask-waizer',
    icon: '🔍'
  }
];

const faqItems = [
  {
    q: "O que é o Waizer?",
    a: "O Waizer é uma ferramenta de análise conversacional que interpreta conversas de bots e humanos para identificar falhas e melhorias."
  },
  {
    q: "Para que o Waizer é indicado?",
    a: "Para empresas que desejam identificar gargalos no atendimento digital com base em dados reais."
  },
  {
    q: "O que é o Ask Waizer?",
    a: "É nosso agente de IA que permite fazer perguntas diretas sobre os dados do atendimento."
  }
];

export default function Home() {
  return (
    <Layout title="Central de Ajuda" description="Documentação oficial Waizer">
      <div className="home-container">
        <header className="hero-minimal">
          <ThemedImage
            alt="Waizer Logo"
            className="logo-waizer-small"
            sources={{
              light: useBaseUrl('/img/waizer.png'),
              dark: useBaseUrl('/img/waizer_branco.png'),
            }}
          />
          <h1 className="hero-title-clean">Como podemos ajudar?</h1>
          <div className="search-wrapper-center">
            <DocSearch
              appId="MIX8COOBCT"
              indexName="helpwaizer_netlify_app_mix8coobct_articles"
              apiKey="ec4e992d2e1fe211df0ad69dce5be414"
              translations={{
                button: {
                  buttonText: 'Pesquise por temas, erros ou funcionalidades...',
                },
              }}
            />
          </div>
        </header>

        <main className="content-narrow">
          <div className="category-grid-minimal">
            {categories.map((cat, idx) => (
              <Link key={idx} to={cat.link} className="card-minimal">
                <span className="card-icon">{cat.icon}</span>
                <div className="card-text">
                  <h3>{cat.title}</h3>
                  <p>{cat.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <section className="faq-minimal-section">
            <h2 className="faq-section-title">Dúvidas frequentes</h2>
            {faqItems.map((item, idx) => (
              <details key={idx} className="faq-item-clean">
                <summary>{item.q}</summary>
                <div className="faq-content-clean">{item.a}</div>
              </details>
            ))}
            <div className="faq-action">
              <Link className="button-waizer-solid" to="/docs/faq">
                Ver FAQ completo →
              </Link>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
}