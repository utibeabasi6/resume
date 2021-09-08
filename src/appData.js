import { FiGithub, FiSmartphone, FiGlobe } from 'react-icons/fi';
import { RiMailSendLine } from 'react-icons/ri';
import { HiMenuAlt3, HiOutlineMail } from 'react-icons/hi';

import { IoClose } from 'react-icons/io5';

import Profile from './assets/profile.png';
import Pattern from './assets/patternBG.png';
import Hng from './assets/hng.jpg';
import Zuri from './assets/zuri.jpg';
import i4g from './assets/i4g.jpg';

export const appData = {
  name: 'Utibeabasi Umanah',
  description: 'DevOps Engineer',
  image: Profile,
  Pattern: Pattern,
  MenuIcon: HiMenuAlt3,
  CloseIcon: IoClose,
  logos: [Hng, Zuri, i4g],
};

export const about = {
  title: 'Profile',
  text: 'Utibeabasi Umanah is a DevOps engineer and Fullstack developer with over 2 years of experience. He is passionate about integrating devops culture to automate the developer workflow',
};

export const experience = {
  title: 'Experience',
  data: [
    {
      title: 'DevOps Engineer',
      company: 'HNGi8 Internship',
      year: '2021',
      duties: [
        'Configure and manage servers',
        'Build and maintain CI/CD pipelines for teams',
      ],
    },
    {
      title: 'Backend Developer',
      company: 'Zuri Internship',
      year: '2021',
      duties: [
        'Help build the backend of a fitness website',
      ],
    }
  ],
};

export const projects = {
  title: 'Personal Projects',
  data: [
    {
      title: 'Online store',
      description: 'Online store built with django',
      url: 'https://utibestore.herokuapp.com',
      stack: ['django', 'Postgres'],
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
      data: 'tel:+2349030809169',
    },
    {
      icon: HiOutlineMail,
      data: 'mailto:utibeabasiumanah6@gmail.com',
    },
    {
      icon: FiGlobe,
      data: 'https://www.utibeumanah.xyz',
    },
  ],
  socials: [
    {
      url: 'https://github.com/utibeabasi6',
      icon: FiGithub,
    },
    // {
    //   url: 'https://linkedin.com/in/mikhaelnwankwo',
    //   icon: RiLinkedinLine,
    // },
    // {
    //   url: 'https://twitter.com/00mikhael',
    //   icon: FiTwitter,
    // },
  ],
};

export const education = {
  title: 'Education',
  data: [
    {
      degree: 'B.Sc Computer engineering',
      school: 'University of Uyo',
      year: '2021 - Present',
    },
    {
      degree: 'SSCE',
      school: 'Bright Future College',
      year: '2014 - 2020',
    },
  ],
};

export const skills = {
  title: 'Skills',
  data: [
    {
      title: 'IAAC / Configuration management',
      data: ['Terraform', 'Pulumi', 'AWS CloudFormation', 'Ansible'],
    },
    {
      title: 'Cloud',
      data: ['AWS', 'Heroku'],
    },
    {
      title: 'Linux',
      data: ['Python', 'Bash scripting', 'Automation', 'Linux administration'],
    },
    {
      title: 'CI/CD',
      data: ['Git', 'Github actions', 'AWS CodePipeline', 'Jenkins'],
    },
    {
      title: 'Containerization / Orchestration',
      data: ['Docker', 'Docker compose', 'AWS ECS', 'Kubernetes'],
    },
    {
      title: 'Monitoring / Logging',
      data: ['Prometheus/Grafana', 'Freshping', 'ELK', 'Slack'],
    },
    {
      title: 'Fullstack development',
      data: ['Python', 'Javascript', 'HTML/CSS', 'Golang', 'Dart'],
    },
  ],
};

export const footer = {
  copyright: ' 2021 Utibeabasi Umanahß',
};
