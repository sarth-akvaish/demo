import Link from "next/link";

const signup = () => {
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
                            Full Name
                        </label>
                        <input
                            type="text" placeholder="Enter your name"
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
                            type="email" placeholder="Enter your email"
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
                            type="password" placeholder="Enter your password"
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
                            type="password" placeholder="Enter your password again"
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
                        <button className="w-2/6 px-2 py-2 tracking-wide text-white transition-colors duration-200 transform bg-orange-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
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