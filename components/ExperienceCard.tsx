import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

function ExperienceCard({}: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0,
                }}
                transition={{duration: 1.2}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
                src='https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png'
                alt=''
            />

            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>CEO of SPACEX</h4>
                <p className='font-bold text-2xl mt-1'>SPACEX</p>
                <div className='flex space-x-2 my-2'>
                    <img 
                        className='h-10 w-10 rounded-full'
                        src='https://www.freepnglogos.com/uploads/javascript-png/png-javascript-badge-picture-8.png'
                        alt=''
                    />
                    <img 
                        className='h-10 w-10 rounded-full'
                        src='https://www.freepnglogos.com/uploads/javascript-png/png-javascript-badge-picture-8.png'
                        alt=''
                    />
                    <img 
                        className='h-10 w-10 rounded-full'
                        src='https://www.freepnglogos.com/uploads/javascript-png/png-javascript-badge-picture-8.png'
                        alt=''
                    />
                </div>

                <p className='uppercase py-5 text-gray-300'>Started work... Ended...</p>
                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    <li>Summary Points Summary Points Summary Points Summary Points Summary Points</li>
                    <li>Summary Points Summary Points Summary Points Summary Points Summary Points</li>
                    <li>Summary Points Summary Points Summary Points Summary Points Summary Points</li>
                    <li>Summary Points Summary Points Summary Points Summary Points Summary Points</li>
                    <li>Summary Points Summary Points Summary Points Summary Points Summary Points</li>
                </ul>
            </div>
        </article>
    );
}

export default ExperienceCard;