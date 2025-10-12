import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/projectCard.jsx';
import SectionWrapper from '../components/SectionWrapper.jsx';
const API_URL = import.meta.env.VITE_API_URL;

const Work = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${API_URL}/projects`)
            .then(res => res.json())
            .then(data => {
                // Map MongoDB _id to id for React key
                const formatted = data.map(project => ({
                    id: project.id || project._id,
                    title: project.title,
                    description: project.description,
                    image: project.image,
                    link: project.link || "#", // match ProjectCard prop
                    technologies: project.technologies || []
                }));
                setProjects(formatted);
                setLoading(false); // stop loading
            })
            .catch(err => {
                console.error("Error fetching projects:", err);
                setLoading(false); // stop loading even if error
            });
    }, []);

    return (
        <SectionWrapper>
            <section className="min-h-screen py-16 px-4 text-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-2">Projects</h2>
                    <p className="text-purple-300 mb-10">
                        Here you will find a selection of projects I have worked on.
                    </p>

                    {loading ? (
                        <p className="text-gray-400">Loading projects...</p>
                    ) : projects.length === 0 ? (
                        <p className="text-gray-400">No projects available yet.</p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects.map((project) => (
                                <ProjectCard key={project.id} {...project} />
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </SectionWrapper>
    );
};

export default Work;
