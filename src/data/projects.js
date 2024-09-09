// Import images
import WebImage1 from '../images/web-project-1.jpg';
import WebImage2 from '../images/web-project-2.jpg';
// import MobileImage1 from '../images/mobile-project-1.jpg';
// import MobileImage2 from '../images/mobile-project-2.jpg';
import UIImage1 from '../images/ui-project-1.jpg';
// import UIImage2 from '../images/ui-project-2.jpg';
import {marginProjectData} from "../data/marginProjectData";
// import {singleProjectData} from "../data/singleProjectData";
import {testingProjectData} from "../data/testingProjectData";
import {quiProjectData} from "../data/quiProjectData";
const rawProjectsData = [
	{
		title: 'Margin Tool',
		category: 'Desktop Application',
		img: WebImage2,
		data: marginProjectData
	},
	{
		title: 'Device Testing Automation',
		category: 'Web Application',
		img: WebImage1,
		data: testingProjectData
	},
	{
		title: 'UI Component Library',
		category: 'Component Library',
		img: UIImage1,
		data: quiProjectData
	},
	// {
	// 	title: 'Phoenix Digital Agency',
	// 	category: 'Mobile Application',
	// 	img: MobileImage2,
	// 	data: singleProjectData
	// },
	// {
	// 	title: 'Project Management UI',
	// 	category: 'UI/UX Design',
	// 	img: UIImage1,
	// 	data: singleProjectData
	// },
	// {
	// 	title: 'Cloud Storage Platform',
	// 	category: 'UI/UX Design',
	// 	img: UIImage2,
	// 	data: singleProjectData
	// },
	// {
	// 	title: 'React Social App',
	// 	category: 'Mobile Application',
	// 	img: MobileImage1,
	// 	data: singleProjectData
	// },
];

export const projectsData = rawProjectsData.map((project, index) => ({
	id: index + 1, // Automatically assign IDs based on the index
	...project,
}));
