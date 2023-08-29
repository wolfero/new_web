import { TfiEmail } from 'react-icons/tfi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { socialLink } from '@/common-app/model/socialLink/socialLink';

const email = 'frantisek.klucar4@gmail.com';
const linkedIn = 'https://www.linkedin.com/in/frantisek-klucar/';
const github = 'https://github.com/wolfero';

export const socialLinks: socialLink[] = [
	{
		title: 'Linkedin',
		href: linkedIn,
		icon: <FaLinkedin size={25} />,
	},
	{
		title: 'Email',
		href: email,
		icon: <TfiEmail size={25} />,
	},
	{
		title: 'Github',
		href: github,
		icon: <FaGithub size={25} />,
	},
];
