import {useNavigate} from "react-router-dom";

export function Login() {

    const navigate = useNavigate()

    const handleForgotPassword = () => {
        // Add your forgot password logic here
        console.log("Forgot password clicked");
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-blue-950 px-4">
            <div className="w-full max-w-sm bg-white border border-blue-300 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold text-blue-800 underline decoration-2 mb-6 text-center">
                    Sign In
                </h2>
                <div className="mt-1 mb-4">
                    <button
                        onClick={()=> navigate("/")}
                        className="text-sm text-blue-800 hover:text-blue-900 underline"
                    >
                      Go Back
                    </button>
                </div>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-blue-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 block w-full px-3 py-2 border border-blue-200 rounded-md text-sm shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="you@example.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-blue-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="mt-1 block w-full px-3 py-2 border border-blue-200 rounded-md text-sm shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-950 text-white text-sm font-medium rounded-md hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
}