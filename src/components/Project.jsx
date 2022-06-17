import {React, useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import Block from './Block';
import { v4 as uuidv4 } from 'uuid';

export default function Project() {

    let {projectId} = useParams();
    let navigate = useNavigate();


    const [data, setData] = useState(null);

    const getData = () => {
        return new Promise(resolve => {
            fetch(`/projects/project${projectId}.json`, {
                headers : { 
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                }
            })
                .then(res => {
                    if(res.status >= 400 )
                        throw new Error("Project not found");
                    return res.json();
                })
                .then(data => resolve(data))
                .catch(err => {
                    navigate('/404');
                })
        })
    }

    useEffect(() => { 
        (async () => {
            const dataVal = await getData();
            setData(dataVal);
        })();
    })



    return (
        <>
            <main>
                {
                    data &&
                    <section className="pt-16 pb-8 bg-gradient-to-b from-green-300 to-white">
                        <div className="wrapper mx-auto px-4">
                            <h2 className="title text-2xl sm:text-4xl font-semibold font-serif tracking-wide mb-8 pl-4 border-l-4 border-green-500 relative">
                                {data.projectTitle}
                            </h2>

                            <div className="cover-image my-5">
                                <img src={`${process.env.PUBLIC_URL + data.coverImage}`} className="img-fluid rounded-lg drop-shadow" alt="project" />
                            </div>

                            <p className="description text-slate-500 my-8 font-serif pl-4 border-l-2">{data.briefDescription}</p>
                        </div>
                    </section>
                }

                {
                    data &&
                    <section className="pb-16">
                        <div className="wrapper mx-auto px-4 text-slate-700">
                            {
                                data.info.map(block => <Block key={uuidv4()} data={block} />)
                            }                            
                        </div>
                    </section>
                }
                
            </main>
        </>    
    )
}
