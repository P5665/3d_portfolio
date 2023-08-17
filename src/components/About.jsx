import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ service }) => {
	return (
		<Tilt>
			<div style={{ height: '300px', backgroundColor: 'darkgreen' }}>
				<h1>React Parallax Tilt 👀</h1>
			</div>
		</Tilt>
	);
};

const About = () => {
	return (
		<>
			<motion.div>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Overview.</h2>
			</motion.div>
			<motion.p
				variant={fadeIn('', '', 0.1, 1)}
				className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
			>
				I am a guy that learns things, fixes stuff, and enjoys a challenge.
			</motion.p>
			<div className='flex flex-wrap gap-10 mt-20'>
				{services.map((service, index) => (
					<ServiceCard key={service.title} />
				))}
			</div>
		</>
	);
};

export default About;
