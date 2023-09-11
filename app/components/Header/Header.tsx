const Header = () => {
	return (
		<header className='w-full flex-center flex-col h-80v'>
			<div className='flex flex-col items-center justify-around h-3/5 xs:h-3/5 md:h-1/2 animate-fade-up'>
				<h1 className='head_text text-center'>
					Michał Mosior <br className='max-md:hidden' />
					<span className='blue_gradient text-center'>Frontend developer</span>
				</h1>
				<p className='text-center desc'>
					I'm self taught frontend developer from Poland, currently looking for
					a job or internship
				</p>
			</div>
		</header>
	);
};

export default Header;
