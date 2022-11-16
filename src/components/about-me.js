import { Container } from 'react-bootstrap';

const AboutMe = () => {
	const styles = {
		heading: {
			fontSize: '6rem',
		},
	};
	return (
		<>
			<Container>
				<p>Welcome!</p>
				<h2 style={styles.heading} className='fw-bold'>
					Claudy Regis
				</h2>
				<h3 className='fw-bold'>Full Stack Developer</h3>
				<p>
					I just started leaning how to code, im looking foward to be a full stack web developer. <br />
					Im about to Complete the Full Stack Web Development certification at the university of Miami.
				</p>
			</Container>
		</>
	);
};

export default AboutMe;