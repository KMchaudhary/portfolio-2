import React from 'react'
import {useState} from 'react';
import Contact from './Home/Contact';
import Education from './Home/Education';
import Intro from './Home/Intro';
import Projects from './Home/Projects';
import Skills from './Home/Skills';
import { motion } from 'framer-motion';
import { useEffect } from 'react';


const Home = () => {
    const [tab, setTab] = useState('');
    const [theme, setTheme] = useState('');
    const handleSetTab = (tab) => {
        setTab(tab);
    }
    const viewThreshold = 0.5;

    useEffect(() => {
        const th = localStorage.getItem('theme');
        if(!th || (th !== 'dark' && th !== 'light')) {
            setTheme('light');
            localStorage.setItem('theme', 'light');
        } else {
            setTheme(th);
        }
        console.log(theme);
    },[theme]);

    const changeTheme = () => {
        if(theme === 'dark') {
            setTheme('light')
            localStorage.setItem('theme', 'light');
        } else {
            setTheme('dark')
            localStorage.setItem('theme', 'dark');
        }
    }

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 shadow">
                <div className={theme}>
                    <div className="backdrop-blur dark:bg-slate-700 bg-white bg-opacity-70">
                        <div className="px-5 md:px-8 h-[56px] flex flex-row justify-between ">
                            <div className="left flex items-center">                        
                                <motion.div 
                                    className="logo text-xl font-medium text-blue-700 dark:text-blue-300 italic"
                                    initial={{opacity: 0, y:'-40vh'}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.5, type: 'spring'}}
                                >
                                    Developer
                                </motion.div>
                                {/* <div className="logo text-xl font-medium text-blue-700 italic">Developer</div> */}
                            </div>
                            <div className="center hidden sm:flex items-end ml-4 ">
                                <div className="navbar hidden lg:block">
                                    <nav className="flex flex-row items-center font-mono">
                                        <a className={`nav-link ${tab === 'intro' ? 'active' : ''}`} href="#intro" onClick={(e) => {setTab('intro')}}>
                                            <div className="nav-item flex"><span className="text-blue-700 dark:text-blue-300 hidden lg:block">01.</span> Intro</div>
                                        </a>
                                        <a className={`nav-link ${tab === 'projects' ? 'active' : ''}`} href="#projects" onClick={(e) => {setTab('projects')}}>
                                            <div className="nav-item flex"><span className="text-blue-700 dark:text-blue-300 hidden lg:block">02.</span> Projects</div>
                                        </a>
                                        <a className={`nav-link ${tab === 'education' ? 'active' : ''}`} href="#education" onClick={(e) => {setTab('study')}}>
                                            <div className="nav-item flex"><span className="text-blue-700 dark:text-blue-300 hidden lg:block">03.</span> Education</div>
                                        </a>
                                        <a className={`nav-link ${tab === 'skills' ? 'active' : ''}`} href="#skills" onClick={(e) => {setTab('skills')}}>
                                            <div className="nav-item flex"><span className="text-blue-700 dark:text-blue-300 hidden lg:block">04.</span> Skills</div>
                                        </a>                                
                                        <a className={`nav-link ${tab === 'contact' ? 'active' : ''}`} href="#contact" onClick={(e) => {setTab('contact')}}>
                                            <div className="nav-item flex"><span className="text-blue-700 dark:text-blue-300 hidden lg:block">05.</span> Contact</div>
                                        </a>
                                    </nav>
                                </div>
                            </div>
                            <div className="right flex items-center ml-4">                                

                                <div className="flex flex-row justify-center">
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

                                <a 
                                    className="px-2 text-base py-1 ml-2 sm:ml-4 bg-white border-2 border-blue-700 dark:border-blue-500 hover:bg-blue-700 dark:bg-blue-300 dark:hover:bg-blue-500 hover:text-white rounded transition-all"
                                    href={`${process.env.PUBLIC_URL}/resume/Kuldip_Resume.pdf`}
                                    download="Kuldip_Resume"
                                >
                                    Resume
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className={theme}>
                <main className="scroll-container bg-slate-50 text-black dark:text-white dark:bg-slate-900">
                    
                    {/* Intro */}
                    <div className="scroll-el">
                        <Intro handleSetTab={handleSetTab} viewThreshold={viewThreshold} />
                    </div>


                    {/* <section id="intro" className="py-16 min-h-screen flex items-center">
                        <div className="wrapper mx-auto px-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8">
                                <div className="flex justify-center items-center">
                                    <div className="image inline-block rounded-lg drop-shadow">
                                        <img className="profileImg" src={profile} alt="Profile" />
                                    </div>
                                </div>

                                <div className="flex flex-col justify-center items-center tracking-wide leading-5">
                                    <p>
                                        Hello, <span className="font-mono mb-4 font-bold tracking-wide text-blue-700">I'am Kuldip Chaudhary</span>. A web developer who can work on all aspects of the web. I enjoy working on a variety of small and medium-sized web projects. Work on a portfolio, a company landing page, a content management system, an education system, a chrome extension, and other projects. Let's <a href="#contact" className="text-blue-700">discuss</a> your next project.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section> */}


                    {/*  Projects  */}
                    <div className="scroll-el">
                        <Projects handleSetTab={handleSetTab} viewThreshold={viewThreshold} />
                    </div>

                    {/* Education */}
                    <div className="scroll-el">
                        <Education handleSetTab={handleSetTab} viewThreshold={viewThreshold} />
                    </div>

                    {/* Skills */}
                    <div className="scroll-el">  
                        <Skills handleSetTab={handleSetTab} viewThreshold={viewThreshold} />
                    </div>


                    {/*  Area of Interest  */}
                    {/* <section id="interest" className="py-16 px-4 relative bg-green-100">
                        <div className="wrapper mx-auto">
                            <h2 className="text-2xl font-bold mb-8 text-center"><span className="py-2 border-b-2 inline-block border-green-300">Area of interest</span></h2>
                            <div className="flex flex-row flex-wrap font-semibold">
                                <div className="mx-3 text-2xl flex items-center my-4"><div className="dot-2 bg-green-400"></div>Web Development</div>
                                <div className="mx-3 text-2xl flex items-center my-4"><div className="dot-2 bg-green-400"></div>Machine Learning</div>
                                <div className="mx-3 text-2xl flex items-center my-4"><div className="dot-2 bg-green-400"></div>Project Management</div>
                                <div className="mx-3 text-2xl flex items-center my-4"><div className="dot-2 bg-green-400"></div>Explore</div>
                            </div>
                        </div>
                    </section> */}

                    {/*  Contact  */}
                    <div className="scroll-el">
                        <Contact handleSetTab={handleSetTab} viewThreshold={viewThreshold} />
                    </div>


                    <button 
                        className="flex justify-center items-center fixed bottom-8 right-8 w-12 h-12 rounded-full border border-gray-400 drop-shadow bg-white bg-opacity-10 z-50"
                        onClick={changeTheme}
                    >

                        {
                            theme === 'light' &&
                            <div className="transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-moon-stars text-blue-800" viewBox="0 0 16 16">
                                    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/>
                                    <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
                                </svg>
                            </div>
                        }
                        {
                            theme === 'dark' &&
                            <div className="transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-brightness-high text-yellow-500" viewBox="0 0 16 16">
                                    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
                                </svg>
                            </div>
                        }

                    </button>

                </main>
            </div>
        </>
    );
};

export default Home;