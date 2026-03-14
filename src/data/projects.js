// Import images
import WebImage1 from '../images/web-project-1.jpg';
import WebImage2 from '../images/web-project-2.jpg';
import UIImage1 from '../images/ui-project-1.jpg';
import {marginProjectData} from "../data/marginProjectData";
import {testingProjectData} from "../data/testingProjectData";
import {quiProjectData} from "../data/quiProjectData";
import {ssmaProjectData} from "../data/ssmaProjectData";
const rawProjectsData = [
	{
		title: 'SQL Server Migration Assistant (SSMA)',
		slug: 'ssma-tool',
		category: 'Desktop Application',
		img: WebImage1,
		data: ssmaProjectData
	},
	{
		title: 'Device Margin Tool',
		slug: 'device-margin-tool',
		category: 'Desktop Application',
		img: WebImage2,
		data: marginProjectData
	},
	{
		title: 'Device Testing Automation',
		slug: 'device-testing-automation',
		category: 'Web Application',
		img: WebImage1,
		data: testingProjectData
	},
	{
		title: 'UI Component Library',
		slug: 'ui-component-library',
		category: 'Component Library',
		img: UIImage1,
		data: quiProjectData
	},
];

export const projectsData = rawProjectsData.map((project, index) => ({
	id: index + 1,
	...project,
}));
