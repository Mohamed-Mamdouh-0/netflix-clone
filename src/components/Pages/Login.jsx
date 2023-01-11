import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	const { user, logIn } = UserAuth();
	const navigate = useNavigate();
	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(email, password);
		try {
			await logIn(email, password);
			setErrorMessage('');
			navigate('/');
		} catch (error) {
			let err = { error };
			setErrorMessage(err?.error?.message);

			console.log(err?.error?.message);
		}
	};
	return (
		<div className='w-full h-screen '>
			<img
				className='hidden sm:block absolute w-full h-full object-cover'
				src='https://assets.nflxext.com/ffe/siteui/vlv3/7cee2527-d2cc-4cc9-99f6-d1375e72d46e/8645352a-866a-43d7-a9d4-97ef671dea6e/EG-en-20230103-popsignuptwoweeks-perspective_alpha_website_small.jpg'
			/>
			<div className='fixed top-0 left-0 w-full h-screen bg-black/60'></div>
			<div className='fixed w-full px-4 py-24 z-50'>
				<div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
					<div className='max-w-[320px] mx-auto py-16'>
						<h1 className='text-3xl font-bold'>Sign In</h1>
						<p className='text-red-600'>{errorMessage}</p>
						<form className='w-full flex flex-col py-4' onSubmit={handleSubmit}>
							<input
								className='p-3 my-2 bg-gray-700 rounded'
								type={'email'}
								placeholder='Email'
								autoComplete='email'
								onChange={(e) => setEmail(e.target.value)}
							/>
							<input
								className='p-3 my-2 bg-gray-700 rounded'
								type={'password'}
								placeholder='current-password'
								onChange={(e) => setPassword(e.target.value)}
							/>
							<button className='bg-red-600 py-3 my-6 rounded font-bold'>
								Sign In
							</button>
							<div className='flex justify-between items-center text-sm text-gray-600'>
								<p>
									<input className='mr-2' type={'checkbox'} /> Remember me
								</p>
								<p>Need Help?</p>
							</div>

							<p className='py-8'>
								<span className='text-gray-600'>New to Netflix ?</span>
								<Link to='/signUp'>Sign Up</Link>
							</p>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
