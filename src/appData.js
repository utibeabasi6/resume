import { FiGithub, FiTwitter } from 'react-icons/fi';
import { RiMailSendLine, RiLinkedinLine } from 'react-icons/ri';
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
  text: 'Utibeabasi Umanah is a DevOps engineer with Fullstack developer experience. He is passionate about integrating DevOps culture to automate the developer workflow',
};

export const experience = {
  title: 'Experience',
  data: [
      {
      title: 'Technical writer',
      company: 'Ambassador labs',
      year: '2022',
      duties: [
        'Create technical content centered around Kubernetes'
      ],
    },
    {
      title: 'DevOps freelancer',
      company: 'Upwork',
      year: '2021',
      duties: [
        'Implement Infrastructure as Code to setup various cloud environment',
        'Build, dockerize and deploy microservices to Kubernetes clusters',
        'Simplify the deployment of microservices using Helm to a simple helm install command',
        'Build CI/CD pipelines to deploy applications to various environments which include Virtual machines, Kubernetes clusters, ECS, Elastic beanstalk etc',
        'Setup cloud infrastructure on AWS and prepare the environment for deployment'
        
      ],
    },
    {
      title: 'DevOps Engineer',
      company: 'HNGi8 Internship',
      year: '2021',
      duties: [
        'Configure and manage servers',
        'Build and maintain resilient CI/CD pipelines that can handle hndreds of developers pushing code',
        'Cut down build duration by offloading the build process to a seperate server',
        'Manage the build and release of applications for 3 teams'
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
    {
      title: 'Personal Portfolio',
      description: 'My personal website',
      url: 'https://utibeumanah.herokuapp.com',
      stack: ['django'],
    },
    {
      title: 'Personal blog',
      description: 'My personal blog where I write about DevOps and Tech',
      url: 'https://utibeabasiumanah6.medium.com/',
      stack: ['Technical writing'],
    },
  ],
};

export const contact = {
  title: 'Contact Infomation',
  buttonText: 'Message',
  buttonIcon: RiMailSendLine,
  details: [
    {
      icon: HiOutlineMail,
      data: 'mailto:utibeabasiumanah6@gmail.com',
    },
  ],
  socials: [
    {
      url: 'https://github.com/utibeabasi6',
      icon: FiGithub,
    },
    {
      url: 'https://linkedin.com/in/utibeabasiumanah',
      icon: RiLinkedinLine,
    },
    {
      url: 'https://twitter.com/utibeumanah_',
      icon: FiTwitter,
    },
  ],
};

export const education = {
  title: 'Education',
  data: [
    {
      degree: 'B.Sc Computer engineering',
      school: 'University of Uyo',
      year: '2020 - Present',
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
