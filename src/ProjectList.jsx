import React from 'react'
import { Link } from 'react-router-dom'

const ProjectList = () => {
    return (
        <div className="Project_list">
            <Link to="/passwordGenerator">
                <button
                    className="bg-slate-500 
              p-4 
              rounded-2xl 
              font-bold
              text-gray-50
              "
                >
                    Password Generator
                </button>
            </Link>
        </div>
    )
}

export default ProjectList