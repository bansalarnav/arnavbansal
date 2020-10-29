import styles from './footer.scss';
import YouTube from '../public/icons/youtube-white.svg';
import GitHub from '../public/icons/github-white.svg';
import GMail from '../public/icons/mail-white.svg';
import Twitter from '../public/icons/twitter-white.svg';

const Footer = () => {
	return (
		<div className={styles.footer}>
			<div>
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
			Made with ❤ by Arnav
		</div>
	);
};

export default Footer;
