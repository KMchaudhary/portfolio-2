import React, {useEffect} from 'react';
import { Send } from 'react-bootstrap-icons';
import { useInView } from 'react-intersection-observer';

const Contact = ({handleSetTab,  viewThreshold}) => {
    const { ref, inView } = useInView({
        threshold: viewThreshold
    });
    console.log("Contact is in view : ", inView);

    useEffect(() => {
        if(inView) {
            handleSetTab("contact");
        }
    }, [inView]);

    return (
        <>
            <section id="contact" className="py-8 relative min-h-screen flex items-center">
                <div ref={ref} className="wrapper mx-auto px-4">
                    <div className="my-16 font-mono text-2xl text-blue-700">{'<Contact>'}</div>

                    <div className="pl-4 sm:pl-8 md:pl-12">
                        {/* Contact list */}
                        <h1 className="text-2xl italic mb-8">Feel free to send me an e-mail</h1>

                        <h2 className="text-lg mb-4"><span className="rotate-90">&rarr;</span> you can send an email from here!</h2>

                        <div className="w-full max-w-[500px]">
                            <form action="">
                                <input className="mb-3 w-full bg-transparent focus:bg-blue-100 placeholder:text-blue-400 texts-xl text-blue-700 outline-0 border-black border-b-2 p-3 focus:border-blue-700 transition-all" type="text" placeholder='Name' />
                                <input className="mb-3 w-full bg-transparent focus:bg-blue-100 placeholder:text-blue-400 texts-xl text-blue-700 outline-0 border-black border-b-2 p-3 focus:border-blue-700 transition-all" type="email" placeholder='Your email' />
                                <textarea className="mb-3 w-full bg-transparent focus:bg-blue-100 placeholder:text-blue-400 texts-xl text-blue-700 outline-0 border-black border-b-2 p-3 focus:border-blue-700 resize-y transition-all" rows={2} placeholder='Write your message' />
                                <button className="mt-4 px-3 py-2 flex items-center text-blue-700 border-t-2 border-b-2 border-black hover:border-blue-700 hover:bg-blue-700 hover:text-white hover:-translate-y-1 transition-all">
                                    <span className="mr-2">Send</span>
                                    <Send size={16} />
                                </button>
                            </form>
                        </div>

                    </div>

                    <div className="my-16 font-mono text-2xl font text-blue-300 transition-all">{'</Contact>'}</div>
                </div>
            </section>
        </>
    )
}

export default Contact