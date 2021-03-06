import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'House of Haidary', // e.g: 'Name | Developer'
  lang: 'fr', // e.g: en, es, fr, jp
  description: `Création de sites internet vitrine, de platforme, E-Commerce, "Click and Collect" et d'applications mobile`
};

// HERO DATA
export const heroData = {
  title: 'Nous sommes',
  name: 'House of Haidary',
  subtitle: 'Une maison de Création Digitale.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `50 millisecondes soit 0.05 secondes est le lapse de temps alloué par visiteur pour se forger une première impression sur un site internet. Votre site web se doit de capter l’attention du visiteur dès son arrivée.`,
  paragraphTwo: `House of Haidary est un duo franco-britannique, passionné de technologie, d'art et de design. Nous voulons que votre site web se démarque de la foule. Communiquer un message clair est un élément clé dans votre stratégie digitale vers le succès.`,
  paragraphThree: `Connaître votre vision est essentiel afin que nous puissions créer un design gagnant adapté à vos besoins. Notre mission est de vous aider à développer votre présence digitale.`,
  paragraphFour: `Création de site internet vitrine`,
  paragraphFive: `Création de plateforme E-Commerce`,
  paragraphSix: `Création de site "Click and Collect"`,
  paragraphSeven: `Création d'application mobile`,
  // resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Anouar_Haidary_WebDeveloper.png',
    title: 'Anouar Haidary Portfolio',
    info: `Ce site est le portfolio d'Anouar Haidary développeur web en Javascript. Ce site présente une serie projets ayant différents niveaux de complexité.`,
    info2: '',
    url: 'https://resume.houseofhaidary.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'jillpoole.png',
    title: 'Jill Poole Nature Art',
    info: `Jill Poole est une artiste britannique qui souhaitait passer d'un site web vitrine à une plateforme E-Commerce. Nous avons accompagné Jill tout au long de ce projet.`,
    info2: '',
    url: 'https://www.jillpoole.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Zegny_landingPage.png',
    title: 'Zegny',
    info: `Ceci est une page vitrine concernant le développement d'une application mobile.`,
    info2: '',
    url: 'https://zegny.houseofhaidary.com/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: `N'hésitez pas à nous appeler au 06 66 64 14 36 .`,
  btn: 'Email',
  email: 'weare@houseofhaidary.com',
};

// FOOTER DATA
export const footerData = {
  // networks: [
  //   {
  //     id: nanoid(),
  //     name: '',
  //     url: '',
  //   },
  //   {
  //     id: nanoid(),
  //     name: '',
  //     url: '',
  //   },
  //   {
  //     id: nanoid(),
  //     name: '',
  //     url: '',
  //   },
  //   {
  //     id: nanoid(),
  //     name: '',
  //     url: '',
  //   },
  // ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
