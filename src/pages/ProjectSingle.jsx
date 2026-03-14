import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProjectGallery from '../components/projects/ProjectGallery';
import ProjectHeader from '../components/projects/ProjectHeader';
import ProjectInfo from '../components/projects/ProjectInfo';
import SingleProjectContext from '../context/SingleProjectContext';
import { motion } from 'framer-motion';

const ProjectSingle = () => {
	const { slug } = useParams();
	const { singleProjectData, setSingleProjectData, getProjectBySlug } = useContext(SingleProjectContext);

	useEffect(() => {
		const data = getProjectBySlug(slug);
		if (data) {
			setSingleProjectData(data);
		}
	}, [slug]); // eslint-disable-line react-hooks/exhaustive-deps

	if (!singleProjectData) {
		return (
			<div className="flex items-center justify-center min-h-[60vh]">
				<p className="text-xl text-ternary-dark dark:text-ternary-light">Project not found.</p>
			</div>
		);
	}

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.6,
				delay: 0.15,
			}}
			className="container mx-auto mt-5 sm:mt-10"
		>
			<ProjectHeader />
			<ProjectGallery />
			<ProjectInfo />
		</motion.div>
	);
};

export default ProjectSingle;
