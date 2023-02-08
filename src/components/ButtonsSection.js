import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import Link from 'next/link';

const ButtonsSection = () => {
    return (
        <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <Link href='https://github.com/LeJonnaah' target="_blank">
                <AiFillGithub  />
            </Link>
            <Link href='https://www.linkedin.com/in/jonathan-andueza-7bba69227/' target="_blank">
                <AiFillLinkedin />
            </Link>
        </div>
    );
};

export default ButtonsSection;