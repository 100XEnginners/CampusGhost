import React, { useState } from "react";

const Signup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    <div className="flex h-[100vh] w-screen ">
      <div className=" h-screen">
        <img
          src="https://ideogram.ai/api/images/direct/c5rIT2ruTjO5eaDHjj3sSA.jpg"
          alt=""
          className="h-full object-cover"
        />
      </div>
      <div className="w-screen p-2 flex flex-col justify-around items-center  text-black/90 z-1 border border-slate-400/30 rounded-lg">
        <h2 className="text-4xl text-black font-bold uppercase ">User Login</h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col item-center justify-center gap-4"
        >
          <div>
            {/* <label htmlFor="email">Email:</label> */}
            <label
              htmlFor="email-address-icon"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                type="text"
                id="email"
                value={email}
                onChange={handleEmailChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@gmail.com"
                required
              />
            </div>

            {/* <input type="email" id="email" value={email} onChange={handleEmailChange} /> */}
          </div>
          <div>
            <label htmlFor="password" className="text-sm">Password:</label>
            {/* <input type="password" id="password" value={password} onChange={handlePasswordChange} /> */}

            {/* <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label> */}
            <input
              type="password"
              id="password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              name="password"
              required
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
        </form>
        <button type="submit" className=" bg-blue-400 py-2 px-4 rounded-md">Sign Up</button>
      </div>
    </div>
  );
};

export default Signup;
