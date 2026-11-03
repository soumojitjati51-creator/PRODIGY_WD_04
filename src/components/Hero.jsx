
import profileImage from "../assets/profile.png"
function Hero() {
    return (
        <section
            id="home"
            className="min-h-[85vh] px-6 md:px-12 flex items-center"
        >
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-center gap-12">

                {/* Left Content */}
                <div className="space-y-6">

                    <p className="text-fuchsia-400 font-medium animate-fade-up animation-delay-100">
                        ✦ Hello, I'm
                    </p>

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-up animation-delay-300">
                        Soumojit
                        <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-orange-300 bg-clip-text text-transparent">
                            Jati.
                        </span>
                    </h1>

                    <h2 className="text-xl md:text-2xl text-slate-300 animate-fade-up animation-delay-500">
                        Aspiring Software Developer
                    </h2>

                    <p className="text-slate-400 leading-relaxed max-w-lg animate-fade-up animation-delay-700">
                        I’m a Computer Science student passionate about
                        building modern web applications, solving problems,
                        and exploring the world of AI and technology.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4 pt-4">

                        <a
                            href="#projects"
                            className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-7 py-3 font-semibold hover:scale-105 transition-transform"
                        >
                            Explore My Work ↗
                        </a>

                        <a
                            href="#contact"
                            className="rounded-full border border-slate-600 px-7 py-3 font-semibold hover:border-fuchsia-400 hover:text-fuchsia-400 transition-colors"
                        >
                            Contact Me
                        </a>

                    </div>
                </div>

                {/* Right Content - Photo Placeholder */}
                <div className="flex justify-center">

                    <div className="relative w-72 h-72 md:w-96 md:h-96 shrink-0 aspect-square">

                        {/* Glow Effect */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 blur-2xl opacity-40"></div>


                        {/* Image Container */}
                        <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-fuchsia-400/50 
                        shadow-xl bg-slate-900 ">


                            {/* <span className="text-7xl">👨‍💻</span>

                                <p className="mt-4 text-slate-400">
                                    Your Photo Here
                                </p> */}
                            <img
                                src={profileImage}
                                alt="My profile photo"
                                className="w-full h-full object-cover"
                            />


                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default Hero
