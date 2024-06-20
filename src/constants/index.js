import chainsaw from '../assets/chainsaw-light.png';
import sheers from '../assets/sheers-light.png';
import planting from '../assets/care-light.png';
import emergency from '../assets/emergency-light.png';
import galleryOne from '../assets/staghorn-work-sq1.png';
import galleryTwo from '../assets/staghorn-work-sq2.png';
import galleryThree from '../assets/staghorn-work-sq3.png';
import galleryFour from '../assets/staghorn-work-sq4.png';
import galleryFive from '../assets/staghorn-work-sq5.png';

const navLinks = ['about', 'services', 'contact'];

const aboutUs = [
  'Staghorn Tree Services is a dedicated team of highly trained, professional arborists',
  'We take pride in providing top-notch tree removal, pruning, and planting',
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

const gallery = [
  {
    id: 1,
    image: galleryOne,
    alt: 'arborist in tree',
  },
  {
    id: 2,
    image: galleryTwo,
    alt: 'arborist in tree',
  },
  {
    id: 3,
    image: galleryThree,
    alt: 'arborist cutting tree',
  },
  {
    id: 4,
    image: galleryFour,
    alt: 'stacked logs',
  },
  {
    id: 5,
    image: galleryFive,
    alt: 'arborist posing in tree',
  },
];

const testimonials = [
  {
    name: 'Benny Z.',
    review:
      'Matt pulled up on short notice... saved my garage from being crushed by a tree',
    location: 'Pembroke, ON',
    image: '',
  },
  {
    name: 'Anna V.',
    review:
      "I felt claustrophobic in my backyard, it was so overgrown you've transformed it into a sanctuary :)",
    location: 'Petawawa, ON',
    image: '',
  },
  {
    name: 'Jessica C.',
    review:
      'The Staghorn team was friendly, fast, and great prices too. Thanks guys!',
    location: 'Pembroke, ON',
    image: '',
  },
];

export { navLinks, aboutUs, services, gallery, testimonials };
