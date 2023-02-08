import Image from "next/image";
import design from '../../public/design.png'
import code from '../../public/code.png'
import consulting from '../../public/consulting.png'

export default function Cards() {

    return (
        <>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 ">
                <Image src={design} alt="design" className="w-20 h-20 mx-auto mb-10" />
                <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Design</h3>
                <p className="py-2">lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                <h4 className="py-4 text-teal-600">Design tools I use:</h4>
                <ul className="text-gray-800 dark:text-slate-300">
                    <li className="py-1">Adobe XD</li>
                    <li className="py-1">Adobe Photoshop</li>
                    <li className="py-1">Adobe Illustrator</li>
                    <li className="py-1">Figma</li>
                </ul>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
                <Image src={code} alt="code" className="w-20 h-20 mx-auto mb-10" />
                <h3 className="text-lg font-medium pt-8 pb-2">Technologies</h3>
                <p className="py-2">Due to my age, I am still learning a lot of new technologies, so I am expanding my knowledge.</p>
                <h4 className="py-4 text-teal-600">Programming languages I know</h4>
                <ul className="text-gray-800 dark:text-slate-300">
                    <li className="py-1">HTML | CSS | JS | TS | NodeJS</li>
                    <li className="py-1">SASS | LESS | Bootstrap | Tailwind</li>
                    <li className="py-1">ReactJS | NextJS</li>
                    <li className="py-1">MongoDB</li>
                </ul>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
                <Image src={consulting} alt="consulting" className="w-20 h-20 mx-auto mb-10" />
                <h3 className="text-lg font-medium pt-8 pb-2">Languages</h3>
                <p className="py-2">At the moment, I am not currently studying any new language, but I am always open in learning new things.</p>
                <h4 className="py-4 text-teal-600">Languages I know</h4>
                <ul className="text-gray-800 dark:text-slate-300">
                    <li className="py-1">Native Spanish</li>
                    <li className="py-1">Advanced English</li>
                </ul>
            </div>
        </>
    )
};