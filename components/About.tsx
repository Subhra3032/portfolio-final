"use client"

import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

function About({}: Props) {
    return (
        <motion.div 
            initial={{opacity: 0,}}
            whileInView={{opacity: 1}}
            transition={{duration: 1.5}}
            className='flex flex-col relative h-screen text-center md:text-left md:flex-row w-[100%] max-w-[900px] mx-auto px-10 justify-evenly items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                About
            </h3>

            <motion.img 
                className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[300px] xl:h-[360px]'
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                }}
                viewport={{once: true}}
                transition={{
                    duration: 1.2,
                }}
                src='https://image.cnbcfm.com/api/v1/image/107083077-1656593419933-gettyimages-1395062617-t_w16437_4934a878-972d-4bea-b6ef-b61f4ceeb787.jpeg?v=1682101376'
            />

            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold '>
                    Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> background
                </h4>
                <p className='text-base'>
                    I'm Elon Musk 🚀, CEO of SpaceX. As an entrepreneur and visionary, I've dedicated my life to pushing the boundaries of innovation and shaping a future that's both exciting and sustainable. Through companies like Tesla, SpaceX, Neuralink, and The Boring Company, I strive to revolutionize transportation, energy, space exploration, and the human mind. Together, let's embark on this extraordinary journey to transform our world and unlock the full potential of humanity's boundless imagination.
                </p>
            </div>
        </motion.div>
        
    );
}

export default About;