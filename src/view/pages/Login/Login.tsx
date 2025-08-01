// import {useNavigate} from "react-router-dom";
//
// export function Login() {
//
//     const navigate = useNavigate()
//
//     const handleForgotPassword = () => {
//         // Add your forgot password logic here
//         console.log("Forgot password clicked");
//     }
//
//     return (
//         <div className="flex items-center justify-center min-h-screen bg-blue-950 px-4">
//             <div className="w-full max-w-sm bg-white border border-blue-300 rounded-lg shadow-md p-6">
//                 <h2 className="text-2xl font-semibold text-blue-800 underline decoration-2 mb-6 text-center">
//                     Sign In
//                 </h2>
//                 <div className="mt-1 mb-4">
//                     <button
//                         onClick={()=> navigate("/")}
//                         className="text-sm text-blue-800 hover:text-blue-900 underline"
//                     >
//                       Go Back
//                     </button>
//                 </div>
//                 <form className="space-y-4">
//                     <div>
//                         <label htmlFor="email" className="block text-sm font-medium text-blue-700">
//                             Email
//                         </label>
//                         <input
//                             type="email"
//                             id="email"
//                             name="email"
//                             className="mt-1 block w-full px-3 py-2 border border-blue-200 rounded-md text-sm shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                             placeholder="you@example.com"
//                         />
//                     </div>
//
//                     <div>
//                         <label htmlFor="password" className="block text-sm font-medium text-blue-700">
//                             Password
//                         </label>
//                         <input
//                             type="password"
//                             id="password"
//                             name="password"
//                             className="mt-1 block w-full px-3 py-2 border border-blue-200 rounded-md text-sm shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                             placeholder="••••••••"
//                         />
//                     </div>
//
//                     <button
//                         type="submit"
//                         className="w-full py-2 px-4 bg-blue-950 text-white text-sm font-medium rounded-md hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     >
//                         Sign In
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// }
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { backendApi } from "../../../api.ts";
import type {UserData} from "../../../model/UserData.ts";
import {getUserFromToken} from "../../../auth/auth.ts";

type FormData = {
    username: string;
    password: string;
};

export function Login() {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm<FormData>();

    const authenticateUser = async (data: FormData) => {
        try {
            const userCredentials = {
                username: data.username,  // assuming your backend uses "username" for email
                password: data.password
            };

            const response = await backendApi.post('/auth/login', userCredentials);
            const accessToken = response.data.accessToken;
            const refreshToken = response.data.refreahToken;

            localStorage.setItem('token', accessToken);
            localStorage.setItem('refreshToken', refreshToken);
            const user:UserData = getUserFromToken(accessToken);
            localStorage.setItem('username', user.username as string);
            localStorage.setItem('role',user.role as string)
            alert("Successfully logged in!");
            navigate('/');
        } catch (error) {
            console.error(error);
            alert("Login failed");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-green-50 px-4">
            <div className="w-full max-w-sm bg-white border border-green-300 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold text-green-800 underline decoration-2 mb-6 text-center">
                    Sign In
                </h2>
                <div className="mt-1 mb-4">
                    <button onClick={() => navigate("/")}
                            className="text-sm text-green-600 hover:text-green-900 underline">
                        Go Back
                    </button>
                </div>
                <form className="space-y-4" onSubmit={handleSubmit(authenticateUser)}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-green-700">
                            Email
                        </label>
                        <input
                            type="text"
                            id="username"
                            {...register("username")}
                            className="mt-1 block w-full border border-green-200 rounded-md text-sm shadow-sm focus:ring-green-500 focus:border-green-500"
                            placeholder="username"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-green-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            {...register("password")}
                            className="mt-1 block w-full border border-green-200 rounded-md text-sm shadow-sm focus:ring-green-500 focus:border-green-500"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
}