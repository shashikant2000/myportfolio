import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { FiArrowUpRight } from 'react-icons/fi';

const ProjectSingle = ({ title, category, image, slug }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
		>
			<Link to={`/projects/${slug}`} className="group block" aria-label={title}>
				<div className="relative rounded-2xl overflow-hidden bg-gray-100 dark:bg-secondary-dark border border-gray-200/50 dark:border-white/5 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 dark:hover:shadow-indigo-500/5 hover:-translate-y-2">
					<div className="aspect-[16/10] overflow-hidden">
						<img
							src={image}
							className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
							alt={title}
							loading="lazy"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
						<div className="absolute top-4 right-4 p-2 rounded-full bg-white/90 dark:bg-gray-900/90 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
							<FiArrowUpRight className="w-4 h-4 text-gray-900 dark:text-white" />
						</div>
					</div>
					<div className="p-5 sm:p-6">
						<h3 className="font-general-medium text-lg text-gray-900 dark:text-white group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-300 line-clamp-1">
							{title}
						</h3>
						<span className="inline-flex items-center mt-2 px-3 py-1 rounded-full text-xs font-general-medium bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400">
							{category}
						</span>
					</div>
				</div>
			</Link>
		</motion.div>
	);
};

export default ProjectSingle;
