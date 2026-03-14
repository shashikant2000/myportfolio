// Import images
import Image1 from '../images/web-project-1.jpg';
import Image2 from '../images/web-project-2.jpg';
import Image3 from '../images/ui-project-1.jpg';
import Image4 from '../images/mobile-project-1.jpg';
import Image5 from '../images/mobile-project-2.jpg';
import Image6 from '../images/ui-project-2.jpg';
// Import icons
import {
	FiLinkedin,
} from 'react-icons/fi';

export const ssmaProjectData = {
	ProjectHeader: {
		title: 'SQL Server Migration Assistant (SSMA)',
		publishDate: 'March 14, 2026',
		tags: 'Desktop / Backend / .NET',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'SSMA Migration Workflow',
			img: Image1,
		},
		{
			id: 2,
			title: 'SSMA Oracle Migration',
			img: Image2,
		},
		{
			id: 3,
			title: 'SSMA Entra ID Authentication',
			img: Image3,
		},
	],
	ProjectInfo: {
		ClientHeading: 'About',
		CompanyInfo: [
			{
				id: 1,
				title: 'Organization',
				details: 'Microsoft - Azure Data',
			},
			{
				id: 2,
				title: 'Services',
				details: 'Database Migration Tools',
			},
			{
				id: 3,
				title: 'Website',
				details: 'SSMA Documentation',
				url: 'https://learn.microsoft.com/en-us/sql/ssma/sql-server-migration-assistant',
			},
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'Automate and simplify database migrations from Oracle, Sybase, MySQL, and Access to SQL Server and Azure SQL, enabling enterprises to modernize their data infrastructure at scale.',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'C#',
					'.NET',
					'WPF',
					'SQL Server',
					'Azure SQL',
					'Oracle',
					'Sybase',
					'Entra ID',
					'Copilot',
				],
			},
		],
		ProjectDetailsHeading: 'Key Contributions',
		ProjectDetails: [
			{
				id: 1,
				details:
					'As an SDE II on the SSMA team at Microsoft, I was a top contributor with the <strong>highest number of PRs</strong> on the team. I served as the <strong>first-time Release Manager for SSMA 10.4</strong> — one of the largest releases in the tool\'s history — coordinating cross-team efforts, maintaining timelines, and ensuring smooth delivery.',
			},
			{
				id: 2,
				details:
					'<strong>Copilot for Oracle (GA):</strong><br>' +
					'Contributed to shipping the Copilot integration for Oracle migrations to General Availability, enabling AI-assisted migration workflows that help customers convert Oracle schemas and queries to SQL Server with intelligent suggestions.',
			},
			{
				id: 3,
				details:
					'<strong>Entra ID Authentication (Preview):</strong><br>' +
					'Implemented end-to-end UI for Entra ID support for managed endpoints, including admin consent toggle, radio button controls, suggestion dialogs, error tab activation, and high-DPI rendering fixes. Collaborated closely with PM and feature crew to meet the Ignite release deadline.',
			},
			{
				id: 4,
				details:
					'<strong>Accessibility & Security:</strong><br>' +
					'Resolved ~20+ accessibility bugs, becoming the team\'s SME in a11y. Fixed multiple security issues (SFI) and contributed to .NET 8 upgrade testing for Oracle. Implemented Sybase-related fixes including ANSI Padding and preferences verbatim changes for the 10.4 release.',
			},
		],
		SocialSharingHeading: 'Share This',
		SocialSharing: [
			{
				id: 1,
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
				title: 'Device Margin Tool',
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
				img: Image1,
			},
		],
	},
};
