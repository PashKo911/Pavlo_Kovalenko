import React from 'react'

import Skills from '../../components/Skills'
import { resume } from '../../data'
import ResumeItem from '../../components/ResumeItem'
import Infos from '../../components/infos/Infos'

import './about.scss'

const About = () => {
	return (
		<main className="about">
			<div className="about__container">
				<Infos />
				<div className="separator"></div>
				<section className="skills">
					<h3 className="section-subtitle section-subtitle--center">My Skills</h3>

					<div className="skills__body grid">
						<Skills />
					</div>
				</section>
				<div className="separator"></div>
				<section className="resume">
					<h3 className="section-subtitle section-subtitle--center">Experience & Education</h3>
					<div className="resume__body grid">
						<div className="resume__data">
							{resume.map((val) => {
								if (val.category === 'experience') {
									return <ResumeItem key={val.id} {...val} />
								}
							})}
						</div>

						<div className="resume__data">
							{resume.map((val) => {
								if (val.category === 'education') {
									return <ResumeItem key={val.id} {...val} />
								}
							})}
						</div>
					</div>
				</section>
			</div>
		</main>
	)
}

export default About
