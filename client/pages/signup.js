import Link from "next/link";
import { useState } from "react";
import Router from "next/router";

const signup = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [apassword, setApassword] = useState('');


    async function handleSignup() {
        // console.log('aaaaaa');

        const signupinfo = {
            username: username,
            email : email,
            password: password
        }

        const signup = await fetch(`${process.env.API_BASE_URL}auth/local/register`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(signupinfo)
        })

        const signup_response = await signup.json();
        console.log(signup_response);
      
        Router.push('/login');
        // console.log(login_response);

    }


    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-bold text-center text-gray-700">Register</h1>
                <form className="mt-6">
                    <div className="mb-4">
                        <label
                            htmlFor="text"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Username
                        </label>
                        <input
                            type="text" placeholder="Enter your name" onChange={e=> setUsername(e.target.value)} value={username}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email" placeholder="Enter your email" onChange={e=> setEmail(e.target.value)} value={email}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password" placeholder="Enter your password" onChange={e=> setPassword(e.target.value)} value={password}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Confirm your Password
                        </label>
                        <input
                            type="password" placeholder="Enter your password again"  onChange={e=> setApassword(e.target.value)} value={apassword}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <Link
                        href="/forget"
                        className="text-xs text-blue-600 "
                    >
                        Forget Password?
                    </Link>
                    <div className="mt-2">
                        <button type="button" onClick={()=> handleSignup()} className="w-2/6 px-2 py-2 tracking-wide text-white transition-colors duration-200 transform bg-orange-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                            Register
                        </button>
                    </div>
                </form>

                <p className="mt-4 text-sm text-center text-gray-700">
                    Alreday have an account?{" "}
                    <Link
                        href="/login"
                        className="font-medium text-blue-600 hover:underline"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default signup