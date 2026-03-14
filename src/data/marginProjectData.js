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

export const marginProjectData = {
	ProjectHeader: {
		title: 'Device Margin Tool',
		publishDate: 'August 26, 2024',
		tags: 'Desktop / Frontend / Electron',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Device Margin Tool',
			img: Image1,
		},
		{
			id: 2,
			title: 'Device Margin Tool',
			img: Image2,
		},
		{
			id: 3,
			title: 'Device Margin Tool',
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
			'Built a highly interactive desktop application for visualizing chipset performance metrics, enabling real-time analysis of critical components like PCIe, UFS, and CSI across Qualcomm platforms.',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'React',
					'Electron',
					'Vite',
					'TypeScript',
					'Tailwind CSS',
					'HTML',
					'CSS',
				],
			},
		],
		ProjectDetailsHeading: 'Key Contributions',
		ProjectDetails: [
			{
				id: 1,
				details:
					'As a software developer at Qualcomm, I built a highly interactive desktop Margin Tool that provides real-time insights into chipset performance metrics. The tool offers in-depth analysis of critical components like PCIe, UFS, and CSI, helping hardware engineers optimize performance across platforms.',
			},
			{
				id: 2,
				details:
					'<strong>Interactive UI with React & Electron:</strong><br>' +
					'Designed a responsive interface with dynamic graphs, real-time data updates, and interactive charts for visualizing chipset performance. Built as a cross-platform desktop application using Electron, ensuring smooth performance across operating systems.',
			},
			{
				id: 3,
				details:
					'<strong>Optimized Build & Data Processing:</strong><br>' +
					'Leveraged Vite for rapid hot-reloading and optimized production builds. Implemented data collection and analysis features that process large datasets efficiently, delivering accurate and actionable insights for hardware performance optimization.',
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
				title: 'Testing Automation',
				img: Image5,
			},
			{
				id: 3,
				title: 'UI Component Library',
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
