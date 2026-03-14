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
			title: 'Device Test Automation',
			img: Image1,
		},
		{
			id: 2,
			title: 'Device Test Automation',
			img: Image2,
		},
		{
			id: 3,
			title: 'Device Test Automation',
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
		ProjectDetailsHeading: 'Key Contributions',
		ProjectDetails: [
			{
				id: 1,
				details: 
					'As a software developer at Qualcomm, I built an advanced testing automation web application for executing and managing test cases on upcoming Qualcomm chips and platforms. The tool streamlines hardware validation workflows, enabling engineers to efficiently track and analyze test outcomes.',
			},
			{
				id: 2,
				details: 
					'<strong>Angular Frontend & .NET Backend:</strong><br>' +
					'Implemented a dynamic and responsive UI using Angular with PrimeNG components. Developed a robust .NET backend for test case execution and data processing, ensuring real-time updates and efficient test management across the stack.',
			},
			{
				id: 3,
				details: 
					'<strong>Testing Automation & Platform Support:</strong><br>' +
					'Enabled users to schedule, run, and track test cases across multiple Qualcomm platforms. Implemented features for detailed reporting, result analysis, and compatibility verification across different hardware configurations.',
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
