import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          sidebar: {
            about: 'About',
            projects: 'Projects',
            exp: 'Exp.',
            contact: 'Contact'
          },
          header: {
            resume: "My resume",
            resumeLink: "https://drive.google.com/uc?export=download&id=1PwoAnCB_bTM0aI0GOfH_NeNcQkbZm0pq"
          },
          welcome: {
            name: "Cristian Metz👋🏼",
            profession: "Software Developer",
            description: "I'm skilled in web development. I completed an I.T. technician course at CETEC-UCS, and currently beginning a bachelor's degree in Software Engineering.",
            contact: "Contact Me"
          },
          about: {
            title: 'About',
            text: {
                part1: "Hello! I'm Cristian, a technology enthusiast and software developer.  I'm currently looking for an internship opportunity in the I.T. area.",
                part2: 'I completed a technical course in I.T. integrated with high school at CETEC-UCS, where I acquired skills in algorithms, programming, databases and project management. I have experience in projects using a variety of technologies, including Python, JavaScript, C#, Django, ReactJS, NodeJS, PostgreSQL, HTML and CSS. ',
                part3: "I will soon be starting a bachelor's degree in Software Engineering at UCS, seeking to improve my knowledge even further.",
                part4: "I believe in technology as a solution to challenges, and I'm excited to continue my journey of learning and continuous evolution."
            },
            links: "My links",
            technologies: 'Technologies:'
          },
          projects: {
            title: 'Projects',
            project: {
                p1: {
                    title: "Trattoria Arte Italiana",
                    desc: " A ticket control system integrated with an API for automatically sending personalized messages via WhatsApp. This final project of my technical IT course resulted in a reduction in the time taken to send more than 300 messages, as well as providing a clear view of tickets and buyers. "
                },
                p2: {
                    title: "Invoices Issue Automation",
                    desc: " A straightforward automation tool designed for effortlessly issuing and printing invoices. The program extracts order numbers and their respective pages from the VHSYS ERP system, enabling the swift issuance and printing of a series of invoices with a single click. "
                },
                p3: {
                    title: "Pixel Mafia Game",
                    desc: "This is a dynamic Beat 'em up game created using C# within the Unity game engine. Developed in groups during classes at CETEC UCS, the game is designed to challenge players with exciting combat mechanics and immersive levels. Your objective is to eliminate waves of enemies strategically to progress through each level."
                },
                p4: {
                    title: "CETEC Adventure Land",
                    desc: "Landing page for and amusement park. It's full responsiveness, using Bootstrap,  it seamlessly adjusts to any screen size, ensuring an optimal experience for all visitors."
                },
            },
            links: "My links",
            technologies: 'Technologies:'
          },
          projects: {
            title: 'Projects',
            project: {
                p1: {
                    title: "Trattoria Arte Italiana",
                    desc: "A ticket control system integrated with an API for automatically sending personalized messages via WhatsApp. This final project of my technical IT course resulted in a reduction in the time taken to send more than 300 messages, as well as providing a clear view of tickets and buyers."
                },
                p2: {
                    title: "Invoices Issue Automation",
                    desc: " A straightforward automation tool designed for effortlessly issuing and printing invoices. The program extracts order numbers and their respective pages from the VHSYS ERP system, enabling the swift issuance and printing of a series of invoices with a single click. "
                },
                p3: {
                    title: "Pixel Mafia Game",
                    desc: "This is a dynamic Beat 'em up game created using C# within the Unity game engine. Developed in groups during classes at CETEC UCS, the game is designed to challenge players with exciting combat mechanics and immersive levels. Your objective is to eliminate waves of enemies strategically to progress through each level."
                },
                p4: {
                    title: "CETEC Adventure Land",
                    desc: "Landing page for and amusement park. It's full responsiveness, using Bootstrap,  it seamlessly adjusts to any screen size, ensuring an optimal experience for all visitors."
                },
            }
            },
            experience: {
                title: 'Experience',
                profession: "Software Developer and Designer",
                description: {
                    item1: "Developed an automation in Python, using the Selenium and Tkinter libraries, to optimize the issuing and printing of invoices and orders in an ERP system, saving several hours of repetitive work and reducing the margin for error.",
                    item2: "Catalog design using Photoshop.",
                    item3: "Registration of products and customers in the ERP system, also ensuring that tax data was correct (ICMS, IPI, PIS, COFINS)."
                }
            },
            contact: {
                title: 'Contact',
                description: "Shoot me an email, and let's connect! You can also send me a message on Linkedin or WhatsApp if that's more your speed.",
            }

        }
      },
      pt: {
        translation: {
          sidebar: {
            about: 'Sobre',
            projects: 'Projetos',
            exp: 'Exp.',
            contact: 'Contato'
          },
          header: {
            resume: 'Currículo',
            resumeLink: "https://drive.google.com/uc?export=download&id=1yf6eVUKIMnJoOlzdS1aw4FDFh3sx-DSC"
          },
          welcome: {
            name: 'Cristian Metz👋🏼',
            profession: 'Desenvolvedor de Software',
            description: 'Minha especialidade é desenvolvimento web. Concluí um curso de técnico de informática no CETEC-UCS, e estou a iniciar uma licenciatura em Engenharia de Software.',
            contact: 'Vamos conversar!'
          },
          about: {
            title: 'Sobre',
            text: {
                part1: 'Olá! Eu me chamo Cristian, um entusiasta de tecnologia e desenvolvedor de software. Atualmente estou em busca de oportunidade de estágio na área de T.I.',
                part2: 'Concluí o curso técnico em informática integrado ao ensino médio no CETEC-UCS, onde adquiri habilidades em algoritmos, programação, banco de dados e gerenciamento de projetos. Tenho experiência em projetos utilizando uma variedade de tecnologias, incluindo Python, JavaScript, C#, Django, ReactJS, NodeJS, PostgreSQL, HTML e CSS. ',
                part3: 'Em breve, iniciarei o curso de bacharelado em Engenharia de Software na UCS, buscando aprimorar ainda mais meu conhecimento. ',
                part4: 'Acredito na tecnologia como solução para desafios, e estou entusiasmado em prosseguir minha jornada de aprendizado e evolução contínua.'
            },
            links: "Meus links",
            technologies: 'Tecnologias:'
          },
          projects: {
            title: 'Projetos',
            project: {
                p1: {
                    title: "Trattoria Arte Italiana",
                    desc: "Um sistema de controle de ingressos integrado a uma API para o envio automático de mensagens personalizadas via WhatsApp. Este projeto final do meu curso técnico de informática resultou numa redução do tempo de envio de mais de 300 mensagens, além de proporcionar uma visão clara dos ingressos e dos compradores."
                },
                p2: {
                    title: "Automação de Emissão de Notas Fiscais",
                    desc: " Uma ferramenta de automatição concebida para emitir e imprimir notas fiscais sem esforço. O programa extrai os números dos pedidos e as respectivas páginas no sistema ERP VHSYS, permitindo a rápida emissão e impressão de uma série de notascom um único clique."
                },
                p3: {
                    title: "Pixel Mafia Game",
                    desc: "Este é um jogo dinâmico de Beat 'em up criado usando C# e Unity. Desenvolvido em grupo durante as aulas no CETEC UCS, o jogo foi projetado para desafiar os jogadores com mecânicas de combate emocionantes e níveis imersivos. Seu objetivo é eliminar inimigos estrategicamente para avançar em cada nível."
                },
                p4: {
                    title: "CETEC Adventure Land",
                    desc: "Landing page para um parque de diversões. É totalmente responsiva, utilizando Bootstrap, ajusta-se perfeitamente a qualquer tamanho de tela, garantindo uma experiência ótima para todos os visitantes."
                },
            }
            },
            experience: {
                title: 'Experiência',
                profession: "Desenvolvedor de Software e Designer",
                description: {
                    item1: "Desenvolvi uma automação em Python, utilizando as bibliotecas Selenium e Tkinter, para otimizar a emissão e impressão de notas e pedidos em um sistema ERP, salvando várias horas de trabalho repetitivo e reduzindo a margem de erro.",
                    item2: "Design de catálogos, utilizando Photoshop.",
                    item3: "Cadastro de produtos e clientes em sistema ERP, garantindo também que os dados fiscais estivessem corretos (ICMS, IPI, PIS, COFINS).  "
                }
            },
            contact: {
                title: 'Contato',
                description: "Envie um e-mail e vamos conversar! Também podes me enviar uma mensagem no Linkedin ou no WhatsApp, se for mais do seu agrado.",
            }
        
        }
      }
    }
  });

export default i18n;