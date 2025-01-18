import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
    const err = useRouteError();
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 text-center">
            <h1 className="text-4xl font-bold text-red-600 mb-4">{err.status}</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{err.statusText}</h2>
            <p className="text-lg text-gray-600 mb-4">Sorry, the page you are looking for does not exist.</p>
            <Link to="/" className="text-blue-500 hover:underline text-lg">
                Go to Home
            </Link>
        </div>
    );
};

export default Error;
