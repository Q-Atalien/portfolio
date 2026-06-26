export interface SkillGroup {
  title: string;
  items: string[];
}

export interface Experience {
  role: string;
  company: string;
  type: string;
  period: string;
  duration: string;
  location: string;
  highlights: string[];
  stack: string[];
}

export const profile = {
  name: 'Atauine Ferreira Souto Dias',
  role: 'Desenvolvedora Full Stack',
  githubUser: 'Q-Atalien',
  github: 'https://github.com/Q-Atalien',
  linkedin: 'https://www.linkedin.com/in/atauine/',
  email: 'atauinesouto@gmail.com',
  tagline: 'Construo aplicações web modernas de ponta a ponta, do banco de dados à interface.',
  about: [
    'Desenvolvedora Full Stack com experiência na construção de sistemas web utilizando .NET, Angular e React.',
    'Atuo no desenvolvimento backend e frontend, criando APIs REST, integrações entre sistemas e aplicações escaláveis. Também possuo experiência com Oracle APEX, PL/SQL e SQL Server, o que fortaleceu minhas habilidades em banco de dados e integrações.',
    'Desenvolvo automações e integrações de processos com Power Automate e n8n, conectando diferentes sistemas e serviços para otimizar fluxos de trabalho e reduzir tarefas manuais.',
    'Atualmente meu foco está no desenvolvimento de aplicações web modernas, na melhoria da qualidade do código e na entrega de soluções confiáveis e bem estruturadas.'
  ]
};

export const experiences: Experience[] = [
  {
    role: 'Desenvolvedora Full Stack',
    company: 'SoftSell',
    type: 'Tempo integral',
    period: 'mai 2024 – mar 2026',
    duration: '1 ano 11 meses',
    location: 'Curitiba, Paraná, Brasil · Remoto',
    highlights: [
      'Desenvolvimento de soluções em Oracle APEX e PL/SQL.',
      'Criação e manutenção de telas e funcionalidades no Oracle APEX.',
      'Levantamento de requisitos e alinhamento com clientes.',
      'Atuação em projetos ágeis utilizando Maker 5 e Maker 3.9.',
      'Criação e manutenção de fluxos automatizados no Power Automate e n8n.',
      'Desenvolvimento em Oracle Database em conjunto com APEX e Maker, incluindo criação de tabelas, procedures, triggers e funções.'
    ],
    stack: ['Oracle APEX', 'PL/SQL', 'Oracle Database', 'Maker', 'Power Automate', 'n8n']
  },
  {
    role: 'Desenvolvedora Full Stack',
    company: 'ROKO',
    type: 'Tempo integral',
    period: 'set 2023 – dez 2023',
    duration: '4 meses',
    location: 'Curitiba, Paraná, Brasil · Remoto',
    highlights: [
      'Desenvolvimento de back-end em .NET e integração com SQL Server.',
      'Criação de interfaces completas com Angular, HTML, CSS e Bootstrap.',
      'Desenvolvimento de APIs e testes, com documentação no Swagger.',
      'Aplicação de TypeScript e JavaScript em soluções lógicas e funcionais.',
      'Participação em projeto para a Electrolux, atuando na migração de sistemas legados em DotNetNuke para .NET 6, com foco em modernização da arquitetura, desempenho e escalabilidade.'
    ],
    stack: ['.NET / C#', 'SQL Server', 'Angular', 'Bootstrap', 'Swagger', 'TypeScript']
  },
  {
    role: 'Desenvolvedora',
    company: 'Linx',
    type: 'Estágio',
    period: 'jan 2022 – jun 2023',
    duration: '1 ano 6 meses',
    location: 'São Paulo, Brasil · Remoto',
    highlights: [
      'Desenvolvimento de projeto com .NET Framework 4 para integração entre o sistema principal e os webservices de emissão de Nota Fiscal de Serviço, utilizando WSDL, SOAP e XML.',
      'Atuação no Back-End com C# e API RESTful, utilizando controle de versão com Git.',
      'Integração com Sefaz e manipulação de arquivos JSON/XML.',
      'Desenvolvimento Front-End com Angular.',
      'Levantamento de requisitos, elaboração de documentação e participação em reuniões ágeis (Kanban, SCRUM).'
    ],
    stack: ['.NET Framework', 'C#', 'API RESTful', 'Angular', 'Git', 'SOAP / XML']
  }
];

export const skills: SkillGroup[] = [
  { title: 'Backend', items: ['.NET / C#', 'APIs REST', 'PL/SQL', 'Oracle APEX'] },
  { title: 'Frontend', items: ['Angular', 'React', 'TypeScript', 'HTML & CSS'] },
  { title: 'Dados', items: ['SQL Server', 'Oracle', 'Modelagem', 'Integrações'] },
  { title: 'Automação & Processos', items: ['Power Automate', 'n8n', 'Git', 'Scrum / Kanban'] }
];
