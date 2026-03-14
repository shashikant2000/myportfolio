import { motion } from 'framer-motion';

const skills = [
	'C#', '.NET', 'Azure', 'SQL Server', 'React', 'Angular',
	'TypeScript', 'JavaScript', 'Electron', 'Node.js',
	'REST APIs', 'Tailwind CSS', 'Git', 'Docker',
	'WPF', 'Vite', 'CI/CD', 'Accessibility',
];

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { staggerChildren: 0.06 },
	},
};

const item = {
	hidden: { opacity: 0, scale: 0.8 },
	show: { opacity: 1, scale: 1 },
};

const AboutSkills = () => {
	return (
		<div className="mt-10 sm:mt-14">
			<h3 className="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-6">
				Technical Skills
			</h3>
			<motion.div
				className="flex flex-wrap gap-3"
				variants={container}
				initial="hidden"
				animate="show"
			>
				{skills.map((skill) => (
					<motion.span
						key={skill}
						variants={item}
						whileHover={{ scale: 1.1, y: -2 }}
						className="px-4 py-2 rounded-lg text-sm font-general-medium
							bg-indigo-50 dark:bg-indigo-900/30
							text-indigo-600 dark:text-indigo-200
							border border-indigo-200 dark:border-indigo-600
							shadow-sm hover:shadow-md
							cursor-default transition-shadow duration-300"
					>
						{skill}
					</motion.span>
				))}
			</motion.div>
		</div>
	);
};

export default AboutSkills;
