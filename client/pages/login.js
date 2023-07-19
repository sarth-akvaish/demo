import Link from "next/link";
import Router from "next/router";
import { setCookie } from "nookies";
import { useState } from "react";

const login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    async function handleLogin() {
        // console.log('aaaaaa');

        const logininfo = {
            identifier: username,
            password: password
        }

        const login = await fetch("http://localhost:1337/api/auth/local", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(logininfo)
        })

        const login_response = await login.json();

        setCookie(null,'jwt',login_response.jwt,{
            maxAge : 30 * 24 * 60 * 60,
            path : '/'
        })

        Router.push('/products');
        // console.log(login_response);

    }


    return (
        <>
            <div className="relative flex flex-col items-center justify-center m-12 overflow-hidden">
                <div className="w-full p-2 bg-white rounded-md shadow-md lg:max-w-xl">
                    <h1 className="text-3xl font-bold text-center text-gray-700">Login</h1>
                    <form className="mt-0">
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Email
                            </label>
                            <input
                                type="email" placeholder="Enter your email" onChange={e => setUsername(e.target.value)} value={username}
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
                                type="password" placeholder="Enter your password" onChange={e => setPassword(e.target.value)} value={password}
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
                            <button type="button" onClick={() => handleLogin()} className="w-2/6 px-2 py-2 tracking-wide text-white transition-colors duration-200 transform bg-orange-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                                Login
                            </button>
                        </div>
                    </form>

                    <p className="mt-4 text-sm text-center text-gray-700">
                        Don't have an account?{" "}
                        <Link
                            href="/signup"
                            className="font-medium text-blue-600 hover:underline"
                        >
                            Sign up
                        </Link>
                    </p>
                </div>
            </div></>
    );
}

export default login