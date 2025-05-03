
import LoginForm from "@/components/layout/Auth/Login/Login";

const LoginPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-3xl font-bold">Login Page</h1>
        <p className="mt-4 text-gray-600">This is the login page.</p>
        <LoginForm />
        </div>
    );
    }

export default LoginPage;