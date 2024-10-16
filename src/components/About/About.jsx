
// eslint-disable-next-line no-unused-vars
import React from 'react'

export default function About() {
    return (
        <div className="bg-white py-16">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img className="rounded-[30%] sm:h-[50vh] "
                            src="https://avatars.githubusercontent.com/u/141383317?v="
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            SAIF - Crafting Dynamic Web Experiences with  React, Tailwind CSS, and Node.js:
                        </h2>
                        <p className="mt-6 text-gray-600">
                            I am a passionate web developer with expertise in <strong>React</strong>, <strong>Tailwind CSS</strong>, and <strong>Node.js</strong>. My journey in web development has been fueled by a
                            desire to create responsive and efficient web applications that enhance user experiences.
                        </p>
                        <p className="text-gray-700">
                            On the backend, I leverage <strong>Node.js</strong> to build robust and scalable server-side applications. I enjoy working with RESTful APIs and database integrations, ensuring that my applications are seamless and user-friendly from front to back.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
