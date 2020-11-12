import styles from './nav.scss';
import classNames from 'classnames/bind';
import Hamburger from '../public/hamburger.svg';
import {
	Link,
	animatieScroll as scroll,
	scrollSpy,
	scroller,
} from 'react-scroll';
import { useState } from 'react';

let cx = classNames.bind(styles);

const Nav = ({ setSideBarOpen, active, setActive }) => {
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
						<Link
							to="home"
							smooth={true}
							onClick={() => {
								setActive(0);
							}}
						>
							<li
								className={cx(
									styles.nav__link,
									active == 0 ? styles.active : ''
								)}
							>
								Home
							</li>
						</Link>
						<Link
							to="about"
							smooth={true}
							onClick={() => {
								setActive(1);
							}}
						>
							<li
								className={cx(
									styles.nav__link,
									active == 1 ? styles.active : ''
								)}
							>
								About Me
							</li>
						</Link>
						<Link
							to="projects"
							smooth={true}
							onClick={() => {
								setActive(2);
							}}
						>
							<li
								className={cx(
									styles.nav__link,
									active == 2 ? styles.active : ''
								)}
							>
								My Projects
							</li>
						</Link>
					</ul>
				</div>
			</nav>
		</header>
	);
};

const SideDrawer = ({ show, active, setActive }) => {
	console.log(active)
	return (
		<nav className={cx(styles.sidebar, show ? styles.sidebar__open : '')}>
			<div className={styles.sidebar__logo}>
				<img src="/arnav-primary.png"></img>
			</div>
			<ul>
				<li
					onClick={() => setActive(0)}
				>
					<Link className={active == 0 ? styles.sidebar_active : styles.sidebar_inactive} onClick={() => setActive(0)} to="home" smooth={true}>
						Home
					</Link>
				</li>
				<li
					onClick={() => { setActive(1); console.log('1')}}
				>
					<Link className={active == 1 ? styles.sidebar_active : styles.sidebar_inactive} onClick={() => setActive(1)} to="about" smooth={true}>
						About Me
					</Link>
				</li>
				<li
					onClick={() => setActive(2)}
				>
					<Link className={active == 2 ? styles.sidebar_active :  styles.sidebar_inactive} onClick={() => setActive(2)} to="projects" smooth={true}>
						My Projects
					</Link>
				</li>
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
