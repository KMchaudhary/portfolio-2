import React, {useEffect} from 'react'
import { useInView } from 'react-intersection-observer';

const Skills = ({handleSetTab, viewThreshold}) => {
    const { ref, inView } = useInView({
        threshold: viewThreshold
    });

    useEffect(() => {
        if(inView) {
            handleSetTab("skills");
        }
    }, [inView]);

    return (
        <>
            <section id="skills" className="scroll-el py-8 relative min-h-screen flex items-center">
                <div ref={ref} className="wrapper mx-auto px-4">
                    <div className="my-16 font-mono text-2xl text-blue-700 dark:text-blue-300">{'<Skills>'}</div>

                    <div className="pl-4 sm:pl-8 md:pl-12">
                        {/* Skill list */}
                        {/* <div className="grid grid-cols-1 md:grid-cols-2">
                                <div className="px-4 mb-4">
                                    <h3 className="font-medium text-slate-600">Programing languages</h3>
                                    <ul className="ml-4">
                                        <li className="py-1 flex flex-row justify-between">
                                            <div>Javascript</div>
                                            <div>⭐⭐⭐⭐⭐</div>
                                        </li>
                                        <li className="py-1 flex flex-row justify-between">
                                            <div>C/C++</div>
                                            <div>⭐⭐⭐⭐</div>
                                        </li>
                                        <li className="py-1 flex flex-row justify-between">
                                            <div>JAVA</div>
                                            <div>⭐⭐⭐</div>
                                        </li>
                                        <li className="py-1 flex flex-row justify-between">
                                            <div>Python</div>
                                            <div>⭐⭐⭐⭐</div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="px-4 mb-4">
                                    <h3 className="font-medium text-slate-600">Technology</h3>
                                    <ul className="ml-4">
                                        <li className="py-1 flex flex-row justify-between">
                                            <div>Node JS (Express)</div>
                                            <div>⭐⭐⭐⭐</div>
                                        </li>
                                        <li className="py-1 flex flex-row justify-between">
                                            <div>React Js</div>
                                            <div>⭐⭐⭐⭐</div>
                                        </li>
                                        <li className="py-1 flex flex-row justify-between">
                                            <div>Redux</div>
                                            <div>⭐⭐⭐</div>
                                        </li>
                                        <li className="py-1 flex flex-row justify-between">
                                            <div>SQL</div>
                                            <div>⭐⭐⭐</div>
                                        </li>
                                        <li className="py-1 flex flex-row justify-between">
                                            <div>Mongo DB</div>
                                            <div>⭐⭐⭐</div>
                                        </li>
                                    </ul>
                                </div>
                            </div> */}

                        <div className="grid grid-cols-1 md:grid-cols-3">
                            <div className="py-8 px-3">
                                <h3 className="text-xl font-semibold mb-4 pl-3 border-b-2 pb-2 border-blue-700 dark:border-blue-300">
                                    <div className="flex mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-code-slash text-blue-700 dark:text-blue-500" viewBox="0 0 16 16">
                                            <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
                                        </svg>
                                    </div> 
                                    Programing languages
                                </h3>
                                <ul className="ml-4 list-disc marker:text-blue-500 dark:text-slate-50">
                                    <li className="mb-2">Javascript</li>
                                    <li className="mb-2">C/C++</li>
                                    <li className="mb-2">Java</li>
                                    <li className="mb-2">Python</li>
                                </ul>
                            </div>
                            <div className="py-8 px-3">
                                <h3 className="text-xl font-semibold mb-4 pl-3 border-b-2 pb-2 border-blue-700 dark:border-blue-300">
                                    <div className="flex mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-window-sidebar text-blue-700 dark:text-blue-500" viewBox="0 0 16 16">
                                            <path d="M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
                                            <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v2H1V3a1 1 0 0 1 1-1h12zM1 13V6h4v8H2a1 1 0 0 1-1-1zm5 1V6h9v7a1 1 0 0 1-1 1H6z" />
                                        </svg>
                                    </div>    
                                    Frontend frameworks & tools
                                </h3>
                                <ul className="ml-4 list-disc marker:text-blue-500 dark:text-slate-50">
                                    <li className="mb-2">HTML, CSS, Javascript</li>
                                    <li className="mb-2">CSS Framework
                                        <ul className="text-gray-600 dark:text-slate-300">
                                            <li className=""><span className="text-blue-500 font-bold">-</span> Bootstrap</li>
                                            <li className=""><span className="text-blue-500 font-bold">-</span> Tailwind CSS</li>
                                            <li className=""><span className="text-blue-500 font-bold">-</span> Materialize CSS</li>
                                        </ul>
                                    </li>
                                    <li className="mb-2">React Js</li>
                                    <li className="mb-2">State management
                                        <ul className="text-gray-600 dark:text-slate-300">
                                            <li className=""><span className="text-blue-500 font-bold">-</span> Redux</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="py-8 px-3">
                                <h3 className="text-xl font-semibold mb-4 pl-3 border-b-2 pb-2 border-blue-700 dark:border-blue-300">
                                    <div className="flex mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-server text-blue-700 dark:text-blue-500" viewBox="0 0 16 16">
                                            <path d="M1.333 2.667C1.333 1.194 4.318 0 8 0s6.667 1.194 6.667 2.667V4c0 1.473-2.985 2.667-6.667 2.667S1.333 5.473 1.333 4V2.667z"/>
                                            <path d="M1.333 6.334v3C1.333 10.805 4.318 12 8 12s6.667-1.194 6.667-2.667V6.334a6.51 6.51 0 0 1-1.458.79C11.81 7.684 9.967 8 8 8c-1.966 0-3.809-.317-5.208-.876a6.508 6.508 0 0 1-1.458-.79z"/>
                                            <path d="M14.667 11.668a6.51 6.51 0 0 1-1.458.789c-1.4.56-3.242.876-5.21.876-1.966 0-3.809-.316-5.208-.876a6.51 6.51 0 0 1-1.458-.79v1.666C1.333 14.806 4.318 16 8 16s6.667-1.194 6.667-2.667v-1.665z"/>
                                        </svg>
                                    </div> 
                                    Backend
                                </h3>
                                <ul className="ml-4 list-disc marker:text-blue-500 dark:text-slate-50">
                                    <li className="mb-2">Backend Language
                                        <ul className="text-gray-600 dark:text-slate-300">
                                            <li className=""><span className="text-blue-500 font-bold">-</span> Node Js (Express)</li>
                                        </ul>
                                    </li>


                                    <li className="mb-2">Database
                                        <ul className="text-gray-600 dark:text-slate-300">
                                            <li className=""><span className="text-blue-500 font-bold">-</span> SQL</li>
                                            <li className=""><span className="text-blue-500 font-bold">-</span> MongoDB</li>
                                        </ul>
                                    </li>
                                    <li className="mb-2">Tools
                                        <ul className="text-gray-600 dark:text-slate-300">
                                            <li className=""><span className="text-blue-500 font-bold">-</span> Postman</li>
                                            <li className=""><span className="text-blue-500 font-bold">-</span> Git, Github</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="my-16 font-mono text-2xl font text-blue-300 dark:text-blue-700">{'</Skills>'}</div>
                </div>
            </section>
        </>
    )
}

export default Skills