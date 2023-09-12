import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
	return (
		<Link href='/' className='flex gap-2 flex-center'>
			<Image
				src='/assets/images/logo.svg'
				alt='logo'
				width={60}
				height={60}
				className='object-contain'
			/>
		</Link>
	);
};

export default Logo;
