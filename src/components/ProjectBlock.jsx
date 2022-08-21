import React from 'react'
import { Link } from 'react-router-dom';
import LinkIcon from 'react-bootstrap-icons/dist/icons/link';

const ProjectBlock = (props) => {
    const {title, description, technology, projectUrl, blogUrl, position, image} = props;
    return (
        <>
            <div className={`flex ${position === "left" ? 'justify-end' : 'justify-start'} relative min-h-[320px] mb-20`}>
                <div className={`w-7/12 absolute ${position === "left" ? 'left-0' : 'right-0'} top-2/4 -translate-y-2/4 hidden md:block`}>
                    <div className="z-0 relative hidden md:block">
                        {/* <div className="bg-blue-400 opacity-30 hover:opacity-0 absolute inset-0"></div> */}
                        <Link to={blogUrl}>
                            <img className="w-full rounded-lg ring-1 ring-blue-700 hover:scale-105 transition-all" src={image} alt="project" />
                        </Link>
                    </div>
                </div>
                <div className={`relative p-4 md:p-0 md:w-6/12 w-full flex flex-col ${position === "left" ? 'md:items-end' : 'md:items-start'} justify-between md:justify-center z-10`}>
                    <div className={`flex flex-col ${position === "left" ? 'md:items-end' : 'md:items-start'}`}>
                        <div className="absolute md:hidden inset-0 pointer-events-none z-0 bg-gradient-to-br opacity-20 from-cyan-500 to-indigo-500 rounded-lg"></div>
                        
                        <h1 className={`text-2xl ${position === "left" ? 'md:text-right' : 'md:text-left'} text-left font-semibold tracking-wide mb-5 z-20 hover:text-blue-700`}>
                            <Link to={blogUrl}>{title}</Link>
                        </h1>

                        <p className={`md:p-4 py-4 px-0 mb-5 ${position === "left" ? 'md:text-right' : 'md:text-left'} md:shadow-lg md:bg-blue-300 rounded-lg z-20`}>{description}</p>
                        <div className={`mb-5 -mx-2 md:w-4/5 flex ${position === "left" ? 'md:justify-end' : 'md:justify-start'} justify-left flex-wrap font-mono font-semibold items-center z-20`}>    
                            {
                                technology.map((tech, index) => (
                                    <div key={index} className="flex items-center">
                                        {
                                            index !== 0 &&
                                            <div className="dot w-1 h-1 bg-gray-700 rounded-full"></div>
                                        }                    
                                        <div className="mx-2">{tech}</div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    
                    <div className="flex items-center">
                        <LinkIcon className="text-gray-500" size={20} />
                        <a className="text-blue-500 hover:text-blue-700 underline ml-2" href={projectUrl} rel="noreferrer" target="_blank">{projectUrl}</a>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default ProjectBlock