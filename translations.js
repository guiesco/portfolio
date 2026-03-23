// Translation system for the portfolio
const translations = {
    pt: {
        // Navigation
        nav: {
            home: 'Início',
            about: 'Sobre',
            experience: 'Experiência',
            projects: 'Projetos',
            skills: 'Habilidades',
            contact: 'Contato'
        },
        // Hero Section
        hero: {
            greeting: 'Olá, eu sou',
            title: 'Guilherme Escobar',
            subtitle: 'Fullstack Developer | Backend Specialist | Machine Learning Engineer',
            bio: 'Desenvolvedor Fullstack com quase 7 anos de experiência construindo aplicações web escaláveis e de alta performance. Especializado em arquitetura backend com Node.js, NestJS e Python, com sólida expertise em Machine Learning.',
            ctaPrimary: 'Entre em Contato',
            ctaSecondary: 'Ver Projetos'
        },
        // About Section
        about: {
            title: 'Sobre Mim',
            intro: 'Sou um desenvolvedor <strong>curioso, criativo e com pensamento crítico</strong>, sempre em busca de novas formas de aprender e me aprimorar. Sou movido por desafios e pelo desejo de fazer e aprender coisas novas, sejam tecnologias ou soft skills.',
            experience: {
                title: '7 Anos de Experiência',
                description: 'Desenvolvendo soluções web robustas e escaláveis'
            },
            education: {
                title: 'Formação em Sistemas de Informação',
                description: 'UFSC - Foco em Data Science e Engenharia de Software'
            },
            international: {
                title: 'Experiência Internacional',
                description: 'Trabalhando remotamente para empresa em Nova York'
            },
            location: 'Florianópolis, SC, Brasil',
            languages: 'Português (Nativo), Inglês (Avançado), Espanhol (Intermediário)',
            birthdate: '24/10/1999'
        },
        // Experience Section
        experience: {
            title: 'Experiência Profissional',
            jobs: [
                {
                    title: 'Fullstack Developer',
                    company: 'Halo Media',
                    location: 'New York, USA (Remoto)',
                    period: 'Set 2022 - Presente',
                    description: [
                        'Desenvolvimento de aplicações fullstack usando Node.js, Nest.js, Angular, React e Ionic em múltiplos projetos simultâneos',
                        'Implementação de arquiteturas escaláveis com MongoDB e PostgreSQL, garantindo alta disponibilidade e performance',
                        'Criação de suítes de testes automatizados com Jest, Jasmine e Cypress',
                        'Colaboração com times internacionais em ambiente remoto usando metodologias ágeis (Scrum/Kanban)',
                        'Mentoria de desenvolvedores júnior e revisão de código para garantir qualidade e boas práticas'
                    ]
                },
                {
                    title: 'Fullstack Developer',
                    company: 'Linx - Stone',
                    location: 'Florianópolis, Brasil',
                    period: 'Jan 2021 - Set 2022',
                    description: [
                        'Integração de produtos da empresa em plataformas de clientes (websites e aplicações) usando Vue.js e JavaScript vanilla',
                        'Desenvolvimento e manutenção de features backend em Python e Node.js, adaptando soluções às necessidades específicas dos clientes',
                        'Configuração e otimização de APIs RESTful',
                        'Trabalho direto com clientes para entender requisitos e propor soluções técnicas apropriadas'
                    ]
                },
                {
                    title: 'Fullstack Developer',
                    company: 'Hero Medic (HealthTech Startup)',
                    location: 'Florianópolis, Brasil',
                    period: 'Jun 2020 - Jan 2021',
                    description: [
                        'Único desenvolvedor responsável por todo o ciclo de vida de uma aplicação de saúde, desde o planejamento até o deploy',
                        'Full stack: Angular, Ionic, Node.js e MongoDB, com implementação de autenticação JWT e notificações push',
                        'Modelagem e gestão de banco de dados NoSQL, garantindo integridade e performance das queries',
                        'Experiência em startup: tomada de decisões técnicas, priorização de features e entrega contínua'
                    ]
                },
                {
                    title: 'Frontend Developer',
                    company: 'Signa Edu (EdTech)',
                    location: 'Florianópolis, Brasil',
                    period: 'Jan 2019 - Jan 2020',
                    description: [
                        'Desenvolvedor front-end líder para uma plataforma de cursos para pessoas surdas, impactando positivamente a acessibilidade educacional',
                        'Manutenção e criação de novas features usando JavaScript vanilla e Vue.js',
                        'Implementação de interfaces responsivas e acessíveis seguindo diretrizes WCAG',
                        'Colaboração com time de design para traduzir mockups em interfaces funcionais'
                    ]
                },
                {
                    title: 'Fullstack Developer - Trainee',
                    company: 'Equipe Digital',
                    location: 'Florianópolis, Brasil',
                    period: 'Jun 2018 - Jan 2019',
                    description: [
                        'Desenvolvimento de sistemas web com PHP, JavaScript, HTML, CSS e PostgreSQL',
                        'Implementação de templates fornecidos por designers, garantindo fidelidade ao design aprovado',
                        'Primeira experiência profissional, consolidando fundamentos de desenvolvimento web'
                    ]
                }
            ]
        },
        // Projects Section
        projects: {
            title: 'Projetos em Destaque',
            items: [
                {
                    title: 'Design Thinking Platform',
                    description: 'Plataforma digital para aplicar a metodologia Design Thinking de forma interativa e colaborativa. Projeto de conclusão de curso (TCC) com features para criação e gestão de design sprints, personas de usuário e prototipagem.',
                    cta: 'Ver Código'
                },
                {
                    title: 'Suicide Risk Detection',
                    description: 'Sistema de Big Data / Data Warehouse para detecção de risco de suicídio. Coleta de dados de perfis do Twitter, construção de data warehouse e treinamento de modelo de NLP para identificar tendências de risco de suicídio em perfis de usuários.',
                    cta: 'Ver Perfil'
                },
                {
                    title: 'Scalable RESTful API',
                    description: 'Design de arquitetura de API com autenticação JWT, rate limiting e documentação Swagger. Containerizada com Docker para facilitar deployment e escalabilidade.',
                    cta: 'Ver Perfil'
                }
            ]
        },
        // Skills Section
        skills: {
            title: 'Habilidades Técnicas',
            categories: {
                backend: 'Backend',
                frontend: 'Frontend',
                databases: 'Databases',
                ml: 'Machine Learning',
                devops: 'DevOps & Tools',
                testing: 'Testing'
            }
        },
        // Contact Section
        contact: {
            title: 'Entre em Contato',
            description: 'Estou sempre aberto a novas oportunidades e projetos desafiadores. Se você tem uma ideia ou precisa de um desenvolvedor fullstack experiente, vamos conversar!',
            email: 'Email',
            phone: 'Telefone',
            location: 'Localização',
            locationValue: 'Florianópolis, SC, Brasil'
        },
        // Footer
        footer: {
            rights: 'Todos os direitos reservados.',
            made: 'Desenvolvido com',
            and: 'e muito'
        }
    },
    en: {
        // Navigation
        nav: {
            home: 'Home',
            about: 'About',
            experience: 'Experience',
            projects: 'Projects',
            skills: 'Skills',
            contact: 'Contact'
        },
        // Hero Section
        hero: {
            greeting: 'Hello, I\'m',
            title: 'Guilherme Escobar',
            subtitle: 'Fullstack Developer | Backend Specialist | Machine Learning Engineer',
            bio: 'Fullstack Developer with nearly 7 years of experience building scalable, high-performance web applications. Specialized in backend architecture with Node.js, NestJS, and Python, with solid expertise in Machine Learning.',
            ctaPrimary: 'Get in Touch',
            ctaSecondary: 'View Projects'
        },
        // About Section
        about: {
            title: 'About Me',
            intro: 'I\'m a <strong>curious, creative, and critical-thinking</strong> developer, always looking for new ways to learn and improve. I\'m driven by challenges and the desire to create and learn new things, whether technologies or soft skills.',
            experience: {
                title: '7 Years of Experience',
                description: 'Developing robust and scalable web solutions'
            },
            education: {
                title: 'Bachelor in Information Systems',
                description: 'UFSC - Focus on Data Science and Software Engineering'
            },
            international: {
                title: 'International Experience',
                description: 'Working remotely for a company in New York'
            },
            location: 'Florianópolis, SC, Brazil',
            languages: 'Portuguese (Native), English (Advanced), Spanish (Intermediate)',
            birthdate: '10/24/1999'
        },
        // Experience Section
        experience: {
            title: 'Professional Experience',
            jobs: [
                {
                    title: 'Fullstack Developer',
                    company: 'Halo Media',
                    location: 'New York, USA (Remote)',
                    period: 'Sep 2022 - Present',
                    description: [
                        'Development of fullstack applications using Node.js, Nest.js, Angular, React and Ionic across multiple simultaneous projects',
                        'Implementation of scalable architectures with MongoDB and PostgreSQL, ensuring high availability and performance',
                        'Creation of automated test suites with Jest, Jasmine and Cypress',
                        'Collaboration with international teams in remote environment using agile methodologies (Scrum/Kanban)',
                        'Mentoring junior developers and code review to ensure quality and best practices'
                    ]
                },
                {
                    title: 'Fullstack Developer',
                    company: 'Linx - Stone',
                    location: 'Florianópolis, Brazil',
                    period: 'Jan 2021 - Sep 2022',
                    description: [
                        'Integration of company products into client platforms (websites and applications) using Vue.js and vanilla JavaScript',
                        'Development and maintenance of backend features in Python and Node.js, adapting solutions to specific client needs',
                        'Configuration and optimization of RESTful APIs',
                        'Direct work with clients to understand requirements and propose appropriate technical solutions'
                    ]
                },
                {
                    title: 'Fullstack Developer',
                    company: 'Hero Medic (HealthTech Startup)',
                    location: 'Florianópolis, Brazil',
                    period: 'Jun 2020 - Jan 2021',
                    description: [
                        'Sole developer responsible for the entire lifecycle of a health application, from planning to deployment',
                        'Full stack: Angular, Ionic, Node.js and MongoDB, with JWT authentication and push notifications implementation',
                        'NoSQL database modeling and management, ensuring data integrity and query performance',
                        'Startup experience: making technical decisions, prioritizing features and continuous delivery'
                    ]
                },
                {
                    title: 'Frontend Developer',
                    company: 'Signa Edu (EdTech)',
                    location: 'Florianópolis, Brazil',
                    period: 'Jan 2019 - Jan 2020',
                    description: [
                        'Lead front-end developer for a course platform for deaf people, positively impacting educational accessibility',
                        'Maintenance and creation of new features using vanilla JavaScript and Vue.js',
                        'Implementation of responsive and accessible interfaces following WCAG guidelines',
                        'Collaboration with design team to translate mockups into functional interfaces'
                    ]
                },
                {
                    title: 'Fullstack Developer - Trainee',
                    company: 'Equipe Digital',
                    location: 'Florianópolis, Brazil',
                    period: 'Jun 2018 - Jan 2019',
                    description: [
                        'Development of web systems with PHP, JavaScript, HTML, CSS and PostgreSQL',
                        'Implementation of templates provided by designers, ensuring fidelity to approved design',
                        'First professional experience, consolidating web development fundamentals'
                    ]
                }
            ]
        },
        // Projects Section
        projects: {
            title: 'Featured Projects',
            items: [
                {
                    title: 'Design Thinking Platform',
                    description: 'Digital platform for applying Design Thinking methodology in an interactive and collaborative way. Graduation project (TCC) with features for creating and managing design sprints, user personas and prototyping.',
                    cta: 'View Code'
                },
                {
                    title: 'Suicide Risk Detection',
                    description: 'Big Data / Data Warehouse system for suicide risk detection. Twitter profile data collection, data warehouse construction and NLP model training to identify suicide risk trends in user profiles.',
                    cta: 'View Profile'
                },
                {
                    title: 'Scalable RESTful API',
                    description: 'API architecture design with JWT authentication, rate limiting and Swagger documentation. Containerized with Docker for easy deployment and scalability.',
                    cta: 'View Profile'
                }
            ]
        },
        // Skills Section
        skills: {
            title: 'Technical Skills',
            categories: {
                backend: 'Backend',
                frontend: 'Frontend',
                databases: 'Databases',
                ml: 'Machine Learning',
                devops: 'DevOps & Tools',
                testing: 'Testing'
            }
        },
        // Contact Section
        contact: {
            title: 'Get in Touch',
            description: 'I\'m always open to new opportunities and challenging projects. If you have an idea or need an experienced fullstack developer, let\'s talk!',
            email: 'Email',
            phone: 'Phone',
            location: 'Location',
            locationValue: 'Florianópolis, SC, Brazil'
        },
        // Footer
        footer: {
            rights: 'All rights reserved.',
            made: 'Developed with',
            and: 'and lots of'
        }
    },
    es: {
        // Navigation
        nav: {
            home: 'Inicio',
            about: 'Sobre Mí',
            experience: 'Experiencia',
            projects: 'Proyectos',
            skills: 'Habilidades',
            contact: 'Contacto'
        },
        // Hero Section
        hero: {
            greeting: 'Hola, soy',
            title: 'Guilherme Escobar',
            subtitle: 'Desarrollador Fullstack | Especialista Backend | Ingeniero de Machine Learning',
            bio: 'Desarrollador Fullstack con casi 7 años de experiencia construyendo aplicaciones web escalables y de alto rendimiento. Especializado en arquitectura backend con Node.js, NestJS y Python, con sólida experiencia en Machine Learning.',
            ctaPrimary: 'Contáctame',
            ctaSecondary: 'Ver Proyectos'
        },
        // About Section
        about: {
            title: 'Sobre Mí',
            intro: 'Soy un desarrollador <strong>curioso, creativo y con pensamiento crítico</strong>, siempre en busca de nuevas formas de aprender y mejorar. Me motivan los desafíos y el deseo de hacer y aprender cosas nuevas, ya sean tecnologías o habilidades blandas.',
            experience: {
                title: '7 Años de Experiencia',
                description: 'Desarrollando soluciones web robustas y escalables'
            },
            education: {
                title: 'Grado en Sistemas de Información',
                description: 'UFSC - Enfoque en Ciencia de Datos e Ingeniería de Software'
            },
            international: {
                title: 'Experiencia Internacional',
                description: 'Trabajando remotamente para empresa en Nueva York'
            },
            location: 'Florianópolis, SC, Brasil',
            languages: 'Portugués (Nativo), Inglés (Avanzado), Español (Intermedio)',
            birthdate: '24/10/1999'
        },
        // Experience Section
        experience: {
            title: 'Experiencia Profesional',
            jobs: [
                {
                    title: 'Desarrollador Fullstack',
                    company: 'Halo Media',
                    location: 'Nueva York, USA (Remoto)',
                    period: 'Sep 2022 - Presente',
                    description: [
                        'Desarrollo de aplicaciones fullstack usando Node.js, Nest.js, Angular, React e Ionic en múltiples proyectos simultáneos',
                        'Implementación de arquitecturas escalables con MongoDB y PostgreSQL, garantizando alta disponibilidad y rendimiento',
                        'Creación de suites de pruebas automatizadas con Jest, Jasmine y Cypress',
                        'Colaboración con equipos internacionales en entorno remoto usando metodologías ágiles (Scrum/Kanban)',
                        'Mentoría de desarrolladores junior y revisión de código para garantizar calidad y buenas prácticas'
                    ]
                },
                {
                    title: 'Desarrollador Fullstack',
                    company: 'Linx - Stone',
                    location: 'Florianópolis, Brasil',
                    period: 'Ene 2021 - Sep 2022',
                    description: [
                        'Integración de productos de la empresa en plataformas de clientes (sitios web y aplicaciones) usando Vue.js y JavaScript vanilla',
                        'Desarrollo y mantenimiento de características backend en Python y Node.js, adaptando soluciones a las necesidades específicas de los clientes',
                        'Configuración y optimización de APIs RESTful',
                        'Trabajo directo con clientes para entender requisitos y proponer soluciones técnicas apropiadas'
                    ]
                },
                {
                    title: 'Desarrollador Fullstack',
                    company: 'Hero Medic (HealthTech Startup)',
                    location: 'Florianópolis, Brasil',
                    period: 'Jun 2020 - Ene 2021',
                    description: [
                        'Único desarrollador responsable de todo el ciclo de vida de una aplicación de salud, desde la planificación hasta el despliegue',
                        'Full stack: Angular, Ionic, Node.js y MongoDB, con implementación de autenticación JWT y notificaciones push',
                        'Modelado y gestión de base de datos NoSQL, garantizando integridad y rendimiento de las consultas',
                        'Experiencia en startup: toma de decisiones técnicas, priorización de características y entrega continua'
                    ]
                },
                {
                    title: 'Desarrollador Frontend',
                    company: 'Signa Edu (EdTech)',
                    location: 'Florianópolis, Brasil',
                    period: 'Ene 2019 - Ene 2020',
                    description: [
                        'Desarrollador front-end líder para una plataforma de cursos para personas sordas, impactando positivamente la accesibilidad educativa',
                        'Mantenimiento y creación de nuevas características usando JavaScript vanilla y Vue.js',
                        'Implementación de interfaces responsivas y accesibles siguiendo directrices WCAG',
                        'Colaboración con equipo de diseño para traducir mockups en interfaces funcionales'
                    ]
                },
                {
                    title: 'Desarrollador Fullstack - Trainee',
                    company: 'Equipe Digital',
                    location: 'Florianópolis, Brasil',
                    period: 'Jun 2018 - Ene 2019',
                    description: [
                        'Desarrollo de sistemas web con PHP, JavaScript, HTML, CSS y PostgreSQL',
                        'Implementación de plantillas proporcionadas por diseñadores, garantizando fidelidad al diseño aprobado',
                        'Primera experiencia profesional, consolidando fundamentos de desarrollo web'
                    ]
                }
            ]
        },
        // Projects Section
        projects: {
            title: 'Proyectos Destacados',
            items: [
                {
                    title: 'Plataforma de Design Thinking',
                    description: 'Plataforma digital para aplicar la metodología Design Thinking de forma interactiva y colaborativa. Proyecto de fin de carrera (TCC) con características para creación y gestión de design sprints, personas de usuario y prototipado.',
                    cta: 'Ver Código'
                },
                {
                    title: 'Detección de Riesgo de Suicidio',
                    description: 'Sistema de Big Data / Data Warehouse para detección de riesgo de suicidio. Recolección de datos de perfiles de Twitter, construcción de data warehouse y entrenamiento de modelo de NLP para identificar tendencias de riesgo de suicidio en perfiles de usuarios.',
                    cta: 'Ver Perfil'
                },
                {
                    title: 'API RESTful Escalable',
                    description: 'Diseño de arquitectura de API con autenticación JWT, rate limiting y documentación Swagger. Contenerizada con Docker para facilitar despliegue y escalabilidad.',
                    cta: 'Ver Perfil'
                }
            ]
        },
        // Skills Section
        skills: {
            title: 'Habilidades Técnicas',
            categories: {
                backend: 'Backend',
                frontend: 'Frontend',
                databases: 'Bases de Datos',
                ml: 'Machine Learning',
                devops: 'DevOps & Herramientas',
                testing: 'Testing'
            }
        },
        // Contact Section
        contact: {
            title: 'Contáctame',
            description: '¡Siempre estoy abierto a nuevas oportunidades y proyectos desafiantes! Si tienes una idea o necesitas un desarrollador fullstack experimentado, ¡hablemos!',
            email: 'Email',
            phone: 'Teléfono',
            location: 'Ubicación',
            locationValue: 'Florianópolis, SC, Brasil'
        },
        // Footer
        footer: {
            rights: 'Todos los derechos reservados.',
            made: 'Desarrollado con',
            and: 'y mucho'
        }
    }
};

// Get current language from localStorage or default to Portuguese
let currentLanguage = localStorage.getItem('language') || 'pt';

// Function to get translation
function t(key) {
    const keys = key.split('.');
    let value = translations[currentLanguage];
    
    for (const k of keys) {
        value = value[k];
        if (!value) return key;
    }
    
    return value;
}

// Function to update page content
function updateContent() {
    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage === 'pt' ? 'pt-BR' : currentLanguage;
    
    // Navigation
    document.querySelectorAll('.nav-link').forEach((link, index) => {
        const keys = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
        link.textContent = t(`nav.${keys[index]}`);
    });
    
    // Hero Section
    document.querySelector('.hero-subtitle').textContent = t('hero.greeting');
    document.querySelector('.hero-description').textContent = t('hero.subtitle');
    document.querySelector('.hero-bio').textContent = t('hero.bio');
    document.querySelectorAll('.hero-cta .btn')[0].textContent = t('hero.ctaPrimary');
    document.querySelectorAll('.hero-cta .btn')[1].textContent = t('hero.ctaSecondary');
    
    // About Section
    document.querySelector('#about .section-title').textContent = t('about.title');
    document.querySelector('.about-intro').innerHTML = t('about.intro');
    
    const highlights = document.querySelectorAll('.highlight-item');
    highlights[0].querySelector('h3').textContent = t('about.experience.title');
    highlights[0].querySelector('p').textContent = t('about.experience.description');
    highlights[1].querySelector('h3').textContent = t('about.education.title');
    highlights[1].querySelector('p').textContent = t('about.education.description');
    highlights[2].querySelector('h3').textContent = t('about.international.title');
    highlights[2].querySelector('p').textContent = t('about.international.description');
    
    const infoItems = document.querySelectorAll('.info-item span');
    infoItems[0].textContent = t('about.location');
    infoItems[1].textContent = t('about.languages');
    infoItems[2].textContent = t('about.birthdate');
    
    // Experience Section
    document.querySelector('#experience .section-title').textContent = t('experience.title');
    const experienceJobs = t('experience.jobs');
    document.querySelectorAll('.timeline-item').forEach((item, index) => {
        const job = experienceJobs[index];
        item.querySelector('.timeline-header h3').textContent = job.title;
        item.querySelector('.location').innerHTML = `<i class="fas fa-map-marker-alt"></i> ${job.location}`;
        item.querySelector('.period').innerHTML = `<i class="fas fa-calendar"></i> ${job.period}`;
        
        const descList = item.querySelector('.timeline-description');
        descList.innerHTML = '';
        job.description.forEach(desc => {
            const li = document.createElement('li');
            li.textContent = desc;
            descList.appendChild(li);
        });
    });
    
    // Projects Section
    document.querySelector('#projects .section-title').textContent = t('projects.title');
    const projectItems = t('projects.items');
    document.querySelectorAll('.project-card').forEach((card, index) => {
        const project = projectItems[index];
        card.querySelector('h3').textContent = project.title;
        card.querySelector('.project-description').textContent = project.description;
        card.querySelector('.project-links a').innerHTML = `<i class="fab fa-github"></i> ${project.cta}`;
    });
    
    // Skills Section
    document.querySelector('#skills .section-title').textContent = t('skills.title');
    const skillCategories = document.querySelectorAll('.skill-category h3');
    const categoryKeys = ['backend', 'frontend', 'databases', 'ml', 'devops', 'testing'];
    skillCategories.forEach((cat, index) => {
        const icon = cat.querySelector('i').outerHTML;
        cat.innerHTML = `${icon} ${t(`skills.categories.${categoryKeys[index]}`)}`;
    });
    
    // Contact Section
    document.querySelector('#contact .section-title').textContent = t('contact.title');
    document.querySelector('.contact-text p').textContent = t('contact.description');
    
    const contactItems = document.querySelectorAll('.contact-item h4');
    contactItems[0].textContent = t('contact.email');
    contactItems[1].textContent = t('contact.phone');
    contactItems[2].textContent = t('contact.location');
    document.querySelectorAll('.contact-item p')[0].textContent = t('contact.locationValue');
    
    // Footer
    const footerText = document.querySelector('.footer p');
    footerText.innerHTML = `&copy; 2026 Guilherme Escobar Lopes. ${t('footer.rights')}`;
    
    const footerNote = document.querySelector('.footer-note');
    footerNote.innerHTML = `${t('footer.made')} <i class="fas fa-heart"></i> ${t('footer.and')} <i class="fas fa-coffee"></i>`;
    
    // Update active language in selector
    document.querySelectorAll('.language-option').forEach(option => {
        option.classList.remove('active');
        if (option.dataset.lang === currentLanguage) {
            option.classList.add('active');
        }
    });
}

// Function to change language
function changeLanguage(lang) {
    if (translations[lang]) {
        currentLanguage = lang;
        localStorage.setItem('language', lang);
        updateContent();
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Set current language display
    const currentLangSpan = document.getElementById('currentLang');
    if (currentLangSpan) {
        currentLangSpan.textContent = currentLanguage.toUpperCase();
    }
    
    // Update content with saved language
    updateContent();
});
