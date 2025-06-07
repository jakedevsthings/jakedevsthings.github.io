import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Zap,
  Shield,
  Database,
  Cloud,
  Instagram,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { portfolioData } from "../data/portfolio";
import { useState } from "react";

const Projects = () => {
  const [expandedProjects, setExpandedProjects] = useState({});

  const toggleProject = (index) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  };
  const getProjectIcon = (title) => {
    if (title.toLowerCase().includes("instagram"))
      return <Instagram className="text-primary" size={24} />;
    if (title.toLowerCase().includes("security"))
      return <Shield className="text-primary" size={24} />;
    if (
      title.toLowerCase().includes("dashboard") ||
      title.toLowerCase().includes("analytics")
    )
      return <Database className="text-primary" size={24} />;
    if (
      title.toLowerCase().includes("automation") ||
      title.toLowerCase().includes("ci/cd")
    )
      return <Zap className="text-primary" size={24} />;
    if (
      title.toLowerCase().includes("cloud") ||
      title.toLowerCase().includes("aws")
    )
      return <Cloud className="text-primary" size={24} />;
    return <Zap className="text-primary" size={24} />;
  };
  const getGithubDisplay = (project) => {
    switch (project.githubStatus) {
      case "link":
        return (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Github size={16} />
            View Code
          </a>
        );
      case "to-be-created":
        return (
          <span className="flex items-center gap-2 text-sm text-muted-foreground opacity-60">
            <Github size={16} />
            Repo Coming Soon
          </span>
        );
      case "private":
        return (
          <span className="flex items-center gap-2 text-sm text-muted-foreground opacity-60">
            <Github size={16} />
            Private Repo
          </span>
        );
      default:
        return null; // Don't show anything if githubStatus is not defined
    }
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      active: {
        label: "Active",
        className: "bg-green-500/20 text-green-400 border-green-500/30",
      },
      completed: {
        label: "Completed",
        className: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      },
      "in-progress": {
        label: "In Progress",
        className: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      },
    };

    const config = statusConfig[status] || statusConfig.completed;
    return (
      <span
        className={`px-2 py-1 text-xs rounded-md border ${config.className}`}
      >
        {config.label}
      </span>
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="section-container py-16">
      <motion.div {...fadeInUp}>
        <h1 className="text-4xl font-bold mb-4">Projects</h1>{" "}
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
          A collection of projects and systems I've built, including personal
          open-source projects and proprietary enterprise systems from my
          professional experience.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-2 gap-8"
      >
        {portfolioData.projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="card group hover:scale-[1.02] transition-transform duration-200"
          >
            {" "}
            <div className="flex items-start gap-4 mb-4">
              {getProjectIcon(project.title)}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {project.status && getStatusBadge(project.status)}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>
            </div>{" "}
            {/* Technologies */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1.5 bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground text-xs font-medium rounded-lg border border-border/50 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>{" "}
            {/* Highlights */}
            {project.highlights && (
              <div className="mb-4">
                <button
                  onClick={() => toggleProject(index)}
                  className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-3 group"
                >
                  {expandedProjects[index] ? (
                    <ChevronDown
                      size={16}
                      className="group-hover:text-primary"
                    />
                  ) : (
                    <ChevronRight
                      size={16}
                      className="group-hover:text-primary"
                    />
                  )}
                  Key Highlights ({project.highlights.length})
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: expandedProjects[index] ? "auto" : 0,
                    opacity: expandedProjects[index] ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <ul className="space-y-2 pl-6">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li
                        key={highlightIndex}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            )}
            {/* Project Links */}
            <div className="flex gap-3 pt-4 border-t border-border">
              {getGithubDisplay(project)}

              {project.instagramUrl && (
                <a
                  href={project.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Instagram size={16} />
                  Instagram
                </a>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Additional Projects Note */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-16 card text-center"
      >
        <h3 className="text-lg font-semibold mb-2">Want to see more?</h3>
        <p className="text-muted-foreground mb-4">
          Many of my projects are proprietary enterprise systems. I'd be happy
          to discuss my work in more detail during a conversation.
        </p>
        <a
          href="/contact"
          className="btn-primary inline-flex items-center gap-2"
        >
          Get in Touch
          <ExternalLink size={16} />
        </a>
      </motion.div>

      {/* Skills used across projects */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-16"
      >
        <h2 className="text-2xl font-semibold mb-6">Technologies & Tools</h2>
        <div className="space-y-6">
          {Object.entries(portfolioData.skills).map(([category, skills]) => (
            <div key={category} className="card">
              <h3 className="font-semibold mb-3 text-primary">{category}</h3>{" "}
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground text-sm font-medium rounded-lg border border-border/50 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
