import React, { useState } from 'react'

export default function ContactForm() {

    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');

    return (
        <>
            {/* <form action="mailto:er.kmc2001121@gmail.com" className="p-4" method="post"> */}
            <div className='p-4'>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="subject">Subject</label>
                    <input 
                    className="outline-none border px-3 py-2 w-full rounded-lg focus:bg-slate-50 focus:border-green-600 focus:ring-1 focus:shadow-sm focus:ring-green-500" 
                    type="text" 
                    name="subject" 
                    onChange={(e) => setSubject(e.target.value)}
                    value={subject || ''}
                    id="subject" 
                    required />
                </div>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="message">Message</label>
                    <textarea 
                    className="outline-none border px-3 py-2 w-full rounded-lg focus:bg-slate-50 focus:border-green-600 focus:ring-1 focus:shadow-sm focus:ring-green-500" 
                    type="text" 
                    name="message" 
                    onChange={(e) => setBody(e.target.value)}
                    value={body || ''}
                    rows="3" 
                    id="message"
                    required/>
                </div>

                {/* <button className="w-full block p-3 text-white text-lg font-semibold bg-green-500 hover:bg-green-600 focus:ring focus:shadow-sm focus:ring-green-500 rounded-lg">
                    Send email
                </button> */}
                <a href={`mailto:er.kmc2001121@gmail.com?subject=${encodeURI(subject)}&body=${encodeURI(body)}`} className="w-full block p-3 text-white text-lg font-semibold bg-green-500 hover:bg-green-600 focus:ring focus:shadow-sm focus:ring-green-500 rounded-lg">
                    Send email
                </a>
            </div>
            {/* </form> */}
        </>
    )
}
