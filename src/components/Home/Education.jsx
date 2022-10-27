import React, {useEffect} from 'react';
import { useInView } from 'react-intersection-observer';

const Education = ({handleSetTab, viewThreshold}) => {
    const { ref, inView } = useInView({
        threshold: viewThreshold
    });

    useEffect(() => {
        if(inView) {
            handleSetTab("education");
        }
    }, [inView]);

    return (
        <>
            <section id="education" className="py-8 relative min-h-screen flex items-center">
                <div ref={ref} className="wrapper mx-auto px-4">
                    <div className="my-16 font-mono text-2xl text-blue-700 dark:text-blue-300">{'<Education>'}</div>

                    <div className="pl-4 sm:pl-8 md:pl-12">
                        {/* Education list */}
                        <div className="flex flex-col">
                            <table>
                                <tbody>
                                    <tr className="">
                                        <td className="pb-4 text-xl font-medium px-3 py-6 flex items-start">Collage</td>
                                        <td className="px-3 py-6">
                                            <p className="text-xl uppercase text-slate-900 dark:text-slate-50 mb-1">Nirma University, Ahmedabad</p>
                                            <p className="italic text-gray-500 dark:text-slate-300 mb-2">B. Teach in Computer Science and Engineering</p>
                                            <p className="text-slate-900 dark:text-slate-400 text-base mb-2">
                                                4<sup>th</sup> year
                                                <span className="dot w-1 h-1 bg-gray-700 inline-block rounded-full"></span>
                                                Semester 7
                                            </p>
                                            <p className="text-slate-900 dark:text-slate-400 text-base">
                                                2019 - 2023
                                            </p>
                                        </td>
                                    </tr>
                                    <tr className="">
                                        <td className="pb-6 text-xl font-medium px-3 py-6 flex items-start">School</td>
                                        <td className="px-3 py-4 border-t">
                                            <p className="text-xl uppercase text-slate-900 dark:text-slate-50 mb-1">Adarsh Vidhyalaya, Patan</p>
                                            <p className="italic text-gray-500 dark:text-slate-300 mb-2">PCM in Computer Science</p>
                                            <p className="text-slate-900 dark:text-slate-400 text-base">
                                                2017 - 2019
                                            </p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="my-16 font-mono text-2xl font text-blue-300 dark:text-blue-700">{'</Education>'}</div>
                </div>
            </section>
        </>
    )
}

export default Education