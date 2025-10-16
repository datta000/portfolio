import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import SectionWrapper from "../components/SectionWrapper";
const API_URL = import.meta.env.VITE_API_URL;



const Home = () => {
    return (
        <SectionWrapper >
            <section className="max-h-full text-white flex flex-col items-center px-4 py-25">
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 text-center md:text-left">
                    <img
                        src="/images/avatar.jpeg"
                        alt="Profile"
                        className="w-40 h-40 rounded-full border-4 border-purple-500 mb-4"
                    />
                    <div className='text-left'>

                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Hey, I'm <span className="text-purple-400">Ritaban Datta </span> ✨
                        </h1>

                        <h2 className="text-xl md:text-3xl font-semibold text-purple-300 mb-4">
                            A Fullstack Web Developer
                        </h2>
                    </div>
                </div>

                <p className="max-w-3xl text-2xl text-left text-gray-400 mb-6">
                    A fullstack developer with solid foundations in design.
                    Passionate about crafting seamless user experiences. I thrive at the
                    intersection of creativity and functionality.
                </p>
                <div className='flex flex-row flex-wrap items-center gap-10 mt-10'>

                    <div className="flex gap-4  justify-center">
                        <a href="/contact" className="px-6 py-2 bg-purple-600 rounded-md hover:bg-purple-700 transition">Contact Me</a>
                        <a href="/work" className="px-6 py-2 border border-purple-500 rounded-md hover:bg-purple-700 transition">View Projects</a>
                    </div>
                    <div>|</div>
                    <div className="flex gap-4 text-2xl text-purple-300">
                        <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                    </div>
                </div>
            </section>

            <section className="pb-10 text-white mt-1">
                <div className="max-w-6xl mx-auto px-6">

                    <h2 className="text-3xl font-bold mb-4 text-center">Building Digital Experiences</h2>
                    <p className="text-center text-gray-400 mb-12">
                        I specialize in crafting fullstack applications that solve real-world problems.
                    </p>

                    <div className="grid gap-6 md:grid-cols-3">

                        <div className="bg-gray-900 p-6 rounded-lg shadow hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold mb-2">What I Can Do</h3>
                            <p className="text-gray-400 text-sm">
                                • Fullstack Web Development<br />
                                • API Integration<br />
                                • Database Schema Design<br />
                                • Project Deployment<br />
                            </p>
                        </div>

                        <div className="bg-gray-900 p-6 rounded-lg shadow hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold mb-2">Tools I Use</h3>
                            <p className="text-gray-400 text-sm">
                                <strong>Frontend:</strong> React, Tailwind CSS<br />
                                <strong>Backend:</strong> Node.js, Express, MongoDB<br />
                                <strong>Others:</strong> Git, Postman, VS Code<br />
                            </p>
                        </div>

                        <div className="bg-gray-900 p-6 rounded-lg shadow hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold mb-2">What I'm Learning</h3>
                            <p className="text-gray-400 text-sm">
                                • TypeScript & Strongly Typed APIs<br />
                                • Advanced Node.js Patterns<br />
                                • System Design Basics<br />
                                • AI/ML Integration in Fullstack Projects<br />
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </SectionWrapper>
    );
};

export default Home;
