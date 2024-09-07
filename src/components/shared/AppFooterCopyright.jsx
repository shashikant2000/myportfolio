import React from 'react';
import pkg from '../../../package.json';

function AppFooterCopyright() {
	const { version } = pkg;
	return (
		<div className="font-general-regular flex justify-center items-center text-center">
			<div className="text-lg text-ternary-dark dark:text-ternary-light">
				&copy; {new Date().getFullYear()}
				<a
					href="https://github.com/realstoman/react-tailwindcss-portfolio"
					target="__blank"
					className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
				>
					React & Tailwind CSS Portfolio
				</a>
				.
				<a
					href="https://stoman.me"
					target="__blank"
					className="text-secondary-dark dark:text-secondary-light font-medium uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
				>
					Stoman
				</a>
				<div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
					Version {version}
				</div>
			</div>
		</div>
	);
}

export default AppFooterCopyright;
