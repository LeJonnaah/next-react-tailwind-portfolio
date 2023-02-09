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
                <Link href='https://download1591.mediafire.com/1inz254jyfsg/agay00nm6yhl9w5/CV-EN-Jonathan_Andueza.pdf'
                    className='bg-gradient-to-r from-pink-300 to-pink-200 text-white px-4 py-2 rounded-md ml-8'>
                    Download CV
                </Link>
            </div>
        </nav>
    );
};

