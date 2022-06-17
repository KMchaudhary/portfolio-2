import React from 'react';
import { Link } from 'react-router-dom';

export default function ProjectCard(props) {

    const {projectId, projectImage, title, description} = props;

    return (
        <Link to={`/project/${projectId}`} className="project-link">
            <div className="project-card border rounded-lg shadow-sm hover:shadow-lg hover:-translate-x-1 hover:-translate-y-1 transition">
                <div className="project-image border-b border-slate-900">
                    <img className="w-full fit-cover rounded-t-lg" src={projectImage} alt=""/>
                </div>
                <div className="p-3">
                    <div className="project-title text-lg font-semibold">{title}</div>
                    <div className="project-description text-slate-500">{description}</div>
                </div>
            </div>
        </Link>
    )
}
