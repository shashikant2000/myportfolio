// Import images
import SQLVMImage from '../images/sql-vm-migration.jpg';
import Image2 from '../images/web-project-2.jpg';
import Image3 from '../images/ui-project-1.jpg';
import Image4 from '../images/mobile-project-1.jpg';
import Image5 from '../images/mobile-project-2.jpg';
import Image6 from '../images/ui-project-2.jpg';
// Import icons
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
} from 'react-icons/fi';

export const vmMigrationProjectData = {
	ProjectHeader: {
		title: 'SQL Server VM Migration (Azure)',
		publishDate: 'March 14, 2026',
		tags: 'Cloud / Backend / Azure',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'SQL VM Migration',
			img: SQLVMImage,
		},
		{
			id: 2,
			title: 'SQL VM Migration',
			img: Image2,
		},
		{
			id: 3,
			title: 'SQL VM Migration',
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
				details: 'Azure SQL Migration',
				url: 'https://learn.microsoft.com/en-us/azure/dms/overview',
			},
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'Enable SQL Server on Azure Virtual Machine as a migration target across Azure database migration experiences, focusing on end-to-end migration flows, UX clarity, and reliability for real customer migration scenarios.',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'C#',
					'.NET',
					'React',
					'Azure SQL VM',
					'Azure DMS',
					'Azure Blob Storage',
					'ARM APIs',
					'SQL Server',
					'Arc-enabled SQL',
				],
			},
		],
		ProjectDetailsHeading: 'Key Contributions',
		ProjectDetails: [
			{
				id: 1,
				details:
					'As an SDE II at Microsoft, I worked on enabling <strong>SQL Server on Azure VM as a migration target</strong>, unblocking customers who needed to migrate their on-premises databases to Azure Virtual Machines. This was a critical gap in Azure\'s migration offering and directly impacted customer adoption.',
			},
			{
				id: 2,
				details:
					'<strong>1. VM Target Selection & Validation:</strong> Built target selection logic, VM discovery, naming conflict checks, and clear error/warning messaging — reducing migration failures caused by misconfiguration.<br><br>' +
					'<strong>2. DMS & Backup/Restore Integration:</strong> Contributed to migration flows using Azure DMS, including backup upload to Blob Storage and restore-based paths. Evaluated POCs vs DMS-native capabilities to surface trade-offs.<br><br>' +
					'<strong>3. API Resilience & UX Safeguards:</strong> Identified ARM/VM API limitations (missing or partial data), implemented UI fallbacks and defensive checks to ensure predictable behavior even with imperfect API responses.<br><br>' +
					'<strong>4. Design Docs, Testing & Release:</strong> Authored technical design docs covering edge cases and failure modes. Drove testing for happy path, validation failures, and API regression scenarios. Collaborated with PMs, backend engineers, and partner teams to align on release readiness.',
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
				title: 'UI Component Library',
				img: Image3,
			},
		],
	},
};
