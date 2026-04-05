// Import images
import ResumeForgeImg from '../images/resumeforge-home.png';
import ResumeForgeEditor from '../images/resumeforge-editor.png';
import ResumeForgeTemplates from '../images/resumeforge-templates.png';
import Image4 from '../images/mobile-project-1.jpg';
import Image5 from '../images/mobile-project-2.jpg';
import Image6 from '../images/web-project-1.jpg';
import Image3 from '../images/ui-project-1.jpg';
// Import icons
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
} from 'react-icons/fi';

export const resumeBuilderProjectData = {
	ProjectHeader: {
		title: 'ResumeForge',
		publishDate: 'March 2026',
		tags: 'Web Application / Personal Project',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'ResumeForge - Landing Page',
			img: ResumeForgeImg,
		},
		{
			id: 2,
			title: 'ResumeForge - LaTeX Editor with Live PDF Preview',
			img: ResumeForgeEditor,
		},
		{
			id: 3,
			title: 'ResumeForge - Professional Resume Templates',
			img: ResumeForgeTemplates,
		},
	],
	ProjectInfo: {
		ClientHeading: 'About',
		CompanyInfo: [
			{
				id: 1,
				title: 'Organization',
				details: 'Personal Project',
			},
			{
				id: 2,
				title: 'Type',
				details: 'Open Source',
			},
			{
				id: 3,
				title: 'Website',
				details: 'www.resumeforge.website',
				url: 'https://www.resumeforge.website',
			},
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'Built ResumeForge — a full-stack web application that lets users write resumes in LaTeX with a Monaco-powered editor, get real-time PDF preview via server-side TeX Live compilation, and leverage an AI assistant (GPT-4o) to add sections, reword bullets, or restyle content in plain English. Features 5 professional templates, auto-save, shareable links, and instant PDF caching.',
		Technologies: [
			{
				title: 'Tools & Technologies',
				techs: [
					'Next.js',
					'React',
					'TypeScript',
					'Tailwind CSS',
					'Node.js',
					'Azure OpenAI (GPT-4o)',
					'TeX Live',
					'Monaco Editor',
				],
			},
		],
		ProjectDetailsHeading: 'Key Contributions',
		ProjectDetails: [
			{
				id: 1,
				details:
					'Designed and built <strong>ResumeForge</strong> end-to-end — a LaTeX resume editor with a split-pane interface: Monaco editor on the left with syntax highlighting, auto-complete, and error markers, and a live PDF preview on the right powered by server-side <strong>TeX Live</strong> compilation.',
			},
			{
				id: 2,
				details:
					'<strong>AI-Powered Editing:</strong><br>' +
					'Integrated an AI assistant powered by <strong>Azure OpenAI (GPT-4o)</strong> that lets users describe changes in plain English (e.g., "Add Python to skills") and auto-generates LaTeX diffs that can be accepted or rejected inline.',
			},
			{
				id: 3,
				details:
					'<strong>Template Gallery & PDF Export:</strong><br>' +
					'Built 5 professional LaTeX templates (Classic, Modern, Minimal, Tech, Academic) with one-click switching. Implemented PDF caching so identical content compiles in milliseconds, plus download and shareable link features.',
			},
			{
				id: 4,
				details:
					'<strong>Auto-Save & Persistence:</strong><br>' +
					'Implemented auto-save with unique shareable URLs so users can revisit and continue editing their resumes anytime. No sign-up required to get started.',
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
				title: 'SQL VM Migration',
				img: Image5,
			},
			{
				id: 3,
				title: 'Device Margin Tool',
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
