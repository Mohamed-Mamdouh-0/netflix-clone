import React from 'react';
import SavedShows from '../SavedShows';

const Account = () => {
	return (
		<>
			<div className='w-full text-white'>
				<img
					className='w-full h-[400px] object-cover'
					src='https://assets.nflxext.com/ffe/siteui/vlv3/7cee2527-d2cc-4cc9-99f6-d1375e72d46e/8645352a-866a-43d7-a9d4-97ef671dea6e/EG-en-20230103-popsignuptwoweeks-perspective_alpha_website_small.jpg'
				/>
				<div className='bg-black/60 fixed top-0 left-0 w-full h-[500px]'>
					<div className='absolute top-[20%] p-4 md:p-8'>
						<h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
					</div>
				</div>
			</div>
			<SavedShows />
		</>
	);
};

export default Account;
