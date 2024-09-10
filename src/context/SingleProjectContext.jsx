import { useState, createContext } from 'react';
import { marginProjectData as singleProjectDataJson } from '../data/marginProjectData';

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ children }) => {
	const [singleProjectData, setSingleProjectData] = useState(
		singleProjectDataJson
	);

	return (
		<SingleProjectContext.Provider
			value={{ singleProjectData, setSingleProjectData }}
		>
			{children}
		</SingleProjectContext.Provider>
	);
};

export default SingleProjectContext;
