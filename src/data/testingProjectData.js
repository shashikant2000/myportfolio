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

export const testingProjectData = {
	ProjectHeader: {
		title: 'Device Test Automation App',
		publishDate: 'August 26, 2024',
		tags: 'UI / Frontend/ Angular',
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
			'Develope an advanced testing automation web application with a highly responsive user interface, leveraging Angular for the frontend and .NET for the backend. This application is designed to facilitate the execution of test cases on upcoming Qualcomm chips and platforms, providing users with a streamlined and efficient tool for validating hardware performance and compatibility.',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'HTML',
					'CSS',
					'Typescript',
					'Angular',
					'.NET',
					'PrimeNG',
				],
			},
		],
		ProjectDetailsHeading: 'Challenge',
		ProjectDetails: [
			{
				id: 1,
				details: 
					'The web application integrates a dynamic Angular-based frontend with a robust .NET backend to offer a comprehensive solution for test automation. It enables users to manage and execute test cases effectively, track results, and generate detailed reports. The system supports various Qualcomm platforms, ensuring compatibility and performance optimization across different hardware configurations.',
			},
			{
				id: 2,
				details: 
					'<strong>Key Features:</strong><br>' +
					'1. <strong>Angular Frontend Development:</strong><br>' +
					'- Implemented a dynamic and responsive UI using Angular to facilitate seamless interaction with the testing automation tools. Focused on creating user-friendly pages for managing and executing test cases.<br>' +
					'2. <strong>.NET Backend Integration:</strong><br>' +
					'- Developed a robust backend using .NET to handle test case execution and data processing. Ensured smooth communication between the frontend and backend components to support real-time updates and efficient test management.<br>' +
					'3. <strong>Testing Automation:</strong><br>' +
					'- Enabled users to run and manage test cases for Qualcomm chips and platforms, providing detailed results and reports. Implemented features for scheduling, tracking, and analyzing test outcomes to support comprehensive testing workflows.<br>' +
					'4. <strong>Platform Support:</strong><br>' +
					'- Integrated support for various Qualcomm platforms, ensuring compatibility and optimized performance across different hardware configurations.',
			},
			{
				id: 3,
				details: 
					'<strong>Success Criteria:</strong><br>' +
					'- The web app should provide a responsive and intuitive UI for managing and executing test cases.<br>' +
					'- The backend should be capable of handling multiple concurrent test cases efficiently, providing accurate and timely results.<br>' +
					'- Integration between Angular and .NET should be seamless, with smooth data exchange and real-time updates.<br>' +
					'- The app should support a variety of Qualcomm chips and platforms, offering detailed insights and reports on test outcomes.',
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
