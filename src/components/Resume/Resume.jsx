import React from "react";
import { Link } from "react-router-dom"
const Resume = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-10 text-gray-900">
            {/* Container */}
            <div className="max-w-4xl mx-auto p-5 sm:p-10 bg-white rounded-lg shadow-lg">
                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-gray-800">Saif ali khan</h1>
                    <p className="text-lg text-gray-600"> Web Developer</p>
                    <div className="mt-4">
                        <a
                            href=""
                            className="text-blue-500 underline"
                        >
                            asaif5171@gmail.com
                       </a>{" "}
                        |{" "}
                        <a href="https://github.com/Saifalikhan19196" className="text-blue-500 underline">
                            GitHub
                        </a>{" "}
                        |{" "}
                        <a
                            href="https://linkedin.com"
                            className="text-blue-500 underline"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>

                {/* Objective */}
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Objective</h2>
                    <p className="text-gray-700">
                        Aspiring Web Developer with a strong foundation in front-end
                        development using Tailwind CSS and React. Eager to contribute to a
                        collaborative team, learn new technologies, and build user-friendly
                        web applications.
                    </p>
                </div>

                {/* Skills */}
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Skills</h2>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>
                            <strong>Languages</strong>: HTML5, CSS3, JavaScript (ES6+)
                        </li>
                        <li>
                            <strong>Front-End Framework</strong>: React.js
                        </li>
                        <li>
                            <strong>CSS Framework</strong>: Tailwind CSS
                        </li>
                        <li>
                            <strong>Version Control</strong>: Git, GitHub
                        </li>
                        <li>
                            <strong>Tools</strong>: Visual Studio Code, npm, Figma
                        </li>
                        <li>
                            <strong>Responsive Design</strong>: Flexbox, Grid, Media Queries
                        </li>
                        <li>
                            <strong>Basic Knowledge</strong>: Node.js, REST APIs, JSON, Express.js
                        </li>
                    </ul>
                </div>

                {/* Projects */}
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Projects</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-700">
                                Portfolio Website
                            </h3>
                            <p className="text-gray-600">
                                Developed a personal portfolio website to showcase projects using
                                React and Tailwind CSS.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-700">Todo App</h3>
                            <p className="text-gray-600">
                                This project showcases my skills in web development using React and Tailwind CSS
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-700">Password Generator</h3>
                            <p className="text-gray-600">
                                A password generator app built using React, allowing users to generate secure passwords.
                            </p>
                        </div>


                        <div>
                            <h3 className="text-xl font-semibold text-gray-700">
                                Counter App
                            </h3>
                            <p className="text-gray-600">
                                Created a task Counter app with React and Tailwind CSS for styling.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Education */}
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Education</h2>
                    <p className="text-gray-700">
                        <strong>Bachelor of Technology in Computer Science</strong>, [G.C.R.G. Group of Institutions, Lucknow] | [2023]
                    </p>
                    <p className="text-gray-600">
                        Relevant Coursework: Web Development, Data Structures, Algorithms,
                        Database Management
                    </p>
                </div>

                {/* Certifications */}
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                        Certifications
                    </h2>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>React � The Complete Guide (Udemy)</li>
                        <li>Modern Web Design with Tailwind CSS (Coursera)</li>
                    </ul>
                </div>

                {/* Personal Traits */}
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                        Personal Traits
                    </h2>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>Quick learner with a strong interest in modern web technologies.</li>
                        <li>Highly motivated to collaborate in team environments.</li>
                        <li>Focused on creating clean, maintainable code.</li>
                    </ul>
                </div>

                {/* References */}
                <div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">References</h2>
                    <p className="text-gray-700">Available upon request.</p>
                </div>
            </div>
        </div>
    );
};

export default Resume;
