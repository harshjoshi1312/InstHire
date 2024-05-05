const SampleListing = [
  {
    name: "John Doe",
    role: "Software Engineer",
    description:
      "Experienced software engineer specializing in web development with a passion for creating efficient and scalable solutions.",
    location: "San Francisco",
    country: "United States",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Alice Smith",
    role: "Marketing Manager",
    description:
      "Creative marketing professional with a background in brand management and digital marketing strategies.",
    location: "London",
    country: "United Kingdom",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Mohammed Ahmed",
    role: "Data Scientist",
    description:
      "Analytical thinker with expertise in machine learning algorithms and data visualization techniques.",
    location: "Dubai",
    country: "United Arab Emirates",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Sophie Martin",
    role: "Graphic Designer",
    description:
      "Talented graphic designer with a flair for visual storytelling and branding design.",
    location: "Sydney",
    country: "Australia",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Luca Rossi",
    role: "Product Manager",
    description:
      "Innovative product manager skilled in product development lifecycle and market analysis.",
    location: "Milan",
    country: "Italy",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Emily Johnson",
    role: "Financial Analyst",
    description:
      "Detail-oriented financial analyst with expertise in financial modeling and risk management.",
    location: "New York",
    country: "United States",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Maximilian Fischer",
    role: "UX/UI Designer",
    description:
      "Passionate UX/UI designer focused on creating intuitive and user-friendly digital experiences.",
    location: "Berlin",
    country: "Germany",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Olivia Brown",
    role: "HR Manager",
    description:
      "Experienced HR manager with a proven track record in recruitment and employee relations.",
    location: "Toronto",
    country: "Canada",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Mateo Hernandez",
    role: "Sales Representative",
    description:
      "Dynamic sales representative with exceptional communication skills and a results-driven mindset.",
    location: "Madrid",
    country: "Spain",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Isabella Martinez",
    role: "Content Writer",
    description:
      "Creative and versatile content writer with a passion for storytelling and SEO optimization.",
    location: "Mexico City",
    country: "Mexico",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Ethan Taylor",
    role: "Project Manager",
    description:
      "Strategic project manager with a strong background in leading cross-functional teams and delivering projects on time and within budget.",
    location: "Los Angeles",
    country: "United States",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Ava Wilson",
    role: "Social Media Manager",
    description:
      "Social media expert with experience in developing and executing effective social media campaigns across various platforms.",
    location: "Paris",
    country: "France",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Liam Murphy",
    role: "Customer Support Specialist",
    description:
      "Dedicated customer support specialist committed to providing excellent service and resolving customer inquiries efficiently.",
    location: "Dublin",
    country: "Ireland",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Emma Clark",
    role: "Product Designer",
    description:
      "Innovative product designer with a focus on creating aesthetically pleasing and functional products.",
    location: "Stockholm",
    country: "Sweden",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Noah Anderson",
    role: "Business Analyst",
    description:
      "Analytical business analyst with expertise in market research and financial analysis.",
    location: "Singapore",
    country: "Singapore",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Mia Garcia",
    role: "UX Researcher",
    description:
      "User experience researcher with a passion for understanding user behavior and improving product usability.",
    location: "São Paulo",
    country: "Brazil",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

module.exports = { data: SampleListing };