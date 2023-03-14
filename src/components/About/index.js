import React from 'react';
import './about.css';

export default function About() {
	return (
		<div className="container-fluid">
			<div>
				<h2 className="pe-3 border-end text-end me-5 mb-5">About</h2>
				<p>Hello! My name is Arum and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes - turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p>
			</div>

			<div className="row">
				<div className="col-lg-4">
					<img src="assets/img/me.jpg" className="img-fluid" alt=""/>
				</div>
				<div className="col-lg-8 pt-4 pt-lg-0 content">
					<h3>Web Developer.</h3>
					<p className="fst-italic">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.
					</p>
					<div className="row">
					<div className="col-lg-6">
						<ul>
						<li><i class="bi bi-chevron-right"></i> <strong>Website:</strong> <span>linkedin.com/in/arumbulan/</span></li>
						<li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+123 456 7890</span></li>
						<li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>London, UK</span></li>
						</ul>
					</div>
					<div className="col-lg-6">
						<ul>
						<li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master of Science (MSc)</span></li>
						<li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>bulanarum@gmail.com</span></li>
						<li><i class="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
						</ul>
					</div>
					</div>
					<p>
						Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
						Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
					</p>
				</div>
			</div>
		</div>
	);
}
