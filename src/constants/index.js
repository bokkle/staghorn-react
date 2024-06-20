import chainsaw from '../assets/chainsaw-light.png';
import sheers from '../assets/sheers-light.png';
import planting from '../assets/care-light.png';
import emergency from '../assets/emergency-light.png';

const navLinks = ['about', 'services', 'contact'];

const aboutUs = [
  'We are a dedicated team of highly trained, professional arborists',
  'We take pride in providing top-notch tree removal, pruning, and planting',
  "All of our work is executed with the utmost care for the environment and our client's needs",
];

const services = [
  {
    title: 'tree removal',
    info: 'Assess, remove and dispose of trees; safely and efficiently',
    image: chainsaw,
  },
  {
    title: 'tree pruning',
    info: 'Promote healthier growth, enhance aesthetics, and ensure the safety of surrounding structures',
    image: sheers,
  },
  {
    title: 'planting',
    info: 'Expert garden and tree planting, creating beautiful and sustainable landscapes that breathe life into your surroundings',
    image: planting,
  },
  {
    title: 'emergency services',
    info: 'Immediate, professional assistance in swiftly and safely removing hazardous trees',
    image: emergency,
  },
];

export { navLinks, aboutUs, services };
