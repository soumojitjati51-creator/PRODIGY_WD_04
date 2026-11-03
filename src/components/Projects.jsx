import React from 'react'

const projects = [
    {
        title: "CampusLostFound",
        category: "Full-Stack Web Application",
        description:
            "A platform that helps students report lost items and discover found belongings within their campus.",
        technologies: ["React", "Node.js", "Express", "MongoDB"],
        color: "purple",
        icon: "🔍",
        github: "https://github.com/soumojitjati51-creator/BackendLearning/tree/main/CampusLostFound",
        demo: "https://campuslostandfoundsj.netlify.app/",
    },
    {
        title: "Tic-Tac-Toe",
        category: "Interactive Web Game",
        description:
            "A responsive Tic-Tac-Toe game with interactive gameplay, win detection, and dynamic board updates.",
        technologies: ["React", "JavaScript", "CSS"],
        color: "pink",
        icon: "🎮",
        github: "https://github.com/soumojitjati51-creator/PRODIGY_WD_03",
        demo: "https://sj-tac-toe.netlify.app/",
    },
    {
        title: "Stopwatch",
        category: "Time Tracking Application",
        description:
            "A stopwatch application featuring start, pause, reset, and lap tracking functionality.",
        technologies: ["React", "JavaScript", "CSS"],
        color: "cyan",
        icon: "⏱️",
        github: "https://github.com/soumojitjati51-creator/PRODIGY_WD_02",
        demo: "https://sjstopwatch.netlify.app/",
    },
    {
        title: "Calculator",
        category: "Web Application",
        description:
            "A calculator web application built to practice JavaScript fundamentals, user interactions, and responsive interface design.",
        technologies: ["HTML", "CSS", "JavaScript"],
        color: "orange",
        icon: "🧮",
        github: "https://github.com/soumojitjati51-creator/Calculator-Project",
        demo: "https://scientific-commercial-calculator.netlify.app/",
    }
]

const projectColors = {
    purple: "from-purple-500/20 to-indigo-500/10 border-purple-500/30",
    pink: "from-pink-500/20 to-rose-500/10 border-pink-500/30",
    cyan: "from-cyan-500/20 to-blue-500/10 border-cyan-500/30",
}

const Projects = () => {
    return (
        <section
            id="projects"
            className="px-6 md:px-12 py-24"
        >
            <div className="max-w-7xl mx-auto">

                {/* Section Heading */}
                <div className="mb-14">
                    <p className="text-fuchsia-400 font-medium mb-3">
                        ✦ What I've built
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold">
                        Featured <span className="text-fuchsia-400">Projects.</span>
                    </h2>

                    <p className="text-slate-400 mt-4 max-w-xl">
                        A collection of projects where I explore ideas,
                        solve problems, and put my skills into practice.
                    </p>
                </div>

                {/* Project Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {projects.map((project) => (
                        <article
                            key={project.title}
                            className={`rounded-2xl border bg-gradient-to-br ${projectColors[project.color]} p-6 flex flex-col hover:-translate-y-2 transition-transform duration-300`}
                        >

                            {/* Project Icon */}
                            <div className="flex items-center justify-between mb-6">

                                <div className="w-14 h-14 rounded-xl bg-slate-950/60 flex items-center justify-center text-3xl">
                                    {project.icon}
                                </div>

                                <span className="text-slate-400 text-sm">
                                    {project.category}
                                </span>

                            </div>

                            {/* Project Details */}
                            <h3 className="text-2xl font-bold mb-3">
                                {project.title}
                            </h3>

                            <p className="text-slate-300 text-sm leading-relaxed">
                                {project.description}
                            </p>

                            {/* Technology Badges */}
                            <div className="flex flex-wrap gap-2 mt-6">

                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-full bg-slate-950/60 px-3 py-1.5 text-xs text-slate-300"
                                    >
                                        {tech}
                                    </span>
                                ))}

                            </div>

                            {/* Project Links */}
                            <div className="flex gap-4 mt-auto pt-8">

                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-sm font-medium text-white hover:text-fuchsia-400 transition-colors"
                                >
                                    GitHub ↗
                                </a>

                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-sm font-medium text-white hover:text-fuchsia-400 transition-colors"
                                >
                                    Live Demo ↗
                                </a>

                            </div>

                        </article>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default Projects