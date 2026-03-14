import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowDownCircle } from 'react-icons/fi';

const DRIVE_FILE_ID = '1LnzVY5FbVEeIrY4HGen3MFsgLyBroiLz';
const previewUrl = `https://drive.google.com/file/d/${DRIVE_FILE_ID}/preview`;
const downloadUrl = `https://drive.google.com/uc?export=download&id=${DRIVE_FILE_ID}`;

const Resume = () => {
	const [iframeError, setIframeError] = useState(false);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.6, delay: 0.15 }}
			className="container mx-auto mt-5 sm:mt-10"
		>
			<div className="flex justify-between items-center mb-6 px-4 sm:px-0">
				<h1 className="font-general-bold text-2xl sm:text-3xl text-primary-dark dark:text-primary-light">
					Resume
				</h1>
				<a
					href={downloadUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="font-general-medium flex items-center text-lg border border-indigo-200 dark:border-ternary-dark py-2 px-4 shadow-lg rounded-lg bg-indigo-50 dark:bg-ternary-dark hover:bg-indigo-500 text-gray-500 dark:text-ternary-light hover:text-white duration-500"
					aria-label="Download CV"
				>
					<FiArrowDownCircle className="mr-2 h-5 w-5" />
					Download CV
				</a>
			</div>

			<div className="w-full rounded-xl overflow-hidden shadow-lg bg-secondary-light dark:bg-secondary-dark mb-10">
				{iframeError ? (
					<div className="flex flex-col items-center justify-center py-20 text-center">
						<p className="text-lg text-ternary-dark dark:text-ternary-light mb-4">
							Unable to load preview.
						</p>
						<a
							href={`https://drive.google.com/file/d/${DRIVE_FILE_ID}/view`}
							target="_blank"
							rel="noopener noreferrer"
							className="font-general-medium text-lg bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300"
						>
							Open in Google Drive
						</a>
					</div>
				) : (
					<iframe
						src={previewUrl}
						title="Shashikant's Resume"
						className="w-full border-none"
						style={{ height: 'calc(100vh - 200px)', minHeight: '600px' }}
						allow="autoplay"
						onError={() => setIframeError(true)}
					/>
				)}
			</div>
		</motion.div>
	);
};

export default Resume;
