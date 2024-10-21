import React from 'react';
import { Link } from 'react-router-dom';
import project from '../../assets/project.png'; // Import project images
import counter from '../../assets/counter.png';
import password from '../../assets/password.png'
import netflix from '../../assets/netflix.webp';


export default function Home() {
    // Define your projects here
    const projects = [
      
        {
            id:1,
            title: 'counter',
            description: 'A simple React counter app with increment, decrement, and reset functionality, styled using Tailwind CSS for a responsive and clean UI.',
            image: counter,

            link: '/counter'
        },
        {
            id: 2,
            title: 'Password Generator',
            description: 'A password generator app built using React, allowing users to generate secure passwords.',
            image: password,

            link: '/password-generator', // This points to the internal route
        }, 
        {
            id:3,
            title: 'Todo App',
            description: ' This project showcases my skills in web development using React and Tailwind CSS.',
            image: project,
            link: 'https://todo-conetext.vercel.app/',
        },
          {
            id:4,
            title: 'Netflix ',
            description: ' This project showcases my skills in web development using React and Tailwind CSS.',
            image: netflix,
            link: 'https://netflix-clone-tau-blue-97.vercel.app/',
        },

       
    ];

    return (
        <div className="mx-auto w-full max-w-7xl">
            {/* Hero Section */}
            <aside className="relative overflow-hidden bg-gray-100 text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-6xl animate-popIn">
                            SAIF ALI
                            <span className="block text-2xl sm:text-4xl mt-2 text-gray-700">I AM A WEB DEVELOPER</span>
                        </h2>

                        <Link
                            className="inline-flex items-center px-6 py-3 text-white font-medium bg-orange-700 rounded-lg hover:bg-orange-800 transition duration-300"
                            to="/resume"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                className="mr-2"
                            >
                                <path d="M16 0h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm-4 0h2l2 2h-4V0zm-6 4h4v2H6V4zm0 4h10v2H6V8zm0 4h10v2H6v-2zm0 4h10v2H6v-2zm-4 2h16v2H2v-2zm16 0H2v-2h16v2zm0-18H2v-2h16v2z" />
                            </svg>
                            View Resume
                        </Link>

                    </div>
                </div>
                <div className="absolute inset-0 w-full h-full pt-2">
                    <img className="w-80 mx-auto rounded-full sm:mr-[60%] sm:mt-11" src="https://avatars.githubusercontent.com/u/141383317?v=" alt="Profile" />
                </div>
            </aside>

            {/* Skills Section */}
            <section className="sm:mt-20 mt-10 text-center">
                <h2 className="text-4xl font-bold mb-6">Skills</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Express.js", "Node.js"].map((skill) => (
                        <span key={skill} className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full font-medium">
                            {skill}
                        </span>
                    ))}
                </div>
            </section>


            {/* Projects Section - Multiple Projects */}
            <section className="sm:mt-20 mt-10">
                <h2 className="text-4xl text-center font-bold mb-10">Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-6xl">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white shadow-md rounded-lg p-4 transition-all duration-300 ease-in-out transform hover:shadow-xl hover:scale-105 hover:bg-gray-100"
                        >
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover rounded-t-lg"
                                />
                            </a>
                            <div className="mt-4">
                                <h3 className="text-xl font-semibold">{project.title}</h3>
                                <p className="mt-2 text-gray-600">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            {/* Contact Section */}
            <section className="sm:mt-20 mt-10 bg-gray-100 py-12">
                <h2 className="text-4xl text-center font-bold mb-8">Contact Me</h2>
                <div className="max-w-3xl sm:mx-auto m-2">
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Your Name</label>
                            <input
                                type="text"
                                className="block w-full px-4 py-2 border rounded-md focus:ring focus:ring-orange-300 focus:outline-none"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Your Email</label>
                            <input
                                type="email"
                                className="block w-full px-4 py-2 border rounded-md focus:ring focus:ring-orange-300 focus:outline-none"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Your Message</label>
                            <textarea
                                className="block w-full px-4 py-2 border rounded-md focus:ring focus:ring-orange-300 focus:outline-none"
                                rows="4"
                                placeholder="Write your message"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="px-6 py-2 text-white bg-orange-700 rounded-lg hover:bg-orange-800 transition duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
}
