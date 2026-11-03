import React from 'react'

const About = () => {
    return (
        <section
            id="about"
            className="px-6 md:px-12 py-24"
        >
            <div className="max-w-7xl mx-auto">

                {/* Section Heading */}
                <div className="mb-14">
                    <p className="text-fuchsia-400 font-medium mb-3">
                        ✦ Get to know me
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold">
                        About <span className="text-fuchsia-400">Me.</span>
                    </h2>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* Introduction */}
                    <div className="space-y-6">

                        <h3 className="text-2xl md:text-3xl font-semibold">
                            Turning ideas into
                            <span className="text-purple-400"> digital experiences.</span>
                        </h3>

                        <p className="text-slate-400 leading-relaxed">
                            I'm a Computer Science and Engineering student
                            who enjoys exploring technology and building
                            meaningful digital solutions.
                        </p>

                        <p className="text-slate-400 leading-relaxed">
                            My journey in development has led me to explore
                            frontend technologies, backend development,
                            and problem-solving through Data Structures
                            and Algorithms.
                        </p>

                        <p className="text-slate-400 leading-relaxed">
                            I believe that learning becomes meaningful
                            when concepts are applied to real projects.
                            I'm constantly experimenting, improving my
                            skills, and looking for opportunities to
                            build something useful.
                        </p>

                    </div>

                    {/* Information Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                        {/* Education Card */}
                        <div className="rounded-2xl border border-purple-500/20 bg-purple-500/10 p-6 hover:border-purple-400/50 transition-colors">

                            <span className="text-3xl">🎓</span>

                            <h3 className="text-lg font-semibold mt-4">
                                Education
                            </h3>

                            <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                                B.Tech in Computer Science & Engineering
                            </p>

                            <p className="text-purple-300 text-sm mt-2">
                                St. Thomas' College of Engineering & Technology
                            </p>

                        </div>

                        {/* Development Card */}
                        <div className="rounded-2xl border border-pink-500/20 bg-pink-500/10 p-6 hover:border-pink-400/50 transition-colors">

                            <span className="text-3xl">💻</span>

                            <h3 className="text-lg font-semibold mt-4">
                                Development
                            </h3>

                            <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                                Building responsive web applications
                                using React and modern web technologies.
                            </p>

                        </div>

                        {/* Problem Solving Card */}
                        <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-6 hover:border-cyan-400/50 transition-colors">

                            <span className="text-3xl">🧩</span>

                            <h3 className="text-lg font-semibold mt-4">
                                Problem Solving
                            </h3>

                            <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                                Strengthening algorithmic thinking
                                through Data Structures and Algorithms.
                            </p>

                        </div>

                        {/* Learning Card */}
                        <div className="rounded-2xl border border-orange-500/20 bg-orange-500/10 p-6 hover:border-orange-400/50 transition-colors">

                            <span className="text-3xl">🚀</span>

                            <h3 className="text-lg font-semibold mt-4">
                                Always Learning
                            </h3>

                            <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                                Exploring backend development,
                                databases, and AI/ML.
                            </p>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default About