export default function Education() {
    const educationData = [
        {
            id: 1,
            level: "Bachelor's Degree",
            school: "SRM Institute of Science and Technology",
            board: "B.Tech Computer Science Engineering",
            year: "2022-2026",
            percentage: "7.2 CGPA",
            subjects: ["Data Structures", "Algorithms", "Web Development", "Database Systems", "Machine Learning"],
            achievement: "Dean's List for Academic Excellence"
        },
        {
            id: 2,
            level: "12th Standard",
            school: "Sri Chaitanya Techno School",
            board: "CBSE Board",
            year: "2021-2022",
            percentage: "69.9%",
            subjects: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
            achievement: "District Level Science Olympiad Winner"
        },
        {
            id: 3,
            level: "10th Standard",
            school: "Sri Chaitanya Techno School",
            board: "CBSE Board",
            year: "2019-2020",
            percentage: "77%",
            subjects: ["Mathematics", "Science", "English", "Social Studies", "Hindi"],
            achievement: "School Topper in Mathematics"
        }
    ];

    return (
        <div >
            <div className={`hidden md:block`}>
                <div
                    className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-4 sm:px-8 lg:px-24 py-12 ">
                    <section id="education" className="w-full max-w-4xl ">

                        {/*Clean heading*/}
                        <div className="text-center mb-16 sm:mb-20">
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-wide">
                                Education
                            </h1>
                            <div
                                className="w-16 sm:w-20 h-0.5 bg-gradient-to-r from-lime-400 to-emerald-400 mx-auto mt-4 sm:mt-6"></div>
                        </div>

                        <div className="space-y-8">
                            {educationData.map((education) => (
                                <div key={education.id} className="border-b border-lime-400/20 pb-8 last:border-b-0">
                                    {/* Main content layout with swapped positioning */}
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">

                                        {/* Left side: Institution details with year integrated */}
                                        <div className="flex-1">
                                            <h3 className="text-xl font-medium text-lime-400 mb-1">
                                                {education.level}
                                            </h3>
                                            {/* Year now appears directly next to school name as requested */}
                                            <p className="text-white mb-1">
                                                {education.school} • {education.year}
                                            </p>
                                            <p className="text-sm text-gray-400">
                                                {education.board}
                                            </p>
                                        </div>

                                        {/* Right side: Results/Performance (swapped from original position) */}
                                        <div className="text-right md:text-right mt-2 md:mt-0">
                                            <p className="text-lg font-medium text-emerald-400">
                                                {education.percentage}
                                            </p>
                                        </div>
                                    </div>

                                    {/*/!* Subjects section - keeping minimal approach *!/*/}
                                    {/*<div className="mt-4">*/}
                                    {/*    <div className="flex flex-wrap gap-2">*/}
                                    {/*        {education.subjects.map((subject, subjectIndex) => (*/}
                                    {/*            <span*/}
                                    {/*                key={subjectIndex}*/}
                                    {/*                className="px-3 py-1 bg-lime-400/10 text-lime-400 rounded-full text-xs font-medium border border-lime-400/20"*/}
                                    {/*            >*/}
                                    {/*                {subject}*/}
                                    {/*            </span>*/}
                                    {/*        ))}*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>



            <div className={`md:hidden`}>
                <div
                    className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-6 sm:px-12 lg:px-32 py-16 sm:py-20">
                    <section id="education" className="w-full max-w-5xl">
                        {/* Clean, minimal heading */}
                        <div className="text-center mb-16 sm:mb-20">
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-wide">
                                Education
                            </h1>
                            <div
                                className="w-16 sm:w-20 h-0.5 bg-gradient-to-r from-lime-400 to-emerald-400 mx-auto mt-4 sm:mt-6"></div>
                        </div>

                        <div className="space-y-12 sm:space-y-16">
                            {educationData.map((education, index) => (
                                <div key={education.id} className="group">
                                    {/* Clean card design */}
                                    <div
                                        className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/50 rounded-xl p-6 sm:p-8 hover:border-lime-400/30 transition-all duration-300">

                                        {/* Header row */}
                                        <div
                                            className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                                            <div className="flex-1">
                                                <h3 className="text-lg sm:text-xl font-medium text-lime-400 mb-1 sm:mb-2">
                                                    {education.level}
                                                </h3>
                                                <p className="text-sm sm:text-base text-zinc-300 font-light">
                                                    {education.school}
                                                </p>
                                            </div>

                                            <div className="text-left sm:text-right">
                                                <p className="text-base sm:text-lg font-medium text-emerald-400 mb-1">
                                                    {education.percentage}
                                                </p>
                                                <p className="text-xs sm:text-sm text-zinc-500 font-light">
                                                    {education.year}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Subtle divider */}
                                        <div
                                            className="w-full h-px bg-gradient-to-r from-transparent via-zinc-700/50 to-transparent mb-4 sm:mb-5"></div>

                                        {/* Board info */}
                                        <div className="text-xs sm:text-sm text-zinc-400 font-light">
                                            {education.board}
                                        </div>
                                    </div>

                                    {/* Connecting line between cards (except last) */}
                                    {index < educationData.length - 1 && (
                                        <div className="flex justify-center my-6 sm:my-8">
                                            <div
                                                className="w-px h-8 sm:h-12 bg-gradient-to-b from-zinc-700/50 to-transparent"></div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}