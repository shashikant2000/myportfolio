import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import {SingleProjectProvider} from "./context/SingleProjectContext";
import ScrollToTop from './components/ScrollToTop';
import AppFooter from './components/shared/AppFooter';
import AppHeader from './components/shared/AppHeader';
import './css/App.css';
import UseScrollToTop from './hooks/useScrollToTop';

const About = lazy(() => import('./pages/AboutMe'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectSingle = lazy(() => import('./pages/ProjectSingle.jsx'));

const LoadingSpinner = () => (
	<div className="flex items-center justify-center min-h-[60vh]">
		<div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
	</div>
);

const NotFound = () => (
	<div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
		<h1 className="font-general-bold text-6xl text-primary-dark dark:text-primary-light mb-4">404</h1>
		<p className="font-general-regular text-xl text-ternary-dark dark:text-ternary-light mb-8">
			Page not found. The page you're looking for doesn't exist.
		</p>
		<a
			href="/"
			className="font-general-medium text-lg bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300"
		>
			Back to Home
		</a>
	</div>
);

function App() {
	return (
		<AnimatePresence>
			<div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
			<SingleProjectProvider> 
				<Router>
					<ScrollToTop />
					<AppHeader />
					<Suspense fallback={<LoadingSpinner />}>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="projects" element={<Projects />} />
							<Route
								path="projects/single-project"
								element={<ProjectSingle />}
							/>

							<Route path="about" element={<About />} />
							<Route path="contact" element={<Contact />} />
							<Route path="*" element={<NotFound />} />
						</Routes>
					</Suspense>
					<AppFooter />
				</Router>
			</SingleProjectProvider> 
				<UseScrollToTop />
			</div>
		</AnimatePresence>
	);
}

export default App;
