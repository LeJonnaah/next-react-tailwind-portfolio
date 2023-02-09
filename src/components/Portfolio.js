import urlShortener from '@/../public/url-shortener.png'
import vanillaEcommerce from '@/../public/vanilla-ecommerce.png'
import calculatorApp from '@/../public/calculator-app.png'
import adviceGenerator from '@/../public/advice-generator.png'
import Image from 'next/image'

const Portfolio = () => {

    return (
        <>
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-600 dark:text-gray-200">These are some of the projects that I have been working on. If you want to see all my projects, you can see them in my github profile.</p>
            <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
                <div className='basis-1/3 flex-1'>
                    <Image src={urlShortener}
                        alt="url shortener"
                        className='rounded-lg object-cover'
                        width={'100%'}
                        height={'100%'}
                    />
                </div>
                <div className='basis-1/3 flex-1'>
                    <Image src={vanillaEcommerce}
                        alt="vanilla ecommerce"
                        className='rounded-lg object-cover'
                        width={'100%'}
                        height={'100%'}
                    />
                </div>
                <div className='basis-1/3 flex-1'>
                    <Image src={calculatorApp}
                        alt="calculator-app"
                        className='rounded-lg object-cover'
                        width={'100%'}
                        height={'100%'}
                    />
                </div>
                <div className='basis-1/3 flex-1'>
                    <Image src={adviceGenerator}
                        alt="advice generator"
                        className='rounded-lg object-cover'
                        width={'100%'}
                        height={'100%'}
                    />
                </div>
            </div>
        </>
    );
};

export default Portfolio;