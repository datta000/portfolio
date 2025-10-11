import React from 'react';

const ProjectCard = ({ title, description, image, technologies, link }) => {
    return (
        <a
            href={link}
            rel="noopener noreferrer"
            className="group relative rounded-lg overflow-hidden shadow-lg"
        >

            <img
                src={image}
                alt={title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/30 bg-opacity-70 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white text-xl font-semibold mb-1">{title}</h3>
                <p className="text-white text-sm mb-2">{description}</p>

                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="bg-purple-600 text-white text-xs px-2 py-1 rounded"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </a>
    );
};

export default ProjectCard;
