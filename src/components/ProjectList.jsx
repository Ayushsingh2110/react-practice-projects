import React from 'react'
import { Link } from 'react-router-dom'
import { projectData } from '../projectData'

const ProjectList = () => {
    return (
        <div className="Project_list">
            {
                projectData.map((project, index) => (
                    <Link key={index} to={"/"+project.path}>
                        <button
                            className="bg-slate-500 p-4 rounded-2xl font-bold text-gray-50"
                        >
                            {project.name}
                        </button>
                    </Link>
                ))
            }

        </div>
    )
}

export default ProjectList