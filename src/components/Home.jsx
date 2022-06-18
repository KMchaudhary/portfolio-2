import React from 'react'
import {useState} from 'react';

import profile from '../assets/profile.jpeg';
import project1 from '../assets/project1.png';
import ContactForm from './ContactForm';


import ProjectCard from './ProjectCard';


const Home = () => {
    const [tab, setTab] = useState('intro');
    console.log(tab)
    return (
        <>
            <header className="sticky top-0 z-40 shadow">
                <div className="px-5 md:px-8 h-[42px] flex flex-row justify-between items-center">
                    <div className="left flex items-center">
                        <div className="logo text-lg font-medium text-green-500">Developer</div>
                    </div>
                    <div className="right flex items-center">
                        <div className="navbar hidden md:block">
                            <nav className="flex flex-row">
                                <a className={`nav-link mr-2 ${tab === 'intro' ? 'active' : ''}`} href="#intro" onClick={(e) => {setTab('intro')}}>
                                    <div className="nav-item">Intro</div>
                                </a>
                                <a className={`nav-link mr-2 ${tab === 'projects' ? 'active' : ''}`} href="#projects" onClick={(e) => {setTab('projects')}}>
                                    <div className="nav-item">Projects</div>
                                </a>
                                <a className={`nav-link mr-2 ${tab === 'study' ? 'active' : ''}`} href="#study" onClick={(e) => {setTab('study')}}>
                                    <div className="nav-item">Education</div>
                                </a>
                                <a className={`nav-link mr-2 ${tab === 'skills' ? 'active' : ''}`} href="#skills" onClick={(e) => {setTab('skills')}}>
                                    <div className="nav-item">Skills</div>
                                </a>                                
                                <a className={`nav-link mr-2 ${tab === 'contact' ? 'active' : ''}`} href="#contact" onClick={(e) => {setTab('contact')}}>
                                    <div className="nav-item">Contact</div>
                                </a>
                            </nav>
                        </div>

                        <div className="flex flex-row justify-center md:hidden">
                                <a href="https://www.linkedin.com/in/kuldip-chaudhari-726b651a3" target="_blank" rel="noreferrer" className="social-media-link mx-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                    </svg>
                                </a>
                                <a href="https://github.com/KMchaudhary" target="_blank" rel="noreferrer" className="social-media-link mx-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                    </svg>
                                </a>
                        </div>
                    </div>
                </div>
            </header>

            <main>
                <section id="intro" className="py-16">
                    <div className="wrapper mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8">
                            <div className="flex justify-center items-center">
                                <div className="image inline-block rounded-lg shadow-lg">
                                    <img className="profileImg" src={profile} alt="Profile" />
                                </div>
                            </div>

                            <div className="flex flex-col justify-center items-center tracking-wide leading-5">
                                <p>
                                    Hello, <span className="font-serif mb-4 font-bold tracking-wide text-green-600">I'am Kuldip Chaudhary</span>. A web developer who can work on all aspects of the web. I enjoy working on a variety of small and medium-sized web projects. Work on a portfolio, a company landing page, a content management system, an education system, an inventory system, a chrome extension, and other projects. Let's <a href="#contact" className="text-green-500">discuss</a> your next project.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>


                {/*  Projects  */}
                <section id="projects" className="py-16 relative bg-slate-50">
                    <div className="wrapper mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-5"><span className="py-2 border-b-2 inline-block border-green-300">Projects</span></h2>
                        <div className="pt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                            <ProjectCard projectId="1" projectImage={project1} title="Parixa 22" description="Create quiz" />
                            <ProjectCard projectId="2" projectImage={`${process.env.PUBLIC_URL}/images/project-2/img-3.png`} title="Mined Hackathon 2022" description="Organize hackathons, get registration, hackthon problem statements, hackathon team generation, etc." />
                                                        
                        </div>
                    </div>
                </section>


                {/* Education */}
                <section id="study" className="py-16 relative">
                    <div className="wrapper mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-4"><span className="py-2 border-b-2 inline-block border-green-300">Education</span></h2>
                        <div className="flex flex-col">
                            <table>
                                <tbody>
                                <tr>
                                    <td className="text-slate-600 font-medium px-3 py-1">Collage</td>
                                    <td className="text-slate-800 font-semibold px-3 py-1">Nirma University, Ahmedabad</td>
                                </tr>
                                <tr>
                                    <td className="text-slate-600 font-medium px-3 py-1">Program</td>
                                    <td className="text-slate-800 font-semibold px-3 py-1">B. Teach in Computer Science and Engineering</td>
                                </tr>
                                <tr>
                                    <td className="text-slate-600 font-medium px-3 py-1">Current Year</td>
                                    <td className="text-slate-800 font-semibold px-3 py-1">
                                        4<sup>th</sup>
                                        <div className="dot bg-slate-500"></div>
                                        Semester 7
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Skills */}
                <section id="skills" className="py-16 relative bg-slate-50">
                    <div className="wrapper mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-4"><span className="py-2 border-b-2 inline-block border-green-300">Skills</span></h2>

                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="px-4 mb-4">
                                <h3 className="font-medium text-slate-600">Programing languages</h3>
                                <ul className="ml-4">
                                    <li className="py-1 flex flex-row justify-between">
                                        <div>C</div>
                                        <div>⭐⭐⭐⭐⭐</div>
                                    </li>
                                    <li className="py-1 flex flex-row justify-between">
                                        <div>C++</div>
                                        <div>⭐⭐⭐⭐</div>
                                    </li>
                                    <li className="py-1 flex flex-row justify-between">
                                        <div>Java Script</div>
                                        <div>⭐⭐⭐⭐⭐</div>
                                    </li>
                                    <li className="py-1 flex flex-row justify-between">
                                        <div>JAVA</div>
                                        <div>⭐⭐⭐⭐</div>
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
                                        <div>Node JS</div>
                                        <div>⭐⭐⭐⭐⭐</div>
                                    </li>
                                    <li className="py-1 flex flex-row justify-between">
                                        <div>react</div>
                                        <div>⭐⭐⭐</div>
                                    </li>
                                    <li className="py-1 flex flex-row justify-between">
                                        <div>SQL</div>
                                        <div>⭐⭐⭐</div>
                                    </li>
                                    <li className="py-1 flex flex-row justify-between">
                                        <div>Mongo DB</div>
                                        <div>⭐⭐⭐⭐</div>
                                    </li>
                                    {/*<li className="py-1 flex flex-row justify-between">*/}
                                    {/*    <div>Python</div>*/}
                                    {/*    <div>⭐⭐⭐⭐</div>*/}
                                    {/*</li>*/}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>


                {/*  Area of Interest  */}
                <section id="interest" className="py-16 px-4 relative bg-green-100">
                    <div className="wrapper mx-auto">
                        <h2 className="text-2xl font-bold mb-8 text-center"><span className="py-2 border-b-2 inline-block border-green-300">Area of interest</span></h2>
                        <div className="flex flex-row flex-wrap font-semibold">
                            <div className="mx-3 text-2xl flex items-center my-4"><div className="dot-2 bg-green-400"></div>Web Development</div>
                            <div className="mx-3 text-2xl flex items-center my-4"><div className="dot-2 bg-green-400"></div>Machine Learning</div>
                            <div className="mx-3 text-2xl flex items-center my-4"><div className="dot-2 bg-green-400"></div>Project Management</div>
                            <div className="mx-3 text-2xl flex items-center my-4"><div className="dot-2 bg-green-400"></div>Explore</div>
                        </div>
                    </div>
                </section>

                {/*  Contact  */}
                <section id="contact" style={{backgroundImage: `url(${process.env.PUBLIC_URL + "/images/contact.jpg"})`, backgroundSize: 'cover'}} className="py-16 min-h-[100vh] px-4 relative">
                    <div className="flex wrapper mx-auto">
                        <div className="md:grow"></div>
                        <div className="flex flex-col items-center w-full md:w-auto">
                            <h2 className="text-2xl font-bold mb-4 text-center"><span className="py-2 border-b-2 inline-block border-green-300">Contact</span></h2>
                            <p className="my-3 text-slate-600">&rarr; Let's talk more about your next project</p>
                            <div className="sm:w-[400px] w-full border shadow-sm rounded-lg bg-white p-3">
                                <ContactForm />
                            </div>

                            <div className="my-5 flex flex-row justify-center">
                                <a href="https://www.linkedin.com/in/kuldip-chaudhari-726b651a3" target="_blank" rel="noreferrer" className="social-media-link mx-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                    </svg>
                                </a>
                                <a href="https://github.com/KMchaudhary" target="_blank" rel="noreferrer" className="social-media-link mx-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                </section>

            </main>
        </>
    );
};

export default Home;