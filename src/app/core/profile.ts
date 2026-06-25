export interface SkillGroup {
  title: string;
  items: string[];
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

export const skills: SkillGroup[] = [
  { title: 'Backend', items: ['.NET / C#', 'APIs REST', 'PL/SQL', 'Oracle APEX'] },
  { title: 'Frontend', items: ['Angular', 'React', 'TypeScript', 'HTML & CSS'] },
  { title: 'Dados', items: ['SQL Server', 'Oracle', 'Modelagem', 'Integrações'] },
  { title: 'Automação & Processos', items: ['Power Automate', 'n8n', 'Git', 'Scrum / Kanban'] }
];
