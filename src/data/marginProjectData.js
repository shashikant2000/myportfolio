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
		title: 'Margin App',
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
			'Developed a cross-framework high performance Component library, facilitating seamless integration with Angular and React frameworks. To be deployed in over 15 production applications',
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
					'In the rapidly evolving world of hardware performance analysis, creating a desktop Margin Tool that offers real-time insights and interaction can be particularly challenging. This project aims to develop a highly interactive Margin Tool that showcases chipset performance metrics and provides in-depth analysis of critical components like PCIe, UFS, and CSI. Leveraging cutting-edge technologies such as React, Electron, and Vite, this challenge will test your ability to seamlessly integrate various frameworks and optimize performance.',
			},
			{
				id: 2,
				details: 
					'<strong>Key Objectives:</strong><br>' +
					'1. <strong>Interactive UI Development with React:</strong><br>' +
					'	- Design a responsive and intuitive user interface that allows users to visualize and interact with chipset performance metrics effectively. Implement features such as dynamic graphs, real-time data updates, and interactive charts to enhance user engagement and provide valuable insights.<br>' +
					'2. <strong>Desktop Application Integration with Electron:</strong><br>' +
					'	- Utilize Electron to build a cross-platform desktop application that combines the power of web technologies with native performance. Ensure that the application offers a smooth and seamless experience across different operating systems while integrating tightly with React components.<br>' +
					'3. <strong>Optimized Build Process with Vite:</strong><br>' +
					'	- Leverage Vite to streamline the development and build process, ensuring rapid hot-reloading and optimized production builds. Focus on configuring Vite to handle complex dependencies and large datasets efficiently, which is crucial for analyzing performance metrics in real time.<br>' +
					'4. <strong>Comprehensive Performance Metrics Analysis:</strong><br>' +
					'	- Implement data collection and analysis features that provide detailed insights into PCIe, UFS, and CSI components. Develop algorithms to process and visualize this data in a user-friendly format, offering actionable insights for performance optimization.',
			},
			{
				id: 3,
				details: 
					'<strong>Success Criteria:</strong><br>' +
					'- The application should provide real-time, interactive visualizations of chipset performance metrics.<br>' +
					'- Integration between React, Electron, and Vite should be seamless, with smooth transitions and performance.<br>' +
					'- The tool should handle large datasets and complex analyses efficiently, delivering accurate and actionable insights to users.<br>' +
					'This challenge will test your skills in frontend development, desktop application integration, and build optimization, pushing the boundaries of interactive performance analysis tools.',
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
