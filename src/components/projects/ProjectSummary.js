import React from 'react';

export default function ProjectSummary({ project }) {
    return (
        <div className="card project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <p>Posted by the pavan </p>
                <p className="grey-text">date</p>
            </div>
        </div>
    )
}
