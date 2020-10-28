import styles from './nav.scss';
import classNames from 'classnames/bind';
import Hamburger from '../public/hamburger.svg';

let cx = classNames.bind(styles);

const Nav = ({ setSideBarOpen }) => {
	const SideBarToggle = () => {
		return (
			<button
				className={styles.sidebar__toggle}
				onClick={() => {
					setSideBarOpen((state) => !state);
				}}
			>
				<Hamburger />
			</button>
		);
	};

	return (
		<header className={styles['nav']}>
			<nav className={styles.nav__main_body}>
				<div>
					<SideBarToggle />
				</div>
				<div className={styles.nav__logo}>
					<img src="/arnav-primary.png"></img>
				</div>
				<div className={styles.nav__spacer}></div>
				<div>
					<ul className={styles.nav__link_container}>
						<li className={cx(styles.nav__link)}>Home</li>
						<li className={styles.nav__link}>About Me</li>
						<li className={styles.nav__link}>Projects</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

const SideDrawer = ({ show }) => {
	return (
		<nav className={cx(styles.sidebar, show ? styles.sidebar__open : '')}>
			<div className={styles.sidebar__logo}>
				<img src="/arnav-black.png"></img>
			</div>
			<ul>
				<li>Home</li>
				<li>About Me</li>
				<li>Projects</li>
			</ul>
		</nav>
	);
};

const Backdrop = ({ setSideBarOpen }) => {
	return (
		<div
			className={styles.backdrop}
			onClick={() => setSideBarOpen((state) => !state)}
		></div>
	);
};
export default Nav;

export { SideDrawer, Backdrop };
