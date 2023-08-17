
import Image from 'next/image';
import logo_icon from '/src/public/images/logo_icon.png';
import Link from 'next/link';

type Props = {};

function Logo() {
	return (
		<div className="flex lg:flex-1">
			<Link href="/" className="-m-1.5 p-1.5">
				<Image alt="logo" className="h-8 w-auto" width={100} height={100} src={logo_icon} />
			</Link>
		</div>
	);
}

export default Logo;
