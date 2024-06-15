import { FaDownload } from 'react-icons/fa'
import Info from '../Info'
import Stats from '../stats/Stats'
import CV from '../../assets/steve-Cv.pdf'

import './infos.scss'

const Infos = () => {
	return (
		<section className="infos">
			<h2 className="section-title">
				About <span>Me</span>
			</h2>

			<div className="infos__body grid">
				<div className="infos__content">
					<h3 className="section-subtitle">Personal Infos</h3>
					<ul className="infos__list grid">
						<Info />
					</ul>

					<a href={CV} download="" className="button">
						Download Cv
						<span className="button__icon">
							<FaDownload />
						</span>
					</a>
				</div>

				<div className="stats grid">
					<Stats />
				</div>
			</div>
		</section>
	)
}

export default Infos
