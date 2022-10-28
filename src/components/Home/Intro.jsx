import React, {useEffect} from 'react';
import { useInView } from 'react-intersection-observer';
import {motion} from 'framer-motion';

const Intro = ({handleSetTab, viewThreshold}) => {
    const { ref, inView } = useInView({
        threshold: viewThreshold
    });

    useEffect(() => {
        if(inView) {
            handleSetTab("intro");
        }
    }, [inView]);

    return (
        <>
            <section id="intro" className="scroll-el py-16 min-h-screen flex items-center">
                <div ref={ref} className="wrapper mx-auto px-4">
                    <motion.div
                        initial={{opacity: 0, y:'40vh'}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.5}}
                    >
                        <h1 className="text-center text-4xl md:text-6xl font-bold mb-10"><span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-purple-500 dark:from-blue-500 dark:to-purple-500">Hii I'm Kuldip </span> 👋</h1>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 1, delay: 0.5}}
                    >
                        <p className="text-xl md:text-3xl text-center italic">
                            A Web 
                            <motion.span
                                className="text-blue-700 dark:text-blue-500 inline-block" 
                                initial={{x: '-20vw'}} animate={{x: '0'}}
                            >
                                Developer
                            </motion.span> who like to work on all aspect of website development, starting from Frontend design to Backend business logic & data management
                        </p>
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default Intro