import styles from './home.scss';
import { useState, useEffect } from 'react';
import YouTube from '../../public/icons/youtube.svg';
import GitHub from '../../public/icons/github.svg';
import GMail from '../../public/icons/mail.svg';
import Twitter from '../../public/icons/twitter.svg';
import LinkedIn from '../../public/icons/linkedin.svg';
import { Link } from 'react-scroll';

const Home = () => {
	const [wordIndex, setWordIndex] = useState(0);
	const [charIndex, setCharIndex] = useState(0);
	const [displayWord, setDisplayWord] = useState('');
	const [trash, setTrash] = useState(true);

	const words = [
		'an App Developer',
		'a Web Developer',
		'a coding enthusiast',
		'an eSpician!',
	];
	const delay = 200;
	const backDelay = 100;
	const timer = (ms) => new Promise((res) => setTimeout(res, ms));

	useEffect(() => {
		if (charIndex < words[wordIndex].length) {
			setDisplayWord((word) => word + words[wordIndex][charIndex]);
			setCharIndex(charIndex + 1);
			setTimeout(() => {
				setTrash(!trash);
			}, delay);
		} else {
			setTimeout(async () => {
				if (charIndex > 0) {
					let vari = charIndex;
					for (let i = 0; i < words[wordIndex].length; i++) {
						setCharIndex((charIndex) => charIndex - 1);
						setDisplayWord(words[wordIndex].substring(0, vari - 1));
						vari = vari - 1;
						await timer(backDelay);
					}
					setCharIndex(0);
					setTimeout(() => {
						setTrash(!trash);
					}, 500);
					if (words[wordIndex + 1]) {
						setWordIndex((i) => i + 1);
					} else {
						setWordIndex(0);
					}
				} else {
					setCharIndex(0);
					setTimeout(() => {
						setTrash(!trash);
					}, 200);
				}
			}, 1000);
		}
	}, [trash]);

	return (
		<div className={styles.main} id="home">
			<div className={styles.left_padding}>
				{' '}
				<div className={styles.main__heading}>
					<h1>
						Hi there! I am <span>Arnav</span>
					</h1>
				</div>
				<h4 className={styles.main__sub_heading}>
					I am{' '}
					<span className={styles.typed_text}>
						{displayWord}
						<span className={styles.cursor}>&nbsp;</span>
					</span>
				</h4>
				<div className={styles.main__icon_container}>
					<a href="https://github.com/tperm94">
						<GitHub className={styles.main__icon} />
					</a>
					<a href="https://www.youtube.com/channel/UC_NeoKWxHaEykI8RAp6lvbg?view_as=subscriber">
						<YouTube className={styles.main__icon} />
					</a>
					<a href="mailto:arnavbansal101@gmail.com">
						<GMail className={styles.main__icon} />
					</a>
					<a href="https://twitter.com/ArnavBa91854224">
						<Twitter className={styles.main__icon} />
					</a>
				</div>
			</div>
				<div className={styles.arrow}>
				  <Link to="about" smooth={true}></Link>
				</div>
		</div>
	);
};

export default Home;
