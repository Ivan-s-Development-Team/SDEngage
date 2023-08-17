import Image from 'next/image';
import Link from 'next/link';
import logo_icon from '/src/public/images/logo_icon.png';
import Navigation from './Navigation';
import Container from './Container';
import Logo from './Logo';

const NavBar = () => {
	return (
		<header className=" bg-white ">
			<Container>
				<Logo />
				<Navigation />
			</Container>
		</header>
	);
};

export default NavBar;
