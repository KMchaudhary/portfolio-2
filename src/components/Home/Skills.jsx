import React, {useEffect} from 'react'
import { useInView } from 'react-intersection-observer';

const Skills = ({handleSetTab, viewThreshold}) => {
    const { ref, inView } = useInView({
        threshold: viewThreshold
    });
    console.log("Skills is in view : ", inView);

    useEffect(() => {
        if(inView) {
            handleSetTab("skills");
        }
    }, [inView]);

    return (
        <>
            <section id="skills" className="py-8 relative min-h-screen flex items-center">
                <div ref={ref} className="wrapper mx-auto px-4">
                    <div className="my-16 font-mono text-2xl text-blue-700">{'<Skills>'}</div>

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
                                <h3 className="text-xl font-semibold mb-4 pl-3 border-b-2 pb-2 border-blue-700">Programing languages</h3>
                                <ul className="ml-4 list-disc marker:text-blue-500">
                                    <li className="mb-2">Javascript</li>
                                    <li className="mb-2">C/C++</li>
                                    <li className="mb-2">Java</li>
                                    <li className="mb-2">Python</li>
                                </ul>
                            </div>
                            <div className="py-8 px-3">
                                <h3 className="text-xl font-semibold mb-4 pl-3 border-b-2 pb-2 border-blue-700">Frontend frameworks & tools</h3>
                                <ul className="ml-4 list-disc marker:text-blue-500">
                                    <li className="mb-2">HTML, CSS, Javascript</li>
                                    <li className="mb-2">CSS Framework
                                        <ul className="mt-1 list">
                                            <li className="text-gray-600"><span className="text-blue-500 font-bold">-</span> Bootstrap</li>
                                            <li className="text-gray-600"><span className="text-blue-500 font-bold">-</span> Tailwind CSS</li>
                                            <li className="text-gray-600"><span className="text-blue-500 font-bold">-</span> Materialize CSS</li>
                                        </ul>
                                    </li>
                                    <li className="mb-2">React Js</li>
                                    <li className="mb-2">State management
                                        <ul className="mt-1 list">
                                            <li className="text-gray-600"><span className="text-blue-500 font-bold">-</span> Redux</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="py-8 px-3">
                                <h3 className="text-xl font-semibold mb-4 pl-3 border-b-2 pb-2 border-blue-700">Backend</h3>
                                <ul className="ml-4 list-disc marker:text-blue-500">
                                    <li className="mb-2">Backend Language
                                        <ul className="">
                                            <li className="text-gray-600"><span className="text-blue-500 font-bold">-</span> Node Js (Express)</li>
                                        </ul>
                                    </li>


                                    <li className="mb-2">Database
                                        <ul className="">
                                            <li className="text-gray-600"><span className="text-blue-500 font-bold">-</span> SQL</li>
                                            <li className="text-gray-600"><span className="text-blue-500 font-bold">-</span> MongoDB</li>
                                        </ul>
                                    </li>
                                    <li className="mb-2">Tools
                                        <ul className="">
                                            <li className="text-gray-600"><span className="text-blue-500 font-bold">-</span> Postman</li>
                                            <li className="text-gray-600"><span className="text-blue-500 font-bold">-</span> Git, Github</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="my-16 font-mono text-2xl font text-blue-300">{'</Skills>'}</div>
                </div>
            </section>
        </>
    )
}

export default Skills