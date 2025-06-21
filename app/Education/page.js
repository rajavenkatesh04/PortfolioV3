export default function Education() {
    // Reorganizing data in descending chronological order (most recent first)
    // This prioritizes your current education and shows progression backward
    const educationData = [
        {
            id: 1,
            level: "Bachelor's Degree",
            school: "SRM Institute of Science and Technology",
            board: "B.Tech Computer Science Engineering",
            year: "2022-2026", // Year now appears next to institution
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
        <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-4 sm:px-8 lg:px-24 py-12">
            <section id="education" className="w-full max-w-4xl">
                {/* Keeping your gradient heading but with cleaner typography */}
                <h1 className="mb-2 text-4xl sm:text-5xl font-bold text-center mb-10 bg-gradient-to-r from-lime-400 via-lime-500 to-emerald-400 bg-clip-text text-transparent">
                    Education
                </h1>

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
    );
}