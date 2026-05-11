import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { DocSearch } from '@docsearch/react';
import ThemedImage from '@theme/ThemedImage';
import '@docsearch/css';

const faqItems = [
  {
    q: "1. O que é o Waizer?",
    a: "O Waizer é uma ferramenta de análise conversacional. Ele interpreta as conversas do bot e do atendimento humano para mostrar o que está funcionando bem, onde existem falhas e quais pontos podem ser melhorados na jornada do cliente."
  },
  {
    q: "2. Para que o Waizer é indicado?",
    a: "É indicado para empresas que desejam acompanhar a saúde do atendimento digital e identificar gargalos com base em dados reais. Apoia suporte, vendas, qualidade e gestão, ajudando a reduzir o TMA, mapear objeções e melhorar fluxos."
  },
  {
    q: "3. Quanto tempo leva a primeira importação dos dados?",
    a: "Pode levar até 1 hora, dependendo do volume de dados. O Waizer organiza as informações para montar o dashboard e avisa quando concluído. Em bases muito grandes, o processamento pode continuar de forma incremental."
  },
  {
    q: "4. O que aparece no Dashboard do Waizer?",
    a: "Indicadores de operação e experiência: total de conversas, taxa de erro, transbordo, índice de resolução, score de performance, sentimentos, tópicos discutidos e insights de melhoria."
  },
  {
    q: "5. O que é o Ask Waizer?",
    a: "É o nosso agente de IA. Ele permite fazer perguntas diretas sobre os dados (ex: 'Por que o transbordo subiu ontem?') sem navegar manualmente pelos gráficos, identificando padrões e sugerindo melhorias rapidamente."
  }
];

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
  return (
    <Layout title="Central de Ajuda" description="Documentação oficial Waizer">
      <header className="hero-help-center">
        <div className="floating-ball ball-1"></div>
        <div className="floating-ball ball-2"></div>
        <div className="floating-ball ball-3"></div>
        <div className="floating-ball ball-4"></div>

        <ThemedImage
          alt="Waizer Logo"
          className="logo-waizer-home"
          sources={{
            light: useBaseUrl('/img/waizer.png'),
            dark: useBaseUrl('/img/waizer_branco.png'),
          }}
        />

        <h1 className="hero-title">
          Como podemos <span className="hero-pink-text">ajudar?</span>
        </h1>

        <div className="search-bar-wrapper">
          <DocSearch
            appId="MIX8COOBCT"
            indexName="helpwaizer_netlify_app_mix8coobct_articles"
            apiKey="ec4e992d2e1fe211df0ad69dce5be414"
            translations={{
              button: {
                buttonText: 'Pesquise aqui sua dúvida',
              },
            }}
          />
        </div>
      </header>

      <main className="home-main-content">
        <div className="category-grid">
          {categories.map((cat, idx) => (
            <Link key={idx} to={cat.link} className="category-card">
              <h3>{cat.title}</h3>
              <p>{cat.description}</p>
            </Link>
          ))}
        </div>
        {/* SEÇÃO FAQ */}
        <section className="faq-section">
          <div className="faq-badge">Perguntas Frequentes</div>

          {faqItems.map((item, idx) => (
            <details key={idx} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-content">{item.a}</div>
            </details>
          ))}

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link
              className="button-waizer-primary"
              to="/docs/faq"
            >
              Ver FAQ completo <span className="arrow-icon">→</span>
            </Link>
          </div>
        </section>

        <section className="support-section">
          <div className="container">
            <div className="support-header">
              <h2>Ainda precisa de ajuda?</h2>
            </div>
            <div className="support-grid">
              <Link to="https://forms.clickup.com/37031866/f/13a3xu-35753/BN9Q0MM9KZDKUC6SSY" className="support-card">
                <div className="support-icon">
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="#00a361"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <div className="support-content">
                  <h3>Suporte técnico oficial</h3>
                  <p>Estamos aqui para ajudar. Entre em contato com nossos especialistas para resolver qualquer questão.</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}