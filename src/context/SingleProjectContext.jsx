import { useState, createContext } from 'react';
import { projectsData } from '../data/projects';

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ children }) => {
	const [singleProjectData, setSingleProjectData] = useState(null);

	const getProjectBySlug = (slug) => {
		const project = projectsData.find((p) => p.slug === slug);
		return project ? project.data : null;
	};

	return (
		<SingleProjectContext.Provider
			value={{ singleProjectData, setSingleProjectData, getProjectBySlug }}
		>
			{children}
		</SingleProjectContext.Provider>
	);
};

export default SingleProjectContext;
