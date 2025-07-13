import { Car, Bike, Music, Radio, Rocket, Film } from 'lucide-react';

export const projects = [
  {
    title: 'QuickLearn',
    description:
      "Engineered comprehensive test automation for an LMS platform that transforms corporate training experiences. Designed and implemented end-to-end test suites using Cypress and TypeScript, ensuring seamless user journeys across complex learning pathways. Built robust testing frameworks for real-time analytics and interactive features, maintaining 99.9% reliability while enabling rapid feature development.",
    link: 'https://learn.quicklabs.in/',
    tech: [
      'TypeScript',
      'Cypress',
      'Manual Testing',
      'NextJS',
      'NestJS',
      'Postgres',
      'WebSockets',
    ],
    isOngoing: true,
  },
  {
    title: 'MDLand',
    description:
      "Led quality assurance for a critical healthcare platform connecting providers and patients through iClinic and iPopHealth. Implemented comprehensive testing strategies using Katalon Studio and Rainforest QA, ensuring HIPAA compliance and zero-downtime patient data management. Designed test automation frameworks for complex healthcare workflows, maintaining 99.99% uptime for life-critical systems while enabling rapid feature deployment.",
    link: 'https://mdland.com/',
    tech: [
      'Katalon Studio',
      'Rainforest QA',
      'TestRails',
      'Kafka',
      'MongoDB',
      'TestRails',
    ],
    isOngoing: false,
  },
  {
    title: 'Trajector - OutreachLegal',
    description:
    'Architected quality assurance for a platform connecting US Veterans with VA services, ensuring no veteran struggles with digital paperwork. Implemented advanced test automation using Playwright and TypeScript, validating complex form-filling algorithms and ML-powered assistance features. Built comprehensive testing pipelines that guarantee accessibility compliance and seamless user experiences for veterans navigating critical services.',
    link: 'https://www.trajector.com/',
    tech: [
      'Playwright',
      'TypeScript',
      'TestRails',
      'Aha!',
      'ML Algorithms',
      'Real-time Systems',
    ],
    isOngoing: true,
  },
  {
    title: 'QubeMoney',
    description:
      "Spearheaded comprehensive quality assurance for a fintech platform empowering individuals to achieve financial freedom through QubeMoney. Designed and executed cross-platform testing strategies using Playwright for web and native mobile testing for iOS/Android, ensuring PCI compliance and secure financial transactions. Implemented advanced monitoring with DataDog and requirement analysis processes, maintaining 99.9% uptime for critical financial operations.",
    link: 'https://qubemoney.com/',
    tech: [
      'JIRA',
      'Playwright',
      'DataDog',
      'JavaScript',
      'Postgres',
      'Requirement Analysis',
      'Android Testing',
      'IOS Testing',
    ],
    isOngoing: true,
  },
  {
    title: 'E-commerce (Pharmacy)',
    description:
      "Developed comprehensive test automation for a pharmacy e-commerce platform selling healthcare and cosmetic products. Built robust Selenium-based test suites using Java and TestNG, ensuring secure payment processing and regulatory compliance for pharmaceutical sales. Implemented CI/CD pipelines with Jenkins and Maven, maintaining quality standards for critical healthcare product transactions and customer data protection.",
    link: 'https://frankrosspharmacy.com/',
    tech: [
      'Core Java',
      'Selenium',
      'Jekins',
      'TestNG',
      'Maven',
    ],
    year: 2018,
  },
  {
    title: 'Noon Academy',
    description:
      'Executed comprehensive quality assurance for an educational platform transforming learning experiences globally. Designed and implemented automated testing frameworks using Selenium and Java, ensuring scalable performance for thousands of concurrent users. Built performance testing suites with JMeter and database validation processes for MySQL, maintaining platform reliability during peak learning periods.',
    link: 'https://www.noonacademy.com/',
    tech: [
      'Core Java',
      'Selenium',
      'MySQL',
      'Jmeter',
    ],
    year: 2019,
  },
  
];

export const experiences = [
  {
    company: 'Crownstack Technologies',
    role: 'Lead QA Engineer',
    period: 'June 2022 - Present',
    location: 'Noida',
    description:
      "Leading quality assurance initiatives across multiple development teams, ensuring software excellence from conception to deployment. Architecting comprehensive test strategies and automation frameworks that have reduced critical bugs by 95% and deployment cycles by 60%. Mentoring junior QA engineers in modern testing practices while bridging the gap between technical requirements and business objectives through strategic test planning.",
    companyUrl: 'https://www.crownstack.com/',
    linkedinUrl: 'https://www.linkedin.com/company/crownstack/',
  },
  {
    company: 'ECM Technologies',
    role: 'Quality Analyst - Web',
    period: 'December 2018 - May 2022',
    location: 'Noida',
    description:
      "Evolved from manual testing to building sophisticated automation frameworks, while helping development teams embrace quality-first practices. Became the go-to person for turning complex business requirements into reliable, testable solutions. Established comprehensive testing methodologies and review processes that improved overall team productivity by 40%. Made strategic testing decisions that ensured zero critical production failures.",
    companyUrl: 'https://www.ecm-technologies.eu/',
    linkedinUrl: 'https://www.linkedin.com/company/thermaclear/',
  },
];

export const skills = {
  programming: [
    {
      name: 'JavaScript',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    { name: 'TypeScript', url: 'https://www.typescriptlang.org/docs/' },
    { name: 'Java', url: 'https://dev.java/learn/' },
    { name: 'SQL', url: 'https://dev.mysql.com/doc/' },
  ],
  frontend: [
    { name: 'React.js', url: 'https://react.dev/' },
    { name: 'Next.js', url: 'https://nextjs.org/docs' },
    { name: 'Redux Toolkit', url: 'https://redux-toolkit.js.org/' },
    { name: 'React Query', url: 'https://tanstack.com/query/latest' },
    { name: 'React Native', url: 'https://reactnative.dev/' },
    {
      name: 'Server Components',
      url: 'https://react.dev/reference/react/Component',
    },
    { name: 'HTML5', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    { name: 'CSS3', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    {
      name: 'WebSockets',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebSocket',
    },
    { name: 'React Router', url: 'https://reactrouter.com/en/main' },
  ],
  styling: [
    { name: 'Tailwind CSS', url: 'https://tailwindcss.com/docs' },
    { name: 'Material UI', url: 'https://mui.com/material-ui/' },
    { name: 'Styled Components', url: 'https://styled-components.com/docs' },
    { name: 'SASS/SCSS', url: 'https://sass-lang.com/documentation/' },
    { name: 'CSS-in-JS', url: 'https://cssinjs.org/' },
  ],
  backend: [
    { name: 'Node.js', url: 'https://nodejs.org/docs/latest/api/' },
    { name: 'NestJS', url: 'https://docs.nestjs.com/' },
    { name: 'FastAPI', url: 'https://fastapi.tiangolo.com/' },
    { name: 'Express.js', url: 'https://expressjs.com/' },
    { name: 'Socket.io', url: 'https://socket.io/docs/v4/' },
    { name: 'GraphQL', url: 'https://graphql.org/learn/' },
    { name: 'REST APIs', url: 'https://restfulapi.net/' },
    { name: 'Microservices', url: 'https://microservices.io/' },
  ],
  database: [
    { name: 'PostgreSQL', url: 'https://www.postgresql.org/docs/' },
    { name: 'MongoDB', url: 'https://docs.mongodb.com/' },
    { name: 'MySQL', url: 'https://www.mysql.com/' },
  ],
  deployment: [
    { name: 'Docker', url: 'https://docs.docker.com/' },
    { name: 'AWS', url: 'https://docs.aws.amazon.com/' },
    { name: 'CI/CD', url: 'https://about.gitlab.com/topics/ci-cd/' },
    { name: 'Kubernetes', url: 'https://kubernetes.io/docs/home/' },
  ],
  testing: [
    { name: 'Playwright', url: 'https://playwright.dev/' },
    {
      name: 'Katalon Studio',
      url: 'https://katalon.com/',
    },
    { name: 'Rainforest QA', url: 'https://www.rainforestqa.com/home/'},
    { name: 'Cypress', url: 'https://docs.cypress.io/' },
    { name: 'Selenium', url: 'https://www.selenium.dev/' },
  ],
  architecture: [
    {
      name: 'System Design',
      url: 'https://github.com/donnemartin/system-design-primer',
    },
    {
      name: 'Design Patterns',
      url: 'https://refactoring.guru/design-patterns',
    },
    { name: 'Clean Code', url: 'https://www.clean-code-developer.com/' },
    { name: 'DDD', url: 'https://domainlanguage.com/ddd/' },
    {
      name: 'Event-Driven',
      url: 'https://microservices.io/patterns/data/event-driven-architecture.html',
    },
    { name: 'API Design', url: 'https://swagger.io/specification/' },
  ],
};

export const interests = [
  {
    icon: Car,
    title: 'Speed & Style',
    description:
      "From Italian supercars to Japanese classics, anything that screams performance gets my heart racing. Because life's better when you're chasing that perfect drive.",
  },
  {
    icon: Bike,
    title: 'Track Day Dreams',
    description:
      'Defender on the wishlist and adrenaline in my veins. When Eight Cylinder and a V8 Engine meets, magic happens. Weekend rider plotting track day adventures.',
  },
  {
    icon: Music,
    title: 'Desi Hip Hop',
    description:
      "Vibing to the evolution of our street sound. From Young Stunners' poetry to Seedhe Maut's wordplay, watching our culture paint stories through bars and beats.",
  },
  {
    icon: Radio,
    title: 'Podcast Explorer',
    description:
      "From spine-chilling ghost stories to mind-bending evolution theories, ancient history to future tech. If it makes you think, question, or wonder - I'm tuning in.",
  },
  {
    icon: Rocket,
    title: 'Future Fanatic',
    description:
      'Deep diving into quantum computing possibilities, exploring AI breakthroughs, and probably nerding out about large language models right now. The geekier, the better!',
  },
  {
    icon: Film,
    title: 'Plots & Portals',
    description:
      "From Naruto's ninja way to Avengers' endgame, Shelby's schemes to Sherlock's deductions - diving into stories that bend reality and boggle minds. Always up for a theory chat!",
  },
];
