import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router';
import { SingleProjectProvider } from './context/SingleProjectContext';
import ScrollToTop from './components/ScrollToTop';
import AppFooter from './components/shared/AppFooter';
import AppHeader from './components/shared/AppHeader';
import './css/App.css';
import UseScrollToTop from './hooks/useScrollToTop';
import useOverscrollStretch from './hooks/useOverscrollStretch';

const About = lazy(() => import('./pages/AboutMe'));
const Contact = lazy(() => import('./pages/Contact'));
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectSingle = lazy(() => import('./pages/ProjectSingle'));
const Resume = lazy(() => import('./pages/Resume'));

const LoadingSpinner = () => (
	<div className="flex items-center justify-center min-h-[60vh]">
		<div className="relative">
			<div className="h-16 w-16 rounded-full border-t-4 border-b-4 border-indigo-500 animate-spin"></div>
			<div className="absolute top-0 left-0 h-16 w-16 rounded-full border-t-4 border-b-4 border-purple-500 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
		</div>
	</div>
);

const NotFound = () => (
	<div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
		<h1 className="font-general-bold text-8xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">404</h1>
		<p className="font-general-regular text-xl text-ternary-dark dark:text-ternary-light mb-8">
			Page not found. The page you&apos;re looking for doesn&apos;t exist.
		</p>
		<a
			href="/"
			className="font-general-medium text-lg bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-lg shadow-indigo-500/25 rounded-xl px-6 py-3 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/40 hover:-translate-y-0.5"
		>
			Back to Home
		</a>
	</div>
);

function App() {
	useOverscrollStretch();

	return (
		<AnimatePresence>
			<div className="bg-secondary-light dark:bg-primary-dark transition-colors duration-500 min-h-screen">
				<SingleProjectProvider>
					<Router basename="/myportfolio">
						<ScrollToTop />
						<AppHeader />
						<Suspense fallback={<LoadingSpinner />}>
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="projects" element={<Projects />} />
								<Route path="projects/:slug" element={<ProjectSingle />} />
								<Route path="about" element={<About />} />
								<Route path="resume" element={<Resume />} />
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
