const projects = [
    {
      title: "Portfolio Website",
      description: "Built with Next.js & TailwindCSS",
      link: "#",
      image: "/portfolio.png",
    },
    {
      title: "E-Commerce Website",
      description: "React.js, Firebase, Stripe Payments",
      link: "#",
      image: "/ecommerce.png",
    },
    {
      title: "AI Video Editing Tool",
      description: "Python & OpenCV for automatic edits",
      link: "#",
      image: "/ai-video.png",
    },
  ];
  
  export default function Projects() {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold">My Projects</h1>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="p-6 bg-gray-800 rounded-lg">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg" />
              <h2 className="text-2xl font-semibold mt-4">{project.title}</h2>
              <p className="text-gray-300 mt-2">{project.description}</p>
              <a href={project.link} className="text-blue-400 hover:underline mt-4 block">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }