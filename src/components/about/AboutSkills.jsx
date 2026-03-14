const skills = [
	'C#', '.NET', 'Azure', 'SQL Server', 'React', 'Angular',
	'TypeScript', 'JavaScript', 'Electron', 'Node.js',
	'REST APIs', 'Tailwind CSS', 'Git', 'Docker',
	'WPF', 'Vite', 'CI/CD', 'Accessibility',
];

const AboutSkills = () => {
	return (
		<div className="mt-10 sm:mt-14 px-4 sm:px-0">
			<h3 className="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-6">
				Technical Skills
			</h3>
			<div className="flex gap-3 sm:gap-4" style={{ flexWrap: 'wrap' }}>
				{skills.map((skill) => (
					<span
						key={skill}
						style={{ borderRadius: '9999px', minHeight: '40px', flexShrink: 0 }}
						className="inline-flex items-center justify-center px-4 py-2 text-sm text-center leading-tight font-general-medium
							bg-indigo-50 dark:bg-indigo-900/30
							text-indigo-600 dark:text-indigo-200
							border border-indigo-200 dark:border-indigo-500/40
							shadow-sm hover:shadow-lg hover:-translate-y-0.5
							cursor-default transition-all duration-300"
					>
						{skill}
					</span>
				))}
			</div>
		</div>
	);
};

export default AboutSkills;
