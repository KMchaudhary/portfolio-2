import React, {useState, useEffect} from 'react';
import { Send } from 'react-bootstrap-icons';
import { useInView } from 'react-intersection-observer';

const Contact = ({handleSetTab,  viewThreshold}) => {

    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');

    const { ref, inView } = useInView({
        threshold: viewThreshold
    });

    useEffect(() => {
        if(inView) {
            handleSetTab("contact");
        }
    }, [inView]);

    return (
        <>
            <section id="contact" className="py-8 relative min-h-screen flex items-center">
                <div ref={ref} className="wrapper mx-auto px-4">
                    <div className="my-16 font-mono text-2xl text-blue-700 dark:text-blue-300">{'<Contact>'}</div>

                    <div className="pl-4 sm:pl-8 md:pl-12">
                        {/* Contact list */}
                        <h1 className="text-2xl italic mb-8">Feel free to send me an e-mail</h1>

                        <h2 className="text-lg mb-4"><span className="rotate-90">&rarr;</span> you can send an email from here!</h2>

                        <div className="w-full max-w-[500px]">
                                <input 
                                    className="mb-3 w-full bg-transparent placeholder:text-blue-400 texts-xl text-blue-700 dark:text-blue-300 dark:hover:bg-slate-700 outline-0 border-black dark:border-white border-b-2 p-3 focus:border-blue-700 focus:bg-blue-100 dark:focus:bg-slate-700 dark:focus:border-blue-700 resize-y transition-all" 
                                    type="text" 
                                    placeholder='Subject'                
                                    onChange={(e) => setSubject(e.target.value)}
                                    value={subject || ''}
                                    id="subject" 
                                    required
                                />
                                
                                {/* <input 
                                    className="mb-3 w-full bg-transparent placeholder:text-blue-400 texts-xl text-blue-700 dark:text-blue-300 dark:hover:bg-slate-700 outline-0 border-black dark:border-white border-b-2 p-3 focus:bg-blue-100 focus:border-blue-700 dark:focus:border-blue-700 transition-all" 
                                    type="text" 
                                    placeholder='Name' /> */}
                                
                                <textarea 
                                    className="mb-3 w-full bg-transparent placeholder:text-blue-400 texts-xl text-blue-700 dark:text-blue-300 dark:hover:bg-slate-700 outline-0 border-black dark:border-white border-b-2 p-3 focus:bg-blue-100 dark:focus:bg-slate-700 focus:border-blue-700 dark:focus:border-blue-700 resize-y transition-all" 
                                    placeholder='Write your message' 
                                    onChange={(e) => setBody(e.target.value)}
                                    value={body || ''}
                                    rows={2}
                                    id="message"
                                    required
                                />
                                
                                <div className='flex'>
                                    <a
                                        href={`mailto:er.kmc2001121@gmail.com?subject=${encodeURI(subject)}&body=${encodeURI(body)}`} 
                                        className="mt-4 px-3 py-2 flex items-center text-blue-700 border-t-2 border-b-2 border-black dark:border-white dark:text-white dark:hover:bg-blue-500 dark:hover:border-blue-500 hover:border-blue-700 hover:bg-blue-700 hover:text-white hover:-translate-y-1 transition-all"
                                    >
                                        <span className="mr-2">Send</span>
                                        <Send size={16} />
                                    </a>
                                </div>
                                
                        </div>

                    </div>

                    <div className="my-16 font-mono text-2xl font text-blue-300 dark:text-blue-700 transition-all">{'</Contact>'}</div>
                </div>
            </section>
        </>
    )
}

export default Contact