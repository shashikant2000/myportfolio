import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectSingle = ({ title, category, image, slug }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.5,
			}}
			whileHover={{ y: -8, transition: { duration: 0.3 } }}
		>
			<Link to={`/projects/${slug}`} aria-label={title}>
				<div className="rounded-xl shadow-lg hover:shadow-2xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark transition-shadow duration-300">
					<div className="overflow-hidden rounded-t-xl bg-ternary-light dark:bg-ternary-dark" style={{height: '224px'}}>
						<img
							src={image}
							className="rounded-t-xl border-none w-full h-full object-cover transition-transform duration-500 hover:scale-110"
							alt={title}
							loading="lazy"
						/>
					</div>
					<div className="text-center px-4 py-6">
						<p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
							{title}
						</p>
						<span className="text-lg text-ternary-dark dark:text-ternary-light">
							{category}
						</span>
					</div>
				</div>
			</Link>
		</motion.div>
	);
};

export default ProjectSingle;
