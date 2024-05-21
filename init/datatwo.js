const TwoListing = [
  {
    name: "John Smith",
    role: "Data Scientist",
    stipend: "$1500/month",
    apply_date: "2024-06-15",
    location: "New York, USA",
    description:
      "Experienced data scientist specializing in machine learning and big data analytics.",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Emily Johnson",
    role: "Marketing Manager",
    stipend: "$2000/month",
    apply_date: "2024-06-20",
    location: "San Francisco, USA",
    description:
      "Skilled marketing manager with expertise in digital marketing strategies.",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Michael Williams",
    role: "Software Engineer",
    stipend: "$1800/month",
    apply_date: "2024-06-25",
    location: "Austin, USA",
    description:
      "Talented software engineer with a background in developing scalable web applications.",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Sarah Brown",
    role: "Product Manager",
    stipend: "$2200/month",
    apply_date: "2024-07-01",
    location: "Seattle, USA",
    description:
      "Experienced product manager with a focus on agile development and user-centric design.",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "David Jones",
    role: "Financial Analyst",
    stipend: "$1600/month",
    apply_date: "2024-07-05",
    location: "Chicago, USA",
    description:
      "Analytical financial analyst with expertise in market research and financial modeling.",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Laura Wilson",
    role: "UX Designer",
    stipend: "$1700/month",
    apply_date: "2024-07-10",
    location: "Boston, USA",
    description:
      "Creative UX designer with a passion for improving user experience through innovative design.",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "James Martinez",
    role: "Network Engineer",
    stipend: "$1900/month",
    apply_date: "2024-07-15",
    location: "Miami, USA",
    description:
      "Dedicated network engineer with experience in designing and maintaining enterprise networks.",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Maria Rodriguez",
    role: "HR Specialist",
    stipend: "$1400/month",
    apply_date: "2024-07-20",
    location: "Los Angeles, USA",
    description:
      "HR specialist with a strong background in recruitment and employee relations.",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Daniel Lee",
    role: "Business Analyst",
    stipend: "$1600/month",
    apply_date: "2024-07-25",
    location: "Denver, USA",
    description:
      "Analytical business analyst with expertise in market research and financial analysis.",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Olivia Gonzalez",
    role: "Content Writer",
    stipend: "$1300/month",
    apply_date: "2024-07-30",
    location: "San Diego, USA",
    description:
      "Creative content writer with a knack for crafting engaging and informative articles.",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Joshua Hernandez",
    role: "Data Analyst",
    stipend: "$1500/month",
    apply_date: "2024-08-05",
    location: "Houston, USA",
    description:
      "Detail-oriented data analyst with strong analytical and problem-solving skills.",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Sophia Davis",
    role: "Project Manager",
    stipend: "$2100/month",
    apply_date: "2024-08-10",
    location: "Dallas, USA",
    description:
      "Organized project manager with a track record of successfully leading complex projects.",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
module.exports = { data: TwoListing };
