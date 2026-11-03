import React from 'react'

const Footer = () => {
    return (
        <footer className='border-t border-slate-800 px-6 md:px-12 py-8'>
            <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4'>
                {/*logo*/}
                <a href='#home' className='text-xl font-bold'>
                    <span className="text-white">soumojit</span>
                    <span className="text-fuchsia-400">.dev</span>
                </a>
                {/* Copyright */}
                <p className="text-slate-500 text-sm text-center">
                    © {new Date().getFullYear()} Soumojit Jati.
                    Built with React & Tailwind CSS.
                </p>
                {/* Back to Top */}
                <a
                    href="#home"
                    className="text-slate-400 hover:text-fuchsia-400 transition-colors text-sm"
                >
                    Back to top ↑
                </a>
            </div>
        </footer>
    )
}

export default Footer