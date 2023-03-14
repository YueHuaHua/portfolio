import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SkillItem from './SkillItem';
import { skillData } from './skillData';
import './skills.css';

export default function Skills() {
	return (
		<div className="container-fluid">
			<h2 className="pe-3 border-end text-end me-5">Skills</h2>
			<div className="container">
				{skillData.map((skill, index) => (
					<SkillItem skill={skill} key={index} />
				))}

				<a
					className="my-5 btn custom-btn btn-lg"
					href="https://www.dropbox.com/s/fszlwwaoi21rejm/resume.pdf?dl=0"
					target="_blank"
					rel="noreferrer"
				>
					Download Resume{' '}
					<FontAwesomeIcon
						icon={'arrow-up-right-from-square'}
					></FontAwesomeIcon>
				</a>
			</div>
		</div>
	);
}
