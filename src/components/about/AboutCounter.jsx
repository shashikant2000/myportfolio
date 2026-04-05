import { useCountUp } from 'react-countup';
import { motion } from 'framer-motion';

const counters = [
	{ id: 'experienceCounter', end: 4, label: 'Years of Experience', suffix: '+' },
	{ id: 'downloadsCounter', end: 30, label: 'Internal Downloads (K)', suffix: 'K+' },
	{ id: 'prsCounter', end: 200, label: 'Pull Requests Merged', suffix: '+' },
	{ id: 'releasesCounter', end: 10, label: 'Releases Shipped', suffix: '+' },
];

const AboutCounter = () => {
	counters.forEach((c) => {
		// eslint-disable-next-line react-hooks/rules-of-hooks
		useCountUp({ ref: c.id, end: c.end, duration: 2, enableScrollSpy: true, scrollSpyOnce: true });
	});

	return (
		<div className="mt-20 sm:mt-28">
			<div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 p-px">
				<div className="rounded-3xl bg-primary-dark/90 backdrop-blur-xl px-6 sm:px-12 py-16 sm:py-20">
					<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" />
					<div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />

					<div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
						{counters.map((item, idx) => (
							<motion.div
								key={item.id}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: idx * 0.1 }}
								className="text-center"
							>
								<div className="text-4xl sm:text-5xl font-general-bold text-white mb-2">
									<span id={item.id} />
									{item.suffix}
								</div>
								<p className="text-sm sm:text-base font-general-regular text-indigo-200/70">
									{item.label}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutCounter;
