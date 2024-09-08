import React from 'react';
import pkg from '../../../package.json';

function AppFooterCopyright() {
	const { version } = pkg;
	return (
		<div className="font-general-regular flex justify-center items-center text-center">
			<div className="text-lg text-ternary-dark dark:text-ternary-light">
				&copy; {new Date().getFullYear()}
				<a
					href="https://github.com/shashikant2000"
					target="__blank"
					className="text-secondary-dark dark:text-secondary-light font-medium hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
				>
					Shashikant Portfolio
				</a>
				<div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
					Version {version}
				</div>
			</div>
		</div>
	);
}

export default AppFooterCopyright;
