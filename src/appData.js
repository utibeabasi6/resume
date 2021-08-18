import { FiGithub, FiTwitter, FiSmartphone, FiGlobe } from 'react-icons/fi';
import { RiLinkedinLine, RiMailSendLine } from 'react-icons/ri';
import { HiMenuAlt3, HiOutlineMail } from 'react-icons/hi';

import Profile from './assets/profile.png';
import Pattern from './assets/patternBG.png';

export const appData = {
  name: 'Michael Nwankwo',
  description: 'Frontend Developer',
  image: Profile,
  Pattern: Pattern,
};

export const menu = {
  menuOpen: HiMenuAlt3,
};

export const about = {
  title: 'Profile',
  text: 'Michael is a Frontend Developer with 4 years of experience building Web and Mobile Applications. He is passionate about building modern and accessible user interfaces that delights users',
};

export const experience = {
  title: 'Experience',
  data: [
    {
      title: 'Frontend Developer',
      company: 'PayedIn Technologies Limited',
      year: '2021',
      duties: [
        'Document the companies software architecture',
        'Build and maintain the companies mobile app',
        'Build and maintain the companies frontend web application',
      ],
    },
    {
      title: 'Mobile Developer',
      company: 'Innovation Growth Hub',
      year: '2019',
      duties: [
        'Created custom mobile applications using native technologies',
        'Collaborated with project managers to assess progress of each task',
        'Reported status to clients to maintain open communication and promote satisfaction',
      ],
    },
  ],
};

export const projects = {
  title: 'Recent Projects',
  data: [
    {
      title: 'Survey Ninja',
      description: 'Web app to collect survey responses',
      url: 'https://survey-ninja.vercel.app',
      stack: ['React', 'Node', 'Express', 'MongoDB'],
    },
    {
      title: 'Foddi',
      description: "An imaginary foddie's page",
      url: 'https://foddi-page.vercel.app',
      stack: ['Next'],
    },
    {
      title: 'Posty',
      description: 'Web app built to simulate a multi-user blogging platform',
      url: 'https://post-app-mu.vercel.app',
      stack: ['React', 'Node', 'Express', 'MongoDB'],
    },
    {
      title: 'Qui Zap',
      description: 'Web app built to simulate a quiz application',
      url: 'https://qui-zap.vercel.app/',
      stack: ['React', 'Node', 'Express'],
    },
    {
      title: 'Shopper',
      description: 'A reactive shopping cart',
      url: 'https://shopper-sand.vercel.app/',
      stack: ['React'],
    },
  ],
};

export const contact = {
  title: 'Contact Infomation',
  buttonText: 'Message',
  buttonIcon: RiMailSendLine,
  details: [
    {
      icon: FiSmartphone,
      data: 'tel:+2349030355665',
    },
    {
      icon: HiOutlineMail,
      data: 'mailto:mikhaelnwankwo@gmail.com',
    },
    {
      icon: FiGlobe,
      data: 'https://www.mikhael.xyz',
    },
  ],
  socials: [
    {
      url: 'https://github.com/00mikhael',
      icon: FiGithub,
    },
    {
      url: 'https://linkedin.com/in/mikhaelnwankwo',
      icon: RiLinkedinLine,
    },
    {
      url: 'https://twitter.com/00mikhael',
      icon: FiTwitter,
    },
  ],
};

export const education = {
  title: 'Education',
  data: [
    {
      degree: 'B.Sc Industrial Chemistry',
      school: 'Abia State University',
      year: '2011 - 2015',
    },
    {
      degree: 'SSCE',
      school: 'Bishop Nwedo Memorial Boys High',
      year: '2006 - 2011',
    },
  ],
};

export const skills = {
  title: 'Skills',
  data: [
    {
      title: 'Professional',
      data: ['Git', 'Html', 'Css', 'Javascript', 'Java', 'ReactJS', 'VueJS', 'NodeJS', 'ExpressJs', 'MongoDB'],
    },
    {
      title: 'Soft',
      data: ['Clear verbal and written communication', 'Empathy', 'Critical reasoning', 'Technical reasoning', 'Team player'],
    },
  ],
};

export const footer = {
  copyright: ' 2021 Michael Nwankwo',
};
