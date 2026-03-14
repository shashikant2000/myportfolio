import profileImage from '../../images/profile.jpeg';
import { useContext } from 'react';
import { motion } from 'framer-motion';
import AboutMeContext from '../../context/AboutMeContext';

const AboutMeBio = () => {
	const { aboutMe } = useContext(AboutMeContext);

	return (
		<div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
			<motion.div
				initial={{ opacity: 0, x: -40 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.6 }}
				className="w-full sm:w-1/4 mb-7 sm:mb-0"
			>
				<img src={profileImage} className="rounded-lg w-full max-w-96" alt="Shashikant Kumar" loading="lazy" />
			</motion.div>

			<motion.div
				initial={{ opacity: 0, x: 40 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.6, delay: 0.2 }}
				className="font-general-regular w-full sm:w-3/4 text-left"
			>
				{aboutMe.map((bio) => (
					<p
						className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
						key={bio.id}
					>
						{bio.bio}
					</p>
				))}
			</motion.div>
		</div>
	);
};

export default AboutMeBio;
