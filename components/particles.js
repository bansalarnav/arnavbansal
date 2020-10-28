import Particles from 'react-tsparticles';

const Background = ({ children }) => {
	return (
		<Particles
			id="tsparticles"
			width="100vw"
			height="100vh"
			style={{ position: 'fixed', zIndex: -100 }}
			options={{
				background: {
					color: {
						value: 'transparent',
					},
				},
				fpsLimit: 60,
				interactivity: {
					detectsOn: 'canvas',
					events: {
						onClick: {
							//enable: true,
							mode: 'push',
						},
						onHover: {
							//enable: true,
							mode: 'repulse',
						},
						resize: true,
					},
					modes: {
						bubble: {
							distance: 400,
							duration: 2,
							opacity: 0.8,
							size: 40,
						},
						push: {
							quantity: 4,
						},
						repulse: {
							distance: 200,
							duration: 0.4,
						},
					},
				},
				particles: {
					color: {
						value: '#6952F5',
					},
					links: {
						color: '#8471F8',
						distance: 150,
						enable: true,
						opacity: 0.5,
						width: 1,
					},
					collisions: {
						enable: true,
					},
					move: {
						direction: 'none',
						enable: true,
						outMode: 'bounce',
						random: false,
						speed: 1,
						straight: false,
					},
					number: {
						density: {
							enable: true,
							value_area: 600,
						},
						value: 50,
					},
					opacity: {
						value: 0.5,
					},
					shape: {
						type: 'circle',
					},
					size: {
						random: true,
						value: 5,
					},
				},
				detectRetina: true,
			}}
		>
			<div style={{ height: '100vh', width: '100vw' }}>{children}</div>{' '}
		</Particles>
	);
};

export default Background;
