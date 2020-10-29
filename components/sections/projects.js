import styles from './projects.scss';
import LinkIcon from '../../public/icons/link.svg';
import PlayIcon from '../../public/icons/playstore.svg';
import {Element} from 'react-scroll'

const Projects = () => {
	return (
		<Element name="projects">
					<div className={styles.main} id="projects">
			<h1>My Projects</h1>
			<div className={styles.main__products_container}>
				<div className={styles.main__proj_card}>
					<img src="https://www.swadeshitech.in/assets/img/SwadeshiTechLogoNew.svg"></img>
					<div className={styles.main__backdrop}>
						Try it out!
						<div>
							<a href="https://swadeshitech.in" target="_blank">
								<LinkIcon
									className={styles.main__backdrop__icon}
								/>
							</a>
							<a
								href="https://play.google.com/store/apps/details?id=com.swadeshitech.app"
								target="_blank"
							>
								<PlayIcon
									className={styles.main__backdrop__icon}
								/>
							</a>
						</div>
					</div>
					<h4>Swadeshi Tech</h4>
					<div>
						<p>
							Find Indian replacements for Chinese apps and goods
						</p>
					</div>
				</div>
				<div className={styles.main__proj_card}>
					<img src="projects/quizar.png"></img>
					<div className={styles.main__backdrop}>
					Try it out!
						<div>
							<a
								href="https://play.google.com/store/apps/details?id=com.appfluent.quiz"
								target="_blank"
							>
								<PlayIcon
									className={styles.main__backdrop__icon}
								/>
							</a>
						</div>
					</div>
					<h4>Quizar</h4>
					<div>
						<p>Making Quizzing interesting!</p>
					</div>
				</div>
			</div>
		</div>
		</Element>
	);
};

export default Projects;
