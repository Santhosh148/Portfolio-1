import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
  category: string;
}

const ProjectsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Inter-Department Library Management System',
      description: 'Full Stack Web Application',
      longDescription: 'Dynamic library management website with login/signup, animated book search, and MySQL backend integration. Features include user authentication, book catalog management, search functionality with animations, and comprehensive database operations for managing library resources across multiple departments.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'PHP'],
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop',
      githubUrl: '#',
      liveUrl: '#',
      category: 'Full Stack',
    },
    {
      id: 2,
      title: 'Predictive Modeling – Firearm Sales in U.S.',
      description: 'Data Science & Machine Learning Project',
      longDescription: 'Predictive analytics model to forecast U.S. firearm sales using state-wise handgun & long gun adjustments, time-based features, and regression algorithms. Includes performance evaluation with R², RMSE, MAE, and feature importance analysis. The model analyzes historical sales data to identify trends and make accurate predictions for future firearm sales patterns.',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'NumPy', 'Matplotlib'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      githubUrl: '#',
      liveUrl: '#',
      category: 'Data Science',
    },
  ];

  const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />
      <motion.div
        className="relative w-full max-w-4xl bg-gradient-hero glass rounded-lg p-8 max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-destructive/20 text-destructive hover:bg-destructive/30 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <div className="flex gap-4">
              <a
                href={project.githubUrl}
                className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/80 transition-colors"
                data-cursor-hover
              >
                <Github className="w-4 h-4" />
                Code
              </a>
              <a
                href={project.liveUrl}
                className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
                data-cursor-hover
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            </div>
          </div>

          <div>
            <span className="inline-block px-3 py-1 text-sm bg-accent/20 text-accent rounded-full mb-4">
              {project.category}
            </span>
            <h3 className="text-3xl font-bold text-primary mb-4">{project.title}</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {project.longDescription}
            </p>
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-primary text-glow-primary mb-8 sm:mb-10 lg:mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Featured Projects
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  rotateY: 5, 
                  rotateX: 5,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                onClick={() => setSelectedProject(project)}
                data-cursor-hover
              >
                <div className="bg-gradient-hero rounded-lg overflow-hidden glass glow-soft group-hover:glow-primary transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="p-6">
                    <span className="inline-block px-2 py-1 text-xs bg-accent/20 text-accent rounded-full mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;