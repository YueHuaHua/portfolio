import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './contact.css';

export default function Contact() {
	return (
		<div className="container-fluid">
			<h2 className="pe-3 border-end text-end me-5">Contact</h2>

			<div className="container my-5 p-3 border-bottom">
				<h3 className="display-5">Let's Get in Touch!</h3>
				<p className="lead">
					Thank you for looking through my portfolio! I hope you found
					things that proved that I am willing to put in hard work and
					am committed to learning new technologies to create
					innovative and creative applications.
				</p>
				<p>
					If you'd like to reach me, send me an email at{' '}
					<a
						href="mailto:bulanarum@gmail.com"
						target="_blank"
						rel="noreferrer"
						title="bulanarum@gmail.com"
						className="custom-paragraph-link"
					>
						bulanarum@gmail.com
					</a>
					.
				</p>
			</div>

			<div className="section-content container d-flex justify-content-center">
				{/* Github link */}
				<a
					href="https://www.github.com/yuehuahua"
					target="_blank"
					rel="noreferrer"
					title="https://www.github.com/yuehuahua"
				>
					<FontAwesomeIcon
						icon={['fab', 'github']}
						size="3x"
						className="p-2 mx-2 text-light custom-icon"
					/>
				</a>

				{/* LinkedIn link */}
				<a
					href="https://www.linkedin.com/in/arumbulan/"
					target="_blank"
					rel="noreferrer"
					title="https://www.linkedin.com/in/arumbulan/"
				>
					<FontAwesomeIcon
						icon={['fab', 'linkedin-in']}
						size="3x"
						className="p-2 mx-2 text-light custom-icon"
					/>
				</a>

				{/* Mail link */}
				<a
					href="mailto:bulanarum@gmail.com"
					target="_blank"
					rel="noreferrer"
					title="bulanarum@gmail.com"
				>
					<FontAwesomeIcon
						icon={'envelope'}
						size="3x"
						className="p-2 mx-2 text-light custom-icon"
					/>
				</a>
			</div>
		</div>
	);
}
