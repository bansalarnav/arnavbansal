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
					<ProjectCard
						name="Swadeshi Tech"
						description="Find Indian replacements for Chinese apps and goods"
						paragraph="Swadeshi Tech provides many Indian alternatives for Chinese goods and apps. It also provides direct download or buying links for them! We have carefully curated a list that we are sure work better than their Chinese alternatives"
						url="https://swadeshitech.in"
						imgUrl="https://www.swadeshitech.in/assets/img/SwadeshiTechLogoNew.svg"
						appUrl="https://play.google.com/store/apps/details?id=com.swadeshitech.app"
					/>
					<ProjectCard
						name="Quizar"
						imgUrl="projects/quizar.png"
						paragraph="Quizar is an app that lets you play quizzes that are made by others and even make your own quizzes for others to play! It is a handy application to help you increase your General Knowledge. It is the all in one Quiz App!"
						appUrl="https://play.google.com/store/apps/details?id=com.appfluent.quiz"
						description="Making Quizzing interesting!"
					/>
				</div>
				</div>
		</Element>
	);
};

export default Projects;

const ProjectCard = ({name, description, paragraph, url, imgUrl, appUrl}) => {
	return <div className={styles.main__proj_card}>
	<img src={imgUrl}></img>
		<div className={styles.main__backdrop}>
			<p>{ paragraph}</p>
			<div style={{ 'flex': '1' }}></div>
			<div style={{'margin-bottom': '4px'}}>Try it out!</div>
		<div>
				{url && 			<a href={url} target="_blank">
				<LinkIcon
					className={styles.main__backdrop__icon}
				/>
				</a>}
				{appUrl && 			<a
				href={appUrl}
				target="_blank"
			>
				<PlayIcon
					className={styles.main__backdrop__icon}
				/>
			</a>}
		</div>
	</div>
		<div>
		<h4>{name}</h4>
	<div>
		<p>
			{description}
		</p>
	</div>
	</div>
</div>
}
