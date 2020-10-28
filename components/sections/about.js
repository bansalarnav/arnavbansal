import styles from './about.scss';
// import AOS from 'aos';
// import '../../styles/lib/aos.scss';
import { useEffect, Component } from 'react';

class About extends Component {
	render() {
		return (
			<div className={styles.main}>
				<div>
					<h1>About Me</h1>
				</div>
				<div className={styles.main__para_container}>
					<p>
						{/* I am a 13 year old student studying in{' '}
						<a href="http://dpsnoida.co.in" target="_blank">
							Delhi Public School Noida
						</a>
						. I am a member of our school's tech club{' '}
						<a href="http://espice.netlify.app" target="_blank">
							eSpice
						</a>
						. We, in eSpice, like to participate in many
						interschool, national and international hackathons. I
						love building things that help people and new
						technologies intrigue me. I am extremely passionate
						about learning new stuff and try my best to learn
						something new everyday. */}
						Dummy text: Its function as a filler or as a tool for
					comparing the visual impression of different typefaces Dummy
					text is text that is used in the publishing industry or by
					web designers to occupy the space which will later be filled
					with 'real' content. This is required when, for example, the
					final text is not yet available. Dummy text is also known as
					'fill text'. It is said that song composers of the past used
					dummy texts as lyrics when writing melodies in order to have
					a 'ready-made' text to sing with the melody. Dummy texts
					have been in use by typesetters since the 16th century.
					</p>
				</div>
				<div className={styles.main__skills_container}>
					<h1>My Skills</h1>
					<div className={styles.main__card_container}>
						<div className={styles.main__skill_card}>
							<img
								className={styles.main__skill_img}
								src="skills/flutter.png"
							></img>
							<div className={styles.spacer}></div>
							<div className={styles.main__skill_title}>Flutter</div>
						</div>
						<div className={styles.main__skill_card}>
							<img
								className={styles.main__skill_img}
								src="skills/react.png"
							></img>
							<div className={styles.spacer}></div>
							<div className={styles.main__skill_title}>React.js</div>
						</div>
						<div className={styles.main__skill_card}>
							<img
								className={styles.main__skill_img}
								src="skills/nodejs.png"
							></img>
							<div className={styles.spacer}></div>
							<div className={styles.main__skill_title}>Node.js</div>
						</div>
						<div className={styles.main__skill_card}>
							<img
								className={styles.main__skill_img}
								src="skills/express.png"
							></img>
							<div className={styles.spacer}></div>
							<div className={styles.main__skill_title}>Express.js</div>
						</div>
						<div className={styles.main__skill_card}>
							<img
								className={styles.main__skill_img}
								src="skills/mongodb.png"
							></img>
							<div className={styles.spacer}></div>
							<div className={styles.main__skill_title}>MongoDB</div>
						</div>
						<div className={styles.main__skill_card}>
							<img
								className={styles.main__skill_img}
								src="skills/firebase.png"
							></img>
							<div className={styles.spacer}></div>
							<div className={styles.main__skill_title}>Firebase</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default About;
