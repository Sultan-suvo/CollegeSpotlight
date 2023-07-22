
import { Link, useRouteError } from 'react-router-dom';
import errorPic from '../../assets/error.avif'

const ErrorPage = () => {
    const { error } = useRouteError()
    console.log(error.message);
    return (
        <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>

                <div className='max-w-md text-center'>
                    <img className='h-56 w-56 mx-auto' src={errorPic} alt="" />
                    <p className='text-2xl mt-4 font-semibold md:text-3xl text-red-800 mb-8'>
                        {error?.message}
                    </p>
                    <Link to='/' className='btn border-2 p-3 bg-black rounded-md text-white font-bold '>
                        Back To HomePage
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;