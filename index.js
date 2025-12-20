// Data structure for all projects
const projects = {
  'data-core': [
    {
      title: 'Análisis Predictivo de Churn',
      description: 'Modelo de machine learning para predecir la tasa de abandono de clientes en un servicio de suscripción, permitiendo acciones proactivas de retención. Visualización de factores clave en un dashboard interactivo.',
      stack: ['Python', 'Scikit-learn', 'Pandas', 'Looker Studio'],
      link: 'https://github.com/fernandoberumen/churn-prediction-model'
    },
    {
      title: 'Dashboard de Métricas en Tiempo Real',
      description: 'Plataforma centralizada para monitorizar KPIs de negocio en tiempo real. Ingesta de datos desde múltiples APIs y bases de datos para una visión unificada del rendimiento operativo.',
      stack: ['SQL', 'Python (Flask)', 'Plotly Dash', 'WebSocket'],
      link: 'https://github.com/fernandoberumen/real-time-metrics-dashboard'
    }
  ],
  'synthetic-ai': [
    {
      title: 'XIREN - Asistente de Voz Neuronal',
      description: 'Asistente de IA conversacional con capacidad de aprendizaje contextual. Integrado con APIs de conocimiento y sistemas domóticos para control y consulta por voz en lenguaje natural.',
      stack: ['TensorFlow', 'Python', 'NLP', 'Google Cloud AI'],
      link: 'https://github.com/fernandoberumen/xiren-voice-assistant'
    },
    {
      title: 'Generador de Contenido Sintético',
      description: 'Sistema basado en LLMs para la creación automática de artículos y resúmenes técnicos. Fine-tuning de modelos pre-entrenados para adaptarse a estilos de escritura específicos.',
      stack: ['Hugging Face', 'PyTorch', 'LangChain', 'GCP'],
      link: 'https://github.com/fernandoberumen/synthetic-content-generator'
    }
  ],
  'black-ops': [
    {
      title: 'Script de Análisis de Vulnerabilidades',
      description: 'Herramienta automatizada para escaneo de redes y aplicaciones web en busca de fallos de seguridad comunes (XSS, SQL Injection). Genera reportes detallados con niveles de criticidad.',
      stack: ['Python', 'Nmap', 'OWASP ZAP API', 'Bash'],
      link: 'https://github.com/fernandoberumen/vulnerability-scanner'
    },
    {
      title: 'Sistema de Honeypot Adaptativo',
      description: 'Despliegue de un señuelo de baja interacción que simula servicios vulnerables para atraer, registrar y analizar patrones de ataque de actores maliciosos en tiempo real.',
      stack: ['Docker', 'Python', 'Logstash', 'Fail2Ban'],
      link: 'https://github.com/fernandoberumen/adaptive-honeypot'
    }
  ],
  'web3-chain': [
    {
      title: 'Protocolo DeFi de Staking Líquido',
      description: 'Smart contract en la red de Ethereum que permite a los usuarios hacer staking de ETH y recibir a cambio un token líquido (stETH) que pueden utilizar en otras aplicaciones DeFi.',
      stack: ['Solidity', 'Hardhat', 'Chainlink', 'OpenZeppelin'],
      link: 'https://github.com/fernandoberumen/liquid-staking-protocol'
    },
    {
      title: 'Auditoría de Smart Contract para NFT Marketplace',
      description: 'Análisis exhaustivo de la lógica y seguridad de un conjunto de smart contracts para un mercado de NFTs. Identificación y mitigación de vectores de ataque como reentrancy y integer overflow.',
      stack: ['Slither', 'MythX', 'Ganache', 'Manual Review'],
      link: 'https://github.com/fernandoberumen/nft-marketplace-audit'
    }
  ]
};

// Function to render projects into the DOM
function renderProjects() {
  for (const category in projects) {
    const container = document.getElementById(`${category}-projects`);
    if (container) {
      let content = '';
      projects[category].forEach(project => {
        const tags = project.stack.map(tag => `<span class="tech-tag">${tag}</span>`).join('');
        
        content += `
          <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project-card block glassmorphism p-6 rounded-lg border border-transparent hover:border-cyan-400 transition-all duration-300 ease-in-out">
            <h3 class="text-xl font-bold text-cyan-200">${project.title}</h3>
            <p class="mt-3 text-gray-400 text-sm leading-relaxed">${project.description}</p>
            <div class="mt-5">
              <div class="flex flex-wrap gap-2">
                ${tags}
              </div>
            </div>
          </a>
        `;
      });
      container.innerHTML = content;
    }
  }
}

// Wait for the DOM to be fully loaded before rendering
document.addEventListener('DOMContentLoaded', renderProjects);