import React from 'react'
import { personalInfo } from '../data'

const Info = () => {
	return (
		<>
			{personalInfo.map(({ title, description }, index) => {
				return (
					<li className="infos__item" key={index}>
						<span className="infos__title">{title}</span>
						<span className="infos__description">{description}</span>
					</li>
				)
			})}
		</>
	)
}

export default Info
