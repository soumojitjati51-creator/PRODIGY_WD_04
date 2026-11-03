
const achievements = [
  {
    title: "Web Development Intern",
    organization: "Prodigy InfoTech",
    period: "October – November 2026",
    description:
      "Selected for a Web Development Internship, working on practical frontend development tasks and building interactive web applications.",
    icon: "💼",
    color: "purple",
  },
  {
    title: "500+ LeetCode Problems",
    organization: "Problem Solving & DSA",
    period: "Ongoing",
    description:
      "Practiced 500+ coding problems, strengthening algorithmic thinking and problem-solving skills.",
    icon: "🧩",
    color: "pink",
  },
  {
    title: "Google Cloud Learning",
    organization: "Google Cloud Study Jam",
    period: "Learning & Development",
    description:
      "Completed learning activities and earned certificates and badges through Google Cloud learning programs.",
    icon: "☁️",
    color: "cyan",
  },
  {
    title: "Technical Community",
    organization: "GDG / Developer Activities",
    period: "Ongoing",
    description:
      "Engaged in developer communities and technical activities to learn, collaborate, and grow.",
    icon: "🌐",
    color: "orange",
  },
]

const achievementColors = {
  purple: "border-purple-500/30 bg-purple-500/10",
  pink: "border-pink-500/30 bg-pink-500/10",
  cyan: "border-cyan-500/30 bg-cyan-500/10",
  orange: "border-orange-500/30 bg-orange-500/10",
}

function Achievements() {
  return (
    <section
      id="achievements"
      className="px-6 md:px-12 py-24"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-14">
          <p className="text-fuchsia-400 font-medium mb-3">
            ✦ My journey so far
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Achievements &
            <span className="text-fuchsia-400"> Experience.</span>
          </h2>

          <p className="text-slate-400 mt-4 max-w-xl">
            A glimpse of my learning journey, practical
            experience, and milestones along the way.
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {achievements.map((item) => (
            <article
              key={item.title}
              className={`rounded-2xl border ${achievementColors[item.color]} p-6 md:p-8 hover:-translate-y-1 transition-transform duration-300`}
            >

              <div className="flex items-start justify-between gap-4">

                <div>
                  <span className="text-3xl">
                    {item.icon}
                  </span>

                  <h3 className="text-xl font-bold mt-4">
                    {item.title}
                  </h3>

                  <p className="text-fuchsia-300 text-sm mt-2">
                    {item.organization}
                  </p>
                </div>

                <span className="text-xs text-slate-400 text-right">
                  {item.period}
                </span>

              </div>

              <p className="text-slate-400 leading-relaxed text-sm mt-5">
                {item.description}
              </p>

            </article>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Achievements
