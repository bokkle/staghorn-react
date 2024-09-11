//about us
import { IoSchoolSharp } from 'react-icons/io5';
import { FaHelmetSafety } from 'react-icons/fa6';
import { FaEnvira } from 'react-icons/fa6';
import { FaHandshake } from 'react-icons/fa6';

//services
import planting from '../assets/planting.png';
import pruning from '../assets/pruning.png';
import galleryThree from '../assets/staghorn-work-sq3.png';
import galleryFive from '../assets/staghorn-work-sq5.png';

//testimonials
import liam from '../assets/iconLiam.png';
import darlene from '../assets/iconDarlene.png';
import colton from '../assets/coltonIcon.png';
import anna from '../assets/annaIcon.png';
import benny from '../assets/iconBenny.png';

const navItems = [
  {
    title: 'about',
    link: '#about',
  },
  {
    title: 'services',
    link: '#services',
  },
  {
    title: 'reviews',
    link: '#reviews',
  },
  {
    title: 'contact',
    link: '#contact',
  },
];

const aboutUs = [
  {
    title: 'Highly trained',
    description:
      "We've completed formal education on Arborism, staying up-to-date with the latest advancements in tree care",
    icon: IoSchoolSharp,
  },
  {
    title: 'eco-friendly',
    description:
      'We use environmentally conscious methods to preserve the natural beauty of your landscape',
    icon: FaEnvira,
  },
  {
    title: 'safety first',
    description:
      "Safety is our first priority, we'll always ensure the safety of our team, you, and your property",
    icon: FaHelmetSafety,
  },
  {
    title: 'best prices',
    description:
      "You'll recieve an efficient, premium service for the best price, that's our guarantee",
    icon: FaHandshake,
  },
];

const services = [
  {
    title: 'tree removal',
    info: 'Assess, remove and dispose of trees; safely and efficiently',
    image: galleryThree,
    alt: 'An arborist using a chainsaw to cut down a tree',
  },
  {
    title: 'tree pruning',
    info: 'Promote healthier growth, enhance aesthetics, and ensure the safety of surrounding structures',
    image: pruning,
    alt: 'A tree being pruned',
  },
  {
    title: 'planting',
    info: 'Expert garden and tree planting, creating beautiful and sustainable landscapes that breathe life into your surroundings',
    image: planting,
    alt: 'gardening equipment and a freshly planted tree',
  },
  {
    title: 'emergency services',
    info: 'Immediate, professional assistance in swiftly and safely removing hazardous trees',
    image: galleryFive,
    alt: 'one of our arborists at work, in a tree',
  },
];

const testimonials = [
  {
    name: 'anna v.',
    location: 'Pembroke, ON',
    quote: [
      'The Staghorn team was friendly, fast, and great prices too! Thanks so much guys!! 😊',
    ],
    numStars: 5,
    img: anna,
  },
  {
    name: 'benny z.',
    location: 'Pembroke, ON',
    quote: [
      'The team at Staghorn was incredibly helpful from start to finish. They took the time to assess our property and provide personalized recommendations that really made a difference. We had several overgrown trees that needed attention, and they explained the process clearly and professionally. They went above and beyond to ensure everything was done safely and efficiently. I felt confident in their expertise, and the results were even better than we expected. ',
      "We couldn't be happier with their service!",
      '-Benny',
    ],
    class: 'md:row-span-2',
    numStars: 5,
    img: benny,
  },
  {
    name: 'colton m.',
    location: 'Petawawa, ON',
    quote: [
      'Matt pulled up on short notice.. saved my garage from being crushed by a dying tree',
    ],
    numStars: 5,
    img: colton,
  },
  {
    name: 'liam t.',
    location: 'Deep River, ON',
    quote: [
      "My father is older and can't take care of his property like he used to, there were a ton of trees that were growing into power lines near his house, Matthew came by and fixed the issue. He was professional and did spectacular work, thanks.",
    ],
    numStars: 5,
    img: liam,
  },
  {
    name: 'darlene r.',
    location: 'Arnprior, ON',
    quote: [
      'I felt claustrophobic in my backyard, everything was so overgrown. You turned it into a sanctuary. I am very happy that I found out about you.',
    ],
    numStars: 5,
    img: darlene,
  },
];

export { navItems, aboutUs, services, testimonials };
