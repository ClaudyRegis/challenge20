import AboutMe from './About-me';
import Portfolio from './Portfolio';

const Navigation = ({ section }) => {
	return (
		<>
			{section.includes('About Me') && <AboutMe />}
			{section.includes('Portfolio') && <Portfolio />}
			
		</>
	);
};

export default Navigation;