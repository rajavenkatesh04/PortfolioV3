// app/projects/projectData.js
export const projects = [
    {
        id: 0, // Adding unique identifier for routing
        title: "Disasterly",
        image: "/disasterly.jpeg",
        imageAlt: "E-commerce platform screenshot",
        description: "A full-stack solution that lets you connect victims, volunteers and organizations to help each other under a single roof.",
        liveLink: "https://disasterly.vercel.app",
        githubLink: "https://github.com/rajavenkatesh04/disasterly",

        // Extended data for detailed project pages
        technologies: ["Next.js", "React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
        projectType: "Full Stack Web Application",
        duration: "3 months",
        teamSize: "Solo Project",

        // Detailed project information
        overview: "This e-commerce platform was built to demonstrate full-stack development capabilities, integrating modern web technologies with secure payment processing and comprehensive user management. The project showcases both frontend user experience design and backend system architecture.",

        problemStatement: "Small businesses often struggle with expensive e-commerce solutions that require technical expertise to maintain. This project aimed to create an intuitive, cost-effective platform that business owners could easily manage while providing customers with a smooth shopping experience.",

        challenges: [
            {
                challenge: "Implementing secure payment processing",
                solution: "Integrated Stripe API with proper error handling and webhook validation to ensure transaction security and reliability. Implemented proper PCI compliance measures and encrypted sensitive data."
            },
            {
                challenge: "Managing complex state across shopping cart and user sessions",
                solution: "Utilized React Context API combined with localStorage for persistent cart state, ensuring users don't lose their selections during navigation or brief disconnections."
            },
            {
                challenge: "Optimizing database queries for product filtering and search",
                solution: "Implemented MongoDB indexing strategies and aggregation pipelines to handle complex product queries efficiently, reducing page load times by 60%."
            }
        ],

        keyFeatures: [
            "User authentication and profile management",
            "Real-time inventory tracking",
            "Advanced product filtering and search",
            "Secure payment processing with Stripe",
            "Admin dashboard for order and product management",
            "Responsive design for mobile and desktop"
        ],

        lessonsLearned: "This project taught me the importance of planning database schema early in development and the value of implementing proper error handling throughout the application. I also learned how to balance feature complexity with user experience simplicity.",

        futureImprovements: [
            "Implement real-time chat support",
            "Add recommendation engine based on user behavior",
            "Integrate with multiple payment providers",
            "Add comprehensive analytics dashboard"
        ],

        // Additional images for detailed view
        additionalImages: [
            "/images/ecommerce-dashboard.jpg",
            "/images/ecommerce-mobile.jpg",
            "/images/ecommerce-admin.jpg"
        ]
    },

    {
        id: 1, // Slug-style IDs work too
        title: "Hostel-X",
        image: "/hostel-x.jpeg",
        imageAlt: "Task management application interface",
        description: "A collaborative task management application with real-time updates and team collaboration features.",
        liveLink: "https://hostel-livid.vercel.app",
        githubLink: "https://github.com/rajavenkatesh04/hostel",

        technologies: ["React", "Firebase", "Material-UI", "Node.js"],
        projectType: "Web Application",
        duration: "2 months",
        teamSize: "Team of 3",

        // Include all the same detailed fields as above
        overview: "A comprehensive task management solution designed for small to medium teams...",
        // ... rest of the detailed information
    }
    // Add more projects following the same structure
];

// Helper function to find project by ID
export function getProjectById(id) {
    // Handle both numeric and string IDs
    return projects.find(project => project.id.toString() === id.toString());
}

// Helper function to get all project IDs (useful for static generation)
export function getAllProjectIds() {
    return projects.map(project => ({
        params: {
            id: project.id.toString()
        }
    }));
}