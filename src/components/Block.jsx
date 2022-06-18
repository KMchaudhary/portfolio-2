import {React} from 'react'

export default function Block(props) {
    const {data} = props;

    // const [bigView, setBigView] = useState(false);
    // console.log(bigView);

    // const closeBigView = () => {        
    //     console.log('close view');
    //     setBigView(false);
    // }

    // const openBigView = () => {
    //     setBigView(true);
    //     console.log('open view');
    //     // document.addEventListener('keydown', closeView);
    // }

    // const closeView = (e) => {
    //     if(e.key === 'Escape') {
    //         setBigView(false);
    //         console.log('close view');
    //         document.removeEventListener('keydown', closeView);
    //     }
    // }    

    return (
        <>
            {
                data.type === "image-top" &&
                <div className="flex flex-col my-8">
                    <div className={`mb-8`}>
                        <div className="relative">
                            {/* <div className={`flex justify-end ${bigView ? '' : 'hidden'}`}>
                                <button onClick={closeBigView} className="focus:ring-2 hover:bg-slate-200 bg-slate-100 rounded ring-green-500 p-3 mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                                    </svg>
                                </button>
                            </div>                             */}

                            <img 
                            src={`${process.env.PUBLIC_URL + data.image}`} 
                            className="img-fluid rounded-lg shadow border border-slate-900" 
                            alt="component"
                            />
                        </div>                       
                        
                    </div>

                    <p className="description text-slate-700 mb-3">{data.p}</p>
                </div>
            }
            {
                data.type === "image-left" &&
                <div className="flex flex-col my-8 md:flex-row">
                    <div className={`md:mr-8 mb-8 w-full md:w-6/12}`}>
                        <div className="relative">
                            {/* <div className={`flex justify-end ${bigView ? '' : 'hidden'}`}>
                                <button onClick={closeBigView} className="focus:ring-2 hover:bg-slate-200 bg-slate-100 rounded ring-green-500 p-3 mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                                    </svg>
                                </button>
                            </div>             */}

                            <img 
                            src={`${process.env.PUBLIC_URL + data.image}`} 
                            className="img-fluid rounded-lg shadow border border-slate-900" 
                            alt="component"
                            />
                        </div> 
                    </div>

                    <p className="description text-slate-700 mb-3 pb-3 w-full md:w-6/12">{data.p}</p>
                </div>
            }
            {
                data.type === "image-right" &&
                <div className="flex flex-col-reverse py-3 items-start my-8 md:flex-row">
                    <p className="description text-slate-700 mb-3 w-full md:w-6/12">{data.p}</p>
                    
                    <div className={`md:ml-8 mb-8 w-full md:w-6/12`}>
                        <div className="relative">
                            {/* <div className={`flex justify-end ${bigView ? '' : 'hidden'}`}>
                                <button onClick={closeBigView} className="focus:ring-2 hover:bg-slate-200 bg-slate-100 rounded ring-green-500 p-3 mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                                    </svg>
                                </button>
                            </div>             */}

                            <img 
                            src={`${process.env.PUBLIC_URL + data.image}`} 
                            className="img-fluid rounded-lg shadow border border-slate-900" 
                            alt="component"
                            />
                        </div> 
                    </div>
                </div>
            }
            {
                data.type === "text" &&
                <p className="description text-slate-700 mb-3">{data.p}</p>                    
            }
        </>        
    )
}
