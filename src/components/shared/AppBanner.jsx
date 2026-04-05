import { FiArrowDownCircle, FiGithub, FiLinkedin } from 'react-icons/fi';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import profileImg from '../../images/profile4.jpg';

const AppBanner = () => {
	return (
		<section className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden">
			{/* Animated gradient orbs */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
				<div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/20 dark:bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 dark:bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
			</div>

			{/* Grid pattern overlay */}
			<div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

			<div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
				<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
						className="flex-1 text-center lg:text-left"
					>
						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: 0.2 }}
							className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200/50 dark:border-indigo-500/20 mb-6"
						>
							<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
							<span className="text-sm font-general-medium text-indigo-600 dark:text-indigo-400">
								Available for opportunities
							</span>
						</motion.div>

						<h1 className="font-general-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight">
							<span className="text-gray-900 dark:text-white">Hi, I&apos;m </span>
							<span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
								Shashikant
							</span>
						</h1>

						<div className="mt-4 sm:mt-6 text-lg sm:text-xl lg:text-2xl text-gray-500 dark:text-gray-400 font-general-regular h-8 sm:h-10">
							<ReactTyped
								strings={[
										'Software Engineer II at Microsoft',
									'.NET &amp; Azure Developer',
									'Full-Stack Engineer',
									'Database Migration Specialist',
								]}
								typeSpeed={40}
								backSpeed={25}
								loop
							/>
						</div>

						<p className="mt-6 text-base sm:text-lg text-gray-600 dark:text-gray-400 font-general-regular max-w-xl mx-auto lg:mx-0">
							Building robust migration tools and cloud services at Azure Data.
							Passionate about bridging complex infrastructure with intuitive experiences.
						</p>

						<div className="mt-8 sm:mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
							<Link
								to="/resume"
								className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-general-medium shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-300"
							>
								<FiArrowDownCircle className="w-5 h-5 group-hover:animate-bounce" />
								View Resume
							</Link>
							<Link
								to="/projects"
								className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-general-medium hover:bg-gray-50 dark:hover:bg-white/5 hover:-translate-y-0.5 transition-all duration-300"
							>
								View Projects
							</Link>
						</div>

						<div className="mt-8 flex gap-4 justify-center lg:justify-start">
							<a href="https://github.com/shashikant2000" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300">
								<FiGithub className="w-5 h-5" />
							</a>
							<a href="https://www.linkedin.com/in/shashikantkumar2000/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300">
								<FiLinkedin className="w-5 h-5" />
							</a>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
						animate={{ opacity: 1, scale: 1, rotate: 0 }}
						transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
						className="relative flex-shrink-0"
					>
						<div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
							<div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 blur-2xl animate-pulse" />
							<div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1">
								<div className="w-full h-full rounded-full bg-secondary-light dark:bg-primary-dark p-1">
									<img
										src={profileImg}
										alt="Shashikant Kumar"
										className="w-full h-full rounded-full object-cover"
										loading="eager"
									/>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.5 }}
				className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
			>
				<span className="text-xs font-general-medium text-gray-400 dark:text-gray-500 uppercase tracking-widest">Scroll</span>
				<motion.div
					animate={{ y: [0, 8, 0] }}
					transition={{ duration: 1.5, repeat: Infinity }}
					className="w-5 h-8 rounded-full border-2 border-gray-300 dark:border-gray-600 flex justify-center pt-1.5"
				>
					<div className="w-1 h-2 rounded-full bg-gray-400 dark:bg-gray-500" />
				</motion.div>
			</motion.div>
		</section>
	);
};

export default AppBanner;
