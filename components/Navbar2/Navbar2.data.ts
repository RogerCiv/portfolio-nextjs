import { SiGithub, SiInstagram, SiLinkedin, SiTwitter } from "react-icons/si";
import { SocialType } from "./Navbar2.type";


export const dataSocial: SocialType[] = [
  {
    name: 'Twitter',
    url: 'https://twitter.com/',
    icon: SiTwitter,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/',
    icon: SiInstagram,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/',
    icon: SiLinkedin,
  },
  {
    name: 'GitHub',
    url: 'https://www.github.com/RogerCiv/',
    icon: SiGithub,
  },
];
