import React, { useState } from 'react';

const Signup: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add your sign-up logic here
    };

    return (
        <div className='h-[60vh] w-[90vh] p-2 flex flex-col justify-evenly items-center bg-wrapper backdrop-blur-md text-black/90 z-1 border border-slate-400/30 rounded-lg'>
            <h2 className='text-2xl text-black '>Sign Up</h2>
            <form onSubmit={handleSubmit} className="flex flex-col item-center justify-center gap-4">
                <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" value={email} onChange={handleEmailChange} />
                </div>
                <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" value={password} onChange={handlePasswordChange} />
                </div>
            </form>
                <button type="submit">Sign Up</button>
        </div>
    );
};

export default Signup;
