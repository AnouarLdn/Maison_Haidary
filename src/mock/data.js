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
  paragraphTwo: `House of Haidary est un duo franco-britannique, passionné de technologie, d'art et de design. Nous voulons que votre site web se démarque de la foule. Communiquer un message clair est élément clé dans votre stratégie digitale vers le succès.`,
  paragraphThree: `Connaître votre vision est essentiel afin que nous puissions créer un design gagnant adapté à vos besoins. Notre mission est de vous aider à développer votre présence digitale.`,
  paragraphFour: `Création de site internet vitrine`,
  paragraphFive: `Création de plateforme E-Commerce`,
  paragraphSix: `Création de site "Click and Collect"`,
  paragraphSeven: `Création d'applications mobile`,
  // resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Anouar_Haidary_WebDeveloper.png',
    title: 'Anouar Haidary Portfolio',
    info: `Ce site est le portfolio d'Anouar Haidary. En tant que développeur web en Javascript, ce site vous présente des projets avec différents degré de complexité.`,
    info2: '',
    url: 'https://houseofhaidary.netlify.app/',
    repo: 'https://github.com/AnouarLdn/resume', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'jillpoole.png',
    title: 'Jill Poole Nature Art',
    info: `Jill Poole est une artiste britannique qui nous a demandé de passer d'un site Web statique à une plateforme de commerce électronique. Nous avons également pu l'aider en photographiant et en stylisant ses œuvres pour sa toute nouvelle boutique en ligne.`,
    info2: '',
    url: 'https://www.jillpoole.com/',
    repo: '', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: 'Vous désirez en savoir plus? Super !',
  btn: 'Contactez-nous',
  email: 'houseofhaidary@gmail.com',
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
