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
		title: 'Qulacomm UI',
		publishDate: 'August 26, 2024',
		tags: 'UI / Frontend/ Electron',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Kabul Project Management UI',
			img: Image1,
		},
		{
			id: 2,
			title: 'Kabul Project Management UI',
			img: Image2,
		},
		{
			id: 3,
			title: 'Kabul Project Management UI',
			img: Image3,
		},
	],
	ProjectInfo: {
		ClientHeading: 'About Client',
		CompanyInfo: [
			{
				id: 1,
				title: 'Name',
				details: 'Qualcomm India Pvt. Ltd',
			},
			{
				id: 2,
				title: 'Services',
				details: 'Mobile, Desktop, Automotive etc',
			},
			{
				id: 3,
				title: 'Website',
				details: 'https://www.qualcomm.com/',
			},
			// {
			// 	id: 4,
			// 	title: 'Phone',
			// 	details: '555 8888 888',
			// },
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'Create a highly interactive desktop Margin Tool, showcasing chipset performance metrics and analysis of components such as PCIE, UFS and CSI, leveraging React, electron and Vite',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'HTML',
					'CSS',
					'React',
					'Typescript',
					'Vite',
					'TailwindCSS',
					'Electron',
				],
			},
		],
		ProjectDetailsHeading: 'Challenge',
		ProjectDetails: [
			{
				id: 1,
				details: 
					' Qualcomm UI is a versatile component library designed for both Angular and React frameworks, aimed at unifying and streamlining UI development. By integrating Tailwind CSS for consistent styling and TypeScript for robust type safety, the library provides a comprehensive set of reusable components that facilitate rapid and efficient development. The library’s cross-framework JavaScript layer ensures smooth integration across different applications, contributing to its success and widespread adoption within the organization, with over 30,000 internal downloads.',
			},
			{
				id: 2,
				details: 
					'<strong>Key Features:</strong><br>' +
					'1. <strong>Cross-Framework Integration:</strong><br>' +
					'- Provides a consistent set of UI components that work seamlessly in both Angular and React applications, promoting uniformity and reducing duplication of effort.<br>' +
					'2. <strong>Tailwind CSS Integration:</strong><br>' +
					'- Utilizes Tailwind CSS for utility-first styling, allowing for rapid and consistent design without writing custom CSS.<br>' +
					'3. <strong>TypeScript Support:</strong><br>' +
					'- Implements TypeScript to enhance type safety and improve code quality, making it easier to catch errors early in the development process.<br>' +
					'4. <strong>Reusable Components:</strong><br>' +
					'- Offers a library of reusable components, reducing the need for redundant code and facilitating faster development cycles.<br>' +
					'5. <strong>High Adoption Rate:</strong><br>' +
					'- Achieved over 30,000 internal downloads, demonstrating the library’s effectiveness and its critical role in the organization’s development workflows.',
			},
			{
				id: 3,
				details:
					'<strong>Success Criteria:</strong><br>' +
					'1. Seamless integration across both Angular and React.<br>' +
					'2. Consistent styling using Tailwind CSS with minimal custom CSS.<br>' +
					'3. TypeScript implementation to ensure strong type safety and code quality.<br>' +
					'4. Over 30,000 internal downloads, showing wide adoption and effectiveness.<br>' +
					'5. Continuous feedback and iteration to improve performance and usability.',
			},
		
		],				
		SocialSharingHeading: 'Share This',
		SocialSharing: [
			// {
			// 	id: 1,
			// 	name: 'Twitter',
			// 	icon: <FiTwitter />,
			// 	url: 'https://twitter.com/realstoman',
			// },
			{
				id: 2,
				name: 'Instagram',
				icon: <FiInstagram />,
				url: 'https://instagram.com/shashikant_k_y',
			},
			{
				id: 3,
				name: 'Facebook',
				icon: <FiFacebook />,
				url: 'https://facebook.com/',
			},
			{
				id: 4,
				name: 'LinkedIn',
				icon: <FiLinkedin />,
				url: 'https://linkedin.com/',
			},
		],
	},
	RelatedProject: {
		title: 'Related Projects',
		Projects: [
			{
				id: 1,
				title: 'Mobile UI',
				img: Image4,
			},
			{
				id: 2,
				title: 'Web Application',
				img: Image5,
			},
			{
				id: 3,
				title: 'UI Design',
				img: Image6,
			},
			{
				id: 4,
				title: 'Kabul Mobile App UI',
				img: Image3,
			},
		],
	},
};
