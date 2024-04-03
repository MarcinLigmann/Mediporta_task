import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
    return (
        // <div className="flex justify-around">
        //     <div>
        //         <a className="text-blue-500 hover:text-blue-700 font-bold underline"
        //             href="https://www.linkedin.com/in/marcin-ligmann-b11581209/"
        //             target="_blank"
        //             rel="noopener noreferrer">
        //             LinedIn
        //         </a>
        //     </div>

        //     <div>
        //         <a className="text-blue-500 hover:text-blue-700 font-bold underline"
        //             href="https://github.com/MarcinLigmann"
        //             target="_blank"
        //             rel="noopener noreferrer">
        //             Github
        //         </a>
        //     </div>
        // </div>
        <div className="flex justify-around">
            <a href="https://github.com/MarcinLigmann" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
                <FaGithub className="w-6 h-6 inline-block" />
            </a>
            <a href="https://www.linkedin.com/in/marcin-ligmann-b11581209" target="_blank" rel="noopener noreferrer" className="ml-4 text-gray-600 hover:text-blue-500 transition-colors duration-300">
                <FaLinkedin className="w-6 h-6 inline-block" />
            </a>
      </div>
    )
}