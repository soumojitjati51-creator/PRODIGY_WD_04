import React from 'react'

const skillGroups = [
    {
        title: "Programming Languages",
        color: "purple",
        skills: ["C", "Java", "Python", "JavaScript"],
    },
    {
        title: "Frontend Development",
        color: "pink",
        skills: ["HTML", "CSS", "React", "Tailwind CSS"],
    },
    {
        title: "Backend Development",
        color: "cyan",
        skills: ["Node.js", "Express.js", "REST APIs"],
    },
    {
        title: "Tools & Technologies",
        color: "orange",
        skills: ["Git", "GitHub", "MongoDB", "Vite"],
    },
]

const colorStyles = {
    purple: "border-purple-500/30 bg-purple-500/10 text-purple-300",
    pink: "border-pink-500/30 bg-pink-500/10 text-pink-300",
    cyan: "border-cyan-500/30 bg-cyan-500/10 text-cyan-300",
    orange: "border-orange-500/30 bg-orange-500/10 text-orange-300",
}
const Skills = () => {
    return (
        <section
            id="skills"
            className="px-6 md:px-12 py-24"
        >
            <div className="max-w-7xl mx-auto">

                {/* Section Heading */}
                <div className="mb-14">
                    <p className="text-fuchsia-400 font-medium mb-3">
                        ✦ What I work with
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold">
                        My <span className="text-fuchsia-400">Skills.</span>
                    </h2>

                    <p className="text-slate-400 mt-4 max-w-xl">
                        Technologies and tools I use to turn ideas
                        into functional digital experiences.
                    </p>
                </div>

                {/* Skill Categories */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {skillGroups.map((group) => (
                        <div
                            key={group.title}
                            className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 md:p-8 hover:border-slate-600 transition-colors"
                        >

                            <h3 className="text-xl font-semibold mb-6">
                                {group.title}
                            </h3>

                            <div className="flex flex-wrap gap-3">

                                {group.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className={`rounded-full border px-4 py-2 text-sm font-medium ${colorStyles[group.color]}`}
                                    >
                                        {skill}
                                    </span>
                                ))}

                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default Skills