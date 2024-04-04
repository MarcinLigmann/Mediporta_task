import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="flex justify-around p-10">
            <label htmlFor="githubLink">
                <a id="github" href="https://github.com/MarcinLigmann" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
                    <FaGithub className="w-6 h-6 inline-block" />
                </a>
            </label>
            <label htmlFor="linkedin">
                <a id="linekdin" href="https://www.linkedin.com/in/marcin-ligmann-b11581209" target="_blank" rel="noopener noreferrer" className="ml-4 text-gray-600 hover:text-blue-500 transition-colors duration-300">
                    <FaLinkedin className="w-6 h-6 inline-block" />
                </a>
            </label>
      </div>
    )
}

export default Footer;