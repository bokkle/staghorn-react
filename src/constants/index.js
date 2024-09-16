//about us
import {
  PiGraduationCapThin,
  PiLeafThin,
  PiHardHatThin,
  PiMoneyWavyThin,
} from 'react-icons/pi';

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

//contact
import { LuPhone, LuMail } from 'react-icons/lu';
import { MdOutlineSms } from 'react-icons/md';

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

const serviceAreas = [
  'ottawa valley',
  'pembroke',
  'petawawa',
  'deep river',
  'arnprior',
];

const aboutUs = [
  {
    title: 'Highly trained',
    description:
      "We've completed formal education on Arboriculture, staying up-to-date with the latest advancements in tree care",
    icon: PiGraduationCapThin,
  },
  {
    title: 'eco-friendly',
    description:
      'We use environmentally conscious methods to preserve the natural beauty of your landscape',
    icon: PiLeafThin,
  },
  {
    title: 'safety first',
    description:
      "Safety is our first priority, we'll always ensure the safety of our team, you, and your property",
    icon: PiHardHatThin,
  },
  {
    title: 'best prices',
    description:
      "You'll recieve an efficient, premium service for the best price, that's our guarantee",
    icon: PiMoneyWavyThin,
  },
];

const services = [
  {
    title: 'tree removal',
    info: 'Assess, remove and dispose of trees; safely and efficiently',
    image: galleryThree,
    alt: 'An arborist using a chainsaw to cut down and remove a tree',
  },
  {
    title: 'tree pruning',
    info: 'Promote healthier growth, enhance aesthetics, and ensure the safety of surrounding structures',
    image: pruning,
    alt: 'A tree being professionally pruned',
  },
  {
    title: 'planting',
    info: 'Expert garden and tree planting, creating beautiful and sustainable landscapes that breathe life into your surroundings',
    image: planting,
    alt: 'gardening equipment and a freshly planted tree, showcasing our gardening and planting services',
  },
  {
    title: 'emergency services',
    info: 'Immediate, professional assistance in swiftly and safely removing hazardous trees',
    image: galleryFive,
    alt: 'one of our arborists at work, removing a tree',
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
    class: 'row-span-2',
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
      "My father can't take care of his property like he used to. There were a ton of trees that were growing into power lines near his house, Matthew came by and fixed the issue. He was professional and did spectacular work, thanks.",
    ],
    numStars: 5,
    img: liam,
  },
  {
    name: 'Jessica C.',
    location: 'Arnprior, ON',
    quote: [
      'I felt claustrophobic in my backyard, everything was so overgrown. You turned it into a sanctuary. I am super happy that I found out about you.',
    ],
    numStars: 5,
    img: darlene,
  },
];

const contactLinks = [
  {
    title: 'Text us',
    icon: MdOutlineSms,
    link: 'sms:+4162706681?body=Hey Staghorn, ',
  },
  {
    title: 'Call us',
    icon: LuPhone,
    link: 'tel:+4162706681',
  },
  {
    title: 'Email us',
    icon: LuMail,
    link: 'mailto:staghorn.treeservices@gmail.com',
    styling: 'col-span-2 md:col-span-1 lg:col-span-2 xl:col-span-1',
  },
];

const faq = [
  {
    question: 'What is an Arborist?',
    answer: [
      "It's a general term for anyone who specializes in tree care or tree services.",
    ],
  },
  {
    question: 'What is an ISA Certified Arborist?',
    answer: [
      'At Staghorn, we are ISA Certified Arborists. We have successfully completed formal education (specifically, at Algonquin College) in Arboriculture.',
      'To earn the ISA credential, an Arborist must be trained and knowledgeable in all aspects of arboriculture. This strengthens our credibility and reliability in the field so we can properly serve your needs.',
    ],
  },
  {
    question: 'Is Staghorn fully licensed and insured?',
    answer: [
      'Yes. We are committed to safe work practices, quality customer service, and are fully licensed and insured.',
    ],
  },
  {
    question: 'How can you tell if a sick tree can be saved?',
    answer: [
      "It's best to contact us and schedule a time for a certified arborist to visit your property.",
    ],
  },
  {
    question: 'Which services do you offer?',
    answer: [
      'Tree removal, pruning, planting, stump grinding, plant health care, deep root feedings, emerald ash borer treatments, and emergency services.',
      '• Tree Removal — We have all of the tools required to aid us in the removal of trees.',
      '• Pruning — We provide an excellent tree pruning service to protect your trees and property. Our experienced team uses best practices, and we carry out the pruning in such a way that the natural beauty of your property is not only preserved but enhanced.',
      '• Planting — Whether you need trees, shrubs, or even expert garden planting, we have you covered. We use best management practices such as proper hole depth and width, backfilling, staking, and mulching. We help ensure planting success by applying a root-stimulating fertilizer at the time of planting. We recommend continued fertilization services for future growth.',
      "• Stump Grinding — If you'd like the entire tree removed, including the stump, we can accommodate that! Generally, stumps are ground 6-8 inches below the surrounding landscape grade.",
      "• Plant Health Care — It's important to take an integrated approach to plant health care, which includes proper pruning and maintenance, proper fertilization, and, if necessary, insect and disease control. We use treatments that are scientifically proven to target the pests impacting your landscape while minimizing the impact on beneficial insects.",
      '• Deep Root Feedings — This helps maintain established trees, as well as provide high-quality nutrition to newly planted trees. The healthier the soil, the healthier the tree!',
      '• Emerald Ash Borer Treatments — Our arborists will evaluate your ash trees to determine if Emerald Ash Borer (EAB) is present. Not every tree is a good candidate for treatment, so we will advise you on a case-by-case basis. Treatments for EAB must be done annually or every other year, depending on the treatment performed.',
      "• Emergency Services — There's never a good time for a tree to fail, but it happens. Sometimes it's due to heavy snow, strong winds, disease, or age. These can be a safety risk to you and your property, especially if the tree is near power lines or your home. We'll come by and remedy the situation in a prompt and professional fashion.",
    ],
  },
  {
    question: 'What are your service areas?',
    answer: [
      "The Ottawa Valley, including Pembroke, Petawawa, Deep River, Mattawa, Fort Coulonge, Shawville, Renfrew, Quyon, Arnprior, Ottawa, Rockland, L'Orignal, Hawkesbury, Rigaud, Almonte, Round Lake Centre, Dacre, Douglas, Hyndford, Scotch Bush, Osceola, and Barr Line.",
    ],
  },
  {
    question: 'What is the best time of year to prune a tree?',
    answer: [
      "During the late winter or early spring, typically before new growth begins. During this dormant season, trees are less susceptible to stress, and it allows for better wound closure as they heal quickly in the spring. Additionally, with no leaves in the way, it's easier to see the tree's structure and make precise cuts.",
      "Flowering trees may have different pruning schedules to avoid cutting off next year's buds. We always consider the specific needs of each tree species.",
    ],
  },
  {
    question: 'Which payment methods do you accept?',
    answer: ['We accept payment by cash, cheque, or e-transfer.'],
  },
  {
    question: 'What time does the crew start working?',
    answer: ['Typically around 8:00 a.m., although we are flexible.'],
  },
  {
    question: 'Do I need to be present for the estimate?',
    answer: [
      "You do not need to be present. Our arborists will ring the doorbell upon arrival. If you can't or won't be home, just let us know and we'll walk the property to perform the estimate. Please ensure that we have access to the area (backyard, etc.), and that any pets are secured indoors.",
    ],
  },
  {
    question: 'Do I need to be present for my scheduled service?',
    answer: [
      'You do not need to be present. Our crew will have a detailed work order to set them up for success.',
    ],
  },
  {
    question: 'What if I need to cancel or reschedule?',
    answer: [
      "No worries, just try to reach out to us 24 hours before the work is scheduled. If there's inclement weather or unforeseen circumstances preventing your job's date, we'll be in touch to reschedule.",
    ],
  },
  {
    question: 'My cat is stuck in a tree! Can you help?',
    answer: ["We're happy to help; reach out to us."],
  },
  {
    question: 'What are the benefits of hiring a professional arborist?',
    answer: [
      'Hiring a professional arborist ensures your trees receive expert care and maintenance, promoting their health, safety, and longevity. Arborists are trained to diagnose tree diseases, safely remove hazardous branches, and perform proper pruning techniques that encourage healthy growth. They also help prevent potential property damage from weak or overgrown trees. A professional arborist can provide tailored advice and services to keep your trees healthy and beautiful while ensuring safety and environmental sustainability.',
    ],
  },
];

const privacy = [
  {
    title: 'privacy policy',
    description: [
      'Last updated: Monday, August 21, 2023',
      'Staghorn Tree Service operates staghorntrees.ca. This page informs you of our policies regarding the collection, use, and disclosure of Personal Information we receive from users of the Site. We use your Personal Information for providing our services to you and improving the Site, and ad targeting. By using the Site, you agree to the collection and use of information in accordance with this policy.',
    ],
  },
  {
    title: 'information collection and use',
    description: [
      'While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to, your name, email address, phone number, and postal address.',
    ],
  },
  {
    title: 'log data',
    description: [
      `Like many site operators, we collect information that your browser sends whenever you visit our Site ("Log Data"). This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages, and other statistics.`,
    ],
  },
  {
    title: 'cookies',
    description: [
      `Cookies are files with a small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer's hard drive.`,
      'Like many sites, we use "cookies" to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.',
    ],
  },
  {
    title: 'security',
    description: [
      `The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security. We can, however, guarantee that we will never sell your information to third parties.`,
    ],
  },
  {
    title: 'changes to this privacy policy',
    description: [
      'This Privacy Policy is effective as of August 21, 2023 and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.',
      'We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.',
    ],
  },
  {
    title: 'contact us',
    description: [
      'If you have any questions about this Privacy Policy, please contact us at staghorn.treeservices@gmail.com.',
    ],
  },
];

const tos = [
  {
    title: 'Terms of Service',
    description: [
      'Effective Date: August 21, 2023',
      'Welcome to Staghorn Tree Service ("we," "us," "our"). By using our website and services, you agree to the following Terms of Service. Please read them carefully as they govern your access to and use of our website and any related services.',
    ],
  },
  {
    title: 'Acceptance of Terms',
    description: [
      'By accessing or using our website, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, you may not access or use our website or services.',
    ],
  },
  {
    title: 'Services Provided',
    description: [
      'We provide professional arborist services, including tree care, removal, trimming, and planting (the “Services”). These services are offered subject to availability, weather conditions, and other factors. We reserve the right to modify or discontinue any aspect of our services at any time without notice.',
    ],
  },
  {
    title: 'Use of Our Website',
    description: [
      'You agree to use our website only for lawful purposes and in accordance with these Terms. You agree not to:',
      '1. Violate any applicable laws or regulations.',
      '2. Engage in any conduct that may harm, disrupt, or interfere with the functioning of our website.',
    ],
  },
  {
    title: 'Booking and Estimates',
    description: [
      'All bookings and requests for estimates are subject to availability. Any estimates provided are for informational purposes only and may vary based on actual services rendered. We reserve the right to refuse service to anyone for any reason at any time.',
    ],
  },
  {
    title: 'Payment and Cancellation Policy',
    description: [
      'Payment for services is due upon completion unless otherwise agreed upon in writing. We accept payment by [payment methods, e.g., credit card, bank transfer, cash]. If you need to cancel or reschedule a service, please notify us at least 24 hours in advance. Failure to provide notice may result in a cancellation fee.',
    ],
  },
  {
    title: 'Warranties and Disclaimers',
    description: [
      'We strive to provide high-quality arborist services, but we do not guarantee that all trees or vegetation will survive treatment, especially in cases of disease or extreme weather conditions. Our services are provided "as is" without any warranties, express or implied.',
      'To the fullest extent permitted by law, we disclaim any and all warranties, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.',
    ],
  },
  {
    title: 'Limitation of Liability',
    description: [
      'To the extent permitted by applicable law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, even if we have been advised of the possibility of such damages.',
      'Our total liability to you for any claim arising out of or in connection with these Terms or the services provided shall not exceed the amount you paid us for the service.',
    ],
  },
  {
    title: 'Intellectual Property',
    description: [
      'All content on our website, including text, images, logos, and graphics, is the property of Staghorn Tree Service and is protected by intellectual property laws. You may not use, reproduce, or distribute any content without our express written permission.',
    ],
  },
  {
    title: 'Third-Party Links',
    description: [
      'Our website may contain links to third-party websites that are not owned or controlled by us. We are not responsible for the content, privacy policies, or practices of any third-party websites. Access to any third-party websites is at your own risk.',
    ],
  },
  {
    title: 'Privacy Policy',
    description: [
      'Your use of our website is also governed by our Privacy Policy, which can be found on our Privacy Policy page. By using our website, you consent to the collection and use of your information as described in our Privacy Policy.',
    ],
  },
  {
    title: 'Indemnification',
    description: [
      'You agree to indemnify, defend, and hold harmless Staghorn Tree Services, its officers, directors, employees, and agents from and against any and all claims, liabilities, damages, losses, or expenses arising out of your use of our website or services, or your violation of these Terms.',
    ],
  },
  {
    title: 'Governing Law and Dispute Resolution',
    description: [
      'These Terms shall be governed by and construed in accordance with the laws of Ontario, Canada. Any disputes arising from or relating to these Terms or our services will be resolved through binding arbitration in Ontario, Canada, unless otherwise prohibited by law.',
    ],
  },
  {
    title: 'Changes to Terms of Service',
    description: [
      'We reserve the right to modify these Terms of Service at any time. Any changes will be effective immediately upon posting on our website. Your continued use of our website or services following any changes constitutes your acceptance of the revised Terms.',
    ],
  },
  {
    title: 'Contact Information',
    description: [
      'If you have any questions about these Terms of Service, please contact us at:',
      'Phone: 416-270-6681',
      'email: staghorn.treeservices@gmail.com',
    ],
  },
];

const policyLinks = [
  {
    title: 'Privacy Policy',
    link: 'privacy-policy',
  },
  {
    title: 'Terms of Service',
    link: 'tos',
  },
];

export {
  navItems,
  serviceAreas,
  aboutUs,
  services,
  testimonials,
  contactLinks,
  faq,
  privacy,
  tos,
  policyLinks,
};
