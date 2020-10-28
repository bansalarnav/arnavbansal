import styles from '../styles/home.scss';
import Meta from '../components/meta';
import { useEffect, useState } from 'react';
import Nav, { SideDrawer, Backdrop } from '../components/nav';
import HomeSection from '../components/sections/home';
import AboutSection from '../components/sections/about';
import Background from '../components/particles';

const Home = () => {
	const [sideBarOpen, setSideBarOpen] = useState(false);

	useEffect(() => {}, []);

	return (
		<div>
			<Meta>
				<Nav setSideBarOpen={setSideBarOpen} />{' '}
				<SideDrawer show={sideBarOpen} />
				{sideBarOpen ? (
					<>
						<Backdrop setSideBarOpen={setSideBarOpen} />
					</>
				) : null}
				<div className={styles.viewport}>
					<Background></Background>
					<section styles={{overflowX: 'hidden'}}>
						<HomeSection />
						<AboutSection />
					</section>
				</div>
			</Meta>
		</div>
	);
};

export default Home;
