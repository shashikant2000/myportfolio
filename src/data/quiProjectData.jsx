// Import images
import Image1 from '../images/ui-project-1.jpg';
import Image2 from '../images/web-project-2.jpg';
import Image3 from '../images/mobile-project-2.jpg';
import Image4 from '../images/mobile-project-1.jpg';
import Image5 from '../images/web-project-1.jpg';
import Image6 from '../images/ui-project-2.jpg';
// Import icons
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
} from 'react-icons/fi';

export const quiProjectData = {
	ProjectHeader: {
		title: 'Qualcomm UI Component Library',
		publishDate: 'August 26, 2024',
		tags: 'UI / Frontend / Component Library',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Qualcomm UI Library',
			img: Image1,
		},
		{
			id: 2,
			title: 'Qualcomm UI Library',
			img: Image2,
		},
		{
			id: 3,
			title: 'Qualcomm UI Library',
			img: Image3,
		},
	],
	ProjectInfo: {
		ClientHeading: 'About',
		CompanyInfo: [
			{
				id: 1,
				title: 'Organization',
				details: 'Qualcomm India Pvt. Ltd',
			},
			{
				id: 2,
				title: 'Services',
				details: 'Mobile, Desktop, Automotive',
			},
			{
				id: 3,
				title: 'Website',
				details: 'qualcomm.com',
				url: 'https://www.qualcomm.com/',
			},
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'Built a versatile cross-framework component library for Angular and React, unifying UI development across Qualcomm with 30,000+ internal downloads and integration into 15+ production applications.',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'React',
					'Angular',
					'TypeScript',
					'Tailwind CSS',
					'Vite',
					'pnpm',
					'Turborepo',
					'MDX',
				],
			},
		],
		ProjectDetailsHeading: 'Key Contributions',
		ProjectDetails: [
			{
				id: 1,
				details:
					'As a software developer at Qualcomm, I built a versatile cross-framework component library for both Angular and React, unifying UI development across the organization. The library achieved over <strong>30,000 internal downloads</strong> and was integrated into 15+ production applications.',
			},
			{
				id: 2,
				details:
					'<strong>Cross-Framework Architecture:</strong><br>' +
					'Designed a shared JavaScript layer enabling consistent UI components across Angular and React applications. Integrated Tailwind CSS for utility-first styling and TypeScript for robust type safety, reducing duplication and accelerating development cycles.',
			},
			{
				id: 3,
				details:
					'<strong>Build System & Documentation:</strong><br>' +
					'Set up a monorepo with pnpm and Turborepo for efficient builds. Created comprehensive MDX documentation for all components, enabling easy adoption and onboarding for teams across the organization.',
			},
		],
		SocialSharingHeading: 'Share This',
		SocialSharing: [
			{
				id: 1,
				name: 'Instagram',
				icon: <FiInstagram />,
				url: 'https://www.instagram.com/shashikant_k_y/',
			},
			{
				id: 2,
				name: 'Facebook',
				icon: <FiFacebook />,
				url: 'https://facebook.com/',
			},
			{
				id: 3,
				name: 'LinkedIn',
				icon: <FiLinkedin />,
				url: 'https://www.linkedin.com/in/shashikantkumar2000/',
			},
		],
	},
	RelatedProject: {
		title: 'Related Projects',
		Projects: [
			{
				id: 1,
				title: 'SSMA Tool',
				img: Image4,
			},
			{
				id: 2,
				title: 'Device Margin Tool',
				img: Image5,
			},
			{
				id: 3,
				title: 'Testing Automation',
				img: Image6,
			},
			{
				id: 4,
				title: 'Web Application',
				img: Image3,
			},
		],
	},
};
