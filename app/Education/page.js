export default function Education() {
    // Creating a data structure to make the component maintainable and scalable
    const educationData = [
        {
            id: 1,
            level: "10th Standard",
            school: "Sri Chaitanya Techno school",
            board: "CBSE Board",
            year: "2019-2020",
            percentage: "77%",
            subjects: ["Mathematics", "Science", "English", "Social Studies", "Hindi"],
            achievement: "School Topper in Mathematics"
        },
        {
            id: 2,
            level: "12th Standard",
            school: "Sri Chaitanya Techno school",
            board: "CBSE Board",
            year: "2021-2022",
            percentage: "69.9%",
            subjects: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
            achievement: "District Level Science Olympiad Winner"
        },
        {
            id: 3,
            level: "Bachelor's Degree",
            school: "SRM Institute of Science and Technology",
            board: "Computer Science Engineering",
            year: "2022-2026",
            percentage: "7.2 CGPA",
            subjects: ["Data Structures", "Algorithms", "Web Development", "Database Systems", "Machine Learning"],
            achievement: "Dean's List for Academic Excellence"
        }
    ];

    return(
        <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-4 sm:px-8 lg:px-24 py-12">
            <section id="education" className="w-full max-w-6xl">
                <h1 className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-lime-400 via-lime-500 to-emerald-400 bg-clip-text text-transparent">
                    Education
                </h1>

                {/* Education Timeline Container */}
                <div className="relative">
                    {/* Timeline Line - This creates the vertical line connecting all education entries */}
                    <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-lime-400 to-emerald-400"></div>

                    {/* Education Cards */}
                    <div className="space-y-12">
                        {educationData.map((education, index) => (
                            <div key={education.id} className={`relative flex items-center ${
                                // Alternating layout for larger screens - even indices on left, odd on right
                                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                            }`}>

                                {/* Timeline Dot - The circular indicator on the timeline */}
                                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-lime-400 rounded-full border-4 border-black z-10"></div>

                                {/* Content Card */}
                                <div className={`ml-12 md:ml-0 md:w-5/12 ${
                                    // Spacing adjustments for alternating layout
                                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                                }`}>
                                    <div className="bg-gray-900 border border-lime-400/30 rounded-2xl p-6 hover:border-lime-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-lime-400/10">

                                        {/* Header Section */}
                                        <div className="mb-4">
                                            <h3 className="text-2xl font-bold text-lime-400 mb-2">
                                                {education.level}
                                            </h3>
                                            <h4 className="text-lg font-semibold text-white mb-1">
                                                {education.school}
                                            </h4>
                                            <p className="text-gray-400 text-sm">
                                                {education.board} • {education.year}
                                            </p>
                                        </div>

                                        {/* Performance Section */}
                                        <div className="mb-4">
                                            <div className="flex items-center gap-4 mb-3">
                                                <span className="text-2xl font-bold text-emerald-400">
                                                    {education.percentage}
                                                </span>
                                                <div className="flex-1 bg-gray-700 rounded-full h-2">
                                                    {/* Progress bar showing academic performance */}
                                                    <div
                                                        className="bg-gradient-to-r from-lime-400 to-emerald-400 h-2 rounded-full"
                                                        style={{
                                                            // Converting percentage to width - this demonstrates dynamic styling
                                                            width: education.level.includes('Bachelor')
                                                                ? '85%' // CGPA representation
                                                                : education.percentage
                                                        }}
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Key Subjects */}
                                        <div className="mb-4">
                                            <h5 className="text-sm font-semibold text-gray-300 mb-2">
                                                Key Subjects:
                                            </h5>
                                            <div className="flex flex-wrap gap-2">
                                                {education.subjects.map((subject, subjectIndex) => (
                                                    <span
                                                        key={subjectIndex}
                                                        className="px-3 py-1 bg-lime-400/10 text-lime-400 rounded-full text-xs font-medium border border-lime-400/20"
                                                    >
                                                        {subject}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Achievement Badge */}
                                        <div className="mt-4 p-3 bg-gradient-to-r from-lime-400/10 to-emerald-400/10 rounded-lg border border-lime-400/20">
                                            <p className="text-sm text-lime-300 font-medium">
                                                🏆 {education.achievement}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Spacer for alternating layout on larger screens */}
                                <div className="hidden md:block md:w-5/12"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}