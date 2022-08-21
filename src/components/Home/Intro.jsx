import React, {useEffect} from 'react';
import { useInView } from 'react-intersection-observer';

const Intro = ({handleSetTab, viewThreshold}) => {
    const { ref, inView } = useInView({
        threshold: viewThreshold
    });
    console.log("Intro is in view : ", inView);

    useEffect(() => {
        if(inView) {
            handleSetTab("intro");
        }
    }, [inView]);

    return (
        <>
            <section id="intro" className="py-16 min-h-screen flex items-center">
                <div ref={ref} className="wrapper mx-auto px-4">
                    <h1 className="text-center text-4xl md:text-6xl font-bold mb-10"><span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-indigo-500">Hii I'm Kuldip </span> 👋</h1>
                    <p className="text-xl md:text-3xl text-center italic">A Web Developer who like to work on all aspect of website development, starting from Frontend design to Backend business login & data management</p>
                </div>
            </section>
        </>
    )
}

export default Intro