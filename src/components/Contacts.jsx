import React from 'react'

const Contacts = () => {
    return (
        <section id='contact' className='px-6 md:px-12 py-24'>
            <div className="max-w-5xl mx-auto">

                {/* Contact Card */}
                <div className="relative overflow-hidden rounded-3xl border border-purple-500/30 bg-gradient-to-br from-purple-500/10 via-slate-900 to-pink-500/10 p-8 md:p-16 text-center">

                    {/* Decorative Glow */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-purple-500/20 blur-3xl"></div>

                    <div className="relative">

                        <p className="text-fuchsia-400 font-medium mb-4">
                            ✦ Let's connect
                        </p>

                        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                            Have a project
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-300">
                                in mind?
                            </span>
                        </h2>

                        <p className="text-slate-400 max-w-xl mx-auto mt-6 leading-relaxed">
                            I'm always interested in connecting with
                            developers, exploring new opportunities,
                            and working on meaningful projects.
                            Feel free to reach out!
                        </p>

                        {/* Email Button */}
                        <a
                            href="mailto:soumojitjati51@gmail.com"
                            className="inline-block mt-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 font-semibold text-white hover:scale-105 transition-transform duration-300"
                        >
                            Say Hello ✉
                        </a>
                        {/*Phone no.*/}
                        <div>
                            <p href="tel:+918100479421" className="text-slate-400 max-w-xl mx-auto mt-6 leading-relaxed ">📞 Call me:</p>
                            <a className="text-slate-400 max-w-xl mx-auto mt-2 leading-relaxed hover:text-blue-500 hover:cursor-pointer transition-colors">+91 81004 79421</a>
                        </div>
                        
                        {/* Social Links */}
                        <div className="flex justify-center flex-wrap gap-6 mt-10">

                            <a
                                href="https://github.com/soumojitjati51-creator"
                                target="_blank"
                                rel="noreferrer"
                                className="text-slate-300 hover:text-fuchsia-400 transition-colors"
                            >
                                GitHub ↗
                            </a>

                            <a
                                href="https://www.linkedin.com/in/soumojit-jati-9606b3363"
                                target="_blank"
                                rel="noreferrer"
                                className="text-slate-300 hover:text-fuchsia-400 transition-colors"
                            >
                                LinkedIn ↗
                            </a>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Contacts