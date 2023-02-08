import { BsFillMoonStarsFill } from 'react-icons/bs'
import { BsSun } from 'react-icons/bs'
import Link from 'next/link'

export default function NavBar({ darkMode, setDarkMode }) {

    return (
        <nav className="py-10 px-5 flex justify-between dark:bg-gray-800" role='navigation'>
            <h1 className='text-xl dark:text-white'>Portfolio</h1>
            <div className='pr-8'>
                <button
                    className='bg-gray-300 rounded-full p-2 shadow-md hover:bg-gray-400'
                    onClick={() => setDarkMode(!darkMode)}
                >
                    {darkMode ? <BsSun /> : <BsFillMoonStarsFill />}
                </button>
                <Link href='/'
                    className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'>
                    Resume
                </Link>
            </div>
        </nav>
    );
};

