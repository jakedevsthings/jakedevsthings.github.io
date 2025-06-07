import { motion } from "framer-motion";
import { MapPin, Calendar, Building, Users, TrendingUp } from "lucide-react";
import { portfolioData } from "../data/portfolio";

const Experience = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="section-container py-16">
      <motion.div {...fadeInUp}>
        <h1 className="text-4xl font-bold mb-4">Experience</h1>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
          My professional journey spanning from semiconductor manufacturing to
          enterprise API platforms, with a focus on scalability, security, and
          team leadership.
        </p>
      </motion.div>

      {/* Experience Timeline */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative"
      >
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

        {portfolioData.experience.map((job, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative mb-12 md:ml-16"
          >
            {/* Timeline dot */}
            <div className="absolute -left-16 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>

            <div className="card">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-primary mb-1">
                    {job.position}
                  </h3>
                  <div className="flex items-center gap-2 text-lg font-medium mb-2">
                    <Building size={18} className="text-muted-foreground" />
                    {job.company}
                  </div>
                </div>
                <div className="flex flex-col lg:items-end gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    {job.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    {job.location}
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {job.highlights.map((highlight, highlightIndex) => (
                  <div key={highlightIndex} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground leading-relaxed">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>

              {/* Key achievements callout for current role */}
              {index === 0 && (
                <div className="mt-6 p-4 bg-accent/20 rounded-lg border border-accent/30">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="text-primary" size={18} />
                    <span className="font-medium text-primary">
                      Key Achievements
                    </span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Clients Supported:</span>
                      <span className="text-muted-foreground ml-2">
                        50-100 internal/external
                      </span>
                    </div>
                    <div>
                      <span className="font-medium">Stakeholders:</span>
                      <span className="text-muted-foreground ml-2">
                        100+ collaborated with
                      </span>
                    </div>
                    <div>
                      <span className="font-medium">
                        Performance Improvement:
                      </span>
                      <span className="text-muted-foreground ml-2">
                        30% deployment time reduction
                      </span>
                    </div>
                    <div>
                      <span className="font-medium">Team Leadership:</span>
                      <span className="text-muted-foreground ml-2">
                        30-person org-wide initiative
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Education Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-16"
      >
        <h2 className="text-2xl font-semibold mb-8">Education</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {portfolioData.education.map((edu, index) => (
            <div key={index} className="card">
              <div className="flex items-start gap-3 mb-4">
                <Users className="text-primary mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-lg">{edu.degree}</h3>
                  {edu.additionalDegree && (
                    <h4 className="font-medium text-muted-foreground">
                      {edu.additionalDegree}
                    </h4>
                  )}
                  {edu.minor && (
                    <p className="text-sm text-muted-foreground">{edu.minor}</p>
                  )}
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Building size={16} className="text-muted-foreground" />
                  <span>{edu.institution}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-muted-foreground" />
                  <span>{edu.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-muted-foreground" />
                  <span>{edu.year}</span>
                </div>
                {edu.details && (
                  <div className="mt-3 p-3 bg-accent/10 rounded border-l-2 border-primary">
                    <p className="text-sm text-muted-foreground">
                      {edu.details}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Career Progression Summary */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-16 card bg-accent/5"
      >
        <h3 className="text-xl font-semibold mb-4">Career Progression</h3>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-primary mb-2">5+</div>
            <div className="text-sm text-muted-foreground">
              Years of Experience
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary mb-2">4</div>
            <div className="text-sm text-muted-foreground">Different Roles</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary mb-2">2</div>
            <div className="text-sm text-muted-foreground">Major Companies</div>
          </div>
        </div>
        <p className="text-muted-foreground text-center mt-6">
          From intern to senior engineer, with progressive responsibility in API
          platforms, cloud automation, and team leadership.
        </p>
      </motion.div>
    </div>
  );
};

export default Experience;
