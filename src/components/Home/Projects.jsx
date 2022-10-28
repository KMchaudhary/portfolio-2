import React from 'react';
import { useInView } from 'react-intersection-observer';
import ProjectBlock from '../ProjectBlock';
import project1 from '../../assets/project1.png';
import { useEffect } from 'react';

const Projects = ({handleSetTab, viewThreshold}) => {
    const { ref, inView } = useInView({
        threshold: viewThreshold
    });
    
    useEffect(() => {
        if(inView) {
            handleSetTab("projects")
        }
    }, [inView]);

    return (
        <>
            <section id="projects" className="scroll-el py-8 relative min-h-screen flex items-center">
                <div ref={ref} className="wrapper mx-auto px-4">
                    <div className="my-16 font-mono text-2xl font text-blue-700 dark:text-blue-300">{'<Projects>'}</div>
                   

                    <div className="pl-4 sm:pl-8 md:pl-12">
                        {/* Project list */}
                        {/* <div className="flex justify-end relative min-h-[320px] mb-20">
                                <div className="w-7/12 absolute left-0 top-2/4 -translate-y-2/4 hidden md:block">
                                    <div className="z-0 relative hidden md:block">
                                        <img className="w-full rounded-lg ring-1 ring-blue-700" src={project1} alt="project" />
                                    </div>
                                </div>
                                <div className="relative p-4 md:p-0 md:w-6/12 w-full flex flex-col md:items-end md:justify-center z-10">
                                    <div className="absolute md:hidden inset-0 pointer-events-none z-0 bg-gradient-to-br opacity-20 from-cyan-500 to-indigo-500 rounded-lg"></div>
                                    <a href="#abcd">
                                        <h1 className="text-2xl font-semibold tracking-wide mb-5 z-20 hover:text-blue-700">Quiz maker</h1>
                                    </a>
                                    <p className="p-4 mb-5 md:text-right md:shadow-lg md:bg-blue-300 rounded-lg z-20">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius est libero culpa vero maiores dolor aliquid officia mollitia ullam ad.</p>
                                    <div className="mb-5 -mx-2 flex flex-wrap font-mono font-semibold items-center z-20">
                                        <div className="mx-2">Javascript</div>
                                        <div className="dot w-1 h-1 bg-gray-700 rounded-full"></div>
                                        <div className="mx-2">Express</div>
                                        <div className="dot w-1 h-1 bg-gray-700 rounded-full"></div>
                                        <div className="mx-2">MongoDB</div>
                                        <div className="dot w-1 h-1 bg-gray-700 rounded-full"></div>
                                        <div className="mx-2">JWT</div>
                                    </div>
                                    <button className="z-20 border px-3 py-2 rounded text-blue-700 border-blue-700 hover:bg-blue-100">Learn more</button>
                                </div>
                            </div> */}

                        <ProjectBlock
                            position="left"
                            title="Mined Hackathon 2022"
                            description="Application for conduct new hackathon, get registration for hackathon 
                            and registered students can make team for hackathon. Team request and auto team assignment
                            functionality make it special."
                            image={`${process.env.PUBLIC_URL}/images/project-2/img-2.png`}
                            blogUrl="/project/2"
                            projectUrls={["https://www.mined2022.tech"]}
                            technology={['REST API node.js(Express)', 'SQL', 'JWT', 'Bootstrap', 'Tailwind']}
                        />

                        <ProjectBlock
                            position="right"
                            title="Parixa-22 (Quiz maker)"
                            description="Application for conducting online quizzes and exams similar to a google form with response store functionality."
                            image={project1}
                            blogUrl="/project/1"
                            projectUrls={["http://parixa22.herokuapp.com"]}
                            technology={['Node.js(Express)', 'MongoDB', 'JWT', 'HTML', 'JS', 'Bootstrap']}
                        />
                        
                        <ProjectBlock
                            position="left"
                            title="DB Designer"
                            description="webapp for creating SQL-based database schema"
                            image={`${process.env.PUBLIC_URL}/images/project-3/img-1.png`}
                            blogUrl="/project/3"
                            technology={['HTML', 'Javascript', 'CSS(Tailwind)']}
                        />


                        {/* <div className="flex justify-start relative min-h-[320px] mb-20">
                                <div className="w-6/12 flex flex-col items-start justify-center z-10">
                                    <h1 className="text-2xl font-semibold tracking-wide mb-5">Quiz maker</h1>
                                    <p className="p-4 mb-5 text-left shadow-lg bg-blue-300 rounded-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius est libero culpa vero maiores dolor aliquid officia mollitia ullam ad.</p>
                                    <div className="mb-5 -mx-2 flex font-mono font-semibold items-center">
                                        <div className="mx-2">Javascript</div>
                                        <div className="dot w-1 h-1 bg-gray-700 rounded-full"></div>
                                        <div className="mx-2">Express</div>
                                        <div className="dot w-1 h-1 bg-gray-700 rounded-full"></div>
                                        <div className="mx-2">MongoDB</div>
                                        <div className="dot w-1 h-1 bg-gray-700 rounded-full"></div>
                                        <div className="mx-2">JWT</div>
                                    </div>
                                    <button className="border px-3 py-2 rounded text-blue-700 border-blue-700 hover:bg-blue-100">Learn more</button>
                                </div>
                                <div className="w-7/12 absolute right-0">
                                    <div className="z-0">
                                        <img className="w-full rounded-lg ring-1 ring-blue-700" src={project1} alt="project" />
                                    </div>
                                </div>
                            </div> */}
                    </div>

                    <div className="my-16 font-mono text-2xl font text-blue-300 dark:text-blue-700">{'</Projects>'}</div>
                </div>
            </section>
        </>
    )
}

export default Projects;