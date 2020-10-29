import styles from '../styles/home.scss';
import Meta from '../components/meta';
import { useEffect, useState } from 'react';
import Nav, { SideDrawer, Backdrop } from '../components/nav';
import HomeSection from '../components/sections/home';
import AboutSection from '../components/sections/about';
import ProjectsSection from '../components/sections/projects'
import Background from '../components/particles';
import Footer from '../components/footer';

const Home = () => {
	const [sideBarOpen, setSideBarOpen] = useState(false);
	const [active, setActive] = useState(0);

	useEffect(() => {}, []);

	return (
		<div>
			<Meta>
				<Nav setSideBarOpen={setSideBarOpen} active={active} setActive={setActive} />{' '}
				<SideDrawer show={sideBarOpen} active={active} setActive={setActive}/>
				{sideBarOpen ? (
					<>
						<Backdrop setSideBarOpen={setSideBarOpen} />
					</>
				) : null}
				<div className={styles.viewport}>
					<Background></Background>
					<section styles={{overflowX: 'hidden'}}>
						<HomeSection id="home"/>
						<AboutSection id="about"/>
						<ProjectsSection id="projects" />
						<Footer />
					</section>
				</div>
			</Meta>
		</div>
	);
};

export default Home;
